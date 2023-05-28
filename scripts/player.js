// Variável global para o objeto do player
var player;

// Função de inicialização do player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'VIDEO_ID', // Substitua pelo ID do vídeo desejado
    events: {
      'onReady': onPlayerReady
    }
  });
}

// Função executada quando o player está pronto
function onPlayerReady(event) {
  // Reproduz o vídeo
  player.playVideo();
}

// Função para pausar o vídeo
function pauseVideo() {
  player.pauseVideo();
}