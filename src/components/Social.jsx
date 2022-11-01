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
      href: '/public/CurriculumFS.docx',
      style: "rounded-br-md",
      download: true,
    },
  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

      {links.map(({ id, bracket, href, style, download}) => (

        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
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


// {/* redes sociales */}
// <div className='hidden lg:flex flex fixed flex-col top-[35%] left-0'>
// <ul>
//   <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
//     <a className='flex justify-between items-center w-full text-gray-300'
//     href='https://www.linkedin.com/in/javier-sebastian-leal-fullstack/' target='_blank'>
//       Linkedin <FaLinkedin size={30}/>
//     </a>
//   </li>
//   <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
//     <a className='flex justify-between items-center w-full text-gray-300'
//     href='https://github.com/Choooon92' target='_blank'>
//       Github <FaGithub size={30}/>
//     </a>
//   </li>
 
//   <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
//     <a className='flex justify-between items-center w-full text-gray-300'
//     href='https://docs.google.com/document/d/1Hhffwz6XhWRm7w3t6ctF_aO54kuYJj4hNxd76OZxxjw/edit?usp=sharing' target='_blank'>
//       Resume <BsFillPersonLinesFill size={30}/>
//     </a>
//   </li>
// </ul>

// </div>