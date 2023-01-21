class track {
  constructor(name, artists, image, file, duration) {
    this.name = name;
    this.artists = artists;
    this.image = image;
    this.file = file;
    this.duration = duration;
    this.id = Date.now().toString();
  }
}

export default track;
