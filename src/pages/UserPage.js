import React, { useState } from "react";
import { Navbar, OurHull, Sidebar } from "../compo/index";
export default function UserPage() {
  const [isshow, setisshow] = useState(false);
  const Data = [
    {
      image: "https://boodmo.com/media/images/slider/81a8fd7.webp",
    },
    {
      image: "https://boodmo.com/media/images/slider/9ee9164.webp",
    },
    {
      image: "https://boodmo.com/media/images/slider/9ee9164.webp",
    },
    {
      image: "https://boodmo.com/media/images/slider/9ee9164.webp",
    },
    {
      image: "https://boodmo.com/media/images/slider/d204979.webp",
    },
    {
      image: "https://boodmo.com/media/images/slider/db964ee.webp",
    },
  ];
  return (
    <div className="bg-[#15191c] w-screen ">
      <Navbar isshow={isshow} setisshow={setisshow} />
      {isshow ? <Sidebar isshow={isshow} setisshow={setisshow} /> : null}
      <div className="">
        <div className="p-4 my-3">
          <h1 className="text-2xl text-white font-bold">
            Latest{" "}
            <span className="text-yellow-500 text-2xl">Offers for you</span>
          </h1>
        </div>
        <div className="flex  overflow-x-scroll space-x-5 ml-3.5 ">
          {Data.map((item, i) => {
            return (
              <>
                <div key={i} className="shadow-lg ">
                  <img src={item.image} className="max-w-[80vw]" alt="" />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="p-4 my-3">
        <OurHull Tittle={"Buy a Car"} />
      </div>
      <div className="px-5 py-7">
        <h1 className="text-2xl font-bold text-white">
          Sell on<span className="text-yellow-500 text-2xl"> gocar</span>
        </h1>
      </div>
    </div>
  );
}
