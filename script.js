document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('birthdayVideo');
    if (video.paused) {
        video.play();
        this.textContent = "Pausar Video"; // Cambia el texto del botón
    } else {
        video.pause();
        this.textContent = "Reproducir Video"; // Cambia el texto del botón
    }
});
