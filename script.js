// Function for a smooth scroll when clicking navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only prevent default for internal links (those starting with # or to current page sections)
        // This allows external links or full page reloads for other pages
        const href = this.getAttribute('href');
        if (href.startsWith('#') || (href === 'index.html' && window.location.pathname.includes('index.html'))) {
            e.preventDefault();

            const targetId = href.startsWith('#') ? href.substring(1) : 'hero'; // Default to hero if on index.html
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add a "scroll-to-top" button if the user scrolls down
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) { // Check if the button exists on the current page
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Simple animation for elements on scroll (Fade-in effect)
const fadeElements = document.querySelectorAll('.container, .lesson-card, .lesson-module, .mission, .vision');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // When 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

fadeElements.forEach(el => {
    el.classList.add('fade-in-hidden'); // Add initial hidden state
    observer.observe(el);
});

// Example: Simple "Read More" Toggle for lesson descriptions (for future use on lesson detail pages)
// You might implement this for specific text blocks on a lesson detail page
// function toggleReadMore(button) {
//     const content = button.previousElementSibling; // Assuming content is before the button
//     if (content.style.maxHeight) {
//         content.style.maxHeight = null;
//         button.textContent = "Read More";
//     } else {
//         content.style.maxHeight = content.scrollHeight + "px";
//         button.textContent = "Read Less";
//     }
// }