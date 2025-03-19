/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/details.css';

const DetailsCard = ({icon: Icon, head,text}) => {
  return (
    <>

    <div className='mycard'>

        <Icon size={40} className = 'iconss text-blue-500 text-center ' />
        <h1 className='text-white text-center capitalize font-bold'>{head}</h1>
        <p className='text-white text-center'>{text}</p>
        
    </div>
      
    </>
  )
}

export default DetailsCard
