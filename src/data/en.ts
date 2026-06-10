// Native English content mirroring src/data/site.ts (same slugs/structure, translated copy).
import type { Programa } from "./site";

export const statsEN = [
  { value: "234", label: "Graduating generations" },
  { value: "+1,519", label: "Bachelor's, Master's and Doctoral graduates" },
  { value: "16", label: "Years of educational quality" },
  { value: "+5,840", label: "Cups of coffee" },
];

export const valoresEN = [
  { t: "Integrity", d: "Academic honesty and professional ethics as the foundation of everything we teach." },
  { t: "Culture", d: "A humanistic outlook that reaches beyond the classroom and shapes well-rounded citizens." },
  { t: "Quality", d: "Up-to-date curricula, official recognition, and a faculty with real-world experience." },
];

export const respaldosEN = [
  {
    name: "General Directorate of Professions (SEP)",
    detail: "We hold Official Recognition of Studies (RVOE) before Mexico's Ministry of Education (SEP) and the General Directorate of Professions for the issuance of degrees and professional licenses, under Agreement No. NS012/10/2009.",
    logo: "/respaldos/sep.png",
    href: "https://sirvoes.sep.gob.mx/sirvoes/mvc/consultas",
  },
  {
    name: "University of Cambridge",
    detail: "Authorized as a Preparation Center for Cambridge English certifications. Working with Cambridge Assessment English means access to a wide range of exams and support.",
    logo: "/respaldos/cambridge.jpg",
    href: "https://www.cambridgeenglish.org/latinamerica/",
  },
  {
    name: "Tamaulipas Ministry of Education",
    detail: "We hold Official Recognition of Studies before the Tamaulipas Ministry of Education for the issuance of certificates and degrees, with School Code (CCT) 28PSU0124A.",
    logo: "/respaldos/set-tamaulipas.png",
    href: "https://www.tamaulipas.gob.mx/educacion/instituciones-privadas-superior-con-rvoe/",
  },
  {
    name: "Official Recognition of Studies (RVOE)",
    detail: "Under agreement numbers: NS012/10/2009 · NS/27/08/2015 · NS/05/01/2019 · NS/06/01/2019 · NS/07/01/2019 · NS/14/05/2024 · NS/15/05/2024.",
    logo: "/respaldos/rvoe.png",
    href: "https://sirvoes.sep.gob.mx/sirvoes/mvc/consultas",
  },
  {
    name: "USICAMM",
    detail: "Unit of the System for the Career of Teachers: earn a higher score toward a federal teaching position with the SEP, as well as for vertical and horizontal promotion through the academic-degree factor (applies to graduate programs).",
    logo: "/respaldos/usicamm.png",
    href: "http://usicamm.sep.gob.mx",
  },
  {
    name: "Autonomous University of Tamaulipas",
    detail: "The UCM High School is affiliated with the Autonomous University of Tamaulipas (Upper Secondary No. 44) with recognition as a general high-school diploma.",
    logo: "/respaldos/uat.jpg",
    href: "https://www.uat.edu.mx/SACD/Paginas/Educaci%C3%B3n-Media-Superior.aspx",
  },
];

// Testimonials: real Google reviews — names kept, quotes translated to natural English.
export const testimoniosEN = [
  { name: "Melissa Arlette Yeseña Arreguín Grimaldo", text: "Excellent teachers, the best academic level to keep growing. UCM, THE BEST ❤", stars: 5 },
  { name: "César Augusto Castañeda Acosta", text: "Excellent institution, the best teachers — Doctors in Education. My school.", stars: 5 },
  { name: "Obed Hernández Ángeles", text: "The best teachers, the most effective support, and a highly qualified staff.", stars: 5 },
  { name: "Diana Jonguitud", text: "Enrolling here was my best decision: top educational quality, excellent curricula and convenient schedules.", stars: 5 },
];

export const identidadEN = {
  quienesSomos:
    "An institution of higher education with Official Recognition of Studies, specialized in delivering quality education at the upper-secondary, undergraduate and graduate levels.",
  mision:
    "To prepare and transform outstanding professionals, education specialists and researchers, with the highest quality and pedagogical efficiency across every field and level of knowledge.",
  vision:
    "An institution that endures through its graduates and team, revolutionizing, modernizing and updating its academic areas holistically, achieving high levels of efficiency and output for the benefit of society.",
};

export const programasEN: Programa[] = [
  {
    slug: "preparatoria", nivel: "Preparatoria", nombre: "UCM High School",
    resumen: "A general high-school diploma affiliated with the Autonomous University of Tamaulipas — a solid academic foundation for your child's university future.",
    modalidad: "On-campus · fully online executive track", duracion: "3 years · 6 semesters", rvoe: true, destacado: true,
    beneficios: ["Affiliated with UAT (Upper Secondary No. 44) as a General High-School Diploma", "On-campus: Monday to Friday, 8:10 AM to 1:40 PM", "Executive track: Mon/Wed/Fri, 6:00 PM to 8:30 PM", "\"Know, Know-how and Know-how-to-be\" model", "Direct pathway into UCM bachelor's programs"],
  },
  {
    slug: "licenciatura-en-derecho", nivel: "Licenciatura", nombre: "Bachelor's in Law (Oral Trials)",
    resumen: "Specialized training in the adversarial criminal-justice system, with a hands-on approach and a faculty of practicing attorneys, judges and prosecutors.",
    modalidad: "Executive · weekends · online", duracion: "9 quarters", rvoe: true, destacado: true,
    areas: ["Civil law", "Criminal", "Commercial", "Tax", "Amparo", "Oral trials"],
    salidas: ["Trial attorney", "Public defender", "Prosecutor", "Legal advisor"],
    beneficios: ["Specialized training in oral trials", "Comprehensive, up-to-date curriculum", "Executive weekend format", "Faculty with real courtroom experience"],
  },
  {
    slug: "licenciatura-en-contaduria", nivel: "Licenciatura", nombre: "Bachelor's in Public Accounting & Auditing",
    resumen: "Professionals capable of leading the financial and tax information of any organization, with mastery of auditing and current regulations.",
    modalidad: "Executive · online", duracion: "9 quarters", rvoe: true, destacado: true,
    salidas: ["Public accountant", "Auditor", "Tax advisor", "Administrative director"],
    beneficios: ["Focus on auditing and taxation", "Practice with real cases", "Flexible format for working professionals", "Official SEP recognition"],
  },
  {
    slug: "licenciatura-administracion-empresa", nivel: "Licenciatura", nombre: "Bachelor's in Business Administration",
    resumen: "Leaders able to plan, direct and grow organizations with strategic, financial and human-capital vision.",
    modalidad: "Executive · online", duracion: "9 quarters", rvoe: true,
    salidas: ["Manager / Director", "Entrepreneur", "Business consultant", "Head of operations"],
    beneficios: ["Comprehensive strategic vision", "Leadership and human capital", "Flexible format", "Official SEP recognition"],
  },
  {
    slug: "licenciatura-en-comercio-exterior", nivel: "Licenciatura", nombre: "Bachelor's in International Trade",
    resumen: "Specialists in international logistics, customs and global business — a high-demand career in the Tampico-Altamira port region.",
    modalidad: "Executive · online", duracion: "9 quarters", rvoe: true,
    salidas: ["Customs broker", "Logistics specialist", "International trade", "Import / export"],
    beneficios: ["Focus on the port region", "Logistics and customs", "High-demand career", "Official SEP recognition"],
  },
  {
    slug: "licenciatura-en-pedagogia", nivel: "Licenciatura", nombre: "Bachelor's Degrees in Pedagogy",
    resumen: "Trains specialized teachers and counselors: Mathematics, Spanish, English, Social Sciences, Natural Sciences, Guidance and Educational Development.",
    modalidad: "Online · executive", duracion: "9 quarters", rvoe: true,
    salidas: ["Specialized teacher", "Educational counselor", "Curriculum designer", "Educational research"],
    beneficios: ["7 pedagogical specialties", "USICAMM scoring", "Online format", "Official SEP recognition"],
  },
  {
    slug: "maestria-metodologia-formacion", nivel: "Maestría", nombre: "Master's in Teaching & Learning Methodology",
    resumen: "Elevate your teaching practice with current teaching-and-learning methodologies. Short-duration executive format with official SEP recognition.",
    modalidad: "Executive · on-campus / hybrid", duracion: "1 year 8 months · 5 quarters · 120 credits", rvoe: true, destacado: true,
    beneficios: ["Executive schedules for working professionals", "120 credits across 5 quarters", "Higher USICAMM scoring", "Thesis and degree examination"],
  },
  {
    slug: "maestria-administracion-instituciones", nivel: "Maestría", nombre: "Master's in Educational Institution Management",
    resumen: "Lead schools and educational institutions with high-level management, leadership and school-administration tools.",
    modalidad: "Executive · on-campus / hybrid", duracion: "1 year 8 months · 5 quarters · 120 credits", rvoe: true,
    beneficios: ["Educational management and leadership", "Executive schedules", "USICAMM scoring", "Official SEP recognition"],
  },
  {
    slug: "mba", nivel: "MBA", nombre: "MBA · Master's in Executive Management & Business",
    resumen: "An executive top-management program with first-rate strategic partners. Shapes business leaders with a global outlook.",
    modalidad: "Executive · online", duracion: "5 quarters", rvoe: true, destacado: true,
    beneficios: ["Strategic business alliances", "Focus on top management", "Executive networking", "Official SEP recognition"],
  },
  {
    slug: "doctorado-en-educacion", nivel: "Doctorado", nombre: "Doctorate in Educational Development",
    resumen: "The highest degree in education. Develop high-impact research and reach the top professional and academic standing in the field.",
    modalidad: "Executive · online", duracion: "Short-duration graduate program", rvoe: true, destacado: true,
    beneficios: ["Applied research lines", "Maximum USICAMM scoring", "Doctoral faculty", "Official SEP recognition"],
  },
];
