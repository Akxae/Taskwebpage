import React from 'react';
import { ImPower } from "react-icons/im";
import { GoGraph } from "react-icons/go";
import { FiSmartphone } from "react-icons/fi";
import { IoMdCard } from "react-icons/io";
import { IoWifiOutline } from "react-icons/io5";
import { RiFileExcel2Fill } from "react-icons/ri";

const features = [
  {
    icon: <ImPower className='text-xl fill-emerald-400' />,
    heading: 'Instant Transaction',
    description: 'Odio euismod lacinia at quits. \n Amet purus gravida quits \n blandit turpis',
  },
  {
    icon: <GoGraph className='text-xl fill-emerald-400'/>,
    heading: 'Advanced Statics',
    description: 'Odio euismod lacinia at quits. \n Amet purus gravida quits \n blandit turpis',
  },
  {
    icon: <FiSmartphone className='text-xl fill-emerald-400'/>,
    heading: 'Mobile banking',
    description: 'Odio euismod lacinia at quits. \n Amet purus gravida quits \n blandit turpis',
  },
  {
    icon: <IoMdCard className='text-xl fill-emerald-400'/>,
    heading: 'Virtual Cards',
    description: 'Odio euismod lacinia at quits. \n Amet purus gravida quits \n blandit turpis',
  },
  {
    icon: <IoWifiOutline className='text-xl fill-emerald-400'/>,
    heading: 'Contactless Payments',
    description: 'Odio euismod lacinia at quits. \n Amet purus gravida quits \n blandit turpis',
  },
  {
    icon: <RiFileExcel2Fill className='text-xl fill-emerald-400'/>,
    heading: 'Saving Accounts',
    description: 'Odio euismod lacinia at quits. \n Amet purus gravida quits \n blandit turpis',
  },
];

function FeaturesLeft() {
  return (
    <div className="bg-white h-full w-1/2 p-12 flex flex-col items-center ">
      <h1 className='text-7xl font-medium ' >One app. <br /> One Banking.</h1>

      <div className="grid grid-rows-3 grid-cols-2 gap-4 mt-12 w-2/3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center border-2 border-gray-100 w-60 h-52 p-6 rounded-lg">
            <div className=" bg-gray-200 text-3xl mr-4 rounded-full p-1 relative right-20">{feature.icon}</div>
            <div>
              <h2 className="text-lg font-semibold">{feature.heading}</h2>
              <p className='text-sm'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesLeft;
