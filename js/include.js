// Combined include and initialization
function loadSection(id, file) {
    return fetch(file)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(console.error);
}

document.addEventListener('DOMContentLoaded', function() {
    // Load all sections first, then initialize
    Promise.all([
        loadSection('home-section', 'sections/home.html'),
        loadSection('work-section', 'sections/work.html'),
        loadSection('experience-section', 'sections/experience.html'),
        loadSection('portfolio-section', 'sections/portfolio.html'),
        loadSection('contact-section', 'sections/contact.html'),
        loadSection('footer-section', 'sections/footer.html')
    ]).then(function() {
        // Initialize after sections are loaded
        if (typeof initFullpage === 'function') {
            initFullpage();
        }
        if (typeof initWow === 'function') {
            initWow();
        }
    });
});