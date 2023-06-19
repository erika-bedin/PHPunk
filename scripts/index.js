const express = require('express');
const app = express();

// Rota para obter os vídeos
app.get('/videos', (req, res) => {
  // Aqui, você pode escrever a lógica para recuperar informações dos vídeos do YouTube
  // Por simplicidade, vamos retornar uma resposta de exemplo
  const videos = [
    { id: 'video1', title: 'Video 1', url: '' },
    { id: 'video2', title: 'Video 2', url: '' },
    { id: 'video3', title: 'Video 3', url: '' }
  ];
  
  res.json(videos);
});

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`API está rodando em http://localhost:${port}`);
});
