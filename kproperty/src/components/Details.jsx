import React from 'react'
import '../styles/details.css'
import DetailsCard from './DetailsCard'
import { TbMessageChatbot } from "react-icons/tb";
import { LuHouse } from "react-icons/lu";
import { LuCalculator } from "react-icons/lu";
import { RiRoadMapLine } from "react-icons/ri";

const Details = () => {
  return (
    <>

    <div className='text'>

        <div className='flex flex-wrap justify-center place-content-center'>

        <DetailsCard icon={TbMessageChatbot} head={'trusted by thousands'} text={'with over 1 million + homes for sale on the website.Kproperty can match you with a houe you will want to call home'} />
        <DetailsCard icon={LuHouse} head={'wide range of properties'} text={'with over 1 million + homes for sale on the website.Kproperty can match you with a houe you will want to call home'} />
        <DetailsCard icon={LuCalculator} head={'financing made easy'} text={'with over 1 million + homes for sale on the website.Kproperty can match you with a houe you will want to call home'} />
        <DetailsCard icon={RiRoadMapLine} head={'see neighborhoods'} text={'with over 1 million + homes for sale on the website.Kproperty can match you with a houe you will want to call home'} />
        </div>

    </div>
      
    </>
  )
}

export default Details
