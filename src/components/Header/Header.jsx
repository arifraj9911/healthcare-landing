import { GoArrowUpRight } from "react-icons/go";
import logoNav from "../../assets/Image/logo dark.png";

const Header = () => {
  const menuLink = (
    <>
      <li className="mr-1 text-[16px]"><a href="#">Home</a></li>
      <li className="mr-1 text-[16px]"><a href="#service">Services</a></li>
      <li className="mr-1 text-[16px]"><a href="#blog">Blog</a></li>
      <li className="text-[16px]"><a href="#about">About Us</a></li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 mt-4">
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
              className="menu menu-sm text-[#020043] dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logoNav} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-[#020043] px-1">
            {menuLink}
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="border border-[#343268] rounded-xl py-3 px-6 font-medium flex items-center ">
            Appointment
            <GoArrowUpRight className="text-xl mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
