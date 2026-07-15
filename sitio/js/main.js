/* Albert Barrios — interacción: i18n ES/EN, header, reveals, contadores */

/* ---------------- i18n ---------------- */
const I18N = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.eyebrow': 'Arquitectura · Interiorismo · Diseño',
    'hero.sub': 'Espacios que se dibujan primero y se habitan después.',
    'hero.cta': 'Ver proyectos',
    'hero.scroll': 'Desliza',
    'about.eyebrow': 'Sobre mí',
    'about.title': 'Del boceto a la obra',
    'about.p1': 'Soy arquitecto y diseñador. Acompaño cada proyecto desde la primera idea hasta el último detalle constructivo, cuidando la luz, la proporción y los materiales.',
    'about.p2': 'Trabajo proyectos residenciales, comerciales y de interiorismo, siempre con una premisa: que el espacio cuente la historia de quien lo habita.',
    'about.ig': 'Sígueme en Instagram',
    'ph.portrait': 'Foto de Albert — pendiente',
    'stats.projects': 'Proyectos realizados',
    'stats.years': 'Años de experiencia',
    'stats.clients': 'Clientes satisfechos',
    'stats.cities': 'Ciudades con obra',
    'services.eyebrow': 'Servicios',
    'services.title': 'Lo que puedo hacer por tu espacio',
    'services.s1.t': 'Proyecto arquitectónico',
    'services.s1.d': 'Diseño integral de obra nueva: anteproyecto, proyecto ejecutivo y acompañamiento en obra.',
    'services.s2.t': 'Interiorismo',
    'services.s2.d': 'Diseño de interiores residenciales y comerciales: mobiliario, materiales, iluminación y ambientación.',
    'services.s3.t': 'Remodelación',
    'services.s3.d': 'Transformación de espacios existentes, optimizando distribución, luz natural y funcionalidad.',
    'services.s4.t': 'Visualización 3D',
    'services.s4.d': 'Renders y recorridos virtuales para ver tu proyecto antes de construir el primer muro.',
    'projects.eyebrow': 'Proyectos',
    'projects.title': 'Obra seleccionada',
    'projects.note': 'Las imágenes actuales son provisionales; se reemplazarán con fotografías reales de cada proyecto.',
    'projects.tag.res': 'Residencial',
    'projects.tag.int': 'Interiorismo',
    'projects.tag.com': 'Comercial',
    'projects.tag.rem': 'Remodelación',
    'projects.p1': 'Casa — Proyecto 01',
    'projects.p2': 'Interior — Proyecto 02',
    'projects.p3': 'Local — Proyecto 03',
    'projects.p4': 'Casa — Proyecto 04',
    'projects.p5': 'Remodelación — Proyecto 05',
    'projects.p6': 'Interior — Proyecto 06',
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Hablemos de tu proyecto',
    'contact.p': 'Escríbeme por Instagram o correo y platicamos sin compromiso.',
    'contact.mailLabel': 'correo — pendiente',
    'footer.tag': 'Arquitectura & Diseño'
  },
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Architecture · Interiors · Design',
    'hero.sub': 'Spaces drawn first, lived in after.',
    'hero.cta': 'View projects',
    'hero.scroll': 'Scroll',
    'about.eyebrow': 'About me',
    'about.title': 'From sketch to built work',
    'about.p1': 'I am an architect and designer. I guide each project from the first idea to the last construction detail, with care for light, proportion and materials.',
    'about.p2': 'I work on residential, commercial and interior design projects, always with one premise: the space should tell the story of the people who live in it.',
    'about.ig': 'Follow me on Instagram',
    'ph.portrait': 'Photo of Albert — pending',
    'stats.projects': 'Completed projects',
    'stats.years': 'Years of experience',
    'stats.clients': 'Happy clients',
    'stats.cities': 'Cities with built work',
    'services.eyebrow': 'Services',
    'services.title': 'What I can do for your space',
    'services.s1.t': 'Architectural design',
    'services.s1.d': 'Full design for new builds: concept, construction documents and on-site supervision.',
    'services.s2.t': 'Interior design',
    'services.s2.d': 'Residential and commercial interiors: furniture, materials, lighting and styling.',
    'services.s3.t': 'Renovation',
    'services.s3.d': 'Transforming existing spaces by improving layout, natural light and functionality.',
    'services.s4.t': '3D visualization',
    'services.s4.d': 'Renders and virtual walkthroughs to see your project before the first wall is built.',
    'projects.eyebrow': 'Projects',
    'projects.title': 'Selected work',
    'projects.note': 'Current images are placeholders; they will be replaced with real photos of each project.',
    'projects.tag.res': 'Residential',
    'projects.tag.int': 'Interiors',
    'projects.tag.com': 'Commercial',
    'projects.tag.rem': 'Renovation',
    'projects.p1': 'House — Project 01',
    'projects.p2': 'Interior — Project 02',
    'projects.p3': 'Retail — Project 03',
    'projects.p4': 'House — Project 04',
    'projects.p5': 'Renovation — Project 05',
    'projects.p6': 'Interior — Project 06',
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's talk about your project",
    'contact.p': 'Reach out on Instagram or by email — no strings attached.',
    'contact.mailLabel': 'email — pending',
    'footer.tag': 'Architecture & Design'
  }
};

function setLang(lang) {
  const dict = I18N[lang] || I18N.es;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang-opt]').forEach(function (el) {
    el.classList.toggle('is-active', el.getAttribute('data-lang-opt') === lang);
  });
  try { localStorage.setItem('ab-lang', lang); } catch (e) { /* modo privado */ }
}

document.getElementById('langToggle').addEventListener('click', function () {
  const next = document.documentElement.lang === 'es' ? 'en' : 'es';
  setLang(next);
});

(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('ab-lang'); } catch (e) { /* modo privado */ }
  if (saved) setLang(saved);
})();

/* ---------------- header sólido al hacer scroll ---------------- */
const header = document.querySelector('.site-header');
function onScroll() {
  header.classList.toggle('is-solid', window.scrollY > 40);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------------- menú móvil ---------------- */
const burger = document.getElementById('navBurger');
burger.addEventListener('click', function () {
  const open = document.body.classList.toggle('nav-open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('.site-nav a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

/* ---------------- reveal al hacer scroll ---------------- */
const revealables = document.querySelectorAll('.section .wrap > *, .service, .project');
revealables.forEach(function (el) { el.classList.add('reveal'); });
const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealables.forEach(function (el) { io.observe(el); });

/* ---------------- contadores de estadísticas ---------------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-count]').forEach(function (el) {
  const target = parseInt(el.getAttribute('data-count'), 10);
  if (reduceMotion) { el.textContent = target; return; }
  const obs = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    const start = performance.now();
    const dur = 1400;
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }, { threshold: 0.5 });
  obs.observe(el);
});

/* ---------------- año en el footer ---------------- */
document.getElementById('year').textContent = new Date().getFullYear();
