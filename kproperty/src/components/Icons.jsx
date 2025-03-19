import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { BiSolidCarGarage } from "react-icons/bi";

const Icons = () => {
  return (
    <>

    <div className='icons flex justify-around place-items-center '>
        
        <p><IoBedOutline /><span className='try'>2 bed</span></p>
        <p><LiaBathSolid /><span className='try'>1 shower</span></p>
        <p><TfiRulerAlt2 /><span className='try'>250 sqft</span></p>
        <p><BiSolidCarGarage /><span className='try'>garage</span></p>
        
    </div>
    <div className='line'></div>
      
    </>
  )
}

export default Icons
