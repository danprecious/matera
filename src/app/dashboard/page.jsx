import Greeting from "@/components/utility_comps/greeting";
import Tabs from "@/components/utility_comps/tab";
import Categories from "@/components/layouts/Categories";
import MaterialList from "@/components/layouts/materialList";


const Dashboard = () => {
    return (
      <div className="flex w-[100%] p-5 flex-col">
        <div className="">
          <Greeting />
        </div>
  
        <div className="my-4 md:my-0">
          <Tabs />
        </div>
        <div className="lg:my-14 my-6">
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
  