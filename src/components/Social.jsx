import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Social = () => {

  const links = [
    {
      id: 1,
      bracket: (
        <>
          LinkedIn <FaLinkedin size={30} /> 
        </>
      ),
      href: "https://www.linkedin.com/in/javier-sebastian-leal-fullstack/",
      style: "rounded-tr-md"
    },
    {
      id: 2,
      bracket: (
        <>
          GitHub <FaGithub size={30} /> 
        </>
      ),
      href: "https://github.com/Choooon92",
    },
    {
      id: 3,
      bracket: (
        <>
          Mail <HiOutlineMail  size={30} /> 
        </>
      ),
      href: 'mailto:javi_arc@hotmail.com' ,
    },
    {
      id: 4,
      bracket: (
        <>
          Cv <BsFillPersonLinesFill size={30} /> 
        </>
      ),
      href: '#',
      style: "rounded-br-md",
    },
  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

      {links.map(({ id, bracket, href, style, download}) => (

        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#8892b0]" + " " + style}>
          <a 
            href={href}
            className='flex justify-between items-center w-full text-white'
            download={download}
            target="_blank"
            rel='noreferrer'

            >
            {bracket}
          </a>
        </li>

      ))}
      </ul>
    </div>
  )
}

export default Social