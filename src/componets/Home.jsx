import React from "react";
import { HiSearch } from "react-icons/hi";
import Main from "./Main";

const Home = () => {
  return (
    <div>
      <div className="container flex items-center justify-between gap-3 ml-5">
        <div className=" mt-7 mx-2">
          <h1 className="font-semibold text-2xl">Hello Arun</h1>
        </div>
        <div className="mr-10 mt-7">
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
