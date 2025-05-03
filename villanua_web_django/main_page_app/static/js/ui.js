// Wait for the DOM to be fully loaded before executing scripts
$(document).ready(function() {

    console.log("Document loaded.");

    // Detect if the user is on a mobile device and add a 'mobile' class to the body
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        $('body').addClass('mobile');
    }

    // Function to apply a zoom effect to a target element
    // Parameters:
    // - target: Selector for the element to apply the zoom effect
    // - callback: Function to execute after the zoom animation completes
    function applyZoomEffect(target, callback) {
        const zoomTarget = $(target); // Target element for the zoom effect

        // Disable scrolling during the zoom animation
        $('body').css('overflow', 'hidden');

        // Apply initial styles for the zoom effect
        zoomTarget.css({
            transformOrigin: '50% 40%', // Set the origin point for scaling
            transition: 'transform 5s cubic-bezier(0.42, 0, 1, 1)', // Smooth scaling transition
        });

        // Start the zoom effect after a short delay
        setTimeout(() => {
            zoomTarget.css('transform', 'scale(8)'); // Scale the element
        }, 100); // Delay ensures the transition is applied

        // Hide the header after 2 seconds
        setTimeout(() => {
            $('.header').addClass('hidden');
        }, 2000);

        // Restore styles and execute the callback after the animation ends
        setTimeout(() => {
            $('body').css('overflow', ''); // Re-enable scrolling
            $('.header').removeClass('hidden'); // Show the header again
            if (callback) callback(); // Execute the callback if provided
        }, 4100); // Total duration of the transition + 100ms buffer
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
    
});
