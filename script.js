// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Set active nav link based on current URL
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        item.classList.remove('active');
        
        // Check if the href matches the current path, or if we're on the root and the link is index.html
        if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
            item.classList.add('active');
        }
    });

    // Note: The previous JS-based 3D tilt effect was removed to ensure crisp, 
    // unblurred typography and a more professional, performant UI. 
    // We now rely on elegant CSS transform animations for hover states.
});
