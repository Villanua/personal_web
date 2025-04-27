// Add funcionality to web
$(document).ready(function() {

    console.log("Document loaded.")

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        $('body').addClass('mobile');
    }

    // Function to apply zoom effect
    function applyZoomEffect(callback) {
        const zoomContainer = $('<div></div>'); // Temporary container for zoom effect
        zoomContainer.css({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999,
            pointerEvents: 'none',
            transform: 'scale(1)',
            transition: 'transform 5s ease-in-out',
        });

        // Append the zoom container to the body
        $('body').append(zoomContainer);

        // Start the zoom effect
        setTimeout(() => {
            zoomContainer.css('transform', 'scale(3)');
        }, 100); // Small delay to ensure transition applies

        // Remove the zoom container and execute callback after 5 seconds
        setTimeout(() => {
            zoomContainer.remove();
            if (callback) callback();
        }, 100);
    }

    $('#logo-link').click(function() {
        console.log("Home");
        applyZoomEffect(() => {
            $('#home-page').css("display", "block");
            $('#about-me-page').css("display", "none");
            $('#projects-page').css("display", "none");
            $('body').css("overflow", "hidden")
        });
        $(".navbar-collapse").collapse('hide');
    });

    $('#about-me-link').click(function() {
        console.log("About me");
        applyZoomEffect(() => {
            $('#home-page').css("display", "none");
            $('#about-me-page').css("display", "block");
            $('#projects-page').css("display", "none");
        });
        $(".navbar-collapse").collapse('hide');
        $('body').css("overflow-y", "scroll")
    });

    $('.project-link').click(function() {
        console.log("Project link clicked");
        applyZoomEffect(() => {
            $('#home-page').css("display", "none");
            $('#about-me-page').css("display", "none");
            $('#projects-page').css("display", "block");
        });
        $("#projectsAccordion").collapse('hide');
        $(".navbar-collapse").collapse('hide');
        $('body').css("overflow-y", "scroll")
    });

    // Detectar clics fuera del acordeón y del toggler y cerrarlos
    $(document).click(function(event) {
        var clickover = $(event.target);
        var _accordionOpened = $("#projectsAccordion").hasClass("show");
        var _navbarOpened = $(".navbar-collapse").hasClass("show");
        
        if (_accordionOpened === true && !clickover.closest('#projectsAccordion').length && !clickover.closest('#projects-link').length) {
            $("#projectsAccordion").collapse('hide');
        }
        
        if (_navbarOpened === true && !clickover.closest('.navbar-collapse').length && !clickover.closest('.navbar-toggler').length) {
            $(".navbar-collapse").collapse('hide');
        }
    });

    // HOME PAGE

    // Chatbot

    
});
