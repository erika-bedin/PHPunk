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

  // Obtém todos os elementos <iframe> presentes na página
  const iframes = document.getElementsByTagName('iframe');

  // Encontra o próximo vídeo a ser reproduzido
  let foundCurrentVideo = false;
  for (let i = 0; i < iframes.length; i++) {
    const iframe = iframes[i];
    if (iframe === player.getIframe()) {
      foundCurrentVideo = true;
    } else if (foundCurrentVideo) {
      // Encontrou o próximo vídeo, obtém o ID e reproduz
      const nextVideoId = iframe.src.split('?autoplay=')[1];
      player.loadVideoById(nextVideoId);
      player.playVideo();
      break;
    }
  }
}