// Contenido institucional UCMAC — migrado fielmente del sitio actual (ucmac.edu.mx)

export const inst = {
  name: "Universidad Cultural Metropolitana",
  legal: "Universidad Cultural Metropolitana A.C.",
  short: "UCM",
  motto: "Honestidad, Cultura y Calidad",
  tagline: "Forma profesionales con conocimiento sólido y valores humanistas.",
  founded: 2009,
  years: 16,
  students: 342,
  graduates: 800,
  city: "Tampico, Tamaulipas",
  address: "Dr. Alfonso G. Alarcón 305 Nte, Zona Centro, C.P. 89000, Tampico, Tamaulipas",
  phone: "833 305 6138",
  phoneIntl: "+528333056138",
  whatsapp: "https://wa.link/z5ue9x",
  email: "direccion@ucmac.edu.mx",
  rvoe: "NS012/10/2009",
  rvoeAll: ["NS012/10/2009", "NS/27/08/2015", "NS/05/01/2019", "NS/06/01/2019", "NS/07/01/2019", "NS/14/05/2024", "NS/15/05/2024"],
  cct: "28PSU0124A",
  facebook: "https://www.facebook.com/ucmtampico",
  instagram: "https://www.instagram.com/ucmtampico",
  platform: "https://www.plataformaucm.net",
  online: "https://www.ucmenlinea.com/ucmalumnos",
};

export const stats = [
  { value: "16", label: "Años de trayectoria" },
  { value: "RVOE", label: "Validez oficial SEP" },
  { value: "800+", label: "Egresados" },
  { value: "100%", label: "En línea o presencial" },
];

export const respaldos = [
  { name: "Dirección General de Profesiones (SEP)", detail: "Reconocimiento de Validez Oficial de Estudios para la expedición de Títulos y Cédulas Electrónicas. Acuerdo No. NS012/10/2009." },
  { name: "Secretaría de Educación de Tamaulipas", detail: "RVOE estatal para expedición de Certificados y Títulos. Clave de Centro de Trabajo 28PSU0124A (No. 57 en el listado)." },
  { name: "Universidad de Cambridge", detail: "Centro de Preparación autorizado para Certificaciones de Cambridge English / Cambridge Assessment English." },
  { name: "USICAMM", detail: "Mayor valoración para plaza federal en la SEP y promoción vertical y horizontal por grado académico (aplica en posgrados)." },
  { name: "Universidad Autónoma de Tamaulipas", detail: "Preparatoria UCM incorporada (Media Superior No. 44) con reconocimiento de bachillerato general único." },
];

export const valores = [
  { t: "Honestidad", d: "Integridad académica y ética profesional como base de toda nuestra formación." },
  { t: "Cultura", d: "Una visión humanista que trasciende el aula y forma ciudadanos íntegros." },
  { t: "Calidad", d: "Planes de estudio actualizados, validez oficial y un claustro con experiencia real." },
];

export type Programa = {
  slug: string;
  nivel: "Preparatoria" | "Licenciatura" | "Maestría" | "MBA" | "Doctorado";
  nombre: string;
  resumen: string;
  modalidad: string;
  duracion: string;
  rvoe?: boolean;
  destacado?: boolean;
  beneficios: string[];
  salidas?: string[];
  areas?: string[];
};

export const programas: Programa[] = [
  {
    slug: "preparatoria",
    nivel: "Preparatoria",
    nombre: "Preparatoria UCM",
    resumen: "Bachillerato general único incorporado a la Universidad Autónoma de Tamaulipas. Una base académica sólida para el futuro universitario de tu hijo.",
    modalidad: "Presencial",
    duracion: "3 años · 6 semestres",
    rvoe: true,
    destacado: true,
    beneficios: [
      "Incorporada a la UAT (Media Superior No. 44)",
      "Acompañamiento académico cercano",
      "Preparación Cambridge English",
      "Pase directo a las licenciaturas UCM",
    ],
  },
  {
    slug: "licenciatura-en-derecho",
    nivel: "Licenciatura",
    nombre: "Licenciatura en Derecho (Juicios Orales)",
    resumen: "Formación especializada en el sistema de justicia penal acusatorio, con enfoque práctico y un claustro de abogados, jueces y fiscales en activo.",
    modalidad: "Ejecutiva · fines de semana · en línea",
    duracion: "9 cuatrimestres",
    rvoe: true,
    destacado: true,
    areas: ["Derecho civil", "Penal", "Mercantil", "Fiscal", "Amparo", "Juicios orales"],
    salidas: ["Abogado litigante", "Defensor público", "Fiscal / Ministerio Público", "Asesor jurídico"],
    beneficios: [
      "Formación especializada en juicios orales",
      "Programa integral y actualizado",
      "Modalidad ejecutiva en fines de semana",
      "Claustro docente con experiencia real en litigio",
    ],
  },
  {
    slug: "licenciatura-en-contaduria",
    nivel: "Licenciatura",
    nombre: "Licenciatura en Contaduría Pública y Auditoría",
    resumen: "Profesionales capaces de dirigir la información financiera y fiscal de cualquier organización, con dominio de auditoría y normatividad vigente.",
    modalidad: "Ejecutiva · en línea",
    duracion: "9 cuatrimestres",
    rvoe: true,
    destacado: true,
    salidas: ["Contador público", "Auditor", "Asesor fiscal", "Director administrativo"],
    beneficios: [
      "Enfoque en auditoría y fiscal",
      "Prácticas con casos reales",
      "Modalidad flexible para quienes trabajan",
      "Validez oficial SEP",
    ],
  },
  {
    slug: "licenciatura-administracion-empresa",
    nivel: "Licenciatura",
    nombre: "Licenciatura en Administración de Empresas",
    resumen: "Líderes capaces de planear, dirigir y hacer crecer organizaciones con visión estratégica, financiera y de capital humano.",
    modalidad: "Ejecutiva · en línea",
    duracion: "9 cuatrimestres",
    rvoe: true,
    salidas: ["Gerente / Director", "Emprendedor", "Consultor de negocios", "Jefe de operaciones"],
    beneficios: ["Visión estratégica integral", "Liderazgo y capital humano", "Modalidad flexible", "Validez oficial SEP"],
  },
  {
    slug: "licenciatura-en-comercio-exterior",
    nivel: "Licenciatura",
    nombre: "Licenciatura en Comercio Exterior",
    resumen: "Especialistas en logística internacional, aduanas y negocios globales, una carrera de alta demanda en la zona portuaria de Tampico-Altamira.",
    modalidad: "Ejecutiva · en línea",
    duracion: "9 cuatrimestres",
    rvoe: true,
    salidas: ["Agente aduanal", "Especialista en logística", "Comercio internacional", "Importación / exportación"],
    beneficios: ["Enfoque en la zona portuaria", "Logística y aduanas", "Carrera de alta demanda", "Validez oficial SEP"],
  },
  {
    slug: "licenciatura-en-pedagogia",
    nivel: "Licenciatura",
    nombre: "Licenciaturas en Pedagogía",
    resumen: "Forma docentes y orientadores especializados: Matemáticas, Español, Inglés, Ciencias Sociales, Ciencias Naturales, Orientación y Desarrollo Educativo.",
    modalidad: "En línea · ejecutiva",
    duracion: "9 cuatrimestres",
    rvoe: true,
    salidas: ["Docente especializado", "Orientador educativo", "Diseñador de planes de estudio", "Investigación educativa"],
    beneficios: ["7 especialidades pedagógicas", "Valoración USICAMM", "Modalidad en línea", "Validez oficial SEP"],
  },
  {
    slug: "maestria-metodologia-formacion",
    nivel: "Maestría",
    nombre: "Maestría en Metodología de la Formación y Enseñanza-Aprendizaje",
    resumen: "Eleva tu práctica docente con metodologías actuales de enseñanza-aprendizaje. Modalidad ejecutiva de corta duración con validez SEP.",
    modalidad: "Ejecutiva · escolarizada / semiescolarizada",
    duracion: "1 año 8 meses · 5 cuatrimestres · 120 créditos",
    rvoe: true,
    destacado: true,
    beneficios: ["Horarios ejecutivos para quienes trabajan", "120 créditos en 5 cuatrimestres", "Mayor valoración USICAMM", "Tesis y examen de grado"],
  },
  {
    slug: "maestria-administracion-instituciones",
    nivel: "Maestría",
    nombre: "Maestría en Administración de Instituciones Educativas",
    resumen: "Dirige escuelas e instituciones educativas con herramientas de gestión, liderazgo y administración escolar de alto nivel.",
    modalidad: "Ejecutiva · escolarizada / semiescolarizada",
    duracion: "1 año 8 meses · 5 cuatrimestres · 120 créditos",
    rvoe: true,
    beneficios: ["Gestión y liderazgo educativo", "Horarios ejecutivos", "Valoración USICAMM", "Validez oficial SEP"],
  },
  {
    slug: "mba",
    nivel: "MBA",
    nombre: "MBA · Maestría en Alta Dirección y Negocios",
    resumen: "Programa ejecutivo de alta dirección con aliados estratégicos de primer nivel. Forma líderes empresariales con visión global.",
    modalidad: "Ejecutiva · en línea",
    duracion: "5 cuatrimestres",
    rvoe: true,
    destacado: true,
    beneficios: ["Alianzas empresariales estratégicas", "Enfoque en alta dirección", "Networking ejecutivo", "Validez oficial SEP"],
  },
  {
    slug: "doctorado-en-educacion",
    nivel: "Doctorado",
    nombre: "Doctorado en Desarrollo Educativo",
    resumen: "El grado máximo en educación. Desarrolla investigación de impacto y alcanza la mayor valoración profesional y académica en el sector.",
    modalidad: "Ejecutiva · en línea",
    duracion: "Posgrado de corta duración",
    rvoe: true,
    destacado: true,
    beneficios: ["Líneas de investigación aplicada", "Máxima valoración USICAMM", "Claustro doctoral", "Validez oficial SEP"],
  },
];

export const testimonios = [
  { name: "Melissa Arlette Yeseña Arreguín Grimaldo", text: "Excelentes maestros, el mejor nivel académico para seguir preparándote. UCM LO MEJOR ❤", stars: 5 },
  { name: "César Augusto Castañeda Acosta", text: "Excelente institución, los mejores maestros Doctores en Educación. Mi escuela.", stars: 5 },
  { name: "Obed Hernández Ángeles", text: "Los mejores maestros, la atención más efectiva, todo su personal altamente capacitado.", stars: 5 },
  { name: "Diana Jonguitud", text: "Mi mejor decisión fue inscribirme en esta universidad: la mejor calidad educativa, excelentes planes de estudio y horarios cómodos.", stars: 5 },
];

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "¿Quién es UCM?", href: "/nosotros" },
  { label: "Oferta educativa", href: "/oferta" },
  { label: "Admisiones", href: "/admisiones" },
  { label: "Costos y becas", href: "/costos-y-becas" },
  { label: "Respaldos", href: "/respaldos" },
  { label: "Contacto", href: "/contacto" },
];
