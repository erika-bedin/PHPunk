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

let currentVideoIndex = 0;
let players = [];

function createYouTubePlayer(videoId, containerId) {
  return new YT.Player(containerId, {
    height: '360',
    width: '640',
    videoId: videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    playNextVideo(event.target);
  }
}

function playNextVideo(player) {
  player.stopVideo();
  currentVideoIndex++;

  if (currentVideoIndex >= videoList.length) {
    currentVideoIndex = 0;
  }

  player.loadVideoById(videoList[currentVideoIndex]);
}

function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = function() {
    players.push(createYouTubePlayer(videoList[currentVideoIndex], 'videoPlayer1'));
    players.push(createYouTubePlayer(videoList[currentVideoIndex], 'videoPlayer2'));
    players.push(createYouTubePlayer(videoList[currentVideoIndex], 'videoPlayer3'));
  };
}

loadYouTubeAPI();