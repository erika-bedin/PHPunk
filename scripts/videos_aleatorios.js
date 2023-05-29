
function randomizaVideos(videos) {
    // Gerando um índice aleatório para cada vídeo
    const index1 = Math.floor(Math.random() * videos.length);
    let index2 = Math.floor(Math.random() * videos.length);
  
    // Garantindo que o segundo vídeo seja diferente do primeiro
    while (index2 === index1) {
      index2 = Math.floor(Math.random() * videos.length);
    }
  
    // Retorna os URLs dos vídeos sorteados
    return [videos[index1], videos[index2]];
  }
  
  function atualizaVideos() {
    const videoUrls = [
      'https://youtu.be/dhZTNgAs4Fc',
      'https://youtu.be/UCCyoocDxBA',
      'https://youtu.be/pyi0ZfuIIvo',
      'https://youtu.be/egG7fiE89IU',
      'https://youtu.be/k6EQAOmJrbw',
      'https://youtu.be/icXUkIfZxyg',
      'https://youtu.be/gOgpdp3lP8M'
      
    ];
  
    const [videoUrl1, videoUrl2] = randomizaVideos(videoUrls);
  
    // Atualiza os URLs dos vídeos nos elementos iframe
    const video1Element = document.getElementById('video01');
    const video2Element = document.getElementById('video02');
    video1Element.src = videoUrl1;
    video2Element.src = videoUrl2;
  }
  
  // Chama a função para atualizar os vídeos quando a página for carregada
  atualizaVideos();
  
  // Chama a função para atualizar os vídeos quando o usuário trocar de página
  window.addEventListener('beforeunload', atualizaVideos);
  