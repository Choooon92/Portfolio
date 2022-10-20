import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-8'>
      <form method='POST' action='https://getform.io/f/db7a1531-cc90-435a-9003-b0c08f15b4b6' className='flex flex-col max-w-[600px] w-full '>
        <div className='pb-1 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4 '>Completa el formulario o enviame un email - javi_arc@hotmail.com</p>
        </div>
        <input className='p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name' required/>
        <input className='my-4 p-2 bg-[#ccd6f6] ' type='email' placeholder='Email' name='email' required/>
        <textarea className='p-2 bg-[#ccd6f6]' name='message' rows='10' placeholder='Message' required></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-4 mx-auto flex items-center' formTarget='_blank'>Send message</button>
    
      </form>
    </div>
  )
}

export default Contact
