function nowPlaying(song) {
    let songname = song[0];
    let artist = song[1];
    let duration = song[2];

    console.log(`Now Playing: ${artist} - ${songname} [${duration}]`);
}