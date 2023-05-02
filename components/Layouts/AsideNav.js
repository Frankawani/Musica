import { useContext } from "react";
import { useRef } from "react";
import Link from "next/link";
import Style from "./style.module.css";
import musicContext from "../../store/context";
import {
  HomeIcon,
  LibraryIcon,
  RadioIcon,
  VideoIcon,
  ExitIcon,
  AvatarIcon,
} from "../Icons";
import { useRouter } from "next/router";

export const AsideNav = () => {
  const links = useRef([
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon className="dark:fill-slate-400 fill-warmGray-600" />,
    },
    {
      name: "My collection",
      href: "/collection",
      icon: <LibraryIcon className="dark:fill-slate-400 fill-warmGray-600" />,
    },
    {
      name: "Radio",
      href: "/radio",
      icon: <RadioIcon className="dark:fill-slate-400 fill-warmGray-600" />,
    },
    {
      name: "Music Video",
      href: "/music_video",
      icon: <VideoIcon className="dark:fill-slate-400 fill-warmGray-600" />,
    },
  ]);
  const { toggleNav, navOpen } = useContext(musicContext);
  const router = useRouter();
  return (
    <section
      className={`lg:mt-5 transition-all lg:w-auto lg:sticky lg:top-20 lg:z-40 lg:visible  rounded-md fixed overflow-hidden  left-0 top-20 max-w-xs h-full dark:bg-black bg-slate-50 lg:bg-transparent ${
        navOpen ? "z-50 visible w-72" : "-z-40 invisible w-0"
      }`}
    >
      <div className="col">
        <ul
          className={`lg:dark:bg-dark-200 lg:bg-slate-50 lg:shadow-md aside-lists block lg:rounded-full lg:mb-10 lg:ml-2`}
        >
          {links.current.map((link) => {
            return (
              <li
                className={`list-none hover:bg-warmGray-100 hover:dark:bg-warmGray-800 first:lg:rounded-t-full last:lg:rounded-b-full ${
                  router.pathname == link.href &&
                  "text-amber-300 dark:bg-warmGray-800 bg-warmGray-100 " +
                    Style.linkActive
                } ${Style.asideListItem}`}
                key={link.name}
                title={link.name}
                onClick={toggleNav}
              >
                <Link href={link.href}>
                  <a
                    className={`list-item-line flex items-center gap-5 p-5  hover:text-amber-300`}
                  >
                    {link.icon}
                    <span className="text lg:hidden">{link.name}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>

        <ul
          className={`lg:dark:bg-dark-200 lg:bg-slate-50 lg:shadow-md block lg:rounded-full lg:mb-7 ml-2 `}
        >
          <li
            className={`list-none hover:bg-warmGray-100 hover:dark:bg-warmGray-800  ${Style.asideListItem} lg:rounded-t-full`}
          >
            <a
              href="#"
              className="list-item-line flex items-center gap-5 p-5 hover:text-amber-300 "
            >
              <AvatarIcon className="dark:fill-slate-400 fill-warmGray-600" />
              <span className="text lg:hidden ">Profile</span>
            </a>
          </li>

          <li
            className={`list-none hover:bg-warmGray-100 hover:dark:bg-warmGray-800 rounded-sm lg:rounded-b-full ${Style.asideListItem}`}
          >
            <a
              href="#"
              className="list-item-line flex items-center gap-5 p-5 hover:text-amber-300"
            >
              <ExitIcon className="dark:fill-slate-400 fill-warmGray-600" />
              <span className="text lg:hidden">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
