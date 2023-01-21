class player {
  constructor() {
    this.currentTrack = {};
    this.tracks = [];
    this.isPlaying = false;
    this.progress = 0;
  }

  play() {
    this.isPlaying = true;
  }

  pause() {
    this.isPlaying = false;
  }

  nextTrack() {
    console.log('next track');
  }

  prevTrack() {
    console.log('previous track');
  }
}

export default player;
