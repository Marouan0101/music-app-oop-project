class playlist {
  constructor(name, description, image, creator) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.creator = creator;

    this.id = Date.now().toString();
    this.type = 'playlist';
    this.date = new Date(Date.now());
    this.tracks = [];
    this.trackCount = this.tracks.length;
    this.duration = this.#getDuration();
  }

  #getDuration() {
    let totalMs = 0;
    this.tracks.forEach((track) => {
      totalMs += track.duration;
    });
    return totalMs;
  }
}

export default playlist;
