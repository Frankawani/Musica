import fetch from "node-fetch";
import { v4 as uid } from "uuid"
export default function handler(req, res) {
  let data = [];
  fetch("https://musica-api.up.railway.app/playlist")
    .then((d) => d.json())
    .then((Result) => {
      if (Result) {
        data = Result.map((item, i) => {
          let { files } = item;

          if (files && Array.isArray(files)) {
            item.files = files.map((tracks, e) => ({
              ...tracks,
              id: uid(),
              category: "album",
            }));
          }
          return item;
        });
      }
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
}
