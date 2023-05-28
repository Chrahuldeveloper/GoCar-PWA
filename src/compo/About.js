import React from "react";

export default function About() {
  const Data = [
    {
      Tittle: "Quality Accessories",
      Para: "we provide the wide range of accessories and internal parts of various automobiles.we provide the good quality.",
    },
    {
      Tittle: "Offers",
      Para: "we provide a wide range of offers to the users.:we provide every process to the door step of the user.",
    },
    {
      Tittle: "Visibility",
      Para: "we made sure to provide good visibility of all our projects with the latest technologies.we provide the good quality",
    },
  ];

  return (
    <>
      <div className="p-5 my-5">
        <h1 className="text-2xl font-bold text-white">
          Why <span className="text-yellow-500">Auto</span>Vortex ?
        </h1>
      </div>
      <div className="flex items-center space-x-5 ml-3.5 mb-3.5 overflow-x-scroll">
        {Data.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div
                key={i}
                className="shadow-xl p-5 space-y-4 border-[1px] border-stone-900"
              >
                <h1 className="text-xl font-bold text-yellow-500">
                  {item.Tittle}
                </h1>
                <p className="w-[60vw] text-sm text-slate-300 brightness-90">
                  {item.Para}
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
