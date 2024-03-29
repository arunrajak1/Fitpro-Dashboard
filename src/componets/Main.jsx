import React from "react";
import {
  IoWalletOutline,
  IoBagHandleOutline,
  IoArrowDown,
  IoArrowUp,
  IoChevronDown,
} from "react-icons/io5";
import { RiMoneyDollarCircleLine, RiArticleLine } from "react-icons/ri";
import { HiSearch } from "react-icons/hi";
import "../style.css";
import pic1 from '../utility/Icons/pic1.png';
import pic2 from '../utility/Icons/pic2.png';
import { PieChart, Pie, Cell, Label, BarChart, Bar, XAxis,ResponsiveContainer } from "recharts";
const Main = () => {
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
    { name: "Aug", uv: 2500, pv: 3300, amt: 2400 },
    { name: "Sep", uv: 4500, pv: 5400, amt: 3500 },
    { name: "Oct", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Nov", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Dec", uv: 2780, pv: 3908, amt: 2000 },
  ];

  const data2 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <>
 <div className="custom-container mx-auto ">
 <div className="flex flex-row sm:flex-col gap-4 mt-5 sm:mt-10 ml-5 mr-5 sm:mr-0">
          <BoxWrapper>
            <div className="rounded-full h-28 w-28 flex items-center justify-center bg-green-200">
              <RiMoneyDollarCircleLine size={70} className="text-green-600" />
            </div>
            <div className="mt-2 ml-1 ">
              <span className=" text-sm text-gray-500 ml-2">Earning</span>
              <div className="">
                <strong className="text-2xl">$198K</strong>
              </div>
              <div className="">
                <span className=" text-green-600 ">
                  <IoArrowUp size={16} className="inline" />
                  37%
                </span>
                <span className="text-sm">this month</span>
              </div>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="rounded-full h-28 w-28 flex items-center justify-center bg-purple-200">
              <RiArticleLine size={70} className="text-purple-600" />
            </div>
            <div className="mt-2 ml-1">
              <span className=" text-sm text-gray-500">Orders</span>
              <div className="">
                <strong className="text-2xl">$2.4K</strong>
              </div>
              <div className="">
                <span className=" text-red-500">
                  <IoArrowDown size={16} className="inline" />
                  2%
                </span>
                <span className="text-sm">this month</span>
              </div>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="rounded-full h-28 w-28 flex items-center justify-center bg-sky-200">
              <IoWalletOutline size={70} className="text-sky-600" />
            </div>
            <div className="mt-2 ml-1">
              <span className=" text-sm text-gray-500">Balance</span>
              <div className="">
                <strong className="text-2xl">$2.4K</strong>
              </div>
              <div className="">
                <span className=" text-red-500">
                  <IoArrowDown size={16} className="inline" />
                  2%
                </span>
                <span className="text-sm">this month</span>
              </div>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="rounded-full h-28 w-28 flex items-center justify-center bg-pink-200">
              <IoBagHandleOutline size={70} className="text-pink-600" />
            </div>
            <div className="mt-2 ml-1">
              <span className=" text-sm text-gray-500">Total Sales</span>
              <div className="">
                <strong className="text-2xl">$89K</strong>
              </div>
              <div className="">
                <span className=" text-green-600">
                  <IoArrowUp size={16} className="inline" />
                  11%
                </span>
                <span className="text-sm">this month</span>
              </div>
            </div>
          </BoxWrapper>
        </div>
        <div className="flex  mt-10  gap-10  ml-5 sm:flex-col sm:gap-7 md:m-5">
    <div className="basis-[70%] ">
      <div className="w-full bg-white rounded-lg p-4 border sm:w-11/12 ">
        <div className="flex items-center justify-between ml-2">
          <h1 className="font-semibold text-xl">Overview</h1>
          <div className="flex items-center cursor-pointer text-gray-400">
            <span>Quarterly</span>
            <IoChevronDown className="ml-1" />
          </div>
        </div>
        <div className="text-sm ml-2 text-gray-400">
          <span>Monthly Earning</span>
        </div>
        <div className="mt-10 ">
        <ResponsiveContainer width="100%" height={300}>
             <BarChart
          
            width={750}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 30,
              bottom: 20,
            }}
          >
            <XAxis
              dataKey="name"
              padding={{ left: 10, right: 10 }}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 16 }}
            />

            <Bar dataKey="pv" fill="#5D3FD3" radius={[10, 10, 10, 10]} />
          </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
   
      <div className="bg-white rounded-lg w-1/4 border sm:w-11/12 ">
        <div className="ml-5 mt-5">
          <h1 className="font-semibold text-xl">Customers</h1>
        </div>
        <span className="text-gray-400 text-sm ml-5">
          Customers that buy products
        </span>
        <ResponsiveContainer width="100%" height={300}>
        <PieChart width={300} height={300} >
          <Pie
            data={data2}
            cx={140}
            cy={140}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data2.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value="65%"
              position="center"
              fill="#000"
              fontSize={16}
              className="text-2xl font-semibold"
            />
          </Pie>
        </PieChart>
        </ResponsiveContainer>
        
      </div>
  </div>
        <div className="bg-white rounded-lg border  mr-5 mt-10  ml-5 sm:w-fit  ">
          <div className="mt-2 ml-5 flex items-center sm:gap-2 ">
            <h1 className="text-2xl sm:text-xl">Product Sell</h1>
            <div className="ml-auto mr-2 mt-2 sm:m-0">
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
            <div className="flex items-center cursor-pointer text-gray-400  mt-2 ">
              <span className="m-1">Last 30 days</span>
              <IoChevronDown className="m-2" />
            </div>
          </div>
          <div className="mt-5 ml-5 flex flex-col mb-2 ">
            <div className=" flex items-center justify-between ">
              <h1 className="text-sm text-gray-400">Product Name</h1>
              <div className="flex items-center   gap-24 ml-auto mr-5 sm:gap-4">
                <span>Stoke</span>
                <span>Price</span>
                <span>Total Seles</span>
              </div>
            </div>
            <span className="border mt-2"></span>
            
            <div className=" flex items-center justify-between mt-5">
                <img
                  src={pic1}
                  alt="Product"
                  className="w-20 h-12 rounded-md sm:h-10 sm:w-10"
                />
                <h1 className="text-xl font-semibold ml-5 sm:text-sm">
                  Abstract 3D
                </h1>
                <div className="flex items-center   gap-24 ml-auto mr-10 sm:gap-2 ">
                  <span>32 in Stoke</span>
                  <span className="font-semibold">$45.99</span>
                  <span>20</span>
                </div>
              </div>
              <div className=" flex items-center justify-between mt-5">
                <img
                  src={pic2}
                  alt="Product"
                  className="w-20 h-12 rounded-md sm:h-10 sm:w-10"
                />
                <h1 className="text-xl font-semibold ml-5 sm:text-sm">
                  Sarphens Illustration
                </h1>
                <div className="flex items-center   gap-24 ml-auto mr-10 sm:gap-2">
                  <span>32 in Stoke</span>
                  <span className="font-semibold">$45.99</span>
                  <span>20</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-md p-4  border flex items-center sm:w-11/12 gap-4 ">
      {children}
    </div>
  );
}
