        lucide.createIcons();
        
        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Intersection Observer for animations
        const fadeInElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        fadeInElements.forEach(el => observer.observe(el));

        // Animated Counter
        const counters = document.querySelectorAll('.text-5xl');
        const speed = 500; // The lower the slower

        const startCount = (counter) => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const updateCount = () => {
                const inc = target / speed;
                count += inc;

                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target + (counter.innerText.includes('%') ? '%' : '');
                }
            };
            updateCount();
        };
        
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });