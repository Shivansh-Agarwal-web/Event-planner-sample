// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation (Hamburger Menu) ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Add a click event listener to the hamburger icon
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on both the hamburger and the nav menu
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close the mobile menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    // --- Testimonial Slider ---
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.slider-nav .prev');
    const nextButton = document.querySelector('.slider-nav .next');
    let currentSlide = 0;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove 'active' class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        // Add 'active' class to the target slide
        slides[index].classList.add('active');
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
    
    // Check if the slider elements exist before adding event listeners
    if (slides.length > 0 && prevButton && nextButton) {
        // Event listeners for next and previous buttons
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Auto-play the slider every 5 seconds
        setInterval(nextSlide, 5000);

        // Initialize the slider by showing the first slide
        showSlide(currentSlide);
    }

});
