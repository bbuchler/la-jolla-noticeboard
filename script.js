/* ============================================
   LA JOLLA NOTICEBOARD — SCRIPT
   Loads data from site-data.json, renders all
   sections, handles navigation & language toggle.
   ============================================ */

(function () {
    'use strict';

    let siteData = null;
    let currentLang = localStorage.getItem('noticeboard-lang') || 'en';

    // --- Helpers ---

    /** Get translated text from a {en, es} object, or return raw string */
    function t(obj) {
        if (!obj) return '';
        if (typeof obj === 'string') return obj;
        return obj[currentLang] || obj['en'] || '';
    }

    /** Format a date string (YYYY-MM-DD) to readable format */
    function formatDate(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        return d.toLocaleDateString(currentLang === 'es' ? 'es-US' : 'en-US', options);
    }

    /** Get day number and month abbreviation from date string */
    function parseDateParts(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        return {
            day: d.getDate(),
            monthAbbr: d.toLocaleDateString(currentLang === 'es' ? 'es-US' : 'en-US', { month: 'short' })
        };
    }

    /** Check if a date is in the past */
    function isPast(dateStr) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const d = new Date(dateStr + 'T00:00:00');
        return d < today;
    }

    // --- Data Loading ---

    async function loadData() {
        try {
            const response = await fetch('site-data.json');
            siteData = await response.json();
            renderAll();
        } catch (err) {
            document.body.innerHTML = '<div style="padding:40px;text-align:center;font-family:sans-serif;">' +
                '<h1>Unable to load noticeboard data</h1>' +
                '<p>Please check that site-data.json exists and try again.</p></div>';
        }
    }

    // --- Render All Sections ---

    function renderAll() {
        renderHeader();
        renderNav();
        renderHero();
        renderCalendar();
        renderImportantDates();
        renderWeeklySchedule();
        renderFieldTrips();
        renderPrograms();
        renderOpportunities();
        renderMotivation();
        renderContact();
        renderSectionHeadings();
        updateLangButton();
    }

    // --- Header ---

    function renderHeader() {
        var logo = document.getElementById('headerLogo');
        logo.src = siteData.school.logo;
        logo.alt = siteData.school.name;
    }

    // --- Navigation ---

    function renderNav() {
        const navList = document.getElementById('navList');
        const navItems = [
            { href: '#calendar', key: 'calendar' },
            { href: '#dates', key: 'dates' },
            { href: '#weekly', key: 'weekly' },
            { href: '#trips', key: 'trips' },
            { href: '#programs', key: 'programs' },
            { href: '#opportunities', key: 'opportunities' },
            { href: '#motivation', key: 'motivation' },
            { href: '#contact', key: 'contact' }
        ];

        navList.innerHTML = navItems.map(function (item) {
            return '<li><a href="' + item.href + '">' + t(siteData.navLabels[item.key]) + '</a></li>';
        }).join('');
    }

    // --- Hero ---

    function renderHero() {
        var heroLogo = document.getElementById('heroLogo');
        heroLogo.src = siteData.school.logoWhite;
        heroLogo.alt = siteData.school.name;
        document.getElementById('heroTitle').textContent = t(siteData.heroMessage);

        // Live date — two lines: day of week + date
        var now = new Date();
        var locale = currentLang === 'es' ? 'es-US' : 'en-US';
        document.getElementById('heroDay').textContent = now.toLocaleDateString(locale, { weekday: 'long' });
        document.getElementById('heroDate').textContent = now.toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' });

        document.getElementById('heroTagline').textContent = t(siteData.school.tagline);
    }

    // --- Calendar ---

    function renderCalendar() {
        var container = document.getElementById('calendarContent');
        container.innerHTML = siteData.calendarImages.map(function (cal) {
            var imageHtml = cal.image
                ? '<img src="' + cal.image + '" alt="' + t(cal.month) + '" class="calendar-preview" onclick="document.getElementById(\'calendarModal\').style.display=\'flex\'; document.getElementById(\'calendarModalImg\').src=\'' + cal.image + '\';">'
                : '<div class="calendar-icon">&#128197;</div>';

            var pdfBtn = cal.pdf
                ? '<a href="' + cal.pdf + '" target="_blank" rel="noopener" class="btn btn-primary">' +
                  (currentLang === 'es' ? 'Abrir PDF' : 'Open PDF') + '</a>'
                : '';

            return '<div class="calendar-card">' +
                '<div class="calendar-card-header">' + t(cal.month) + '</div>' +
                '<div class="calendar-card-body">' +
                imageHtml +
                '<p class="calendar-tap-hint">' + (currentLang === 'es' ? 'Toca la imagen para ampliar' : 'Tap image to enlarge') + '</p>' +
                pdfBtn +
                '</div></div>';
        }).join('');

        // Learning period pills
        var lp = siteData.learningPeriods;
        var lpContainer = document.getElementById('learningPeriods');
        lpContainer.innerHTML = '<div class="lp-pills">' +
            lp.periods.map(function (p) {
                return '<span class="lp-pill"><span class="lp-pill-label">' + p.name + '</span> ' + t(p.dates) + '</span>';
            }).join('') + '</div>';
    }

    // --- Important Dates ---

    function renderImportantDates() {
        // CAASPP banner
        var caaspp = siteData.caaspp;
        var banner = document.getElementById('caasppBanner');
        banner.innerHTML = '<h3>' + t(caaspp.heading) + ' — ' + t(caaspp.dates) + '</h3>' +
            caaspp.details.map(function (d) { return '<p>' + t(d) + '</p>'; }).join('') +
            '<p style="margin-top:8px;font-weight:600;">' + t(caaspp.note) + '</p>';

        // Type labels
        var typeLabels = {
            deadline: { en: 'Deadline', es: 'Fecha Limite' },
            testing: { en: 'Testing', es: 'Evaluacion' },
            activity: { en: 'Activity', es: 'Actividad' },
            closed: { en: 'School Closed', es: 'Escuela Cerrada' },
            milestone: { en: 'Info', es: 'Info' }
        };

        // Date cards
        var container = document.getElementById('importantDatesList');
        container.innerHTML = siteData.importantDates.map(function (evt) {
            var parts = parseDateParts(evt.date);
            var past = isPast(evt.date);
            var badgeHtml = '';
            if (evt.badge === 'mandatory') {
                badgeHtml = '<span class="badge badge-mandatory">' +
                    (currentLang === 'es' ? 'Obligatorio' : 'Mandatory') + '</span>';
            } else if (evt.badge === 'new') {
                badgeHtml = '<span class="badge badge-new">' +
                    (currentLang === 'es' ? 'Nuevo' : 'New') + '</span>';
            }

            var label = typeLabels[evt.type] ? t(typeLabels[evt.type]) : evt.type;

            return '<div class="date-card' + (past ? ' past' : '') + '">' +
                '<div class="date-bubble type-' + evt.type + '">' +
                '<span class="date-day">' + parts.day + '</span>' +
                '<span class="date-month-abbr">' + parts.monthAbbr + '</span>' +
                '</div>' +
                '<div class="date-card-content">' +
                '<div class="date-card-title">' + t(evt.title) + badgeHtml + '</div>' +
                '<div class="date-card-type type-' + evt.type + '-text">' + label + '</div>' +
                '</div></div>';
        }).join('');
    }

    // --- Weekly Schedule ---

    function renderWeeklySchedule() {
        var container = document.getElementById('weeklySchedule');
        container.innerHTML = siteData.recurringEvents.map(function (day) {
            var eventsHtml = '';
            var noteHtml = '';

            if (day.note) {
                noteHtml = '<p class="weekly-day-note">' + t(day.note) + '</p>';
            }

            if (day.events.length === 0 && !day.note) {
                eventsHtml = '<p class="weekly-no-events">' +
                    (currentLang === 'es' ? 'No hay eventos programados' : 'No scheduled events') + '</p>';
            } else {
                eventsHtml = day.events.map(function (e) {
                    return '<div class="weekly-event">' +
                        '<div class="weekly-event-name">' + t(e.name) + '</div>' +
                        '<div class="weekly-event-details">' + e.time + ' — ' + t(e.location) + '</div>' +
                        '</div>';
                }).join('');
            }

            return '<div class="weekly-day-card">' +
                '<div class="weekly-day-header">' + t(day.day) + '</div>' +
                '<div class="weekly-day-body">' + eventsHtml + noteHtml + '</div></div>';
        }).join('');
    }

    // --- Field Trips ---

    /** Seasonal note banner HTML */
    function seasonalBannerHtml() {
        if (!siteData.seasonalNote) return '';
        return '<div class="seasonal-banner">' + t(siteData.seasonalNote) + '</div>';
    }

    function renderFieldTrips() {
        var container = document.getElementById('fieldTripsList');

        // Show recap if no upcoming trips
        if (!siteData.fieldTrips || siteData.fieldTrips.length === 0) {
            var recap = siteData.fieldTripRecap
                ? '<div class="field-trip-recap"><p>' + t(siteData.fieldTripRecap) + '</p>' +
                  (siteData.fieldTripLookAhead ? '<p class="field-trip-lookahead">' + t(siteData.fieldTripLookAhead) + '</p>' : '') +
                  '</div>'
                : '';
            container.innerHTML = recap;
            return;
        }

        container.innerHTML = siteData.fieldTrips.map(function (trip) {
            var remindersHtml = trip.reminders ? '<div class="field-trip-reminders">' +
                '<h4>' + (currentLang === 'es' ? 'Recordatorios' : 'Reminders') + '</h4>' +
                '<ul>' + trip.reminders.map(function (r) { return '<li>' + t(r) + '</li>'; }).join('') + '</ul></div>'
                : '';

            return '<div class="field-trip-card">' +
                '<div class="field-trip-header">' +
                '<h3>' + t(trip.title) + '</h3>' +
                '<div class="field-trip-date">' + formatDate(trip.date) + '</div>' +
                '</div>' +
                '<div class="field-trip-body">' +
                '<div class="field-trip-detail"><span class="field-trip-detail-icon">&#128205;</span><span>' + trip.address + '</span></div>' +
                '<div class="field-trip-detail"><span class="field-trip-detail-icon">&#128336;</span><span>' + t(trip.time) + '</span></div>' +
                '<div class="field-trip-detail"><span class="field-trip-detail-icon">&#128196;</span><span>' + t(trip.description) + '</span></div>' +
                (trip.mapsUrl ? '<a href="' + trip.mapsUrl + '" target="_blank" rel="noopener" class="btn btn-outline" style="margin-top:12px;">' +
                    (currentLang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps') + '</a>' : '') +
                remindersHtml +
                '</div></div>';
        }).join('');
    }

    // --- Programs ---

    function renderPrograms() {
        var container = document.getElementById('programsList');
        var aboveHtml = seasonalBannerHtml() +
            '<p class="programs-returning-note">' +
            (currentLang === 'es' ? 'Estos son los programas que ofrecimos este ano. Esperamos horarios similares en el otono:' : 'These are the programs we offered this year. Expect similar schedules in the fall:') +
            '</p>';

        // Put banners above the grid, cards inside the grid
        container.innerHTML = aboveHtml +
            '<div class="programs-cards">' +
            siteData.programs.map(function (prog) {
            return '<div class="program-card">' +
                '<div class="program-card-header">' +
                '<span class="program-icon">' + (prog.icon || '') + '</span>' +
                '<div><h3>' + t(prog.title) + '</h3>' +
                '<p>' + t(prog.subtitle) + '</p></div></div>' +
                '<div class="program-card-body">' +
                '<div class="program-meta">' +
                '<span><span class="program-meta-icon">&#128197;</span> ' + t(prog.schedule) + '</span>' +
                '<span><span class="program-meta-icon">&#128205;</span> ' + t(prog.location) + '</span>' +
                '<span><span class="program-meta-icon">&#127891;</span> ' + t(prog.eligibility) + '</span>' +
                '</div>' +
                '<p class="program-description">' + t(prog.description) + '</p>' +
                '<p class="program-signup">' + t(prog.signup) + '</p>' +
                '</div></div>';
        }).join('') + '</div>';
    }

    // --- Educational Opportunities ---

    function renderOpportunities() {
        var container = document.getElementById('opportunitiesList');
        container.innerHTML = siteData.educationalOpportunities.map(function (opp) {
            var bodyContent = '<p>' + t(opp.content) + '</p>';

            // Schedule and location
            if (opp.schedule || opp.location) {
                bodyContent += '<div class="accordion-meta">';
                if (opp.schedule) bodyContent += '<span>&#128197; ' + t(opp.schedule) + '</span>';
                if (opp.location) bodyContent += '<span>&#128205; ' + t(opp.location) + '</span>';
                bodyContent += '</div>';
            }

            // Highlights
            if (opp.highlights && opp.highlights.length > 0) {
                bodyContent += '<ul class="accordion-highlights">' +
                    opp.highlights.map(function (h) { return '<li>' + t(h) + '</li>'; }).join('') +
                    '</ul>';
            }

            // CTE pathways
            if (opp.pathways) {
                bodyContent += '<ul class="pathways-list">' +
                    opp.pathways.map(function (p) { return '<li>' + t(p) + '</li>'; }).join('') +
                    '</ul>';
            }

            // AVID links
            if (opp.links) {
                bodyContent += '<div class="accordion-links">' +
                    opp.links.map(function (l) {
                        return '<a href="' + l.url + '" target="_blank" rel="noopener" class="btn btn-outline">' + t(l.label) + '</a>';
                    }).join('') + '</div>';
            }

            // Dual enrollment courses
            if (opp.courses) {
                bodyContent += '<div class="dual-courses">' +
                    opp.courses.map(function (c) {
                        return '<div class="dual-course-card">' +
                            '<h4>' + t(c.name) + '</h4>' +
                            '<p>&#128197; ' + c.dates + '</p>' +
                            '<p>&#127891; ' + (currentLang === 'es' ? 'Grados' : 'Grades') + ' ' + c.grades + '</p>' +
                            '<p>&#9989; ' + t(c.satisfies) + '</p>' +
                            '<p>&#128187; ' + t(c.format) + '</p>' +
                            '</div>';
                    }).join('') + '</div>';

                if (opp.coursesNote) {
                    bodyContent += '<p style="margin-top:12px;font-size:0.85rem;font-style:italic;">' + t(opp.coursesNote) + '</p>';
                }

                // Registration steps
                if (opp.registrationSteps) {
                    bodyContent += '<h4 style="margin-top:16px;font-size:0.9rem;">' +
                        (currentLang === 'es' ? 'Pasos de Registro' : 'Registration Steps') + '</h4>' +
                        '<ol class="registration-steps">' +
                        opp.registrationSteps.map(function (s) { return '<li>' + t(s) + '</li>'; }).join('') +
                        '</ol>';
                }

                // Counselor contact
                if (opp.counselorContact) {
                    bodyContent += '<p style="margin-top:12px;font-size:0.85rem;">' +
                        t(opp.counselorContact.role) + ': <strong>' + opp.counselorContact.name + '</strong> — ' +
                        '<a href="mailto:' + opp.counselorContact.email + '">' + opp.counselorContact.email + '</a></p>';
                }
            }

            // Articulated courses (standalone, for the articulation accordion item)
            if (opp.articulatedCourses) {
                bodyContent += '<p style="margin-top:12px;font-size:0.85rem;font-weight:600;">' + t(opp.articulatedNote) + '</p>' +
                    '<ul class="articulated-list">' +
                    opp.articulatedCourses.map(function (c) { return '<li>' + c + '</li>'; }).join('') +
                    '</ul>';

                if (opp.articulationNote2) {
                    bodyContent += '<p style="margin-top:12px;font-size:0.85rem;font-style:italic;">' + t(opp.articulationNote2) + '</p>';
                }
            }

            // Mental health link
            if (opp.link) {
                bodyContent += '<a href="' + opp.link + '" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:8px;">' +
                    (currentLang === 'es' ? 'Visitar el Centro' : 'Visit the Hub') + '</a>';
            }

            return '<div class="accordion-item">' +
                '<button class="accordion-header" aria-expanded="false">' +
                '<span>' + t(opp.title) + '</span>' +
                '<span class="accordion-chevron">&#9660;</span>' +
                '</button>' +
                '<div class="accordion-body">' +
                '<div class="accordion-body-inner">' + bodyContent + '</div>' +
                '</div></div>';
        }).join('');

        // Attach accordion event listeners
        setupAccordions();
    }

    // --- Motivation ---

    function renderMotivation() {
        var m = siteData.weeklyMotivation;
        var container = document.getElementById('motivationContent');

        container.innerHTML =
            '<p class="motivation-intro">' + t(m.intro) + '</p>' +
            '<p class="motivation-attribution"><a href="https://jamesclear.com/3-2-1" target="_blank" rel="noopener">' + t(m.attribution) + '</a></p>' +
            '<div class="motivation-section">' +
            '<div class="motivation-label">' + t(m.thought.label) + '</div>' +
            '<div class="motivation-thought">' + t(m.thought.text) + '</div></div>' +
            '<div class="motivation-section">' +
            '<div class="motivation-label">' + t(m.quote.label) + '</div>' +
            '<div class="motivation-quote-text">"' + t(m.quote.text) + '"</div>' +
            '<div class="motivation-quote-author">' + m.quote.author + (m.quote.source ? ', <em>' + m.quote.source + '</em>' : '') + '</div></div>' +
            '<div class="motivation-section">' +
            '<div class="motivation-label">' + t(m.question.label) + '</div>' +
            '<div class="motivation-question-text">' + t(m.question.text) + '</div></div>';
    }

    // --- Contact & Footer ---

    function renderContact() {
        var container = document.getElementById('contactList');
        container.innerHTML = siteData.contacts.map(function (c) {
            return '<div class="contact-card">' +
                '<h3>' + c.name + '</h3>' +
                '<p>&#9993; <a href="mailto:' + c.email + '">' + c.email + '</a></p>' +
                '<p>&#128222; <a href="tel:' + c.phone.replace(/\./g, '') + '">' + c.phone + '</a></p>' +
                '<p>&#128336; ' + t(c.hours) + '</p></div>';
        }).join('');

        document.getElementById('footerAddress').textContent = siteData.school.address;
        var psLink = document.getElementById('parentSquareLink');
        psLink.href = siteData.school.parentSquareUrl;

        var footerLogo = document.getElementById('footerLogo');
        footerLogo.src = siteData.school.logoWhite;
        footerLogo.alt = siteData.school.name;

        document.getElementById('footerYear').textContent = new Date().getFullYear();
        document.getElementById('footerSchoolName').textContent = siteData.school.name;
    }

    // --- Section Headings ---

    function renderSectionHeadings() {
        var headings = document.querySelectorAll('[data-heading]');
        headings.forEach(function (el) {
            var key = el.getAttribute('data-heading');
            if (siteData.sectionHeadings[key]) {
                el.textContent = t(siteData.sectionHeadings[key]);
            }
        });
    }

    // --- Language Toggle ---

    function updateLangButton() {
        var btn = document.getElementById('langToggle');
        btn.querySelector('.lang-label').textContent = currentLang === 'en' ? 'ES' : 'EN';
    }

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        localStorage.setItem('noticeboard-lang', currentLang);
        renderAll();
    }

    // --- Accordion ---

    function setupAccordions() {
        var headers = document.querySelectorAll('.accordion-header');
        headers.forEach(function (header) {
            header.addEventListener('click', function () {
                var body = this.nextElementSibling;
                var isOpen = this.classList.contains('active');

                // Close all others
                document.querySelectorAll('.accordion-header.active').forEach(function (h) {
                    h.classList.remove('active');
                    h.setAttribute('aria-expanded', 'false');
                    h.nextElementSibling.style.maxHeight = null;
                });

                if (!isOpen) {
                    this.classList.add('active');
                    this.setAttribute('aria-expanded', 'true');
                    body.style.maxHeight = body.scrollHeight + 'px';
                }
            });
        });
    }

    // --- Hamburger Menu ---

    function setupHamburger() {
        var btn = document.getElementById('hamburger');
        var nav = document.getElementById('mainNav');

        btn.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('open');
            btn.classList.toggle('active');
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when clicking a nav link
        nav.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                nav.classList.remove('open');
                btn.classList.remove('active');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- Init ---

    document.addEventListener('DOMContentLoaded', function () {
        setupHamburger();
        document.getElementById('langToggle').addEventListener('click', toggleLanguage);
        loadData();
    });
})();
