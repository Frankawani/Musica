import React from "react";
import { useState, useEffect, useContext } from "react";
import musicContext from "../store/context";
import Image from "next/image";

export const Player = () => {
  const {
    player,
    playerVolume,
    nextTrack,
    prevTrack,
    play,
    pause,
    shuffle,
    audioRange,
    muteAudio,
    loopTrack,
    seek,
    playing,
    controller,
  } = useContext(musicContext);

  useEffect(() => {
    return () => {
      if (playing) {
        setInterval(() => {
          seek();
        }, controller.current?.currentTime);
      }
    };
  }, [seek, controller.current?.currentTime]);

  return (
    <section className="backdrop-blur-sm dark:from-dark-300 from-warmGray-50 bg-gradient-to-r  flex-wrap lg:nowrap rounded-t-xl p-3 flex items-center justify-between fixed bottom-0 right-0 left-0 m-auto  z-40">
      {/* ====Player Title=========== */}
      <div className="player-h flex flex-shrink-0 items-center  justify-between gap-3 cursor-pointer">
        {!playing?.cover ? (
          <div className="img-thumbnail overflow-hidden h-12 w-12 relative rounded-md dark:bg-warmGray-400 bg-warmGray-200 animate- "></div>
        ) : (
          <div className="img-thumbnail overflow-hidden h-12 w-12 relative rounded-md dark:bg-warmGray-400 bg-warmGray-200 animate">
            <Image
              src={playing?.cover}
              alt={playing?.title}
              className="object-cover text-sm"
              unoptimized
              layout="fill"
              priority
            />
          </div>
        )}

        <div className="details">
          <h2
            className="dark:text-white whitespace-nowrap overflow-hidden font-medium text-ellipsis"
            style={{ maxWidth: "115px" }}
          >
            {playing?.title}
          </h2>
          <p
            className="dark:text-warmGray-300 artistName text-amber-300 whitespace-nowrap overflow-hidden font-medium text-ellipsis"
            style={{ maxWidth: "120px" }}
          >
            {playing?.artist}
          </p>
        </div>
      </div>
      {/* =============/End======== */}

      <div className="tracts flex-1 mx-aut w-52 lg:w-full max-w-3xl ml-5 py-2 pt-4 lg:py-1">
        {/* =====Controls======== */}
        <div className="control max-w-md m-auto flex items-center justify-between lg:mb-5">
          <button
            onClick={shuffle}
            className={`shufftle btn lg:hover:text-amber-300 transition-all invisible -z-10 absolute lg:relative lg:z-10 lg:visible ${
              player.shuffle ? "text-amber-400" : ""
            }`}
          >
            <i className="ri ri-shuffle-line"></i>
          </button>

          <button
            onClick={prevTrack}
            className="prev  btn lg:hover:text-amber-300 transition-all lg:hover:bg-warmGray-600 h-10 w-10 rounded-full"
          >
            <i className="ri ri-skip-back-fill"></i>
          </button>

          {/* ==========Play/Pause control============ */}
          {!player.playing ? (
            <button
              type="button"
              onClick={play}
              className="btn after:h-8 after:w-8 after:rounded-full after:border-2 after:border-amber-100 after:transition-all after:animate-ping after:absolute after:left-0 after:top-0 after:right-0 after:m-auto after:bottom-0  relative bg-amber-300 h-10 w-10 transition-all leading-5  text-white rounded-full items-center flex justify-center flex-shrink-0"
            >
              {!player.seeking ? (
                <i className={`ri ri-play-fill`}></i>
              ) : (
                <span className="block animate-spin">
                  <i className="ri-loader-5-fill"></i>
                </span>
              )}
            </button>
          ) : (
            <button
              onClick={pause}
              className="play btn lg:hover:text-white bg-amber-300 shadow-inner shadow-amber-200 font-bold animate- border-amber-300 border h-10 w-10 text-white rounded-full flex-shrink-0"
            >
              <i className="ri ri-pause-fill"></i>
            </button>
          )}
          {/* ===================== */}

          <button
            onClick={nextTrack}
            className="next btn lg:hover:text-amber-300 transition-all lg:hover:bg-warmGray-600 h-10 w-10 rounded-full"
          >
            <i className="ri ri-skip-forward-fill"></i>
          </button>

          <button
            onClick={loopTrack}
            className={`repeat btn lg:hover:text-amber-300 transition-all invisible -z-10 absolute lg:relative lg:visible lg:z-10 ${
              player.loop ? "text-amber-400" : ""
            }`}
          >
            {!player.loop ? (
              <i className="ri ri-repeat-2-fill"></i>
            ) : (
              <i className="ri ri-repeat-one-fill"></i>
            )}
          </button>
        </div>
        {/* ==========/End===========*/}

        {/* =======Seeker tract =========== */}
        <input
          type="range"
          className={`appearance-none invisible -z-10 absolute lg:relative lg:visible lg:z-10 rounded-full dark:in-range:bg-dark-100 range w-full`}
          max={player.duration}
          onChange={audioRange}
          id="seekSlider"
        />
        {/* ========== */}
      </div>

      {/* ==========Player Volume Set======== */}
      <div className="flex items-center lg:visible sm:invisible lg:relative sm:absolute justify-between gap-3">
        <div className="volume items-center hidden sm:flex">
          <button className="btn dark:text-white mr-2" onClick={muteAudio}>
            {!player.muted ? (
              <i className="ri ri-volume-up-fill"></i>
            ) : (
              <i className="ri ri-volume-mute-fill"></i>
            )}
          </button>
          <input
            type="range"
            className="input w-full appearance-none dark:in-range:bg-dark-100 rounded-lg h-2"
            value={player.volume}
            id="audioVolume"
            onChange={() => playerVolume({ type: "range" })}
            onClick={() => playerVolume({ type: "range" })}
          />
        </div>
      </div>
      {/* ================ */}
    </section>
  );
};
