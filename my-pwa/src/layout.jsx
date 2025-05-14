import { HomeIcon, InfoIcon, MusicIcon, LocationIcon } from "./components/icons";
import { useState } from "react";
function Layout({ children }) {
  const [activePage, setActivePage] = useState("Home");
  let navbar = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon className="w-9 h-9 fill-gray-500" />,
    },
    {
      name: "Info",
      path: "/info",
      icon: <InfoIcon className="w-9 h-9 fill-gray-500" />,
    },
    {
      name: "Music",
      path: "/music",
      icon: <MusicIcon className="w-9 h-9 fill-gray-500" />,
    },
    {
      name: "Location",
      path: "/location",
      icon: <LocationIcon className="w-9 h-9 fill-gray-500" />,
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1>My PWA</h1>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-white  text-white  flex justify-center">
        <nav className="shadow-top bg-gray-200 h-12 w-70 z-100 rounded-tl-xl rounded-tr-xl flex justify-center items-center">
          <div className="absolute h-10 w-10 bg-blue-500 rounded full transition-all duration-300"
          style={{transform: `translateX(${navbar.findIndex((item) => item.name === activePage) * 70}px)`,
          }}>
          </div>
          <ul className="flex gap-6 relative">
            {navbar.map((item) => (
              <li
                className="relative"
                key={item.name}
                onClick={() => setActivePage(item.name)}
              >
                <a href={item.path}>{item.icon}</a>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
