import { useState, useContext, useEffect } from "react";
import musicContext from "../../store/context";
import Image from "next/image";
import Link from "next/link";

export const Collections = () => {
  const [collection, setCollection] = useState([]);
  const { getCollections } = useContext(musicContext);

  useEffect(() => {
    let e = setTimeout(() => {
      setCollection(getCollections());
    }, 100);
    return () => {
      clearTimeout(e);
    };
  }, [getCollections]);

  return (
    <div className="flex items-center flex-wrap gap-5">
      {collection && collection.length > 0 ? (
        collection.map((item, i) => (
          <div
            key={item?.title}
            className="card relative cursor-pointer group overflow-hidden lg:w-52 lg:h-52 md:w-48 md:h-48 w-full h-60 rounded-2xl dark:bg-gray-dark bg-warmGray-200 flex-shrink-0"
          >
            <Image
              src={item?.cover}
              layout="fill"
              alt={item?.title}
              className="transition-all object-cover group-hover:scale-110 delay-75 object-top lg:object-center"
              priority
              unoptimized
            />
            <div className="card-footer absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-dark dark:from-dark-100 to-transparent flex items-end p-3 overflow-hidden">
              <div
                className="transition w-full flex items-center justify-between delay-100 group-hover:-translate-y-2
                "
              >
                <div>
                  <Link href={{ pathname: "/album", query: { id: item?.id } }}>
                    <h3
                      className="font-medium dark:text-warmGray-300
                 text-white text-base"
                    >
                      {item?.title}
                    </h3>
                  </Link>
                </div>

                <button
                  type="button"
                  className="btn after:h-8 after:w-8 after:rounded-full after:border-2 after:border-amber-100 after:transition-all after:animate-ping after:absolute after:left-0 after:top-0 after:right-0 after:m-auto after:bottom-0  relative bg-amber-300 h-10 w-10 transition-all leading-5  text-white rounded-full flex-shrink-0 lg:translate-y-20 delay-75 lg:group-hover:translate-y-0"
                >
                  <i className="ri ri-play-fill"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className=" text-warmGray-500 text-center m-auto w-80 text-3xl py-20">
          No Album added to collections yets
        </h1>
      )}
    </div>
  );
};
