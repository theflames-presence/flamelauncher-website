import React, { useState } from 'react';
import Download from './Download';
import { div } from 'framer-motion/client';

const Popup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div>
            {/* Button to open the popup */}
            <button
                onClick={openPopup}
                className="inline-flex items-center bg-primary py-1 px-3 focus:outline-none hover:bg-gprimary rounded-xl boxshadow text-white mt-4 md:mt-0"
            >
                Download
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>

            {/* Popup Content */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-opacity-0 flex justify-center items-center z-50 ">
                    <div className="shadow-lg text-center bg-[#050011] rounded-[6rem] p-5">
                        <section className="">
                            <Download />
                        </section>
                        <button
                            onClick={closePopup}
                            className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-600 absolute top-[80vh] left-[47.1vw]"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;
