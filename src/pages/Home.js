import React, { useState } from "react";
import {
  Navbar,
  Category,
  Slider,
  About,
  Sidebar,
  OurHull,
} from "../compo/index";
export default function Home() {
  const [isshow, setisshow] = useState(false);
  return (
    <div className="bg-[#15191c] w-screen ">
      <Navbar isshow={isshow} setisshow={setisshow} />
      {isshow ? <Sidebar isshow={isshow} setisshow={setisshow} /> : null}
      <Slider />
      <Category />
      <About />
      <OurHull />
    </div>
  );
}
