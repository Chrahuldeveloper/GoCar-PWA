import React, { useState } from "react";
import { Navbar, Sidebar } from "../compo";

export default function SpareParts() {
  const [searchTerm, setsearchTerm] = useState("");
  const [isshow, setisshow] = useState(false);
  const [items, setitems] = useState([]);

  const Data = [
    {
      image: "https://boodmo.com/assets/images/board/min/engine-1-v2.png",
      Name: "Engine",
    },
    {
      image: "https://boodmo.com/assets/images/board/min/engine-2-v2.png",
      Name: "Engine",
    },
    {
      image: "https://boodmo.com/assets/images/board/min/engine-3-v2.png",
      Name: "Engine",
    },
    {
      image:
        "https://boodmo.com/media/cache/catalog_image/images/categories/e8cb288.jpg",
      Name: "Clutch",
    },
    {
      image:
        "https://boodmo.com/media/cache/catalog_image/images/categories/1053d82.jpg",
      Name: "Wiper",
    },
    {
      image:
        "https://boodmo.com/media/cache/catalog_image/images/categories/90b7f49.jpg",
      Name: "Lights",
    },
    {
      image:
        "https://boodmo.com/media/cache/catalog_image/images/categories/437bfd0.jpg",
      Name: "Brake",
    },
    {
      image:
        "https://boodmo.com/media/cache/catalog_image/images/categories/33d30ef.jpg",
      Name: "Filter",
    },
  ];

  console.log(setitems);
  const user = localStorage.getItem("user");

  return (
    <div className="bg-[#15191c] w-screen">
      <Navbar
        Search={true}
        isshow={isshow}
        setisshow={setisshow}
        searchTerm={searchTerm}
        setsearchTerm={setsearchTerm}
      />
      {isshow ? <Sidebar isshow={isshow} setisshow={setisshow} /> : null}
      <div className="grid grid-cols-2 gap-5 p-2.5 py-7">
        {Data?.filter((item) => {
          if (searchTerm === "") {
            return item;
          } else if (
            item.Name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return item;
          }
        }).map((item, i) => {
          return (
            <>
              <div key={i}>
                <div className="p-4 shadow-xl space-y-4">
                  <img
                    src={item.image}
                    className="max-w-[30vw] mx-auto"
                    alt="services"
                  />
                  <h1 className="text-center text-white font-bold">
                    {item.Name}
                  </h1>
                  <div className="flex justify-center">
                    <button
                      onClick={() => {
                        if (user !== null) {
                          items.push(item);
                          localStorage.setItem("Cart", JSON.stringify(items));
                        } else {
                          alert("Please Create Account");
                        }
                      }}
                      className="bg-yellow-500 brightness-90 text-[10px] font-bold text-white px-10 py-2.5"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
