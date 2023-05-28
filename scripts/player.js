// Array contendo os IDs dos vídeos a serem reproduzidos
const videoList1 = [
  '6NXnxTNIWkc',
  'Lo2qQmj0_h4',
  'JkK8g6FMEXE'
];

const videoList2 = [
  'TAqZb52sgpU',
  '9BMwcO6_hyA',
  'CD-E-LDc384'
];

const videoList3 = [
  '8SbUC-UaAxE',
  'bWXazVhlyxQ',
  'rn_YodiJO6k'
];

// Variáveis para controlar o índice atual de cada vídeo
let currentVideoIndex1 = 0;
let currentVideoIndex2 = 0;
let currentVideoIndex3 = 0;

// Variáveis para os players do YouTube
let player1;
let player2;
let player3;

// Função para criar o player do YouTube
function createYouTubePlayer(videoId, elementId) {
  return new YT.Player(elementId, {
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
    playNextVideo(event.target);
  }
}

// Função para reproduzir o próximo vídeo
function playNextVideo(player) {
  // Pausa o vídeo atual
  player.stopVideo();

  // Determina qual lista de vídeos e índice usar com base no elemento pai
  let videoList, currentVideoIndex;
  if (player.getIframe().parentNode.id === 'videoPlayer1') {
    videoList = videoList1;
    currentVideoIndex = currentVideoIndex1;
  } else if (player.getIframe().parentNode.id === 'videoPlayer2') {
    videoList = videoList2;
    currentVideoIndex = currentVideoIndex2;
  } else if (player.getIframe().parentNode.id === 'videoPlayer3') {
    videoList = videoList3;
    currentVideoIndex = currentVideoIndex3;
  }

  // Incrementa o índice
  currentVideoIndex++;

  // Verifica se chegou ao fim da lista de vídeos
  if (currentVideoIndex >= videoList.length) {
    // Reinicia o índice para repetir a reprodução
    currentVideoIndex = 0;
  }

  // Carrega e reproduz o próximo vídeo
  player.loadVideoById(videoList[currentVideoIndex]);

  // Atualiza o índice atual
  if (player.getIframe().parentNode.id === 'videoPlayer1') {
    currentVideoIndex1 = currentVideoIndex;
  } else if (player.getIframe().parentNode.id === 'videoPlayer2') {
    currentVideoIndex2 = currentVideoIndex;
  } else if (player.getIframe().parentNode.id === 'videoPlayer3') {
    currentVideoIndex3 = currentVideoIndex;
  }
}

// Carrega a API do YouTube e inicia a reprodução dos vídeos
function loadYouTubeAPI() {
  // Cria um script para carregar a API do YouTube
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Chama a função onYouTubeIframeAPIReady quando a API estiver pronta
  window.onYouTubeIframeAPIReady = function() {
    // Cria os players do YouTube para cada lista de vídeos
    player1 = createYouTubePlayer(videoList1[currentVideoIndex1], 'videoPlayer1');
    player2 = createYouTubePlayer(videoList2[currentVideoIndex2], 'videoPlayer2');
    player3 = createYouTubePlayer(videoList3[currentVideoIndex3], 'videoPlayer3');
  };
}

// Carrega a API do YouTube ao carregar a página
loadYouTubeAPI();
