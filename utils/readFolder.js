const fs = require("fs");
const path = require("path");
function readDir(dir, fn) {
  let track = {
    songs: [],
    artist: [],
    images: [],
    artists: [],
    title: [],
  };

  fs.readdirSync(dir).forEach((file) => {
    if (file) {
      fs.readdirSync(`${dir}/${file}`).map((items) => {
        let [artist, song] = items.split("_");

        // Get the mp3 files
        if (path.extname(items) === ".mp3")
          track.songs.push(
            `${dir
              .replaceAll("\\", "/")
              .replace("public", "")}/${file}/${items}`
          );
        // Get the mp3 images
        if (path.extname(items) === ".jpg" || path.extname(items) === ".png")
          track.images.push(
            `${dir
              .replaceAll("\\", "/")
              .replace("public", process.env.URL)}/${file}/${artist}`
          );

        if (!artist.includes(".ini") && !artist.includes(".jpg"))
          track.artists.push(artist);

        if (song) track.title.push(song.split(".mp3")[0]);
      });
    }
  });
  // Send to callback
  fn(track);
}

module.exports = readDir;
