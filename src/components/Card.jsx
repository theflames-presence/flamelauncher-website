import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const Card = (props) => {
    return (
        <div className='my-10 Card bg-[#f1b1b1] dark:bg-[#0f0f0f] w-[35rem] min-h-[10rem] rounded-3xl p-10 dark:text-white mx-5'>
            <div className="icon bg-gradient-to-br from-[#1d1414] to-black flex h-20 w-20 items-center justify-center rounded-3xl">
                <img className='text-5xl fill-white p-3' src={props.icon} alt="" />

            </div>
            <h1 className='text-3xl font-bold mb-5 mt-2'>{props.title}</h1>
            <p>
            {props.description}
            </p>

            <NavLink to={props.link} target={props.target}>
            <div className='bg-gradient-to-br dark:from-[#1d1414] dark:to-black from-[#ffbbbb] to-[#7359af] p-4 px-6 mt-10 inline-block rounded-3xl dark:hover:shadow-[0_0_25px_red] hover:shadow-[0_0_25px_purple] transition-all duration-300 group'>
                <button className='mr-2 group-hover:font-bold'>{props.button}</button>
                <FaArrowRightLong className='inline-block' />
            </div>
            </NavLink>
        </div>
    )
}

export default Card
