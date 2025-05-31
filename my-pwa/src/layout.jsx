import {
  HomeIcon,
  InfoIcon,
  MusicIcon,
  LocationIcon,
  DarkIcon,
  LightIcon,
} from "./components/icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState(localStorage.lang || "nl");
  const [showLangMenu, setShowLangMenu] = useState(false);
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

  const handleLangSelect = (selectedLang) => {
    setLang(selectedLang);
    localStorage.lang = selectedLang;
    setShowLangMenu(false);
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-dark bg-gray-100 transition-colors ease-in-out">
      <header className=" text-white absolute right-0     justify-end z-1000 flex gap-2 m-3">
        <button
          onClick={toggleDarkMode}
          className=" rounded-full bg-black dark:bg-white text-black dark:text-white font-bold text-sm  w-9 h-9 flex justify-center items-center"
        >
          <DarkIcon className="fill-white dark:hidden  w-6 transition-all ease-in-out" />
          <LightIcon className=" hidden dark:flex fill-info w-6 transition-all ease-in-out" />
        </button>
        <div id="lang select" className="relative">
          <button
            onClick={() => setShowLangMenu((v) => !v)}
            className="rounded-full"
            aria-haspopup="true"
            aria-expanded={showLangMenu}
            aria-controls="lang-menu"
          >
            <img
              className="w-8 h-8 rounded-full"
              src={lang === "nl" ? "../imges/nl.png" : "../imges/uk.png"}
              alt="lang-img"
            />
          </button>
          <div
            id="lang-menu"
            className={`
      absolute -ml-1 mt-0.5 bg-accent rounded-b-full p-1 w-10 rounded-t-full gap-1 shadow-lg flex flex-col
      transition-all duration-300 origin-top z-50
      ${
        showLangMenu
          ? "scale-100 opacity-100 pointer-events-auto"
          : "scale-95 opacity-0 pointer-events-none"
      }
    `}
            tabIndex={-1}
            role="menu"
            aria-hidden={!showLangMenu}
          >
            <div className="absolute -top-1.5 left-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-accent"></div>
            <button
              onClick={() => handleLangSelect("nl")}
              className="z-90"
              role="menuitem"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="../imges/nl.png"
                alt="nl-img"
              />
            </button>
            <button onClick={() => handleLangSelect("en")} role="menuitem">
              <img
                className="w-8 h-8 rounded-full"
                src="../imges/uk.png"
                alt="en-img"
              />
            </button>
          </div>
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
