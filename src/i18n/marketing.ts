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
};

const dicts = { es, en };
export function getMarketing(lang: Locale): typeof es {
  return dicts[lang] ?? es;
}
