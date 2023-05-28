// Array contendo os IDs dos vídeos a serem reproduzidos
const videoList = [
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
];

// Variável para controlar o índice atual do vídeo
let currentVideoIndex = 0;

// Função para criar o player do YouTube
function createYouTubePlayer(videoId) {
  return new YT.Player('videoPlayer', {
    height: '360',
    width: '640',
    videoId: videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// Função chamada quando o player do YouTube estiver pronto
function onPlayerReady(event) {
  // Inicia a reprodução do primeiro vídeo
  event.target.playVideo();
}

// Função chamada quando o estado do player do YouTube mudar
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    // Vídeo terminou de reproduzir, passa para o próximo vídeo
    playNextVideo();
  }
}

// Função para reproduzir o próximo vídeo
function playNextVideo() {
  // Pausa o vídeo atual
  player.stopVideo();

  // Incrementa o índice
  currentVideoIndex++;

  // Verifica se chegou ao fim da lista de vídeos
  if (currentVideoIndex >= videoList.length) {
    // Reinicia o índice para repetir a reprodução
    currentVideoIndex = 0;
  }

  // Carrega e reproduz o próximo vídeo
  player.loadVideoById(videoList[currentVideoIndex]);
}

// Carrega a API do YouTube e inicia a reprodução do primeiro vídeo
function loadYouTubeAPI() {
  // Cria um script para carregar a API do YouTube
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Chama a função onYouTubeIframeAPIReady quando a API estiver pronta
  window.onYouTubeIframeAPIReady = function() {
    // Cria o player do YouTube com o primeiro vídeo
    player = createYouTubePlayer(videoList[currentVideoIndex]);
  };
}

// Carrega a API do YouTube ao carregar a página
loadYouTubeAPI();