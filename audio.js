document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const reproducirBtn = document.getElementById('reproducir-btn');
    audio.volume = 1;

   // Manejar el clic en el botón
    reproducirBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play()
                .then(() => {
                    reproducirBtn.textContent = "viene alguien, pausa jaja";
                })
                .catch((error) => {
                    console.error("Error al reproducir el audio:", error);
                });
        } else {
            audio.pause();
            
            reproducirBtn.textContent = "Se fueron, pon play";
        }
    });

    // Cambiar el texto del botón cuando el audio termina
    audio.addEventListener('ended', () => {
        reproducirBtn.textContent = "Reproducir";
    });
});