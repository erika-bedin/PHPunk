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

// Array para armazenar os players de vídeo
const players = [];

// Função para criar um player do YouTube
function createYouTubePlayer(videoId, containerId) {
  return new YT.Player(containerId, {
    height: '360',
    width: '640',
    videoId: videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// Função chamada quando um player do YouTube estiver pronto
function onPlayerReady(event) {
  // Inicia a reprodução do primeiro vídeo
  event.target.playVideo();
}

// Função chamada quando o estado de um player do YouTube mudar
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    // Vídeo terminou de reproduzir, passa para o próximo vídeo
    playNextVideo(event.target);
  }
}

// Função para reproduzir o próximo vídeo
function playNextVideo(player) {
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

// Carrega a API do YouTube e cria os players de vídeo
function loadYouTubeAPI() {
  // Cria um script para carregar a API do YouTube
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Chama a função onYouTubeIframeAPIReady quando a API estiver pronta
  window.onYouTubeIframeAPIReady = function() {
    // Cria os players de vídeo
    for (let i = 1; i <= 3; i++) {
      const containerId = `videoPlayer${i}`;
      const player = createYouTubePlayer(videoList[currentVideoIndex], containerId);
      players.push(player);
    }
  };
}

// Carrega a API do YouTube ao carregar a página
loadYouTubeAPI();