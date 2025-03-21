import React from "react";

const RoundedHeader = ({ title }) => {
  return (
    <div className="border text-white w-fit border-slate-500 rounded-full px-4 py-2 bg-gradient-to-r from-gray-600 to-darkblack">
      <h1 className="text-[13px]  font-medium ">{title}</h1>
    </div>
  );
};

export default RoundedHeader;
