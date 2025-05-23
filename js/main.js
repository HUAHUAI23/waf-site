// Initialize AOS (Animate On Scroll) library
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS with custom settings
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 50
    })

    // Initialize scroll reveal animations
    initScrollReveal()

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar')
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled')
        } else {
            navbar.classList.remove('scrolled')
        }
    })

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top')
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active')
        } else {
            backToTopButton.classList.remove('active')
        }
    })

    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    // Unified button click handling (simplified to avoid conflicts)
    const buttons = document.querySelectorAll('.btn-primary, .btn-outline-light, a[href^="#"]')

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Create ripple effect
            if (this.classList.contains('btn-primary') || this.classList.contains('btn-outline-light')) {
                const rect = this.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top

                this.style.setProperty('--x', `${x}px`)
                this.style.setProperty('--y', `${y}px`)
            }

            // If this is an anchor with # link, handle smooth scrolling
            if (this.getAttribute('href') && this.getAttribute('href').startsWith('#') && this.getAttribute('href') !== '#') {
                e.preventDefault()

                const targetId = this.getAttribute('href')
                const targetElement = document.querySelector(targetId)

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    })
                }
            }
        })
    })

    // Active nav item on scroll
    const sections = document.querySelectorAll('section[id]')
    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight
            const sectionTop = section.offsetTop - 100
            const sectionId = section.getAttribute('id')

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active')
            } else {
                document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active')
            }
        })
    })

    // Add 3D tilt effect to hero image
    const heroImage = document.querySelector('.hero-image')
    if (heroImage) {
        heroImage.addEventListener('mousemove', function (e) {
            const heroCards = this.querySelectorAll('img')
            const rect = this.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const xc = (x - rect.width / 2) / (rect.width / 2)
            const yc = (y - rect.height / 2) / (rect.height / 2)

            heroCards.forEach(card => {
                card.style.transform = `perspective(1000px) rotateY(${xc * 5}deg) rotateX(${-yc * 5}deg)`
            })
        })

        heroImage.addEventListener('mouseleave', function () {
            const heroCards = this.querySelectorAll('img')
            heroCards.forEach(card => {
                card.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg)'
            })
        })
    }

    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card')
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            featureCards.forEach(c => {
                if (c !== this) {
                    c.style.opacity = '0.7'
                    c.style.transform = 'scale(0.98)'
                }
            })
        })

        card.addEventListener('mouseleave', function () {
            featureCards.forEach(c => {
                c.style.opacity = '1'
                c.style.transform = 'scale(1)'
            })
        })
    })

    // Form submission handling
    const contactForm = document.querySelector('.contact-form')
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault()

            // Simple form validation
            const nameInput = this.querySelector('input[type=text]')
            const emailInput = this.querySelector('input[type=email]')
            const messageInput = this.querySelector('textarea')

            if (nameInput.value && emailInput.value && messageInput.value) {
                // Simulate form submission
                const submitButton = this.querySelector('button[type=submit]')
                const originalText = submitButton.textContent

                submitButton.disabled = true
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'

                // Simulate API call (replace with actual API call in production)
                setTimeout(() => {
                    submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
                    this.reset()

                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitButton.disabled = false
                        submitButton.textContent = originalText
                    }, 3000)
                }, 1500)
            }
        })
    }

    // Add modern square animations to Hero section
    function createSquareAnimations() {
        const heroSection = document.querySelector('.hero-section')
        if (!heroSection) return

        // Create container for squares if it doesn't exist
        let squaresContainer = document.querySelector('.squares-container')
        if (!squaresContainer) {
            squaresContainer = document.createElement('div')
            squaresContainer.className = 'squares-container'
            squaresContainer.style.position = 'absolute'
            squaresContainer.style.top = '0'
            squaresContainer.style.left = '0'
            squaresContainer.style.width = '100%'
            squaresContainer.style.height = '100%'
            squaresContainer.style.overflow = 'hidden'
            squaresContainer.style.pointerEvents = 'none' // Ensure it doesn't block clicks
            squaresContainer.style.zIndex = '0'
            heroSection.prepend(squaresContainer)
        }

        // Number of squares based on screen size
        const squareCount = window.innerWidth < 768 ? 15 : 30

        // Create squares with random properties
        for (let i = 0; i < squareCount; i++) {
            const square = document.createElement('div')

            // Random size category
            const sizeClass = Math.random() < 0.33 ? 'small' : Math.random() < 0.66 ? 'medium' : 'large'
            square.className = `square-animation ${sizeClass}`

            // Random starting position
            square.style.left = `${Math.random() * 100}%`
            square.style.top = `${Math.random() * 100}%`

            // Random rotation
            square.style.transform = `rotate(${Math.random() * 360}deg)`

            // Random animation duration between 15 and 30 seconds
            const duration = Math.random() * 15 + 15
            square.style.animationDuration = `${duration}s`

            // Random animation delay
            const delay = Math.random() * 10
            square.style.animationDelay = `${delay}s`

            // Random transparency
            square.style.opacity = (Math.random() * 0.3 + 0.1).toString()

            // 50% chance of being a square or rectangle
            if (Math.random() > 0.5) {
                square.style.width = `${parseInt(square.style.width) * (Math.random() * 1.5 + 0.5)}px`
            }

            // Add some rotation to the animation
            square.style.animationTimingFunction = 'linear'
            square.style.pointerEvents = 'none' // Ensure it doesn't block clicks

            // 30% chance of having a border
            if (Math.random() < 0.3) {
                square.style.border = '1px solid rgba(255, 255, 255, 0.3)'
                square.style.backgroundColor = 'transparent'
            } else if (Math.random() < 0.5) {
                // 20% chance of having a gradient background
                const hue = Math.floor(Math.random() * 30) + 240 // Purple-ish hues
                square.style.backgroundColor = `hsla(${hue}, 70%, 60%, 0.2)`
            }

            squaresContainer.appendChild(square)
        }
    }

    // Initialize square animations
    createSquareAnimations()

    // Re-create square animations on window resize
    window.addEventListener('resize', function () {
        const squaresContainer = document.querySelector('.squares-container')
        if (squaresContainer) {
            squaresContainer.innerHTML = ''
            createSquareAnimations()
        }
    })

    // Add particles background effect to the hero section
    function createParticles() {
        const heroSection = document.querySelector('.hero-section')
        if (!heroSection) return

        const particlesContainer = document.createElement('div')
        particlesContainer.className = 'particles-container'
        particlesContainer.style.position = 'absolute'
        particlesContainer.style.top = '0'
        particlesContainer.style.left = '0'
        particlesContainer.style.width = '100%'
        particlesContainer.style.height = '100%'
        particlesContainer.style.overflow = 'hidden'
        particlesContainer.style.zIndex = '0'
        particlesContainer.style.pointerEvents = 'none' // Ensure it doesn't block clicks

        heroSection.prepend(particlesContainer)

        const particleCount = window.innerWidth < 768 ? 20 : 40

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div')

            // Random size between 3 and 8 pixels
            const size = Math.random() * 5 + 3

            particle.style.position = 'absolute'
            particle.style.width = `${size}px`
            particle.style.height = `${size}px`
            particle.style.borderRadius = '50%'
            particle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
            particle.style.top = `${Math.random() * 100}%`
            particle.style.left = `${Math.random() * 100}%`
            particle.style.pointerEvents = 'none' // Ensure it doesn't block clicks

            // Random animation duration between 10 and 20 seconds
            const duration = Math.random() * 10 + 10

            particle.style.animation = `floatParticle ${duration}s linear infinite`
            particle.style.opacity = Math.random() * 0.5 + 0.1

            // Create and append styles for the floating animation
            const styleElement = document.createElement('style')
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
            `

            document.head.appendChild(styleElement)
            particlesContainer.appendChild(particle)
        }
    }

    // Initialize particles
    createParticles()

    // Enhanced contact section interactivity
    const contactIcons = document.querySelectorAll('.contact-icon')
    if (contactIcons) {
        contactIcons.forEach(icon => {
            // Add bounce animation
            icon.style.animation = `iconBounce ${3 + Math.random()}s infinite`

            // Add click handler
            icon.addEventListener('click', function () {
                // Find the nearest link or handle specific actions
                const container = this.closest('.d-flex')
                if (container) {
                    if (this.querySelector('.fa-map-marker-alt')) {
                        window.open('https://maps.google.com/?q=Jiujiang University, 551 Qianjin East Road', '_blank')
                    } else if (this.querySelector('.fa-phone-alt')) {
                        window.location.href = 'tel:+8618679200828'
                    } else if (this.querySelector('.fa-envelope')) {
                        window.open('https://github.com/HUAHUAI23/RuiQi', '_blank')
                    }
                }
            })
        })
    }

    // Add ripple effect to the contact form button
    const contactButton = document.querySelector('.contact-form button')
    if (contactButton) {
        contactButton.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            this.style.setProperty('--x', `${x}px`)
            this.style.setProperty('--y', `${y}px`)
        })
    }

    // Auto-close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn')
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const navbarCollapse = document.querySelector('.navbar-collapse.show')
            if (navbarCollapse) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse)
                bsCollapse.hide()
            }
        })
    })

    // Auto-close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        const navbarCollapse = document.querySelector('.navbar-collapse.show')
        if (navbarCollapse) {
            const isClickInside = navbarCollapse.contains(e.target)
            const isNavbarToggler = e.target.classList.contains('navbar-toggler') ||
                e.target.closest('.navbar-toggler')

            if (!isClickInside && !isNavbarToggler) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse)
                bsCollapse.hide()
            }
        }
    })
})

// Simulate loading for the demo section
document.addEventListener('DOMContentLoaded', function () {
    const demoImage = document.querySelector('.demo-image img')

    if (demoImage) {
        // Create and add loading overlay
        const loadingOverlay = document.createElement('div')
        loadingOverlay.className = 'loading-overlay'
        loadingOverlay.style.position = 'absolute'
        loadingOverlay.style.top = '0'
        loadingOverlay.style.left = '0'
        loadingOverlay.style.width = '100%'
        loadingOverlay.style.height = '100%'
        loadingOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
        loadingOverlay.style.display = 'flex'
        loadingOverlay.style.alignItems = 'center'
        loadingOverlay.style.justifyContent = 'center'
        loadingOverlay.style.zIndex = '2'
        loadingOverlay.style.borderRadius = '8px'
        loadingOverlay.style.backdropFilter = 'blur(3px)'
        loadingOverlay.style.opacity = '1'
        loadingOverlay.style.transition = 'opacity 0.5s ease'

        const spinner = document.createElement('div')
        spinner.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: white;"></i>'

        loadingOverlay.appendChild(spinner)
        demoImage.parentNode.appendChild(loadingOverlay)

        // Simulate loading time
        setTimeout(() => {
            loadingOverlay.style.opacity = '0'
            setTimeout(() => {
                loadingOverlay.remove()
            }, 500)
        }, 1500)
    }
})

// Preload images
window.addEventListener('load', function () {
    const preloadImages = document.querySelectorAll('img')
    preloadImages.forEach(img => {
        const src = img.getAttribute('src')
        if (src) {
            const newImg = new Image()
            newImg.src = src
        }
    })
})

// Define keyframes for icon bounce animation
const addIconBounceAnimation = () => {
    if (document.querySelector('#iconBounceStyle')) return

    const style = document.createElement('style')
    style.id = 'iconBounceStyle'
    style.textContent = `
        @keyframes iconBounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-5px) scale(1.1);
            }
        }
    `
    document.head.appendChild(style)
}

// Add the animation style
document.addEventListener('DOMContentLoaded', addIconBounceAnimation)

// Initialize scroll reveal animations
function initScrollReveal() {
    const scrollRevealItems = document.querySelectorAll('.scroll-reveal')

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                observer.unobserve(entry.target)
            }
        })
    }, options)

    scrollRevealItems.forEach(item => {
        observer.observe(item)
    })
} 