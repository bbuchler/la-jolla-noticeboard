(function () {
    'use strict';
    var text = {
        pageTitle: { en: 'Student Microsoft 365 Accounts | La Jolla Noticeboard', es: 'Cuentas Estudiantiles de Microsoft 365 | Tablero de La Jolla' },
        headerTitle: { en: 'Student Microsoft 365 Accounts', es: 'Cuentas Estudiantiles de Microsoft 365' },
        noticeboard: { en: 'Noticeboard', es: 'Tablero' },
        navWhy: { en: 'Why It Matters', es: 'Por Qué Importa' },
        navSteps: { en: 'First Login', es: 'Primer Acceso' },
        navApps: { en: 'Your Apps', es: 'Tus Aplicaciones' },
        navPassword: { en: 'Password Help', es: 'Ayuda con la Contraseña' },
        navSafety: { en: 'Stay Safe', es: 'Seguridad' },
        heroKicker: { en: 'Student Accounts', es: 'Cuentas Estudiantiles' },
        heroTitle: { en: 'Your School Microsoft 365 Account', es: 'Tu Cuenta Escolar de Microsoft 365' },
        heroLede: {
            en: 'One school login opens Clever, IXL, your learning apps, and school testing. Set it up once, pick a password you will remember, and you are ready.',
            es: 'Un solo acceso escolar abre Clever, IXL, tus aplicaciones de aprendizaje y las pruebas escolares. Configúralo una vez, elige una contraseña que puedas recordar y estarás listo.'
        },
        heroLogin: { en: 'Log In at AltusGO', es: 'Iniciar Sesión en AltusGO' },
        heroSteps: { en: 'First Login Steps', es: 'Pasos para el Primer Acceso' },
        heroPassword: { en: 'Forgot Your Password?', es: '¿Olvidaste tu Contraseña?' },
        whyTitle: { en: 'Why This Account Matters', es: 'Por Qué Importa Esta Cuenta' },
        why1Title: { en: 'One login for everything', es: 'Un acceso para todo' },
        why1Body: {
            en: 'Altus uses Clever for single sign-on. Sign in one time with your school account and your school apps and curriculum open without separate passwords.',
            es: 'Altus usa Clever para el inicio de sesión único. Inicia sesión una vez con tu cuenta escolar y tus aplicaciones y materiales escolares se abren sin contraseñas separadas.'
        },
        why2Title: { en: 'IXL and your learning apps', es: 'IXL y tus aplicaciones de aprendizaje' },
        why2Body: {
            en: 'Your learning apps now use this school login. If it does not work, you cannot open your assignments.',
            es: 'Tus aplicaciones de aprendizaje ahora usan este acceso escolar. Si no funciona, no podrás abrir tus tareas.'
        },
        why3Title: { en: 'Ready for testing', es: 'Listo para las pruebas' },
        why3Body: {
            en: 'You will use this account for upcoming school testing. Make sure your login works now, not on test day.',
            es: 'Usarás esta cuenta en las próximas pruebas escolares. Asegúrate de que tu acceso funcione ahora, no el día de la prueba.'
        },
        why4Title: { en: 'Free Microsoft apps', es: 'Aplicaciones de Microsoft gratis' },
        why4Body: {
            en: 'Word, Excel, PowerPoint, OneNote, Teams, and Outlook are included with your account.',
            es: 'Word, Excel, PowerPoint, OneNote, Teams y Outlook están incluidos con tu cuenta.'
        },
        why5Title: { en: 'Your work is saved in the cloud', es: 'Tu trabajo se guarda en la nube' },
        why5Body: {
            en: 'OneDrive stores your schoolwork online, so you can open your files from any school-approved device.',
            es: 'OneDrive guarda tus tareas en línea, así puedes abrir tus archivos desde cualquier dispositivo aprobado por la escuela.'
        },
        why6Title: { en: 'Reach your teacher', es: 'Comunícate con tu maestro' },
        why6Body: {
            en: 'Students in grades 6-12 get a school Outlook email account for messages with teachers. Teams works for meetings and group projects.',
            es: 'Los estudiantes de los grados 6 a 12 reciben una cuenta de correo escolar de Outlook para comunicarse con sus maestros. Teams sirve para reuniones y proyectos en grupo.'
        },
        stepsTitle: { en: 'First Login: Step by Step', es: 'Primer Acceso: Paso a Paso' },
        stepsIntro: {
            en: 'This takes about 5 minutes. Have your username and temporary password ready. Your teacher sends them to you.',
            es: 'Esto toma unos 5 minutos. Ten listos tu nombre de usuario y tu contraseña temporal. Tu maestro te los envía.'
        },
        step1Title: { en: 'Find your username and temporary password', es: 'Busca tu nombre de usuario y contraseña temporal' },
        step1Body: {
            en: 'Your username is your school email. It ends in <b>@stu.altusschools.net</b>. Your teacher gives you your temporary password.',
            es: 'Tu nombre de usuario es tu correo escolar. Termina en <b>@stu.altusschools.net</b>. Tu maestro te da tu contraseña temporal.'
        },
        step2Title: {
            en: 'Go to <a href="https://altusgo.com" target="_blank" rel="noopener">altusgo.com</a> and click Student Portal',
            es: 'Ve a <a href="https://altusgo.com" target="_blank" rel="noopener">altusgo.com</a> y haz clic en Student Portal'
        },
        step2Body: { en: 'AltusGO is the starting page for all of your school accounts.', es: 'AltusGO es la página de inicio para todas tus cuentas escolares.' },
        step3Title: { en: 'Click Microsoft 365 and sign in', es: 'Haz clic en Microsoft 365 e inicia sesión' },
        step3Body: { en: 'Enter your school email and your temporary password.', es: 'Escribe tu correo escolar y tu contraseña temporal.' },
        step4Title: { en: 'Create your new password', es: 'Crea tu nueva contraseña' },
        step4Body: {
            en: 'Microsoft asks you to change your password the first time you log in. Choose one you will remember and save it somewhere safe. Do not share it with anyone.',
            es: 'Microsoft te pide cambiar tu contraseña la primera vez que inicias sesión. Elige una que puedas recordar y guárdala en un lugar seguro. No la compartas con nadie.'
        },
        step5Title: { en: 'Test Clever', es: 'Prueba Clever' },
        step5Body: {
            en: 'Go back to the Student Portal and click <b>Clever (Single Sign-On)</b>. Choose <b>Log in with Microsoft Entra</b> and use your school email and new password.',
            es: 'Regresa al Student Portal y haz clic en <b>Clever (Single Sign-On)</b>. Elige <b>Log in with Microsoft Entra</b> y usa tu correo escolar y tu nueva contraseña.'
        },
        step6Title: { en: 'Open your learning apps', es: 'Abre tus aplicaciones de aprendizaje' },
        step6Body: {
            en: 'In Microsoft 365, click <b>Apps</b> to find <b>IXL SSO</b>. Other learning apps are listed in Clever under <b>Learning Apps</b>. If you cannot find an app your teacher assigned, let your teacher know.',
            es: 'En Microsoft 365, haz clic en <b>Apps</b> para encontrar <b>IXL SSO</b>. Las demás aplicaciones de aprendizaje aparecen en Clever bajo <b>Learning Apps</b>. Si no encuentras una aplicación que te asignó tu maestro, avísale.'
        },
        step7Title: { en: 'Tell your teacher it works', es: 'Avísale a tu maestro que funciona' },
        step7Body: { en: "A quick reply to your teacher's email is enough.", es: 'Basta con una respuesta rápida al correo de tu maestro.' },
        linksTitle: { en: 'Login Links', es: 'Enlaces de Acceso' },
        linkAltusGo: { en: 'Open AltusGO', es: 'Abrir AltusGO' },
        linkPassword: { en: 'Password Help', es: 'Ayuda con la Contraseña' },
        linkSafety: { en: 'Account Safety Rules', es: 'Reglas de Seguridad' },
        appsTitle: { en: 'Apps Included With Your Account', es: 'Aplicaciones Incluidas con tu Cuenta' },
        appWord: { en: 'Write and edit assignments, reports, and projects.', es: 'Escribe y edita tareas, informes y proyectos.' },
        appExcel: { en: 'Build spreadsheets, tables, and charts.', es: 'Crea hojas de cálculo, tablas y gráficas.' },
        appPowerPoint: { en: 'Design slideshows for class presentations and group projects.', es: 'Diseña presentaciones para clase y proyectos en grupo.' },
        appOneNote: { en: 'Take digital notes and keep class materials in one place.', es: 'Toma notas digitales y guarda tus materiales de clase en un solo lugar.' },
        appOneDrive: { en: 'Store schoolwork securely in the cloud.', es: 'Guarda tus tareas de forma segura en la nube.' },
        appTeams: { en: 'Meet with your teacher and work with classmates on projects.', es: 'Reúnete con tu maestro y trabaja con compañeros en proyectos.' },
        appOutlookTitle: { en: 'Outlook (grades 6-12)', es: 'Outlook (grados 6-12)' },
        appOutlook: { en: 'Send and receive email with your teachers.', es: 'Envía y recibe correos con tus maestros.' },
        appClever: { en: 'Opens your learning apps with one sign-in.', es: 'Abre tus aplicaciones de aprendizaje con un solo inicio de sesión.' },
        passwordTitle: { en: 'Password Help', es: 'Ayuda con la Contraseña' },
        pw1Title: { en: 'Forgot your password?', es: '¿Olvidaste tu contraseña?' },
        pw1Body: {
            en: 'Contact your teacher. Your teacher sends a reset request to the school and gives you a new temporary password. Then log in and create a new password again.',
            es: 'Comunícate con tu maestro. Tu maestro envía una solicitud a la escuela y te da una nueva contraseña temporal. Luego inicia sesión y crea una nueva contraseña otra vez.'
        },
        pw2Title: { en: 'Temporary password not working?', es: '¿La contraseña temporal no funciona?' },
        pw2Body: {
            en: 'You may have already changed it. Try the password you created. If that does not work either, contact your teacher for a reset.',
            es: 'Es posible que ya la hayas cambiado. Prueba la contraseña que creaste. Si tampoco funciona, pide a tu maestro que la restablezca.'
        },
        pw3Title: { en: 'Wrong Microsoft account opens?', es: '¿Se abre otra cuenta de Microsoft?' },
        pw3Body: {
            en: 'If Microsoft signs you in to a personal or family account, open a private browser window and sign in with your school email.',
            es: 'Si Microsoft abre una cuenta personal o familiar, abre una ventana privada del navegador e inicia sesión con tu correo escolar.'
        },
        pw4Title: { en: 'Save your password', es: 'Guarda tu contraseña' },
        pw4Body: {
            en: 'Write it down somewhere safe at home or save it in a password manager. You will need it for every school app and for testing.',
            es: 'Anótala en un lugar seguro en casa o guárdala en un administrador de contraseñas. La necesitarás para todas las aplicaciones escolares y para las pruebas.'
        },
        safetyTitle: { en: 'Keep Your Account Safe', es: 'Mantén tu Cuenta Segura' },
        safetyIntro: { en: 'Your Microsoft account is for school use only.', es: 'Tu cuenta de Microsoft es solo para uso escolar.' },
        safety1: { en: 'Do not share your username or password, even with friends.', es: 'No compartas tu nombre de usuario ni tu contraseña, ni siquiera con amigos.' },
        safety2: { en: 'Follow the Technology Use Agreement.', es: 'Sigue el Acuerdo de Uso de Tecnología.' },
        safety3: { en: 'Be kind and respectful online.', es: 'Sé amable y respetuoso en línea.' },
        safety4: { en: 'Only use school tools for learning.', es: 'Usa las herramientas escolares solo para aprender.' },
        safety5: { en: 'Your school helps keep accounts safe by monitoring activity.', es: 'Tu escuela ayuda a proteger las cuentas supervisando la actividad.' },
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
        var toggle = document.getElementById('accountsLangToggle');
        toggle.querySelector('.lang-label').textContent = currentLang === 'en' ? 'ES' : 'EN';
        toggle.setAttribute('aria-label', currentLang === 'en' ? 'Cambiar a español' : 'Switch to English');
    }

    document.addEventListener('DOMContentLoaded', function () {
        render();
        document.getElementById('accountsLangToggle').addEventListener('click', function () {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            try { localStorage.setItem('noticeboard-lang', currentLang); } catch (e) {}
            render();
        });
    });
})();
