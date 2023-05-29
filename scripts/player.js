function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

let players = []; 

function createPlayer(playerId, videoUrl) {
  return new YT.Player(playerId, {
    height: '360',
    width: '640',
    videoId: getVideoId(videoUrl),
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onYouTubeIframeAPIReady() {
  players.push(createPlayer('youtube-player1', 'https://www.youtube.com/embed/6NXnxTNIWkc?autoplay=1'));
  players.push(createPlayer('youtube-player2', 'https://www.youtube.com/embed/Lo2qQmj0_h4?autoplay=2'));
  players.push(createPlayer('youtube-player3', 'https://www.youtube.com/embed/JkK8g6FMEXE?autoplay=3'));
  players.push(createPlayer('youtube-player4', 'https://www.youtube.com/embed/TAqZb52sgpU?autoplay=4'));

  players.push(createPlayer('youtube-player-mais-ouvidos1', 'https://www.youtube.com/embed/9BMwcO6_hyA?autoplay=5'));
  players.push(createPlayer('youtube-player-mais-ouvidos2', 'https://www.youtube.com/embed/CD-E-LDc384?autoplay=6'));
  players.push(createPlayer('youtube-player-mais-ouvidos3', 'https://www.youtube.com/embed/8SbUC-UaAxE?autoplay=7'));
  players.push(createPlayer('youtube-player-mais-ouvidos4', 'https://www.youtube.com/embed/bWXazVhlyxQ?autoplay=8'));

  players.push(createPlayer('youtube-player-feito-para-voce1', 'https://www.youtube.com/embed/rn_YodiJO6k?autoplay=9'));
  players.push(createPlayer('youtube-player-feito-para-voce2', 'https://www.youtube.com/embed/egMWlD3fLJ8?autoplay=10'));
  players.push(createPlayer('youtube-player-feito-para-voce3', 'https://www.youtube.com/embed/6Ejga4kJUts?autoplay=11'));
  players.push(createPlayer('youtube-player-feito-para-voce4', 'https://www.youtube.com/embed/nrIPxlFzDi0?autoplay=12'));
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    event.target.stopVideo();
  }
}

function getVideoId(url) {
  const match = url.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z-_]{11})(?:[%#?&]|$)/);
  return match ? match[1] : null;
}

loadYouTubeAPI();
