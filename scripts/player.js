// Variáveis globais para armazenar o objeto do player e o índice atual do vídeo
let player;
let currentVideoIndex = 0;

// Função para criar o objeto do player do YouTube
function onYouTubeIframeAPIReady() {
  // Cria o objeto do player
  player = new YT.Player('videoPlayer', {
    height: '360',
    width: '640',
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'rel': 0,
      'showinfo': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
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
  // Verifica se o vídeo atual terminou de reproduzir
  if (event.data === YT.PlayerState.ENDED) {
    // Chama a função para reproduzir o próximo vídeo
    playNextVideo();
  }
}

// Função para reproduzir o próximo vídeo
function playNextVideo() {
  // Pausa o vídeo atual
  player.pauseVideo();

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

// Array com os IDs dos vídeos a serem reproduzidos
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

// Chama a função para carregar a API do YouTube
onYouTubeIframeAPIReady();