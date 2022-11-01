import React from 'react'

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import node from '../assets/node.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';
import postgres from '../assets/postgres.png';
import sequelize from '../assets/sequelize.png';


const Skills = () => {

  const tecnolgias = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500"
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 4,
      src: reactImg,
      title: "React",
      style: "shadow-blue-500"
    },
    {
      id: 5,
      src: node,
      title: "NODE",
      style: "shadow-green-300"
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500"
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400"
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-500"
    },
    {
      id: 9,
      src: sequelize,
      title: "Sequelize",
      style: "shadow-sky-400"
    },
    {
      id: 10,
      src: postgres,
      title: "Postgres",
      style: "shadow-sky-400"
    },
  ]


  return (

    <div name='skills' className='w-full md:h-auto bg-[#0a192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>Estas son las tecnologias que e aprendido</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>

          {tecnolgias.map(({ id, src, title, style }) => (

          <div key={id} className={`shadow-md  hover:scale-110 duration-500 pt-3 ${style}`}>
            <img className='w-20 mx-auto' src={src} alt={`${title} logo`} />
            <p className='my-6'>{title}</p>
          </div>

          ))}


        </div>
      </div>
    </div>
  )
}

export default Skills
