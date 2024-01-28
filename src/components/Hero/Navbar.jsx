import { useState, useEffect } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({
  navigationItems = [
    {
      path: "/",
      label: "Home",
    },
    { path: "/about", label: "About Us" },

    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ],
}) => {
  const [menu, setMenu] = useState(true);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    setMenuOpen(false);
    navigate.push(path);
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="w-full text-[14px]">
      <div className="  bg-gray-500 h-[5vh] w-full fixed  flex items-center md:px-12 px-6">
        <div className="w-full flex justify-between md:justify-between text-white mx-4 font-bold tracking-wide">
          <div className="flex items-center">
            <div className="">LOGO</div>
          </div>
          <div className="hidden md:flex gap-4">
            {navigationItems.map((item, index) => (
              <ul key={index} className="flex gap-6">
                <li className="relative group cursor-pointer">
                  <Link to={item.path}>{item.label}</Link>
                  <span className="absolute left-0 inset-x-0 bottom-0 h-[0.5px] bg-white transition-transform duration-1000 transform origin-left scale-x-[0]  group-hover:scale-x-100 group-hover:bg-gray-100"></span>
                </li>
              </ul>
            ))}
          </div>
          <div className="flex items-center">
            <p className="font-[700]">
              <span className="">Kigali</span> / {formattedTime}
            </p>
          </div>
          <div onClick={handleMenu} className="md:hidden cursor-pointer z-[99]">
            {menu ? <DragHandleIcon size={30} /> : <CloseIcon size={30} />}
          </div>
          <div
            className={
              !menu
                ? `fixed right-0 top-[0%] pt-20 w-[100%] left-0 h-full group border-r-gray-900 bg-[#171616] ease-in-out duration-500 md:left-[-100%] text-white`
                : "fixed right-[-100%] "
            }
          >
            {navigationItems.map((item, index) => (
              <ul key={index} className="flex gap-6 mt-8 group w-">
                <li className="pl-12 top-[19%]  cursor-pointer hover:text-gray-200">
                  <Link
                    to={item.path}
                    onClick={() => handleItemClick(item.path)}
                  >
                    {item.label}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
