import {
  HomeIcon,
  InfoIcon,
  MusicIcon,
  LocationIcon,
  DarkIcon,
  LightIcon
} from "./components/icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const activePage = location.pathname;
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

  useEffect(() => {
    const savedTheme = localStorage.theme;
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const dark = html.classList.toggle("dark");
    localStorage.theme = dark ? "dark" : "light";
    setIsDark(dark);
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-dark bg-gray-100 transition-colors ease-in-out">
      <header className=" text-white absolute right-0     justify-end z-1000 flex gap-2 m-3">
        <button
          onClick={toggleDarkMode}
          className=" rounded-full bg-black dark:bg-white text-black dark:text-white font-bold text-sm  w-9 h-9 flex justify-center items-center"
        >
          <DarkIcon className="fill-white dark:hidden  w-6 transition-all ease-in-out" />
          <LightIcon className="f hidden dark:flex fill-info w-6 transition-all ease-in-out"/>
        </button>
        <div className=" rounded h-full">
          <img
            className="w-8 h-8  rounded-full"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAACgCAMAAADevrt1AAAAFVBMVEX///+uHCghRoulAADmysoAJH3KzdwUagNuAAAAqklEQVR4nO3PwRGDAAzAsACF/UfuCn3RO0eawJ5ji/l3wGuc9jjtcdrjtMdpj9Mepz1Oe5z2OO1x2uO0x2mP0x6nPU57nPY47XHa47THaY/THqc9Tnuc9sy1xXy2GAAAAAAAAAAAAAAA4HfPFnNvMecWTnuc9jjtcdrjtMdpj9Mepz1Oe5z2OO1x2uO0x2mP0x6nPU57nPY47XHa47THaY/THqc9Tnv2nH4BVOOeX8b66Q8AAAAASUVORK5CYII="
            alt=""
          />
        </div>
      </header>
      <main className="">{children}</main>
      <footer className=" fixed bottom-0 z-1000  bg-transparent w-full flex justify-center">
        <nav className="shadow bg-gray-100 dark:bg-gray-300 h-15 w-70 z-100 mb-5 rounded-full flex justify-center items-center">
          <div className="w-70 h-10 pl-9 absolute ">
            <div
              className="absolute h-10 w-10  bg-accent rounded-full transition-all duration-300"
              style={{
                transform: `translateX(${
                  navbar.findIndex((item) => item.path === activePage) * 56
                }px)`,
              }}
            ></div>
          </div>
          <ul className="flex  items-center justify-center gap-6 w-full relative">
            {navbar.map((item) => (
              <li className="relative" key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center text-black font-semibold flex-col justify-center ease-in-out transition-transform  ${
                    activePage === item.path
                      ? "fill-gray-100 dark:fill-gray-300 scale-110"
                      : "fill-gray-600 dark:fill-gray-700"
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
