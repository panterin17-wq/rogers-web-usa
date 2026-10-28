/* Rogers Digital Marketing — sitio para restaurantes latinos en EE.UU. */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const WA = '522941131400';
let L = 'es';
try { L = localStorage.getItem('rdm-lang') || 'es'; } catch (e) {}
const t = o => (o && typeof o === 'object' && !Array.isArray(o)) ? (o[L] ?? o.es) : o;
const supportsVT = typeof document.startViewTransition === 'function';
if (!supportsVT) document.documentElement.classList.add('no-vt');

/* ---------- Icons ---------- */
const P = {
  home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  spark: '<path d="M12 3l2.2 5.6L20 11l-5.8 2.4L12 19l-2.2-5.6L4 11l5.8-2.4z"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  play: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M10 9v6l5-3z"/>',
  box: '<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
  steps: '<path d="M4 20h4v-4h4v-4h4V8h4"/>',
  chat: '<path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z"/>',
  wa: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" fill="currentColor" stroke="none"/>',
  qr: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v1M14 20h1M18 18h3v3"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/>',
  video: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10.5 9.5v5l4-2.5z"/>',
  tag: '<path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.5.6 4 2.8 4 6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
  pin: '<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>',
  heart: '<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20M6 15h4"/>',
  shirt: '<path d="M8 3l-5 3 2 5 3-1v11h8V10l3 1 2-5-5-3a4 4 0 0 1-8 0z"/>',
  truck: '<path d="M2 6h12v10H2zM14 9h4l4 4v3h-8"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  link: '<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-7"/>'
};
const ic = (k, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extra}>${P[k] || ''}</svg>`;

/* ---------- Content ---------- */
const VIEWS = [
  { key: 'home', label: { es: 'Inicio', en: 'Home' }, icon: 'home' },
  { key: 'marketing', label: { es: 'Marketing', en: 'Marketing' }, icon: 'spark' },
  { key: 'sistemas', label: { es: 'Sistemas', en: 'Systems' }, icon: 'chip' },
  { key: 'trabajos', label: { es: 'Trabajos', en: 'Work' }, icon: 'play' },
  { key: 'paquetes', label: { es: 'Paquetes', en: 'Packages' }, icon: 'box' },
  { key: 'proceso', label: { es: 'Proceso', en: 'Process' }, icon: 'steps' },
  { key: 'contacto', label: { es: 'Contacto', en: 'Contact' }, icon: 'chat' }
];

const BRANDS = [
  ['alitas', 'Alitas SAT'], ['jardin', 'El Jardín Cafetería'], ['sushi', 'Sushi Crazy'], ['todito', 'Todito Apple'],
  ['algobonito', 'Algo Bonito'], ['bamba', 'Barbería La Bamba'], ['dmartzash', 'DMartzash Joyería'], ['orquidea', 'Joyería Orquídea'],
  ['plaza', 'Plaza Mendoza'], ['powergym', 'Power Gym'], ['michelle', 'Accesorios Michelle'], ['castillo', 'Novedades Castillo'], ['pinatas', 'Piñatas Eli']
];

const MARKETING = [
  { icon: 'qr', name: { es: 'Menú digital con QR', en: 'QR digital menu' }, desc: { es: 'Diseño y archivo enlazable, listo para mesas y redes', en: 'Design and shareable link, ready for tables and social' }, price: '$40–$120' },
  { icon: 'image', name: { es: 'Contenido para redes', en: 'Social media content' }, desc: { es: '10 publicaciones gráficas con tu identidad', en: '10 branded graphic posts' }, price: '$60–$150' },
  { icon: 'video', name: { es: 'Video promocional corto', en: 'Short promo video' }, desc: { es: 'Una pieza para Reels o TikTok, también con IA', en: 'One piece for Reels or TikTok, AI-powered too' }, price: '$30–$100' },
  { icon: 'tag', name: { es: 'Promoción o combo', en: 'Promo or combo' }, desc: { es: 'Flyer digital por campaña', en: 'Digital flyer per campaign' }, price: '$25–$70' },
  { icon: 'users', name: { es: 'Gestión de redes', en: 'Social media management' }, desc: { es: 'Programación y seguimiento mensual', en: 'Monthly scheduling and follow-up' }, price: '$150–$450' }
];
const PHYSICAL = [
  { icon: 'shirt', name: { es: 'Uniformes, empaques y etiquetas', en: 'Uniforms, packaging & labels' }, desc: { es: 'Diseño con tu marca, cotizado con proveedores', en: 'Branded design, quoted with suppliers' } },
  { icon: 'print', name: { es: 'Menús impresos y rótulos', en: 'Printed menus & signage' }, desc: { es: 'Archivos listos para imprenta', en: 'Print-ready files' } },
  { icon: 'truck', name: { es: 'Rotulación de food truck', en: 'Food truck wraps' }, desc: { es: 'Tu unidad convertida en anuncio', en: 'Turn your truck into an ad' } }
];

const SYSTEMS = [
  { id: 'carta3d', icon: 'qr', c: '#FFB547', media: { v: 'm/jardin_menu3d.mp4' }, live: true,
    name: { es: 'Carta digital 3D con mesero IA', en: '3D digital menu with AI waiter' },
    short: { es: 'Tus platillos en 3D desde un QR. El cliente explora, pregunta y arma su orden desde la mesa.', en: 'Your dishes in 3D from a QR code. Guests explore, ask questions and build their order at the table.' },
    bullets: { es: ['Platillos en 3D con fotos y detalles', 'Mesero virtual con IA que responde dudas', 'La comanda llega directo a cocina o por WhatsApp', 'Ya funciona en El Jardín, Toki\'s Pollo y Yang Guang'], en: ['3D dishes with photos and details', 'AI virtual waiter answers questions', 'Orders go straight to the kitchen or WhatsApp', 'Already running at El Jardín, Toki\'s Pollo and Yang Guang'] },
    price: { es: 'A cotizar', en: 'Quote' }, demo: 'https://el-jardin-carta-3d.netlify.app' },
  { id: 'wa', icon: 'wa', c: '#25D366',
    name: { es: 'Pedidos por WhatsApp', en: 'WhatsApp ordering' },
    short: { es: 'Botones y enlaces que mandan el pedido armado a tu WhatsApp, sin apps extra.', en: 'Buttons and links that send a ready order to your WhatsApp, no extra apps.' },
    bullets: { es: ['Configuración de flujo y enlaces', 'Mensajes listos en español e inglés', 'Ideal para pickup, delivery y catering'], en: ['Flow and link setup', 'Ready-made messages in Spanish and English', 'Great for pickup, delivery and catering'] },
    price: '$50–$150' },
  { id: 'web', icon: 'globe', c: '#00D6C9',
    name: { es: 'Sitio web bilingüe', en: 'Bilingual website' },
    short: { es: 'Menú, horarios, mapa y contacto en español e inglés, rápido y pensado para el celular.', en: 'Menu, hours, map and contact in Spanish and English, fast and mobile-first.' },
    bullets: { es: ['Menú interactivo y fotos de tus platillos', 'Mapa, horarios y botones de contacto', 'Botón de idioma ES / EN'], en: ['Interactive menu and dish photos', 'Map, hours and contact buttons', 'ES / EN language switch'] },
    price: '$150–$400' },
  { id: 'sofia', icon: 'mic', c: '#7C5CFF', media: null, live: true,
    name: { es: 'Sofía · agente de voz', en: 'Sofía · voice agent' },
    short: { es: 'Una asistente de voz con IA que llama, presenta tu negocio y agenda por ti.', en: 'An AI voice assistant that calls, presents your business and books for you.' },
    bullets: { es: ['Atiende preguntas frecuentes', 'Canaliza pedidos y reservaciones', 'Pruébala en vivo con el enlace'], en: ['Handles frequent questions', 'Routes orders and reservations', 'Try it live with the link'] },
    price: { es: 'A cotizar', en: 'Quote' }, demo: 'https://agente-voz-agencia-production.up.railway.app/prueba' },
  { id: 'google', icon: 'pin', c: '#FF4D8D',
    name: { es: 'Perfil de Google Business', en: 'Google Business profile' },
    short: { es: 'Que te encuentren en Google Maps con horarios, fotos y menú correctos.', en: 'Get found on Google Maps with the right hours, photos and menu.' },
    bullets: { es: ['Optimización inicial de información', 'Fotos y categorías correctas', 'Enlaces a menú y pedidos'], en: ['Initial listing optimization', 'Correct photos and categories', 'Links to menu and ordering'] },
    price: '$80–$200' },
  { id: 'fideliza', icon: 'heart', c: '#FF4D8D',
    name: { es: 'Fidelización digital', en: 'Digital loyalty' },
    short: { es: 'Cupones, puntos o formularios para que tus clientes regresen.', en: 'Coupons, points or forms that bring guests back.' },
    bullets: { es: ['Cupones para redes y mesas', 'Programa de puntos sencillo', 'Base de clientes para promociones'], en: ['Coupons for social and tables', 'Simple points program', 'Customer list for promos'] },
    price: { es: 'A cotizar', en: 'Quote' } },
  { id: 'holo', icon: 'card', c: '#00D6C9', media: { i: 'm/f_holo.webp' }, live: true,
    name: { es: 'Holo ID · tarjeta digital', en: 'Holo ID · digital card' },
    short: { es: 'La tarjeta de presentación del futuro para el dueño y el negocio, con QR y asistente.', en: 'A futuristic business card for owner and restaurant, with QR and assistant.' },
    bullets: { es: ['Redes, WhatsApp y ubicación en un toque', 'Galería y promociones', 'Se comparte por QR o NFC'], en: ['Social, WhatsApp and location in one tap', 'Gallery and promos', 'Share by QR or NFC'] },
    price: { es: 'A cotizar', en: 'Quote' }, demo: 'https://holo-id-rogers.netlify.app' }
];

const WORKS = [
  { type: 'video', cat: 'food', src: 'm/alitas.mp4', name: 'Alitas SAT', cap: { es: 'Anuncio con IA · hamburguesa y alitas', en: 'AI ad · burger and wings' } },
  { type: 'video', cat: 'food', src: 'm/jardin_menu3d.mp4', name: 'El Jardín Cafetería', cap: { es: 'Carta digital 3D', en: '3D digital menu' } },
  { type: 'image', cat: 'design', src: 'm/f_tokis.webp', name: "Toki's Pollo", cap: { es: 'QR de carta 3D para mesas', en: '3D menu table QR' } },
  { type: 'video', cat: 'food', src: 'm/jardin_video.mp4', name: 'El Jardín Cafetería', cap: { es: 'Video de menú para redes', en: 'Menu video for social' } },
  { type: 'image', cat: 'design', src: 'm/f_jardin_menu.webp', name: 'El Jardín Cafetería', cap: { es: 'Menú oficial · diseño', en: 'Official menu · design' } },
  { type: 'video', cat: 'food', src: 'm/jardin_pastel.mp4', name: 'El Jardín Cafetería', cap: { es: 'Postre en 3D', en: '3D dessert' } },
  { type: 'image', cat: 'design', src: 'm/f_yang.webp', name: 'Yang Guang', cap: { es: 'QR de carta 3D · buffet', en: '3D menu QR · buffet' } },
  { type: 'video', cat: 'food', src: 'm/jardin_zoom.mp4', name: 'El Jardín Cafetería', cap: { es: 'Zoom de carta 3D', en: '3D menu zoom' } },
  { type: 'video', cat: 'promo', src: 'm/promo_usa.mp4', name: 'Rogers Digital Marketing', cap: { es: 'Promo para restaurantes en EE.UU.', en: 'Promo for U.S. restaurants' } },
  { type: 'image', cat: 'design', src: 'm/f_holo.webp', name: 'Holo ID', cap: { es: 'Flyer de tarjeta digital', en: 'Digital card flyer' } }
];

const PACKS = [
  { key: 'presence', small: { es: 'Para empezar', en: 'To get started' }, name: { es: 'Presencia digital', en: 'Digital presence' }, amt: '$149', per: { es: 'pago único', en: 'one-time' },
    items: { es: ['Menú digital con QR', '5 publicaciones gráficas', '1 video corto para Reels o TikTok', '1 flyer de promoción'], en: ['QR digital menu', '5 social media graphics', '1 short video for Reels or TikTok', '1 promo flyer'] } },
  { key: 'growth', feat: true, small: { es: 'Plan mensual', en: 'Monthly plan' }, name: { es: 'Más clientes', en: 'More customers' }, amt: '$299', per: { es: 'al mes', en: 'per month' },
    items: { es: ['12 publicaciones al mes', '4 videos cortos', 'Actualización de ofertas y combos', 'Reporte mensual'], en: ['12 posts per month', '4 short videos', 'Updated deals and combos', 'Monthly report'] } },
  { key: 'digital', small: { es: 'Sistema completo', en: 'Full system' }, name: { es: 'Restaurante digital', en: 'Digital restaurant' }, amt: '$599', per: { es: 'inicial', en: 'setup' },
    items: { es: ['Sitio web bilingüe', 'Menú interactivo', 'Enlaces de contacto, mapa y WhatsApp', '5 publicaciones gráficas'], en: ['Bilingual website', 'Interactive menu', 'Contact, map and WhatsApp links', '5 social media graphics'] } }
];

const STEPS = [
  { n: 1, t: { es: 'Diagnóstico', en: 'Diagnosis' }, d: { es: 'Revisamos tu menú, redes, fotos y tu objetivo principal.', en: 'We review your menu, social media, photos and main goal.' }, o: { es: 'Propuesta con alcance', en: 'Scoped proposal' } },
  { n: 2, t: { es: 'Materiales', en: 'Materials' }, d: { es: 'Nos compartes logo, precios, fotos y datos del local.', en: 'You share your logo, prices, photos and location details.' }, o: { es: 'Carpeta de recursos', en: 'Asset folder' } },
  { n: 3, t: { es: 'Producción', en: 'Production' }, d: { es: 'Diseñamos, redactamos y adaptamos al idioma acordado.', en: 'We design, write and adapt to the agreed language.' }, o: { es: 'Borradores para revisión', en: 'Drafts for review' } },
  { n: 4, t: { es: 'Entrega', en: 'Delivery' }, d: { es: 'Aplicamos las correcciones incluidas y publicamos o entregamos.', en: 'We apply included revisions and publish or deliver.' }, o: { es: 'Archivos finales y enlaces', en: 'Final files and links' } },
  { n: 5, t: { es: 'Seguimiento', en: 'Follow-up' }, d: { es: 'Revisamos consultas, clics y pedidos, y planeamos lo que sigue.', en: 'We review inquiries, clicks and orders, and plan what\'s next.' }, o: { es: 'Reporte o siguiente campaña', en: 'Report or next campaign' } }
];

const TX = {
  sub: { es: 'Agencia · Sistemas · IA', en: 'Agency · Systems · AI' },
  splash: { es: 'marketing y sistemas para restaurantes', en: 'marketing & systems for restaurants' },
  flag: { es: 'Para restaurantes latinos en Estados Unidos', en: 'For Latino restaurants in the United States' },
  h1a: { es: 'Tu sazón,', en: 'Your flavor,' }, h1b: { es: 'lista para vender en EE.UU.', en: 'ready to sell in the U.S.' },
  lead: { es: 'Somos Rogers Digital Marketing: contenido, videos con IA, cartas digitales 3D, páginas web bilingües y sistemas para que taquerías, food trucks, fondas y restaurantes mexicanos vendan más. Todo remoto, en español o inglés.', en: 'We are Rogers Digital Marketing: content, AI videos, 3D digital menus, bilingual websites and systems that help taquerías, food trucks, fondas and Mexican restaurants sell more. Fully remote, in Spanish or English.' },
  ctaPk: { es: 'Ver paquetes', en: 'See packages' }, ctaWa: { es: 'Pide un ejemplo gratis', en: 'Get a free sample' },
  stats: [[ 'ES · EN', { es: 'contenido bilingüe', en: 'bilingual content' } ], [ '$149', { es: 'paquete de entrada', en: 'starter package' } ], [ '13+', { es: 'marcas trabajadas', en: 'brands served' } ], [ '100%', { es: 'remoto desde México', en: 'remote from Mexico' } ]],
  marquee: { es: ['Menú QR', 'Videos con IA', 'Carta 3D', 'Web bilingüe', 'Pedidos por WhatsApp', 'Google Business', 'Reels y TikTok', 'Food trucks', 'Catering'], en: ['QR menus', 'AI videos', '3D menus', 'Bilingual websites', 'WhatsApp ordering', 'Google Business', 'Reels & TikTok', 'Food trucks', 'Catering'] },
  twoTitle: { es: 'Dos equipos,', en: 'Two teams,' }, twoAcc: { es: 'un mismo objetivo', en: 'one goal' },
  twoP: { es: 'Marketing para que te conozcan y sistemas para que te compren más fácil.', en: 'Marketing so people know you, systems so they can buy from you easily.' },
  agency: { s: { es: 'La agencia', en: 'The agency' }, h: 'Rogers Digital Marketing', p: { es: 'Contenido, videos con IA, redes sociales y promociones con la imagen de tu restaurante.', en: 'Content, AI videos, social media and promos with your restaurant\'s look.' }, tags: { es: ['Contenido', 'Video IA', 'Redes', 'Promos'], en: ['Content', 'AI video', 'Social', 'Promos'] } },
  systems: { s: { es: 'Los sistemas', en: 'The systems' }, h: 'Rogers', p: { es: 'Cartas 3D, webs bilingües, pedidos por WhatsApp y agentes de voz con IA.', en: '3D menus, bilingual websites, WhatsApp ordering and AI voice agents.' }, tags: { es: ['Carta 3D', 'Web', 'WhatsApp', 'Agentes IA'], en: ['3D menu', 'Web', 'WhatsApp', 'AI agents'] } },
  explore: { es: 'Explorar', en: 'Explore' },
  probT: { es: 'Buena comida,', en: 'Great food,' }, probAcc: { es: 'poca presencia en línea', en: 'little online presence' },
  probs: [
    [{ es: 'Sin menú digital', en: 'No digital menu' }, { es: 'Tus clientes no ven platillos ni precios desde el celular.', en: 'Guests can\'t see dishes or prices on their phone.' }],
    [{ es: 'Redes en pausa', en: 'Social on pause' }, { es: 'Se publica poco y sin una imagen consistente.', en: 'Few posts and no consistent look.' }],
    [{ es: 'Difícil de encontrar', en: 'Hard to find' }, { es: 'Horarios, ubicación y formas de pedir no están claros.', en: 'Hours, location and ordering aren\'t clear.' }],
    [{ es: 'Un solo idioma', en: 'One language' }, { es: 'Pierdes al público hispano o al angloparlante.', en: 'You miss Spanish- or English-speaking diners.' }]
  ],
  trustT: { es: 'Marcas que ya', en: 'Brands that already' }, trustAcc: { es: 'trabajan con nosotros', en: 'work with us' },
  promoT: { es: 'Mira la propuesta', en: 'Watch the pitch' }, promoAcc: { es: 'en 36 segundos', en: 'in 36 seconds' },
  mkT: { es: 'Marketing que', en: 'Marketing that' }, mkAcc: { es: 'abre el apetito', en: 'makes them hungry' },
  mkLead: { es: 'Contrata un servicio suelto o combínalos en un paquete. Precios de referencia en USD.', en: 'Hire one service or bundle them in a package. Reference prices in USD.' },
  physT: { es: 'También en', en: 'Also in' }, physAcc: { es: 'físico', en: 'print' },
  note: { es: 'Los precios se ajustan por complejidad, revisiones, traducción y licencias. No incluyen inversión publicitaria ni cargos de terceros. Material físico se cotiza con proveedores.', en: 'Prices vary by complexity, revisions, translation and licenses. Ad spend and third-party fees not included. Print is quoted with suppliers.' },
  quote: { es: 'A cotizar', en: 'Quote' },
  sysT: { es: 'Sistemas que', en: 'Systems that' }, sysAcc: { es: 'venden por ti', en: 'sell for you' },
  sysLead: { es: 'Tecnología hecha por nosotros y probada en negocios reales. Toca cada uno para ver detalles o probarlo en vivo.', en: 'Technology we build and test with real businesses. Tap each one for details or to try it live.' },
  liveLabel: { es: 'En vivo', en: 'Live' }, details: { es: 'Ver detalles', en: 'Details' }, tryLive: { es: 'Probar en vivo', en: 'Try it live' }, wantIt: { es: 'Lo quiero', en: 'I want it' },
  wkT: { es: 'Trabajo', en: 'Real' }, wkAcc: { es: 'real, comida real', en: 'work, real food' },
  wkLead: { es: 'Videos, cartas 3D y diseños que ya hicimos para restaurantes y negocios.', en: 'Videos, 3D menus and designs we\'ve made for restaurants and businesses.' },
  filters: [['all', { es: 'Todo', en: 'All' }], ['food', { es: 'Videos de comida', en: 'Food videos' }], ['design', { es: 'Diseño y QR', en: 'Design & QR' }], ['promo', { es: 'Promos', en: 'Promos' }]],
  wallT: { es: 'Marcas', en: 'Brands' }, wallAcc: { es: 'trabajadas', en: 'we\'ve worked with' },
  pkT: { es: 'Paquetes de', en: 'Packages with a' }, pkAcc: { es: 'alcance claro', en: 'clear scope' },
  pkLead: { es: 'Empieza con un paquete de entrada o un plan mensual. Precios en USD.', en: 'Start with a starter package or a monthly plan. Prices in USD.' },
  rec: { es: 'RECOMENDADO', en: 'RECOMMENDED' },
  prT: { es: 'Así', en: 'How' }, prAcc: { es: 'trabajamos', en: 'we work' },
  prLead: { es: 'Todo a distancia, por WhatsApp y videollamada, en el idioma que prefieras.', en: 'Fully remote, via WhatsApp and video call, in your preferred language.' },
  benT: { es: 'Lo que gana', en: 'What your' }, benAcc: { es: 'tu restaurante', en: 'restaurant gets' },
  bens: [
    ['phone', { es: 'Menú siempre al día', en: 'Always-updated menu' }, { es: 'Accesible y actualizable desde el celular.', en: 'Accessible and editable from a phone.' }],
    ['spark', { es: 'Imagen consistente', en: 'Consistent look' }, { es: 'En redes, promociones y material de venta.', en: 'Across social, promos and sales material.' }],
    ['globe', { es: 'Atención bilingüe', en: 'Bilingual service' }, { es: 'Más claridad en español e inglés.', en: 'Clearer in Spanish and English.' }],
    ['clock', { es: 'Contenido constante', en: 'Steady content' }, { es: 'Sin contratar un equipo interno completo.', en: 'Without hiring a full in-house team.' }],
    ['chart', { es: 'Medimos lo real', en: 'We measure what\'s real' }, { es: 'Consultas, clics y pedidos; sin promesas infladas.', en: 'Inquiries, clicks and orders; no inflated promises.' }],
    ['wa', { es: 'Pedidos más simples', en: 'Simpler ordering' }, { es: 'Enlaces directos a WhatsApp con tu menú.', en: 'Direct WhatsApp links with your menu.' }]
  ],
  ctT: { es: 'Pide tu', en: 'Get your' }, ctAcc: { es: 'ejemplo gratis', en: 'free sample' },
  ctLead: { es: 'Sin compromiso. Llena tus datos y se abre WhatsApp con el mensaje listo para enviar.', en: 'No commitment. Fill in your details and WhatsApp opens with your message ready to send.' },
  fName: { es: 'Tu nombre', en: 'Your name' }, fRest: { es: 'Restaurante', en: 'Restaurant' }, fCity: { es: 'Ciudad y estado', en: 'City & state' }, fType: { es: 'Tipo de negocio', en: 'Business type' }, fPack: { es: 'Me interesa', en: 'I\'m interested in' }, fMsg: { es: 'Mensaje', en: 'Message' },
  types: { es: ['Taquería', 'Food truck', 'Fonda', 'Restaurante', 'Panadería / postres', 'Catering'], en: ['Taquería', 'Food truck', 'Fonda', 'Restaurant', 'Bakery / desserts', 'Catering'] },
  notSure: { es: 'Aún no sé', en: 'Not sure yet' },
  open: { es: 'Abrir en WhatsApp', en: 'Open in WhatsApp' },
  shareT: { es: 'Comparte esta página', en: 'Share this page' }, copy: { es: 'Copiar enlace', en: 'Copy link' }, copied: { es: 'Enlace copiado', en: 'Link copied' },
  remote: { es: 'Atendemos restaurantes en todo Estados Unidos, a distancia desde México.', en: 'We serve restaurants across the U.S., remotely from Mexico.' },
  hours: { es: 'Lun a Sáb 9:00–19:00 · Dom 9:00–16:00 (hora del centro de México)', en: 'Mon–Sat 9am–7pm · Sun 9am–4pm (Mexico Central Time)' },
  waIntro: { es: 'Hola Rogers, vi su página y me interesa un ejemplo gratis para mi restaurante.', en: 'Hi Rogers, I saw your website and I\'d like a free sample for my restaurant.' }
};
const PROB_ICONS = ['qr', 'users', 'pin', 'globe'];
P.phone = '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>';

/* ---------- Render ---------- */
const waLink = m => `https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
const head = (eb, a, acc, p) => `<div class="sec-head rv"><div><span class="eyebrow">${eb}</span><h2>${a} <span class="acc grad-text">${acc}</span></h2></div>${p ? `<p>${p}</p>` : ''}</div>`;
const marquee = arr => `<div class="marquee rv"><div class="marquee-track">${[...arr, ...arr].map(s => `<span>${s}</span>`).join('')}</div></div>`;

function renderHome() {
  const brandsLoop = [...BRANDS, ...BRANDS].map(([k, n]) => `<div class="logo-pill" title="${n}"><img src="m/l_${k}.webp" alt="${n}" loading="lazy"></div>`).join('');
  $('#v-home').innerHTML = `
  <section class="hero">
    <div class="hero-bg"><div class="aurora"><i></i><i></i><i></i></div><video src="m/hero_bg.mp4" autoplay muted loop playsinline></video><div class="gridlines"></div></div>
    <span class="flag rv"><b>🇺🇸</b>${t(TX.flag)}</span>
    <h1 class="rv">${t(TX.h1a)} <span class="acc warm-text">${t(TX.h1b)}</span></h1>
    <p class="lead rv">${t(TX.lead)}</p>
    <div class="hero-ctas rv">
      <a class="btn wa" href="${waLink(t(TX.waIntro))}" target="_blank" rel="noopener">${ic('wa')}${t(TX.ctaWa)}</a>
      <button class="btn ghost" data-go="paquetes">${t(TX.ctaPk)} ${ic('arrow')}</button>
    </div>
    <div class="stats rv">${TX.stats.map(([v, l]) => `<div class="stat"><b>${v}</b><span>${t(l)}</span></div>`).join('')}</div>
    ${marquee(t(TX.marquee))}
  </section>

  <section class="sec">
    ${head(t({ es: 'El problema', en: 'The problem' }), t(TX.probT), t(TX.probAcc))}
    <div class="grid g3">${TX.probs.map(([h, p], i) => `<div class="ben bad glass rv"><div class="ico">${ic(PROB_ICONS[i])}</div><h4>${t(h)}</h4><p>${t(p)}</p></div>`).join('')}</div>
  </section>

  <section class="sec">
    ${head('Rogers', t(TX.twoTitle), t(TX.twoAcc), t(TX.twoP))}
    <div class="grid g2">
      ${[['agency', '#FFB547', 'marketing'], ['systems', '#00D6C9', 'sistemas']].map(([k, c, go]) => { const b = TX[k]; return `
      <div class="brand-card glass rv" style="--c:${c}"><div class="orb"></div>
        <small>${t(b.s)}</small><h3>${b.h}</h3><p>${t(b.p)}</p>
        <div class="chips" style="margin-bottom:18px">${t(b.tags).map(x => `<span class="chip dot" style="--c:${c}">${x}</span>`).join('')}</div>
        <button class="btn ghost sm" data-go="${go}" style="align-self:flex-start">${t(TX.explore)} ${ic('arrow')}</button>
      </div>`; }).join('')}
    </div>
  </section>

  <section class="sec">
    ${head('Portfolio', t(TX.trustT), t(TX.trustAcc))}
    <div class="logo-strip rv"><div class="marquee-track">${brandsLoop}</div></div>
  </section>

  <section class="sec">
    ${head('Video', t(TX.promoT), t(TX.promoAcc))}
    <div class="grid g2" style="align-items:center">
      <button class="work rv" data-lb="video" data-src="m/promo_usa.mp4" style="max-width:360px;justify-self:center">
        <video src="m/promo_usa.mp4" muted loop playsinline autoplay preload="metadata"></video>
        <span class="tag">▶ 0:36</span>
      </button>
      <div class="rv">
        <p class="lead" style="margin-bottom:22px">${t(TX.lead)}</p>
        <button class="btn primary" data-go="trabajos">${t(VIEWS[3].label)} ${ic('arrow')}</button>
      </div>
    </div>
  </section>`;
}

function renderMarketing() {
  $('#v-marketing').innerHTML = `
    <span class="eyebrow rv">Rogers Digital Marketing</span>
    <h1 class="page-title rv">${t(TX.mkT)} <span class="acc warm-text">${t(TX.mkAcc)}</span></h1>
    <p class="lead rv">${t(TX.mkLead)}</p>
    <div class="svc-list glass rv" style="margin-top:36px">${MARKETING.map(s => `
      <div class="svc"><div class="ico">${ic(s.icon)}</div><div><b>${t(s.name)}</b><small>${t(s.desc)}</small></div><div class="price">${s.price}</div></div>`).join('')}
    </div>
    <section class="sec">
      ${head(t(TX.quote), t(TX.physT), t(TX.physAcc))}
      <div class="svc-list glass rv">${PHYSICAL.map(s => `
        <div class="svc"><div class="ico">${ic(s.icon)}</div><div><b>${t(s.name)}</b><small>${t(s.desc)}</small></div><div class="price q">${t(TX.quote)}</div></div>`).join('')}
      </div>
      <p class="note rv">${t(TX.note)}</p>
    </section>
    <section class="sec">
      ${head('', t(TX.pkT), t(TX.pkAcc))}
      <button class="btn grad rv" data-go="paquetes">${t(TX.ctaPk)} ${ic('arrow')}</button>
    </section>`;
}

function sysMedia(s) {
  if (s.media && s.media.v) return `<video src="${s.media.v}" muted loop playsinline autoplay preload="metadata"></video>`;
  if (s.media && s.media.i) return `<img src="${s.media.i}" alt="" loading="lazy" style="object-position:top">`;
  return `<div class="big-ico" style="color:${s.c}">${ic(s.icon)}</div>`;
}
function renderSistemas() {
  $('#v-sistemas').innerHTML = `
    <span class="eyebrow rv">Rogers · Tech</span>
    <h1 class="page-title rv">${t(TX.sysT)} <span class="acc grad-text">${t(TX.sysAcc)}</span></h1>
    <p class="lead rv">${t(TX.sysLead)}</p>
    <div class="grid g3" style="margin-top:36px">${SYSTEMS.map(s => `
      <button class="sys glass rv" data-sys="${s.id}" style="--c:${s.c}">
        <div class="sys-media">${s.live ? `<span class="live">${t(TX.liveLabel)}</span>` : ''}${sysMedia(s)}</div>
        <div class="sys-body"><h3>${t(s.name)}</h3><p>${t(s.short)}</p>
          <div class="sys-foot"><span class="price ${typeof s.price === 'string' ? '' : 'q'}">${t(s.price)}</span><span class="more">${t(TX.details)} ${ic('arrow')}</span></div>
        </div>
      </button>`).join('')}
    </div>
    <p class="note rv">${t(TX.note)}</p>`;
}

let workFilter = 'all';
function renderTrabajos() {
  const list = WORKS.filter(w => workFilter === 'all' || w.cat === workFilter);
  $('#v-trabajos').innerHTML = `
    <span class="eyebrow rv">Portfolio</span>
    <h1 class="page-title rv">${t(TX.wkT)} <span class="acc warm-text">${t(TX.wkAcc)}</span></h1>
    <p class="lead rv" style="margin-bottom:30px">${t(TX.wkLead)}</p>
    <div class="filters rv">${TX.filters.map(([k, l]) => `<button data-wf="${k}" class="${k === workFilter ? 'on' : ''}">${t(l)}</button>`).join('')}</div>
    <div class="works">${list.map(w => `
      <button class="work rv" data-lb="${w.type}" data-src="${w.src}">
        ${w.type === 'video' ? `<video src="${w.src}" muted loop playsinline autoplay preload="metadata"></video><span class="tag">▶ VIDEO</span>` : `<img src="${w.src}" alt="${w.name}" loading="lazy">`}
        <span class="cap"><b>${w.name}</b><small>${t(w.cap)}</small></span>
      </button>`).join('')}
    </div>
    <section class="sec">
      ${head('', t(TX.wallT), t(TX.wallAcc))}
      <div class="brand-wall">${BRANDS.map(([k, n]) => `<div class="rv" title="${n}"><img src="m/l_${k}.webp" alt="${n}" loading="lazy"></div>`).join('')}</div>
    </section>`;
}

function renderPaquetes() {
  $('#v-paquetes').innerHTML = `
    <span class="eyebrow rv">USD</span>
    <h1 class="page-title rv">${t(TX.pkT)} <span class="acc grad-text">${t(TX.pkAcc)}</span></h1>
    <p class="lead rv">${t(TX.pkLead)}</p>
    <div class="grid g3" style="margin-top:36px">${PACKS.map(p => `
      <div class="pk glass rv ${p.feat ? 'feat' : ''}">${p.feat ? `<span class="badge">${t(TX.rec)}</span>` : ''}
        <small>${t(p.small)}</small><h3>${t(p.name)}</h3>
        <div class="amt">${p.amt}<span>${t(p.per)}</span></div>
        <ul>${t(p.items).map(i => `<li>${i}</li>`).join('')}</ul>
        <button class="btn ${p.feat ? 'primary' : 'ghost'}" data-pick="${p.key}">${t(TX.wantIt)} ${ic('arrow')}</button>
      </div>`).join('')}
    </div>
    <p class="note rv">${t(TX.note)}</p>
    <section class="sec">
      ${head('', t(TX.mkT), t(TX.mkAcc))}
      <div class="chips rv">${MARKETING.map(s => `<span class="chip">${t(s.name)} · ${s.price}</span>`).join('')}</div>
    </section>`;
}

function renderProceso() {
  $('#v-proceso').innerHTML = `
    <span class="eyebrow rv">${t(VIEWS[5].label)}</span>
    <h1 class="page-title rv">${t(TX.prT)} <span class="acc grad-text">${t(TX.prAcc)}</span></h1>
    <p class="lead rv">${t(TX.prLead)}</p>
    <div class="steps" style="margin-top:36px">${STEPS.map(s => `
      <div class="step glass rv"><div class="n">${s.n}</div><div><h4>${t(s.t)}</h4><p>${t(s.d)}</p><span class="out">→ ${t(s.o)}</span></div></div>`).join('')}
    </div>
    <section class="sec">
      ${head('', t(TX.benT), t(TX.benAcc))}
      <div class="grid g3">${TX.bens.map(([i, h, p]) => `<div class="ben glass rv"><div class="ico">${ic(i)}</div><h4>${t(h)}</h4><p>${t(p)}</p></div>`).join('')}</div>
    </section>`;
}

let pick = '';
function renderContacto() {
  const packOpts = PACKS.map(p => `<option value="${p.key}" ${pick === p.key ? 'selected' : ''}>${t(p.name)} — ${p.amt}</option>`).join('')
    + SYSTEMS.map(s => `<option value="sys:${s.id}" ${pick === 'sys:' + s.id ? 'selected' : ''}>${t(s.name)}</option>`).join('')
    + `<option value="" ${!pick ? 'selected' : ''}>${t(TX.notSure)}</option>`;
  $('#v-contacto').innerHTML = `
    <span class="eyebrow rv">${t(VIEWS[6].label)}</span>
    <h1 class="page-title rv">${t(TX.ctT)} <span class="acc warm-text">${t(TX.ctAcc)}</span></h1>
    <p class="lead rv">${t(TX.ctLead)}</p>
    <div class="contact-grid" style="margin-top:36px">
      <form class="form glass rv" id="cform" onsubmit="return false">
        <div class="row2"><div class="fld"><label>${t(TX.fName)}</label><input id="fn" autocomplete="name"></div><div class="fld"><label>${t(TX.fRest)}</label><input id="fr"></div></div>
        <div class="row2"><div class="fld"><label>${t(TX.fCity)}</label><input id="fc" placeholder="Houston, TX"></div><div class="fld"><label>${t(TX.fType)}</label><select id="ft">${t(TX.types).map(x => `<option>${x}</option>`).join('')}</select></div></div>
        <div class="fld"><label>${t(TX.fPack)}</label><select id="fp">${packOpts}</select></div>
        <div class="fld"><label>${t(TX.fMsg)}</label><div class="msg" id="fmsg"></div></div>
        <a class="btn wa" id="fsend" href="#" target="_blank" rel="noopener">${ic('wa')}${t(TX.open)}</a>
      </form>
      <div class="side glass rv">
        <img src="m/logo_rogers.webp" alt="Rogers Digital Marketing" style="width:190px">
        <div><div class="big-wa">+52 294 113 1400</div><p class="muted" style="margin:4px 0 0">WhatsApp · ${t(TX.remote)}</p><p class="note" style="margin-top:8px">${t(TX.hours)}</p></div>
        <div><b style="font-family:var(--fd);font-size:18px">${t(TX.shareT)}</b></div>
        <div class="qr" id="qr"></div>
        <button class="btn ghost sm" id="copyLink">${ic('link')}${t(TX.copy)}</button>
      </div>
    </div>`;
  ['fn', 'fr', 'fc', 'ft', 'fp'].forEach(id => $('#' + id).addEventListener('input', buildMsg));
  buildMsg();
  if (!window.QRCode) $('#qr').style.display = 'none';
  try { if (window.QRCode) new QRCode($('#qr'), { text: location.href.split('#')[0], width: 136, height: 136, colorDark: '#07070B', colorLight: '#ffffff' }); } catch (e) {}
  $('#copyLink').onclick = async () => { try { await navigator.clipboard.writeText(location.href.split('#')[0]); toast(t(TX.copied)); } catch (e) { toast(location.href.split('#')[0]); } };
}
function buildMsg() {
  const n = $('#fn').value.trim(), r = $('#fr').value.trim(), c = $('#fc').value.trim(), ty = $('#ft').value, p = $('#fp').value;
  let what = t(TX.notSure);
  if (p.startsWith('sys:')) what = t(SYSTEMS.find(s => 'sys:' + s.id === p).name);
  else if (p) { const k = PACKS.find(x => x.key === p); what = `${t(k.name)} (${k.amt} ${t(k.per)})`; }
  const m = L === 'es'
    ? `Hola Rogers, soy ${n || '[tu nombre]'} de ${r || '[restaurante]'} (${ty}${c ? ', ' + c : ''}). Me interesa: ${what}. ¿Me compartes un ejemplo gratis?`
    : `Hi Rogers, I'm ${n || '[your name]'} from ${r || '[restaurant]'} (${ty}${c ? ', ' + c : ''}). I'm interested in: ${what}. Could you send me a free sample?`;
  $('#fmsg').textContent = m; $('#fsend').href = waLink(m);
}

function renderAll() {
  document.documentElement.lang = L;
  $('#brandSub').textContent = t(TX.sub); if ($('#splashSub')) if ($('#splashSub')) $('#splashSub').textContent = t(TX.splash);
  $('#topWa').innerHTML = ic('wa'); $('#topWa').href = waLink(t(TX.waIntro));
  $$('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === L));
  renderHome(); renderMarketing(); renderSistemas(); renderTrabajos(); renderPaquetes(); renderProceso(); renderContacto();
  buildDock(true);
  $$('.view').forEach(v => revealIn(v));
}

/* ---------- Navigation ---------- */
let current = 'home';
const viewEl = k => $(`.view[data-view="${k}"]`);
function go(key, opts = {}) {
  if (!VIEWS.find(v => v.key === key)) return;
  closeSheet(); closeLB();
  if (key === current && !opts.force) { viewEl(key).scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const apply = () => {
    $$('.view').forEach(v => v.classList.toggle('active', v.dataset.view === key));
    current = key; updateDock(); updateTopbar(viewEl(key));
    if (location.hash.slice(1) !== key) history.replaceState(null, '', key === 'home' ? location.pathname + location.search : '#' + key);
    viewEl(key).scrollTop = 0; revealIn(viewEl(key));
    $$('.view video').forEach(v => { if (v.closest('.view') === viewEl(key)) v.play().catch(() => {}); else v.pause(); });
  };
  if (supportsVT && !opts.instant) document.startViewTransition(apply); else apply();
}

/* ---------- Dock with magnification ---------- */
const dock = { items: [], base: 46, gap: 6, maxS: 1.75, active: false, built: false };
function buildDock(rebuild) {
  const tr = $('#dockTrack');
  tr.innerHTML = VIEWS.map(v => `<button class="dock-item" data-k="${v.key}" aria-label="${t(v.label)}">${ic(v.icon)}</button>`).join('');
  dock.items = $$('.dock-item', tr);
  sizeDock(); updateDock();
  if (dock.built) return; dock.built = true;
  addEventListener('resize', sizeDock);
  tr.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') return; dock.active = true; tr.setPointerCapture(e.pointerId); magnify(e.clientX); });
  tr.addEventListener('pointermove', e => { if (dock.active || e.pointerType === 'mouse') magnify(e.clientX); });
  tr.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') resetDock(); });
  tr.addEventListener('pointerup', e => {
    if (e.pointerType === 'mouse') { const k = dock.hover; if (k) go(k); return; }
    if (!dock.active) return; dock.active = false; const k = dock.hover; resetDock(); if (k) go(k);
  });
  tr.addEventListener('pointercancel', () => { dock.active = false; resetDock(); });
}
function sizeDock() {
  const n = VIEWS.length, vw = innerWidth;
  dock.gap = vw < 420 ? 5 : 8;
  dock.base = Math.max(30, Math.min(vw >= 900 ? 54 : 46, (vw - 44 - (n - 1) * dock.gap) / n));
  dock.maxS = vw < 420 ? 1.55 : 1.8;
  const tr = $('#dockTrack');
  tr.style.setProperty('--base', dock.base + 'px'); tr.style.gap = dock.gap + 'px'; tr.style.height = (dock.base + 20) + 'px';
  document.documentElement.style.setProperty('--dockH', (dock.base + 34) + 'px');
}
function magnify(px) {
  const n = dock.items.length, step = dock.base + dock.gap;
  const tr = $('#dockTrack').getBoundingClientRect(); const cx = tr.left + tr.width / 2;
  const sigma = dock.base * 1.15;
  const rest = dock.items.map((_, i) => (i - (n - 1) / 2) * step);
  const s = rest.map(r => { const d = (px - cx) - r; return 1 + (dock.maxS - 1) * Math.exp(-(d * d) / (2 * sigma * sigma)); });
  const extra = s.map(v => (v - 1) * dock.base), total = extra.reduce((a, b) => a + b, 0);
  let acc = 0; const off = [];
  for (let i = 0; i < n; i++) { off.push(acc + extra[i] / 2 - total / 2); acc += extra[i]; }
  const lim = innerWidth / 2 - 6; let minL = Infinity, maxR = -Infinity;
  for (let i = 0; i < n; i++) { const c = rest[i] + off[i], h = dock.base * s[i] / 2; minL = Math.min(minL, c - h); maxR = Math.max(maxR, c + h); }
  let shift = 0; if (maxR > lim) shift = lim - maxR; if (minL + shift < -lim) shift = -lim - minL;
  let best = 0, bd = Infinity;
  dock.items.forEach((el, i) => {
    el.style.transition = 'transform .14s cubic-bezier(.2,.8,.2,1)';
    el.style.transform = `translateX(${off[i] + shift}px) translateY(${-(s[i] - 1) * dock.base * .32}px) scale(${s[i]})`;
    const c = cx + rest[i] + off[i] + shift, d = Math.abs(px - c); if (d < bd) { bd = d; best = i; }
  });
  dock.hover = dock.items[best].dataset.k;
  const lab = $('#dockLabel'); lab.textContent = t(VIEWS[best].label); lab.classList.add('show');
  lab.style.left = (tr.width / 2 + rest[best] + off[best] + shift) + 'px';
  lab.style.bottom = `calc(100% + ${(s[best] - 1) * dock.base * .82 + 14}px)`;
}
function resetDock() {
  dock.items.forEach(el => { el.style.transition = 'transform .55s cubic-bezier(.34,1.56,.64,1)'; el.style.transform = ''; });
  $('#dockLabel').classList.remove('show'); dock.hover = null;
}
function updateDock() { dock.items.forEach(el => el.classList.toggle('on', el.dataset.k === current)); }

/* ---------- Scroll blur + topbar ---------- */
function blurScroller(sc) {
  const inner = sc.querySelector('.view-inner'); let last = sc.scrollTop, lt = performance.now(), b = 0, raf = 0, idle = 0;
  const tick = () => { idle++; if (idle > 2) b *= .8; inner.style.filter = b > .25 ? `blur(${b.toFixed(2)}px)` : ''; if (b > .25) raf = requestAnimationFrame(tick); else { raf = 0; inner.style.filter = ''; } };
  sc.addEventListener('scroll', () => {
    const now = performance.now(), dy = sc.scrollTop - last, dt = Math.max(1, now - lt); last = sc.scrollTop; lt = now; idle = 0;
    const v = Math.abs(dy / dt), target = Math.min(5, Math.max(0, (v - .4) * 2.2));
    b = b + (target - b) * .45; if (!raf) raf = requestAnimationFrame(tick);
    updateTopbar(sc);
  }, { passive: true });
}
function updateTopbar(sc) { $('#topbar').classList.toggle('solid', !!sc && sc.scrollTop > 24); }

/* ---------- Reveal ---------- */
let revObs = null;
function revealIn(root) {
  if (!('IntersectionObserver' in window)) { $$('.rv', root).forEach(e => e.classList.add('in')); return; }
  if (!revObs) revObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); } }), { threshold: .06, rootMargin: '0px 0px -4% 0px' });
  $$('.rv:not(.in)', root).forEach((el, i) => { el.style.transitionDelay = Math.min(i % 6, 5) * 70 + 'ms'; revObs.observe(el); });
}

/* ---------- Sheet (system details) ---------- */
function openSys(id) {
  const s = SYSTEMS.find(x => x.id === id); if (!s) return;
  $('#sheetBody').innerHTML = `
    <div class="sys-media" style="--c:${s.c};aspect-ratio:16/10">${s.live ? `<span class="live">${t(TX.liveLabel)}</span>` : ''}${sysMedia(s)}</div>
    <span class="eyebrow">Rogers · Tech</span>
    <h2>${t(s.name)}</h2>
    <p class="muted" style="font-size:17px">${t(s.short)}</p>
    <ul>${t(s.bullets).map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="price ${typeof s.price === 'string' ? '' : 'q'}" style="font-size:24px;margin-top:10px">${t(s.price)}</div>
    <div class="sheet-ctas">
      ${s.demo ? `<a class="btn primary" href="${s.demo}" target="_blank" rel="noopener">${ic('ext')}${t(TX.tryLive)}</a>` : ''}
      <button class="btn wa" data-pick="sys:${s.id}">${ic('wa')}${t(TX.wantIt)}</button>
    </div>`;
  $('#sheet').classList.add('open'); $('#sheet').setAttribute('aria-hidden', 'false');
}
function closeSheet() { $('#sheet').classList.remove('open'); $('#sheet').setAttribute('aria-hidden', 'true'); $$('#sheetBody video').forEach(v => v.pause()); }

/* ---------- Lightbox ---------- */
function openLB(type, src) {
  $('#lbInner').innerHTML = type === 'video' ? `<video src="${src}" controls autoplay playsinline style="max-height:calc(100vh - 100px)"></video>` : `<img src="${src}" alt="" style="max-height:calc(100vh - 100px)">`;
  $('#lightbox').classList.add('open');
}
function closeLB() { $('#lightbox').classList.remove('open'); $('#lbInner').innerHTML = ''; }

/* ---------- Toast ---------- */
let tt; function toast(m) { const el = $('#toast'); el.textContent = m; el.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => el.classList.remove('show'), 2200); }

/* ---------- Events ---------- */
document.addEventListener('click', e => {
  const g = e.target.closest('[data-go]'); if (g) { e.preventDefault(); go(g.dataset.go); return; }
  const sy = e.target.closest('[data-sys]'); if (sy) { openSys(sy.dataset.sys); return; }
  const pk = e.target.closest('[data-pick]'); if (pk) { pick = pk.dataset.pick; renderContacto(); revealIn(viewEl('contacto')); go('contacto', { force: true }); return; }
  const lb = e.target.closest('[data-lb]'); if (lb) { openLB(lb.dataset.lb, lb.dataset.src); return; }
  if (e.target.closest('[data-close]')) { closeSheet(); return; }
  if (e.target.closest('[data-lbclose]') || e.target.id === 'lightbox') { closeLB(); return; }
  const wf = e.target.closest('[data-wf]'); if (wf) { workFilter = wf.dataset.wf; const upd = () => { renderTrabajos(); $$('#v-trabajos .rv').forEach(x => x.classList.add('in')); }; supportsVT ? document.startViewTransition(upd) : upd(); return; }
  const lg = e.target.closest('[data-lang]'); if (lg && lg.dataset.lang !== L) {
    L = lg.dataset.lang; try { localStorage.setItem('rdm-lang', L); } catch (err) {}
    const upd = () => { renderAll(); $$('.view .rv').forEach(x => x.classList.add('in')); updateDock(); };
    supportsVT ? document.startViewTransition(upd) : upd();
  }
});
addEventListener('keydown', e => { if (e.key === 'Escape') { closeSheet(); closeLB(); } });
addEventListener('hashchange', () => { const k = location.hash.slice(1) || 'home'; if (k !== current) go(k); });

/* ---------- Boot ---------- */
renderAll();
$$('.view').forEach(blurScroller);
const startKey = VIEWS.find(v => v.key === location.hash.slice(1)) ? location.hash.slice(1) : 'home';
current = '';
go(startKey, { instant: true });
setTimeout(() => $('#splash').classList.add('out'), 1300);
setTimeout(() => $('#splash').remove(), 2400);
