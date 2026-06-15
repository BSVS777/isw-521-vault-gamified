const STUDY_DATA = {
  "course": "ISW-521 Desarrollo Web",
  "title": "Vault Study · Repaso Gamificado",
  "source": "ISW521_Resumen_Examen_TDAH.docx + presentaciones curadas clases 1-5",
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
          "why": "Internet es la red global de comunicación; la Web es un servicio que usa HTTP/HTTPS sobre esa red.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "comparison"
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
          "why": "El cliente inicia la comunicación solicitando recursos; el servidor procesa y responde.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
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
          "why": "El fragmento se usa en el navegador para saltar a una sección interna de la página.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
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
          "why": "Una intranet es una red privada usada dentro de una organización.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
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
          "why": "El servidor recibe la solicitud, la procesa y devuelve una respuesta.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "Si una app usa HTTP sobre Internet pero solo la ven empleados de una institución, ¿qué combinación describe mejor el caso?",
          "options": [
            "Usa Internet y Web, pero con acceso restringido",
            "No usa Web porque no es pública",
            "Usa solo DNS, no HTTP",
            "Es Web 3.0 automáticamente"
          ],
          "answer": 0,
          "why": "HTTP/HTTPS pertenece a la Web, y puede viajar sobre Internet aunque el acceso esté restringido.",
          "difficulty": "medium",
          "source": "clase-1-slides",
          "type": "scenario"
        },
        {
          "q": "¿Cuál organismo se asocia más directamente con estándares como HTML, CSS y WCAG?",
          "options": [
            "IETF",
            "W3C",
            "ICANN",
            "GitHub"
          ],
          "answer": 1,
          "why": "El W3C estandariza tecnologías de la Web como HTML, CSS, SVG y accesibilidad web.",
          "difficulty": "easy",
          "source": "clase-1-slides",
          "type": "definition"
        },
        {
          "q": "¿Cuál organismo se asocia más directamente con protocolos como TCP/IP, HTTP, TLS, DNS y SMTP?",
          "options": [
            "W3C",
            "IETF",
            "Mozilla",
            "Vercel"
          ],
          "answer": 1,
          "why": "La IETF define protocolos técnicos de Internet mediante RFC.",
          "difficulty": "medium",
          "source": "clase-1-slides",
          "type": "comparison"
        },
        {
          "q": "¿Qué describe mejor a la Web 2.0?",
          "options": [
            "Páginas HTML estáticas de solo lectura",
            "Usuarios que leen, escriben, comentan y generan contenido",
            "Apps basadas únicamente en blockchain",
            "Red sin servidores"
          ],
          "answer": 1,
          "why": "La Web 2.0 se caracteriza por interacción social, APIs, contenido generado por usuarios y plataformas.",
          "difficulty": "medium",
          "source": "clase-1-slides",
          "type": "definition"
        },
        {
          "q": "En una URL, ¿para qué sirve el query string?",
          "options": [
            "Para identificar el protocolo",
            "Para enviar parámetros como clave=valor",
            "Para cambiar el DNS del dominio",
            "Para crear un certificado TLS"
          ],
          "answer": 1,
          "why": "El query string agrega parámetros a la solicitud, por ejemplo ?page=2 o ?search=html.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Cuál escenario representa mejor una extranet?",
          "options": [
            "Un sitio público abierto a cualquiera",
            "Una red interna sin ningún acceso externo",
            "Un portal controlado para proveedores externos",
            "Un navegador sin conexión"
          ],
          "answer": 2,
          "why": "La extranet extiende parte de una intranet a usuarios externos autorizados.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "scenario"
        },
        {
          "q": "Un usuario dice: 'se cayó Internet', pero ping funciona y solo fallan las páginas web. ¿Qué interpretación es más precisa?",
          "options": [
            "Falló toda la infraestructura física de Internet",
            "Puede haber un problema de Web, DNS o HTTP, no necesariamente de Internet completo",
            "El navegador se convirtió en servidor",
            "La URL dejó de tener fragmento"
          ],
          "answer": 1,
          "why": "La capa de red puede seguir funcionando mientras fallan DNS, HTTP o el servidor web.",
          "difficulty": "master-pina",
          "source": "clase-1-slides",
          "type": "trap"
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
          "why": "TCP añade fiabilidad encima de IP: conexión, orden, ACKs y retransmisión.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
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
          "why": "HTTPS es HTTP protegido dentro de un túnel TLS.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
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
          "why": "Los códigos 4xx indican problemas en la petición del cliente.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
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
          "why": "HTTP/3 usa QUIC sobre UDP para reducir ciertos bloqueos y mejorar redes móviles.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
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
          "why": "GET solicita recursos sin modificarlos.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué describe mejor a IP?",
          "options": [
            "Garantiza orden perfecto de paquetes",
            "Identifica hosts y enruta datagramas con esfuerzo máximo, sin garantizar entrega",
            "Cifra todo el tráfico web",
            "Crea ramas en Git"
          ],
          "answer": 1,
          "why": "IP hace enrutamiento best-effort: puede perder, desordenar o fragmentar datagramas.",
          "difficulty": "medium",
          "source": "clase-2-slides",
          "type": "definition"
        },
        {
          "q": "¿Para qué sirve el TTL en un encabezado IP?",
          "options": [
            "Para impedir que un paquete circule eternamente",
            "Para elegir el color del botón",
            "Para validar formularios",
            "Para guardar sesiones HTTP"
          ],
          "answer": 0,
          "why": "TTL limita la vida del paquete; cada salto lo reduce para evitar bucles infinitos.",
          "difficulty": "medium",
          "source": "clase-2-slides",
          "type": "definition"
        },
        {
          "q": "En el 3-Way Handshake, ¿cuál secuencia es correcta?",
          "options": [
            "ACK → SYN → FIN",
            "SYN → SYN-ACK → ACK",
            "GET → POST → DELETE",
            "TLS → HTML → CSS"
          ],
          "answer": 1,
          "why": "TCP establece conexión con SYN, luego SYN-ACK y finalmente ACK.",
          "difficulty": "easy",
          "source": "clase-2-slides",
          "type": "definition"
        },
        {
          "q": "¿Qué significa que HTTP sea stateless?",
          "options": [
            "Que recuerda automáticamente todas las peticiones anteriores",
            "Que cada petición es independiente si no se usa una técnica externa como cookies o sesiones",
            "Que solo funciona sin servidor",
            "Que no puede usar TLS"
          ],
          "answer": 1,
          "why": "HTTP no guarda estado por defecto; el estado se maneja con mecanismos adicionales.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué ventaja principal tiene HTTP/2 frente a HTTP/1.1?",
          "options": [
            "Usa commits semánticos",
            "Permite multiplexing de varias peticiones en una sola conexión",
            "Elimina totalmente la necesidad de DNS",
            "Solo permite GET"
          ],
          "answer": 1,
          "why": "HTTP/2 puede manejar múltiples streams en una conexión, reduciendo el costo de abrir muchas conexiones.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "comparison"
        },
        {
          "q": "Si un usuario está autenticado pero no tiene permiso para ver un recurso, ¿qué código encaja mejor?",
          "options": [
            "200",
            "401",
            "403",
            "500"
          ],
          "answer": 2,
          "why": "403 Forbidden indica que el usuario puede estar autenticado, pero no autorizado.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "scenario"
        },
        {
          "q": "¿Cuál orden resume mejor una solicitud web segura típica?",
          "options": [
            "DNS → TCP → TLS → HTTP request → response",
            "HTML → CSS → Git → DNS",
            "Commit → Push → DNS → Paint",
            "UDP → CSSOM → DOM → TLS"
          ],
          "answer": 0,
          "why": "Antes de recibir una página segura, el navegador suele resolver DNS, conectar por TCP, negociar TLS y luego enviar la solicitud HTTP.",
          "difficulty": "master-pina",
          "source": "clase-2-slides",
          "type": "scenario"
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
            "22",
            "80",
            "443",
            "3306"
          ],
          "answer": 2,
          "why": "HTTPS usa por defecto el puerto 443.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué header permite el Virtual Hosting basado en nombre?",
          "options": [
            "Content-Type",
            "Host",
            "Authorization",
            "Cache-Control"
          ],
          "answer": 1,
          "why": "El servidor usa el header Host para distinguir qué dominio se está solicitando.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué caracteriza mejor a Nginx?",
          "options": [
            "Modelo asíncrono/event-driven eficiente en alta concurrencia",
            "Solo funciona con bases de datos",
            "Requiere un proceso por imagen",
            "No puede servir archivos estáticos"
          ],
          "answer": 0,
          "why": "Nginx se apoya en un modelo asíncrono para manejar muchas conexiones con pocos recursos.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Cuál opción da un servidor virtual con recursos dedicados?",
          "options": [
            "Shared Hosting",
            "VPS",
            "Fragment",
            "DOCTYPE"
          ],
          "answer": 1,
          "why": "Un VPS da más control y recursos virtualizados dedicados que un hosting compartido.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué puerto se asocia comúnmente con SSH?",
          "options": [
            "22",
            "25",
            "80",
            "5432"
          ],
          "answer": 0,
          "why": "SSH usa comúnmente el puerto 22.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Cuál es la diferencia clave entre hardware/VM y daemon/proceso?",
          "options": [
            "La VM es el software que escucha HTTP; el daemon es el edificio físico",
            "La VM es la máquina; el daemon es el software en ejecución que atiende peticiones",
            "Ambos significan exactamente lo mismo",
            "El daemon solo existe en HTML"
          ],
          "answer": 1,
          "why": "La máquina puede estar viva aunque nginx/apache/node estén caídos.",
          "difficulty": "medium",
          "source": "clase-3-slides",
          "type": "comparison"
        },
        {
          "q": "Si la VM responde ping pero nginx aparece como failed, ¿qué acción es más razonable primero?",
          "options": [
            "Reiniciar toda la VM sin revisar nada",
            "Revisar/reiniciar el servicio nginx y validar logs/configuración",
            "Borrar el repositorio Git",
            "Cambiar todas las URLs a fragmentos"
          ],
          "answer": 1,
          "why": "Si el hardware responde, el problema apunta al daemon; conviene revisar systemctl, nginx -t y logs.",
          "difficulty": "master-pina",
          "source": "clase-3-slides",
          "type": "scenario"
        },
        {
          "q": "¿Qué significa binding de puerto?",
          "options": [
            "Cuando un proceso reclama un puerto para escuchar conexiones",
            "Cuando el navegador pinta un botón",
            "Cuando Git guarda un snapshot",
            "Cuando CSS calcula especificidad"
          ],
          "answer": 0,
          "why": "Un proceso hace bind a un puerto; mientras lo use, otro proceso no puede ocuparlo.",
          "difficulty": "medium",
          "source": "clase-3-slides",
          "type": "definition"
        },
        {
          "q": "¿Qué error indica que un puerto ya está ocupado?",
          "options": [
            "404 Not Found",
            "EADDRINUSE",
            "DOCTYPE missing",
            "merge conflict"
          ],
          "answer": 1,
          "why": "EADDRINUSE aparece cuando otro proceso ya está usando ese puerto.",
          "difficulty": "medium",
          "source": "clase-3-slides",
          "type": "definition"
        },
        {
          "q": "En Virtual Hosting, ¿qué permite servir sitioA.com y sitioB.com desde la misma IP y puerto?",
          "options": [
            "El header Host y server_name en la configuración",
            "El fragmento # del navegador",
            "El selector .clase",
            "El archivo README"
          ],
          "answer": 0,
          "why": "El servidor recibe la misma IP:puerto, pero decide el sitio según Host/server_name.",
          "difficulty": "medium",
          "source": "clase-3-slides",
          "type": "scenario"
        },
        {
          "q": "¿Cuál es una ventaja típica de serverless?",
          "options": [
            "No existe ningún servidor en el mundo",
            "El código se ejecuta bajo demanda sin administrar directamente la infraestructura",
            "Siempre es más barato aunque tenga tráfico constante",
            "Solo sirve para HTML semántico"
          ],
          "answer": 1,
          "why": "Serverless abstrae la gestión de servidores y escala funciones bajo demanda.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Por qué CORS existe en el navegador?",
          "options": [
            "Para impedir que cualquier sitio lea respuestas de otro origen sin permiso",
            "Para acelerar commits de Git",
            "Para cambiar el box model",
            "Para reemplazar HTTPS"
          ],
          "answer": 0,
          "why": "CORS controla qué orígenes pueden leer respuestas cross-origin desde el navegador.",
          "difficulty": "hard",
          "source": "clase-3-slides",
          "type": "definition"
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
            "Staging → Browser → Paint",
            "Commit → URL → Server"
          ],
          "answer": 1,
          "why": "El flujo típico es editar, preparar con git add y guardar con git commit.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué hace git add archivo.js?",
          "options": [
            "Elimina el repositorio",
            "Prepara cambios para el próximo commit",
            "Sube el archivo a producción",
            "Crea una URL"
          ],
          "answer": 1,
          "why": "git add mueve cambios al staging area.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Cuál commit sigue Conventional Commits?",
          "options": [
            "cambios finales",
            "feat(auth): agregar login",
            "arreglo cosas",
            "listo"
          ],
          "answer": 1,
          "why": "Conventional Commits usa tipo y descripción clara, por ejemplo feat(scope): mensaje.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué archivo normalmente NO debe versionarse?",
          "options": [
            ".env",
            "index.html",
            "README.md",
            "styles.css"
          ],
          "answer": 0,
          "why": ".env suele contener secretos o variables locales y debe ignorarse.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué es una rama en Git?",
          "options": [
            "Una copia completa del disco",
            "Un puntero liviano a un commit",
            "Un servidor DNS",
            "Un archivo CSS obligatorio"
          ],
          "answer": 1,
          "why": "Una rama es una referencia liviana que apunta a un commit.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué diferencia clave tiene Git frente a un VCS centralizado como SVN?",
          "options": [
            "Git requiere conexión para cada commit",
            "Cada clon de Git contiene el historial completo",
            "Git no permite ramas",
            "SVN guarda HTML y Git solo CSS"
          ],
          "answer": 1,
          "why": "Git es distribuido: podés trabajar y commitear localmente con historial completo.",
          "difficulty": "medium",
          "source": "clase-4-slides",
          "type": "comparison"
        },
        {
          "q": "¿Cómo almacena Git los cambios principalmente?",
          "options": [
            "Como snapshots del árbol, reutilizando objetos que no cambian",
            "Como capturas de pantalla PNG",
            "Como solo el último archivo editado",
            "Como una base SQL obligatoria"
          ],
          "answer": 0,
          "why": "Git guarda snapshots; si algo no cambió, apunta al objeto anterior.",
          "difficulty": "medium",
          "source": "clase-4-slides",
          "type": "definition"
        },
        {
          "q": "¿Qué comando compara el Working Directory contra el Staging Area?",
          "options": [
            "git diff",
            "git commit",
            "git push --force",
            "npm install"
          ],
          "answer": 0,
          "why": "git diff muestra cambios aún no preparados.",
          "difficulty": "medium",
          "source": "clase-4-slides",
          "type": "definition"
        },
        {
          "q": "¿Qué comando permite preparar partes específicas de un archivo?",
          "options": [
            "git add -p",
            "git init --delete",
            "git branch -d main",
            "npm run paint"
          ],
          "answer": 0,
          "why": "git add -p permite staging interactivo por fragmentos.",
          "difficulty": "master-pina",
          "source": "clase-4-slides",
          "type": "scenario"
        },
        {
          "q": "¿Cuál es la diferencia más sana entre git fetch y git pull?",
          "options": [
            "fetch trae cambios sin fusionar; pull trae y además intenta integrar",
            "pull solo descarga imágenes; fetch borra ramas",
            "son comandos idénticos",
            "fetch solo funciona en Vercel"
          ],
          "answer": 0,
          "why": "git fetch actualiza referencias remotas; git pull normalmente equivale a fetch + merge/rebase.",
          "difficulty": "medium",
          "source": "clase-4-slides",
          "type": "comparison"
        },
        {
          "q": "¿Por qué node_modules/ debe ir normalmente en .gitignore?",
          "options": [
            "Porque se puede regenerar desde package.json y lockfile",
            "Porque Git no permite carpetas",
            "Porque rompe HTML semántico",
            "Porque es un puerto lógico"
          ],
          "answer": 0,
          "why": "Las dependencias se reinstalan; versionarlas infla el repo y genera ruido.",
          "difficulty": "medium",
          "source": "clase-4-slides",
          "type": "definition"
        },
        {
          "q": "¿Qué ventaja da HMR en herramientas como Vite?",
          "options": [
            "Actualiza módulos en el navegador sin recargar todo el estado de la app",
            "Convierte HTTP/1.1 en HTTP/3",
            "Cifra certificados TLS",
            "Crea commits automáticamente"
          ],
          "answer": 0,
          "why": "Hot Module Replacement mejora el ciclo de desarrollo al reflejar cambios sin recargar toda la app.",
          "difficulty": "hard",
          "source": "clase-4-slides",
          "type": "definition"
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
            "Árbol de nodos construido a partir del HTML",
            "Archivo comprimido de Git",
            "Puerto lógico de HTTP",
            "Algoritmo de TLS"
          ],
          "answer": 0,
          "why": "El DOM es la representación en memoria del documento HTML.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué paso calcula posiciones y tamaños exactos?",
          "options": [
            "Paint",
            "Layout/Reflow",
            "DNS",
            "Commit"
          ],
          "answer": 1,
          "why": "Layout o reflow calcula geometría antes de pintar.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Cuál etiqueta representa el contenido principal de la página?",
          "options": [
            "<main>",
            "<aside>",
            "<footer>",
            "<span>"
          ],
          "answer": 0,
          "why": "<main> contiene el contenido principal y normalmente debe haber solo uno por documento.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué input valida formato de correo automáticamente?",
          "options": [
            "type='text'",
            "type='email'",
            "type='range'",
            "type='hidden'"
          ],
          "answer": 1,
          "why": "El input email activa validación nativa de formato de correo.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué se excluye del Render Tree?",
          "options": [
            "Nodos con display:none",
            "Todo el texto",
            "Todos los formularios",
            "El <body> completo"
          ],
          "answer": 0,
          "why": "El Render Tree combina DOM + CSSOM, pero solo incluye nodos visibles.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Para qué sirve <!DOCTYPE html>?",
          "options": [
            "Para activar el modo estándar de HTML5 y evitar Quirks Mode",
            "Para crear una tabla automáticamente",
            "Para conectar a GitHub",
            "Para indicar el puerto 443"
          ],
          "answer": 0,
          "why": "Sin DOCTYPE, el navegador puede entrar en Quirks Mode y renderizar de forma menos predecible.",
          "difficulty": "medium",
          "source": "clase-5-slides",
          "type": "definition"
        },
        {
          "q": "¿Qué elemento pertenece al <head> y no se muestra como contenido visual principal?",
          "options": [
            "<meta charset='UTF-8'>",
            "<h1>Hola</h1>",
            "<article>...</article>",
            "<button>Enviar</button>"
          ],
          "answer": 0,
          "why": "El head contiene metadatos como charset, title, links y descripciones.",
          "difficulty": "medium",
          "source": "clase-5-slides",
          "type": "definition"
        },
        {
          "q": "¿Cuál es la prueba práctica para elegir <article>?",
          "options": [
            "Si el contenido tiene sentido fuera de la página, como post o noticia",
            "Si quiero ponerle color azul",
            "Si necesito un contenedor sin significado",
            "Si está dentro de un formulario"
          ],
          "answer": 0,
          "why": "<article> se usa para contenido autónomo que puede vivir fuera del contexto actual.",
          "difficulty": "medium",
          "source": "clase-5-slides",
          "type": "comparison"
        },
        {
          "q": "¿Cuándo conviene más usar <section> que <article>?",
          "options": [
            "Cuando agrupás contenido temático que depende del contexto de la página",
            "Cuando el contenido es completamente independiente",
            "Cuando querés reemplazar todos los headings",
            "Cuando necesitás ocultar contraseñas"
          ],
          "answer": 0,
          "why": "<section> agrupa una parte temática de un documento, pero no necesariamente funciona sola.",
          "difficulty": "medium",
          "source": "clase-5-slides",
          "type": "comparison"
        },
        {
          "q": "¿Cuál práctica mejora la accesibilidad de un formulario?",
          "options": [
            "Asociar <label> con su input mediante for/id",
            "Usar solo placeholders sin label",
            "Poner todos los campos como div",
            "Eliminar todos los mensajes de error"
          ],
          "answer": 0,
          "why": "Las etiquetas label conectadas facilitan lectura, foco y uso con tecnologías asistivas.",
          "difficulty": "hard",
          "source": "clase-5-slides",
          "type": "scenario"
        },
        {
          "q": "¿Cuál es el uso correcto de una tabla HTML?",
          "options": [
            "Datos tabulares con relaciones entre filas y columnas",
            "Crear cualquier layout visual de página",
            "Reemplazar CSS Grid",
            "Poner botones sin estructura"
          ],
          "answer": 0,
          "why": "Las tablas deben representar datos tabulares, no maquetación visual.",
          "difficulty": "medium",
          "source": "clase-5-slides",
          "type": "definition"
        },
        {
          "q": "Un HTML sin DOCTYPE se ve 'bien' en tu navegador, pero raro en otro. ¿Qué sospecha tiene más sentido?",
          "options": [
            "Puede estar en Quirks Mode y renderizar de forma no estándar",
            "El servidor cambió a SSH",
            "Git perdió el staging",
            "La URL no tiene query string"
          ],
          "answer": 0,
          "why": "Quirks Mode intenta compatibilidad antigua y puede causar diferencias de layout.",
          "difficulty": "master-pina",
          "source": "clase-5-slides",
          "type": "trap"
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
            "Responsivo",
            "Renderizado"
          ],
          "answer": 1,
          "why": "POUR significa Perceptible, Operable, Comprensible y Robusto.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Cuál es la primera regla práctica de ARIA?",
          "options": [
            "Usar ARIA para todo",
            "No usar ARIA si existe HTML semántico nativo",
            "Reemplazar todos los botones por div",
            "Ocultar el contenido principal"
          ],
          "answer": 1,
          "why": "ARIA complementa, pero no debe reemplazar controles semánticos nativos cuando existen.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué selector tiene mayor especificidad?",
          "options": [
            "p",
            ".card",
            "#menu",
            "*"
          ],
          "answer": 2,
          "why": "Un ID tiene más peso que una clase, una etiqueta o el selector universal.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Cuál es el orden del Box Model de adentro hacia afuera?",
          "options": [
            "Margin → Border → Padding → Content",
            "Content → Padding → Border → Margin",
            "Padding → Content → Margin → Border",
            "Border → Margin → Content → Padding"
          ],
          "answer": 1,
          "why": "El contenido está adentro, luego padding, border y margin afuera.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué hace box-sizing: border-box?",
          "options": [
            "Incluye padding y border dentro del width/height declarado",
            "Elimina todos los márgenes",
            "Convierte Flexbox en Grid",
            "Activa TLS"
          ],
          "answer": 0,
          "why": "border-box hace que el tamaño declarado incluya contenido, padding y borde.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué significa que algo sea Perceptible en WCAG?",
          "options": [
            "Que el contenido pueda ser percibido, por ejemplo con texto alternativo o contraste suficiente",
            "Que todos los botones sean morados",
            "Que el servidor responda rápido",
            "Que Git guarde snapshots"
          ],
          "answer": 0,
          "why": "Perceptible apunta a que la información pueda ser recibida por distintos sentidos o tecnologías.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué ejemplo encaja con el principio Operable?",
          "options": [
            "Permitir navegar y usar controles con teclado",
            "Usar solo imágenes sin texto",
            "Ocultar el foco visual",
            "Bloquear todos los formularios"
          ],
          "answer": 0,
          "why": "Operable significa que la interfaz se puede manejar, incluso sin mouse.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "scenario"
        },
        {
          "q": "¿Cuál contraste mínimo WCAG AA se usa comúnmente para texto normal?",
          "options": [
            "1:1",
            "2:1",
            "4.5:1",
            "20:1"
          ],
          "answer": 2,
          "why": "WCAG AA pide al menos 4.5:1 para texto normal.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué problema tiene usar <div role='button'> si podés usar <button>?",
          "options": [
            "Recreás a mano comportamiento que el botón nativo ya trae",
            "Hace que HTTPS falle",
            "Impide usar CSS",
            "Convierte el sitio en intranet"
          ],
          "answer": 0,
          "why": "Un botón nativo ya ofrece semántica, foco y activación esperada; un div necesita parches.",
          "difficulty": "hard",
          "source": "docx-resumen",
          "type": "scenario"
        },
        {
          "q": "¿Qué regla gana normalmente entre estas opciones si apuntan al mismo elemento?",
          "options": [
            "p { color: red }",
            ".texto { color: blue }",
            "#titulo { color: green }",
            "* { color: yellow }"
          ],
          "answer": 2,
          "why": "El selector ID (#titulo) tiene mayor especificidad que clase, etiqueta o universal.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "comparison"
        },
        {
          "q": "¿Para qué sirven las variables CSS?",
          "options": [
            "Guardar valores reutilizables como colores y espaciados",
            "Crear commits automáticamente",
            "Cifrar respuestas HTTP",
            "Cambiar el DNS local"
          ],
          "answer": 0,
          "why": "Las custom properties permiten reutilizar y centralizar valores de diseño.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "Un diseño se rompe porque el ancho final suma width + padding + border. ¿Qué ajuste global ayuda?",
          "options": [
            "* { box-sizing: border-box; }",
            "body { display: none; }",
            "git add -p",
            "aria-hidden='false'"
          ],
          "answer": 0,
          "why": "border-box evita sorpresas de tamaño porque padding y border entran en el ancho declarado.",
          "difficulty": "master-pina",
          "source": "docx-resumen",
          "type": "trap"
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
            "display: flex",
            "position: absolute",
            "git init",
            "type='email'"
          ],
          "answer": 0,
          "why": "display:flex convierte los hijos directos en flex items.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué propiedad alinea ítems en el main axis?",
          "options": [
            "align-items",
            "justify-content",
            "grid-column",
            "box-shadow"
          ],
          "answer": 1,
          "why": "justify-content distribuye elementos sobre el eje principal.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "Si flex-direction es column, el main axis es...",
          "options": [
            "Horizontal",
            "Vertical",
            "Diagonal",
            "No existe"
          ],
          "answer": 1,
          "why": "Con column, el eje principal va verticalmente.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué propiedad separa ítems flex de forma limpia?",
          "options": [
            "gap",
            "margin-collapse",
            "srcdoc",
            "HEAD"
          ],
          "answer": 0,
          "why": "gap agrega espacio entre items sin meter márgenes manuales innecesarios.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué propiedad permite que un hijo crezca con el espacio disponible?",
          "options": [
            "flex-grow",
            "align-self",
            "order",
            "fragment"
          ],
          "answer": 0,
          "why": "flex-grow define cuánto crece un ítem respecto a otros.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué hace align-items en Flexbox?",
          "options": [
            "Alinea ítems en el cross axis",
            "Alinea ítems en el main axis",
            "Crea filas y columnas 2D",
            "Borra el DOM"
          ],
          "answer": 0,
          "why": "align-items trabaja sobre el eje cruzado.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Cuándo cambia el significado visual de justify-content y align-items?",
          "options": [
            "Cuando cambia flex-direction",
            "Cuando cambia el color de fondo",
            "Cuando se usa localStorage",
            "Cuando se abre GitHub"
          ],
          "answer": 0,
          "why": "Al cambiar flex-direction, cambian main axis y cross axis.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "comparison"
        },
        {
          "q": "¿Qué hace flex-wrap: wrap?",
          "options": [
            "Permite que los ítems pasen a otra línea si no caben",
            "Obliga a todos los ítems a salirse del viewport",
            "Convierte flex en grid",
            "Elimina el contenido"
          ],
          "answer": 0,
          "why": "wrap permite múltiples líneas cuando el espacio no alcanza.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué propiedad cambia el orden visual de un flex item sin mover el HTML?",
          "options": [
            "order",
            "gap",
            "href",
            "charset"
          ],
          "answer": 0,
          "why": "order altera el orden visual dentro del contenedor flex.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Cuál shorthand agrupa grow, shrink y basis?",
          "options": [
            "flex",
            "grid-area",
            "font",
            "border"
          ],
          "answer": 0,
          "why": "flex: 1 1 auto, por ejemplo, resume flex-grow, flex-shrink y flex-basis.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "Para centrar un elemento horizontal y verticalmente en un contenedor flex row, ¿qué combinación es típica?",
          "options": [
            "justify-content:center y align-items:center",
            "display:grid y git commit",
            "float:left y clear:both",
            "aria-label y role"
          ],
          "answer": 0,
          "why": "En row, justify-content centra horizontalmente y align-items verticalmente.",
          "difficulty": "master-pina",
          "source": "docx-resumen",
          "type": "scenario"
        },
        {
          "q": "¿Cuál caso es más natural para Flexbox que para Grid?",
          "options": [
            "Alinear botones en una barra de navegación",
            "Diseñar una página completa con header, sidebar, main y footer",
            "Controlar filas y columnas a la vez",
            "Crear áreas nombradas bidimensionales"
          ],
          "answer": 0,
          "why": "Flexbox brilla en layouts de una dimensión, como grupos de botones o navbars.",
          "difficulty": "hard",
          "source": "docx-resumen",
          "type": "comparison"
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
            "Cuando necesitás controlar filas y columnas al mismo tiempo",
            "Cuando solo alineás dos botones en línea",
            "Cuando no hay layout",
            "Cuando querés usar Git"
          ],
          "answer": 0,
          "why": "Grid está diseñado para layout bidimensional.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "comparison"
        },
        {
          "q": "¿Qué representa la unidad fr?",
          "options": [
            "Una fracción del espacio disponible",
            "Un fragmento de URL",
            "Un archivo remoto",
            "Una fila oculta siempre fija"
          ],
          "answer": 0,
          "why": "fr reparte el espacio disponible proporcionalmente.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué técnica permite dibujar el layout con nombres?",
          "options": [
            "grid-template-areas",
            "flex-grow",
            "aria-label",
            "git branch"
          ],
          "answer": 0,
          "why": "grid-template-areas permite describir regiones con nombres legibles.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué es un Grid Item?",
          "options": [
            "Hijo directo de un contenedor con display:grid",
            "Cualquier nieto de cualquier div",
            "Un selector CSS universal",
            "Un código HTTP"
          ],
          "answer": 0,
          "why": "Solo los hijos directos del Grid Container son Grid Items.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué crea el navegador si hay más ítems que celdas explícitas?",
          "options": [
            "Grid implícita",
            "HTTPS",
            "Commits semánticos",
            "Quirks Mode"
          ],
          "answer": 0,
          "why": "El navegador crea filas o columnas implícitas para alojar contenido extra.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué define grid-template-columns?",
          "options": [
            "Las columnas explícitas del grid",
            "El protocolo HTTP",
            "La especificidad de IDs",
            "Los commits de una rama"
          ],
          "answer": 0,
          "why": "grid-template-columns define las pistas de columna del grid explícito.",
          "difficulty": "easy",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué hace repeat(3, 1fr)?",
          "options": [
            "Crea tres columnas/fracciones iguales",
            "Ejecuta tres requests HTTP",
            "Crea tres ramas Git",
            "Oculta tres elementos"
          ],
          "answer": 0,
          "why": "repeat evita repetir manualmente valores, como 1fr 1fr 1fr.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Para qué sirve minmax(200px, 1fr)?",
          "options": [
            "Definir un tamaño mínimo y máximo flexible para una pista",
            "Forzar siempre 200 columnas",
            "Reemplazar el DOCTYPE",
            "Cifrar el CSS"
          ],
          "answer": 0,
          "why": "minmax permite pistas responsivas con límite mínimo y máximo.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Qué significa grid-column: 1 / 4?",
          "options": [
            "El ítem va desde la línea 1 hasta la 4, ocupando las columnas entre ellas",
            "El grid tiene exactamente 14 columnas",
            "El navegador usa puerto 14",
            "El ítem se vuelve inline"
          ],
          "answer": 0,
          "why": "Las líneas delimitan pistas; de 1 a 4 ocupa tres columnas.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "¿Cuál ventaja práctica tiene grid-template-areas en responsive?",
          "options": [
            "Podés reorganizar el layout en media queries sin tocar el HTML",
            "Elimina la necesidad de HTML semántico",
            "Hace que TLS sea más rápido",
            "Impide usar CSS"
          ],
          "answer": 0,
          "why": "Cambiar áreas en CSS permite layouts distintos manteniendo la estructura HTML.",
          "difficulty": "hard",
          "source": "docx-resumen",
          "type": "scenario"
        },
        {
          "q": "¿Qué propiedad alinea horizontalmente el contenido dentro de cada celda del grid?",
          "options": [
            "justify-items",
            "align-content",
            "grid-auto-flow",
            "flex-shrink"
          ],
          "answer": 0,
          "why": "justify-items controla la alineación horizontal de los ítems dentro de sus celdas.",
          "difficulty": "medium",
          "source": "docx-resumen",
          "type": "definition"
        },
        {
          "q": "Si querés estructura general de página y componentes internos alineados, ¿qué combinación suele ser sana?",
          "options": [
            "Grid para macro-layout y Flexbox dentro de componentes",
            "Solo tablas para todo",
            "Solo position:absolute",
            "Git para layout y CSS para commits"
          ],
          "answer": 0,
          "why": "Grid organiza la estructura 2D; Flexbox resuelve alineaciones 1D internas.",
          "difficulty": "master-pina",
          "source": "docx-resumen",
          "type": "scenario"
        }
      ]
    }
  ],
  "questionBank": {
    "version": "2.0-curated",
    "totalQuestions": 96,
    "difficultyLevels": [
      "easy",
      "medium",
      "hard",
      "master-pina"
    ],
    "sources": [
      "docx-resumen",
      "clase-1-slides",
      "clase-2-slides",
      "clase-3-slides",
      "clase-4-slides",
      "clase-5-slides"
    ]
  }
};
