import React from "react";

export default function ServiceingWork() {
  const Data = [
    {
      image:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=300",
      Name: "Jhon",
      Phone: "927848291",
    },
    {
      image:
        "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=300",
      Name: "Adam",
      Phone: "927848291",
    },
    {
      image:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=300",
      Name: "Michel",
      Phone: "927848291",
    },
    {
      image:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=300",
      Name: "Andrew",
      Phone: "927848291",
    },
    {
      image:
        "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=300",
      Name: "Andrew",
      Phone: "927848291",
    },
    {
      image:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=300",
      Name: "Andrew",
      Phone: "927848291",
    },
  ];

  return (
    <div className="flex items-center space-x-5 ml-3.5 py-7 overflow-x-scroll">
      {Data.map((item, i) => {
        return (
          <>
            <div
              key={i}
              className="shadow-xl px-14 py-7 space-y-4 border-[1px] border-stone-800"
            >
              <img
                src={item.image}
                className="rounded-full w-14 h-14 objectcover"
                alt={item.Name}
              />
              <div className="space-y-3 text-center">
                <h1 className="text-xl font-bold text-yellow-500">
                  {item.Name}
                </h1>
                <p className="text-sm text-slate-300 brightness-90">
                  {item.Phone}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
