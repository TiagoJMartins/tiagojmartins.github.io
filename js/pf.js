$(document).ready(function() {
    
    
    // Button scroll to content
    
    $('a#toContent').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': $('#skills').offset().top
        }, 700, 'swing');
    });
    
    
    window.sr = ScrollReveal({
        duration: 900,
        delay: 200,
        distance: '350px',
        mobile: false,
        viewFactor: 0.35
    });
    sr.reveal('.skills', {
        origin: 'right'
    });
    sr.reveal('.work', {
        origin: 'left'
    });
    sr.reveal('.contacts', {
        origin: 'right'
    });
    
});