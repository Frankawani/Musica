import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState, useContext, useCallback } from "react";
import musicContext from "../../store/context";
import Image from "next/image";
import { Playlist } from "../../components";

export default function Index() {
  let { query } = useRouter();
  let pId = query?.id;
  const {
    albums,
    player,
    selectTrack,
    addToCollection,
    removeCollection,
    collectionExists,
  } = useContext(musicContext);

  const [data, setData] = useState({
    liked: false,
    inCollection: false,
    playAll: false,
  });

  const playAll = () => {
    if (albums && Array.isArray(albums)) {
      if (!player.playing && !data.playAll) {
        // Pick a file from 0 index and the rest of the list in the playlist
        selectTrack(data?.files[0], data?.files);
        setData({ ...data, playAll: true });
      } else setData({ ...data, playAll: false });
    }
  };

  const addtoCollection = () => {
    setData({ ...data, inCollection: !data.inCollection });
    if (!data.inCollection) {
      addToCollection(data);
    } else {
      removeCollection(data);
    }
  };

  const getData = useCallback(() => {
    if (albums && Array.isArray(albums)) {
      albums.find((item) => {
        if (item.id === pId) {
          setData({ ...data, ...item });
        }
      });
    }
  }, [pId, albums, data]);

  useEffect(() => {
    let event = setTimeout(() => {
      getData();

      if (data && collectionExists(data)) {
        setData({ ...data, inCollection: true });
      } else {
        data.inCollection = false;
      }
    }, 1000);
    return () => {
      clearTimeout(event);
    };
  }, [albums, getData, data, collectionExists]);

  return (
    <>
      <Head>
        <title>Musica Album Playlist</title>
      </Head>

      {albums ? (
        <section
          className={" top-0 l-0 min-h-[100vh] w-full  max-w-5xl bg-top"}
        >
          {data.cover && (
            <Image
              src={data?.cover}
              layout="fill"
              alt={data?.artist}
              unoptimized
              priority
              className="absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] object-top object-cover blur-sm opacity-[0.19]"
            ></Image>
          )}

          <div className="relative">
            <div className="flex flex-wrap lg:flex-nowrap flex-col items-start gap-6 pt-16 lg:pl-8 pl-0 md:flex-row md:items-end">
              <div className="relative w-40 h-40 md:w-60 md:h-60 lg:w-64 lg:h-64 flex-shrink-0">
                {data?.cover ? (
                  <Image
                    src={data?.cover}
                    layout="fill"
                    alt={data?.artist}
                    unoptimized
                    className="rounded-3xl object-cover object-top"
                  ></Image>
                ) : (
                  <div className="bg-dark-300 h-[inherit] w-[inherit] rounded-md animate-pulse"></div>
                )}
              </div>

              <div className="z-10">
                <h1 className="text-3xl font-extrabold ">{data?.title}</h1>

                <h3 className="my-3 text-sm dark:text-warmWhite-500 md:text-base">
                  {data?.info}
                </h3>

                <h3 className="text-sm dark:text-warmWhite-300 md:text-base font-medium">
                  {data?.files?.length} songs
                </h3>

                <div className="z-20 flex items-center gap-3 mt-5 flex-wrap">
                  <button
                    className={`bg-opacity-10 flex group flex-col items-center p-2 btn bg-white rounded-3xl sm:rounded-full sm:flex-row ${
                      data.playAll ? "text-amber-300" : " text-warmGray-100"
                    }`}
                    onClick={playAll}
                  >
                    <i className="ri ri-play-fill group-active:scale-125 "></i>
                    <div className="ml-2 text-xs md:text-base ">Play all</div>
                  </button>

                  <button
                    onClick={addtoCollection}
                    className={`flex flex-col group items-center p-2 bg-white rounded-3xl btn bg-opacity-10 sm:flex-row ${
                      data.inCollection ? "text-amber-300" : ""
                    }`}
                  >
                    <i className="ri ri-folder-add-line group-active:scale-125"></i>
                    <div className="ml-2 text-xs md:text-sm">
                      {data.inCollection ? "In collection" : "add collection"}
                    </div>
                  </button>

                  <button className="flex items-center justify-center p-2 h-10 w-10 flex-shrink-0 transition-all bg-white rounded-full cursor-pointer bg-opacity-10 active:scale-125">
                    <i className="ri ri-heart-line"></i>
                  </button>
                </div>
              </div>
            </div>

            <Playlist playlist={data?.files} id={data?.id} />
          </div>
        </section>
      ) : (
        <div className="h-56 flex flex-col justify-center items-center">
          <h1 className=" text-4xl dark:text-warmGray-600 text-center font-medium">
            No Data Available
          </h1>
        </div>
      )}
    </>
  );
}
