function adjustLayout() {
    var width = window.innerWidth;

    if (width <= 480) {
        document.body.style.fontSize = '14px';
        document.body.style.lineHeight = '1.4';
        document.querySelectorAll('section').forEach(function(section) {
            section.style.padding = '10px';
        });
    } else if (width <= 768) {
        document.body.style.fontSize = '16px';
        document.body.style.lineHeight = '1.5';
        document.querySelectorAll('section').forEach(function(section) {
            section.style.padding = '15px';
        });
    } else {
        document.body.style.fontSize = '18px';
        document.body.style.lineHeight = '1.6';
        document.querySelectorAll('section').forEach(function(section) {
            section.style.padding = '20px';
        });
    }
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);