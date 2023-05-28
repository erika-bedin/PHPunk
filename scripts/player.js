// Variáveis globais
let player;

// Função chamada quando a API do YouTube estiver pronta
function onYouTubeIframeAPIReady() {
  // Cria o player do YouTube
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// Função chamada quando o player estiver pronto
function onPlayerReady(event) {
  // Inicia a reprodução do primeiro vídeo
  event.target.playVideo();
}

// Função chamada quando o estado do player mudar
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    // Vídeo terminou de reproduzir, passa para o próximo vídeo
    playNextVideo();
  }
}

// Função para reproduzir o próximo vídeo
function playNextVideo() {
  // Pausa o vídeo atual
  player.pauseVideo();

  // Altere o VIDEO_ID para o ID do próximo vídeo
  const nextVideoId = 'NEW_VIDEO_ID';

  // Carrega e reproduz o próximo vídeo
  player.loadVideoById(nextVideoId);
  player.playVideo();
}