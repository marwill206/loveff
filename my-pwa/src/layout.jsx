import { HomeIcon } from "../public/icons";
function Layout({ children }) {
  let navbar = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-6 h-6"/> },
    
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1>My PWA</h1>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-800 h-13 text-white p-4 flex justify-center">
        <nav>
          <ul>
            {navbar.map((item) => (
              <a href={item.path} key={item.name}>
                <li  className="">
                  {item.icon}
                </li>
              </a>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
