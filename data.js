const STUDY_DATA = {
  "course": "ISW-521 Desarrollo Web",
  "title": "Vault Study · Repaso Gamificado",
  "source": "ISW521_Resumen_Examen_TDAH.docx",
  "topics": [
    {
      "id": "clase-1",
      "label": "Clase 1",
      "title": "Arquitectura y Fundamentos de la Web",
      "tag": "Fundamentos",
      "difficulty": "Base",
      "summary": "Internet es la infraestructura física global; la Web es un servicio que corre sobre Internet. El modelo cliente-servidor sostiene la comunicación: el cliente pide, el servidor responde.",
      "explanation": "Pensalo como logística: Internet es la carretera, la Web es un tipo de vehículo que usa esa carretera. Cuando escribís una URL, el navegador actúa como cliente y solicita un recurso específico al servidor.",
      "theory": [
        "Internet ≠ World Wide Web. Internet conecta redes; la Web conecta documentos y recursos mediante HTTP/HTTPS.",
        "Una URL se divide en esquema/protocolo, autenticación opcional, host, puerto, ruta, query string y fragmento.",
        "El fragmento (#seccion) sirve como ancla dentro del navegador y no se envía al servidor.",
        "Intranet es una red privada interna. Extranet abre parte de esa red a socios externos bajo control."
      ],
      "remember": "URL = dirección exacta de un recurso. Cliente pide → servidor sirve. Internet no es sinónimo de Web.",
      "examTip": "Si preguntan si Internet y Web son lo mismo, la respuesta fina es NO: infraestructura vs servicio.",
      "terms": [
        "Internet",
        "WWW",
        "URL",
        "Cliente-servidor",
        "Intranet",
        "Extranet"
      ],
      "questions": [
        {
          "q": "¿Cuál afirmación diferencia correctamente Internet y la Web?",
          "options": [
            "Internet es un navegador y la Web es el cableado",
            "Internet es infraestructura; la Web es un servicio sobre ella",
            "Internet solo sirve para páginas y Web para correos",
            "Son exactamente lo mismo"
          ],
          "answer": 1,
          "why": "Internet es la red física/lógica global; la Web usa esa red mediante HTTP/HTTPS."
        },
        {
          "q": "En el modelo cliente-servidor, ¿qué hace el cliente?",
          "options": [
            "Procesa todas las bases de datos",
            "Hace solicitudes de recursos",
            "Cifra certificados TLS",
            "Aloja múltiples dominios"
          ],
          "answer": 1,
          "why": "El cliente, como el navegador, realiza la request. El servidor devuelve la response."
        },
        {
          "q": "¿Qué parte de una URL NO se envía al servidor?",
          "options": [
            "El host",
            "El puerto",
            "El fragmento #",
            "La ruta"
          ],
          "answer": 2,
          "why": "El fragmento se usa en el navegador para moverse a una sección interna."
        },
        {
          "q": "¿Qué representa una intranet?",
          "options": [
            "Red pública global",
            "Red privada interna de una organización",
            "Portal público de noticias",
            "Servidor DNS raíz"
          ],
          "answer": 1,
          "why": "La intranet es privada y normalmente solo para personal autorizado."
        },
        {
          "q": "En la analogía del restaurante, el servidor sería...",
          "options": [
            "El cliente que pide",
            "La cocina que prepara y devuelve el plato",
            "La mesa del restaurante",
            "El menú impreso"
          ],
          "answer": 1,
          "why": "El servidor recibe la solicitud, la procesa y devuelve una respuesta."
        }
      ]
    },
    {
      "id": "clase-2",
      "label": "Clase 2",
      "title": "TCP/IP, HTTP, HTTPS/TLS",
      "tag": "Protocolos",
      "difficulty": "Alta frecuencia",
      "summary": "TCP garantiza entrega confiable y ordenada. HTTP permite pedir recursos web. HTTPS es HTTP protegido por TLS. HTTP evolucionó de 1.1 a 2 y 3 para mejorar velocidad y eficiencia.",
      "explanation": "TCP es el compa responsable: no deja paquetes botados. HTTP define cómo se piden recursos. TLS mete privacidad, autenticidad e integridad para que la comunicación no viaje desnuda por la red.",
      "theory": [
        "TCP usa conexión orientada a estado y handshake antes de enviar datos.",
        "HTTP es stateless: no recuerda automáticamente una petición anterior.",
        "HTTPS = HTTP dentro de un túnel cifrado por TLS, normalmente en puerto 443.",
        "HTTP/2 usa multiplexing sobre una conexión. HTTP/3 usa QUIC sobre UDP."
      ],
      "remember": "TCP = entrega confiable. HTTP = protocolo de aplicación. HTTPS = HTTP + TLS. 2xx éxito, 4xx cliente, 5xx servidor.",
      "examTip": "No confundás 401 con 403: 401 requiere autenticación; 403 significa autenticado pero sin permiso.",
      "terms": [
        "TCP",
        "HTTP",
        "HTTPS",
        "TLS",
        "QUIC",
        "Códigos HTTP"
      ],
      "questions": [
        {
          "q": "¿Qué garantiza TCP sobre IP?",
          "options": [
            "Entrega confiable, orden y retransmisión",
            "Diseño visual responsivo",
            "Creación de commits",
            "Validación de formularios HTML"
          ],
          "answer": 0,
          "why": "TCP añade fiabilidad: orden, control de conexión y retransmisión."
        },
        {
          "q": "HTTPS se puede resumir como...",
          "options": [
            "HTML + CSS",
            "HTTP + TLS",
            "TCP + Git",
            "UDP + DOM"
          ],
          "answer": 1,
          "why": "HTTPS es HTTP protegido por TLS."
        },
        {
          "q": "¿Qué familia de códigos HTTP representa errores del cliente?",
          "options": [
            "1xx",
            "2xx",
            "4xx",
            "5xx"
          ],
          "answer": 2,
          "why": "4xx indica errores atribuibles a la petición del cliente."
        },
        {
          "q": "¿Qué versión de HTTP usa QUIC sobre UDP?",
          "options": [
            "HTTP/0.9",
            "HTTP/1.1",
            "HTTP/2",
            "HTTP/3"
          ],
          "answer": 3,
          "why": "HTTP/3 cambia la base hacia QUIC sobre UDP."
        },
        {
          "q": "¿Cuál método HTTP se usa principalmente para leer un recurso?",
          "options": [
            "GET",
            "POST",
            "PATCH",
            "DELETE"
          ],
          "answer": 0,
          "why": "GET solicita/lee recursos sin modificarlos."
        }
      ]
    },
    {
      "id": "clase-3",
      "label": "Clase 3",
      "title": "Infraestructura, Servidores y Arquitecturas Web",
      "tag": "Infraestructura",
      "difficulty": "Media",
      "summary": "Un servidor web escucha peticiones en puertos. Apache suele trabajar por procesos/hilos; Nginx es asíncrono y eficiente en alta concurrencia. Virtual Hosting permite servir varios dominios desde un servidor.",
      "explanation": "Los puertos son puertas numeradas. El servidor lee la puerta y el encabezado Host para decidir qué servicio o sitio entregar. Nginx es como un recepcionista turbo con agenda; Apache es más tradicional, pero flexible.",
      "theory": [
        "Puerto 80: HTTP. Puerto 443: HTTPS. Puerto 22: SSH.",
        "Virtual Hosting usa el header Host para saber qué dominio servir.",
        "Apache crea procesos/hilos por conexión en modelos clásicos; consume más RAM con alta concurrencia.",
        "Nginx usa arquitectura event-driven/asíncrona, útil como proxy reverso y para contenido estático."
      ],
      "remember": "Puerto 80 = HTTP, 443 = HTTPS. Virtual Hosting = muchos dominios en un servidor. Apache = por hilo/proceso. Nginx = event-driven.",
      "examTip": "Si aparece Host: campus.utn.ac.cr en una request, pensá en Virtual Hosting basado en nombre.",
      "terms": [
        "Puertos",
        "Virtual Hosting",
        "Apache",
        "Nginx",
        "VPS",
        "Cloud"
      ],
      "questions": [
        {
          "q": "¿Qué puerto se asocia por defecto con HTTPS?",
          "options": [
            "21",
            "22",
            "80",
            "443"
          ],
          "answer": 3,
          "why": "HTTPS usa normalmente el puerto 443."
        },
        {
          "q": "¿Qué header permite el Virtual Hosting basado en nombre?",
          "options": [
            "Host",
            "Cookie",
            "Accept-Language",
            "Cache-Control"
          ],
          "answer": 0,
          "why": "El servidor lee Host para saber qué dominio debe servir."
        },
        {
          "q": "¿Qué caracteriza mejor a Nginx?",
          "options": [
            "Event-driven y eficiente en memoria",
            "Solo funciona con .htaccess",
            "No puede servir estáticos",
            "Usa commits semánticos"
          ],
          "answer": 0,
          "why": "Nginx maneja muchas conexiones con un modelo asíncrono/event-driven."
        },
        {
          "q": "¿Cuál opción da un servidor virtual con recursos dedicados?",
          "options": [
            "Shared Hosting",
            "VPS",
            "Fragment URL",
            "CSSOM"
          ],
          "answer": 1,
          "why": "VPS significa Virtual Private Server."
        },
        {
          "q": "¿Qué puerto se asocia comúnmente con SSH?",
          "options": [
            "22",
            "25",
            "443",
            "3306"
          ],
          "answer": 0,
          "why": "SSH usa el puerto 22 por defecto."
        }
      ]
    },
    {
      "id": "clase-4",
      "label": "Clase 4",
      "title": "Control de Versiones, Git y Herramientas Modernas",
      "tag": "Git",
      "difficulty": "Práctica",
      "summary": "Git guarda snapshots del código. El flujo base es Working Directory → Staging Area → Repository. Las ramas son ligeras y los commits deben ser claros, idealmente con Conventional Commits.",
      "explanation": "Git no es una carpeta mágica: es una línea del tiempo. Primero editás, luego preparás con add y finalmente guardás con commit. El staging area es el carrito antes de pagar; si metés todo sin mirar, después lloran los logs.",
      "theory": [
        "Working Directory: donde editás archivos.",
        "Staging Area: zona de preparación para el próximo commit.",
        "Repository: historia permanente dentro de .git.",
        "Conventional Commits usa tipo(alcance): descripción, por ejemplo fix(auth): corregir logout."
      ],
      "remember": "git add prepara. git commit guarda. Nunca versionés node_modules, .env, build/dist ni logs locales.",
      "examTip": "Si preguntan qué hace git add, no digás 'guardar'. Guarda el commit; add solo prepara.",
      "terms": [
        "Working Directory",
        "Staging Area",
        "Repository",
        "Branch",
        "Commit",
        ".gitignore"
      ],
      "questions": [
        {
          "q": "¿Cuál es el orden correcto de estados en Git?",
          "options": [
            "Repository → Working Directory → Staging",
            "Working Directory → Staging Area → Repository",
            "Staging → Repository → Working Directory",
            "Commit → Push → CSSOM"
          ],
          "answer": 1,
          "why": "El flujo base es editar, preparar y confirmar."
        },
        {
          "q": "¿Qué hace git add archivo.js?",
          "options": [
            "Elimina el historial",
            "Prepara cambios para el próximo commit",
            "Sube cambios a GitHub",
            "Crea una rama remota"
          ],
          "answer": 1,
          "why": "git add mueve cambios al staging area."
        },
        {
          "q": "¿Cuál commit sigue Conventional Commits?",
          "options": [
            "arreglos varios",
            "fix(auth): corregir validación de logout",
            "cambios finales",
            "subiendo cosas"
          ],
          "answer": 1,
          "why": "Tiene tipo, alcance opcional y descripción clara."
        },
        {
          "q": "¿Qué archivo normalmente NO debe versionarse?",
          "options": [
            "index.html",
            "styles.css",
            ".env",
            "README.md"
          ],
          "answer": 2,
          "why": ".env suele contener secretos o configuraciones locales."
        },
        {
          "q": "¿Qué es una rama en Git?",
          "options": [
            "Un puntero ligero a un commit",
            "Una copia completa obligatoria del sistema operativo",
            "Un puerto de red",
            "Un selector CSS"
          ],
          "answer": 0,
          "why": "Las branches son referencias ligeras, no clones completos."
        }
      ]
    },
    {
      "id": "clase-5",
      "label": "Clase 5",
      "title": "HTML Profundo: Renderizado, Semántica y Formularios",
      "tag": "HTML",
      "difficulty": "Base web",
      "summary": "El navegador convierte HTML/CSS en píxeles mediante DOM, CSSOM, Render Tree, Layout y Paint. HTML semántico usa etiquetas con significado. Los formularios HTML5 ya traen validaciones útiles.",
      "explanation": "El navegador no 've' una página bonita de una vez: construye árboles, calcula cajas y pinta. Usar etiquetas semánticas es dejarle señales claras al navegador, buscadores y tecnologías asistivas. Divitis: enfermedad común, tratable con <main>, <section> y criterio.",
      "theory": [
        "DOM: árbol del HTML. CSSOM: árbol de reglas CSS.",
        "Render Tree combina DOM y CSSOM solo con nodos visibles.",
        "Layout/Reflow calcula posiciones y tamaños. Paint dibuja los píxeles.",
        "HTML semántico mejora accesibilidad, SEO y mantenibilidad.",
        "Inputs como email, number, date, range y url aportan validación/comportamiento nativo."
      ],
      "remember": "DOM + CSSOM → Render Tree → Layout → Paint. Usá la etiqueta correcta para el contenido, no solo la que se vea bien.",
      "examTip": "<main> debe usarse una sola vez por página. <section> debería tener un heading.",
      "terms": [
        "DOM",
        "CSSOM",
        "Render Tree",
        "Layout",
        "Paint",
        "HTML semántico"
      ],
      "questions": [
        {
          "q": "¿Qué representa el DOM?",
          "options": [
            "El árbol del HTML",
            "La caché de imágenes",
            "Un servidor web",
            "Un formato de commit"
          ],
          "answer": 0,
          "why": "DOM significa Document Object Model: la estructura de nodos del HTML."
        },
        {
          "q": "¿Qué paso calcula posiciones y tamaños exactos?",
          "options": [
            "Paint",
            "Layout/Reflow",
            "TLS",
            "git merge"
          ],
          "answer": 1,
          "why": "Layout/Reflow calcula geometría antes de pintar."
        },
        {
          "q": "¿Cuál etiqueta representa el contenido principal de la página?",
          "options": [
            "<div>",
            "<main>",
            "<span>",
            "<br>"
          ],
          "answer": 1,
          "why": "<main> identifica el contenido principal y debe ser único por página."
        },
        {
          "q": "¿Qué input valida formato de correo automáticamente?",
          "options": [
            "type='text'",
            "type='email'",
            "type='hidden'",
            "type='range'"
          ],
          "answer": 1,
          "why": "type='email' activa validación nativa de correo."
        },
        {
          "q": "¿Qué se excluye del Render Tree?",
          "options": [
            "Nodos visibles",
            "Nodos con display:none",
            "Texto dentro de p",
            "Imágenes con alt"
          ],
          "answer": 1,
          "why": "El Render Tree solo incluye nodos que se renderizan visualmente."
        }
      ]
    },
    {
      "id": "clase-6",
      "label": "Clase 6",
      "title": "Accesibilidad WCAG, CSS Cascada y Box Model",
      "tag": "CSS/A11y",
      "difficulty": "Clave",
      "summary": "WCAG se resume en POUR: Perceptible, Operable, Comprensible y Robusto. CSS decide conflictos con cascada y especificidad. El Box Model organiza content, padding, border y margin.",
      "explanation": "Accesibilidad no es extra: es que la web funcione para más personas. En CSS, la especificidad es el tribunal supremo: ID le gana a clase, clase le gana a etiqueta. En fin, por eso el ID se cree manager aunque nadie lo invitó.",
      "theory": [
        "WCAG 2.1 organiza criterios testables bajo POUR.",
        "Contraste mínimo AA: 4.5:1 para texto normal y 3:1 para texto grande.",
        "Regla #1 de ARIA: no usar ARIA si existe HTML semántico nativo.",
        "Especificidad: ID > clase > etiqueta. Inline e !important pueden romper la cascada.",
        "Box Model: content, padding, border, margin. border-box incluye padding y border dentro del width."
      ],
      "remember": "POUR = Perceptible, Operable, Comprensible, Robusto. Box Model de adentro hacia afuera: content → padding → border → margin.",
      "examTip": "Si ves role='button' en un div pudiendo usar <button>, eso huele a parche ARIA.",
      "terms": [
        "WCAG",
        "POUR",
        "ARIA",
        "Especificidad",
        "Box Model",
        "border-box"
      ],
      "questions": [
        {
          "q": "¿Qué significa la R de POUR?",
          "options": [
            "Rápido",
            "Robusto",
            "Renderizado",
            "Ruta"
          ],
          "answer": 1,
          "why": "R es Robusto: compatible con tecnologías actuales y futuras."
        },
        {
          "q": "¿Cuál es la primera regla práctica de ARIA?",
          "options": [
            "Usar ARIA en todos los divs",
            "No usar ARIA si HTML nativo basta",
            "Reemplazar botones por spans",
            "Ocultar todo con aria-hidden"
          ],
          "answer": 1,
          "why": "El HTML semántico nativo suele ser más accesible que parches ARIA."
        },
        {
          "q": "¿Qué selector tiene mayor especificidad?",
          "options": [
            "p",
            ".card",
            "#login",
            "*"
          ],
          "answer": 2,
          "why": "Un ID supera a clases y etiquetas."
        },
        {
          "q": "¿Cuál es el orden del Box Model de adentro hacia afuera?",
          "options": [
            "margin → border → padding → content",
            "content → padding → border → margin",
            "padding → content → margin → border",
            "border → margin → content → padding"
          ],
          "answer": 1,
          "why": "El contenido está al centro, luego padding, border y margin."
        },
        {
          "q": "¿Qué hace box-sizing: border-box?",
          "options": [
            "Incluye padding y border dentro del width",
            "Elimina el margin",
            "Convierte todo en grid",
            "Aumenta la especificidad"
          ],
          "answer": 0,
          "why": "border-box simplifica el cálculo del tamaño total del elemento."
        }
      ]
    },
    {
      "id": "clase-7",
      "label": "Clase 7",
      "title": "CSS Flexbox: El Motor del Layout Moderno",
      "tag": "Flexbox",
      "difficulty": "Muy preguntable",
      "summary": "Flexbox distribuye elementos en una dimensión. El main axis depende de flex-direction. justify-content alinea en el main axis; align-items en el cross axis. Los hijos se controlan con grow, shrink y basis.",
      "explanation": "Flexbox es para ordenar una fila o una columna sin hacer rituales raros con floats. La clave no es memorizar: es ubicar el eje principal. Cuando cambia flex-direction, cambia el tablero.",
      "theory": [
        "display:flex activa Flexbox en los hijos directos.",
        "flex-direction: row define main axis horizontal; column lo vuelve vertical.",
        "justify-content alinea sobre el main axis.",
        "align-items alinea sobre el cross axis.",
        "gap separa ítems sin depender de márgenes manuales."
      ],
      "remember": "Flexbox = 1D. justify-content = main axis. align-items = cross axis. flex-direction cambia los ejes.",
      "examTip": "Si flex-direction es column, justify-content controla lo vertical. Ojito ahí, examen modo ninja.",
      "terms": [
        "display:flex",
        "main axis",
        "cross axis",
        "justify-content",
        "align-items",
        "flex-grow"
      ],
      "questions": [
        {
          "q": "¿Qué activa Flexbox en un contenedor?",
          "options": [
            "position:flex",
            "display:flex",
            "layout:flexbox",
            "grid:flex"
          ],
          "answer": 1,
          "why": "display:flex convierte los hijos directos en flex items."
        },
        {
          "q": "¿Qué propiedad alinea ítems en el main axis?",
          "options": [
            "align-items",
            "justify-content",
            "grid-area",
            "box-sizing"
          ],
          "answer": 1,
          "why": "justify-content controla la alineación sobre el eje principal."
        },
        {
          "q": "Si flex-direction es column, el main axis es...",
          "options": [
            "Horizontal",
            "Vertical",
            "Diagonal",
            "Inexistente"
          ],
          "answer": 1,
          "why": "column cambia el eje principal a vertical."
        },
        {
          "q": "¿Qué propiedad separa ítems flex de forma limpia?",
          "options": [
            "gap",
            "float",
            "z-index",
            "host"
          ],
          "answer": 0,
          "why": "gap crea espacio entre ítems sin márgenes manuales."
        },
        {
          "q": "¿Qué propiedad permite que un hijo crezca con el espacio disponible?",
          "options": [
            "flex-grow",
            "aria-label",
            "http-status",
            "query-string"
          ],
          "answer": 0,
          "why": "flex-grow define la proporción de crecimiento del flex item."
        }
      ]
    },
    {
      "id": "clase-8",
      "label": "Clase 8",
      "title": "CSS Grid Layout: El Tablero Bidimensional",
      "tag": "Grid",
      "difficulty": "Layout pro",
      "summary": "Grid controla filas y columnas al mismo tiempo. Se define con grid-template-columns/rows, líneas, áreas y unidades como fr. Es ideal para estructura general de página.",
      "explanation": "Grid es el tablero completo: filas y columnas bajo control. Flexbox ordena componentes; Grid diseña estructuras. Lo top es combinarlos: Grid para macro-layout, Flexbox para micro-layout.",
      "theory": [
        "Grid = layout bidimensional: filas y columnas.",
        "grid-template-columns y grid-template-rows definen pistas explícitas.",
        "fr reparte el espacio disponible proporcionalmente.",
        "grid-template-areas permite dibujar layouts legibles por nombre.",
        "La grid implícita aparece cuando hay más ítems que celdas definidas."
      ],
      "remember": "Grid = 2D. fr = espacio proporcional. Lines empiezan en 1 y pueden usar negativos. Template areas = layout visual y mantenible.",
      "examTip": "¿Filas y columnas a la vez? Grid. ¿Una sola dimensión? Flexbox. Ese matchup sale fijo.",
      "terms": [
        "display:grid",
        "fr",
        "Grid Line",
        "Grid Area",
        "auto-fill",
        "auto-fit"
      ],
      "questions": [
        {
          "q": "¿Cuándo conviene usar Grid sobre Flexbox?",
          "options": [
            "Cuando solo hay una fila de botones",
            "Cuando se controlan filas y columnas a la vez",
            "Cuando se necesita un commit",
            "Cuando se envía un formulario"
          ],
          "answer": 1,
          "why": "Grid está diseñado para layouts 2D."
        },
        {
          "q": "¿Qué representa la unidad fr?",
          "options": [
            "Archivo remoto",
            "Fracción del espacio disponible",
            "Formulario requerido",
            "Fragmento URL"
          ],
          "answer": 1,
          "why": "fr distribuye el espacio libre de forma proporcional."
        },
        {
          "q": "¿Qué técnica permite dibujar el layout con nombres?",
          "options": [
            "grid-template-areas",
            "aria-hidden",
            "git branch",
            "http keep-alive"
          ],
          "answer": 0,
          "why": "grid-template-areas define zonas con nombres como header, sidebar, main."
        },
        {
          "q": "¿Qué es un Grid Item?",
          "options": [
            "El padre con display:grid",
            "Un hijo directo del Grid Container",
            "Un certificado TLS",
            "Un puerto lógico"
          ],
          "answer": 1,
          "why": "Los hijos directos del contenedor grid son grid items."
        },
        {
          "q": "¿Qué crea el navegador si hay más ítems que celdas explícitas?",
          "options": [
            "Una intranet",
            "Grid implícita",
            "Un branch remoto",
            "Un error 404 siempre"
          ],
          "answer": 1,
          "why": "La implicit grid aloja contenido extra automáticamente."
        }
      ]
    }
  ]
};
