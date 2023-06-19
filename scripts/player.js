// player.js

// Carregar a API do YouTube
function onYouTubeIframeAPIReady() {
  // Obter todos os elementos <iframe> com a classe "video"
  var videoElements = document.getElementsByClassName("video");

  // Inicializar os players do YouTube
  var players = [];
  for (var i = 0; i < videoElements.length; i++) {
    var videoElement = videoElements[i];
    var player = new YT.Player(videoElement, {
      events: {
        onStateChange: onPlayerStateChange,
      },
    });
    players.push(player);
  }

  // Armazenar o índice do player atual
  var currentPlayerIndex = 0;

  // Função chamada quando o estado do player mudar
  function onPlayerStateChange(event) {
    // Se o vídeo atual está sendo reproduzido
    if (event.data === YT.PlayerState.PLAYING) {
      // Pausar todos os outros vídeos
      for (var i = 0; i < players.length; i++) {
        if (i !== currentPlayerIndex) {
          players[i].pauseVideo();
        }
      }
    }

    // Se o vídeo atual terminou de reproduzir
    if (event.data === YT.PlayerState.ENDED) {
      // Avançar para o próximo vídeo
      currentPlayerIndex++;
      if (currentPlayerIndex < players.length) {
        players[currentPlayerIndex].playVideo();
      } else {
        // Se todos os vídeos foram reproduzidos, reiniciar a reprodução do primeiro vídeo
        currentPlayerIndex = 0;
        players[currentPlayerIndex].playVideo();
      }
    }
  }
}
