import { useContext, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Image from "next/image";
import musicContext from "../store/context";

import { HorizontalLoader } from "./Loader";

export const HorizontontalItems = ({ tag, items }) => {
  const breakpoints = useRef({
    220: {
      slidesPerView: 1,
      spaceBetween: 1,
      centeredSlides: true,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      spaceBetween: 50,
      slidesPerView: 5,
    },
  });
  const { selectTrack, pause, playing, player, play } =
    useContext(musicContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const event = setTimeout(() => setData(items), 1000);
    return () => {
      clearTimeout(event);
    };
  }, [items]);

  return (
    <section className={"overflow-hidden max-w-6xl mx-auto my-14"}>
      <h2 className="text-xl mb-5 font-medium capitalize">{tag || "Tag"}</h2>
      <br />
      {data && Array.isArray(data) && data.length > 0 ? (
        <div className="relative overflow-hidden">
          <Swiper
            spaceBetween={1}
            slidesPerView={5}
            speed="500"
            css="true"
            breakpoints={breakpoints.current}
          >
            {data.map((content) => {
              return (
                <SwiperSlide key={content.id} className="mr-10 w-full group">
                  <div className="block group">
                    <div className="group-item-h h-40 rounded-3xl w-40 bg-warmGray-200 dark:bg-gray-dark relative overflow-hidden">
                      <Image
                        src={content.cover}
                        alt={content.title}
                        layout="fill"
                        unoptimized
                        className="w-full object-cover relative z-20 group-hover:-scale-x-100 transition-all"
                      ></Image>

                      <div
                        className={`flex flex-col justify-end from-transparent to-amber-600 z-20 absolute bg-gradient-to-bl  left-0 bottom-0 h-full w-full ${
                          content.id == playing?.id &&
                          playing?.category == content.category
                            ? "lg:opacity-100"
                            : "opacity-0"
                        } p-3 overflow-hidden  transition-opacity group-hover:opacity-100`}
                      >
                        <div
                          className={`flex transition-all flex-shrink-0 justify-between group-hover:translate-y-0 items-center ${
                            content.id == playing?.id &&
                            playing?.category == content.category
                              ? "lg:translate-y-0"
                              : "lg:translate-y-11"
                          }   delay-150`}
                        >
                          <h3 className="text-bold text-sm text-ellipsis overflow-hidden text-white">
                            {content.artist}
                          </h3>

                          {content.id == playing?.id &&
                          content.category === playing?.category ? (
                            player.playing ? (
                              <button
                                type="button"
                                onClick={pause}
                                className="btn relative bg-amber-300 h-10 w-10 leading-5 flex-shrink-0  text-white rounded-full"
                              >
                                <i className="ri ri-pause-fill"></i>
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={play}
                                className="btn after:h-8 after:w-8 after:rounded-full after:border-2 after:border-amber-100 after:transition-all after:animate-ping after:absolute after:left-0 after:top-0 after:right-0 after:m-auto after:bottom-0  relative bg-amber-300 h-10 w-10 leading-5  text-white rounded-full flex-shrink-0"
                              >
                                <i className="ri ri-play-fill"></i>
                              </button>
                            )
                          ) : (
                            <button
                              type="button"
                              onClick={() => {
                                selectTrack(content);
                              }}
                              className="btn after:h-8 after:w-8 after:rounded-full after:border-2 after:border-amber-100 after:transition-all after:animate-ping after:absolute after:left-0 after:top-0 after:right-0 after:m-auto after:bottom-0  relative bg-amber-300 h-10 w-10 leading-5  text-white rounded-full flex-shrink-0"
                            >
                              <i className="ri ri-play-fill"></i>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="group-item-f py-2 lg:group-hover:opacity-0">
                      <h4 className="text-sm dark:text-warmGray-300 font-medium transition-opacity">
                        {content.title}
                      </h4>
                      <p className="text-sm text-gray capitalize">
                        {content.artist}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <HorizontalLoader />
      )}
    </section>
  );
};
