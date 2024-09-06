import React from "react";

const Tabs = () => {
  const tabData = ["Civil", "Past questions", "Mech materials"];

  


  return (
    <div className="">
      <div className="md:ml-6">
        <h3 className="font-medium  text-secondary">Quick access</h3>
      </div>
      <div className="flex md:ml-6 py-2 overflow-x-scroll">
      {tabData.map((tabValue, index) => (
        <div key={index} className="p-[10px] mr-2 min-w-fit bg-bgShade rounded-[5px]">
          <p className="text-[0.8rem]">{tabValue}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Tabs;
