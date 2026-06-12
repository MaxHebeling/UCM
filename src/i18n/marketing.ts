import type { Locale } from "./config";

const es = {
  tagline: "Formando a quienes transforman su futuro y el de su comunidad.",
  // Sección de diferenciadores (cierra la brecha de percepción)
  difEyebrow: "Lo que nos hace diferentes",
  difTitleA: "No es otra universidad. ", difTitleB: "Es UCM.",
  difDesc: "Seis razones por las que estudiar aquí cambia tu trayectoria profesional, no solo tu currículum.",
  diferenciadores: [
    { t: "Profesores que ejercen, no solo enseñan", d: "Jueces, magistrados, directivos y funcionarios en activo. Aprendes de quienes enfrentan los problemas reales de la profesión todos los días.", tag: "Aprendes de quienes toman decisiones en el mundo real." },
    { t: "Formación orientada a la práctica", d: "Casos reales, simulaciones, proyectos y resolución de problemas desde la primera sesión, no teoría que se queda en el aula.", tag: "Lo que aprendes hoy, lo aplicas mañana en tu trabajo." },
    { t: "Atención personalizada y cercanía", d: "Aquí no eres un número. Seguimiento cercano, comunicación directa y flexibilidad para atender tus necesidades.", tag: "Una experiencia académica cercana y humana." },
    { t: "Vinculación con sectores estratégicos", d: "Convenios con gobiernos, el Poder Judicial, empresas y organismos profesionales que abren puertas y networking real.", tag: "Estudias conectado con el entorno donde se toman las decisiones." },
    { t: "Diseñada para profesionistas en activo", d: "Horarios ejecutivos, fines de semana y en línea. Un modelo que entiende que ya tienes empleo, familia y responsabilidades.", tag: "Posgrados compatibles con tu vida profesional, sin sacrificar calidad." },
    { t: "Formación con propósito social", d: "Desarrollo comunitario, responsabilidad social y fortalecimiento institucional. La formación no se limita al éxito individual.", tag: "Formamos profesionales que generan impacto en su comunidad." },
  ],
  // Para profesionistas en activo (motivaciones de compra)
  proEyebrow: "Centro de Posgrado UCM",
  proTitle: "No estudias por el diploma. Estudias por lo que viene después.",
  proDesc: "Diseñado para profesionales de 25 a 50 años que ya trabajan y buscan crecer sin pausar su carrera. Un título con validez oficial y, sobre todo, con aplicación inmediata.",
  proMotiv: ["Una mejor posición laboral", "Un incremento salarial", "Acceso a puestos directivos", "Prestigio profesional", "Habilidades de liderazgo y gestión", "Una red de contactos sólida", "Credenciales para concursos y promociones"],
  proCta: "Quiero crecer profesionalmente",
  // Oferta secundaria
  secEyebrow: "Más formas de formarte",
  secTitle: "Diplomados, cursos y certificaciones",
  secDesc: "Además de nuestros programas con RVOE, ofrecemos formación corta y especializada para actualizarte y certificar tus habilidades a tu ritmo.",
  secItems: [
    { t: "Diplomados", d: "Especialización en temas clave, con enfoque práctico y aplicable de inmediato." },
    { t: "Cursos", d: "Formación puntual para actualizar conocimientos y herramientas específicas." },
    { t: "Certificaciones", d: "Valida y acredita tus competencias profesionales ante el mercado." },
  ],
  // Barra de promoción
  promo: "Inscripciones abiertas · beca de inscripción hasta -50% este mes",
  promoCta: "Ver becas",
  // Teaser del claustro en home
  clEyebrow: "Claustro docente",
  clTitleA: "Aprende de quienes ", clTitleB: "ejercen, no solo enseñan",
  clDesc: "Jueces, magistrados, directivos empresariales y especialistas en activo imparten clase en UCM. Aprendes de quienes toman decisiones en el mundo real.",
  clCta: "Conoce al claustro",
  // Modalidades
  modEyebrow: "Modalidades",
  modTitleA: "Estudia ", modTitleB: "sin dejar de trabajar",
  modDesc: "Elige el formato que se adapta a tu vida profesional. La misma calidad y validez oficial, a tu ritmo.",
  modalidades: [
    { t: "Ejecutiva", d: "Clases en fines de semana, pensadas para quien ya trabaja.", ej: "Sáb 9:00 – 14:00" },
    { t: "En línea", d: "Estudia desde donde estés con la Plataforma UCM, a tu propio ritmo.", ej: "100% en línea" },
    { t: "Presencial", d: "Vive el campus en Tampico con horarios entre semana.", ej: "Campus Tampico" },
  ],
  // FAQ home
  brochureT: "¿Quieres compartirlo o revisarlo con calma?",
  brochureD: "Descarga el folleto institucional de UCM con toda la oferta, respaldos y datos de contacto.",
  brochureCta: "Descargar folleto (PDF)",
  faqEyebrow: "Resuelve tus dudas",
  faqTitle: "Preguntas frecuentes",
  faqs: [
    { q: "¿Los programas tienen validez oficial?", a: "Sí. Todos cuentan con Reconocimiento de Validez Oficial de Estudios (RVOE) ante la SEP, y la preparatoria está incorporada a la UAT. Puedes verificarlo en SIRVOES con nuestra clave 28PSU0124A." },
    { q: "¿Puedo estudiar si ya trabajo?", a: "Sí, es justo para quien trabaja: tenemos modalidad ejecutiva en fines de semana y opciones en línea, con horarios diseñados para profesionales activos." },
    { q: "¿Cuánto cuesta y hay becas?", a: "La inversión se arma de forma personalizada según el programa. Hay beca de inscripción de hasta 50%, beca en mensualidad y becas empresariales. Pide tu cotización sin compromiso por WhatsApp." },
    { q: "¿En cuánto tiempo termino?", a: "Las licenciaturas se cursan en 9 cuatrimestres y los posgrados ejecutivos en 5–6 cuatrimestres (aprox. 1 año 8 meses), más rápido que el promedio." },
    { q: "¿El título sirve para titularme y obtener cédula?", a: "Sí. Al contar con RVOE, puedes titularte y tramitar tu cédula profesional ante la Dirección General de Profesiones de la SEP." },
    { q: "¿Cómo me inscribo?", a: "Solicita informes por WhatsApp o el formulario; un asesor te guía en el proceso y los requisitos según el programa que elijas." },
  ],
};

const en: typeof es = {
  tagline: "Shaping those who transform their future and their community's.",
  difEyebrow: "What makes us different",
  difTitleA: "Not just another university. ", difTitleB: "This is UCM.",
  difDesc: "Six reasons studying here changes your professional path, not just your résumé.",
  diferenciadores: [
    { t: "Professors who practice, not just teach", d: "Active judges, magistrates, executives and public officials. You learn from those who face the real problems of the profession every day.", tag: "You learn from those who make real-world decisions." },
    { t: "Practice-oriented education", d: "Real cases, simulations, projects and problem-solving from the very first session — not theory that stays in the classroom.", tag: "What you learn today, you apply at work tomorrow." },
    { t: "Personalized attention and closeness", d: "Here you're not a number. Close follow-up, direct communication and the flexibility to meet your needs.", tag: "A close, human academic experience." },
    { t: "Ties to strategic sectors", d: "Agreements with governments, the Judiciary, companies and professional bodies that open doors and real networking.", tag: "You study connected to where decisions are made." },
    { t: "Built for working professionals", d: "Executive, weekend and online schedules. A model that understands you already have a job, a family and responsibilities.", tag: "Graduate programs that fit your professional life, without sacrificing quality." },
    { t: "Education with social purpose", d: "Community development, social responsibility and institutional strengthening. Education isn't limited to individual success.", tag: "We shape professionals who create impact in their community." },
  ],
  proEyebrow: "UCM Graduate Center",
  proTitle: "You don't study for the diploma. You study for what comes next.",
  proDesc: "Designed for working professionals aged 25 to 50 who want to grow without pausing their career. An officially-recognized degree and, above all, one with immediate application.",
  proMotiv: ["A better job position", "A higher salary", "Access to leadership roles", "Professional prestige", "Leadership and management skills", "A strong professional network", "Credentials for competitions and promotions"],
  proCta: "I want to grow professionally",
  secEyebrow: "More ways to learn",
  secTitle: "Diploma programs, courses and certifications",
  secDesc: "Beyond our RVOE programs, we offer short, specialized training to keep you up to date and certify your skills at your own pace.",
  secItems: [
    { t: "Diploma programs", d: "Specialization in key topics, with a practical, immediately applicable focus." },
    { t: "Courses", d: "Focused training to update specific knowledge and tools." },
    { t: "Certifications", d: "Validate and accredit your professional skills before the market." },
  ],
  promo: "Enrollment open · enrollment scholarship up to -50% this month",
  promoCta: "See scholarships",
  clEyebrow: "Faculty",
  clTitleA: "Learn from those who ", clTitleB: "practice, not just teach",
  clDesc: "Active judges, magistrates, business executives and specialists teach at UCM. You learn from those who make real-world decisions.",
  clCta: "Meet the faculty",
  modEyebrow: "Study formats",
  modTitleA: "Study ", modTitleB: "without pausing your career",
  modDesc: "Choose the format that fits your professional life. The same quality and official recognition, at your own pace.",
  modalidades: [
    { t: "Executive", d: "Weekend classes, designed for those who already work.", ej: "Sat 9:00 AM – 2:00 PM" },
    { t: "Online", d: "Study from anywhere with the UCM Platform, at your own pace.", ej: "100% online" },
    { t: "On campus", d: "Experience the Tampico campus with weekday schedules.", ej: "Tampico campus" },
  ],
  brochureT: "Want to share it or review it at your own pace?",
  brochureD: "Download UCM's institutional brochure with the full offering, accreditations and contact details.",
  brochureCta: "Download brochure (PDF)",
  faqEyebrow: "Answers to your questions",
  faqTitle: "Frequently asked questions",
  faqs: [
    { q: "Are the programs officially recognized?", a: "Yes. They all hold Official Recognition of Studies (RVOE) from the SEP, and the high school is affiliated with UAT. You can verify it in SIRVOES with our code 28PSU0124A." },
    { q: "Can I study while working?", a: "Yes — it's built for working people: we offer a weekend executive format and online options, with schedules designed for active professionals." },
    { q: "How much does it cost, and are there scholarships?", a: "The investment is tailored to each program. There's an enrollment scholarship of up to 50%, a monthly-tuition scholarship and corporate scholarships. Request a no-obligation quote via WhatsApp." },
    { q: "How long does it take to finish?", a: "Bachelor's programs run for 9 quarters and executive graduate programs for 5–6 quarters (about 1 year 8 months) — faster than average." },
    { q: "Does the degree let me graduate and get a professional license?", a: "Yes. Because it holds RVOE, you can graduate and obtain your professional license (cédula) through the SEP's General Directorate of Professions." },
    { q: "How do I enroll?", a: "Request information via WhatsApp or the form; an advisor will guide you through the process and requirements for the program you choose." },
  ],
};

const dicts = { es, en };
export function getMarketing(lang: Locale): typeof es {
  return dicts[lang] ?? es;
}
