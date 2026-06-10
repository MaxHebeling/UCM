import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Conoce cómo protegemos tu información en UCM. Nuestras Políticas de Privacidad garantizan la seguridad y el uso responsable de tus datos personales. Transparencia y confianza en cada interacción.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

// Texto migrado literalmente de ucmac.edu.mx/general-5

const secciones: { t?: string; ps: string[] }[] = [
  {
    ps: [
      "Las presentes políticas de privacidad y confidencialidad aplicarán para poder brindar la debida protección de los datos personales que hayan sido transmitidos por cualquier medio electrónico y/o escrito a la Universidad Cultural Metropolitana, (en adelante \u201cUniversidad Cultural Metropolitana\u201d). Le sugerimos leer la siguiente información, misma que le es proporcionada con la intención de que conozca cómo serán utilizados los datos que son recabados. En todo momento, usted podrá consultar la presente Política de Privacidad y Confidencialidad, así como las modificaciones que pudiera sufrir, a través del portal www.ucmac.edu.mx.",
    ],
  },
  {
    t: "DATOS DE IDENTIFICACIÓN Y CONTACTO DEL RESPONSABLE",
    ps: [
      "La Universidad Cultural Metropolitana es una institución educativa mexicana, la cual se encuentra legalmente constituida y tiene como domicilio el ubicado en: Dr. Alarcón 305 NTE, Zona Centro, Tampico. Para cualquier duda, comentario o ejercicio de los derechos ARCO (Acceso, Rectificación, Cancelación u Oposición), así como revocación del consentimiento del tratamiento de sus datos personales, se deberá presentar la solicitud y documentación que avale su personalidad y derecho, o a través del correo electrónico direccion@ucmac.edu.mx. La obtención de la solicitud para el ejercicio de los derechos será por los medios antes mencionados.",
    ],
  },
  {
    t: "DATOS DEL DEPARTAMENTO DE PROTECCIÓN DE DATOS PERSONALES",
    ps: [
      "Para cualquier duda relacionada con la protección de sus datos personales podrá contactar al Departamento de Protección de Datos Personales de la Universidad Cultural Metropolitana.",
      "Los datos de contacto del Departamento de Protección de Datos Personales son los siguientes: Dr. Alarcón 305 NTE, Zona Centro Tampico. Teléfono: (833) 305 6138. Correo electrónico: soporteucm@ucmac.edu.mx",
    ],
  },
  {
    t: "RECOLECCIÓN DE DATOS PERSONALES Y DATOS SENSIBLES",
    ps: [
      "La información que se recaba con motivo de los servicios prestados por la Universidad Cultural Metropolitana es aquella brindada de forma voluntaria, ya sea por medios electrónicos, medios escritos y/o aquella que podamos obtener de forma indirecta a través de fuentes de acceso público para dar cumplimiento a las finalidades del tratamiento previstas en nuestro aviso de privacidad.",
      "Derivado de lo anterior, es que se genera el manejo de datos personales y datos sensibles, los cuales serán usados en todo momento por la Universidad Cultural Metropolitana con la confidencialidad requerida, buscando siempre proteger el derecho a la privacidad. Por lo anterior, es que la Universidad Cultural Metropolitana no hará uso, ni transmitirá sus datos, salvo que medie consentimiento expreso o tácito por parte del Usuario.",
    ],
  },
  {
    t: "DATOS RECABADOS DE MENORES DE EDAD Y PERSONAS CON DISCAPACIDAD",
    ps: [
      "Le informamos que los datos personales que recabemos de menores de edad y personas con discapacidad cognitiva serán recabados exclusivamente con el consentimiento del padre, tutor y/o persona con la patria potestad para dar cumplimiento a las finalidades previstas en el Aviso de Privacidad disponible en www.ucmac.edu.mx. En virtud de lo anterior, al proporcionar datos personales de menores de edad, se entenderá que estos son proporcionados por el padre, tutor y/o persona con la patria potestad del menor. En ningún caso recabaremos datos personales de menores de edad y/o personas con discapacidad cognitiva de forma directa.",
      "La Universidad Cultural Metropolitana recomienda que los menores de edad, al momento de navegar por el portal, estén asesorados por sus padres para que aprueben su navegación, en cuyo caso, se entenderá que existe consentimiento tácito de los mismos, si es que sus datos están ingresados.",
    ],
  },
  {
    t: "FINALIDAD DEL TRATAMIENTO DE DATOS",
    ps: [
      "La Universidad Cultural Metropolitana informa que el tratamiento de los datos personales busca como finalidad el mantener informado de los servicios y actividades que realiza, así como también identificar a alguien como usuario de la Universidad Cultural Metropolitana en su carácter de alumno y/o empleado, para fines académicos, administrativos y financieros informados en nuestro Aviso de Privacidad disponible en www.ucmac.edu.mx. Así mismo y como finalidades secundarias, la Universidad Cultural Metropolitana podrá utilizar los datos con fines de promoción y publicidad, estadística, medición de calidad, promoción y ofrecimiento de productos relacionados. Para llevar a cabo las finalidades antes mencionadas, la Universidad Cultural Metropolitana podrá transferir sus datos a terceros.",
    ],
  },
  {
    t: "BASE PARA LA LEGITIMACIÓN DEL TRATAMIENTO DE SUS DATOS PERSONALES",
    ps: [
      "La Universidad Cultural Metropolitana podrá dar tratamiento a sus datos personales para dar cumplimiento a la relación jurídica contractual con usted, por lo que, en términos de lo dispuesto por la normatividad aplicable a la protección de datos personales su consentimiento no es requerido, al estar amparado el tratamiento en la relación contractual perfeccionada entre las partes.",
      "En aquellos casos en los que el tratamiento de sus datos personales no pudiera ampararse en la relación jurídica sostenida con la Universidad Cultural Metropolitana, recabaremos su consentimiento.",
    ],
  },
  {
    t: "DESTINATARIOS DE SUS DATOS",
    ps: [
      "Los datos que nos son proporcionados podrán ser transmitidos a terceros, en cuyo caso la Universidad Cultural Metropolitana se compromete a enviar solamente los datos personales y datos sensibles que sean indispensables para la actividad o servicio específico que dichas personas realicen. Por lo anterior, y con la intención de garantizar el continuar con la protección de los datos, es que la Universidad Cultural Metropolitana requerirá que dichas empresas cuenten con el nivel de protección de datos que marca la Normatividad en la materia. La remisión de datos será aquélla en donde la Universidad Cultural Metropolitana disponga las únicas finalidades que se podrán obtener con los datos, apoyándose con departamentos internos o terceros con quienes mantenga una relación jurídica. Ahora bien, en los casos de la transmisión de datos personales y datos sensibles que sean solicitados por la autoridad, la Universidad Cultural Metropolitana dispondrá solo de aquellos que se consideren necesarios para poder cumplir con las legislaciones aplicables.",
    ],
  },
  {
    t: "USO DE COOKIES",
    ps: [
      "Una \u201ccookie\u201d es un pequeño archivo de datos que se transfiere desde un sitio web al disco duro de la computadora. La Universidad Cultural Metropolitana envía cookies cuando navega por nuestro sitio o por sitios en los que aparecen nuestros anuncios, realiza compras, solicita o personaliza información o se registra en determinados servicios. Al aceptar las cookies que se utilizan en nuestro sitio, nos puede dar acceso a información sobre sus hábitos de navegación, los cuales podemos utilizar para personalizar la experiencia del Usuario. Las cookies se suelen clasificar como cookies de \u201csesión\u201d o cookies \u201cpersistentes\u201d. Las cookies de sesión no permanecen en la computadora una vez que cierra el navegador. Las cookies persistentes permanecen en la computadora hasta que las elimina o caducan. La mayor parte de los navegadores aceptan cookies automáticamente de forma predeterminada, sin embargo, se puede habilitar la opción de rechazarlas o aceptarlas de manera selectiva ajustando las preferencias del navegador. Si desactiva las cookies, puede haber ciertas funciones de nuestro sitio que no estén disponibles y es posible que algunas páginas web no se vean correctamente.",
      "Asimismo, la Universidad Cultural Metropolitana puede utilizar contadores de visitas o \u201cweb beacons\u201d (denominados imágenes rastreadoras o \u201cetiquetas de píxel\u201d) en relación con algunos sitios web nuestros. No obstante, no los utilizamos para identificación personal. Los contadores de visita son por lo general imágenes gráficas que se ponen en un sitio web y se utilizan para contar los visitantes o para acceder a determinadas cookies. Esta información se usa para mejorar nuestros servicios. Los contadores de visita normalmente no recopilan información diferente de la que su navegador nos proporciona como parte estándar de cualquier comunicación por internet. Si se desactivan las cookies, el contador de visitas no podrá seguir rastreando una actividad específica. Sin embargo, puede continuar reuniendo información sobre las visitas que se hagan desde una dirección IP.",
    ],
  },
  {
    t: "TIEMPO DE CONSERVACIÓN DE LOS DATOS PERSONALES",
    ps: [
      "La Universidad Cultural Metropolitana dará tratamiento a sus datos personales durante el tiempo que sea necesario para cumplir con las finalidades establecidas en el presente Aviso de Privacidad durante el tiempo en que dure la relación jurídica que tenemos con usted y una vez cumplida ésta última durante el tiempo que resulte necesario para dar cumplimiento a las obligaciones previstas en la normatividad aplicable que la Universidad Cultural Metropolitana tenga que cumplir.",
    ],
  },
  {
    t: "CAMBIOS A LA POLÍTICA DE PRIVACIDAD",
    ps: [
      "Cualquier cambio o modificación podrá efectuarse en cualquier momento y se dará a conocer a través de su portal www.ucmac.edu.mx.",
    ],
  },
];

export default function AvisoDePrivacidad() {
  return (
    <>
      <PageHero
        eyebrow="Aviso de privacidad"
        title={<>Política de <span className="text-ucm-skyLt">privacidad</span></>}
        desc="Política de privacidad y confidencialidad de la Universidad Cultural Metropolitana."
      />

      <section className="container-ucm py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-10">
          {secciones.map((s, idx) => (
            <div key={s.t ?? idx}>
              {s.t && <h2 className="font-display text-xl font-semibold text-ucm-navy">{s.t}</h2>}
              {s.ps.map((p, i) => (
                <p key={i} className="mt-3 text-ucm-navy/70">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
