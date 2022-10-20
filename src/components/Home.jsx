import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll/modules'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hola, mi nombre es</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Javier Leal</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy Desarrollador Full Stack</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] '>Me dedico al perfil FullStack, actualmente me encuentro cursando el BootCamp de "SoyHenry", me interesaria aprender python y mejorar mi backend, te invito a ver algunos proyectos!</p>

        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 '>
          <Link to="work" smooth={true} duration={500} >
              Works <HiArrowNarrowRight className='inline ml-3' />
          </Link>

          </button>
        </div>

      </div>


    </div>
  )
}

export default Home