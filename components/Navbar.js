import Drawer from "./Drawer.js";
import Items from "./Items.js";
import Link from "next/link.js";
import SidebarMenu from "./SidebarMenu.js";
// import navbarLogo from "../public/logo-no-bg.svg";
import { useRouter } from "next/router.js";
import { useScrollspy } from "../utils/useScrollSpy.js";
import { useState } from "react";

export default function Navbar() {
  // toggle state open/close for the sidebar
  const [isOpen, setIsOpen] = useState(false);
  // menu items received from own hook
  const [menuItems] = Items();

  const router = useRouter();
  // toggle open/close the sidebar
  const handleToggle = async () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const ids = menuItems().map((link) => link.url);
  const activeId = useScrollspy(ids, 54); // 54 is navigation height

  return (
    <header className="nav-con fixed top-0 z-50 shadow-[-1px_3px_13px_0px_rgba(0,0,0,0.75)]">
      <div className="navbar-con flex items-center">
        <div className="navbar-con_box backgroundcolor w-screen flex static top-0 text-center justify-end sm:justify-center delay-400 duration-500 ease-in-out transition-all">
          {/* <div className="navbar-logo relative h-full flex items-center self-center justify-center sm:justify-start py-1 ">
            <Image
              className="logo-image w-20 h-12 ml-8"
              src={navbarLogo}
              alt={"clean apps website logo"}
              sizes="10vw"
            />
          </div> */}
          <div className="text-lg md:text-xltext-black font-bold block self-center px-2 py-1 border-solid border-amber-800 transition-all">
            Clean Apps
          </div>
          <div className="nav-bar_box w-[80%] h-14 flex justify-center">
            <nav className="nav-bar_nav-list-con hidden sm:flex justify-end  sm:justify-center w-fit items-center	self-center	">
              <ul className="menu">
                {menuItems().map((link) => (
                  <li
                    key={`menu-item-${link.url}`}
                    className="menu-item inline-block"
                  >
                    <Link
                      scroll={false}
                      href={`/#${link.href}`}
                      className={`menu-link text-lg md:text-xl text-white px-2 py-1 border-solidborder-amber-800 hover:border-b-4 border-amber-800 transition-all duration-300 ease-out  ${
                        link.url === activeId &&
                        "text-[#faebd7] border-solid border-amber-800 border-b-4"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* // ------------------ Hamburger Menu ------------------- // */}
        <div
          className="hamburger-menu-con absolute right-6 flex sm:hidden  items-center "
          onClick={handleToggle}
        >
          <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl  bg-orange-100 p-3 hover:bg-slate-200">
            <div className="space-y-2">
              <span className="block h-1 w-5 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:w-7 group-hover:translate-y-1.5 group-hover:rotate-45"></span>
              <span className="block h-1 w-4 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-7 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
            </div>
          </div>
        </div>
        {/* // ------------------ Hamburger Menu ------------------- ends // */}
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <SidebarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Drawer>
    </header>
  );
}
