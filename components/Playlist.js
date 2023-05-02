import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import musicContext from "../store/context";

export const Playlist = ({ playlist }) => {
  const [playlists, setPlaylist] = useState();
  const { selectTrack, playing, pause, play, player } =
    useContext(musicContext);

  useEffect(() => {
    let event = setTimeout(() => {
      if (playlist) {
        setPlaylist(playlist);
        console.log(playing);
      }
    }, 1000);

    return () => {
      clearTimeout(event);
    };
  }, [playlist, playing]);

  return (
    <ul className="list-group mt-10 w-full">
      {Array.isArray(playlists) &&
        playlists.map((item) => {
          return (
            <li
              key={item.duration}
              className={`flex cursor flex-wrap lg:flex-nowrap justify-between pl-3 my-5 py-4 items-center dark:bg-dark-300 bg-warmGray-200 rounded-2xl hover:-translate-y-3 transition-all ease-linear lg:pr-6 w-full ${
                playing?.id == item.id && playing?.category == item.category
                  ? "border border-amber-300"
                  : ""
              } ${player.playing ? "animate-pulse" : ""}`}
            >
              <div className="flex items-center justify-between w-full md:w-auto pr-4 image_section gap-4 mr-4">
                <div className="img-thumbnail relative w-20 h-20 lg:w-12 lg:h-12 rounded-md overflow-hidden dark:bg-slate-700 bg-warmGray-400">
                  <Image
                    src={item.cover}
                    layout="fill"
                    alt={item.title}
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <button className="active:scale-125 btn text-xl transition-all text-amber-300 ease-linear lg:hover:animate-pulse">
                  {!item.favourite ? (
                    <i className="ri ri-heart-line"></i>
                  ) : (
                    <i className="ri ri-heart-fill"></i>
                  )}
                </button>
              </div>

              <div className="text_&_option w-full flex justify-between max-w-5xl ml-auto items-center lg:pt-0 pt-5 flex-wrap-reverse pr-4">
                <div className="text_side gap-2 flex flex-1 items-center justify-between font-medium capitalize w-full flex-wrap">
                  <p>{item.artist}</p>
                  <p>{item.title}</p>
                  <p>{item.duration}</p>
                </div>

                {item.id == playing?.id &&
                item.category == playing?.category ? (
                  player.playing ? (
                    <button
                      type="button"
                      onClick={pause}
                      className="btn ml-10 active:scale-125 dark:text-amber-300 medium text-gray transition-all h-10 w-10 rounded-full focus:dark:bg-warmGray-600 focus:bg-warmGray-300 ease-linear bg-warmGray-600"
                    >
                      <i className="ri ri-pause-fill"></i>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={play}
                      className="btn ml-10 active:scale-125 dark:text-amber-300 medium text-gray transition-all h-10 w-10 rounded-full focus:dark:bg-warmGray-600 focus:bg-warmGray-300 ease-linear bg-warmGray-600"
                    >
                      <i className="ri ri-play-fill"></i>
                    </button>
                  )
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      selectTrack(item, playlists);
                    }}
                    className="btn ml-10 active:scale-125 dark:text-amber-300 medium text-gray transition-all h-10 w-10 rounded-full focus:dark:bg-warmGray-600 focus:bg-warmGray-300 ease-linear bg-warmGray-600"
                  >
                    <i className="ri ri-play-fill"></i>
                  </button>
                )}
              </div>
            </li>
          );
        })}
    </ul>
  );
};
