// Toggle Mobile Menu
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Download Functions
function downloadYoucefTV() {
    window.open('https://example.com/youceftv.apk', '_blank');
}

function downloadYPlayer() {
    window.open('https://example.com/yplayer.apk', '_blank');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.remove('active');
        });
    });

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('شكراً لك! تم الاشتراك بنجاح في النشرة الإخبارية.');
                this.querySelector('input[type="email"]').value = '';
            }
        });
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.feature-item, .screenshot-item, .info-card, .features-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Floating animation for hero logo
document.addEventListener('DOMContentLoaded', function() {
    const heroLogo = document.querySelector('.hero-logo');
    if (heroLogo) {
        setInterval(() => {
            heroLogo.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                heroLogo.style.transform = 'translateY(0)';
            }, 1500);
        }, 3000);
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
