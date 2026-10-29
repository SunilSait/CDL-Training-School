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
    <linearGradient id="rmLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FB923C"/>
      <stop offset="45%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#C2410C"/>
    </linearGradient>
    <linearGradient id="rmGlassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>
  <!-- Base Squircle Badge -->
  <rect width="100" height="100" rx="22" fill="url(#rmLogoGrad)"/>
  <rect x="1.5" y="1.5" width="97" height="97" rx="20.5" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.3"/>

  <!-- DOT Roof Clearance Lights (Class 8 Signature) -->
  <circle cx="38" cy="16.5" r="2.2" fill="#FEF08A"/>
  <circle cx="44" cy="15.5" r="2.2" fill="#FEF08A"/>
  <circle cx="50" cy="15" r="2.5" fill="#FEF08A"/>
  <circle cx="56" cy="15.5" r="2.2" fill="#FEF08A"/>
  <circle cx="62" cy="16.5" r="2.2" fill="#FEF08A"/>

  <!-- Aerodynamic Cab Roof Fairing -->
  <path d="M31 23 C40 19 60 19 69 23 L73 31 L27 31 Z" fill="#FFFFFF"/>

  <!-- Windshield with Sunvisor Cap -->
  <path d="M28 33 L72 33 L68 47 C58 48 42 48 32 47 Z" fill="url(#rmGlassGrad)"/>
  <!-- Specular Reflection on Windshield -->
  <path d="M33 35 L40 35 L35 45 L30 45 Z" fill="#FFFFFF" fill-opacity="0.35"/>

  <!-- Truck Hood & Cab Body -->
  <path d="M23 49 L77 49 L75 74 C75 76 73 78 71 78 L29 78 C27 78 25 76 25 74 Z" fill="#FFFFFF"/>

  <!-- Heavy Duty Commercial Grille -->
  <rect x="35" y="51" width="30" height="23" rx="3.5" fill="#0F172A"/>
  <path d="M39 55 H61 M39 60 H61 M39 65 H61 M41 70 H59" stroke="#EA580C" stroke-width="2" stroke-linecap="round"/>

  <!-- Dual Safety Projector Headlights -->
  <rect x="26.5" y="55" width="6" height="12" rx="2" fill="#FEF08A"/>
  <rect x="67.5" y="55" width="6" height="12" rx="2" fill="#FEF08A"/>

  <!-- Heavy Duty Bumper -->
  <path d="M19 76 L81 76 L78 84 C78 86 76 87.5 74 87.5 L26 87.5 C24 87.5 22 86 22 84 Z" fill="#E2E8F0"/>
  <rect x="37" y="79" width="26" height="4.5" rx="2" fill="#0F172A"/>
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
                    <a href="home2.html">Home 2 — Premium</a>
                    <a href="programs.html">Programs</a>
                    <a href="instructors.html">Instructors</a>
                    <a href="job-placement.html">Job Placement</a>
                    <a href="contact.html">Contact Us</a>
                </div>

                <div class="footer-col">
                    <h4>Resources</h4>
                    <a href="dashboard.html">Dashboard</a>
                    <a href="coming-soon.html">Coming Soon</a>
                    <a href="404.html">404 Page</a>
                    <a href="login.html">Sign In</a>
                    <a href="signup.html">Sign Up</a>
                </div>

                <div class="footer-col footer-newsletter-col">
                    <div class="footer-newsletter-card">
                        <h4>Stay Updated</h4>
                        <p>Subscribe for CDL training tips, class schedules, and carrier placement updates delivered to your inbox.</p>
                        <form class="footer-newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing to RoadMaster updates!');">
                            <input type="email" class="footer-newsletter-input" placeholder="your@email.com" required aria-label="Email address for newsletter">
                            <button type="submit" class="btn btn-primary footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
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
    window.dispatchEvent(new Event('directionchange'));
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
        iconEl.innerHTML = isPassword ? ICONS.eyeOff : ICONS.eye;
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

/* ---- TESTIMONIALS INTERACTIVE CAROUSEL, FILTERS & 3D TILT ---- */
function initTestimonialsSection() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    const prevBtn = document.getElementById('prevTestiBtn');
    const nextBtn = document.getElementById('nextTestiBtn');
    const paginationContainer = document.getElementById('testiPagination');
    const filterTabs = document.querySelectorAll('.testi-tab');

    let currentIndex = 0;
    let autoPlayTimer = null;
    let isHovered = false;

    // Get number of visible cards based on viewport
    function getVisibleCardsCount() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    // Get list of active cards (not hidden by category filter)
    function getActiveCards() {
        return cards.filter(card => !card.classList.contains('testi-hidden'));
    }

    // Render pagination dots
    function renderPagination() {
        if (!paginationContainer) return;
        const activeCards = getActiveCards();
        const visible = getVisibleCardsCount();
        const maxSlides = Math.max(1, activeCards.length - visible + 1);

        paginationContainer.innerHTML = '';
        for (let i = 0; i < maxSlides; i++) {
            const dot = document.createElement('button');
            dot.className = `testi-dot ${i === currentIndex ? 'active' : ''}`;
            dot.setAttribute('data-index', i);
            dot.setAttribute('aria-label', `Go to testimonial slide ${i + 1}`);
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoPlay();
            });
            paginationContainer.appendChild(dot);
        }
    }

    function updateDots() {
        if (!paginationContainer) return;
        const dots = paginationContainer.querySelectorAll('.testi-dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function goToSlide(index) {
        const activeCards = getActiveCards();
        const visible = getVisibleCardsCount();
        const maxIndex = Math.max(0, activeCards.length - visible);

        if (index > maxIndex) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = maxIndex;
        } else {
            currentIndex = index;
        }

        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        const cardEl = activeCards[0];
        if (cardEl) {
            const cardWidth = cardEl.offsetWidth;
            const gap = 28; // 1.75rem gap
            const offset = currentIndex * (cardWidth + gap);
            track.style.transform = isRTL ? `translateX(${offset}px)` : `translateX(-${offset}px)`;
        } else {
            track.style.transform = 'none';
        }

        updateDots();
    }

    // Prev / Next button listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
            resetAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
            resetAutoPlay();
        });
    }

    // Story Filter Tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filterValue = tab.getAttribute('data-filter');
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('testi-hidden');
                    card.style.opacity = '1';
                } else {
                    card.classList.add('testi-hidden');
                }
            });

            currentIndex = 0;
            renderPagination();
            goToSlide(0);
            resetAutoPlay();
        });
    });

    // Auto Play with Pause on Hover
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(() => {
            if (!isHovered) {
                const activeCards = getActiveCards();
                const visible = getVisibleCardsCount();
                const maxIndex = Math.max(0, activeCards.length - visible);
                if (maxIndex > 0) {
                    goToSlide(currentIndex + 1);
                }
            }
        }, 5500);
    }

    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    const viewport = track.closest('.testimonials-slider-viewport') || track;
    viewport.addEventListener('mouseenter', () => { isHovered = true; });
    viewport.addEventListener('mouseleave', () => { isHovered = false; });

    // Touch / Swipe
    let touchStartX = 0;
    viewport.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        if (Math.abs(diff) > 40) {
            if ((diff > 0 && !isRTL) || (diff < 0 && isRTL)) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(currentIndex - 1);
            }
            resetAutoPlay();
        }
    }, { passive: true });

    // 3D Perspective Tilt on Desktop Mousemove
    if (window.matchMedia('(min-width: 1025px)').matches) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((centerY - y) / centerY) * 4.5;
                const rotateY = ((x - centerX) / centerX) * 4.5;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    window.addEventListener('resize', () => {
        renderPagination();
        goToSlide(currentIndex);
    });

    window.addEventListener('directionchange', () => {
        goToSlide(currentIndex);
    });

    // Initial setup
    renderPagination();
    goToSlide(0);
    startAutoPlay();
}

/* ---- HERO 3-SLIDE CAROUSEL (5s Interval) ---- */
function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.hero-slide'));
    const indicators = Array.from(slider.querySelectorAll('.hero-indicator'));
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');

    if (slides.length === 0) return;

    let currentIndex = 0;
    let timer = null;
    let isHovered = false;
    const SLIDE_DURATION = 5000;

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        slides.forEach((slide, idx) => {
            const isActive = idx === currentIndex;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', !isActive);
        });

        indicators.forEach((ind, idx) => {
            const isActive = idx === currentIndex;
            ind.classList.toggle('active', isActive);
            const fill = ind.querySelector('.hero-indicator-fill');
            if (fill) {
                fill.style.animation = 'none';
                void fill.offsetWidth; // Reflow to restart keyframe
                if (isActive) {
                    fill.style.animation = '';
                }
            }
        });

        // Animate counter values on active slide
        const activeSlide = slides[currentIndex];
        if (activeSlide) {
            const counters = activeSlide.querySelectorAll('[data-count]');
            counters.forEach(el => {
                const target = parseInt(el.getAttribute('data-count'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                const prefix = el.getAttribute('data-prefix') || '';
                if (isNaN(target)) return;
                let current = 0;
                const increment = Math.max(1, Math.ceil(target / 25));
                const counterTimer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(counterTimer);
                    }
                    el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
                }, 24);
            });
        }
    }

    function startTimer() {
        stopTimer();
        timer = setInterval(() => {
            if (!isHovered) {
                goToSlide(currentIndex + 1);
            }
        }, SLIDE_DURATION);
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function resetTimer() {
        stopTimer();
        startTimer();
    }

    // Indicator navigation
    indicators.forEach((ind, idx) => {
        ind.addEventListener('click', () => {
            goToSlide(idx);
            resetTimer();
        });
    });

    // Arrow navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            goToSlide(isRTL ? currentIndex + 1 : currentIndex - 1);
            resetTimer();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            goToSlide(isRTL ? currentIndex - 1 : currentIndex + 1);
            resetTimer();
        });
    }

    // Pause on hover
    slider.addEventListener('mouseenter', () => { isHovered = true; });
    slider.addEventListener('mouseleave', () => { isHovered = false; });

    // Touch swipe
    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        if (Math.abs(diff) > 40) {
            if ((diff > 0 && !isRTL) || (diff < 0 && isRTL)) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(currentIndex - 1);
            }
            resetTimer();
        }
    }, { passive: true });

    // Initial trigger
    goToSlide(0);
    startTimer();
}



/* ---- HOME 2 HERO 3-SLIDE CAROUSEL (5s Interval) ---- */
function initHome2HeroSlider() {
    const slider = document.getElementById('home2HeroSlider');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.hero-2-slide'));
    const indicators = Array.from(slider.querySelectorAll('.hero-indicator'));
    const prevBtn = document.getElementById('home2HeroPrevBtn');
    const nextBtn = document.getElementById('home2HeroNextBtn');

    if (slides.length === 0) return;

    let currentIndex = 0;
    let timer = null;
    let isHovered = false;
    const SLIDE_DURATION = 5000;

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        slides.forEach((slide, idx) => {
            const isActive = idx === currentIndex;
            slide.classList.toggle('active', isActive);
            slide.setAttribute('aria-hidden', !isActive);
        });

        indicators.forEach((ind, idx) => {
            const isActive = idx === currentIndex;
            ind.classList.toggle('active', isActive);
            ind.setAttribute('aria-selected', isActive ? 'true' : 'false');
            const fill = ind.querySelector('.hero-indicator-fill');
            if (fill) {
                fill.style.animation = 'none';
                void fill.offsetWidth; // Reflow
                if (isActive) {
                    fill.style.animation = '';
                }
            }
        });
    }

    function startTimer() {
        stopTimer();
        timer = setInterval(() => {
            if (!isHovered) {
                goToSlide(currentIndex + 1);
            }
        }, SLIDE_DURATION);
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function resetTimer() {
        stopTimer();
        startTimer();
    }

    // Indicator navigation
    indicators.forEach((ind, idx) => {
        ind.addEventListener('click', () => {
            goToSlide(idx);
            resetTimer();
        });
    });

    // Arrow navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            goToSlide(isRTL ? currentIndex + 1 : currentIndex - 1);
            resetTimer();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            goToSlide(isRTL ? currentIndex - 1 : currentIndex + 1);
            resetTimer();
        });
    }

    // Pause on hover
    slider.addEventListener('mouseenter', () => { isHovered = true; });
    slider.addEventListener('mouseleave', () => { isHovered = false; });

    // Touch swipe
    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        if (Math.abs(diff) > 40) {
            if ((diff > 0 && !isRTL) || (diff < 0 && isRTL)) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(currentIndex - 1);
            }
            resetTimer();
        }
    }, { passive: true });

    // Initial trigger
    goToSlide(0);
    startTimer();
}

/* ---- HOME 2 HERO FAST-TRACK CDL SELECTOR ---- */
function initHome2HeroSwitcher() {
    var btnA = document.getElementById('btnTrackClassA');
    var btnB = document.getElementById('btnTrackClassB');
    if (!btnA || !btnB) return;

    btnA.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.setHeroTrack) window.setHeroTrack('A');
    });

    btnB.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.setHeroTrack) window.setHeroTrack('B');
    });
}

/* ---- DOMContentLoaded ---- */
document.addEventListener('DOMContentLoaded', function() {
    const page = getCurrentPage();
    const authPages = ['login.html', 'signup.html', '404.html', 'coming-soon.html'];
    const isDashboard = page === 'dashboard.html' || page.startsWith('dashboard') || !!document.querySelector('.dash-layout');

    if (!authPages.includes(page) && !isDashboard) {
        renderNavbar();
        renderFooter();
    }

    initScrollAnimations();
    animateCounters();
    initTestimonialsSection();
    initHeroSlider();
    initHome2HeroSlider();
    initHome2HeroSwitcher();
});

