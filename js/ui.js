
// Add funcionality to web
$(document).ready(function() {

    console.log("Document loaded.")
    

    $('.logo').click(function() {
        console.log("Home")
        $('#about-me-link').removeClass("active")
        $('#projects-link').removeClass("active")

        $('#home-page').removeClass("hide")
        $('#about-me-page').addClass("hide")
        $('#projects-page').addClass("hide")
    })

    $('#about-me-link').click(function() {
        console.log("About me")
        $('#projects-link').removeClass("active")
        $(this).addClass("active")

        $('#home-page').addClass("hide")
        $('#about-me-page').removeClass("hide")
        $('#projects-page').addClass("hide")
    })

    $('#projects-link').click(function() {
        console.log("Projects")
        $('#about-me-link').removeClass("active")
        $(this).addClass("active")

        $('#home-page').addClass("hide")
        $('#about-me-page').addClass("hide")
        $('#projects-page').removeClass("hide")
    })

    // HOME PAGE
    // Presentation

    var typed = new Typed(".auto-type", {
        strings: ["Robotics Engineer", "Passionate Programmer", "Dedicated Learner"],
        typeSpeed: 150,
        backSpeed: 50,
        loop: true
    })


});
