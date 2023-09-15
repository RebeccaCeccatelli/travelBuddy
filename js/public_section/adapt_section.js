window.addEventListener('DOMContentLoaded', function() {
    var section = document.querySelector('.section');
    var sectionHeight = section.scrollHeight;

    if (sectionHeight <= window.innerHeight) {
        section.style.height = '100vh';
        section.style.overflowY = 'hidden';
    }
});
