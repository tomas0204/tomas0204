function cambiarTema() {
    var body = document.body;

    // Forzar la aplicación inmediata de la transición
    body.offsetHeight; // Esto activa la transición sin esperar

    // Cambia el color de fondo y el color de texto en función del tema
    body.classList.toggle("tema-oscuro");
    var temaOscuro = body.classList.contains("tema-oscuro");
    body.style.backgroundColor = temaOscuro ? "#121a2efa" : "rgb(252, 252, 252)";
    body.style.color = temaOscuro ? "rgb(252, 252, 252)" : "#121a2efa";

    // Cambia el contenido del botón entre 🌞 y 🌜 inmediatamente
    var imgSrc = temaOscuro ? "moon.png" : "sun.png";
    var emojiImg = document.getElementById("emoji-img");
    emojiImg.src = imgSrc;
    
    cambiarImagenSegunTema();

    if (body.classList.contains("tema-oscuro")) {
        imagenProyecto.style.backgroundColor = "red";
    } else {
        // Restablecer el fondo de la imagen cuando no está en modo oscuro
        imagenProyecto.style.backgroundColor = "transparent";
    }
}

// Asegúrate de que el tema se ajuste correctamente al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    var temaOscuro = body.classList.contains("tema-oscuro");
    var imgSrc = temaOscuro ? "moon.png" : "sun.png";
    var emojiImg = document.getElementById("emoji-img");
    emojiImg.src = imgSrc;
});

function cambiarImagenSegunTema() {
    var img = document.getElementById('github-img');
    var body = document.body;
    var temaActual = body.classList.contains("tema-oscuro") ? 'dark' : 'light';

    // Cambia la imagen según el tema actual
    img.src = temaActual === 'light' ? 'github.png' : 'githublanco.png';
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


