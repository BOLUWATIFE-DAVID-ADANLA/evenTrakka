import React from 'react'
import hamburger from '../assets/Vector.png'

const Navbar = () => {
  return (
    <div className=' flex justify-between px-10 items-center shadow-lg lg:px-20 '>
        {/* logo text */}
        <h2 className='text-[20px] text-primary  lg:text-[36px] font-poppins logopadding'>Eventtrakka</h2>
        {/* hamburger imgae that hides on large screens  */}
        <div className='pt-5 pb-5'> <img src={hamburger} alt=""  className="h-5 w-6  lg:hidden "/></div>
       

        {/* nav items that show up on large screens  */}
        <div className='hidden lg:flex lg:gap-10 xl:gap-20 font-poppins navPadding'>
            <a href="">Home</a>
            <a href="">events</a>
            <a href="">community</a>
            <a href="">about</a>
            <a href="">login</a>

        </div>
    </div>
  )
}

export default Navbar