import React, { useState, useEffect } from "react";
import {
  RiDashboardLine,
  RiShoppingCartLine,
  RiMegaphoneLine,
  RiQuestionnaireLine,
  RiSettingsLine,
} from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoPeople, IoCashOutline } from "react-icons/io5";
import boy from '../utility/Icons/boy.png';
const icons = {
  dashboard: RiSettingsLine,
  product: RiShoppingCartLine,
  customer: IoPeople,
  income: IoCashOutline,
  promote: RiMegaphoneLine,
  help: RiQuestionnaireLine,
};
const SideNavbar = () => {
  const menus = [
    { title: "Dashboard", icon: "dashboard" },
    { title: "Product", icon: "product" },
    { title: "Customers", icon: "customer" },
    { title: "Income", icon: "income" },
    { title: "Promote", icon: "promote" },
    { title: "Help", icon: "help" },
  ];

  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768);
    };

    setOpen(window.innerWidth > 768);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`container h-full min-h-screen ${
        open ? "" : "w-20"
      } transition-width duration-10 ease-in-out`}
    >
      <div className="flex flex-col h-screen relative overflow-hidden md:flex-col">
        <div className="m-6 sm:m-5 ">
          <h1
            className="text-2xl text-white flex items-center cursor-pointer ml-1 sm:mt-auto sm:ml-2"
            onClick={toggleSidebar}
          >
            <RiDashboardLine className="mr-2" />
            {open && <span className="sm:inline-block ">Dashboard</span>}
          </h1>
        </div>
        <ul>
          {menus.map((menu, index) => (
            <li
              key={index}
              className="text-gray-300 text-xl flex items-center gap-x-4 
             hover:bg-light-white  rounded-md cursor-pointer p-2 m-5"
            >
              <span className="text-white text-2xl">
                {React.createElement(icons[menu.icon])}
              </span>
              <p
                className={`flex-col flex-grow  m-2 sm:text-xl ${
                  open ? "" : "hidden"
                } md:flex`}
              >
                {menu.title}
              </p>
              {index !== 0 && (
                <IoIosArrowForward
                  size={20}
                  className={`flex-colflex-grow ml-auto  ${
                    open ? "" : "hidden"
                  } md:flex`}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div className=" m-6 sm:m-5  mt-28  bg-light-white rounded-md">
          <h1 className="text-2xl text-white flex items-center cursor-pointer ml-2 sm:mt-5  rounded-md p-2">
            <img
              src={boy}
              alt="Product"
              className="w-12 h-12 rounded-full sm:h-10 sm:w-10"
            />
            <span className="sm:inline-block text-[16px] ml-4  ">Evano</span>
            <IoIosArrowForward
              size={20}
              className={`flex-colflex-grow ml-auto  ${
                open ? "" : "hidden"
              } md:flex`}
            />
          </h1>
        </div>
      )}
    </div>
  );
};

export default SideNavbar;
