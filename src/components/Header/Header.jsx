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
      <div className="flex items-center justify-between mx-32 mt-8">
        <img src="/src/assets/Logo.png" alt="" />
        <div className="">
          <nav className="text-lg font-normal ">
            <NavLink onClick={tog1} className="" to="/">Home</NavLink>
            <NavLink className="ml-12" to="/donations">Donation</NavLink>
            <NavLink className="ml-12" to="/stats">Statistics</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
