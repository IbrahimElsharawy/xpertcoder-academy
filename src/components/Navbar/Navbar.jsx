import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from '../../assets/Logo.jpg'
import ContactUs from "../ContactUs/ContactUs";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleClose = () => {
    setClick(false); // Close the mobile menu
  };

  const navlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "black" : "",
    };
  };

  const borderBottoms = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "Black" : "",
      borderBottom: isActive ? "2px solid black" : "none",
    };
  };
  return (
    <div className="w-screen h-[80px]   z-20  top-0 bg-navbar-color px-4">
      <div className="px-2 flex justify-between items-center w-full h-full max-w-[1240px] mx-auto">
        
        <div className="hidden md:flex items-center">
       <img src={logo} alt="Xpertcoderacademy" className="mr-16 " />
          <NavLink
            style={navlinkStyles}
            className="px-4 mr-2 "
            to="/"
            onClick={handleClose}
          >
            Home
          </NavLink>
         
          <NavLink
            style={navlinkStyles}
            className="px-4 mr-2"
            to="/diplomas"
            onClick={handleClose}
          >
            Diplomas
          </NavLink>
          <NavLink
            style={navlinkStyles}
            className="px-4 mr-2"
            to="/about"
            onClick={handleClose}
          >
            AboutUs
          </NavLink>
          <NavLink
            style={navlinkStyles}
            className="px-4 mr-2"
            to="/employment"
            onClick={handleClose}
          >
            Employment
          </NavLink>
          <NavLink
            style={navlinkStyles}
            className="px-4 mr-2"
            to="/blog"
            onClick={handleClose}
          >
            Blog
          </NavLink>
        </div>

        <div
          className="md:hidden cursor-pointer text-black "
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <div className="relative z-60" >

<ContactUs/>
        </div>
      </div>
      <div
        className={
          click
            ? "absolute left-0 bg-white w-full  px-8 flex flex-col"
            : "hidden"
        }
      >
        <NavLink
          style={borderBottoms}
          onClick={handleClose}
          className=" w-full py-3 mb-3"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={borderBottoms}
          onClick={handleClose}
          className="w-full py-3 mb-3"
          to="/diplomas"
        >
          Diplomas
        </NavLink>
        <NavLink
          style={borderBottoms}
          onClick={handleClose}
          className=" w-full py-3 mb-3"
          to="/about"
        >
          AboutUs
        </NavLink>
        <NavLink
          style={borderBottoms}
          onClick={handleClose}
          className="w-full py-3 mb-3"
          to="/employment"
        >
          Employment
        </NavLink>
        <NavLink
          style={borderBottoms}
          onClick={handleClose}
          className="w-full py-3 mb-3"
          to="/blog"
        >
          Blog
        </NavLink>
       
      </div>
    </div>
  );
};

export default Navbar;
