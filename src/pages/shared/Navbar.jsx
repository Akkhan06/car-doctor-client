import React, { useContext } from "react";
import logo from "../../assets/react.svg"
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const {logOut, user} = useContext(AuthContext)
  const logoutHandler = () => {
    logOut()
    .then(result => {
      
    }).then(error => {})
  }
const navi = <>
 <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li tabIndex={0}>
        <a className="justify-between">Parent</a>
      </li>
      <li>
        <a>Service</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
     { user?.email ?  
     <> <li>
     <Link to='/booking'>Booking</Link>
   </li>
     <li>
     <div onClick={logoutHandler} className="btn btn-link">
     Log Out
     </div>
    </li> </>
      : 
      <li>
       <Link to='/login'>
       Login
       </Link>
      </li>
     }
    </>
</>

  return (
    <div className="navbar bg-base-100 my-3 h-7">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navi}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="h-16" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navi}
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-outline btn-warning">Apoienment</button>
      </div>
    </div>
  );
};

export default Navbar;
