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
    setOpen(!open);
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
    <div className="container h-full min-h-screen">
      <div className="flex flex-col h-screen relative overflow-hidden md:flex-col">
        <div className="m-6 sm:m-5">
          <h1
            className="text-2xl text-white flex items-center cursor-pointer"
            onClick={toggleSidebar}
          >
            <RiDashboardLine className="mr-2" />
            {open && <span className="hidden sm:inline-block">Dashboard</span>}
          </h1>
        </div>
        <ul className={`p-6 flex-col flex-grow overflow-y-auto m-0 ${open ? "" : "hidden"} md:flex`}>
          {menus.map((menu, index) => (
            <li
              key={index}
            className="text-gray-300 text-xl flex items-center gap-x-4 
             hover:bg-light-white  rounded-md cursor-pointer p-2 ml-5 mr-5 mt-2 mb-5"
            >
              <span className="text-white">
                {React.createElement(icons[menu.icon])}
              </span>
              <p>{menu.title}</p>
              {index !== 0 && <IoIosArrowForward size={20}  className="ml-auto"/>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
