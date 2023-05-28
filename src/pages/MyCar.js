import React, { useState } from "react";
import { Navbar, Sidebar, CarCondition, ServiceingWork } from "../compo";

export default function MyCar() {
  const [isshow, setisshow] = useState(false);

  const UserCar = {
    Car: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/7820/1675862859794/front-left-side-47.jpg?tr=w-264",
    CarName: "Maruti Suzuki Swift",
    PurchaseDate: "4/9/2022",
  };

  return (
    <div className="bg-[#15191c] w-screen ">
      <Navbar isshow={isshow} setisshow={setisshow} />
      {isshow ? <Sidebar isshow={isshow} setisshow={setisshow} /> : null}
      <div>
        <figure>
          <img
            src={UserCar.Car}
            className="mx-auto px-2.5 py-4 rounded-xl"
            alt="pic"
          />
        </figure>
        <div className="px-5 py-1.5 space-y-5">
          <h1 className="text-xl font-semibold text-yellow-500">
            {UserCar.CarName}
          </h1>
          <p className="text-sm font-bold text-white">
            <span className="font-semibold text-yellow-500">Purchase Date</span>{" "}
            : {UserCar.PurchaseDate}
          </p>
        </div>
      </div>
      <CarCondition />
      <div className="flex justify-center px-3 py-6 space-x-5 text-sm">
        <button className="py-3 font-semibold text-white bg-yellow-500 rounded-md px-14">
          Check Insurence
        </button>
        <button className="py-3 font-semibold text-white bg-yellow-500 rounded-md brightness-50 px-14">
          Claim Insurence
        </button>
      </div>
      <h1 className="text-xl font-semibold text-yellow-500 px-5 py-1.5">
        Recommeded Serivces
      </h1>
      <ServiceingWork />
    </div>
  );
}
