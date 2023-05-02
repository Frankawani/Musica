import React, { useState, useContext } from "react";
import musicContext from "../../store/context";
import Link from "next/link";
import { Logo } from "../Icons";

export const Nav = () => {
  let { history, setHistory, rmHistory, toggleNav, navOpen } =
    useContext(musicContext);

  let [input, setInput] = useState("");

  const getInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  const submit = (e) => {
    e.preventDefault();
    setHistory(input);
    // Clear Input
    setInput("");
  };

  const [isFocused, setFocus] = useState(false);

  return (
    <nav className="header-navigation top-0 w-full left-0 backdrop-blur-xl from-slate-50 dark:to-transparent dark:from-black px-2 py-3 flex items-center z-50 sticky">
      <button
        onClick={toggleNav}
        className={`btn block p-2 rounded-md group relative visible z-10  lg:absolute lg:invisible lg:-z-10`}
      >
        <span
          className={`w-5 h-1 bg-warmGray-300 rounded-md block transition-all mb-1 ${
            navOpen && "rotate-45 translate-y-2 "
          }`}
        ></span>
        <span
          className={`w-5 h-1 bg-warmGray-300 rounded-md block transition-all ${
            navOpen && "-rotate-45"
          }`}
        ></span>
      </button>

      <div className="nav-brand">
        <div className="main_nav_header_two_logo_box dark:bg-black w-full p-3 rounded-md">
          <Logo />
        </div>
      </div>
      <div className="navBar-content ms-3 ml-3 ps-4  box-border">
        {/* ====Search Input ===== */}
        <form className="group rounded-md dark:bg-black relative flex items-center" onSubmit={submit}>
          <button className="btn absolute top-2 text-slate-500 px-3">
            <i className="ri-search-line"></i>
          </button>

          <input
            className="bg-transparent w-full focus:outline-none appearance-none border-transparent text-sm leading-6 text-slate-20 dark:placeholder-slate-500 focus:border-slate-800  rounded-md py-2 pl-10"
            type="search"
            aria-label="Filter projects"
            placeholder="Search Artist"
            value={input}
            onChange={getInput}
            onClick={() => setFocus(!isFocused)}
          />
        </form>
        {/* ======/End=== */}

        {/* =======.Result Container ======= */}
        <div
          className={`search-result-container w-full box-border bg-slate-50 dark:bg-dark-200 min-h-full w shadow-md right-0 max-w-7xl absolute transition-all top-20 p-5 rounded-md  sm:max-w-full ${
            isFocused ? "opacity-100 visible z-10" : "-z-10 opacity-0 hidden"
          } `}
        >
          {/* =====History Sector========= */}
          <div
            className={`search-history ${
              input.trim().length === 0 ? "visible -z-10" : "invisible z-10"
            }`}
          >
            <div className="top-header flex place-items-center  justify-between py-2">
              <h4 className="text-sm">Search History</h4>
              <button
                className="btn text-sm"
                onClick={() => {
                  setHistory([]);
                }}
              >
                clear all
              </button>
            </div>
            <div className="history-items-container mt-3  flex items-center flex-wrap">
              {history.map((item) => (
                <div
                  className="history-item items-center  rounded my-2 bg-slate-200 dark:bg-slate-800 flex px-3 py-1 mr-3"
                  key={item}
                >
                  <span
                    className="text-sm cursor-pointer"
                    onClick={() => setInput(item)}
                  >
                    {item}
                  </span>
                  <button
                    className="btn hover:text-orange"
                    onClick={() => rmHistory(item)}
                  >
                    <i className="ri ri-close-line ml-2"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* =======/End===== */}
        </div>
        {/* ========/End======= */}
      </div>
    </nav>
  );
};
