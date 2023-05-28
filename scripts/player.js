// Obtenha todos os iframes de vídeo
const videoFrames = document.querySelectorAll('iframe');

// Variável para controlar o índice atual do vídeo
let currentVideoIndex = 0;

// Função para reproduzir o próximo vídeo
function playNextVideo() {
    // Pausa o vídeo atual
    videoFrames[currentVideoIndex].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

    // Incrementa o índice
    currentVideoIndex++;

    // Verifica se chegou ao fim da lista de vídeos
    if (currentVideoIndex >= videoFrames.length) {
        // Reinicia o índice para repetir a reprodução
        currentVideoIndex = 0;
    }

    // Inicia o próximo vídeo
    videoFrames[currentVideoIndex].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
}

// Adiciona um ouvinte de evento quando um vídeo termina de reproduzir
function onVideoEnded() {
    playNextVideo();
}

// Adiciona o ouvinte de evento para cada vídeo
videoFrames.forEach((frame) => {
    frame.addEventListener('ended', onVideoEnded);
});

// Inicia a reprodução do primeiro vídeo
videoFrames[currentVideoIndex].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');