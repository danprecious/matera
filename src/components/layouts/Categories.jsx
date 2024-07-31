
import { GetMaterials } from "@/utils/apiCall";
import Card from "../utility_comps/card";

const Categories = async ({ header, countNumber }) => {
  const data = await GetMaterials();

  const count = await data.slice(0, countNumber);

  return (
    <div className="max-w-[100%]  p-4">
      <h1 className="text-[1.6rem] grid p-2 font-bold">{header}</h1>
      <div className="my-grid my-2 ">
        {count.map((material, index) => {
          const { title, category, url, thumbnail } = material;
          // modify the title to only contain 20 chars
          const maxTitleLength = 20;
          let modifiedTitle;
          title.length > maxTitleLength
            ? (modifiedTitle = title.slice(0, 20) + "...")
            : (modifiedTitle = title);
          

          const propsObject = {
            modifiedTitle,
            category,
            url,
            thumbnail,
          };
          return <Card key={index} {...propsObject} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
