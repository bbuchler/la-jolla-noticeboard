(function () {
    'use strict';

    var translations = {
        en: {
            pageTitle: 'Get to Know Mr. Buchler | La Jolla Noticeboard',
            headerTitle: 'Meet Mr. Buchler', noticeboard: 'Noticeboard', dualEnrollment: 'Dual Enrollment',
            navAbout: 'About Me', navInterests: 'Outside School', navApproach: 'How I Teach', navTogether: 'Working Together', navStart: 'Start Here', navContact: 'Contact',
            heroKicker: 'Welcome', heroTitle: 'Get to Know Mr. Buchler',
            heroLede: 'I work with students in grades 6–12 at the La Jolla Resource Center. My goal is simple: help you build a school plan that connects to your interests, fits your life, and moves you toward what comes next.',
            heroWorkButton: 'How We Will Work Together', heroSurveyButton: 'Tell Me About You',
            heroNote: 'Your goals. Your interests. Your next step.',
            aboutTitle: 'A Little About Me',
            aboutP1: "I am a teacher and educational technology specialist. I earned my bachelor's degree in education from the University of Delaware and my master's degree in Educational Technology from California State University, Fullerton. I completed professional development and credentialing at UC San Diego, earned an Educational Technology Award from the Professional Development Institute, and completed Leading Edge, AVID, and WRITE Institute training.",
            aboutP2: 'I care about making school more personal and useful. I also work with educators on practical, responsible ways to use technology and AI. The tool is never the point. The point is helping people learn, solve problems, and do work they are proud of.',
            interestsTitle: 'Outside of School', interestsIntro: 'I believe getting to know each other makes it easier to work as a team. Here are a few things I enjoy when I am not teaching.',
            surfTitle: 'Surfing and the Beach', surfText: 'Surfing has been one of my longtime hobbies. It keeps me learning, patient, and ready for the next wave.',
            mountainTitle: 'Snowboarding and the Mountains', mountainText: 'I enjoy snowboarding, hiking, and spending time outdoors. A challenging trail or a day in the mountains is a good reset.',
            travelTitle: 'Travel, Camping, and Family', travelText: 'I like exploring new places, camping, and spending time with family and friends. Travel is one of my favorite ways to keep learning.',
            approachTitle: 'How I Approach Teaching',
            personalTitle: 'Make It Personal', personalText: 'Your interests, strengths, responsibilities, and goals matter. When it makes sense, we can connect them to examples, readings, projects, and course choices.',
            stepsTitle: 'Find the Next Step', stepsText: 'Big goals become manageable when we turn them into clear weekly actions. We will focus on what needs to happen next, then keep building.',
            techTitle: 'Use Technology With Purpose', techText: 'Technology, including AI, can support learning when it helps you think, create, practice, and understand. It should strengthen your work, not replace your thinking.',
            togetherTitle: 'How We Will Work Together', fromYouTitle: 'What I Need From You',
            fromYou1: 'Tell me what is working, what is not, and when you are stuck.', fromYou2: 'Communicate early. Small problems are easier to solve before they become big ones.', fromYou3: 'Set up regular on-site times, usually a couple of days each week.', fromYou4: 'Take ownership of your next step, even when the whole path is not clear yet.',
            fromMeTitle: 'What You Can Expect From Me', fromMe1: 'Clear expectations, honest feedback, and help making a workable plan.', fromMe2: 'An effort to connect schoolwork to your interests and future goals.', fromMe3: 'Help finding classes, programs, tools, and opportunities that fit you.', fromMe4: 'Flexibility around real responsibilities, paired with steady progress and accountability.',
            startTitle: 'Good Places to Start', surveyTitle: 'Share Your Interests and Goals', surveyText: 'Take the five-minute personalization survey.', scheduleTitle: 'Plan Your On-Site Time', scheduleText: 'Tell me which days and times work best.', exploreTitle: 'Explore Opportunities', exploreText: 'Find programs, college options, and ways to build skills.', zoomTitle: "Join Mr. Buchler's Zoom", zoomText: 'Open the direct link for virtual check-ins and support.',
            contactTitle: 'Contact Mr. Buchler', contactHours: 'Typical availability: Monday-Friday, 10 AM-6 PM', backButton: 'Back to the Noticeboard', dualButton: 'Dual Enrollment Guide'
        },
        es: {
            pageTitle: 'Conoce al Sr. Buchler | Tablero de La Jolla',
            headerTitle: 'Conoce al Sr. Buchler', noticeboard: 'Tablero', dualEnrollment: 'Inscripcion Doble',
            navAbout: 'Sobre Mi', navInterests: 'Fuera de la Escuela', navApproach: 'Como Enseno', navTogether: 'Trabajando Juntos', navStart: 'Empieza Aqui', navContact: 'Contacto',
            heroKicker: 'Bienvenido', heroTitle: 'Conoce al Sr. Buchler',
            heroLede: 'Trabajo con estudiantes de los grados 6–12 en el Centro de Recursos La Jolla. Mi meta es sencilla: ayudarte a crear un plan escolar conectado con tus intereses, que se adapte a tu vida y te acerque a lo que sigue.',
            heroWorkButton: 'Como Trabajaremos Juntos', heroSurveyButton: 'Cuentame Sobre Ti',
            heroNote: 'Tus metas. Tus intereses. Tu siguiente paso.',
            aboutTitle: 'Un Poco Sobre Mi',
            aboutP1: 'Soy maestro y especialista en tecnologia educativa. Obtuve mi licenciatura en educacion de la Universidad de Delaware y mi maestria en Tecnologia Educativa de California State University, Fullerton. Complete desarrollo profesional y credenciales en UC San Diego, recibi un Premio de Tecnologia Educativa del Professional Development Institute y complete capacitacion de Leading Edge, AVID y WRITE Institute.',
            aboutP2: 'Me importa que la escuela sea mas personal y util. Tambien trabajo con educadores en formas practicas y responsables de usar la tecnologia y la inteligencia artificial. La herramienta nunca es el objetivo. El objetivo es ayudar a las personas a aprender, resolver problemas y hacer un trabajo del que se sientan orgullosas.',
            interestsTitle: 'Fuera de la Escuela', interestsIntro: 'Creo que conocernos mejor facilita el trabajo en equipo. Estas son algunas cosas que disfruto cuando no estoy ensenando.',
            surfTitle: 'Surf y la Playa', surfText: 'El surf ha sido uno de mis pasatiempos durante mucho tiempo. Me mantiene aprendiendo, paciente y listo para la proxima ola.',
            mountainTitle: 'Snowboard y las Montanas', mountainText: 'Disfruto el snowboard, el senderismo y pasar tiempo al aire libre. Un sendero desafiante o un dia en las montanas es una buena forma de recargar energias.',
            travelTitle: 'Viajes, Campamento y Familia', travelText: 'Me gusta explorar nuevos lugares, acampar y pasar tiempo con familiares y amigos. Viajar es una de mis formas favoritas de seguir aprendiendo.',
            approachTitle: 'Mi Forma de Ensenar',
            personalTitle: 'Hazlo Personal', personalText: 'Tus intereses, fortalezas, responsabilidades y metas importan. Cuando tenga sentido, podemos conectarlos con ejemplos, lecturas, proyectos y opciones de cursos.',
            stepsTitle: 'Encuentra el Siguiente Paso', stepsText: 'Las metas grandes se vuelven manejables cuando las convertimos en acciones semanales claras. Nos enfocaremos en lo que sigue y continuaremos construyendo.',
            techTitle: 'Usa la Tecnologia con Proposito', techText: 'La tecnologia, incluida la inteligencia artificial, puede apoyar el aprendizaje cuando te ayuda a pensar, crear, practicar y entender. Debe fortalecer tu trabajo, no reemplazar tu pensamiento.',
            togetherTitle: 'Como Trabajaremos Juntos', fromYouTitle: 'Lo Que Necesito de Ti',
            fromYou1: 'Dime que esta funcionando, que no y cuando te sientas estancado.', fromYou2: 'Comunicate temprano. Los problemas pequenos son mas faciles de resolver antes de que crezcan.', fromYou3: 'Establece horarios regulares en el centro, normalmente un par de dias cada semana.', fromYou4: 'Hazte responsable de tu siguiente paso, aunque todo el camino todavia no este claro.',
            fromMeTitle: 'Lo Que Puedes Esperar de Mi', fromMe1: 'Expectativas claras, comentarios honestos y ayuda para crear un plan que funcione.', fromMe2: 'Un esfuerzo por conectar el trabajo escolar con tus intereses y metas futuras.', fromMe3: 'Ayuda para encontrar clases, programas, herramientas y oportunidades que se adapten a ti.', fromMe4: 'Flexibilidad para responsabilidades reales, junto con progreso constante y responsabilidad.',
            startTitle: 'Buenos Lugares para Comenzar', surveyTitle: 'Comparte Tus Intereses y Metas', surveyText: 'Completa la encuesta de personalizacion de cinco minutos.', scheduleTitle: 'Planea Tu Horario en el Centro', scheduleText: 'Dime que dias y horarios funcionan mejor.', exploreTitle: 'Explora Oportunidades', exploreText: 'Encuentra programas, opciones universitarias y formas de desarrollar habilidades.', zoomTitle: 'Entra al Zoom del Sr. Buchler', zoomText: 'Abre el enlace directo para reuniones virtuales y apoyo.',
            contactTitle: 'Contacta al Sr. Buchler', contactHours: 'Disponibilidad habitual: lunes a viernes, 10 AM-6 PM', backButton: 'Volver al Tablero', dualButton: 'Guia de Inscripcion Doble'
        }
    };

    var currentLang = localStorage.getItem('noticeboard-lang') || 'en';

    function render() {
        var strings = translations[currentLang];
        document.documentElement.lang = currentLang;
        document.title = strings.pageTitle;
        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            var key = element.getAttribute('data-i18n');
            if (strings[key]) element.textContent = strings[key];
        });
        document.querySelector('#profileLangToggle .lang-label').textContent = currentLang === 'en' ? 'ES' : 'EN';
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('profileLangToggle').addEventListener('click', function () {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            localStorage.setItem('noticeboard-lang', currentLang);
            render();
        });
        render();
    });
})();
