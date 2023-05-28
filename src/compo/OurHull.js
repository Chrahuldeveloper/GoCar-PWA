import React from "react";
import { Brands } from "./index";

export default function OurHull({ Tittle }) {
  return (
    <>
      <div className="p-4 my-6">
        {Tittle ? (
          <h1 className="text-2xl text-white font-bold">
            <span className="text-yellow-500 text-2xl ">{Tittle}</span>
          </h1>
        ) : (
          <h1 className="text-2xl font-bold text-white">
            Our <span className="text-yellow-500 text-2xl">Hall</span>
          </h1>
        )}
      </div>
      <Brands />
    </>
  );
}
