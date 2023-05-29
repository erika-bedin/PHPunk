function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

let players = [];
let currentVideoIndex = 0;

function createPlayer(playerId, videoUrl) {
  return new YT.Player(playerId, {
    height: '360',
    width: '640',
    videoId: getVideoId(videoUrl),
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'disablekb': 1,
      'fs': 0,
      'iv_load_policy': 3,
      'modestbranding': 1,
      'rel': 0,
      'showinfo': 0
    }
  });
}

function onYouTubeIframeAPIReady() {
  players.push(createPlayer('youtube-player1', 'https://www.youtube.com/embed/6NXnxTNIWkc'));
  players.push(createPlayer('youtube-player2', 'https://www.youtube.com/embed/Lo2qQmj0_h4'));
  players.push(createPlayer('youtube-player3', 'https://www.youtube.com/embed/JkK8g6FMEXE'));
  players.push(createPlayer('youtube-player4', 'https://www.youtube.com/embed/TAqZb52sgpU'));
  
  players.push(createPlayer('youtube-player-mais-ouvidos1', 'https://www.youtube.com/embed/9BMwcO6_hyA'));
  players.push(createPlayer('youtube-player-mais-ouvidos2', 'https://www.youtube.com/embed/CD-E-LDc384'));
  players.push(createPlayer('youtube-player-mais-ouvidos3', 'https://www.youtube.com/embed/8SbUC-UaAxE'));
  players.push(createPlayer('youtube-player-mais-ouvidos4', 'https://www.youtube.com/embed/bWXazVhlyxQ'));
  
  players.push(createPlayer('youtube-player-feito-para-voce1', 'https://www.youtube.com/embed/rn_YodiJO6k'));
  players.push(createPlayer('youtube-player-feito-para-voce2', 'https://www.youtube.com/embed/egMWlD3fLJ8'));
  players.push(createPlayer('youtube-player-feito-para-voce3', 'https://www.youtube.com/embed/6Ejga4kJUts'));
  players.push(createPlayer('youtube-player-feito-para-voce4', 'https://www.youtube.com/embed/nrIPxlFzDi0'));

  playNextVideo();
}

function onPlayerReady(event) {
  // Nada a ser feito
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    playNextVideo();
  }
}

function getVideoId(url) {
  const match = url.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z-_]{11})(?:[%#?&]|$)/);
  return match ? match[1] : null;
}

function playNextVideo() {
  const currentPlayer = players[currentVideoIndex];
  if (currentPlayer) {
    currentPlayer.playVideo();
    currentVideoIndex = (currentVideoIndex + 1) % players.length;
  }
}

loadYouTubeAPI();