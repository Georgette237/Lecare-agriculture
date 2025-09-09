
  const video = document.getElementById("maVideo");

  const observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Reprendre la vidéo si elle était en pause
        if (video.paused && video.dataset.wasPaused !== "true") {
          video.play();
        }
      } else {
        // Mettre en pause la vidéo quand elle sort de l'écran
        if (!video.paused) {
          video.pause();
          video.dataset.wasPaused = "false";
        } else {
          video.dataset.wasPaused = "true";
        }
      }
    });
  },
   {
    threshold: 0.6 
     // 60% visible pour être considéré comme "visible"
   })
    observer.observe(video);

