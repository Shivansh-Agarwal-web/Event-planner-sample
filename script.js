// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation (Hamburger Menu) ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Check if hamburger and navMenu exist before adding listeners
    if (hamburger && navMenu) {
        // Add a click event listener to the hamburger icon
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class on both the hamburger and the nav menu
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close the mobile menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }


    // --- Active Navigation Link Highlighter ---
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop(); // Gets the current file name e.g., "about.html"

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // If it's the homepage, check for "index.html" or an empty path
        if ((currentPath === '' || currentPath === 'index.html') && (linkPath === 'index.html')) {
             link.classList.add('active');
        } else if (linkPath === currentPath && currentPath !== 'index.html') {
            link.classList.add('active');
        }
    });


    // --- Testimonial Slider (Only for Homepage) ---
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    // Check if we are on a page that has the testimonial slider
    if (testimonialSlider) {
        const slides = testimonialSlider.querySelectorAll('.testimonial-slide');
        const prevButton = testimonialSlider.querySelector('.slider-nav .prev');
        const nextButton = testimonialSlider.querySelector('.slider-nav .next');
        let currentSlide = 0;

        // Function to show a specific slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        // Function to show the next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Function to show the previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Ensure all slider elements are present before proceeding
        if (slides.length > 0 && prevButton && nextButton) {
            // Event listeners for next and previous buttons
            nextButton.addEventListener('click', nextSlide);
            prevButton.addEventListener('click', prevSlide);

            // Auto-play the slider every 5 seconds
            setInterval(nextSlide, 5000);

            // Initialize the slider by showing the first slide
            showSlide(currentSlide);
        }
    }

});
