// Add funcionality to web
$(document).ready(function() {

    console.log("Document loaded.")

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        $('body').addClass('mobile');
    }

    $('#logo-link').click(function() {
        console.log("Home")
        $('#home-page').css("display", "block");
        $('#about-me-page').css("display", "none");
        $('#projects-page').css("display", "none");
        $(".navbar-collapse").collapse('hide');
        $("body").append(lineContainer);
    })

    $('#about-me-link').click(function() {
        console.log("About me")
        if ($('#home-page').css("display") !== "none") {
            generateLines();
            $('#home-page').fadeOut(2000, function() {
                $('#about-me-page').fadeIn(2000);
            });
        }
        else {
            $('#home-page').css("display", "none");
            $('#about-me-page').css("display", "block");
        }
        
        $('#projects-page').css("display", "none");
        $(".navbar-collapse").collapse('hide');
    })

    $('.project-link').click(function() {
        console.log("Project link clicked")
        $("#projectsAccordion").collapse('hide');
        $(".navbar-collapse").collapse('hide');
    })

    // Función para generar un número aleatorio con distribución gaussiana
    function gaussianRandom(mean, stdDev) {
        let u = 0, v = 0;
        while (u === 0) u = Math.random(); // Convert [0,1) to (0,1)
        while (v === 0) v = Math.random();
        let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return z * stdDev + mean;
    }

    // Función para generar líneas blancas
    function generateLines() {
        const lineContainer = $('<div></div>'); // Contenedor temporal para las líneas y el efecto de fondo
        lineContainer.css({
            position: 'fixed', // Fijar en toda la pantalla
            top: 0,
            left: 0,
            width: '100vw', // Asegurar que cubre toda la pantalla
            height: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0)', // Comienza transparente
            zIndex: 999, // Asegurar que esté encima de todo
            pointerEvents: 'none',
            transition: 'background-color 2s ease-in-out', // Transición gradual
        });

        // Añadir el lineContainer al body
        $('body').append(lineContainer);

        // Iniciar la transición a blanco semitransparente
        setTimeout(() => {
            lineContainer.css('backgroundColor', '#ffe79a');
        }, 1000); // Pequeño retraso para asegurar que la transición se aplica

        const totalLines = Math.min(Math.floor($(window).width() / 10), 100); // Número de líneas basado en el ancho de la página con un máximo de 120
        for (let i = 0; i < totalLines; i++) {
            const line = $('<div class="transition-light"></div>');
            const randomLeft = Math.min(Math.max(gaussianRandom(50, 25), 0), 100); // Posición horizontal con media 50 y desviación estándar 15
            const randomDelay = Math.max(gaussianRandom(1, 0.5), 0); // Retraso con media 1s y desviación estándar 0.5s
            const randomDuration = Math.max(gaussianRandom(3, 1), 1); // Duración con media 3s y desviación estándar 1s
            const randomWidth = Math.max(gaussianRandom(11, 10), 1); // Grosor con media 10px y desviación estándar 5px
            const randomBoxShadow = Math.max(gaussianRandom(50, 30), 10); // Ancho de box-shadow con media 30px y desviación estándar 10px

            line.css({
                backgroundColor: '#ffe79a',
                left: `${randomLeft}vw`,
                width: `${randomWidth}px`, // Grosor de la línea
                boxShadow: `#dfb011 0px 0px ${randomBoxShadow}px 2px`,
                animation: `floatUpSlow ${randomDuration}s ease-in-out forwards`,
                animationDelay: `${randomDelay}s`,
            });

            lineContainer.append(line);
        }

        setTimeout(() => {
            // Restaurar el lineContainer a transparente y eliminarlo
            lineContainer.css('backgroundColor', 'rgba(255, 255, 255, 0)');
        }, 2000); // Ajustado a 12s para dar margen de animación
        setTimeout(() => {
            lineContainer.remove();
        }, 8000); // Esperar a que termine la transición antes de eliminar
    }

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
