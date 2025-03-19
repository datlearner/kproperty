import React from 'react'
import '../styles/product.css'
import Card from './Card'
import one from '../assets/one.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import helen from '../assets/helen.jpg'
import logo from '../assets/logo.png'
import kunn from '../assets/kunnn.jpg'


const Products = () => {
  return (
    <>

    <div className='product-container'>
    <h1 className='head text-center text-4xl font-bold'>Discover Our Featured Products</h1>
    <p className='ptag text-center'>Property is more than just land and buildings; it's an investment in your future</p>

      <div className='flexx'>

        <Card img={one} house={'Luxury Family Home'} address={'1739 Shanny St, CT  '} price={'R12 450'} profile={helen} />
        <Card img={three} house={'Kaalfontein Apartments'} address={'16 Tigerfish St, JB'} price={'R4 500'} profile={logo} />
        <Card img={four} house={'Allandale Apartments'} address={'1637 Kundai St, JB'} price={'R8 500'} profile={kunn} />
      </div>
    </div>
      
    </>
  )
}

export default Products
