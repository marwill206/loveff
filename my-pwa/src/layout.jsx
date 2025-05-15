import {
  HomeIcon,
  InfoIcon,
  MusicIcon,
  LocationIcon,
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
    <div className="flex flex-col min-h-screen">
      <header className=" text-white p-4">
        <h1>My PWA</h1>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-white text-white flex justify-center">
        <nav className="shadow-top bg-gray-200 h-15 w-70 z-100 rounded-tl-xl rounded-tr-xl flex justify-center items-center">
          <div className="w-70 h-10 pl-9 absolute ">
            <div
              className="absolute h-10 w-10 bg-footer rounded-xl transition-all duration-300"
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
                      : "fill-gray-500"
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
