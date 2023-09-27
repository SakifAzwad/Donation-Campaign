import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const Header = () => {

    const [show,setshow]=useState(true);

    const tog1=()=>
    {
        setshow(!show);
    }


  return (
    <div>
      <div className="flex items-center justify-between lg:mx-32 mt-8">
        <img className="md:w-auto w-32" src="/Logo.png" alt="" />
        <div className="">
          <nav className="text-lg font-normal ">
            <NavLink onClick={tog1} className="md:ml-0 ml-3" to="/">Home</NavLink>
            <NavLink className="md:ml-12 ml-3" to="/donations">Donation</NavLink>
            <NavLink className="md:ml-12 ml-3 mr-2" to="/stats">Statistics</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
