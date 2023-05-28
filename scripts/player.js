// Array contendo os IDs dos vídeos a serem reproduzidos
const videoList1 = [
  '6NXnxTNIWkc',
  'Lo2qQmj0_h4',
  'JkK8g6FMEXE',
  // outros vídeos...
];

const videoList2 = [
  'TAqZb52sgpU',
  '9BMwcO6_hyA',
  'CD-E-LDc384',
  // outros vídeos...
];

const videoList3 = [
  '8SbUC-UaAxE',
  'bWXazVhlyxQ',
  'rn_YodiJO6k',
  // outros vídeos...
];

// Variáveis para controlar o índice atual dos vídeos
let currentVideoIndex1 = 0;
let currentVideoIndex2 = 0;
let currentVideoIndex3 = 0;

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

  // Verifica qual player está sendo usado
  if (player.getIframe().parentNode.id === 'videoPlayer1') {
    // Incrementa o índice do player 1
    currentVideoIndex1++;
    // Verifica se chegou ao fim da lista de vídeos do player 1
    if (currentVideoIndex1 >= videoList1.length) {
      // Reinicia o índice para repetir a reprodução
      currentVideoIndex1 = 0;
    }
    // Carrega e reproduz o próximo vídeo do player 1
    player.loadVideoById(videoList1[currentVideoIndex1]);
  } else if (player.getIframe().parentNode.id === 'videoPlayer2') {
    // Incrementa o índice do player 2
    currentVideoIndex2++;
    // Verifica se chegou ao fim da lista de vídeos do player 2
    if (currentVideoIndex2 >= videoList2.length) {
      // Reinicia o índice para repetir a reprodução
      currentVideoIndex2 = 0;
    }
    // Carrega e reproduz o próximo vídeo do player 2
    player.loadVideoById(videoList2[currentVideoIndex2]);
  } else if (player.getIframe().parentNode.id === 'videoPlayer3') {
    // Incrementa o índice do player 3
    currentVideoIndex3++;
    // Verifica se chegou ao fim da lista de vídeos do player 3
    if (currentVideoIndex3 >= videoList3.length) {
      // Reinicia o índice para repetir a reprodução
      currentVideoIndex3 = 0;
    }
    // Carrega e reproduz o próximo vídeo do player 3
    player.loadVideoById(videoList3[currentVideoIndex3]);
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
    // Cria os players do YouTube para os três vídeos
    const player1 = createYouTubePlayer(videoList1[currentVideoIndex1], 'videoPlayer1');
    const player2 = createYouTubePlayer(videoList2[currentVideoIndex2], 'videoPlayer2');
    const player3 = createYouTubePlayer(videoList3[currentVideoIndex3], 'videoPlayer3');
  };
}

// Carrega a API do YouTube ao carregar a página
loadYouTubeAPI();