(function () {
    'use strict';

    var storageKey = 'noticeboard-lang';
    var currentLang = localStorage.getItem(storageKey) || 'en';

    var es = {
        'Altus Dual Enrollment Fall 2026': 'Inscripcion Doble Altus Otono 2026',
        'Noticeboard': 'Tablero',
        'Courses': 'Cursos',
        'City College': 'City College',
        'Miramar': 'Miramar',
        'Coastline': 'Coastline',
        'Downloads': 'Descargas',
        'Fall 2026': 'Otono 2026',
        'Altus Dual Enrollment': 'Inscripcion Doble Altus',
        'Pick a course, choose the matching college, and follow the signup steps. Most students should start with Personal Growth at City College or Miramar.': 'Escoge un curso, elige la universidad correspondiente y sigue los pasos de inscripcion. La mayoria de los estudiantes deberian empezar con Personal Growth en City College o Miramar.',
        'Choose a Course': 'Escoger un Curso',
        'Choose a College': 'Escoger una Universidad',
        'Read This First': 'Lee Esto Primero',
        'Why Dual Enrollment?': 'Por Que Inscripcion Doble?',
        'Free college classes': 'Clases universitarias gratis',
        'Tuition is waived for dual enrollment students. Other fees are usually handled through school support if they come up.': 'La matricula no se cobra para estudiantes de inscripcion doble. Otros costos normalmente se manejan con apoyo de la escuela si aparecen.',
        'Real college credit': 'Credito universitario real',
        'When students pass, they earn college credit from the community college.': 'Cuando los estudiantes aprueban, obtienen credito universitario de la universidad comunitaria.',
        'Weighted GPA': 'GPA ponderado',
        'Dual enrollment classes are graded on a 5-point scale, similar to an AP class.': 'Las clases de inscripcion doble se califican en una escala de 5 puntos, similar a una clase AP.',
        'Double high school credit': 'Doble credito de preparatoria',
        'One dual enrollment class earns college credit and two high school credits. For example, one college U.S. History semester can satisfy the full high school U.S. History requirement.': 'Una clase de inscripcion doble da credito universitario y dos creditos de preparatoria. Por ejemplo, un semestre universitario de Historia de Estados Unidos puede cumplir todo el requisito de Historia de Estados Unidos de preparatoria.',
        'Graduate with a head start': 'Graduarse con ventaja',
        'Students who start early can finish high school with college classes already completed, sometimes close to a semester of college credit.': 'Los estudiantes que empiezan temprano pueden terminar la preparatoria con clases universitarias ya completadas, a veces cerca de un semestre de credito universitario.',
        'Confidence boost': 'Mas confianza',
        'Students learn that they can handle a real college class before they graduate high school.': 'Los estudiantes aprenden que pueden manejar una clase universitaria real antes de graduarse de preparatoria.',
        'Read This Before You Sign Up': 'Lee Esto Antes de Inscribirte',
        'Sign up ASAP': 'Inscribete lo antes posible',
        'These classes are popular and can fill quickly. If you know you want a course, start the application process now.': 'Estas clases son populares y se pueden llenar rapido. Si sabes que quieres un curso, empieza el proceso de solicitud ahora.',
        'Plan for one college class': 'Planea una clase universitaria',
        'For most students, one dual enrollment course per semester is the right amount. A second course may be possible only with special approval.': 'Para la mayoria de los estudiantes, una clase de inscripcion doble por semestre es la cantidad adecuada. Una segunda clase puede ser posible solo con aprobacion especial.',
        'You still have high school work': 'Todavia tienes trabajo de preparatoria',
        'Dual enrollment means doing both: your college class and your regular Altus high school coursework. Be ready to manage both at the same time.': 'Inscripcion doble significa hacer ambas cosas: tu clase universitaria y tu trabajo regular de preparatoria de Altus. Debes estar listo para manejar las dos al mismo tiempo.',
        'Best first course: Personal Growth': 'Mejor primer curso: Personal Growth',
        'Career and Life Planning is usually the easiest place to begin because it helps with goals, planning, confidence, and high school credit.': 'Career and Life Planning normalmente es el mejor lugar para empezar porque ayuda con metas, planificacion, confianza y credito de preparatoria.',
        'Choose Your Course': 'Escoge Tu Curso',
        'Start here. These are the recommended Fall 2026 courses because they are useful, familiar, and often easier to connect to high school credit. Students may also take other eligible community college courses if they qualify and can get a seat.': 'Empieza aqui. Estos son los cursos recomendados para otono de 2026 porque son utiles, conocidos y normalmente mas faciles de conectar con credito de preparatoria. Los estudiantes tambien pueden tomar otros cursos elegibles de universidad comunitaria si califican y consiguen lugar.',
        'First choice': 'Primera opcion',
        'Personal Growth Career & Life Planning': 'Personal Growth Career & Life Planning',
        'Course': 'Curso',
        'Dates': 'Fechas',
        'Class number': 'Numero de clase',
        'High school credit equivalency': 'Equivalencia de credito de preparatoria',
        'Choose This Course': 'Escoger Este Curso',
        'City College Website': 'Sitio de City College',
        'American Government & Politics': 'American Government & Politics',
        'Government + 1 Elective': 'Gobierno + 1 electivo',
        'Miramar College': 'Miramar College',
        'Strong option': 'Buena opcion',
        'Miramar College Website': 'Sitio de Miramar College',
        'Limited seats': 'Cupos limitados',
        'US History to 1877': 'US History to 1877',
        'Full year of high school U.S. History': 'Ano completo de Historia de Estados Unidos de preparatoria',
        'Want something different?': 'Quieres algo diferente?',
        'Students may take many eligible community college courses if they qualify and can get a seat. Options can include sign language, graphic design, automotive, art, music, computer science, cybersecurity, law, teaching, and more. Check with your teacher before choosing a course outside the recommended list so we can confirm workload, prerequisites, and how the credit may apply.': 'Los estudiantes pueden tomar muchos cursos elegibles de universidad comunitaria si califican y consiguen lugar. Las opciones pueden incluir lenguaje de senas, diseno grafico, automotriz, arte, musica, ciencias de computacion, ciberseguridad, derecho, educacion y mas. Consulta con tu maestro antes de elegir un curso fuera de la lista recomendada para confirmar la carga de trabajo, requisitos previos y como podria aplicar el credito.',
        'Explore Coastline Options': 'Explorar Opciones de Coastline',
        'Start here first': 'Empieza aqui primero',
        'San Diego City College': 'San Diego City College',
        'City College is the most familiar path for many students. Use it for Personal Growth or Government.': 'City College es el camino mas conocido para muchos estudiantes. Usalo para Personal Growth o Government.',
        'City Signup Steps': 'Pasos de Inscripcion de City College',
        'Apply to City College': 'Solicitar a City College',
        'Create or use your OpenCCC account, then submit the City College application.': 'Crea o usa tu cuenta OpenCCC y luego envia la solicitud de City College.',
        'Wait for your 10-digit student ID.': 'Espera tu numero de estudiante de 10 digitos.',
        'City says this usually takes 24-48 hours. Check your email and save the confirmation number.': 'City dice que esto normalmente toma 24-48 horas. Revisa tu correo electronico y guarda el numero de confirmacion.',
        'Complete the SDCCD Supplemental Application': 'Completa la solicitud suplementaria de SDCCD',
        'This is the special part-time form for high school students. You need your 10-digit student ID before this step.': 'Este es el formulario especial de medio tiempo para estudiantes de preparatoria. Necesitas tu numero de estudiante de 10 digitos antes de este paso.',
        'Counselor contact:': 'Contacto del consejero:',
        'Plain English: Do not use your teacher. Your counselor is Mr. Sutherland:': 'En palabras claras: No uses a tu maestro. Tu consejero es el Sr. Sutherland:',
        'Enter your course information exactly.': 'Escribe la informacion del curso exactamente.',
        'Use the course name, course code, and class number from the card above.': 'Usa el nombre del curso, codigo del curso y numero de clase de la tarjeta de arriba.',
        'Watch your email.': 'Revisa tu correo electronico.',
        'If you do not receive your ID or enrollment updates within a couple of days, tell your teacher.': 'Si no recibes tu ID o actualizaciones de inscripcion dentro de un par de dias, avisa a tu maestro.',
        'City College course info to copy into forms': 'Informacion de cursos de City College para copiar en formularios',
        'Course:': 'Curso:',
        'Class number:': 'Numero de clase:',
        'Plain English: do not use your teacher. Your counselor is Mr. Sutherland.': 'En palabras claras: no uses a tu maestro. Tu consejero es el Sr. Sutherland.',
        'City College Links': 'Enlaces de City College',
        'SDCCD Supplemental Application': 'Solicitud Suplementaria de SDCCD',
        'City College Dual Enrollment Page': 'Pagina de Inscripcion Doble de City College',
        'OpenCCC Video Tutorial': 'Video Tutorial de OpenCCC',
        'City Application Tutorial': 'Tutorial de Solicitud de City College',
        'Download City Guide': 'Descargar Guia de City College',
        'Download City Course Flyer': 'Descargar Volante de Cursos de City College',
        'Second recommended path': 'Segundo camino recomendado',
        'San Diego Miramar College': 'San Diego Miramar College',
        'Miramar is a strong option for Personal Growth, U.S. History, and Government. Use it when it fits your course need or when City College fills up.': 'Miramar es una buena opcion para Personal Growth, Historia de Estados Unidos y Gobierno. Usalo cuando coincide con tu necesidad de curso o cuando City College se llena.',
        'Miramar Signup Steps': 'Pasos de Inscripcion de Miramar',
        'Apply to Miramar College': 'Solicitar a Miramar College',
        'Create or use your OpenCCC account, then submit the Miramar application.': 'Crea o usa tu cuenta OpenCCC y luego envia la solicitud de Miramar.',
        'Miramar says this can take about 2 hours. Save or screenshot your ID when it arrives.': 'Miramar dice que esto puede tomar aproximadamente 2 horas. Guarda o toma una captura de tu ID cuando llegue.',
        'Activate your mySDCCD account': 'Activa tu cuenta mySDCCD',
        'Use the email with your student ID to set up your district account.': 'Usa el correo con tu ID de estudiante para configurar tu cuenta del distrito.',
        'Use your exact course information and include the high school counselor contact.': 'Usa la informacion exacta del curso e incluye el contacto del consejero de preparatoria.',
        'Admissions enrolls you manually.': 'Admisiones te inscribe manualmente.',
        'Keep checking email and spam. If something stalls, tell your teacher.': 'Sigue revisando tu correo y spam. Si algo se detiene, avisa a tu maestro.',
        'Miramar course info to copy into forms': 'Informacion de cursos de Miramar para copiar en formularios',
        'U.S. History to 1877': 'Historia de Estados Unidos hasta 1877',
        'Limited seats available': 'Cupos limitados disponibles',
        'Miramar College Links': 'Enlaces de Miramar College',
        'mySDCCD Account': 'Cuenta mySDCCD',
        'Miramar Dual Enrollment Page': 'Pagina de Inscripcion Doble de Miramar',
        'Miramar Application Tutorial': 'Tutorial de Solicitud de Miramar',
        'Download Miramar Guide': 'Descargar Guia de Miramar',
        'Download Miramar Course Flyer': 'Descargar Volante de Cursos de Miramar',
        'More course choices': 'Mas opciones de cursos',
        'Coastline College': 'Coastline College',
        'Coastline is best for students who want more variety. Availability changes, so check the current schedule and talk with your teacher before choosing.': 'Coastline es mejor para estudiantes que quieren mas variedad. La disponibilidad cambia, asi que revisa el horario actual y habla con tu maestro antes de elegir.',
        'Coastline Signup Steps': 'Pasos de Inscripcion de Coastline',
        'Create or use your OpenCCC account.': 'Crea o usa tu cuenta OpenCCC.',
        'The OpenCCC account is the starting point for Coastline too.': 'La cuenta OpenCCC tambien es el punto de inicio para Coastline.',
        'Apply to Coastline College': 'Solicitar a Coastline College',
        'Coastline says processing usually takes 1-3 business days. Check your email daily for MyCoast login information.': 'Coastline dice que el procesamiento normalmente toma 1-3 dias habiles. Revisa tu correo cada dia para la informacion de MyCoast.',
        'Sign in to MyCoast': 'Inicia sesion en MyCoast',
        'Use the account information Coastline sends you.': 'Usa la informacion de cuenta que Coastline te envia.',
        'Complete the High School Release and Parent Consent steps': 'Completa los pasos de autorizacion de preparatoria y consentimiento de padres',
        'Do this with teacher guidance. You will need the course name, course number, and counselor information.': 'Haz esto con ayuda de tu maestro. Necesitaras el nombre del curso, numero de curso e informacion del consejero.',
        'Register for your class in MyCoast': 'Inscribete en tu clase en MyCoast',
        'Register early so you do not get waitlisted.': 'Inscribete temprano para no quedar en lista de espera.',
        'Good starting categories': 'Buenas categorias para empezar',
        'Career and life planning': 'Planificacion de carrera y vida',
        'College success': 'Exito universitario',
        'Stress management': 'Manejo del estres',
        'Government': 'Gobierno',
        'Art, music, and world language': 'Arte, musica e idioma mundial',
        'Cybersecurity, Python, marketing, design, law, and teaching': 'Ciberseguridad, Python, mercadotecnia, diseno, derecho y educacion',
        'Popular example courses': 'Ejemplos de cursos populares',
        'Coastline College Links': 'Enlaces de Coastline College',
        'MyCoast Login': 'Inicio de MyCoast',
        'Coastline Dual Enrollment Page': 'Pagina de Inscripcion Doble de Coastline',
        'Coastline Class Schedule': 'Horario de Clases de Coastline',
        'High School Release Form': 'Formulario de Autorizacion de Preparatoria',
        'Register in MyCoast Video': 'Video para Inscribirse en MyCoast',
        'Download Coastline Guide': 'Descargar Guia de Coastline',
        'Download Course List': 'Descargar Lista de Cursos',
        'Before You Submit a Form': 'Antes de Enviar un Formulario',
        'Have this ready': 'Ten esto listo',
        'College choice: City College, Miramar College, or Coastline College': 'Universidad elegida: City College, Miramar College o Coastline College',
        'Term: Fall 2026': 'Periodo: Otono 2026',
        'Your 10-digit college student ID': 'Tu ID universitario de 10 digitos',
        'Your grade level and high school graduation date': 'Tu grado y fecha de graduacion de preparatoria',
        'How many college classes you plan to take': 'Cuantas clases universitarias planeas tomar',
        'Exact course name, course code, and class number': 'Nombre exacto del curso, codigo del curso y numero de clase',
        'Counselor contact': 'Contacto del consejero',
        'Use this information when the form asks for your high school counselor or high school contact. Plain English: do not use your teacher. Your counselor is Mr. Sutherland.': 'Usa esta informacion cuando el formulario pida tu consejero o contacto de preparatoria. En palabras claras: no uses a tu maestro. Tu consejero es el Sr. Sutherland.',
        'Downloads and Original Guides': 'Descargas y Guias Originales',
        'Use the buttons above first. These PDFs are here in case you want the original guides, flyers, or screenshots.': 'Usa primero los botones de arriba. Estos PDFs estan aqui por si quieres las guias originales, volantes o capturas de pantalla.',
        'City Application Guide': 'Guia de Solicitud de City College',
        'Step-by-step City College application PDF': 'PDF paso a paso para la solicitud de City College',
        'City Fall 2026 Course Flyer': 'Volante de Cursos de City College Otono 2026',
        'Personal Growth and Government course details': 'Detalles de cursos de Personal Growth y Government',
        'Miramar Application Guide': 'Guia de Solicitud de Miramar',
        'Step-by-step Miramar College application PDF': 'PDF paso a paso para la solicitud de Miramar College',
        'Miramar Fall 2026 Course Flyer': 'Volante de Cursos de Miramar Otono 2026',
        'Personal Growth, U.S. History, and Government details': 'Detalles de Personal Growth, Historia de Estados Unidos y Government',
        'Coastline Application Guide': 'Guia de Solicitud de Coastline',
        'Coastline application and MyCoast steps': 'Solicitud de Coastline y pasos de MyCoast',
        'Coastline Course Recommendations': 'Recomendaciones de Cursos de Coastline',
        'Course ideas by category': 'Ideas de cursos por categoria',
        'Supplemental Form Screenshots': 'Capturas del Formulario Suplementario',
        'What the SDCCD special part-time form looks like': 'Como se ve el formulario especial de medio tiempo de SDCCD',
        'Charter School of San Diego, La Jolla Resource Center': 'Charter School of San Diego, Centro de Recursos La Jolla',
        'Back to Noticeboard': 'Volver al Tablero',
        '© 2026 Altus Schools Charter School of San Diego. All rights reserved.': '© 2026 Altus Schools Charter School of San Diego. Todos los derechos reservados.'
    };

    var records = [];

    function splitText(value) {
        var leading = value.match(/^\s*/)[0];
        var trailing = value.match(/\s*$/)[0];
        return {
            leading: leading,
            trailing: trailing,
            trimmed: value.trim()
        };
    }

    function collectTextNodes(root) {
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                var parent = node.parentElement;
                if (!parent || ['SCRIPT', 'STYLE'].indexOf(parent.tagName) !== -1) {
                    return NodeFilter.FILTER_REJECT;
                }
                return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });

        var node;
        while ((node = walker.nextNode())) {
            var parts = splitText(node.nodeValue);
            records.push({
                node: node,
                en: parts.trimmed,
                leading: parts.leading,
                trailing: parts.trailing
            });
        }
    }

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem(storageKey, currentLang);
        document.documentElement.lang = currentLang;
        document.title = currentLang === 'es' ? es['Altus Dual Enrollment Fall 2026'] : 'Altus Dual Enrollment Fall 2026';

        records.forEach(function (record) {
            var text = currentLang === 'es' ? (es[record.en] || record.en) : record.en;
            record.node.nodeValue = record.leading + text + record.trailing;
        });

        var label = document.querySelector('#dualLangToggle .lang-label');
        if (label) {
            label.textContent = currentLang === 'es' ? 'EN' : 'ES';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById('dualLangToggle');
        collectTextNodes(document.body);
        applyLanguage(currentLang === 'es' ? 'es' : 'en');

        if (btn) {
            btn.addEventListener('click', function () {
                applyLanguage(currentLang === 'en' ? 'es' : 'en');
            });
        }
    });
})();
