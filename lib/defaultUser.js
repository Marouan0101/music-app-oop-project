import User from './user';

class DefaultUser extends User {
  constructor(username, image) {
    super('defaultUser', username, image);
    this.likedTracks = [];
  }

  likeTrack() {
    console.log('Like Track');
  }

  UnlikeTrack() {
    console.log('Unlike Track');
  }
}

export default DefaultUser;
