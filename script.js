// Selecciona los dos videos
const videoOriginal = document.getElementById('video-original');
const videoAlternativo = document.getElementById('video-alternativo');

// Selecciona el contenedor de texto
const containerTexto = document.querySelector('.container-texto');

// Cambia al video alternativo cuando el mouse entra en el contenedor de texto
containerTexto.addEventListener('mouseenter', () => {
    videoAlternativo.style.opacity = 1; // Muestra el video alternativo
    videoOriginal.style.opacity = 0;    // Oculta el video original
});

// Vuelve al video original cuando el mouse sale del contenedor de texto
containerTexto.addEventListener('mouseleave', () => {
    videoAlternativo.style.opacity = 0; // Oculta el video alternativo
    videoOriginal.style.opacity = 1;    // Muestra el video original
});