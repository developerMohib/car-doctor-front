import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IoBagOutline, IoLogOutOutline } from "react-icons/io5";
import { IoIosSearch, IoIosLogIn } from "react-icons/io";
import { useContext, useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { AuthProviderContext } from "../Provider/Provider";
import { Tooltip } from "react-tooltip";
import toast, { Toaster } from "react-hot-toast";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = useContext(AuthProviderContext);
  const [open, SetOpen] = useState(false);
  const logOutSuc = () => toast.success("Log Out Successfully !");

  const handleLogOut = () => {
    logOut()
      .then(() => {
        logOutSuc();
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const navlink = (
    <>
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
      {user && (
        <>
          <NavLink to="/bookings" className=" px-2 py-1 font-semibold ">
            {" "}
            Booking{" "}
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div>
      <div>
        <div className="navbar bg-base-100 h-24 z-50 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className=" lg:hidden"
              >
                <MdRestaurantMenu className="text-2xl" ></MdRestaurantMenu>
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
              <Link>
                {" "}
                <img className="h-14" src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlink}</ul>
          </div>
          <div className="navbar-end space-x-4">
            <p className="lg:block hidden" >
              {" "}
              <IoBagOutline> </IoBagOutline>{" "}
            </p>
            <p className="lg:block hidden" >
              {" "}
              <IoIosSearch />{" "}
            </p>
            <Link className="btn btn-outline text-[#FF3811] " to="/login">
              {" "}
              APPOINTMENT{" "}
            </Link>

            {user ? (
              <>
                <div>
                  <FaUserLarge
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user.displayName}
                    className="text-4xl border rounded-full p-1 "
                  >
                    {" "}
                  </FaUserLarge>
                </div>
                <button
                  onClick={handleLogOut}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="log out!"
                  className="btn text-[#FF3811] "
                >
                  {" "}
                  <IoLogOutOutline className="text-2xl"></IoLogOutOutline>{" "}
                </button>
              </>
            ) : (
              <Link
                data-tooltip-id="my-tooltip"
                data-tooltip-content="log in"
                className="btn text-[#FF3811] "
                to="/login"
              >
                {" "}
                <IoIosLogIn className="text-2xl"></IoIosLogIn>{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" place="left" />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Navbar;
