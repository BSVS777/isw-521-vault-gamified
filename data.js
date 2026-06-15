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
      "summary": "Internet es la infraestructura global de redes; la Web es un servicio que corre sobre esa infraestructura usando HTTP/HTTPS. La comunicación web se apoya en el modelo cliente-servidor: el cliente solicita y el servidor responde.",
      "explanation": "La clave es pensar por capas: Internet es la carretera, la WWW es uno de los servicios que viajan por ella. Una app puede usar HTTP sobre una red privada o pública; por eso distinguir Internet, Web, intranet y extranet evita respuestas vagas en examen y decisiones técnicas flojas en proyectos reales.",
      "theory": [
        "Internet ≠ World Wide Web. Internet conecta redes mediante TCP/IP; la Web conecta recursos hipertextuales usando HTTP/HTTPS.",
        "La WWW es un subconjunto de Internet. Otros servicios sobre Internet incluyen correo, SSH, FTP, VoIP y streaming.",
        "Web 1.0 fue principalmente estática y de solo lectura; Web 2.0 agregó interacción, usuarios creando contenido, APIs y plataformas; Web 3.0 se asocia con web semántica y propuestas descentralizadas/blockchain.",
        "En cliente-servidor, el cliente inicia la solicitud (browser, app móvil, Postman, fetch) y el servidor escucha, procesa y devuelve recursos como HTML, JSON o imágenes.",
        "Ventajas del cliente-servidor: centralización de lógica, control de seguridad, mantenimiento simplificado y posibilidad de escalar con más servidores.",
        "Limitaciones del cliente-servidor: punto único de falla si no hay redundancia, cuello de botella de carga, latencia por viajes de red y costos de infraestructura.",
        "W3C estandariza tecnologías de la Web como HTML, CSS, SVG, WCAG y WebAssembly; IETF define protocolos base como TCP/IP, HTTP, TLS, DNS, SMTP y SSH.",
        "URL es una dirección completa para localizar un recurso. URI identifica un recurso de forma general; URL es una URI con ubicación; URN identifica por nombre persistente sin indicar necesariamente dónde está.",
        "Partes típicas de una URL: esquema/protocolo, autenticación opcional, host/dominio, puerto, ruta, query string y fragmento.",
        "El query string se envía al servidor como parámetros; el fragmento con # se queda en el navegador y sirve como ancla interna.",
        "DNS traduce nombres de dominio legibles para humanos a direcciones IP. Sin DNS, el navegador no sabe a qué servidor conectarse por nombre.",
        "Internet es pública; intranet es privada para una organización; extranet expone parte de una red privada a actores externos controlados, como proveedores o socios."
      ],
      "remember": "Internet = infraestructura. Web = servicio sobre Internet. Cliente pide, servidor responde. W3C define tecnologías web; IETF define protocolos de red. URL completa = protocolo + host + puerto + ruta + query + fragmento.",
      "examTip": "Si el caso dice 'HTTP sobre Internet pero solo para empleados', no caigás en la trampa: usa Web y usa Internet, pero con acceso restringido; normalmente sería una intranet web.",
      "terms": [
        "Internet",
        "World Wide Web",
        "Web 1.0",
        "Web 2.0",
        "Web 3.0",
        "Cliente",
        "Servidor",
        "W3C",
        "IETF",
        "URL",
        "URI",
        "URN",
        "DNS",
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
      "summary": "TCP/IP organiza la comunicación de red. IP enruta paquetes con esfuerzo máximo pero sin garantías; TCP añade conexión, orden, ACK y retransmisión. HTTP pide recursos; HTTPS protege HTTP con TLS.",
      "explanation": "IP es el mensajero que intenta llegar; TCP es el obsesivo responsable que verifica orden y entrega. HTTP define la conversación web; TLS mete privacidad, autenticación e integridad para que la información no viaje en modo papelito pegado en la espalda.",
      "theory": [
        "OSI es un modelo de referencia de 7 capas; TCP/IP es el modelo práctico de Internet con capas de Aplicación, Transporte, Internet y Acceso a Red.",
        "IP trabaja en la capa de Internet/Red: identifica hosts y enruta datagramas. Es best-effort: no garantiza entrega, orden ni retransmisión.",
        "Un datagrama IP contiene encabezado y payload. Cada datagrama puede tomar rutas distintas y llegar desordenado o perderse.",
        "TCP trabaja en transporte y añade fiabilidad sobre IP: conexión, orden, detección de errores, ACK, retransmisión y control de flujo.",
        "El 3-Way Handshake establece una conexión TCP: SYN, SYN-ACK, ACK. Antes de enviar datos, ambos extremos acuerdan la comunicación.",
        "TCP segmenta datos grandes en partes numeradas; el receptor los reordena y confirma con ACK. Si un ACK no llega, TCP retransmite.",
        "HTTP es un protocolo de aplicación para solicitar y responder recursos. Es stateless: cada request es independiente salvo que uses cookies, sesiones o tokens.",
        "Métodos HTTP clave: GET lee, POST crea/envía datos, PUT reemplaza completo, PATCH modifica parcial, DELETE elimina, HEAD trae solo cabeceras, OPTIONS pregunta capacidades.",
        "Códigos HTTP por familia: 2xx éxito, 3xx redirección/caché, 4xx error del cliente, 5xx error del servidor. 401 pide autenticación; 403 indica sin permiso; 404 no encontrado.",
        "HTTP/1.1 usa texto y keep-alive; HTTP/2 usa formato binario, multiplexing y compresión de cabeceras; HTTP/3 usa QUIC sobre UDP para reducir bloqueos y mejorar redes inestables.",
        "HTTPS = HTTP dentro de TLS, normalmente en puerto 443. TLS aporta cifrado, autenticación del servidor mediante certificado e integridad de los datos.",
        "Ciclo típico de una solicitud HTTPS: DNS resuelve dominio → TCP handshake → TLS handshake → HTTP request cifrado → response cifrada → navegador procesa el recurso."
      ],
      "remember": "IP intenta entregar; TCP garantiza orden y retransmisión; HTTP conversa; TLS protege. HTTPS = HTTP + TLS. 2xx bien, 4xx cliente, 5xx servidor.",
      "examTip": "Si la pregunta menciona QUIC/UDP, pensá en HTTP/3. Si menciona multiplexing sobre una conexión, pensá en HTTP/2. Si dice certificado, cifrado e integridad, es TLS/HTTPS.",
      "terms": [
        "OSI",
        "TCP/IP",
        "IP",
        "Datagrama",
        "TTL",
        "TCP",
        "SYN",
        "ACK",
        "HTTP",
        "HTTPS",
        "TLS",
        "QUIC",
        "GET",
        "POST",
        "401",
        "403",
        "404",
        "500"
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
      "summary": "Un servidor web no es solo una máquina: también es un proceso/daemon que escucha en un puerto y responde peticiones. Virtual Hosting permite varios dominios en una IP; Apache y Nginx resuelven concurrencia de formas distintas.",
      "explanation": "Cuando alguien dice 'se cayó el servidor', puede ser la VM, el proceso, el puerto o la configuración. El examen puede jugar con esa ambigüedad. Pensá en edificio y portero: la VM puede estar viva aunque Nginx haya muerto tomando café eterno.",
      "theory": [
        "Hardware/VM es la máquina física o virtual con CPU, RAM, disco y red. Daemon/proceso es el software en ejecución, como nginx, apache o node, que atiende solicitudes.",
        "Un servidor web escucha peticiones HTTP/HTTPS en un puerto, procesa la solicitud y escribe una respuesta en el socket.",
        "Flujo básico: el sistema operativo arranca, el daemon se registra, hace bind() a un puerto, entra en listen, recibe conexiones y responde por sockets.",
        "Puertos comunes: 80 HTTP, 443 HTTPS, 22 SSH, 3000/8080 desarrollo o HTTP alterno, 3306 MySQL y 5432 PostgreSQL.",
        "EADDRINUSE significa que un puerto ya está ocupado por otro proceso. En desarrollo suele pasar cuando queda un servidor anterior corriendo.",
        "Virtual Hosting basado en nombre permite servir varios dominios con la misma IP y puerto. El navegador envía el header Host y el servidor decide qué sitio servir.",
        "El archivo /etc/hosts o su equivalente en Windows actúa como DNS local: permite simular dominios locales apuntando a una IP sin comprar dominios.",
        "Si Nginx no encuentra un server_name coincidente, normalmente cae en el primer server o en el default_server configurado.",
        "Apache en modelos clásicos usa procesos o hilos por conexión; es flexible y útil con .htaccess, pero puede consumir más RAM con alta concurrencia.",
        "Nginx usa arquitectura asíncrona/event-driven: maneja muchas conexiones con pocos procesos, ideal para proxy reverso, balanceo, estáticos y alta concurrencia.",
        "Shared hosting comparte servidor entre muchos sitios; VPS da recursos virtuales dedicados; dedicated usa máquina física exclusiva; cloud agrega elasticidad; serverless/edge ejecuta funciones sin administrar servidores directamente.",
        "Same-Origin Policy restringe cómo una página puede leer recursos de otro origen. CORS permite excepciones controladas mediante cabeceras del servidor."
      ],
      "remember": "Servidor = máquina + proceso. Puerto 80 HTTP, 443 HTTPS. bind reclama puerto; listen espera conexiones. Virtual Hosting usa Host. Apache = hilos/procesos; Nginx = event-driven.",
      "examTip": "Si la VM responde ping pero nginx está failed, no reiniciés todo a ciegas: primero revisá/reiniciá el daemon y su configuración. Si aparece Host, pensá en virtual hosting.",
      "terms": [
        "VM",
        "Daemon",
        "bind()",
        "listen",
        "Socket",
        "Puerto",
        "EADDRINUSE",
        "Virtual Hosting",
        "Host header",
        "/etc/hosts",
        "Apache",
        "Nginx",
        "VPS",
        "Cloud",
        "Serverless",
        "CORS",
        "Same-Origin Policy"
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
      "summary": "Git es un VCS distribuido que guarda snapshots del proyecto. El flujo base es Working Directory → Staging Area → Repository. Branches, commits semánticos y .gitignore son clave para trabajar limpio.",
      "explanation": "Git no es solo memorizar comandos: es entender dónde vive cada cambio. Si sabés diferenciar working, staging y repository, ya desactivaste la mitad de los errores clásicos. El resto es disciplina: commits claros, ramas pequeñas y no subir basura regenerable.",
      "theory": [
        "Un VCS registra cambios a lo largo del tiempo para recuperar versiones anteriores con significado. No es un backup simple: es historial estructurado.",
        "VCS centralizado como SVN depende de un servidor único; VCS distribuido como Git permite que cada clon tenga el historial completo y trabaje offline.",
        "Git guarda snapshots del árbol del proyecto. Si un archivo no cambia, reutiliza punteros a objetos existentes; por eso muchas operaciones locales son rápidas.",
        ".git/ es el repositorio real: contiene objetos, referencias, configuración y HEAD. Si se borra .git/, se pierde el historial local.",
        "Working Directory es lo que editás en disco; Staging Area o index es lo preparado para el próximo commit; Repository es la historia permanente dentro de .git/.",
        "git status muestra el estado; git add prepara cambios; git commit guarda un snapshot; git diff compara cambios no preparados; git diff --staged compara lo preparado contra el último commit.",
        "git add -p permite staging parcial por fragmentos. Es útil para commits atómicos cuando modificaste varias cosas en un mismo archivo.",
        "Conventional Commits usa tipo(scope): descripción. Ejemplos: feat(auth): add login, fix(ui): repair modal, docs: update readme.",
        "Una branch es un puntero liviano a un commit, no una copia completa del proyecto. Crear ramas es barato e instantáneo.",
        "Fast-forward merge avanza el puntero cuando no hay divergencia. 3-way merge combina ramas divergentes usando base común, rama actual y rama entrante.",
        "Un conflicto ocurre cuando Git no puede decidir qué cambio conservar. Se resuelve editando el archivo, marcando la resolución con git add y confirmando.",
        "git fetch descarga cambios remotos sin mezclarlos; git pull descarga y además integra mediante merge o rebase según configuración.",
        ".gitignore evita versionar archivos regenerables o sensibles: node_modules/, .env, dist/, build/, logs y metadatos locales.",
        "package.json describe scripts y dependencias; lock files fijan versiones exactas; node_modules se regenera y no debe subirse. Vite usa ESM nativos y HMR para actualizar rápido en desarrollo."
      ],
      "remember": "Git = snapshots distribuidos. Working Directory → Staging → Repository. fetch trae; pull trae e integra. Branch = puntero liviano. Nunca subás node_modules ni .env.",
      "examTip": "Si el commit dice 'cambios' o 'listo', está mal para un equipo. Si dice fix(auth): corregir validación de logout, tiene forma de Conventional Commit.",
      "terms": [
        "VCS",
        "Centralizado",
        "Distribuido",
        ".git",
        "Snapshot",
        "Working Directory",
        "Staging Area",
        "Repository",
        "git add -p",
        "Conventional Commits",
        "Branch",
        "Fast-forward",
        "3-way merge",
        "Conflict",
        "fetch",
        "pull",
        ".gitignore",
        "package.json",
        "lock file",
        "Vite",
        "HMR"
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
      "summary": "El navegador transforma HTML y CSS en píxeles: parsing, DOM, CSSOM, Render Tree, Layout/Reflow y Paint. HTML semántico da significado real al contenido y los formularios nativos aportan accesibilidad y validación.",
      "explanation": "El HTML no se 'dibuja' mágicamente: primero se convierte en árboles y luego en cajas pintadas. Si el HTML está mal o todo es div, el navegador intenta arreglarlo, pero los lectores de pantalla, buscadores y futuros devs lloran en silencio.",
      "theory": [
        "Parsing es cuando el navegador lee bytes/texto HTML y los convierte en tokens y nodos organizados en el DOM.",
        "El DOM es un modelo en memoria del documento, no el archivo original. Si JS cambia el DOM, el archivo fuente no cambia automáticamente.",
        "El CSS se parsea en CSSOM. Luego DOM + CSSOM forman el Render Tree, que incluye solo nodos visibles; display:none no entra al render tree.",
        "Layout o Reflow calcula posiciones y tamaños; Paint dibuja píxeles. Cambios al DOM o a dimensiones pueden causar reflow, que suele ser más costoso que repaint.",
        "<!DOCTYPE html> debe ir al inicio. Sin DOCTYPE, el navegador puede activar Quirks Mode y renderizar con reglas antiguas e impredecibles.",
        "<html lang='es'> declara idioma; <head> contiene metadatos como charset, title y CSS; <body> contiene lo visible de la página.",
        "HTML semántico significa usar etiquetas según significado, no apariencia. Un <nav> sin CSS puede verse como un div, pero comunica navegación a máquinas y tecnologías asistivas.",
        "Etiquetas clave: header encabezado, nav navegación, main contenido principal único, article contenido autónomo, section grupo temático, aside contenido tangencial, footer cierre o enlaces secundarios.",
        "figure y figcaption asocian contenido visual con descripción. time con datetime ayuda a que fechas sean legibles por máquinas.",
        "Evitar div-soup: si existe una etiqueta nativa con significado, usala antes de inventar un div con clase bonita.",
        "Los formularios nativos combinan label, input, select, textarea y button. Un label bien asociado mejora accesibilidad y usabilidad.",
        "Tipos HTML5 como email, url, number, date, time, range, color, search y file aportan validación, teclado adecuado en móvil o controles nativos.",
        "Las tablas deben usarse para datos tabulares, con th para encabezados y estructura clara. No son para maquetar layouts.",
        "Multimedia nativa como img, audio, video y source permite contenido visual/sonoro; siempre considerar texto alternativo, controles y compatibilidad."
      ],
      "remember": "HTML → DOM; CSS → CSSOM; DOM + CSSOM → Render Tree → Layout → Paint. DOCTYPE evita Quirks Mode. Semántica = significado, no decoración. Label + input bien hechos valen oro.",
      "examTip": "Si ves un div con role='button' donde podía ir <button>, sospechá. Si falta DOCTYPE, pensá en Quirks Mode. Si preguntan por display:none, no entra al Render Tree.",
      "terms": [
        "Parsing",
        "DOM",
        "CSSOM",
        "Render Tree",
        "Layout",
        "Reflow",
        "Paint",
        "Repaint",
        "DOCTYPE",
        "Quirks Mode",
        "HTML semántico",
        "div-soup",
        "header",
        "nav",
        "main",
        "article",
        "section",
        "aside",
        "label",
        "input",
        "table",
        "multimedia"
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
      "summary": "WCAG 2.1 organiza accesibilidad en POUR. CSS decide qué regla gana mediante cascada y especificidad. El Box Model define cómo se calcula cada caja: content, padding, border y margin.",
      "explanation": "Accesibilidad no es 'extra bonito': es que la interfaz pueda percibirse, operarse, entenderse y resistir tecnologías asistivas. CSS, por otro lado, es una pelea ordenada: gana la regla con mayor peso, salvo que alguien lance un !important como granada.",
      "theory": [
        "WCAG 2.1 es un estándar internacional de accesibilidad con criterios comprobables. Sus cuatro principios son POUR.",
        "Perceptible: el contenido debe poder percibirse, por ejemplo con texto alternativo, subtítulos y contraste suficiente.",
        "Operable: la interfaz debe poder usarse, incluyendo navegación con teclado, foco visible y tiempo suficiente.",
        "Comprensible: el contenido y comportamiento deben ser claros, predecibles y con ayuda ante errores.",
        "Robusto: el contenido debe funcionar con tecnologías actuales y futuras, como lectores de pantalla.",
        "Contraste mínimo WCAG AA: 4.5:1 para texto normal y 3:1 para texto grande. No es gusto visual; es criterio medible.",
        "Primera regla de ARIA: no uses ARIA si HTML nativo resuelve el problema. Un <button> real suele ser mejor que un div con role='button'.",
        "ARIA puede aportar labels, estados como aria-expanded y ocultar decoración con aria-hidden, pero mal usado puede empeorar accesibilidad.",
        "La especificidad CSS se puede pensar como ID > clase/atributo/pseudoclase > etiqueta. Inline styles pesan más que selectores normales.",
        "!important rompe la cascada y debe evitarse salvo casos muy controlados. En producción puede volver el CSS una pelea de cuchillos.",
        "Box Model de adentro hacia afuera: content, padding, border, margin. El padding está dentro del borde; el margin está fuera.",
        "Con content-box, width mide solo el contenido. Con box-sizing: border-box, width incluye content + padding + border, facilitando layouts predecibles.",
        "Variables CSS o custom properties se declaran con --nombre y se usan con var(--nombre), normalmente desde :root para colores, espacios y fuentes."
      ],
      "remember": "POUR = Perceptible, Operable, Comprensible, Robusto. Especificidad: inline > ID > clase > etiqueta. Box Model: content → padding → border → margin. border-box simplifica.",
      "examTip": "Si hay una etiqueta HTML nativa correcta, usala antes de ARIA. Si una regla no gana, revisá especificidad antes de disparar !important como si fuera confeti.",
      "terms": [
        "WCAG",
        "POUR",
        "Perceptible",
        "Operable",
        "Comprensible",
        "Robusto",
        "Contraste",
        "ARIA",
        "aria-label",
        "aria-expanded",
        "aria-hidden",
        "Especificidad",
        "!important",
        "Box Model",
        "content-box",
        "border-box",
        "Variables CSS"
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
      "summary": "Flexbox es un sistema de layout unidimensional: organiza elementos en fila o columna. La clave está en entender main axis, cross axis y cómo flex-direction cambia ambos.",
      "explanation": "Flexbox no es una lista de propiedades al azar; es un tablero con dos ejes. Primero identificás el eje principal y luego decidís cómo distribuir o alinear. Ahí deja de sentirse magia negra y empieza a obedecer.",
      "theory": [
        "display:flex activa Flexbox en un contenedor; sus hijos directos se vuelven flex items.",
        "Flexbox trabaja en una dimensión principal: fila o columna. Es ideal para navbars, grupos de botones, cards en fila y alineación de componentes.",
        "Main axis es el eje principal definido por flex-direction. Cross axis es el eje perpendicular.",
        "flex-direction: row usa eje principal horizontal; row-reverse invierte dirección; column usa eje principal vertical; column-reverse invierte verticalmente.",
        "justify-content distribuye items sobre el main axis: flex-start, flex-end, center, space-between, space-around y space-evenly.",
        "align-items alinea items sobre el cross axis: stretch, flex-start, flex-end, center o baseline.",
        "Si flex-direction es column, justify-content pasa a controlar lo vertical y align-items lo horizontal. Esa es la trampa clásica.",
        "flex-wrap permite que los items salten a varias líneas cuando no caben; nowrap mantiene todo en una sola línea.",
        "gap define espacio entre items sin tener que poner margins manuales. Es más limpio para layouts modernos.",
        "flex-grow controla cuánto crece un item si sobra espacio; flex-shrink cuánto puede encogerse; flex-basis define su tamaño base.",
        "flex: grow shrink basis es shorthand. flex: 1 normalmente permite que un item ocupe espacio disponible de forma flexible.",
        "align-self permite cambiar la alineación de un item específico sin afectar a los demás.",
        "order cambia el orden visual, pero no el orden real del HTML; usarlo con cuidado por accesibilidad y lectura lógica."
      ],
      "remember": "Flexbox = 1D. display:flex activa. justify-content = main axis. align-items = cross axis. flex-direction cambia el eje. gap evita margins ninja.",
      "examTip": "Antes de responder sobre justify-content o align-items, preguntate: ¿flex-direction es row o column? Ahí se gana o se pierde media pregunta.",
      "terms": [
        "Flexbox",
        "Flex container",
        "Flex item",
        "Main axis",
        "Cross axis",
        "flex-direction",
        "justify-content",
        "align-items",
        "flex-wrap",
        "gap",
        "flex-grow",
        "flex-shrink",
        "flex-basis",
        "flex",
        "align-self",
        "order"
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
      "summary": "CSS Grid es layout bidimensional: controla filas y columnas al mismo tiempo. Se define con tracks, líneas, áreas, unidades fr y funciones como repeat() y minmax().",
      "explanation": "Grid es el tablero completo; Flexbox es una fila o columna dentro de ese tablero. Para estructuras de página, Grid manda. Para componentes internos, Flexbox sigue siendo el pana. Juntos no compiten: hacen combo legendario.",
      "theory": [
        "Grid trabaja en dos dimensiones: filas y columnas. Es ideal para layout general de páginas, grillas de contenido y estructuras con áreas claras.",
        "Flexbox se usa para una dimensión; Grid para dos. En proyectos reales se combinan: Grid para macro-layout y Flexbox dentro de componentes.",
        "Grid container es el elemento con display:grid. Grid items son sus hijos directos.",
        "Grid line son las líneas que separan tracks; se numeran desde 1 y también pueden referirse con negativos como -1 para la última línea.",
        "Grid track es el espacio entre dos líneas: una fila o columna. Grid cell es la intersección mínima entre fila y columna. Grid area es un rectángulo de una o más celdas.",
        "Grid explícito es el que definís con grid-template-columns y grid-template-rows. Grid implícito lo crea el navegador cuando hay más contenido que celdas definidas.",
        "grid-template-columns define columnas; grid-template-rows define filas. gap separa tracks sin usar margins manuales.",
        "La unidad fr reparte espacio disponible proporcionalmente. 1fr no es 1px ni 1%; es una fracción del espacio libre.",
        "repeat(n, valor) evita repetir manualmente tracks. repeat(3, 1fr) crea tres columnas iguales.",
        "minmax(min, max) define un tamaño mínimo y máximo. Es útil para layouts responsivos sin media queries excesivas.",
        "auto-fill crea tantas columnas como quepan; auto-fit también, pero colapsa pistas vacías y suele ajustar mejor cards responsivas.",
        "grid-column y grid-row posicionan items por líneas. span permite ocupar varias columnas o filas desde la posición actual.",
        "grid-template-areas permite dibujar el layout con nombres como header, sidebar, main y footer. Es legible y muy mantenible.",
        "grid-auto-flow controla cómo se colocan items implícitos: row, column o dense para intentar rellenar huecos.",
        "justify-items/align-items alinean contenido dentro de celdas; justify-content/align-content alinean el grid completo dentro del contenedor; justify-self/align-self afectan un item específico."
      ],
      "remember": "Grid = 2D. Filas + columnas. fr reparte espacio libre. Lines empiezan en 1 y -1 apunta al final. template areas dibuja el layout. Grid y Flexbox se combinan, no se pelean.",
      "examTip": "Si la pregunta pide controlar filas Y columnas, respondé Grid. Si solo habla de distribuir elementos en una fila o columna, probablemente es Flexbox.",
      "terms": [
        "CSS Grid",
        "Grid container",
        "Grid item",
        "Grid line",
        "Grid track",
        "Grid cell",
        "Grid area",
        "Explicit grid",
        "Implicit grid",
        "grid-template-columns",
        "grid-template-rows",
        "fr",
        "repeat()",
        "minmax()",
        "auto-fill",
        "auto-fit",
        "grid-column",
        "grid-row",
        "span",
        "grid-template-areas",
        "grid-auto-flow"
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
