'use strict';

const options = {
    width: '100%',
    height: '100%',
    parent: ['catt.tv', 'www.catt.tv'],
    channel: 'conniecatt',
    autoplay: true,
    muted: true
};
const player = new Twitch.Player('videoPlayer', options);