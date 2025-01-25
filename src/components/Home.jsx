import React from "react";
import { Link } from 'react-scroll';
import check from "/src/assets/check.svg";
import SlideTabs from "./SlideTabs";
import Card from "./Card";
import Download from "./Download";
import Popup from "./Popup";
import { NavLink } from "react-router-dom";


const Home = () => {

  return (
    <div className="Home">
      <section className="text-font body-font mt-[-7rem] dark:bg-gradient-to-tr dark:from-bg dark:to-primary/80 bg-gradient-to-tr from-[#c229ff] to-[#028091]">
        <div className="container mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-6">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-font">
              The Minecraft Launcher
              <br className="hidden lg:inline-block font-[1000]" />
              <span className="text-7xl text-gprimary">Flame Launcher</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Flame Launcher (FMCL) is a modern Minecraft launcher that lets you
              manage your massive resources like modpacks, resource packs, mods,
              shader packs… It also has integration with Minecraft Forge,
              Fabric, Quilt, CurseForge and Modrinth.
            </p>

            <div className="mb-12">
              <pre className="flex">
                <img src={check} alt="" /> Fabric support is now available
              </pre>
              <pre className="flex">
                <img src={check} alt="" /> Forge and Curseforge Support
              </pre>
              <pre className="flex">
                <img src={check} alt="" /> Modrinth Support is here
              </pre>
              <pre className="flex">
                <img src={check} alt="" /> Also other such as
                neoforge,optifine,quilt supported
              </pre>
            </div>
            <div className="flex justify-center">
              <Link
                to='section-download'
                smooth={true}
                duration={500}>
                <button className="inline-flex items-center bg-primary py-2 px-6 focus:outline-none hover:bg-gprimary rounded-xl boxshadow text-base mt-4 md:mt-0">
                  Download Now
                </button>
              </Link>
              <NavLink
              to='/versions'
              >
                <button className="inline-flex items-center dark:bg-slate-800 dark:hover:bg-slate-700 bg-gprimary/55 py-2 px-6 focus:outline-none hover:bg-gprimary/90 ml-5 dark:text-white rounded-xl  text-base mt-4 md:mt-0">
                  Show More Versions
                </button>
              </NavLink>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-3xl"
              alt="fmcl-image"
              src="images/image-1.png"
            />
          </div>
        </div>
      </section>

      <section className="container-2 flex justify-center dark:text-white">
        <div className="pt-40  dark:bg-slate-900 bg-white  pb-20 w-[100%]">
          <h1 className="text-5xl bold font-extrabold text-center">
            Make your Minecraft experience far better
          </h1>
          <h2 className="text-xl text-center pt-3">
            With our launcher you can get more far better experience to play
            minecraft
          </h2>
          <SlideTabs />
        </div>
      </section>

      <section className="bg-[#0c0b0b]">
        <div className="flex justify-center ">
          <Card
            icon="svg/version.svg"
            title="All versions available here"
            description="
Flame Launcher is a versatile Minecraft launcher offering seamless multi-version support, customization, and enhanced performance. Designed for enthusiasts, it simplifies managing mods, resource packs, and profiles, ensuring an optimized gaming experience for all Minecraft players."
            button="Show More Versions"
            link="/versions"
          />
          <Card
            icon="svg/discord.svg"
            title="Join our commmunity now"
            description="
Join the Flame Launcher Discord community and connect with Minecraft enthusiasts worldwide! Get exclusive updates, share tips, discuss mods, and enjoy a supportive space for troubleshooting and fun. Together, we create the ultimate Minecraft experience—join us now!"
            button="Join Now"
            link="https://discord.gg/fKuQYBNYxF"
            target="_blank"
          />
        </div>
        <div className="flex justify-center">
          <Card
            icon="svg/folder.svg"
            title="You can get our source code here"
            description="
Access the source code for Flame Launcher and explore its inner workings! Contribute to development, suggest improvements, or customize it to suit your needs. Join our open-source journey and help shape the future of Minecraft gaming experiences."
            button="Get Source Code"
            link="https://github.com/theflames-presence/flame-launcher"
            target="_blank"
          />

        </div>
      </section>

      <section className="section-download dark:bg-[#03020a] bg-[#f0aaaa]">
        <div className="flex  justify-center">
          <h1 className="text-6xl font-bold mt-20">Download Flame Launcher</h1>
        </div>
        <Download />
      </section>
    </div>
  )
}

export default Home;
