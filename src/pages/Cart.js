import React, { useEffect, useState } from "react";
import { img9 } from "../images/index";
import { Navbar, Sidebar } from "../compo";
export default function Cart() {
  const [Cartitem, setCartitem] = useState([]);
  const data = JSON.parse(localStorage.getItem("Cart"));
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Cart"));
    if (data !== null) {
      setCartitem(data);
      localStorage.setItem("CartCount", data.length);
    }
  }, []);
  const [isshow, setisshow] = useState(false);
  return (
    <div className="bg-[#15191c] w-screen h-screen">
      <Navbar isshow={isshow} setisshow={setisshow} />
      {isshow ? <Sidebar isshow={isshow} setisshow={setisshow} /> : null}
      <div className="grid grid-cols-2 gap-5 p-2.5 my-4">
        {Cartitem?.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div className="p-4  shadow-xl border-[1px] border-stone-800 space-y-4">
                  <img
                    src={item.image}
                    className="max-w-[35vw] mx-auto"
                    alt="services"
                  />
                  <h1 className="text-center text-white font-bold">
                    {item.Name}
                  </h1>
                  <div className="flex flex-col space-y-3 justify-center">
                    <button className="bg-yellow-500 brightness-90 text-sm text-white px-10 py-2.5">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        {data === null ? (
          <>
            <div className="text-center">
              <img src={img9} className="ml-24 my-10" alt="" />
              <p className=" w-[70vw] text-lg font-semibold text-yellow-500">
                opps! your cart is empty
              </p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
