import React from "react";
import Button from "../widgets/Button";
import heroimgae from "../assets/images/Rectangle 49 (1).png";

const Herosection = () => {
  return (
    <div className="px-[20px] pt-[20px] flex flex-col lg:flex-row  lg:items-center lg:justify-between lg:px-[114px] lg:pt-[40px] items-center ">
      {/* cta text */}
      <div className=" text-center lg:text-left lg:w-[55opx] xl:w-[600px] lg:pr-[40px] ">
        {/* welcome to event trakka button */}
        <div className="bg-mountain px-[4px] py-[2px] text-center rounded-full mt-[20px] lg:w-[365px]">
          <h2 className="text-[12px] lg:text-[14px] xl:text-[18px] text-primaryLight font-bold">
            WELCOME TO EVENT TRACKER
          </h2>
        </div>

        {/* cta action first text  */}
        <div className="">
          <h2 className="text-[20px]  l:text[36px] xl:text-[56px] font-bold  mt-2 text-center lg:text-left">
            Seamless Event Management Made Effortless
          </h2>
        </div>

        {/* cta smaller text  */}
        <h6 className=" text-[12px] lg:text-[16px] xl:text-[18px] font-medium text-center lg:text-left mt-5">
          Getting Informations About Tech Event In Ekiti Just in One Place.
          All-in-one tech event resource
        </h6>

        {/* button */}
        <Button label={"See Upcoming Events"} />
      </div>

      <div className="">
        <img src={heroimgae} alt="" />
      </div>
    </div>
  );
};

export default Herosection;
const heromainstyle =
  "flex flex-col items-center h-screen px-4 lg:flex-row lg:items-center lg:justify-between lg:px-114px lg:pt-40px";
