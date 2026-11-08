// Video delle pagine progetto.
// Nel codice HTML: <div class="video" data-youtube="ID" data-mp4="assets/video/file.mp4">
//  - data-youtube: l'ID del video YouTube (la parte dopo "v=" nel link, es. dQw4w9WgXcQ)
//  - data-mp4: in alternativa, un file video caricato nella cartella assets/video
// Se entrambi sono vuoti, viene mostrato "Trailer in arrivo".
(function () {
  document.querySelectorAll('.video').forEach(function (box) {
    var yt = (box.getAttribute('data-youtube') || '').trim();
    var mp4 = (box.getAttribute('data-mp4') || '').trim();
    var btn = box.querySelector('.play');
    var label = box.querySelector('.play-label');

    if (!yt && !mp4) {
      if (btn) btn.disabled = true;
      if (label) label.textContent = 'Trailer in arrivo';
      return;
    }

    btn.addEventListener('click', function () {
      var el;
      if (yt) {
        el = document.createElement('iframe');
        el.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(yt) + '?autoplay=1&rel=0';
        el.title = box.getAttribute('data-title') || 'Video';
        el.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
        el.allowFullscreen = true;
      } else {
        el = document.createElement('video');
        el.src = mp4;
        el.controls = true;
        el.autoplay = true;
        el.playsInline = true;
      }
      box.innerHTML = '';
      box.appendChild(el);
    });
  });
})();
