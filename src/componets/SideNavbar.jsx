import React from "react";
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
  dashboard: RiDashboardLine,
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

  return (
    <div className="container h-full min-h-screen">
      <div className="flex flex-col h-screen bg-dark-purple relative overflow-hidden">
        <div className="m-6">
          <h1 className="text-2xl text-white flex items-center">
            <RiSettingsLine className="mr-2" />
            Dashboard
          </h1>
        </div>
        <ul className="pt-6 flex-row flex-grow overflow-y-auto p-0 m-0">
          {menus.map((menu, index) => (
            <li
              key={index}
              className="text-gray-300 text-xl flex items-center gap-x-4 
             hover:bg-light-white  rounded-md cursor-pointer p-2 ml-5 mr-5 mt-2"
            >
              <span className="text-white">{React.createElement(icons[menu.icon])}</span>
              <p>{menu.title}</p>
              {index !== 0 && <IoIosArrowForward className="ml-auto" size={20} />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
