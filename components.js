/* ===================================================
   ROADMASTER CDL — COMPONENTS.JS
   Shared navbar, footer, dark/RTL toggles, utilities
   =================================================== */

/* Immediate Theme & Direction Initialization */
(function() {
    try {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        if (!window.location.hash) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            if (document.documentElement) document.documentElement.scrollTop = 0;
            if (document.body) document.body.scrollTop = 0;
        }
        window.addEventListener('pageshow', function() {
            if (!window.location.hash) {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                if (document.documentElement) document.documentElement.scrollTop = 0;
                if (document.body) document.body.scrollTop = 0;
            }
        });

        const savedDark = localStorage.getItem('cdl-dark');
        if (savedDark === '1') {
            document.documentElement.classList.add('dark');
        } else if (savedDark === '0') {
            document.documentElement.classList.remove('dark');
        }
        const savedDir = localStorage.getItem('cdl-rtl');
        if (savedDir === '1') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else if (savedDir === '0') {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    } catch (e) {}
})();

/* ---- LOGO SVG ---- */
const LOGO_SVG = `<svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F2A4A"/>
      <stop offset="100%" stop-color="#1A3D6D"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="18" fill="url(#logoBg)"/>
  <path d="M20 62 L20 48 Q20 38 30 38 L70 38 Q80 38 80 48 L80 62 Z" fill="none" stroke="#D97706" stroke-width="4"/>
  <circle cx="32" cy="66" r="8" fill="none" stroke="#D97706" stroke-width="3.5"/>
  <circle cx="68" cy="66" r="8" fill="none" stroke="#D97706" stroke-width="3.5"/>
  <rect x="24" y="44" width="16" height="10" rx="2" fill="none" stroke="white" stroke-width="2.5" opacity="0.8"/>
  <path d="M44 44 L56 44 L60 54 L44 54 Z" fill="none" stroke="white" stroke-width="2.5" opacity="0.8"/>
  <path d="M25 34 L75 34" stroke="#D97706" stroke-width="2" stroke-dasharray="4 3" opacity="0.5"/>
</svg>`;

/* ---- Icon Helper ---- */
const ICONS = {
    sun: '<i class="fas fa-sun"></i>',
    moon: '<i class="fas fa-moon"></i>',
    menu: '<i class="fas fa-bars"></i>',
    x: '<i class="fas fa-xmark"></i>',
    chevronDown: '<i class="fas fa-chevron-down"></i>',
    facebook: '<i class="fab fa-facebook-f"></i>',
    instagram: '<i class="fab fa-instagram"></i>',
    linkedin: '<i class="fab fa-linkedin-in"></i>',
    twitter: '<i class="fab fa-x-twitter"></i>',
    eye: '<i class="fas fa-eye"></i>',
    eyeOff: '<i class="fas fa-eye-slash"></i>',
};

/* ---- Social SVGs (for OAuth) ---- */
const GOOGLE_SVG = `<svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.9 33.5 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.7-.4-3.9z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.5 18.8 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.8-3.5-11.3-8.3l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.2-2.7-.4-3.9z"/></svg>`;
const APPLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.96 4.41-3.74 4.25z"/></svg>`;
const FACEBOOK_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`;

/* ---- CURRENT PAGE ---- */
function getCurrentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path;
}

/* ---- NAVBAR ---- */
function renderNavbar() {
    const page = getCurrentPage();
    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'programs.html', label: 'Programs' },
        { href: 'instructors.html', label: 'Instructors' },
        { href: 'job-placement.html', label: 'Job Placement' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHtml = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const mobLinksHtml = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const html = `
    <nav class="navbar" id="navbar">
        <div class="nav-inner">
            <a href="index.html" class="nav-logo" aria-label="RoadMaster CDL Home">
                ${LOGO_SVG}
                <div class="nav-logo-text">
                    <span class="brand-top">CDL Training</span>
                    <span class="brand-bottom">RoadMaster</span>
                </div>
            </a>

            <div class="nav-links">
                ${navLinksHtml}
            </div>

            <div class="nav-actions">
                <button onclick="toggleDir()" class="nav-icon-btn" id="rtlToggleNav" aria-label="Toggle layout direction / RTL" title="Toggle RTL">
                    <span class="dir-indicator dir-label" style="font-size:0.625rem;font-weight:700;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <button onclick="toggleTheme()" class="nav-icon-btn" id="darkToggleNav" aria-label="Toggle dark mode" title="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <a href="login.html" class="btn btn-primary btn-sm nav-cta-btn">Sign In</a>
                <a href="dashboard.html" class="btn-nav-dashboard ${page === 'dashboard.html' ? 'active' : ''}">Dashboard</a>
                <button class="mobile-menu-btn" id="mobileMenuBtn" onclick="toggleMobileMenu(event)" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>

        <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

        <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            ${mobLinksHtml}
            <div class="mob-actions">
                <a href="login.html" class="btn btn-primary w-full">Sign In</a>
                <a href="dashboard.html" class="btn btn-secondary w-full">Dashboard</a>
            </div>
            <div class="mob-toggles">
                <button onclick="toggleDir()" class="nav-icon-btn" id="rtlToggleMob" aria-label="Toggle layout direction / RTL" title="Toggle Direction">
                    <span class="dir-indicator dir-label" style="font-size:0.625rem;font-weight:700;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <button onclick="toggleTheme()" class="nav-icon-btn" id="darkToggleMob" aria-label="Toggle dark mode" title="Toggle Theme">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
            </div>
        </div>
    </nav>
    <div class="navbar-spacer"></div>`;

    const container = document.getElementById('navbar-placeholder') || document.getElementById('main-nav');
    if (container) container.innerHTML = html;
    else document.body.insertAdjacentHTML('afterbegin', html);

    initNavbar();
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.getElementById('mobileMenuBtn') || document.querySelector('.mobile-menu-btn');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (!menu) return;

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        if (iconEl) iconEl.innerHTML = ICONS.x;
    }
}
window.toggleMobileMenu = toggleMobileMenu;

function initNavbar() {
    const nav = document.getElementById('navbar') || document.getElementById('mainNavbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 15);
        }, { passive: true });
    }

    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.getElementById('mobileMenuBtn') || document.querySelector('.mobile-menu-btn');

    if (menu) {
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', (e) => {
                const href = a.getAttribute('href');
                const currentPage = getCurrentPage();
                if (href) {
                    const targetPage = href.split('#')[0].split('?')[0];
                    if ((targetPage === currentPage || (targetPage === 'index.html' && (currentPage === '' || currentPage === 'index.html'))) && !href.includes('#')) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }
                }
                menu.classList.remove('open');
                if (backdrop) backdrop.classList.remove('open');
                const iconEl = document.querySelector('.mobile-menu-icon');
                if (iconEl) iconEl.innerHTML = ICONS.menu;
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            const currentPage = getCurrentPage();
            if (href) {
                const targetPage = href.split('#')[0].split('?')[0];
                if ((targetPage === currentPage || (targetPage === 'index.html' && (currentPage === '' || currentPage === 'index.html'))) && !href.includes('#')) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (!menu || !menu.classList.contains('open')) return;
        if (btn && (btn === e.target || btn.contains(e.target))) return;
        if (menu.contains(e.target)) return;
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        const iconEl = document.querySelector('.mobile-menu-icon');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
        if (btn) btn.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            const iconEl = document.querySelector('.mobile-menu-icon');
            if (iconEl) iconEl.innerHTML = ICONS.menu;
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            const iconEl = document.querySelector('.mobile-menu-icon');
            if (iconEl) iconEl.innerHTML = ICONS.menu;
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
    }, { passive: true });

    updateDarkIcons();
    updateRTLIndicators();
}

/* ---- FOOTER ---- */
function renderFooter() {
    const html = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo footer-logo" aria-label="RoadMaster CDL Home">
                        ${LOGO_SVG}
                        <div class="nav-logo-text">
                            <span class="brand-top">CDL Training</span>
                            <span class="brand-bottom">RoadMaster</span>
                        </div>
                    </a>
                    <p class="footer-desc">Your trusted partner in Commercial Driver's License training. We prepare aspiring drivers for rewarding careers on the road with hands-on instruction and industry-leading job placement.</p>
                    <div class="footer-social">
                        <a href="#" aria-label="Facebook">${ICONS.facebook}</a>
                        <a href="#" aria-label="Instagram">${ICONS.instagram}</a>
                        <a href="#" aria-label="LinkedIn">${ICONS.linkedin}</a>
                        <a href="#" aria-label="Twitter">${ICONS.twitter}</a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <a href="index.html">Home</a>
                    <a href="programs.html">Programs</a>
                    <a href="instructors.html">Instructors</a>
                    <a href="job-placement.html">Job Placement</a>
                    <a href="contact.html">Contact</a>
                </div>

                <div class="footer-col">
                    <h4>Programs</h4>
                    <a href="programs.html">Class A CDL</a>
                    <a href="programs.html">Class B CDL</a>
                    <a href="programs.html">HazMat Endorsement</a>
                    <a href="programs.html">Passenger Endorsement</a>
                    <a href="programs.html">Refresher Courses</a>
                </div>

                <div class="footer-col">
                    <h4>Resources</h4>
                    <a href="login.html">Student Portal</a>
                    <a href="dashboard.html">Dashboard</a>
                    <a href="coming-soon.html">Blog</a>
                    <a href="coming-soon.html">FAQ</a>
                    <a href="coming-soon.html">Careers</a>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} RoadMaster CDL Training. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="coming-soon.html">Privacy Policy</a>
                    <a href="coming-soon.html">Terms of Service</a>
                    <a href="404.html">404 Page</a>
                    <a href="coming-soon.html">Coming Soon</a>
                </div>
            </div>
        </div>
    </footer>`;

    const container = document.getElementById('footer-placeholder');
    if (container) container.innerHTML = html;
    else document.body.insertAdjacentHTML('beforeend', html);
}

/* ---- DARK MODE ---- */
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    try { localStorage.setItem('cdl-dark', isDark ? '1' : '0'); } catch(e) {}
    updateDarkIcons();
}
window.toggleTheme = toggleTheme;

function toggleDark() { toggleTheme(); }

function updateDarkIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon-wrap').forEach(el => {
        el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    });
}

/* ---- RTL ---- */
function toggleDir() {
    const html = document.documentElement;
    const currentDir = html.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    html.setAttribute('dir', newDir);
    try { localStorage.setItem('cdl-rtl', newDir === 'rtl' ? '1' : '0'); } catch(e) {}
    updateRTLIndicators();
}
window.toggleDir = toggleDir;

function toggleRTL() { toggleDir(); }

function updateRTLIndicators() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    document.querySelectorAll('.dir-indicator, .dir-label').forEach(el => {
        el.textContent = isRTL ? 'RTL' : 'LTR';
    });
}

/* ---- PASSWORD TOGGLE ---- */
function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    const iconEl = btn.querySelector('.pw-icon');
    if (iconEl) {
        iconEl.innerHTML = isPassword
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    }
}
window.togglePasswordVisibility = togglePasswordVisibility;

/* ---- AUTH PAGE INIT ---- */
function initAuthPage() {
    updateDarkIcons();
    updateRTLIndicators();
}

/* ---- SCROLL ANIMATION ---- */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right').forEach(el => {
        observer.observe(el);
    });
}

/* ---- COUNTER ANIMATION ---- */
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                const suffix = el.getAttribute('data-suffix') || '';
                const prefix = el.getAttribute('data-prefix') || '';
                let current = 0;
                const increment = target / 60;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
                }, 16);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.3 });
    counters.forEach(c => observer.observe(c));
}

/* ---- DOMContentLoaded ---- */
document.addEventListener('DOMContentLoaded', function() {
    const page = getCurrentPage();
    const authPages = ['login.html', 'signup.html', '404.html', 'coming-soon.html'];
    const isDashboard = page === 'dashboard.html';

    if (!authPages.includes(page) && !isDashboard) {
        renderNavbar();
        renderFooter();
    }

    initScrollAnimations();
    animateCounters();
});
