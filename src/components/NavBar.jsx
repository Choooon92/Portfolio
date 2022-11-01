import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


const NavBar = () => {

  const links =[ 
    {
      id: 1,
      link: "Home",
      linkear: "home"
    },
    {
      id: 2,
      link: "About",
      linkear: "about"
    },
    {
      id: 3,
      link: "Skills",
      linkear: "skills"
    },
    {
      id: 4,
      link: "Works",
      linkear: "work"
    },
    {
      id: 5,
      link: "Contact",
      linkear: "contact"
    },

  ]



  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300'>
      
      {/* menu */}
         <ul className='hidden md:flex'>

          {links.map(({ id, link, linkear}) => (

            <li key={id} >
              <Link to={linkear} smooth={true} duration={500} >
                {link}
              </Link>
            </li>

          ))}
         </ul>

          
      {/* desplegable */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

        {/* menu mobile */}
          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>

        {links.map(({ id, link, linkear  }) =>(
          
           <li key={id} className='py-6 text-4xl'>
              <Link onClick={handleClick} to={linkear} smooth={true} duration={500} >
                {link}
              </Link>
            </li>
        ) )}
          </ul>


             
    </div>
  )
}

export default NavBar