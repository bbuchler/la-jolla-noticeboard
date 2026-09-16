(function () {
    'use strict';
    var profile;
    var currentLang = localStorage.getItem('noticeboard-lang') === 'es' ? 'es' : 'en';
    function render() {
        document.documentElement.lang = currentLang;
        document.title = profile.pageTitle[currentLang];
        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            var value = profile[element.dataset.i18n];
            if (value) element.textContent = value[currentLang] || value.en;
        });
        var toggle = document.getElementById('profileLangToggle');
        toggle.querySelector('.lang-label').textContent = currentLang === 'en' ? 'ES' : 'EN';
        toggle.setAttribute('aria-label', currentLang === 'en' ? 'Cambiar a español' : 'Switch to English');
        var portrait = document.getElementById('quinnPortrait');
        if (profile.portrait) {
            var img = document.createElement('img');
            img.src = profile.portrait;
            img.alt = profile.portraitAlt[currentLang];
            img.className = 'profile-portrait';
            portrait.replaceChildren(img);
            portrait.className = '';
            portrait.removeAttribute('aria-hidden');
        }
    }
    document.addEventListener('DOMContentLoaded', async function () {
        var toggle = document.getElementById('profileLangToggle');
        toggle.disabled = true;
        try {
            var response = await fetch('site-data.json?v=20260916-5');
            if (!response.ok) throw new Error('Profile data unavailable');
            profile = (await response.json()).quinnProfile;
            render();
            toggle.disabled = false;
            toggle.addEventListener('click', function () {
                currentLang = currentLang === 'en' ? 'es' : 'en';
                localStorage.setItem('noticeboard-lang', currentLang);
                render();
            });
        } catch (error) {
            console.error(error);
            toggle.hidden = true;
        }
    });
})();
