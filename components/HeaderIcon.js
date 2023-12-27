import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div
      className="flex items-center cursor-pointer sm:h-14 sm:px-6 md:px-10
     md:hover:bg-gray-100 rounded-xl md:active:border-b-2 md:active:border-blue-500 group"
    >
      <Icon
        className={`h-5 text-center mx-auto sm:h-7 text-gray-500 group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
};

export default HeaderIcon;
