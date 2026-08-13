document.addEventListener('DOMContentLoaded', () => {
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
});
