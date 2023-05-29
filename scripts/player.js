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
  players.push(createPlayer('youtube-player', 'https://www.youtube.com/embed/6NXnxTNIWkc?autoplay=1'));
  players.push(createPlayer('youtube-player', 'https://www.youtube.com/embed/Lo2qQmj0_h4?autoplay=1'));
  players.push(createPlayer('youtube-player', 'https://www.youtube.com/embed/JkK8g6FMEXE?autoplay=1'));
  players.push(createPlayer('youtube-player', 'https://www.youtube.com/embed/TAqZb52sgpU?autoplay=1'));

  players.push(createPlayer('youtube-player-mais-ouvidos', 'https://www.youtube.com/embed/9BMwcO6_hyA?autoplay=1'));
  players.push(createPlayer('youtube-player-mais-ouvidos', 'https://www.youtube.com/embed/CD-E-LDc384?autoplay=1'));
  players.push(createPlayer('youtube-player-mais-ouvidos', 'https://www.youtube.com/embed/8SbUC-UaAxE?autoplay=1'));
  players.push(createPlayer('youtube-player-mais-ouvidos', 'https://www.youtube.com/embed/bWXazVhlyxQ?autoplay=1'));

  players.push(createPlayer('youtube-player-feito-para-voce', 'https://www.youtube.com/embed/rn_YodiJO6k?autoplay=1'));
  players.push(createPlayer('youtube-player-feito-para-voce', 'https://www.youtube.com/embed/egMWlD3fLJ8?autoplay=1'));
  players.push(createPlayer('youtube-player-feito-para-voce', 'https://www.youtube.com/embed/6Ejga4kJUts?autoplay=1'));
  players.push(createPlayer('youtube-player-feito-para-voce', 'https://www.youtube.com/embed/nrIPxlFzDi0?autoplay=1'));
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