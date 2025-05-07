// Wait for the DOM to be fully loaded before executing scripts
$(document).ready(function() {

    console.log("Document loaded.");

    // Detect if the user is on a mobile device and add a 'mobile' class to the body
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        $('body').addClass('mobile');
    }

    // Event handler for the home link
    $('#logo-link').click(function() {
        console.log("Home");
        // Display the home page and hide other sections
        $('#home-page').css("display", "block");
        $('#about-me-page').css("display", "none");
        $('#projects-page').css("display", "none");
        $(".navbar-collapse").collapse('hide'); // Collapse the navbar
    });

    // Event handler for the "About Me" link
    $('#about-me-link').click(function () {
        console.log("About me page");
        $('#home-page').css("display", "none");
        $('#about-me-page').css("display", "block").addClass('visible');
        $(".navbar-collapse").collapse('hide'); // Collapse the navbar
    });

    // Event handler for project links
    $('.project-link').click(function() {
        console.log("Project link clicked");
        
        // Directly transition to the projects page without zoom effect
        // $('#home-page').css("display", "none");
        // $('#about-me-page').css("display", "none");
        // $('#projects-page').css("display", "block");
        
        // $("#projectsAccordion").collapse('hide'); // Collapse the accordion
        // $(".navbar-collapse").collapse('hide'); // Collapse the navbar
    });

    // Detect clicks outside the accordion and navbar toggler to close them
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

    // Event handler for the navbar toggler
    $('.navbar-nav .nav-link').click(function() {
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    
});
