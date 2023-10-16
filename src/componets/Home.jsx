import React from "react";
import { HiSearch } from "react-icons/hi";
import Main from "./Main";

const Home = () => {
  return (
    <div className="flex flex-wrap bg-gray-100">
    <div className="container flex items-center justify-between  ">
    <div className="mt-5 sm:mt-7 ml-10 sm:ml-5">       
       <h1 className="font-semibold text-xl">Hello Arun</h1>
        </div>
        <div className="mt-5 sm:mt-7 mr-10 sm:mr-9 sm:ml-5 ">
          <span className="relative">
            <HiSearch
              color="#333"
              size={20}
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
            />
          </span>
          <input
            placeholder="Search"
            className="p-2 pl-8 border border-gray-300 rounded"
          />
        </div>
      </div>
      <Main />
    </div>
  );
};

export default Home;