import React from "react";
import { Card } from "./index";
export default function Category() {
  return (
    <>
      <div className="p-4 my-6">
        <h1 className="text-2xl text-white font-bold">
          Search by <span className="text-yellow-500">Category</span>
        </h1>
      </div>
      <Card />
    </>
  );
}
