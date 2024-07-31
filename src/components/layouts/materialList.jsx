
const MaterialList = ({header}) => {
  return <div className="p-5 w-[100%]">
  <div><h1 className="text-[1.1rem] mb-8 font-bold">{header}</h1></div>
    <Material />
    <Material />
    <Material />
    <Material />
  </div>;
};

const Material = () => {
  return (
    <div className="flex my-2">
      <div className="flex w-[95%]">
        <div className="w-[50px] h-[50px] rounded-md bg-slate-200"></div>
        <div className="mx-2 flex place-items-center ">
          <p>Control systems</p>
        </div>
      </div>
      <div className="flex place-items-center">:</div>
    </div>
  );
};

export default MaterialList;
