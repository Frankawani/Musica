import React from "react";
import Image from "next/image";
import { Section } from "./Section";
// import { LayerEffect } from "./Icons";
import Style from "./Stye.module.css";
import { useState } from "react";
export const CuratedPlaylist = () => {
  const [visitors, setVisitors] = useState([
    {
      src: "/andre-sebastian-jNdK3CCH5D8-unsplash.jpg",
      alt: "pop Music",
    },
    {
      src: "/daria-volkova-OH6jXILNVAo-unsplash.jpg",
      alt: "Blues Music",
    },
    {
      src: "/joshua-rondeau-kf9tRJz3vVI-unsplash.jpg",
      alt: "Hip Music",
    },
    {
      src: "/start-digital-EgEjFesJMlg-unsplash.jpg",
      alt: "trap Music",
    },
  ]);

  return (
      <div
        className={`overflow-hidden sm:mb-10 hover:from-amber-400 hover:to-green hover:bg-gradient-to-bl flex justify-between rounded-3xl py-2 px-4 h-96 relative bg-gradient-to-t from-cyan-600 to-green text-white group flex-1 items-center`}
      >
        <div className="flex flex-col justify-around relative z-20 w-full">
          <div className="card-head">
            <p className="text-sm font-bold group-hover:text-white">
              Curated Playlist
            </p>
          </div>

          <div className="card-body my-5 max-w-md relative z-20 group-hover:text-white">
            <h1 className="font-bold text-3xl leading-tight">R & B Hits</h1>
            <p className=" mb-5 capitalize">
              All Mine. Lie again, petty call me everyday. out of time, no be
              love, bad habit and so much more.
            </p>

            <div className="socials pl-0 ml-0">
              <div className="avartars flex flex-wrap  items-center gap-3">
                {/* =====Group Pictures ====== */}
                <div className="pic-group flex items-center">
                  {visitors.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="img h-10 w-10 rounded-full borde border-4 first:ml-0  border-warmGray-300 overflow-hidden relative -ml-5 group-hover:border-white"
                      >
                        <Image
                          src={`/images/artists${item.src}`}
                          layout="intrinsic"
                          height={50}
                          width={50}
                          alt={item.alt}
                        />
                      </div>
                    );
                  })}
                </div>
                {/* =========/End============= */}

                {/* ============Reactions========== */}
                <div className="social-status flex items-center">
                  <i className="ri ri-heart-fill mr-1"></i>
                  <span className="text-gray-light group-hover:text-white">
                    33k Likes
                  </span>
                </div>
                {/* =================== */}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -z- right-0 h-full lg:static w-full">
          {/* =====Animated Effect =========*/}
          <div
            className={`animate-pulse overflow-hidden rounded-3xl flex flex-row-reverse lg:flex-row justify-end absolute right h-full w-[130%] max-h-96 -top-28 lg:top-0 lg:left-0 -rotate-90 lg:rotate-0  ml-10 pointer-events-none ${Style.rotateEffect}`}
          >
            <Image
              src={"/icons/LayerEffect.svg"}
              alt="Playlist"
              layout="fill"
              className="object-cover"
              priority
            ></Image>
          </div>
          {/* ========/End==== */}

          {/* =======Artist Avatar ======= */}
          <div
            className={`ml-7 h-full w-full -bottom-5 hidden relative lg:block pointer-events-none ${Style.resetFlow}`}
            style={{ maxWidth: "350px" }}
          >
            <Image
              src={"/images/01.png"}
              alt="Playlist"
              layout="fill"
              className="z-0 object-cover h-full group-hover:scale-110 group-hover:origin-bottom transition-all"
            ></Image>
          </div>
          {/* ================ */}
        </div>
      </div>
  );
};

// #endregion
