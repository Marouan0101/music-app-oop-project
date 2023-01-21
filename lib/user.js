import playlist from './playlist';

class user {
  constructor(type, username, image) {
    this.username = username;
    this.image = image;
    this.type = type;
    this.playlists = [];
    this.id = Date.now().toString();
  }

  logOut() {
    console.log('Log Out');
  }

  createPlaylist(name, description, image) {
    this.playlists.push(
      new playlist(
        name,
        description,
        image,
        this.name ? this.name : this.username
      )
    );
  }

  deletePlaylist() {
    console.log('Delete playlist');
  }

  addTrackToPlaylist() {
    console.log('add track to playlist');
  }

  deleteTrackFromPlaylist() {
    console.log('Delete track from playlist');
  }
}

export default user;
