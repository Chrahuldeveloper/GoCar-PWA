import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function Navbar({
  Search,
  isshow,
  setisshow,
  searchTerm,
  setsearchTerm,
}) {
  const User = JSON.parse(localStorage.getItem("user"));
  const Count = localStorage.getItem("CartCount");
  console.log(Count);
  return (
    <nav className="bg-[#22252d] shadow-xl py-2.5">
      <div className="flex justify-between p-3">
        <div className="flex space-x-6 items-center">
          <AiOutlineMenu
            onClick={() => {
              setisshow(!isshow);
            }}
            size={25}
            color="white"
            cursor={"pointer"}
          />
          <Link to={"/"}>
            <h1 className="text-2xl text-white font-bold">
              <span className="text-yellow-500">Go</span>Car
            </h1>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to={`${User ? "/User" : "/createaccount"}`}>
            <RiAccountCircleLine size={27} color="white" cursor={"pointer"} />
          </Link>
          <Link to={"/cart"}>
            <div
              className={` ${
                Count?.length > 0 ? "w-5 text-sm h-5 " : "hidden"
              } rounded-full text-white bg-yellow-500 text-center translate-x-4 `}
            >
              {Count}
            </div>
            <FiShoppingCart
              className={` ${
                Count?.length > 0 ? "-translate-y-2 " : "translate-y-0"
              }`}
              size={25}
              color="white"
              cursor={"pointer"}
            />
          </Link>
        </div>
      </div>
      {Search ? (
        <div className="flex justify-center pl-8 items-center my-3">
          <input
            type="text"
            className="p-3 outline-none rounded-lg w-[100vw]"
            placeholder="Search Cars"
            value={searchTerm}
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
          />
          <HiOutlineMagnifyingGlass
            className="bg-yellow-500 p-3 -translate-x-10 rounded-r-lg"
            size={48}
            color="white"
            cursor={"pointer"}
          />
        </div>
      ) : null}
    </nav>
  );
}
