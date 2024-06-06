import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="max-w-md mx-auto px-6">
      <nav className="bg-white border-gray-200  py-2.5 ">
        <div className="flex  justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Todoist
            </span>
          </Link>
          <div className="justify-between items-center flex" id="mobile-menu-2">
            <ul className="flex font-medium lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 text-gray-700 hover:text-red-700  lg:p-0 ${
                      isActive ? "text-red-700" : undefined
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
                    `block py-2 pr-4 pl-3 text-gray-700 hover:text-red-700  lg:p-0 ${
                      isActive ? "text-red-700" : undefined
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
