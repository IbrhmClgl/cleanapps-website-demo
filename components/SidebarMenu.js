import Items from "./Items.js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useScrollspy } from "../utils/useScrollSpy.js";

export default function SidebarMenu({ setIsOpen }) {
  const router = useRouter();
  const [menuItems] = Items();

  const ids= menuItems().map(link => link.url)
  const activeId = useScrollspy(ids, 50); // 50 is navigation height
  return (
    <>
      <div className="mobile-navbar navbar-wrapper  h-full bg-white z-30  shadow-lg p-5">
        <nav className="mobile-navbar_nav">
          <ul
            className={`m-0 pb-0 grid grid-cols-1 divide-y-2  divide-orange-300`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {menuItems().map((link) => {
              return (
                <li
                  key={`menu-item-${link.url}`}
                  className="text-txt-dark-gray"
                >
                  <Link
                    scroll={false}
                    href={`/#${link.href}`}
                    className={`block my-4 w-[60vw] max-w-[300px] border-solid  border-orange-400  hover:border-r-4 text-lg  hover:text-orange-500  transition-all duration-300 ${
                      link.url === activeId &&
                      "text-orange-500  border-solid  border-orange-400 border-r-4"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
