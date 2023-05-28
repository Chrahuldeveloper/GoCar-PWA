import React from "react";
import { img3 } from "../images/index";
import { Link } from "react-router-dom";
export default function Card() {
  const Data = [
    {
      image:
        "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-1.png?w=500",
      Para: "Buy Spare Parts,",
      Link: "/buyparts",
      size: true,
    },
    {
      image:
        "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-2.png?w=500",
      Para: "Cars for Sell",
      Link: "/car",
    },
    {
      image: img3,
      Para: "Buy Car Insurance",
      Link: "/insurance",
    },
    {
      image:
        "https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-1.png?w=500",
      Para: " Buy New Car",
      Link: "/car",
    },
  ];

  return (
    <div className="grid grid-cols-2 place-items-center justify-center gap-6 p-3.5">
      {Data.map((item, index) => {
        return (
          <div key={index} className="border-[1px] border-stone-900">
            <Link to={item.Link}>
              <div className="p-5 space-y-4 shadow-md">
                <img
                  src={item.image}
                  className={`${
                    item.size ? "max-w-[35vw]" : "max-w-[35vw]"
                  } mx-auto`}
                  alt="services"
                />
                <p className="text-sm font-semibold text-center text-white">
                  {item.Para}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
