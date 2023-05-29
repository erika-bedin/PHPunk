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
let currentVideoIndex = 0;

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
  playVideo();
}

// Função chamada quando o estado do player mudar
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    // Verifica se o vídeo chegou ao fim
    if (player.getPlayerState() === YT.PlayerState.ENDED) {
      // Vídeo terminou de reproduzir, passa para o próximo vídeo
      playNextVideo();
    }
  }
}

// Função para reproduzir o próximo vídeo
function playNextVideo() {
  // Incrementa o índice do vídeo atual
  currentVideoIndex++;

  // Verifica se há mais vídeos na lista
  if (currentVideoIndex < videoIds.length) {
    // Obtém o ID do próximo vídeo
    const nextVideoId = videoIds[currentVideoIndex];

    // Carrega e reproduz o próximo vídeo
    player.loadVideoById(nextVideoId);
  }
}

// Função para iniciar a reprodução do vídeo atual
function playVideo() {
  // Obtém o ID do primeiro vídeo
  const firstVideoId = videoIds[currentVideoIndex];

  // Carrega e reproduz o primeiro vídeo
  player.loadVideoById(firstVideoId);
}