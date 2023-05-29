// Variáveis globais
let player;
const videoIds = [
  '6NXnxTNIWkc',
  'Lo2qQmj0_h4',
  'JkK8g6FMEXE',
  'TAqZb52sgpU',
  '9BMwcO6_hyA',
  'CD-E-LDc384',
  '8SbUC-UaAxE',
  'bWXazVhlyxQ',
  'rn_YodiJO6k',
  'egMWlD3fLJ8',
  '6Ejga4kJUts',
  'nrIPxlFzDi0'
]; // Lista de IDs dos vídeos

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

  // Verifica se há mais vídeos na lista
  if (videoIds.length > 0) {
    // Obtém o ID do próximo vídeo
    const nextVideoId = videoIds.shift(); // Remove e retorna o primeiro elemento da lista

    // Carrega e reproduz o próximo vídeo
    player.loadVideoById(nextVideoId);
    player.playVideo();
  }
}