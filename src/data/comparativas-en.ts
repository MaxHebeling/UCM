import type { Comparativa } from "./comparativas";

export const actualizadoEN = "June 2026";

export const comparativasEN: Comparativa[] = [
  {
    slug: "preparatoria-ucm-vs-prepa-abierta",
    vs: "Open High School",
    title: "UCM High School vs Open High School: which is right for you? (2026)",
    h1: "UCM High School vs Open High School",
    meta: "We compare UCM High School (affiliated with UAT, with academic support) against the SEP's Open High School. Criteria, advantages and who each one is for.",
    intro:
      "If you're looking to finish high school in Tampico, two common paths are UCM High School — affiliated with the Autonomous University of Tamaulipas — and the SEP's Open High School. Both grant an officially-recognized certificate; the difference lies in the support, the timing and the structure. Here's an honest comparison to help you decide.",
    ucmLabel: "UCM High School",
    altLabel: "Open High School (SEP)",
    filas: [
      { criterio: "Official validity of the certificate", ucm: "Yes — affiliated with UAT (Upper Secondary No. 44)", alt: "Yes — SEP certificate", ucmGana: false },
      { criterio: "Teacher support", ucm: "Classes and follow-up with teachers", alt: "Self-taught, no regular classes", ucmGana: true },
      { criterio: "Structure and schedule", ucm: "Semester plan with set schedules", alt: "Self-paced, by modules", ucmGana: true },
      { criterio: "Format", ucm: "On-campus or fully online executive", alt: "Self-study with in-person exams", ucmGana: true },
      { criterio: "Cost", ucm: "Tuition (scholarships available)", alt: "Free / minimal fee per exam", ucmGana: false },
      { criterio: "Pathway to a bachelor's", ucm: "Direct pathway to UCM bachelor's programs", alt: "Requires a separate application", ucmGana: true },
      { criterio: "Typical time to complete", ucm: "3 years (6 semesters)", alt: "Varies with your pace", ucmGana: false },
    ],
    veredicto:
      "If you value structure, classes, close support and a natural pathway to university, UCM High School is the better option. It's ideal for those who want a complete formative experience and continuity toward a bachelor's degree.",
    cuandoAlt:
      "Open High School is worth it if your absolute priority is zero cost and you have the discipline to study independently without classes or a fixed schedule.",
    faqs: [
      { q: "Is UCM High School officially recognized?", a: "Yes. It is affiliated with the Autonomous University of Tamaulipas (Upper Secondary No. 44) with recognition as a general high-school diploma." },
      { q: "Can I study UCM High School online?", a: "Yes — in addition to the on-campus format, there's a fully online executive track." },
      { q: "After finishing, can I continue with a bachelor's at UCM?", a: "Yes, UCM High School graduates have a direct pathway to the university's bachelor's programs." },
    ],
    ctaPrograma: "preparatoria",
  },
  {
    slug: "universidad-en-linea-con-rvoe-vs-sin-rvoe",
    vs: "courses without official recognition",
    title: "Online university with RVOE vs without: why it matters (2026)",
    h1: "Studying online with RVOE vs without official recognition",
    meta: "Not every online program grants an officially-recognized degree. We compare studying a bachelor's or master's with RVOE (as at UCM) against courses without SEP recognition.",
    intro:
      "Before enrolling in any online program, the key question is whether it grants a degree with Official Recognition of Studies (RVOE) from the SEP. It's the difference between a degree that lets you graduate, obtain a professional license and compete for a position, and a simple diploma with no formal academic value. This guide explains why it matters.",
    ucmLabel: "Program with RVOE (UCM)",
    altLabel: "Course/diploma without RVOE",
    filas: [
      { criterio: "Degree with official SEP validity", ucm: "Yes — RVOE NS012/10/2009 and later", alt: "No — only a diploma or certificate", ucmGana: true },
      { criterio: "Professional license (cédula)", ucm: "Yes, you can obtain one", alt: "No", ucmGana: true },
      { criterio: "USICAMM scoring (teachers)", ucm: "Yes — for graduate programs, counts toward a position and promotion", alt: "No", ucmGana: true },
      { criterio: "Recognition by formal employers", ucm: "Equivalent to an on-campus degree", alt: "Limited / depends on the employer", ucmGana: true },
      { criterio: "Institutional support", ucm: "Faculty, tutoring and a dedicated platform", alt: "Variable, sometimes only recorded material", ucmGana: true },
      { criterio: "Cost", ucm: "Tuition with scholarships", alt: "Often cheaper or free", ucmGana: false },
    ],
    veredicto:
      "If your goal is a degree that carries professional weight — to graduate, obtain a license, compete for a position or advance at a formal company — you need a program with RVOE. At UCM, every program holds official SEP recognition.",
    cuandoAlt:
      "A course or diploma without RVOE can be enough if you're only looking to learn a specific skill and don't need a degree with official academic value.",
    faqs: [
      { q: "What is RVOE?", a: "It's the Official Recognition of Studies granted by the education authority (the SEP or the state ministry). It guarantees that the program and the degree are officially valid." },
      { q: "Do UCM's online programs have RVOE?", a: "Yes. UCM holds RVOE before the SEP's General Directorate of Professions and the Tamaulipas Ministry of Education (CCT 28PSU0124A)." },
      { q: "Can I verify a university's RVOE?", a: "Yes — you can check it in the SEP's SIRVOES system using the institution's code or agreement number." },
    ],
    ctaPrograma: "doctorado-en-educacion",
  },
  {
    slug: "maestria-en-linea-tampico",
    vs: "other graduate formats",
    title: "Online master's in Tampico: how to choose (2026 guide)",
    h1: "Online master's in Tampico: how to choose the right one",
    meta: "A guide to choosing an officially-recognized online master's in Tampico: RVOE, executive format, duration and USICAMM scoring. Compare the criteria before you enroll.",
    intro:
      "Studying a master's without leaving your job is possible, but it's worth comparing carefully before you enroll. In Tampico, UCM offers graduate programs in an executive format with official recognition and schedules built for professionals. These are the criteria you should evaluate in any online master's.",
    ucmLabel: "UCM graduate program (executive)",
    altLabel: "Traditional on-campus master's",
    filas: [
      { criterio: "Official recognition (RVOE)", ucm: "Yes, with SEP RVOE", alt: "Depends on the institution", ucmGana: true },
      { criterio: "Compatibility with work", ucm: "Executive and online schedules", alt: "Fixed schedules, usually requires attendance", ucmGana: true },
      { criterio: "Duration", ucm: "1 year 8 months (5 quarters, 120 credits)", alt: "Usually 2 years or more", ucmGana: true },
      { criterio: "USICAMM scoring (teachers)", ucm: "Yes — counts toward a position and promotion", alt: "Depends on the program", ucmGana: true },
      { criterio: "Graduation", ucm: "Degree thesis and degree examination", alt: "Variable", ucmGana: false },
      { criterio: "Location", ucm: "Tampico + online", alt: "Depends on the institution", ucmGana: false },
    ],
    veredicto:
      "For a professional working in the Tampico area, an executive master's with RVOE like UCM's offers the best balance of official recognition, time and flexibility.",
    cuandoAlt:
      "A traditional on-campus master's may be worth it if you're after a fully in-person experience with full-time dedication and don't need to combine it with a job.",
    faqs: [
      { q: "How long is a master's at UCM?", a: "Executive graduate programs are completed in roughly 1 year 8 months (5 quarters, 120 credits)." },
      { q: "Does an online master's have the same validity as on-campus?", a: "Yes, as long as the program holds RVOE. RVOE validates the program and the degree regardless of the format." },
      { q: "Does it help me get a teaching position?", a: "Yes. Graduate programs grant higher USICAMM scoring toward a federal teaching position and vertical and horizontal promotion." },
    ],
    ctaPrograma: "maestria-metodologia-formacion",
  },
];
