import {
  HomeIcon,
  InfoIcon,
  MusicIcon,
  LocationIcon,
  DarkIcon,
} from "./components/icons";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  const navbar = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-8 h-8" /> },
    { name: "Info", path: "/info", icon: <InfoIcon className="w-8 h-8" /> },
    { name: "Music", path: "/music", icon: <MusicIcon className="w-8 h-8" /> },

    {
      name: "Location",
      path: "/location",
      icon: <LocationIcon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className=" text-white justify-end  flex gap-2 p-4">
        <div className=" rounded-full bg-black text-white border-1 font-bold text-sm  w-10 h-10 flex justify-center items-center"><DarkIcon className="fill-white w-8"/></div>
        <div className=" rounded h-full">
          <img
            className="w-9 h-9 rounded-full"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAACgCAMAAADevrt1AAAAFVBMVEX///+uHCghRoulAADmysoAJH3KzdwUagNuAAAAqklEQVR4nO3PwRGDAAzAsACF/UfuCn3RO0eawJ5ji/l3wGuc9jjtcdrjtMdpj9Mepz1Oe5z2OO1x2uO0x2mP0x6nPU57nPY47XHa47THaY/THqc9Tnuc9sy1xXy2GAAAAAAAAAAAAAAA4HfPFnNvMecWTnuc9jjtcdrjtMdpj9Mepz1Oe5z2OO1x2uO0x2mP0x6nPU57nPY47XHa47THaY/THqc9Tnv2nH4BVOOeX8b66Q8AAAAASUVORK5CYII="
            alt=""
          />
        </div>
      </header>
      <main className="flex-grow p-4 mb-15">{children}</main>
      <footer className=" fixed bottom-0  bg-transparent w-full text-white flex justify-center">
        <nav className="shadow-top bg-gray-300  h-15 w-70 z-100 rounded-tl-2xl rounded-tr-2xl flex justify-center items-center">
          <div className="w-70 h-10 pl-9 absolute ">
            <div
              className="absolute h-10 w-10  bg-footer rounded-xl transition-all duration-300"
              style={{
                transform: `translateX(${
                  navbar.findIndex((item) => item.path === activePage) * 56
                }px)`,
              }}
            ></div>
          </div>
          <ul className="flex  items-center justify-center gap-6 w-full relative">
            {navbar.map((item) => (
              <li
                className="relative"
                key={item.name}
                onClick={() => setActivePage(item.path)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center text-black font-semibold flex-col justify-center ease-in-out transition-transform  ${
                    activePage === item.path
                      ? "fill-white scale-118"
                      : "fill-gray-600"
                  }`}
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
