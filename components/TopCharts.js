import { useState, useEffect } from "react";
import { VerticalLoader } from "./Loader";
import Image from "next/image";
import Link from "next/link";

export const TopCharts = ({ albumList }) => {
  let [albums, setAlbums] = useState([]);

  // Toggle the like state
  const like = (e) => {
    // charts.find((item) => {
    //   // Check for match
    //   if (item.album === e) {
    //     item.liked = !item.liked;
    //     setChart([...charts]);
    //   }
    // });
  };

  useEffect(() => {
    let event = setTimeout(() => {
      setAlbums(albumList);
    }, 1000);
    return () => {};
  }, [albumList]);

  return (
    <section className={`flex-shrink-0 ml-3 lg:max-w-xl lg:px-10 py-5 lg:ml-auto`}>
      <h2 className=" text-xl font-medium pb-3">Top Charts</h2>
      <ul
        className="list overflow-y-auto py-4 pr-2"
        style={{ maxHeight: "350px" }}
      >
        {albums && Array.isArray(albums) && albums.length > 0 ? (
          albums.map((album, i) => {
            return (
              <li
                key={i}
                className="py-3 px-5 mb-3 bg-slate-50 dark:bg-dark-100 w-full flex flex-wrap lg:flex-nowrap relative list-none items-center justify-between rounded-xl overflow-hidden transition after:absolute after:left-0 after:bottom-0 after:h-full after:from-amber-400 after:to-transparent after:w-0 after:bg-gradient-to-tr after:rounded-xl after:transition-all after:ease-linear after:delay-200 shadow-xl lg:leading-9 after:opacity-0 after:hover:opacity-100 hover:after:w-full  group cursor-pointer ease-linear"
              >
                {/* =====Image & Content-section===== */}
                <Link href={{ pathname: "/album", query: { id: album?.id } }}>
                  <div className="content-section flex flex-wrap lg:flex-nowrap items-center gap-4 relative z-10 group-hover:dark:text-white">
                    <div className="img-thumb relative  w-14 h-14 rounded-xl bg-gray-light dark:bg-gray-dark mr-1 group-hover:dark:bg-warmGray-400 group-hover:delay-200 overflow-hidden">
                      <Image
                        src={album?.cover}
                        alt={album?.artist}
                        layout="fill"
                        unoptimized
                      />
                    </div>

                    <div className="txt-content">
                      <h3 className="album-name capitalize font-bold">
                        {album?.title}
                      </h3>
                    </div>
                  </div>
                </Link>
                {/* ======/End */}

                {/* =====Button======= */}
                {!albums.liked ? (
                  <button
                    // onClick={() => like(albums.album)}
                    className="btn border ml-2  relative z-10 rounded-full dark:border-gray-dark text-amber-500 transition-all group-hover:border-dark-300 dark:hover:text-white hover:bg-amber-500 hover:dark:border-dark-300 hover:border-amber-300 w-10 h-10"
                  >
                    <i className="ri ri-heart-line"></i>
                  </button>
                ) : (
                  <button
                    className="btn border ml-2  relative z-10 rounded-full bg-amber-500 border-amber-300 dark:bg-dark-300 transition-all hover:bg-transparent hover:text-amber-500 dark:hover:text-white hover:border-amber-300 w-10 h-10"
                  >
                    <i className="ri ri-heart-fill"></i>
                  </button>
                )}
                {/* ========> */}
              </li>
            );
          })
        ) : (
          <VerticalLoader />
        )}
      </ul>
    </section>
  );
};
