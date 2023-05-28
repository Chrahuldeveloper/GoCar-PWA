import React, { useEffect, useRef } from "react";
export default function Slider() {
  const ref = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      ref.current.scrollLeft += window.innerWidth - 3;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const Data = [
    {
      image: "https://stimg.cardekho.com/images/uploadimages/1685080683536/01_Altroz-icng_CD-MasterHead-Desktop_1686x548px.jpg",
    },
    {
      image: "https://stimg.cardekho.com/images/uploadimages/1685080696481/01_Hyundai-Exter_CD-MasterHead-Desktop_1686x548px.jpg",
    },
    {
      image: "https://stimg.cardekho.com/images/uploadimages/1685080683536/01_Altroz-icng_CD-MasterHead-Desktop_1686x548px.jpg",
    },
  ];

  return (
    <div className="my-6">
      <div
        ref={ref}
        className="flex scroll-smooth overflow-x-scroll space-x-5 ml-3 "
      >
        {Data.map((item, i) => {
          return (
            <>
              <div key={i} className="shadow-lg ">
                <img src={item.image} className="max-w-[95vw]" alt="slider" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
