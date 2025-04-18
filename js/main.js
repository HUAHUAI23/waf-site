// Initialize AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with custom settings
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 50
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Active nav item on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    });

    // Add 3D tilt effect to hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.addEventListener('mousemove', function(e) {
            const heroCard = this.querySelector('img');
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xc = (x - rect.width / 2) / (rect.width / 2);
            const yc = (y - rect.height / 2) / (rect.height / 2);
            
            heroCard.style.transform = `perspective(1000px) rotateY(${xc * 5}deg) rotateX(${-yc * 5}deg)`;
        });
        
        heroImage.addEventListener('mouseleave', function() {
            const heroCard = this.querySelector('img');
            heroCard.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg)';
        });
    }

    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            featureCards.forEach(c => {
                if (c !== this) {
                    c.style.opacity = '0.7';
                    c.style.transform = 'scale(0.98)';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            featureCards.forEach(c => {
                c.style.opacity = '1';
                c.style.transform = 'scale(1)';
            });
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const nameInput = this.querySelector('input[type=text]');
            const emailInput = this.querySelector('input[type=email]');
            const messageInput = this.querySelector('textarea');
            
            if (nameInput.value && emailInput.value && messageInput.value) {
                // Simulate form submission
                const submitButton = this.querySelector('button[type=submit]');
                const originalText = submitButton.textContent;
                
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                // Simulate API call (replace with actual API call in production)
                setTimeout(() => {
                    submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    this.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.textContent = originalText;
                    }, 3000);
                }, 1500);
            }
        });
    }

    // Add particles background effect to the hero section
    function createParticles() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.position = 'absolute';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.overflow = 'hidden';
        particlesContainer.style.zIndex = '0';
        
        heroSection.prepend(particlesContainer);
        
        const particleCount = window.innerWidth < 768 ? 20 : 40;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            
            // Random size between 3 and 8 pixels
            const size = Math.random() * 5 + 3;
            
            particle.style.position = 'absolute';
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            
            // Random animation duration between 10 and 20 seconds
            const duration = Math.random() * 10 + 10;
            
            particle.style.animation = `floatParticle ${duration}s linear infinite`;
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Create and append styles for the floating animation
            const styleElement = document.createElement('style');
            styleElement.textContent = `
                @keyframes floatParticle {
                    0% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                    25% {
                        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg);
                    }
                    50% {
                        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg);
                    }
                    75% {
                        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg);
                    }
                    100% {
                        transform: translate(0, 0) rotate(360deg);
                    }
                }
            `;
            
            document.head.appendChild(styleElement);
            particlesContainer.appendChild(particle);
        }
    }
    
    // Initialize particles
    createParticles();
});

// Simulate loading for the demo section
document.addEventListener('DOMContentLoaded', function() {
    const demoImage = document.querySelector('.demo-image img');
    
    if (demoImage) {
        // Create and add loading overlay
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'loading-overlay';
        loadingOverlay.style.position = 'absolute';
        loadingOverlay.style.top = '0';
        loadingOverlay.style.left = '0';
        loadingOverlay.style.width = '100%';
        loadingOverlay.style.height = '100%';
        loadingOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        loadingOverlay.style.display = 'flex';
        loadingOverlay.style.alignItems = 'center';
        loadingOverlay.style.justifyContent = 'center';
        loadingOverlay.style.zIndex = '2';
        loadingOverlay.style.borderRadius = '8px';
        loadingOverlay.style.backdropFilter = 'blur(3px)';
        loadingOverlay.style.opacity = '1';
        loadingOverlay.style.transition = 'opacity 0.5s ease';
        
        const spinner = document.createElement('div');
        spinner.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: white;"></i>';
        
        loadingOverlay.appendChild(spinner);
        demoImage.parentNode.appendChild(loadingOverlay);
        
        // Simulate loading time
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.remove();
            }, 500);
        }, 1500);
    }
});

// Preload images
window.addEventListener('load', function() {
    const preloadImages = document.querySelectorAll('img');
    preloadImages.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const newImg = new Image();
            newImg.src = src;
        }
    });
}); 