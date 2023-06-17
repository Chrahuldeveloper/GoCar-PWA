import React, { useEffect, useState } from "react";
import Home from "../src/pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ViewCars from "./pages/ViewCars";
import SpareParts from "./pages/SpareParts";
import Cart from "./pages/Cart";
import CarInsurance from "./pages/CarInsurance";
import UserAccount from "./pages/UserAccount";
import UserPage from "./pages/UserPage";
import Details from "./pages/Details";
import MyCar from "./pages/MyCar";
import Problems from "./pages/Problems";
export default function App() {
  const [ismobile, setismobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setismobile(true);
    }
  }, []);

  return (
    <>
      {ismobile ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<ViewCars />} />
          <Route path="/details" element={<Details />} />
          <Route path="/buyparts" element={<SpareParts />} />
          <Route path="/insurance" element={<CarInsurance />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/createaccount" element={<UserAccount />} />
          <Route path="/User" element={<UserPage />} />
          <Route path="/mycar" element={<MyCar />} />
          <Route path="/problem" element={<Problems />} />
        </Routes>
      ) : (
        <>
          <h1>This is not a valid Screen</h1>
        </>
      )}
    </>
  );
}
