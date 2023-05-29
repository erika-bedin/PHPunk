function getRandomVideos(videos) {
  // Gera um índice aleatório para cada vídeo
  const index1 = Math.floor(Math.random() * videos.length);
  let index2 = Math.floor(Math.random() * videos.length);
  console.log('Randomizou videos');

  // Garante que o segundo vídeo seja diferente do primeiro
  while (index2 === index1) {
    index2 = Math.floor(Math.random() * videos.length);
  }

  // Retorna os URLs dos vídeos sorteados
  return [videos[index1], videos[index2]];
}

function updateVideos() {
  const videoUrls = [
    'https://www.youtube.com/embed/e8X3ACToii0',
    'https://www.youtube.com/embed/yZRQkfpqc2M',
    'https://www.youtube.com/embed/gOgpdp3lP8M',
    'https://www.youtube.com/embed/UCCyoocDxBA',
    'https://www.youtube.com/embed/RRKJiM9Njr8',
    'https://www.youtube.com/embed/egG7fiE89IU',
    'https://www.youtube.com/embed/dhZTNgAs4Fc',
    'https://www.youtube.com/embed/pyi0ZfuIIvo',
    'https://www.youtube.com/embed/9-SQGOYOjxs',
    'https://www.youtube.com/embed/lL2ZwXj1tXM',
    'https://www.youtube.com/embed/eBG7P-K-r1Y',
    
 
    
  ];
  console.log('atualizou videos');
  const [videoUrl1, videoUrl2] = getRandomVideos(videoUrls);

  // Atualiza os URLs dos vídeos nos elementos iframe
  const video1Element = document.getElementById('video1');
  const video2Element = document.getElementById('video2');
  video1Element.src = videoUrl1;
  video2Element.src = videoUrl2;
}

// Chama a função para atualizar os vídeos quando a página for carregada
updateVideos();

// Chama a função para atualizar os vídeos quando o usuário trocar de página
window.addEventListener('beforeunload', updateVideos);
// window.addEventListener("DOMContentLoaded", updateVideos);



