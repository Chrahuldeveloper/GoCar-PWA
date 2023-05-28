import React, { useState } from "react";
import { Navbar, Sidebar } from "../compo";
import { useNavigate } from "react-router-dom";
export default function ViewCars() {
  const Data = [
    {
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X7/9462/1673948689052/front-left-side-47.jpg?impolicy=resize&imwidth=480",
      Company: "BMW",
      Name: "BMW X7",
      Price: "Rs.1.22 - 1.25 Cr*",
      Overview: "Diesel/Petrol 11.29 to 14.31 kmpl Automatic",
      images: [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/9462/1673948689052/front-left-side-47.jpg",
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/9462/1673948689052/side-view-(left)-90.jpg",
        "https://stimg.cardekho.com/images/carinteriorimages/930x620/BMW/X7/9462/1673948643661/door-view-of-driver-seat-51.jpg",
        "https://stimg.cardekho.com/images/carinteriorimages/930x620/BMW/X7/9462/1673948643661/sun-roof-moon-roof-81.jpg",
      ],
      About:
        "The exterior highlights include the large signature front kidney grille surrounded by chrome accents, newly designed front and rear bumpers, new LED headlamps, 3D taillamps with new inner graphics, and a connecting chrome bar covered by smoked glass. The BMW X7 is a seven-seater SUV.Inside, the cabin comes equipped with a sky lounge panoramic sunroof, 14-colour ambient lighting, a 12.3-inch infotainment system, a 14.9-inch driver display unit, a four-zone climate control, and a Harman Kardon surround sound system with 16 speakers.At the heart of the BMW X7 xDrive40i M Sport is a 3.0-litre six-cylinder gasoline engine belting out 376bhp and 520Nm of torque. On the other hand, the X7 xDrive40d M Sport gets a 3.0-litre six-cylinder diesel engine churning out 335bhp and 700Nm of peak torque. Both engines come mated with an eight-speed Steptronic transmission sending power to all the wheels via BMW’s xDrive all-wheel drive technology.",
      Contact: "8317680338",
    },
    {
      image: "https://ackodrive-assets.s3.amazonaws.com/media/test_VmILqdI.png",
      Company: "Honda",
      Name: "Amaze",
      Price: "Rs.11.11 L*",
      Overview: "Diesel/Petrol 11.29 to 14.31 kmpl Automatic",
      images: [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/9462/1673948689052/front-left-side-47.jpg",
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/9462/1673948689052/side-view-(left)-90.jpg",
        "https://stimg.cardekho.com/images/carinteriorimages/930x620/BMW/X7/9462/1673948643661/door-view-of-driver-seat-51.jpg",
        "https://stimg.cardekho.com/images/carinteriorimages/930x620/BMW/X7/9462/1673948643661/sun-roof-moon-roof-81.jpg",
      ],
      About:
        "The exterior highlights include the large signature front kidney grille surrounded by chrome accents, newly designed front and rear bumpers, new LED headlamps, 3D taillamps with new inner graphics, and a connecting chrome bar covered by smoked glass. The BMW X7 is a seven-seater SUV.Inside, the cabin comes equipped with a sky lounge panoramic sunroof, 14-colour ambient lighting, a 12.3-inch infotainment system, a 14.9-inch driver display unit, a four-zone climate control, and a Harman Kardon surround sound system with 16 speakers.At the heart of the BMW X7 xDrive40i M Sport is a 3.0-litre six-cylinder gasoline engine belting out 376bhp and 520Nm of torque. On the other hand, the X7 xDrive40d M Sport gets a 3.0-litre six-cylinder diesel engine churning out 335bhp and 700Nm of peak torque. Both engines come mated with an eight-speed Steptronic transmission sending power to all the wheels via BMW’s xDrive all-wheel drive technology.",
      Contact: "8317680338",
    },
    {
      image:
        "https://ackodrive-assets.s3.amazonaws.com/media/test_PlcdlL3.jpeg",
      Company: "Tata",
      Name: "Punch",
      Price: "Rs.11.02 L*",
      Overview: "Diesel/Petrol 11.29 to 14.31 kmpl Automatic",
      images: [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/9462/1673948689052/front-left-side-47.jpg",
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/9462/1673948689052/side-view-(left)-90.jpg",
        "https://stimg.cardekho.com/images/carinteriorimages/930x620/BMW/X7/9462/1673948643661/door-view-of-driver-seat-51.jpg",
        "https://stimg.cardekho.com/images/carinteriorimages/930x620/BMW/X7/9462/1673948643661/sun-roof-moon-roof-81.jpg",
      ],
      About:
        "The exterior highlights include the large signature front kidney grille surrounded by chrome accents, newly designed front and rear bumpers, new LED headlamps, 3D taillamps with new inner graphics, and a connecting chrome bar covered by smoked glass. The BMW X7 is a seven-seater SUV.Inside, the cabin comes equipped with a sky lounge panoramic sunroof, 14-colour ambient lighting, a 12.3-inch infotainment system, a 14.9-inch driver display unit, a four-zone climate control, and a Harman Kardon surround sound system with 16 speakers.At the heart of the BMW X7 xDrive40i M Sport is a 3.0-litre six-cylinder gasoline engine belting out 376bhp and 520Nm of torque. On the other hand, the X7 xDrive40d M Sport gets a 3.0-litre six-cylinder diesel engine churning out 335bhp and 700Nm of peak torque. Both engines come mated with an eight-speed Steptronic transmission sending power to all the wheels via BMW’s xDrive all-wheel drive technology.",
      Contact: "8317680338",
    },
    {
      image:
        "https://ackodrive-assets.s3.amazonaws.com/media/test_i5jt7Ys.jpeg",
      Company: "Maruti Suzuki, ",
      Name: "Brezza",
      Price: "Rs.14.94 L*",
      Overview: "Diesel/Petrol 11.29 to 14.31 kmpl Automatic",
      images: [
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/9462/1673948689052/front-left-side-47.jpg",
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/9462/1673948689052/side-view-(left)-90.jpg",
        "https://stimg.cardekho.com/images/carinteriorimages/930x620/BMW/X7/9462/1673948643661/door-view-of-driver-seat-51.jpg",
        "https://stimg.cardekho.com/images/carinteriorimages/930x620/BMW/X7/9462/1673948643661/sun-roof-moon-roof-81.jpg",
      ],
      About:
        "The exterior highlights include the large signature front kidney grille surrounded by chrome accents, newly designed front and rear bumpers, new LED headlamps, 3D taillamps with new inner graphics, and a connecting chrome bar covered by smoked glass. The BMW X7 is a seven-seater SUV.Inside, the cabin comes equipped with a sky lounge panoramic sunroof, 14-colour ambient lighting, a 12.3-inch infotainment system, a 14.9-inch driver display unit, a four-zone climate control, and a Harman Kardon surround sound system with 16 speakers.At the heart of the BMW X7 xDrive40i M Sport is a 3.0-litre six-cylinder gasoline engine belting out 376bhp and 520Nm of torque. On the other hand, the X7 xDrive40d M Sport gets a 3.0-litre six-cylinder diesel engine churning out 335bhp and 700Nm of peak torque. Both engines come mated with an eight-speed Steptronic transmission sending power to all the wheels via BMW’s xDrive all-wheel drive technology.",
      Contact: "8317680338",
    },
  ];
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");
  const [isshow, setisshow] = useState(false);
  return (
    <div className="w-screen bg-[#15191c]">
      <Navbar
        Search={true}
        isshow={isshow}
        setisshow={setisshow}
        searchTerm={searchTerm}
        setsearchTerm={setsearchTerm}
      />
      <div>
        <div className="flex flex-col items-center justify-center gap-6 p-5 py-12">
          {Data.filter((item) => {
            if (searchTerm === "") {
              return item;
            } else if (
              item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.Price.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.Overview.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }
            return;
          }).map((item, i) => {
            return (
              <>
                <div
                  key={i}
                  className="max-w-md border-[1px] border-stone-800 shadow-lg"
                >
                  <img src={item.image} alt="pic" />
                  <div className="flex flex-col justify-center p-6 space-y-4">
                    <h1 className="text-lg font-bold text-white">
                      {item.Company}
                    </h1>
                    <h1 className="text-lg font-semibold text-white">
                      {item.Name}
                    </h1>
                    <p className="font-semibold text-yellow-300">
                      {item.Price}
                    </p>
                    <p className="text-slate-300 brightness-90">
                      {item.Overview}
                    </p>
                    <button
                      onClick={() => {
                        navigate("/details", {
                          state: {
                            images: item.images,
                            About: item.About,
                            Phone: item.Contact,
                          },
                        });
                      }}
                      className="py-2 text-white text-[14px] font-semibold bg-yellow-500 brightness-90"
                    >
                      Check Details
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {isshow ? <Sidebar isshow={isshow} setisshow={setisshow} /> : null}
      </div>
    </div>
  );
}
