import { useState } from "react";
import { Navbar, Sidebar } from "../compo";

export default function Problems() {
  const [isshow, setisshow] = useState(false);
  return (
    <>
      <div className="bg-[#15191c] w-screen h-screen">
        <Navbar isshow={isshow} setisshow={setisshow} />
        <div className="flex justify-center p-6">
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/6BZ-6HbjD0w"
            title="Car Problem"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        {isshow ? <Sidebar isshow={isshow} setisshow={setisshow} /> : null}
      </div>
    </>
  );
}
