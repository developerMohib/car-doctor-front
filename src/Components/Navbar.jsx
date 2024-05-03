import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
// import delivery from "../assets/icons/deliveryt.svg"
// import check from "../assets/icons/check.svg"
// import Group3 from "../assets/icons/Group3.svg"
// import group from "../assets/icons/group.svg"
// import person from "../assets/icons/person.svg"
// import quote from "../assets/icons/quote.svg"
// import Wrench from "../assets/icons/Wrench.svg"
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";

const Navbar = () => {
    const [open, SetOpen] = useState(false)
    const navlink = <>
    <NavLink to="/" className=" px-2 py-1 font-semibold">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink to="/about" className=" px-2 py-1 font-semibold ">
        {" "}
        About{" "}
      </NavLink>
      <NavLink to="/contact" className=" px-2 py-1 font-semibold ">
        {" "}
        Contact{" "}
      </NavLink>
      <NavLink to="/service" className=" px-2 py-1 font-semibold ">
        {" "}
        Service{" "}
      </NavLink>
      <NavLink to="/blog" className=" px-2 py-1 font-semibold ">
        {" "}
        Blog{" "}
      </NavLink>
    </>
  return (
    <div>
      <div>
        <div className="navbar bg-base-100 h-24">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden" 
              >
                <MdRestaurantMenu ></MdRestaurantMenu>
              </div>
              <ul
                onClick={() => SetOpen(!open)}
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navlink}
              </ul>
            </div>
            <div>
                <Link> <img className="h-14" src={logo} alt="logo" /></Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navlink}
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <p> <IoBagOutline> </IoBagOutline> </p>
            <p> <IoIosSearch/> </p>
            <Link className="btn btn-outline text-[#FF3811] " to='/login' > APPOINTMENT </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
