
// Add funcionality to web
$(document).ready(function() {

    console.log("Document loaded.")
    
    $('.logo').click(function() {
        console.log("Home")
        $('#projects-link').removeClass("active")
        $('#about-me-link').removeClass("active")
        document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>';
    })

    $('#about-me-link').click(function() {
        console.log("About me")
        $('#projects-link').removeClass("active")
        $(this).addClass("active")
        document.getElementById("content").innerHTML='<object type="text/html" data="about_me.html" ></object>';
    })

    $('#projects-link').click(function() {
        console.log("Projects")
        $('#about-me-link').removeClass("active")
        $(this).addClass("active")
        document.getElementById("content").innerHTML='<object type="text/html" data="projects.html" ></object>';
    })
});
