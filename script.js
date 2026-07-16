document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing to only animate once
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .zoom-in');
    animatedElements.forEach(el => observer.observe(el));

    // Typing Effect for Hero Title
    const typeTarget = document.querySelector('.type-effect');
    if (typeTarget) {
        const textToType = typeTarget.innerText;
        typeTarget.innerText = '';
        let i = 0;
        
        function typeWriter() {
            if (i < textToType.length) {
                typeTarget.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a small delay
        setTimeout(typeWriter, 800);
    }
});
