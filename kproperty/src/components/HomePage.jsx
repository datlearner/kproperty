import React from 'react'
import '../styles/homepage.css'
import NavBar from './NavBar'

const HomePage = () => {

  return (
    <>

    <div className='homepage'>

        <div className='transparent'>

            <NavBar />

            <section className='section'>
              <div className='w-full'>
                <h4 className='text-center text-white font-medium'>IT’S GREAT TO BE HOME!</h4>
                <h1 className='text-6xl font-bold text-white max-sm:text-3xl text-center '>Find Your Perfect Home</h1>
                <ul className='text-center flex justify-center capitalize font-medium mx-5
                '>
                  <li>rent</li>
                  <li>rent</li>
                  <li>rent</li>
                </ul>
                <form className=''>
                            
                   <input type='text' name = 'text' placeholder='property type' />
                   <input type='text' name = 'text' placeholder='all cities' />
                   <input type='text' name = 'text' placeholder='enter keywords' />
                   <button  className='btn' type='submit' >Search</button>
                  
                </form>
                </div>
            </section>

        </div>

    </div>
      
    </>
  )
}

export default HomePage
