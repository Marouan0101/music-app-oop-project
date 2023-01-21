import track from './track';
import user from './user';

class artist extends user {
  constructor(username, image, name) {
    super('artist', username, image);
    this.name = name;
    this.tracks = [];
    this.trackCount = this.tracks.length;
  }

  createTrack(name, image, file, duration) {
    this.tracks.push(new track(name, [this.name], image, file, duration));
  }

  deleteTrack() {
    console.log('Delete Track');
  }
}

export default artist;
