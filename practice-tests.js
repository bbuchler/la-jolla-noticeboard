(function () {
    'use strict';
    var text = {
        pageTitle: { en: 'Practice Tests (MPAs) | La Jolla Noticeboard', es: 'Pruebas de Práctica (MPA) | Tablero de La Jolla' },
        headerTitle: { en: 'Math & ELA Practice Tests', es: 'Pruebas de Práctica de Matemáticas e Inglés' },
        noticeboard: { en: 'Noticeboard', es: 'Tablero' },
        navWhy: { en: 'Why It Matters', es: 'Por Qué Importa' },
        navSteps: { en: 'How to Start', es: 'Cómo Empezar' },
        navPick: { en: 'Pick Your Test', es: 'Elige tu Prueba' },
        navTips: { en: 'Test Tips', es: 'Consejos' },
        navHelp: { en: 'Get Help', es: 'Ayuda' },
        heroKicker: { en: 'Grades 7 and 11', es: 'Grados 7 y 11' },
        heroTitle: { en: 'Math and ELA Practice Tests: Due December 3', es: 'Pruebas de Práctica de Matemáticas e Inglés: Fecha Límite 3 de Diciembre' },
        heroLede: {
            en: 'Every 7th and 11th grader takes two practice tests in Mastery Connect: one in Math and one in English Language Arts (ELA). You can take them from home. Plan to finish at least one before Thanksgiving break (November 23-27).',
            es: 'Todos los estudiantes de 7.º y 11.º grado toman dos pruebas de práctica en Mastery Connect: una de Matemáticas y una de Artes del Lenguaje en Inglés (ELA). Puedes tomarlas desde casa. Planea terminar al menos una antes de las vacaciones de Acción de Gracias (23 al 27 de noviembre).'
        },
        loginFirstTitle: { en: '⚠️ Step 1: Set Up Your School Login First', es: '⚠️ Paso 1: Primero Configura tu Acceso Escolar' },
        loginFirstBody1: {
            en: "<b>Most students haven't logged in to their new school Microsoft 365 account yet. You can't open the tests until you do.</b>",
            es: '<b>La mayoría de los estudiantes todavía no han iniciado sesión en su nueva cuenta escolar de Microsoft 365. No podrás abrir las pruebas hasta que lo hagas.</b>'
        },
        loginFirstBody2: {
            en: 'It takes about 5 minutes. Use the username and temporary password your teacher emailed you, create your own password, then come back to this page.',
            es: 'Toma unos 5 minutos. Usa el nombre de usuario y la contraseña temporal que te envió tu maestro por correo, crea tu propia contraseña y luego regresa a esta página.'
        },
        loginFirstBtn: { en: 'Set Up My School Login', es: 'Configurar mi Acceso Escolar' },
        loginFirstHelp: { en: 'Lost Your Password?', es: '¿Perdiste tu Contraseña?' },
        step0Title: { en: 'Set up your school login (first time only)', es: 'Configura tu acceso escolar (solo la primera vez)' },
        step0Body: {
            en: 'If you\'ve never logged in to your <b>@stu.altusschools.net</b> account, do that first with the <a href="student-accounts.html#first-login">Student Account Login Guide</a>. The tests won\'t open without it.',
            es: 'Si nunca has iniciado sesión en tu cuenta <b>@stu.altusschools.net</b>, hazlo primero con la <a href="student-accounts.html#first-login">Guía de Acceso para Estudiantes</a>. Las pruebas no se abrirán sin ella.'
        },
        heroLogin: { en: 'Open the Student Portal', es: 'Abrir el Student Portal' },
        heroSteps: { en: 'Step-by-Step', es: 'Paso a Paso' },
        heroHelp: { en: "Can't Log In?", es: '¿No Puedes Entrar?' },
        whyTitle: { en: 'Why These Tests Matter', es: 'Por Qué Importan Estas Pruebas' },
        why1Title: { en: 'A preview of the state test', es: 'Un adelanto de la prueba estatal' },
        why1Body: {
            en: 'In the spring, 7th and 11th graders take the state CAASPP test. These practice tests use the same kinds of questions and tools, so test day holds no surprises.',
            es: 'En la primavera, los estudiantes de 7.º y 11.º grado toman la prueba estatal CAASPP. Estas pruebas de práctica usan el mismo tipo de preguntas y herramientas, así no habrá sorpresas el día de la prueba.'
        },
        why2Title: { en: 'See where you stand', es: 'Descubre dónde estás' },
        why2Body: {
            en: 'They\'re called "predictive" because they estimate how ready you are for the state test right now, while there\'s still time to improve.',
            es: 'Se llaman "predictivas" porque estiman qué tan preparado estás para la prueba estatal ahora mismo, cuando todavía hay tiempo para mejorar.'
        },
        why3Title: { en: 'Prep that fits you', es: 'Preparación a tu medida' },
        why3Body: {
            en: 'Your teacher uses your results to plan your Math and ELA prep, so your time goes to the skills you actually need, not the ones you already know.',
            es: 'Tu maestro usa tus resultados para planear tu preparación en Matemáticas e Inglés, así tu tiempo se dedica a las habilidades que realmente necesitas, no a las que ya dominas.'
        },
        why4Title: { en: 'No pressure on your grade', es: 'Sin presión en tu calificación' },
        why4Body: {
            en: "These tests don't affect your course grade. Nothing to study. Just work on your own and do your best.",
            es: 'Estas pruebas no afectan la calificación de tu curso. No hay que estudiar. Solo trabaja por tu cuenta y haz tu mejor esfuerzo.'
        },
        stepsTitle: { en: 'How to Start a Test', es: 'Cómo Empezar una Prueba' },
        stepsIntro: {
            en: 'You\'ll use your school Microsoft 365 login. Never logged in before? Set it up first with the <a href="student-accounts.html">Student Account Login Guide</a>.',
            es: 'Usarás tu acceso escolar de Microsoft 365. ¿Nunca has iniciado sesión? Configúralo primero con la <a href="student-accounts.html">Guía de Acceso para Estudiantes</a>.'
        },
        step1Title: { en: 'Get ready', es: 'Prepárate' },
        step1Body: {
            en: "Use a charged laptop or Chromebook in a quiet spot. Have a pencil and scratch paper. You don't have to finish in one sitting. You can pause and come back.",
            es: 'Usa una laptop o Chromebook con carga en un lugar tranquilo. Ten un lápiz y papel borrador. No tienes que terminar de una sola vez. Puedes pausar y regresar.'
        },
        step2Title: {
            en: 'Go to <a href="https://altusgo.com/student-portal/" target="_blank" rel="noopener">altusgo.com/student-portal</a>',
            es: 'Ve a <a href="https://altusgo.com/student-portal/" target="_blank" rel="noopener">altusgo.com/student-portal</a>'
        },
        step2Body: { en: 'This is the same Student Portal you use for your other school apps.', es: 'Es el mismo Student Portal que usas para tus otras aplicaciones escolares.' },
        step3Title: { en: 'Click Clever and sign in', es: 'Haz clic en Clever e inicia sesión' },
        step3Body: {
            en: 'Click <b>Clever (Single Sign-On)</b>, then <b>Log in with Microsoft Entra</b>. Use your school email (ending in <b>@stu.altusschools.net</b>) and your password.',
            es: 'Haz clic en <b>Clever (Single Sign-On)</b> y luego en <b>Log in with Microsoft Entra</b>. Usa tu correo escolar (termina en <b>@stu.altusschools.net</b>) y tu contraseña.'
        },
        step4Title: { en: 'Click Mastery Connect', es: 'Haz clic en Mastery Connect' },
        step4Body: { en: "You'll find it with your other learning apps in Clever.", es: 'Lo encontrarás con tus otras aplicaciones de aprendizaje en Clever.' },
        step5Title: { en: 'Choose the test for YOUR grade', es: 'Elige la prueba de TU grado' },
        step5Body: {
            en: "You'll see tests for other grades too. Go by the <b>test name</b> at the top of each box (the \"Class\" line under it may not match your grade). Pick carefully using the list in <b>Pick Your Test</b> below, then click <b>Start Assessment</b>. This example shows the two 11th grade tests.",
            es: 'También verás pruebas de otros grados. Guíate por el <b>nombre de la prueba</b> en la parte de arriba de cada cuadro (la línea "Class" debajo puede no coincidir con tu grado). Elige con cuidado usando la lista de <b>Elige tu Prueba</b> más abajo y luego haz clic en <b>Start Assessment</b>. Este ejemplo muestra las dos pruebas de 11.º grado.'
        },
        step6Title: { en: "Submit when you're done", es: 'Entrega cuando termines' },
        step6Body: {
            en: 'Check that you answered every question, click <b>Finish</b>, then <b>Yes</b> to submit. Then tell your teacher you finished.',
            es: 'Revisa que contestaste todas las preguntas, haz clic en <b>Finish</b> y luego en <b>Yes</b> para entregar. Después avísale a tu maestro que terminaste.'
        },
        linksTitle: { en: 'Quick Links', es: 'Enlaces Rápidos' },
        linkPortal: { en: 'Open the Student Portal', es: 'Abrir el Student Portal' },
        linkAccounts: { en: 'Student Account Login Guide', es: 'Guía de Acceso para Estudiantes' },
        linkHelp: { en: 'Get Help', es: 'Ayuda' },
        pickTitle: { en: 'Pick Your Test', es: 'Elige tu Prueba' },
        pickIntro: { en: 'Take both tests for your grade. The names on your screen should match these.', es: 'Toma las dos pruebas de tu grado. Los nombres en tu pantalla deben coincidir con estos.' },
        pick11Title: { en: '11th Graders', es: 'Estudiantes de 11.º Grado' },
        pick11Body: {
            en: '<b>11th Grade Math Benchmark Assessment</b><br><b>11th Grade ELA Benchmark Assessment</b>',
            es: '<b>11th Grade Math Benchmark Assessment</b> (Matemáticas)<br><b>11th Grade ELA Benchmark Assessment</b> (Inglés)'
        },
        pick7Title: { en: '7th Graders', es: 'Estudiantes de 7.º Grado' },
        pick7Body: {
            en: '<b>Gr 7 Math Final Comp Altus CA 26-27</b><br><b>Gr 7 LA Final Comp Altus CA 26-27</b>',
            es: '<b>Gr 7 Math Final Comp Altus CA 26-27</b> (Matemáticas)<br><b>Gr 7 LA Final Comp Altus CA 26-27</b> (Inglés)'
        },
        listenTitle: { en: '7th Graders: ELA Listening Section', es: '7.º Grado: Sección de Comprensión Auditiva en Inglés' },
        listenBody: {
            en: 'The 7th grade ELA test starts with a short listening section. Before you begin, open the recording in another tab: <a href="https://drive.google.com/file/d/1cnguKPfemmGJB8I_uWx6ypmAdM-_CR75/view?usp=sharing" target="_blank" rel="noopener"><b>Gr 7 LA Listening Passages (audio)</b></a>. When the test reaches the listening questions, play the passage it asks about. You can pause and replay it as many times as you need. Headphones help.',
            es: 'La prueba de Inglés de 7.º grado empieza con una sección corta de comprensión auditiva. Antes de empezar, abre la grabación en otra pestaña: <a href="https://drive.google.com/file/d/1cnguKPfemmGJB8I_uWx6ypmAdM-_CR75/view?usp=sharing" target="_blank" rel="noopener"><b>Gr 7 LA Listening Passages (audio)</b></a>. Cuando la prueba llegue a las preguntas de comprensión auditiva, reproduce el pasaje que te pide. Puedes pausarlo y repetirlo las veces que necesites. Los audífonos ayudan.'
        },
        tipsTitle: { en: 'Test Tips', es: 'Consejos para la Prueba' },
        tip1Title: { en: 'Read every direction', es: 'Lee todas las instrucciones' },
        tip1Body: { en: 'Some questions need more than one answer. Others ask you to type, drag, or click.', es: 'Algunas preguntas necesitan más de una respuesta. Otras te piden escribir, arrastrar o hacer clic.' },
        tip2Title: { en: 'Calculator', es: 'Calculadora' },
        tip2Body: {
            en: "On math sections that allow one, the calculator is in the Tools menu on the right side of the screen. Some sections don't allow a calculator.",
            es: 'En las secciones de matemáticas que lo permiten, la calculadora está en el menú Tools al lado derecho de la pantalla. Algunas secciones no permiten calculadora.'
        },
        tip3Title: { en: 'Need a break?', es: '¿Necesitas un descanso?' },
        tip3Body: {
            en: "Click the pause icon and close your browser. Log back in later and you'll start where you left off.",
            es: 'Haz clic en el ícono de pausa y cierra tu navegador. Vuelve a iniciar sesión más tarde y continuarás donde te quedaste.'
        },
        tip4Title: { en: 'Screen frozen or internet dropped?', es: '¿Se congeló la pantalla o se cayó el internet?' },
        tip4Body: {
            en: "Your answers are saved. Refresh the page and sign in again. Don't use the browser's back button during the test.",
            es: 'Tus respuestas se guardan. Actualiza la página e inicia sesión otra vez. No uses el botón de regresar del navegador durante la prueba.'
        },
        tip5Title: { en: "Don't submit early", es: 'No entregues antes de tiempo' },
        tip5Body: {
            en: "Once you click Finish and Yes, you can't go back in. If you click Finish by accident, choose No.",
            es: 'Cuando haces clic en Finish y Yes, ya no puedes volver a entrar. Si haces clic en Finish por accidente, elige No.'
        },
        tip6Title: { en: 'Your own work', es: 'Tu propio trabajo' },
        tip6Body: {
            en: 'No outside help, websites, or AI tools. The results only help you if they show what you really know.',
            es: 'Sin ayuda de otras personas, sitios web ni herramientas de IA. Los resultados solo te ayudan si muestran lo que realmente sabes.'
        },
        helpTitle: { en: 'Get Help', es: 'Ayuda' },
        help1Title: { en: "Can't log in?", es: '¿No puedes iniciar sesión?' },
        help1Body: {
            en: 'Try the steps in the <a href="student-accounts.html#password">Password Help</a> section of the login guide. Still stuck? Contact your teacher right away so they can request a password reset before your test day.',
            es: 'Prueba los pasos de la sección <a href="student-accounts.html#password">Ayuda con la Contraseña</a> de la guía de acceso. ¿Sigues sin poder entrar? Comunícate con tu maestro de inmediato para que solicite un cambio de contraseña antes del día de tu prueba.'
        },
        help2Title: { en: "Don't see Mastery Connect or your test?", es: '¿No ves Mastery Connect o tu prueba?' },
        help2Body: {
            en: 'Contact your teacher. They can check that your test is turned on and give you another way to start it.',
            es: 'Comunícate con tu maestro. Puede revisar que tu prueba esté activada y darte otra forma de empezarla.'
        },
        help3Title: { en: 'Want to test with your teacher?', es: '¿Quieres hacer la prueba con tu maestro?' },
        help3Body: {
            en: 'You\'re welcome to. Set up a time in person at the <i>La Jolla Resource Center, 7456 Girard Ave., La Jolla, CA 92037</i>, or on Zoom at <a href="https://bit.ly/buchlerzoom" target="_blank" rel="noopener">bit.ly/buchlerzoom</a>. Please schedule first. Your teacher isn\'t waiting in the Zoom room all day.',
            es: 'Claro que sí. Programa una hora en persona en el <i>La Jolla Resource Center, 7456 Girard Ave., La Jolla, CA 92037</i>, o por Zoom en <a href="https://bit.ly/buchlerzoom" target="_blank" rel="noopener">bit.ly/buchlerzoom</a>. Programa primero. Tu maestro no está esperando en la sala de Zoom todo el día.'
        },
        backButton: { en: 'Back to Noticeboard', es: 'Volver al Tablero' }
    };
    var currentLang = 'en';
    try { currentLang = localStorage.getItem('noticeboard-lang') === 'es' ? 'es' : 'en'; } catch (e) {}

    function render() {
        document.documentElement.lang = currentLang;
        document.title = text.pageTitle[currentLang];
        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            var value = text[element.dataset.i18n];
            if (value) element.textContent = value[currentLang];
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
            var value = text[element.dataset.i18nHtml];
            if (value) element.innerHTML = value[currentLang];
        });
        var toggle = document.getElementById('testsLangToggle');
        toggle.querySelector('.lang-label').textContent = currentLang === 'en' ? 'ES' : 'EN';
        toggle.setAttribute('aria-label', currentLang === 'en' ? 'Cambiar a español' : 'Switch to English');
    }

    document.addEventListener('DOMContentLoaded', function () {
        render();
        document.getElementById('testsLangToggle').addEventListener('click', function () {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            try { localStorage.setItem('noticeboard-lang', currentLang); } catch (e) {}
            render();
        });
    });
})();
