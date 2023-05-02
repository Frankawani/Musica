import "../styles/globals.css";
import "../styles/output.css";
import "remixicon/fonts/remixicon.css";
// Import Swiper styles
import "swiper/css";
import { MusicStore } from "../store/context";
import { AsideNav, Player, Nav } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import Progressbar from "nextjs-progressbar";
import { useState } from "react";

function MyApp({ Component, pageProps, router }) {
  const [variants] = useState({
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  });

  return (
    <MusicStore>
      <Progressbar
        color="#fcd34d"
        startPosition={0}
        height={3}
        options={{ showSpinner: false }}
      />
      <Nav />
 
      <div className="lg:flex items-start">
        <AsideNav />
        <AnimatePresence mode={"wait"}>
          <motion.div
            initial="hidden"
            animate="visible"
            key={router.route}
            variants={variants}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <div className="w-full pb-28 min-h-full max-w-6xl px-4 mx-auto mb-auto relative">
              <Component {...pageProps} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <Player />
    </MusicStore>
  );
}

export default MyApp;
