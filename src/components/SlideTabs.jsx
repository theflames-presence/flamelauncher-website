import { useState, useEffect } from "react";
import { HiArchive, HiServer, HiShoppingCart } from "react-icons/hi";
import './SlideTabs.css'

const SlideTabs = (props) => {

  const [toggleState, setToggleState] = useState(1);

  const toggleBtn = (index) => {
    setToggleState(index)
  }

  const images = [
    {
      url: ""
    },
    {
      url: "images/image-3.png"
    },
    {
      url: "images/image-4.png"
    },
    {
      url: "images/image-7.png"
    },
  ]

  return (
    <div className="flex justify-center">
      <div className="mt-2 mx-auto justify-between">
        <button
          onClick={() => toggleBtn(1)}
          onMouseEnter={() => toggleBtn(1)}
          className={`tab-btn max-w-[29rem] font-bold w-96 ${toggleState === 1 ? "tab-btn-active" : ""
            }`}
        >
          <span className="text-[23px] block mb-2">
            <HiShoppingCart className="inline-block text-[30px] mr-2" />
            Built-in Modpack Store
          </span>
          <p className="text-left font-normal">
            Flame Launcher redefines modding with its built-in Modrinth and
            Forge store, offering seamless access, compatibility checks, and a
            vast mod library to enhance creativity and transform your gaming
            experience effortlessly.
          </p>
        </button>
        <button
          onClick={() => toggleBtn(2)}
          onMouseEnter={() => toggleBtn(2)}
          className={`tab-btn max-w-[29rem] font-bold w-96 ${toggleState === 2 ? "tab-btn-active" : ""
            }`}
        >
          <span className="text-[23px] block mb-2">
            <HiArchive className="inline-block text-[30px] mr-2" />
            All-Modloader Pre Installed
          </span>
          <p className="text-left font-normal">
            Flame Launcher integrates all major modloaders—Fabric, Forge,
            OptiFine, NeoForge, Quilt, and LabyMod—offering seamless mod access,
            compatibility checks, and effortless installations to enhance
            creativity and redefine your gaming experience.
          </p>
        </button>
        <button
          onClick={() => toggleBtn(3)}
          onMouseEnter={() => toggleBtn(3)}
          className={`tab-btn max-w-[29rem] font-bold w-96 ${toggleState === 3 ? "tab-btn-active" : ""
            }`}
        >
          <span className="text-[23px] block mb-2">
            <HiArchive className="inline-block text-[30px] mr-2" />
            Everything installer
          </span>
          <p className="text-left font-normal">
            Flame Launcher redefines modding with its built-in Modrinth and
            Forge store, offering seamless access, compatibility checks, and a
            vast mod library to enhance creativity and transform your gaming
            experience effortlessly.
          </p>
        </button>
        <div className="flex justify-center mt-5">
          <div className="w-[65rem] p-20 bg-gradient-to-bl from-[#230258] dark:from-[#830000] to-[#00000046] rounded-3xl">
              <img src={images[toggleState].url} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideTabs;
