import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="grid max-w-md mx-auto place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <nav className="mx-auto w-full block  rounded-xl border border-white/80 bg-white bg-opacity-80 px-6 py-3 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex  justify-between items-center mx-auto max-w-screen-xl text-gray-900">
          <Link to="/" className="text-xl font-bold whitespace-nowrap">
            Todoist
          </Link>
          <div className="justify-between items-center flex">
            <ul className="flex font-medium lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 hover:text-blue-500  lg:p-0 ${
                      isActive ? "text-blue-500" : undefined
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/completed"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 hover:text-blue-500  lg:p-0 ${
                      isActive ? "text-blue-500" : undefined
                    }`
                  }
                >
                  Completed
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
