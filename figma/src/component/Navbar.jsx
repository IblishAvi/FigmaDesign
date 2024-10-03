import React from 'react';





function Navbar() {
  return (
    <>
      <div className='h-10 bg-white flex w-full justify-between overflow-hidden '>
      <div className='w-24 h-10 '>
            <img className='w-24 pl-0' src="./images/Valle.png" alt="VALLE" />
      </div>
      <div className='w-32 h-10 flex justify-start'>
            <img className=' rounded-full' src="./images/img2.webp" alt="" />
            <select  className='h-10 align-baseline '>
                <option value="John Doe">John Doe</option>
            </select>
      </div>
    </div>
    </>
  
  )
}

export default Navbar
