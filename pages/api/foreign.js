const path = require("path");

let dir = path.join("public/media/Foreign");
let readFolder = require("../../utils/readFolder");

export default function handler(req, res) {
  let result = [];
  try {
    readFolder(dir, (track) => {
      for (let index = 0; index < track.songs.length; index++) {
        const file = track.songs[index];
        result.push({
          id: index,
          audio: file,
          title: track.title[index],
          artist: track.artists[index],
          cover: track.images[index],
          category: "foreign",
        });
      }
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({message: "this endpoin could not be feched"});
  }
}
