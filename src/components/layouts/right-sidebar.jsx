
const RightSidebar = () => {
  return (
    <div className="hidden lg:grid w-[23%]  ml-5 p-5 mr-2  bg-white  rounded-b-[10px]">
      <div>
        <h2 className="text-[1em] text-primary font-bold my-2">
          Downloads
        </h2>
        <p className="text-zinc-300 text-[0.7rem]">There are no downloads yet...</p>
      </div>
      <div className="flex justify-between flex-col">
        <div className="">
          <div>
            <h2 className="text-[1em] text-primary font-bold my-2">
              Uploads
            </h2>
            <p className="text-zinc-300 text-[0.7rem]">Click the button to make an upload...</p>
          </div>
          </div>
          <div><button className="bg-secondary text-white rounded-md px-3 py-2 w-[100%] font-medium">Upload</button></div>
      </div>
    </div>
  );
};

export default RightSidebar;
