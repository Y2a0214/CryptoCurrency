import React from "react";
import crypto_icon from "../../Asset/img/casper.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-regal-blue fixed top-0 z-10">
        <div className="flex py-2 px-9 justify-between items-center">
          <div className="flex items-center">
            <img src={crypto_icon} alt="" width={45} />
            <h3 className="mx-2 font-medium text-xl text-yellow-400">
              BitByte
            </h3>
          </div>
          <div className="flex w-1/4 justify-evenly">
            <ul className="flex ">
              <Link to={"/"}>
              <li className="mx-2 font-medium text-base text-white">Dashbord</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
