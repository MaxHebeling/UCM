// Páginas de comparación / guías de decisión para intención comercial.
// Criterios VERIFICABLES (RVOE, modalidad, ciudad, acompañamiento). Sin datos privados
// inventados de terceros. Incluyen disclaimer y fecha. Tono justo: reconocen cuándo la
// alternativa conviene más.

export type Fila = { criterio: string; ucm: string; alt: string; ucmGana?: boolean };

export type Comparativa = {
  slug: string;
  vs: string; // con qué se compara
  title: string; // <title>
  h1: string;
  meta: string;
  intro: string;
  ucmLabel: string;
  altLabel: string;
  filas: Fila[];
  veredicto: string;
  cuandoAlt: string; // honestidad: cuándo conviene la alternativa
  faqs: { q: string; a: string }[];
  ctaPrograma?: string; // slug de /oferta
};

export const actualizado = "junio de 2026";

export const comparativas: Comparativa[] = [
  {
    slug: "preparatoria-ucm-vs-prepa-abierta",
    vs: "Preparatoria Abierta",
    title: "Preparatoria UCM vs Preparatoria Abierta: ¿cuál te conviene? (2026)",
    h1: "Preparatoria UCM vs Preparatoria Abierta",
    meta: "Comparamos la Preparatoria UCM (incorporada a la UAT, con acompañamiento) frente a la Preparatoria Abierta de la SEP. Criterios, ventajas y para quién es cada una.",
    intro:
      "Si buscas terminar el bachillerato en Tampico, dos caminos frecuentes son la Preparatoria UCM —incorporada a la Universidad Autónoma de Tamaulipas— y la Preparatoria Abierta de la SEP. Ambas otorgan un certificado con validez oficial; la diferencia está en el acompañamiento, los tiempos y la estructura. Esta es una comparación honesta para ayudarte a decidir.",
    ucmLabel: "Preparatoria UCM",
    altLabel: "Preparatoria Abierta (SEP)",
    filas: [
      { criterio: "Validez oficial del certificado", ucm: "Sí — incorporada a la UAT (Media Superior No. 44)", alt: "Sí — certificado SEP", ucmGana: false },
      { criterio: "Acompañamiento docente", ucm: "Clases y seguimiento con docentes", alt: "Autodidacta, sin clases regulares", ucmGana: true },
      { criterio: "Estructura y calendario", ucm: "Plan por semestres con horarios definidos", alt: "Avanzas a tu propio ritmo, por módulos", ucmGana: true },
      { criterio: "Modalidad", ucm: "Escolarizada o ejecutiva en línea", alt: "Autoestudio con exámenes presenciales", ucmGana: true },
      { criterio: "Costo", ucm: "Colegiatura (con becas disponibles)", alt: "Gratuito / cuota mínima por examen", ucmGana: false },
      { criterio: "Continuidad a licenciatura", ucm: "Pase directo a las licenciaturas UCM", alt: "Requiere postular aparte", ucmGana: true },
      { criterio: "Tiempo típico de conclusión", ucm: "3 años (6 semestres)", alt: "Variable según tu ritmo", ucmGana: false },
    ],
    veredicto:
      "Si valoras estructura, clases, acompañamiento cercano y un pase natural a la universidad, la Preparatoria UCM es la mejor opción. Es ideal para quien quiere una experiencia formativa completa y continuidad hacia una licenciatura.",
    cuandoAlt:
      "La Preparatoria Abierta conviene si tu prioridad absoluta es el costo cero y tienes la disciplina para estudiar de forma autodidacta sin clases ni calendario fijo.",
    faqs: [
      { q: "¿La Preparatoria UCM tiene validez oficial?", a: "Sí. Está incorporada a la Universidad Autónoma de Tamaulipas (Media Superior No. 44) con reconocimiento de bachillerato general único." },
      { q: "¿Puedo estudiar la prepa UCM en línea?", a: "Sí, además de la modalidad escolarizada existe una modalidad ejecutiva totalmente en línea." },
      { q: "¿Al terminar puedo seguir una licenciatura en UCM?", a: "Sí, los egresados de la Preparatoria UCM tienen pase directo a las licenciaturas de la universidad." },
    ],
    ctaPrograma: "preparatoria",
  },
  {
    slug: "universidad-en-linea-con-rvoe-vs-sin-rvoe",
    vs: "cursos sin validez oficial",
    title: "Universidad en línea con RVOE vs sin RVOE: por qué importa (2026)",
    h1: "Estudiar en línea con RVOE vs sin validez oficial",
    meta: "No todos los programas en línea otorgan un título con validez oficial. Comparamos estudiar una licenciatura o maestría con RVOE (como en UCM) frente a cursos sin reconocimiento SEP.",
    intro:
      "Antes de inscribirte en cualquier programa en línea, la pregunta clave es si otorga un título con Reconocimiento de Validez Oficial de Estudios (RVOE) de la SEP. Es la diferencia entre un título que sirve para titularte, obtener cédula profesional y concursar por una plaza, y un simple diploma sin valor curricular formal. Esta guía explica por qué importa.",
    ucmLabel: "Programa con RVOE (UCM)",
    altLabel: "Curso/diplomado sin RVOE",
    filas: [
      { criterio: "Título con validez oficial SEP", ucm: "Sí — RVOE NS012/10/2009 y posteriores", alt: "No — solo diploma o constancia", ucmGana: true },
      { criterio: "Cédula profesional", ucm: "Sí, puedes tramitarla", alt: "No", ucmGana: true },
      { criterio: "Valoración USICAMM (docentes)", ucm: "Sí, en posgrados aplica para plaza y promoción", alt: "No", ucmGana: true },
      { criterio: "Reconocimiento para empleadores formales", ucm: "Equivalente a un título presencial", alt: "Limitado / depende del empleador", ucmGana: true },
      { criterio: "Acompañamiento institucional", ucm: "Docentes, tutorías y plataforma propia", alt: "Variable, a veces solo material grabado", ucmGana: true },
      { criterio: "Costo", ucm: "Colegiatura con becas", alt: "A menudo más barato o gratis", ucmGana: false },
    ],
    veredicto:
      "Si tu objetivo es un grado que sirva profesionalmente —titularte, obtener cédula, concursar por una plaza o crecer en una empresa formal— necesitas un programa con RVOE. En UCM todos los programas cuentan con validez oficial de la SEP.",
    cuandoAlt:
      "Un curso o diplomado sin RVOE puede ser suficiente si solo buscas aprender una habilidad puntual y no necesitas un título con valor curricular oficial.",
    faqs: [
      { q: "¿Qué es el RVOE?", a: "Es el Reconocimiento de Validez Oficial de Estudios que otorga la autoridad educativa (SEP o la secretaría estatal). Garantiza que el programa y el título tienen validez oficial." },
      { q: "¿Los programas en línea de UCM tienen RVOE?", a: "Sí. UCM cuenta con RVOE ante la Dirección General de Profesiones de la SEP y la Secretaría de Educación de Tamaulipas (CCT 28PSU0124A)." },
      { q: "¿Puedo verificar el RVOE de una universidad?", a: "Sí, puedes consultarlo en el sistema SIRVOES de la SEP con la clave o el número de acuerdo de la institución." },
    ],
    ctaPrograma: "doctorado-en-educacion",
  },
  {
    slug: "maestria-en-linea-tampico",
    vs: "otras modalidades de posgrado",
    title: "Maestría en línea en Tampico: cómo elegir (guía 2026)",
    h1: "Maestría en línea en Tampico: cómo elegir la correcta",
    meta: "Guía para elegir una maestría en línea en Tampico con validez oficial: RVOE, modalidad ejecutiva, duración y valoración USICAMM. Compara criterios antes de inscribirte.",
    intro:
      "Estudiar una maestría sin dejar de trabajar es posible, pero conviene comparar bien antes de inscribirte. En Tampico, UCM ofrece posgrados en modalidad ejecutiva con validez oficial y horarios pensados para profesionales. Estos son los criterios que deberías evaluar en cualquier maestría en línea.",
    ucmLabel: "Posgrado UCM (modalidad ejecutiva)",
    altLabel: "Maestría tradicional escolarizada",
    filas: [
      { criterio: "Validez oficial (RVOE)", ucm: "Sí, con RVOE SEP", alt: "Depende de la institución", ucmGana: true },
      { criterio: "Compatibilidad con trabajo", ucm: "Horarios ejecutivos y en línea", alt: "Horarios fijos, suele requerir presencia", ucmGana: true },
      { criterio: "Duración", ucm: "1 año 8 meses (5 cuatrimestres, 120 créditos)", alt: "Habitualmente 2 años o más", ucmGana: true },
      { criterio: "Valoración USICAMM (docentes)", ucm: "Sí, suma para plaza y promoción", alt: "Depende del programa", ucmGana: true },
      { criterio: "Titulación", ucm: "Tesis de grado y examen de grado", alt: "Variable", ucmGana: false },
      { criterio: "Ubicación", ucm: "Tampico + en línea", alt: "Según la institución", ucmGana: false },
    ],
    veredicto:
      "Para un profesional que trabaja en la zona de Tampico, una maestría en modalidad ejecutiva con RVOE como la de UCM ofrece el mejor equilibrio entre validez oficial, tiempo y flexibilidad.",
    cuandoAlt:
      "Una maestría escolarizada tradicional puede convenir si buscas una experiencia 100% presencial con dedicación de tiempo completo y no necesitas compatibilizarla con un empleo.",
    faqs: [
      { q: "¿Cuánto dura una maestría en UCM?", a: "Los posgrados ejecutivos se cursan en aproximadamente 1 año 8 meses (5 cuatrimestres, 120 créditos)." },
      { q: "¿La maestría en línea tiene la misma validez que la presencial?", a: "Sí, siempre que el programa cuente con RVOE. El RVOE valida el programa y el título independientemente de la modalidad." },
      { q: "¿Sirve para obtener una plaza docente?", a: "Sí. Los posgrados otorgan mayor valoración ante la USICAMM para plaza federal y promoción vertical y horizontal." },
    ],
    ctaPrograma: "maestria-metodologia-formacion",
  },
];
