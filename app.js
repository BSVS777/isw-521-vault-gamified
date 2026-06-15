const STORAGE_KEY = "isw521-vault-study-v1";
const POMO_KEY = "isw521-pomo-pos-v1";
const SANDBOX_KEY = "isw521-sandbox-v1";

const RANKS = [
  { min: 0,    max: 99,       name: "Brote de Piña" },
  { min: 100,  max: 249,      name: "Piñita Promesa" },
  { min: 250,  max: 499,      name: "Cosechador Tropical" },
  { min: 500,  max: 899,      name: "Guerrero Bromelia" },
  { min: 900,  max: 1399,     name: "Barón de la Piña" },
  { min: 1400, max: 1999,     name: "Señor del Jugo Dorado" },
  { min: 2000, max: 2999,     name: "Comandante Ananá" },
  { min: 3000, max: Infinity, name: "Master Piña Supremo" },
];

const DEFAULT_SANDBOX_HTML = `<section class="card">
  <h1>Hola, Vault Study</h1>
  <p>Estoy practicando HTML y CSS.</p>
  <button>Entrar al modo piña</button>
</section>`;

const DEFAULT_SANDBOX_CSS = `body {
  font-family: system-ui, sans-serif;
  background: #10111f;
  color: white;
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
}

.card {
  padding: 2rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, #1f2340, #35235f);
  box-shadow: 0 0 40px rgba(123, 92, 255, 0.35);
}

button {
  border: 0;
  border-radius: 999px;
  padding: 0.75rem 1rem;
  background: #7b5cff;
  color: white;
  font-weight: 700;
  cursor: pointer;
}`;
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const defaultState = {
  player: "BSVS",
  studied: [],
  results: [],
  leaderboard: []
};

let state = loadState();
let activeTopicId = STUDY_DATA.topics[0].id;
let currentQuiz = null;
let activeChartTab = "progreso";

// Multi-topic selection set
let selectedTopicIds = new Set(STUDY_DATA.topics.map(t => t.id));

// --- State helpers ---

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : { ...defaultState };
  } catch (error) {
    console.warn("No se pudo leer localStorage", error);
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function xpTotal() {
  return state.results.reduce((sum, item) => sum + Number(item.xp || 0), 0);
}

function accuracyTotal() {
  const total = state.results.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const correct = state.results.reduce((sum, item) => sum + Number(item.correct || 0), 0);
  return total ? Math.round((correct / total) * 100) : 0;
}

function bestStreak() {
  return state.results.reduce((best, item) => Math.max(best, Number(item.bestStreak || 0)), 0);
}

function getCurrentRank(total) {
  return RANKS.find(r => total >= r.min && total <= r.max) || RANKS[0];
}

function getRankProgress(total) {
  const rank = getCurrentRank(total);
  const idx = RANKS.indexOf(rank);
  if (rank.max === Infinity) {
    return { rank, progress: 100, next: null, remaining: 0 };
  }
  const next = RANKS[idx + 1];
  const span = rank.max - rank.min + 1;
  const progress = Math.min(100, Math.round(((total - rank.min) / span) * 100));
  return { rank, progress, next, remaining: rank.max - total + 1 };
}

function topicById(id) {
  return STUDY_DATA.topics.find(topic => topic.id === id) || STUDY_DATA.topics[0];
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2400);
}

// --- View routing ---

function switchView(viewId) {
  $$(".view").forEach(view => view.classList.toggle("active", view.id === viewId));
  $$(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === viewId));
  const labels = { dashboard: "Vault Study", theory: "Teoría", challenge: "Challenge", stats: "Estadísticas", leaderboard: "Puntajes", sandbox: "Sandbox" };
  $("#viewTitle").textContent = labels[viewId] || "Vault Study";
  $(".topbar .crumb").textContent = viewId === "dashboard" ? "Dashboard" : "Vault / " + labels[viewId];
  document.body.classList.remove("menu-open");
  closeSearch();
}

// --- Dashboard ---

function renderDashboard() {
  const total = xpTotal();
  const { rank, progress, next, remaining } = getRankProgress(total);

  $("#totalXp").textContent = total.toLocaleString("es-CR");
  $("#accuracyMetric").textContent = `${accuracyTotal()}%`;
  $("#bestStreakMetric").textContent = bestStreak();
  $("#attemptsMetric").textContent = state.results.length;
  $("#masteryBadge").textContent = `${state.studied.length}/8 listas`;
  $("#sidebarRank").textContent = `🍍 ${rank.name}`;

  const rankNameEl = $("#rankNameDisplay");
  const rankBarEl = $("#rankProgressBar");
  const rankNextEl = $("#rankNextLabel");
  if (rankNameEl) rankNameEl.textContent = `🍍 ${rank.name}`;
  if (rankBarEl) rankBarEl.style.width = `${progress}%`;
  if (rankNextEl) rankNextEl.textContent = next
    ? `Faltan ${remaining} piñas para ${next.name}`
    : "¡Nivel máximo alcanzado!";

  const last = state.results.at(-1);
  $("#lastUpdated").textContent = last
    ? `Actualizado ${new Date(last.date).toLocaleDateString("es-CR")}`
    : "Sin sesiones todavía";

  renderMissions();
  renderChart();
}

function renderMissions(filter = "") {
  const missionList = $("#missionList");
  const lower = filter.toLowerCase();
  const filtered = STUDY_DATA.topics.filter(topic =>
    !filter ||
    topic.label.toLowerCase().includes(lower) ||
    topic.title.toLowerCase().includes(lower) ||
    topic.tag.toLowerCase().includes(lower)
  );

  if (!filtered.length) {
    missionList.innerHTML = `<p class="search-no-results">Sin resultados para "${filter}".</p>`;
    return;
  }

  missionList.innerHTML = filtered.map((topic, index) => {
    const done = state.studied.includes(topic.id);
    const attempts = state.results.filter(result => result.topicId === topic.id).length;
    return `<div class="mission">
      <div class="mission-icon">${String(STUDY_DATA.topics.indexOf(topic) + 1).padStart(2, "0")}</div>
      <div><strong>${topic.label} · ${topic.title}</strong><small>${topic.tag} · ${attempts} intentos registrados</small></div>
      <span class="status-pill ${done ? "done" : ""}">${done ? "Dominada" : "Pendiente"}</span>
    </div>`;
  }).join("");
}

// --- Chart ---

function renderChart() {
  const chartCard = $(".chart-card");
  const svgEl = chartCard.querySelector(".line-chart");
  const emptyEl = chartCard.querySelector(".chart-empty");

  const recent = state.results.slice(-8);
  const hasData = recent.length > 0;

  let values = [];

  if (activeChartTab === "progreso") {
    if (!hasData) {
      const fallback = [25, 41, 33, 56, 48, 75, 62, 80];
      values = fallback;
    } else {
      values = recent.map(r => Math.round((r.correct / r.total) * 100));
    }
  } else if (activeChartTab === "racha") {
    if (!hasData) {
      showChartEmpty(svgEl, emptyEl, "Sin sesiones todavía", "Completá challenges para ver tu racha.");
      return;
    }
    const maxStreak = Math.max(...recent.map(r => Number(r.bestStreak || 0)), 1);
    values = recent.map(r => Math.round((Number(r.bestStreak || 0) / maxStreak) * 100));
  } else if (activeChartTab === "accuracy") {
    if (!hasData) {
      showChartEmpty(svgEl, emptyEl, "Sin datos de accuracy", "Completá un challenge para ver tus aciertos.");
      return;
    }
    values = recent.map(r => Math.round((r.correct / r.total) * 100));
  }

  // Pad to 8 points
  while (values.length < 8) values.unshift(values[0] || 25);
  const slice = values.slice(-8);

  // Hide empty, show SVG
  if (emptyEl) emptyEl.style.display = "none";
  if (svgEl) svgEl.style.display = "";

  const xs = [40, 135, 230, 325, 420, 515, 610, 690];
  const points = slice.map((value, index) => {
    const y = 175 - (Math.max(0, Math.min(100, value)) / 100) * 135;
    return `${xs[index]},${y.toFixed(1)}`;
  });

  const line = $("#progressLine");
  const dots = $("#chartDots");
  if (line) line.setAttribute("points", points.join(" "));
  if (dots) dots.innerHTML = points.map(pair => {
    const [x, y] = pair.split(",");
    return `<circle class="chart-dot" cx="${x}" cy="${y}" r="5" />`;
  }).join("");
}

function showChartEmpty(svgEl, emptyEl, title, subtitle) {
  if (svgEl) svgEl.style.display = "none";
  if (!emptyEl) {
    const el = document.createElement("div");
    el.className = "chart-empty";
    el.innerHTML = `<span>◌</span><strong>${title}</strong><small>${subtitle}</small>`;
    svgEl.parentNode.insertBefore(el, svgEl.nextSibling);
  } else {
    emptyEl.style.display = "";
    emptyEl.innerHTML = `<span>◌</span><strong>${title}</strong><small>${subtitle}</small>`;
  }
}

// --- Theory ---

function renderTopicTabs(filter = "") {
  const tabs = $("#topicTabs");
  const lower = filter.toLowerCase();
  const filtered = filter
    ? STUDY_DATA.topics.filter(t =>
        t.label.toLowerCase().includes(lower) ||
        t.title.toLowerCase().includes(lower) ||
        t.tag.toLowerCase().includes(lower)
      )
    : STUDY_DATA.topics;

  tabs.innerHTML = filtered.map(topic => `
    <button class="topic-tab ${topic.id === activeTopicId ? "active" : ""}" data-topic="${topic.id}">${topic.label}</button>
  `).join("");
  $$(".topic-tab", tabs).forEach(btn => btn.addEventListener("click", () => {
    activeTopicId = btn.dataset.topic;
    renderTheory();
  }));
}

function renderTheory() {
  renderTopicTabs();
  const topic = topicById(activeTopicId);
  const isStudied = state.studied.includes(topic.id);
  $("#theoryPanel").innerHTML = `
    <div class="theory-top">
      <div>
        <div class="tagline"><span class="badge">${topic.label}</span><span class="badge">${topic.tag}</span><span class="badge">${topic.difficulty}</span></div>
        <h3 class="theory-title">${topic.title}</h3>
        <p class="muted">Diseñado para repasar rápido, entender sin relleno y pasar al challenge cuando ya esté caliente el motor.</p>
      </div>
      <button class="primary-btn" id="markStudied">${isStudied ? "✓ Tema dominado" : "Marcar como dominado"}</button>
    </div>
    <div class="summary-box"><strong>Resumen 30 segundos</strong><p>${topic.summary}</p></div>
    <div class="explain-box"><strong>Explicación humana</strong><p>${topic.explanation}</p></div>
    <h3>Teoría clave</h3>
    <ul class="theory-list">${topic.theory.map(item => `<li>${item}</li>`).join("")}</ul>
    <div class="remember-box"><strong>Recuerda esto</strong><p>${topic.remember}</p></div>
    <div class="summary-box"><strong>Pregunta de examen vibe</strong><p>${topic.examTip}</p></div>
    <div class="term-cloud">${topic.terms.map(term => `<span>${term}</span>`).join("")}</div>
    <div class="toolbar-row">
      <button class="ghost-btn" id="practiceThis">Practicar este tema</button>
      <button class="ghost-btn" data-view-jump="challenge">Ir al challenge</button>
    </div>
  `;
  $("#markStudied").addEventListener("click", () => {
    if (!state.studied.includes(topic.id)) {
      state.studied.push(topic.id);
      saveState();
      toast(`${topic.label} marcada como dominada.`);
      renderAll();
    }
  });
  $("#practiceThis").addEventListener("click", () => {
    selectedTopicIds = new Set([topic.id]);
    switchView("challenge");
    renderChallengeSetup();
  });
  bindViewJumps($("#theoryPanel"));
}

// --- Challenge (multi-topic) ---

function updateChallengeBadge() {
  const badge = $("#challengeBadge");
  if (!badge) return;
  if (!selectedTopicIds.size) {
    badge.textContent = "Basado en tópicos";
    return;
  }
  const pool = buildQuestionPool([...selectedTopicIds]);
  const count = Math.min(10, pool.length);
  badge.textContent = `${count} preguntas disponibles`;
}

function renderChallengeSetup() {
  $("#playerName").value = state.player || "BSVS";

  const container = $("#topicChipsSelect");
  container.innerHTML = STUDY_DATA.topics.map(topic => `
    <button class="topic-chip-btn ${selectedTopicIds.has(topic.id) ? "selected" : ""}" data-tid="${topic.id}">
      ${topic.label}
    </button>
  `).join("");

  $$(".topic-chip-btn", container).forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.tid;
      if (selectedTopicIds.has(id)) {
        selectedTopicIds.delete(id);
        btn.classList.remove("selected");
      } else {
        selectedTopicIds.add(id);
        btn.classList.add("selected");
      }
      $("#noTopicsWarning").classList.toggle("hidden", selectedTopicIds.size > 0);
      updateChallengeBadge();
    });
  });

  updateChallengeBadge();
}

function buildQuestionPool(topicIds) {
  const ids = Array.isArray(topicIds) ? topicIds : [topicIds];
  return ids.flatMap(id => {
    const topic = topicById(id);
    return topic.questions.map(q => ({ ...q, topicId: topic.id, topicLabel: topic.label }));
  });
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function startChallenge(limit = 10) {
  if (selectedTopicIds.size === 0) {
    $("#noTopicsWarning").classList.remove("hidden");
    return;
  }
  const player = ($("#playerName").value || "BSVS").trim().slice(0, 18);
  state.player = player;
  saveState();

  const pool = shuffle(buildQuestionPool([...selectedTopicIds]));
  const questions = pool.slice(0, Math.min(limit, pool.length));
  const topicLabel = selectedTopicIds.size === STUDY_DATA.topics.length
    ? "Todos"
    : [...selectedTopicIds].map(id => topicById(id).label).join(", ");

  currentQuiz = {
    player,
    topicId: selectedTopicIds.size === 1 ? [...selectedTopicIds][0] : "mixed",
    topicLabel,
    questions,
    index: 0,
    correct: 0,
    xp: 0,
    streak: 0,
    bestStreak: 0,
    locked: false
  };
  $("#challengeSetup").classList.add("hidden");
  $("#resultBox").classList.add("hidden");
  $("#quizBox").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const quiz = currentQuiz;
  const question = quiz.questions[quiz.index];
  quiz.locked = false;
  $("#quizProgress").textContent = `Pregunta ${quiz.index + 1}/${quiz.questions.length}`;
  $("#quizScore").textContent = `${quiz.xp} piñas`;
  $("#quizBar").style.width = `${(quiz.index / quiz.questions.length) * 100}%`;
  $("#questionText").textContent = question.q;
  $("#feedback").classList.add("hidden");
  $("#nextQuestion").classList.add("hidden");
  $("#options").innerHTML = question.options.map((option, index) => `
    <button class="option-btn" data-answer="${index}">${String.fromCharCode(65 + index)}. ${option}</button>
  `).join("");
  $$(".option-btn").forEach(btn => btn.addEventListener("click", () => answerQuestion(Number(btn.dataset.answer))));
}

function answerQuestion(selected) {
  const quiz = currentQuiz;
  if (!quiz || quiz.locked) return;
  quiz.locked = true;
  const question = quiz.questions[quiz.index];
  const correct = selected === question.answer;
  const buttons = $$(".option-btn");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.answer) btn.classList.add("correct");
    if (index === selected && !correct) btn.classList.add("wrong");
  });
  if (correct) {
    quiz.correct += 1;
    quiz.streak += 1;
    quiz.bestStreak = Math.max(quiz.bestStreak, quiz.streak);
    quiz.xp += 100;
    if (quiz.streak > 0 && quiz.streak % 3 === 0) quiz.xp += 50;
  } else {
    quiz.streak = 0;
  }
  $("#quizScore").textContent = `${quiz.xp} piñas`;
  const feedback = $("#feedback");
  feedback.innerHTML = `<strong>${correct ? "Correcto. Clean." : "Incorrecto. Ajuste fino."}</strong><br>${question.why}`;
  feedback.classList.remove("hidden");
  $("#nextQuestion").textContent = quiz.index === quiz.questions.length - 1 ? "Finalizar" : "Siguiente";
  $("#nextQuestion").classList.remove("hidden");
}

function nextQuestion() {
  const quiz = currentQuiz;
  if (!quiz) return;
  quiz.index += 1;
  if (quiz.index >= quiz.questions.length) finishChallenge();
  else renderQuestion();
}

function finishChallenge() {
  const quiz = currentQuiz;
  const total = quiz.questions.length;
  const accuracy = Math.round((quiz.correct / total) * 100);
  $("#quizBar").style.width = "100%";

  const prevRank = getCurrentRank(xpTotal());

  const result = {
    player: quiz.player,
    topicId: quiz.topicId,
    topicLabel: quiz.topicLabel,
    correct: quiz.correct,
    total,
    accuracy,
    xp: quiz.xp,
    bestStreak: quiz.bestStreak,
    date: new Date().toISOString()
  };
  state.results.push(result);
  state.leaderboard.push(result);
  state.leaderboard.sort((a, b) => b.xp - a.xp || b.accuracy - a.accuracy || new Date(b.date) - new Date(a.date));
  state.leaderboard = state.leaderboard.slice(0, 30);

  if (quiz.topicId !== "mixed" && quiz.topicId !== "all" && accuracy >= 80 && !state.studied.includes(quiz.topicId)) {
    state.studied.push(quiz.topicId);
  }
  saveState();

  const newRank = getCurrentRank(xpTotal());
  if (newRank.name !== prevRank.name) {
    setTimeout(() => toast(`🍍 ¡Subiste a ${newRank.name}!`), 400);
  }

  $("#quizBox").classList.add("hidden");
  const resultBox = $("#resultBox");
  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <h3>Resultado guardado</h3>
    <div class="stats-grid">
      <div class="stat-card"><span>Piñas 🍍</span><strong>${quiz.xp}</strong></div>
      <div class="stat-card"><span>Correctas</span><strong>${quiz.correct}/${total}</strong></div>
      <div class="stat-card"><span>Accuracy</span><strong>${accuracy}%</strong></div>
      <div class="stat-card"><span>Mejor racha</span><strong>${quiz.bestStreak}</strong></div>
    </div>
    <p class="muted">${accuracy >= 80 ? "Tema dominado. Modo académico: peligroso." : "Buen avance. Repasá la teoría y volvé a pegarle."}</p>
    <div class="setup-grid">
      <button class="primary-btn" id="playAgain">Jugar otra vez</button>
      <button class="ghost-btn" data-view-jump="leaderboard">Ver tabla</button>
    </div>
  `;
  $("#playAgain").addEventListener("click", () => resetChallengeUI());
  bindViewJumps(resultBox);
  currentQuiz = null;
  renderAll();
}

function resetChallengeUI() {
  $("#challengeSetup").classList.remove("hidden");
  $("#quizBox").classList.add("hidden");
  $("#resultBox").classList.add("hidden");
  renderChallengeSetup();
}

// --- Stats ---

function renderStats() {
  const total = xpTotal();
  const { rank, progress, next, remaining } = getRankProgress(total);
  const cards = [
    ["Total Piñas 🍍", total.toLocaleString("es-CR")],
    ["Rango actual", rank.name],
    ["Accuracy", `${accuracyTotal()}%`],
    ["Temas dominados", `${state.studied.length}/8`]
  ];
  $("#statsGrid").innerHTML = cards.map(([label, value]) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`).join("");

  const rankSection = $("#rankSection");
  if (rankSection) {
    rankSection.innerHTML = next
      ? `<article class="panel" style="margin-bottom:18px;padding:18px;">
          <div class="card-head" style="margin-bottom:12px;">
            <h2>Progreso de rango</h2>
            <span class="badge">${rank.name}</span>
          </div>
          <div class="rank-progress-track"><div class="rank-progress-bar" style="width:${progress}%"></div></div>
          <small class="rank-next-label" style="display:block;margin-top:6px;">Faltan <strong>${remaining}</strong> piñas para <strong>${next.name}</strong></small>
        </article>`
      : `<article class="panel" style="margin-bottom:18px;padding:18px;">
          <p style="margin:0;color:var(--accent-2);font-weight:600;">🍍 Master Piña Supremo alcanzado. No hay más arriba.</p>
        </article>`;
  }

  $("#topicProgress").innerHTML = STUDY_DATA.topics.map(topic => {
    const results = state.results.filter(result => result.topicId === topic.id || result.topicId === "all");
    const total = results.reduce((sum, result) => sum + Number(result.total || 0), 0);
    const correct = results.reduce((sum, result) => sum + Number(result.correct || 0), 0);
    const value = total ? Math.round((correct / total) * 100) : (state.studied.includes(topic.id) ? 100 : 0);
    return `<div class="topic-progress-row">
      <strong>${topic.label} · ${topic.tag}</strong>
      <div class="progress-mini"><span style="width:${value}%"></span></div>
      <small>${value}%</small>
    </div>`;
  }).join("");
}

// --- Leaderboard ---

function renderLeaderboard() {
  const rows = $("#leaderboardRows");
  if (!state.leaderboard.length) {
    rows.innerHTML = `<tr><td colspan="6" class="empty-row">Todavía no hay puntajes. El leaderboard está esperando su main character.</td></tr>`;
    return;
  }
  rows.innerHTML = state.leaderboard.map((item, index) => `
    <tr>
      <td><span class="rank-number">${index + 1}</span></td>
      <td>${item.player || "Invitado"}</td>
      <td>${Number(item.xp || 0).toLocaleString("es-CR")}</td>
      <td>${item.accuracy || Math.round((item.correct / item.total) * 100)}%</td>
      <td>${item.topicLabel || "Todos"}</td>
      <td>${new Date(item.date).toLocaleString("es-CR", { dateStyle: "short", timeStyle: "short" })}</td>
    </tr>
  `).join("");
}

// --- Export ---

function exportData() {
  const payload = { exportedAt: new Date().toISOString(), course: STUDY_DATA.course, state };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "isw521-vault-study-progress.json";
  link.click();
  URL.revokeObjectURL(url);
}

// --- Search ---

let searchOpen = false;

function openSearch() {
  const bar = $("#searchBar");
  const btn = $("#searchToggle");
  bar.classList.remove("hidden");
  btn.classList.add("active-search");
  btn.setAttribute("aria-expanded", "true");
  searchOpen = true;
  const input = $("#searchInput");
  input.value = "";
  input.focus();
}

function closeSearch() {
  const bar = $("#searchBar");
  const btn = $("#searchToggle");
  bar.classList.add("hidden");
  btn.classList.remove("active-search");
  btn.setAttribute("aria-expanded", "false");
  searchOpen = false;
  renderMissions();
  renderTopicTabs();
}

function handleSearch(query) {
  const lower = query.trim().toLowerCase();
  // Filter missions in dashboard
  renderMissions(lower);
  // Filter theory tabs if visible
  const theoryView = $("#theory");
  if (theoryView && theoryView.classList.contains("active")) {
    renderTopicTabs(lower);
  }
}

// --- Focus mode ---

function activateFocusMode() {
  // Show and start Pomodoro
  const widget = $("#pomodoroWidget");
  widget.classList.remove("hidden");
  if (!pomo.running) pomo.start();

  // Switch to theory
  switchView("theory");

  // Inject focus banner
  const content = $("#theory .content, #theory");
  const existing = document.getElementById("focusBanner");
  if (!existing) {
    const banner = document.createElement("div");
    banner.id = "focusBanner";
    banner.className = "focus-mode-banner";
    banner.innerHTML = `⚡ <strong>Focus Mode activo</strong> — El Pomodoro está corriendo. Leé, entendé, después challenge.
      <button style="margin-left:auto;background:none;border:none;color:var(--muted);cursor:pointer;font-size:0.8rem;" onclick="this.parentElement.remove()">✕</button>`;
    const theoryView = $("#theory");
    theoryView.insertBefore(banner, theoryView.firstChild);
  }

  toast("Focus Mode activado — 25 min en el reloj.");
}

// --- Pomodoro ---

const pomo = {
  interval: null,
  remaining: 25 * 60,
  total: 25 * 60,
  running: false,
  activeMin: 25,

  loadPosition() {
    try {
      return JSON.parse(localStorage.getItem(POMO_KEY)) || {};
    } catch {
      return {};
    }
  },

  savePosition(data) {
    try {
      const current = this.loadPosition();
      localStorage.setItem(POMO_KEY, JSON.stringify({ ...current, ...data }));
    } catch {}
  },

  applyStoredPosition() {
    const pos = this.loadPosition();
    const widget = $("#pomodoroWidget");
    if (!widget) return;
    if (pos.x != null && pos.y != null) {
      widget.style.right = "auto";
      widget.style.bottom = "auto";
      widget.style.left = Math.max(0, Math.min(pos.x, window.innerWidth - 100)) + "px";
      widget.style.top = Math.max(0, Math.min(pos.y, window.innerHeight - 80)) + "px";
    }
    if (pos.w) widget.style.width = Math.max(240, pos.w) + "px";
    if (pos.h) widget.style.height = Math.max(220, pos.h) + "px";
  },

  setTime(minutes) {
    this.stop();
    this.activeMin = minutes;
    this.remaining = minutes * 60;
    this.total = minutes * 60;
    $$(".pomo-preset").forEach(b => b.classList.toggle("active", Number(b.dataset.min) === minutes));
    this.render();
  },

  start() {
    if (this.running) return;
    this.running = true;
    this.interval = setInterval(() => {
      this.remaining = Math.max(0, this.remaining - 1);
      if (this.remaining === 0) {
        this.stop();
        this.onComplete();
      }
      this.render();
    }, 1000);
    this.renderBtn();
  },

  pause() {
    this.running = false;
    clearInterval(this.interval);
    this.interval = null;
    this.renderBtn();
  },

  stop() {
    this.running = false;
    clearInterval(this.interval);
    this.interval = null;
    this.renderBtn();
  },

  reset() {
    this.stop();
    this.remaining = this.total;
    this.render();
  },

  onComplete() {
    toast(`⏱ ¡Pomodoro de ${this.activeMin} min completado! Tomá un respiro.`);
  },

  render() {
    const m = String(Math.floor(this.remaining / 60)).padStart(2, "0");
    const s = String(this.remaining % 60).padStart(2, "0");
    const timeEl = $("#pomoTime");
    if (timeEl) timeEl.textContent = `${m}:${s}`;
    const bar = $("#pomoProgressBar");
    if (bar) {
      const pct = this.total > 0 ? ((this.total - this.remaining) / this.total) * 100 : 0;
      bar.style.width = `${pct}%`;
    }
  },

  renderBtn() {
    const btn = $("#pomoToggle");
    if (btn) btn.textContent = this.running ? "Pausar" : "Iniciar";
  },

  initDrag() {
    const widget = $("#pomodoroWidget");
    const handle = $("#pomoHandle");
    if (!widget || !handle) return;

    let dragging = false;
    let ox = 0, oy = 0;

    handle.addEventListener("mousedown", e => {
      if (e.target.closest(".pomo-close")) return;
      dragging = true;
      const rect = widget.getBoundingClientRect();
      ox = e.clientX - rect.left;
      oy = e.clientY - rect.top;
      widget.style.right = "auto";
      widget.style.bottom = "auto";
      e.preventDefault();
    });

    document.addEventListener("mousemove", e => {
      if (!dragging) return;
      let x = e.clientX - ox;
      let y = e.clientY - oy;
      x = Math.max(0, Math.min(x, window.innerWidth - widget.offsetWidth));
      y = Math.max(0, Math.min(y, window.innerHeight - widget.offsetHeight));
      widget.style.left = x + "px";
      widget.style.top = y + "px";
    });

    document.addEventListener("mouseup", () => {
      if (dragging) {
        dragging = false;
        const rect = widget.getBoundingClientRect();
        pomo.savePosition({ x: rect.left, y: rect.top });
      }
    });

    // Touch drag for mobile is disabled (widget goes full-width there)

    // Resize observer to save dimensions
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(() => {
        if (!dragging) {
          pomo.savePosition({ w: widget.offsetWidth, h: widget.offsetHeight });
        }
      });
      ro.observe(widget);
    }
  },

  init() {
    this.applyStoredPosition();
    this.render();
    this.renderBtn();
    this.initDrag();

    // Preset buttons
    $$(".pomo-preset").forEach(btn => {
      btn.addEventListener("click", () => pomo.setTime(Number(btn.dataset.min)));
    });

    // Custom time
    $("#pomoSetCustom").addEventListener("click", () => {
      const val = parseInt($("#pomoCustomInput").value, 10);
      if (val >= 1 && val <= 120) {
        $$(".pomo-preset").forEach(b => b.classList.remove("active"));
        pomo.setTime(val);
      }
    });
    $("#pomoCustomInput").addEventListener("keydown", e => {
      if (e.key === "Enter") $("#pomoSetCustom").click();
    });

    // Toggle start/pause
    $("#pomoToggle").addEventListener("click", () => {
      if (pomo.running) pomo.pause();
      else pomo.start();
    });

    // Reset
    $("#pomoReset").addEventListener("click", () => pomo.reset());

    // Close
    $("#pomoClose").addEventListener("click", () => {
      pomo.pause();
      $("#pomodoroWidget").classList.add("hidden");
    });
  }
};

// --- Sandbox ---

let sandboxDebounce = null;

function sandboxRun() {
  const html = $("#sandboxHtml").value;
  const css = $("#sandboxCss").value;
  const safeHtml = html.replace(/<script[\s\S]*?<\/script>/gi, "<!-- js disabled -->");
  $("#sandboxPreview").srcdoc =
    `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${safeHtml}</body></html>`;
  saveSandbox();
}

function saveSandbox() {
  try {
    localStorage.setItem(SANDBOX_KEY, JSON.stringify({
      html: $("#sandboxHtml").value,
      css: $("#sandboxCss").value
    }));
  } catch {}
}

function loadSandbox() {
  try {
    const raw = localStorage.getItem(SANDBOX_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      $("#sandboxHtml").value = data.html ?? DEFAULT_SANDBOX_HTML;
      $("#sandboxCss").value = data.css ?? DEFAULT_SANDBOX_CSS;
    } else {
      $("#sandboxHtml").value = DEFAULT_SANDBOX_HTML;
      $("#sandboxCss").value = DEFAULT_SANDBOX_CSS;
    }
  } catch {
    $("#sandboxHtml").value = DEFAULT_SANDBOX_HTML;
    $("#sandboxCss").value = DEFAULT_SANDBOX_CSS;
  }
  sandboxRun();
}

function initSandbox() {
  loadSandbox();
  $("#sandboxRun").addEventListener("click", sandboxRun);
  $("#sandboxClear").addEventListener("click", () => {
    $("#sandboxHtml").value = "";
    $("#sandboxCss").value = "";
    $("#sandboxPreview").srcdoc = "";
    saveSandbox();
  });
  $("#sandboxReset").addEventListener("click", () => {
    $("#sandboxHtml").value = DEFAULT_SANDBOX_HTML;
    $("#sandboxCss").value = DEFAULT_SANDBOX_CSS;
    sandboxRun();
  });
  const onInput = () => {
    clearTimeout(sandboxDebounce);
    sandboxDebounce = setTimeout(sandboxRun, 600);
  };
  $("#sandboxHtml").addEventListener("input", onInput);
  $("#sandboxCss").addEventListener("input", onInput);
}

// --- Utilities ---

function bindViewJumps(root = document) {
  $$("[data-view-jump]", root).forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.viewJump)));
}

function renderAll() {
  renderDashboard();
  renderTheory();
  renderChallengeSetup();
  renderStats();
  renderLeaderboard();
}

// --- Chart tab wiring ---

function initChartTabs() {
  const buttons = $$(".segmented button");
  const tabKeys = ["progreso", "racha", "accuracy"];
  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      activeChartTab = tabKeys[i];
      renderChart();
    });
  });
}

// --- Events ---

function initEvents() {
  $$(".nav-item").forEach(item => item.addEventListener("click", () => switchView(item.dataset.view)));
  bindViewJumps();

  $("#mobileMenu").addEventListener("click", () => document.body.classList.toggle("menu-open"));
  $("#sidebarOverlay").addEventListener("click", () => document.body.classList.remove("menu-open"));

  $("#startChallenge").addEventListener("click", () => startChallenge(10));
  $("#quickChallenge").addEventListener("click", () => startChallenge(5));
  $("#nextQuestion").addEventListener("click", nextQuestion);
  $("#exportBtn").addEventListener("click", exportData);

  // Focus button — activates Focus Mode
  $("#focusBtn").addEventListener("click", activateFocusMode);

  $("#resetBtn").addEventListener("click", () => {
    if (confirm("¿Resetear todo el progreso local?")) {
      state = { ...defaultState };
      saveState();
      resetChallengeUI();
      renderAll();
      toast("Progreso reseteado.");
    }
  });

  $("#clearLeaderboard").addEventListener("click", () => {
    if (confirm("¿Vaciar solo la tabla de puntajes?")) {
      state.leaderboard = [];
      saveState();
      renderLeaderboard();
      toast("Tabla vaciada.");
    }
  });

  // Challenge topic chips - static controls (only wired once here)
  $("#selectAllTopics").addEventListener("click", () => {
    selectedTopicIds = new Set(STUDY_DATA.topics.map(t => t.id));
    $$(".topic-chip-btn").forEach(b => b.classList.add("selected"));
    $("#noTopicsWarning").classList.add("hidden");
    updateChallengeBadge();
  });
  $("#clearTopics").addEventListener("click", () => {
    selectedTopicIds.clear();
    $$(".topic-chip-btn").forEach(b => b.classList.remove("selected"));
    $("#noTopicsWarning").classList.remove("hidden");
    updateChallengeBadge();
  });

  // Search
  $("#searchToggle").addEventListener("click", () => {
    if (searchOpen) closeSearch();
    else openSearch();
  });
  $("#searchClose").addEventListener("click", closeSearch);
  $("#searchInput").addEventListener("input", e => handleSearch(e.target.value));

  // Keyboard
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.body.classList.remove("menu-open");
      if (searchOpen) closeSearch();
    }
  });

  // Chart tabs
  initChartTabs();

  // Pomodoro
  pomo.init();
}

document.addEventListener("DOMContentLoaded", () => {
  initEvents();
  renderAll();
  initSandbox();
});
