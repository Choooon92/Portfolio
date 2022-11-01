import React from 'react'
import '../index.css'
import Festival from '../assets/imgWorks/FestivalMusica.png'
import BlogCafe from '../assets/imgWorks/BlogCafe.png'
import TiendaFront from '../assets/imgWorks/TiendaFront.png'
import BienesRaices from '../assets/imgWorks/BienesRaices.png'
import FormularioCard from '../assets/imgWorks/FormularioCard.png'

const Works = () => {

  const portfolios = [
    {
      id: 1,
      src: Festival
    },
    {
      id: 2,
      src: BlogCafe
    },
    {
      id: 3,
      src: TiendaFront
    },
    {
      id: 4,
      src: BienesRaices
    },
    {
      id: 6,
      src: FormularioCard
    },
  ]

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Works</p>
          <p className='py-6'>Estos son algunos de mis proyectos mas recientes</p>
        </div>

        
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({id, src}) => (

              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img
                  src={src}
                  alt='Fest'
                  className='rounded-md duration-200 hover:scale-105'
                />

                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150 font-medium border-r-1'>Page</button>

                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150 font-medium'>Code</button>
                  
                </div>

              </div>

            ))}        
          </div>
      </div>
    </div>
  )
}

export default Works
