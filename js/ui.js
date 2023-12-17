
// Add funcionality to web
$(document).ready(function() {

    console.log("Document loaded.")
    

    $('.logo').click(function() {
        console.log("Home")
        $('#projects-link').removeClass("active")
        $('#about-me-link').removeClass("active")
    })

    $('#about-me-link').click(function() {
        console.log("About me")
        $('#projects-link').removeClass("active")
        $(this).addClass("active")
    })

    $('#projects-link').click(function() {
        console.log("Projects")
        $('#about-me-link').removeClass("active")
        $(this).addClass("active")
    })

    // Presentation

    var typed = new Typed(".auto-type", {
        strings: ["Robotics Engineer", "Passionate Programmer", "Dedicated Learner"],
        typeSpeed: 150,
        backSpeed: 50,
        loop: true
    })


});
