import React from "react";
import hamburgerIcon from "../assets/Vector.png";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[23px] pb-[10px] pt-[10px] lg:pl-[90px] lg:pr-[50px] shadow-lg">
      {/* text logo */}
      <h2 className="text-primary text-[20px] lg:text-[36px] ">Eventtrakka</h2>
      {/* hamburger menu */}
      <div className="lg:hidden">
        <img src={hamburgerIcon} />
      </div>

      {/* nav items that show up on large screens */}
      <div className="hidden lg:flex gap-[80px] pb-[31px] pt-[20px] ">
        <a href="">Home</a>
        <a href="">events</a>
        <a href="">community</a>
        <a href="">about</a>
        <a href="">login</a>
      </div>
    </div>
  );
};

export default Navbar;

const navstyling = "hidden lg:flex lg:gap-10 xl:gap-20 font-poppins navPadding";
