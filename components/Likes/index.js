import Image from "next/image";

export const Likes = () => {
  return (
    <div className="flex items-center flex-wrap gap-5">
      <div className="card cursor-pointer group overflow-hidden lg:w-52 lg:h-52 md:w-48 md:h-48 w-full h-60 rounded-2xl dark:bg-gray-dark bg-warmGray-200 relative flex-shrink-0">
        <Image
          src={"/images/artists/andre-sebastian-jNdK3CCH5D8-unsplash.jpg"}
          layout="fill"
          priority
          alt="user album"
          className="transition-all object-cover group-hover:scale-110 delay-75 object-center"
        />

        <div className="card-footer absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-dark dark:from-dark-100 to-transparent flex items-end justify-between p-3 overflow-hidden">
          <div className="transition flex items-center justify-between w-full delay-100 group-hover:-translate-y-2">
            <div>
              <h3
                className="font-medium dark:text-warmGray-300
                 text-white"
              >
                Limits
              </h3>
              <p className="dark:text-warmGray-300 text-white text-sm">
                Johnny Walker
              </p>
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
    </div>
  );
};
