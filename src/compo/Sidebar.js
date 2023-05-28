import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { TbHeartHandshake } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiFillCar } from "react-icons/ai";
export default function Sidebar({ isshow, setisshow }) {
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 1 }}
      key={Math.random() * 100}
      className="fixed bg-black bg-opacity-75 w-screen h-screen left-0 top-0 z-50"
    >
      <div className="max-w-[70vw] sm:max-w-[50vw]  h-screen bg-[#22252d] z-50">
        <div className="flex justify-between items-center px-2">
          <h1 className="text-2xl font-semibold text-yellow-500 px-3 py-5 brightness-90">
            Welcome
          </h1>
          <RxCross2
            onClick={() => {
              setisshow(!isshow);
            }}
            size={25}
            color="white"
            cursor={"pointer"}
          />
        </div>
        <ul className="px-5 py-10 space-y-10 text-lg text-yellow-500">
          <Link to={"/"}>
            <div className="flex items-center space-x-4 cursor-pointer">
              <AiOutlineHome size={25} color="white" />
              <li>Home</li>
            </div>
          </Link>
          <div className="flex items-center space-x-4  cursor-pointer">
            <FcAbout size={25} color="white" />
            <li>About Us</li>
          </div>
          <div className="flex items-center space-x-4  cursor-pointer">
            <FiPhoneCall size={25} color="white" />
            <li>Contact Us</li>
          </div>
          <div>
            <Link
              className="flex items-center space-x-4  cursor-pointer"
              to={"/mycar"}
            >
              <AiFillCar size={25} color="white" />
              <li>My Car</li>
            </Link>
          </div>
          <div className="flex items-center space-x-4  cursor-pointer">
            <TbHeartHandshake size={25} color="white" />
            <li>Become a Member</li>
          </div>
        </ul>
      </div>
      <div className="fixed bottom-4 left-6">
        <p className="text-yellow-500 brightness-75">@All Rights Reserved</p>
      </div>
    </motion.aside>
  );
}
