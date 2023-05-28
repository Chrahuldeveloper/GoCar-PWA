import React from "react";

export default function Brands() {
  const Data = [
    {
      image:
        "https://drive.ackoassets.com/prod-new/next_assets/ccc2aff2ab3e725829a40803d1d093b865c56bf6/_next/static/images/tata-logo-ef92f8ca78be72ec20544a1e4a614750.png",
      Name: "Tata",
    },
    {
      image:
        "https://drive.ackoassets.com/prod-new/next_assets/ccc2aff2ab3e725829a40803d1d093b865c56bf6/_next/static/images/suzuki-logo-e0dbe2670181f36083bef8c646c6fc45.png",
      Name: "Suzuki",
    },
    {
      image:
        "https://drive.ackoassets.com/prod-new/next_assets/ccc2aff2ab3e725829a40803d1d093b865c56bf6/_next/static/images/hyundai-logo-1e4230b8c7f8f36d12ba237a5e216213.png",
      Name: "Hyundai",
    },
    {
      image:
        "https://drive.ackoassets.com/prod-new/next_assets/ccc2aff2ab3e725829a40803d1d093b865c56bf6/_next/static/images/mahindra-sport-utility-vehicle-0fc84036ecb3064f14087dbc2f3f34f5.png",
      Name: "Mahindra",
    },
    {
      image:
        "https://drive.ackoassets.com/prod-new/next_assets/ccc2aff2ab3e725829a40803d1d093b865c56bf6/_next/static/images/toyota-logo-409e28133772d8905f314e56888ffa2a.png",
      Name: "Toyota",
    },
    {
      image:
        "https://drive.ackoassets.com/prod-new/next_assets/ccc2aff2ab3e725829a40803d1d093b865c56bf6/_next/static/images/honda-logo-e495e583193e5b5e3729c364d6b6faa8.png",
      Name: "Honda",
    },
  ];

  return (
    <div className="grid grid-rows-2 grid-cols-3 place-items-center justify-center gap-5">
      {Data?.map((item, index) => {
        return (
          <React.Fragment               key={index}
>
            <div
              className="space-y-1 flex flex-col justify-center items-center"
            >
              <img src={item.image} className="max-w-[20vw] " alt="Brand" />
              <p className="text-slate-300 brightness-90 font-semibold">
                {item.Name}
              </p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
