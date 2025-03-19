import React from 'react'
import logo from '../assets/logo.png'
import { IoAddSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <>

    <div>

        <nav className='w-full min-h-auto flex flex-wrap justify-between place-items-center items-center  min-h-auto'>
            <div className='img'>
                <img src= {logo} alt='logo image' className='w-30 m-1'/>
            </div>
            <div className='max-sm:hidden max-lg:hidden'>
                <ul className='flex flex-wrap capitalize'>
                    <li>home</li>
                    <li>about</li>
                    <li>members</li>
                    <li>properties</li>
                    <li>contact</li>
                </ul>
            </div>
            <div>
                <button className='flex  place-items-center items-center m-4 capitalize text-center'><IoAddSharp className='IoAddSharp' /> create</button>
            </div>
        </nav>

    </div>
      
    </>
  )
}

export default NavBar
