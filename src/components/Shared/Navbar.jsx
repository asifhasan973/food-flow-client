import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = (
    <>
      <NavLink className="font-bold mx-4 text-base" to="/">
        Home
      </NavLink>
      <NavLink className="font-bold mx-4 text-base" to="/AvailableFoods">
        Available Foods
      </NavLink>
      <NavLink className="font-bold mx-4 text-base" to="/AddFood">
        Add Food
      </NavLink>
      <NavLink className="font-bold mx-4 text-base" to="">
        Home
      </NavLink>
      <NavLink className="font-bold mx-4 text-base" to="">
        Home
      </NavLink>
    </>
  );
  return (
    <div className="navbar w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl henny-penny-regular md:text-3xl "
        >
          FoodFlow
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="hover:underline mx-4 font-bold">
          Login
        </Link>
        <Link
          to="/register"
          className="hover:underline text-[#85be48] font-bold"
          mx-4
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
