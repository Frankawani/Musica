import React from "react";
import Head from "next/head";
import { useState } from "react";
import { Collections, Likes, Playlist } from "../../components";
import { motion } from "framer-motion";

const Collection = () => {
  const [tabs, setTabs] = useState([
    { name: "My collection", active: true },
    { name: "likes", active: false },
  ]);
  const toggleTab = (id) => {
    tabs.find((item, i) => {
      // Reset state
      item.active = false;
      if (id === i) {
        item.active = !item.active;
        setTabs([...tabs]);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Musica - Collection</title>
        <meta
          name="description"
          content="Get Your Musica favourite collections from this list"
        />
      </Head>

      <header className="p-2" id="Tabs">
        <div className="tab-group flex items-center gap-5">
          {tabs.map((tab, i) => (
            <button
              onClick={() => toggleTab(i)}
              key={tab.name}
              className={`btn p-2 capitalize px-3 text-sm rounded-3xl border transition-all hover:dark:text-white border-amber-300 text-amber-400 ${
                tab.active && "bg-amber-300 text-dark-100 font-medium"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </header>

      <main className="container-fluid w-full py-5 sm:px-3 lg:px-0">
        {tabs.map((tab) => {
          if (tab.active) {
            return tab.name === "likes" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                <Likes key={tab.name} /> <br />
                <Playlist
                  playlist={[]}
                  />
                  </motion.div>
            ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Collections key={tab.name} />
                </motion.div>
            );
          }
        })}
      </main>
    </>
  );
};

export default Collection;
