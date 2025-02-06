function cambiarTema() {
    const body = document.body;
    const toggle = document.querySelector(".toggle");
    const icons = document.querySelectorAll(".icon svg");

    // Alternar clases de tema en el body
    body.classList.toggle("tema-oscuro");
    body.classList.toggle("tema-claro");

    // Verificar el modo actual y cambiar estilos
    if (body.classList.contains("tema-oscuro")) {
        toggle.style.backgroundColor = "rgb(252, 252, 252)"; // Fondo 
        toggle.style.boxShadow = "0 0 33px 3px rgba(255, 255, 255, 0.18)"; // Sombra clara
        icons.forEach(icon => icon.style.fill = "#121a2efa"); // Íconos 
    } else {
        toggle.style.backgroundColor = "#121a2efa"; // Fondo 
        toggle.style.boxShadow = "0 0 33px 3px rgba(18, 26, 46, 0.25)"; // Sombra 
        icons.forEach(icon => icon.style.fill = "rgb(252, 252, 252)"); // Íconos 
    }
}



// Asegúrate de que el tema se ajuste correctamente al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var temaOscuro = body.classList.contains("tema-oscuro");
    var imgSrc = temaOscuro ? "page_/moon.png" : "page_/sun.png";
    var emojiImg = document.getElementById("emoji-img");
    emojiImg.src = imgSrc;
});

function cambiarImagenSegunTema() {
    var img = document.getElementById('github-img');
    var body = document.body;
    var temaActual = body.classList.contains("tema-oscuro") ? 'dark' : 'light';

    // Cambia la imagen según el tema actual
    img.src = temaActual === 'light' ? 'page_/github.png' : 'page_/githublanco.png';
}

// Llamada inicial para asegurar que la imagen de GitHub se ajuste al tema al cargar la página
cambiarImagenSegunTema();

function copiarTexto() {
    // Selecciona el elemento con la clase "correo"
    var elemento = document.querySelector(".correo");

    // Crea un área de texto temporal
    var areaDeTexto = document.createElement("textarea");

    // Asigna el texto del elemento al área de texto
    areaDeTexto.value = elemento.textContent;

    // Añade el área de texto al DOM
    document.body.appendChild(areaDeTexto);

    // Selecciona el contenido del área de texto
    areaDeTexto.select();
    areaDeTexto.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el contenido al portapapeles
    document.execCommand("copy");

    // Elimina el área de texto temporal
    document.body.removeChild(areaDeTexto);
}


var video = document.getElementById('video-proyect1');
var videoContainer = document.getElementById('video-container');

function showControls() {
    video.controls = true;
    videoContainer.classList.add('controls-visible');
}

function hideControls() {
    video.controls = false;
    videoContainer.classList.remove('controls-visible');
}

videoContainer.addEventListener('mouseenter', showControls);
videoContainer.addEventListener('mouseleave', hideControls);

// Mostrar controles al iniciar la reproducción
video.addEventListener('play', showControls);

// Ocultar controles al pausar
video.addEventListener('pause', hideControls);

// Restablecer los controles después de cargar la página
document.addEventListener('DOMContentLoaded', function() {
    hideControls();
});





