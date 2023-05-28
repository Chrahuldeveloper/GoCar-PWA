import React, { useState } from "react";
import States from "../compo/States";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function UserAccount() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    State: "",
  });

  const handleCreateaccount = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("user", JSON.stringify(user));
      await addDoc(collection(db, "USERS"), user);
      navigate("/User");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="bg-[#15191c] w-screen h-screen">
      <div>
        <div className="p-4 ">
          <h1 className="text-2xl text-white font-bold">
            Create Your{" "}
            <span className="text-yellow-500 text-2xl">Account</span>
          </h1>
        </div>
        <form className="flex flex-col text-white justify-center items-center space-y-5 my-7">
          <div className="flex flex-col justify-center space-y-2">
            <label htmlFor="name" className="text-yellow-500">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={user.Name}
              onChange={(e) => {
                setUser({ ...user, Name: e.target.value });
              }}
              className=" w-[80vw] outline-none p-3 bg-[#22252d]"
            />
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <label htmlFor="Email" className="text-yellow-500">
              Email
            </label>
            <input
              id="Email"
              value={user.Email}
              onChange={(e) => {
                setUser({ ...user, Email: e.target.value });
              }}
              type="text"
              className=" w-[80vw] outline-none bg-[#22252d] p-3 "
            />
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <label htmlFor="Mobile Number" className="text-yellow-500">
              Mobile Number
            </label>
            <input
              id="Mobile Number"
              type="text"
              value={user.Phone}
              onChange={(e) => {
                setUser({ ...user, Phone: e.target.value });
              }}
              className=" w-[80vw] outline-none p-3 bg-[#22252d]"
            />
          </div>
          <div className="flex flex-col justify-center space-y-5">
            <label htmlFor="State" className="text-yellow-500">
              State
            </label>
            <select
              id="State"
              value={user.State}
              onChange={(e) => {
                setUser({ ...user, State: e.target.value });
              }}
              className=" w-[80vw] outline-none text-white p-3 bg-[#22252d]"
            >
              {States.map((item) => {
                return (
                  <>
                    <option className="text-white" value={item}>
                      {item}
                    </option>
                  </>
                );
              })}
            </select>
            <button
              onClick={handleCreateaccount}
              className="bg-yellow-500 font-semibold brightness-90 text-white  w-[80vw] py-3"
            >
              Create account
            </button>
          </div>
        </form>
        <footer className="flex justify-center">
          <div className="fixed bottom-5 ">
            <p className="text-yellow-600 brightness-90 text-sm">
              By Creating the you will agree to all terms.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
