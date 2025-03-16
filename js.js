// Dynamically adjust viewport height
const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01; // Calculate 1% of the viewport height
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Run function on page load and resize
setViewportHeight();
window.addEventListener('resize', setViewportHeight);