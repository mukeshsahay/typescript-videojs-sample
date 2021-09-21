// Import stylesheets
import './style.css';
import 'video.js/dist/video-js.css';
import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';
import './videojs-skin.css';

import videojs from 'video.js';
import './example-plugin.ts';
import 'videojs-seek-buttons';

const player = videojs('video1', {
  plugins: {
    examplePlugin: { message: "Here's a message!" },
    seekButtons: {
      forward: 30,
      back: 10,
    },
  },
});

var src1 = 'https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8';
var src2 = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

player.src(src1);

var btnSrcSwtch = document.getElementById('switch-source');
btnSrcSwtch.onclick = function () {
  if (player.currentSource().src === src1) {
    player.src(src2);
  } else {
    player.src(src1);
  }
  player.play();
};
