import { useState, useRef } from "react";
export const HorizontalLoader = () => {
  const [itemLength, setItemLength] = useState([1, 2, 3, 5, 6]);

  return (
    <div className="relative overflow-hidden justify-between flex ">
      {itemLength.map((i) => {
        return (
          <div className="block group flex-1 mx-5 flex-shrink-0" key={i}>
            <div className="group-item-h h-40 rounded-3xl w-40 bg-warmGray-200 animate-pulse dark:bg-gray-dark relative overflow-hidden"></div>
          </div>
        );
      })}
    </div>
  );
};

export const VerticalLoader = () => {
  const vert = useRef([1, 2, 3]);

  return (
    <ul className="list overflow-y-auto py-4" style={{ maxHeight: "450px" }}>
      {vert.current.length > 0
        ? vert.current.map((e, i) => {
            return (
              <li
                key={i}
                className="py-3 px-5 mb-3 bg-slate-50 dark:bg-dark-100 w-full flex flex-wrap lg:flex-nowrap relative list-none items-center justify-between rounded-xl pointer-events-none overflow-hidden transition ease-linear"
              >
                {/* =====Image & COntent-section===== */}
                <div className="content-section flex flex-wrap lg:flex-nowrap items-center gap-4 relative z-10">
                  <div className="img-thumb animate-pulse  w-14 h-14 delay-75 rounded-xl bg-gray-light dark:bg-gray-dark mr-1 group-hover:dark:bg-warmGray-400 group-hover:delay-200 "></div>

                  <div className="txt-content">
                    <h3 className="dark:bg-dark-300 bg-slate-300 rounded-md delay-150 animate-pulse w-20 h-4 mb-3"></h3>
                    <p className="dark:bg-dark-300 animate-pulse rounded-md bg-slate-300 decoration-lime-200 w-36 h-4 text-sm mb-3"></p>
                    <p className="duration text-sm h-4 w-10 rounded-md animate-pulse dark:bg-dark-300 bg-slate-300"></p>
                  </div>
                </div>
                {/* ======/End */}

                {/* =====Button======= */}
                <button className="btn ml-2  relative z-10 rounded-full dark:bg-dark-300 bg-slate-300 transition-all animate-pulse w-10 h-10"></button>
                {/* ========> */}
              </li>
            );
          })
        : ""}
    </ul>
  );
};
