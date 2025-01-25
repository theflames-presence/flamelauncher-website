import { useState, useEffect } from 'react';
import './Download.css';
import { NavLink } from "react-router-dom";

const Download = () => {
    const [toggleState, setToggleState] = useState(1);

    const [win64, setWin64] = useState('');
    const [win32, setWin32] = useState('');

    const [linuxAmd, setLinuxAmd] = useState('');
    const [linuxArm, setLinuxArm] = useState('');

    const toggleButton = (index) => {
        setToggleState(index);
    }

    // Fetching API of download latest version
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/aislxflames/flame-launcher/releases/latest');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error in fetch API', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (data.assets && data.assets[0]) {
            setWin64(data.assets[1].browser_download_url);
            setWin32(data.assets[0].browser_download_url);

            setLinuxAmd(data.assets[2].browser_download_url);
            setLinuxArm(data.assets[3].browser_download_url);
        }
    }, [data]);

    // Scroll to top when the '/versions' route is visited
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-[40rem]'>
            <div className="dbuttons flex justify-center">
                <div
                    onClick={() => toggleButton(1)}
                    className={toggleState === 1 ? "download-active" : "download-btns"}>
                    <img className='h-10' src="svg/windows.svg" alt="" />
                    <button className='text-4xl ml-2'>Windows</button>
                </div>
                <div
                    onClick={() => toggleButton(2)}
                    className={toggleState === 2 ? "download-active" : "download-btns"}>
                    <img className='h-10' src="svg/linux.svg" alt="" />
                    <button className='text-4xl ml-2'>Linux</button>
                </div>
                <div
                    onClick={() => toggleButton(3)}
                    className={toggleState === 3 ? "download-active" : "download-btns"}>
                    <img className='h-10' src="svg/macos.svg" alt="" />
                    <button className='text-4xl ml-2'>macOs</button>
                </div>
            </div>

            <div className={toggleState === 1 ? "content flex-col mt-8 flex" : "hidden"}>
                <h1 className='mb-5 text-center text-3xl font-bold'>Download latest version of flame launcher for Windows!</h1>
                <p className='w-[40rem] text-center mx-auto mb-10'>
                    Flame Launcher offers a fast, customizable way to organize and launch applications on your Windows system. Enhance your workflow with ease. Try it now!
                </p>
                <span className='text-center'>
                    <a href={win64}>
                        <button className='p-3 dark:bg-gradient-to-tr from-[red] to-[#ff002b] outline-0 rounded-full text-xl font-bold hover:shadow-[0_0_25px_red,0_0_40px_red]'>Download.exe x64</button>
                    </a>
                    <span className='text-2xl mx-2'>
                        or
                    </span>
                    <a href={win32}>
                        <button className='p-3 bg-slate-700 hover:bg-slate-900 outline-0 rounded-full text-xl font-bold'>Download.exe x32</button>
                    </a>
                </span>
                <span className='text-center mt-5'>
                    <NavLink to='/versions'>
                        <button className='p-3 bg-slate-700 hover:bg-slate-900 outline-0 rounded-full text-xl font-bold'>Show more versions</button>
                    </NavLink>
                </span>
            </div>

            <div className={toggleState === 2 ? "content flex-col mt-8 flex" : "hidden"}>
                <h1 className='mb-5 text-center text-3xl font-bold'>Download latest version of flame launcher for your native Linux OS!</h1>
                <p className='w-[40rem] text-center mx-auto mb-10'>
                    Flame Launcher is a versatile Minecraft launcher developed by Aislx FlamEs, offering seamless multi-version support, customization, and enhanced performance.
                </p>

                <span className='text-center'>
                    <a href={linuxAmd}>
                        <button className='p-3 dark:bg-gradient-to-tr from-[red] to-[#ff002b] outline-0 rounded-full text-xl font-bold hover:shadow-[0_0_25px_red,0_0_40px_red]'>Download.deb Amd</button>
                    </a>
                    <span className='text-2xl mx-2'>
                        or
                    </span>
                    <a href={linuxArm}>
                        <button className='p-3 bg-slate-700 hover:bg-slate-900 outline-0 rounded-full text-xl font-bold'>Download.deb Arm</button>
                    </a>
                </span>
                <span className='text-center mt-5'>
                    <NavLink to='/versions'>
                        <button className='p-3 bg-slate-700 hover:bg-slate-900 outline-0 rounded-full text-xl font-bold'>Show more versions</button>
                    </NavLink>
                </span>
            </div>

            <div className={toggleState === 4 ? "content flex-col mt-20 flex" : "hidden"}>
                <h1 className='mb-5 text-center text-3xl font-bold'>Download latest version of flame launcher for macOS!</h1>
                <p className='w-[40rem] text-center mx-auto mb-20'>
                    Elevate your productivity on macOS with Flame Launcher. Designed for speed and customization, it lets you easily manage and launch your applications. Download Flame Launcher now and experience a smoother, more efficient workflow on your Mac!
                </p>

                <span className='text-center'>
                    <button className='p-3 dark:bg-gradient-to-tr from-[red] to-[#ff002b] outline-0 rounded-full text-xl font-bold hover:shadow-[0_0_25px_red,0_0_40px_red]'>Download.app amd64</button> or <button className='p-3 bg-slate-700 hover:bg-slate-900 outline-0 rounded-full text-xl font-bold'>Download.app arm64</button></span>
                <span className='text-center mt-5'>
                    <NavLink to='/versions'>
                        <button className='p-3 bg-slate-700 hover:bg-slate-900 outline-0 rounded-full text-xl font-bold'>Show more versions</button>
                    </NavLink>
                </span>
            </div>

            <div className={toggleState === 3 ? "content flex-col mt-20 flex" : "hidden"}>
                <h1 className='text-center font-bold text-3xl'>SUPPORT FOR MAC OS COMMING SOON! 😅</h1>
            </div>
        </div>
    )
}

export default Download;
