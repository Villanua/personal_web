// Add funcionality to web
$(document).ready(function() {

    console.log("Document loaded.")
    
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        $('body').addClass('mobile');
    }

    $('#logo-link').click(function() {
        console.log("Home")
        $('#home-page').removeClass("hide")
        $('#about-me-page').addClass("hide")
        $('#projects-page').addClass("hide")
        $(".navbar-collapse").collapse('hide');
    })

    $('#about-me-link').click(function() {
        console.log("About me")

        $('#home-page').addClass("hide")
        $('#about-me-page').removeClass("hide")
        $('#projects-page').addClass("hide")
        $(".navbar-collapse").collapse('hide');
    })

    $('.project-link').click(function() {
        console.log("Project link clicked")
        $("#projectsAccordion").collapse('hide');
        $(".navbar-collapse").collapse('hide');
    })

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
    // Presentation

    var typed = new Typed(".auto-type", {
        strings: [
            "Robotics and AI Engineer",
            "Creative Mind", 
            "Generative AI Developer", 
            "Problem Solver",
        ],
        typeSpeed: 150,
        backSpeed: 50,
        loop: true
    })

    // Chatbot

    
});
