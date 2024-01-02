import React from "react";
import Greeting from "../../_local-components/greeting";
import Tabs from "../../_local-components/tab";
import Categories from "../../_local-components/Categories";
import MaterialList from "../../_local-components/materialList";
import RightSidebar from "../../_local-components/right-sidebar";

const Dashboard = () => {
  return (
    <div className="flex w-[100%] p-5 flex-col">
      <div className="">
        <Greeting />
      </div>

      <div className="">
        <Tabs />
      </div>
      <div className="my-14">
        <Categories header="Recent Checks" countNumber={4}/>
      </div>
      <div className="md:flex p-4 md:justify-space-between">
        <MaterialList header="Check out.." />
        <MaterialList header="Past Questions" />
      </div>
    </div>
  );
};

export default Dashboard;

// <Categories header="Categories for you" />

// <Categories header="What your collegues are reading" />
// <Categories header="Recent Pick ups" />
