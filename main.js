document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            document.body.style.overflow = isActive ? 'hidden' : '';
        });
    }

    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const toggleBtn = header.querySelector('.toggle');
            
            // Check if already expanded
            if (item.classList.contains('expanded')) {
                item.classList.remove('expanded');
                toggleBtn.textContent = '+';
            } else {
                // Close all others
                document.querySelectorAll('.accordion-item').forEach(otherItem => {
                    otherItem.classList.remove('expanded');
                    otherItem.querySelector('.toggle').textContent = '+';
                });
                
                // Open current
                item.classList.add('expanded');
                toggleBtn.textContent = '-';
            }
        });
    });

    // Back to top scroll
    const fmArrow = document.querySelector('.fm-arrow');
    if (fmArrow) {
        fmArrow.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Star Particles Background
    function createStars() {
        const starContainer = document.createElement('div');
        starContainer.className = 'star-container';
        // Ensure container takes full page height
        starContainer.style.height = document.documentElement.scrollHeight + 'px';
        document.body.appendChild(starContainer);

        const numStars = 150; // Increased amount to cover the whole page
        
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star-particle';
            
            // Random position across entire scrollable height
            const x = Math.random() * 100;
            const y = Math.random() * document.documentElement.scrollHeight;
            
            // Random size between 8px and 14px for star shape
            const size = Math.random() * 6 + 8;
            
            // Random peak opacity (translucent)
            const peakOpacity = Math.random() * 0.3 + 0.1;

            // Random animation delay so they twinkle out of sync
            const delay = Math.random() * 4;

            star.style.left = `${x}vw`;
            star.style.top = `${y}px`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.setProperty('--peak-opacity', peakOpacity);
            star.style.animationDelay = `${delay}s`;
            
            // Randomize position on every blink so they appear in new places
            star.addEventListener('animationiteration', () => {
                star.style.left = `${Math.random() * 100}vw`;
                star.style.top = `${Math.random() * document.documentElement.scrollHeight}px`;
            });

            starContainer.appendChild(star);
        }
    }

    // Call after all resources are loaded so scrollHeight is accurate
    window.addEventListener('load', () => {
        createStars();
    });
});
