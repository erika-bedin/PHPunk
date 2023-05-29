  let players = [];
  let currentVideoIndex = 0;

  function onYouTubeIframeAPIReady() {
    players.push(createPlayer('youtube-player1', 'https://www.youtube.com/embed/6NXnxTNIWkc', 0));
    players.push(createPlayer('youtube-player2', 'https://www.youtube.com/embed/Lo2qQmj0_h4', 2));
    players.push(createPlayer('youtube-player3', 'https://www.youtube.com/embed/JkK8g6FMEXE', 4));
    players.push(createPlayer('youtube-player4', 'https://www.youtube.com/embed/TAqZb52sgpU', 6));

    players.push(createPlayer('youtube-player-mais-ouvidos1', 'https://www.youtube.com/embed/9BMwcO6_hyA', 8));
    players.push(createPlayer('youtube-player-mais-ouvidos2', 'https://www.youtube.com/embed/CD-E-LDc384', 10));
    players.push(createPlayer('youtube-player-mais-ouvidos3', 'https://www.youtube.com/embed/8SbUC-UaAxE', 12));
    players.push(createPlayer('youtube-player-mais-ouvidos4', 'https://www.youtube.com/embed/bWXazVhlyxQ', 14));

    players.push(createPlayer('youtube-player-feito-para-voce1', 'https://www.youtube.com/embed/rn_YodiJO6k', 16));
    players.push(createPlayer('youtube-player-feito-para-voce2', 'https://www.youtube.com/embed/egMWlD3fLJ8', 18));
    players.push(createPlayer('youtube-player-feito-para-voce3', 'https://www.youtube.com/embed/6Ejga4kJUts', 20));
    players.push(createPlayer('youtube-player-feito-para-voce4', 'https://www.youtube.com/embed/nrIPxlFzDi0', 22));

    players[currentVideoIndex].playVideo();
  }

  function createPlayer(playerId, videoUrl, autoplayDelay) {
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
        'showinfo': 0,
        'start': autoplayDelay
      }
    });
  }

  function onPlayerReady(event) {
    if (currentVideoIndex < players.length - 1) {
      players[currentVideoIndex].cueVideoById(players[currentVideoIndex + 1].getVideoData().video_id);
    }
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      players[currentVideoIndex].stopVideo();
      currentVideoIndex++;
      if (currentVideoIndex < players.length) {
        players[currentVideoIndex].playVideo();
      }
    }
  }

  function getVideoId(url) {
    const match = url.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z-_]{11})(?:[%#?&]|$)/);
    return match ? match[1] : null;
  }