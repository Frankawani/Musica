const path = require("path");
import fetch from "node-fetch";

// let dir = path.join("public/media/New");
// let readFolder = require("../../utils/readFolder");

export default function handler(req, res) {
  let result = [];
  // readFolder(dir, (track) => {
  //   for (let index = 0; index < track.songs.length; index++) {
  //     const file = track.songs[index];
  //     result.push({
  //       id: index,
  //       audio: file,
  //       title: track.title[index],
  //       artist: track.artists[index],
  //       cover: track.images[index],
  //       category: "new",
  //     });
  //   }
  // });

  fetch("https://musica-api.up.railway.app/new")
    .then((e) => e.json())
    .then((data) => {
      if (data) {
        if (Array.isArray(data)) {
          data?.map((track, i) => {
            result.push({
              id: i,
              artist: track?.artist,
              title: track.title,
              cover: track?.cover,
              audio: track?.audio,
              category: "new",
            });
          });
        }
      }
      res.status(200).json(result);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: "Server  not available for the request" });
    });
}
