import React from "react";

const Button = ({ label, onClick, }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-White text-[12px]  px-[10px] py-[16px] rounded-lg lg:px-[24px] lg:py-[14px] mt-[20px] mb-[20px]">
      {label}
    </button>
  );
};

export default Button;
