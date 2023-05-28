import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import img10 from "../images/img10.png";
export default function CarInsurance() {
  return (
    <>
      <div className="w-screen h-screen bg-[#15191c]">
        <div className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={img10} alt="" className="max-w-xs mx-auto" />
          <div className="text-center space-y-5 text-white ">
            <h1 className="font-semibold text-4xl">Switch to india's Best</h1>
            <h1 className="font-semibold text-3xl">Digital Insurance Brand</h1>
            <p className="font-light text-lg">Upto 70% off on car insurance</p>
          </div>
          <div className="flex items-center my-7 ml-6">
            <input
              type="text"
              className="p-3.5 rounded-lg w-[70vw] outline-none"
              placeholder="Enter Your Car Number"
            />
            <button>
              <BiRightArrowAlt
                size={10}
                color="white"
                className="bg-green-500 w-14 h-14 p-3.5 rounded-r-lg -translate-x-10"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
