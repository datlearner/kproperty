import React from 'react'
import Icons from './Icons'
import { CiHeart } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";

const Card = ({img, house, address, price, profile}) => {
  return (
    <>

    <div>



        <div className='card'>

            <div className='featured text-center capitalize'>
              <p>Featured</p>
            </div>
            <div className='featured second'>
              <p className='text-center capitalize'>for rent</p>
            </div>
            <div className='picc'>
              <img src={profile} />
            </div>
            <img src={img} alt='house' className='imgg' />
            <h1 className='hone font-bold'>{house}</h1>
            <p className='pp'>{address}</p>
            <Icons />
            <div className='price flex justify-between'>
            <h6>{price}</h6>
            <div className='myicons flex'>
              <CiHeart className='heart' />
              <IoAddOutline />
            </div>
            </div>
        </div>

    </div>
      
    </>
  )
}

export default Card
