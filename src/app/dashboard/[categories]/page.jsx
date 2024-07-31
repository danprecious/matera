import {Suspense} from "react";

import { GetMaterials } from "@/utils/apiCall";
import Categories from "@/components/layouts/Categories";

const MaterialSection = async () => {
    
  return (
    <div className="w-[100%]">
        <Suspense fallback={<FallBacK />}>
          <Categories header="Material" countNumber={20}/>
        </Suspense>
    </div>
    
  );
};
 
const FallBacK = () =>{
  return(
    <div className="text-center">Fetching data, please hold on a bit...</div>
  )
}

export default MaterialSection;


