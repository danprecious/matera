import Upload from "../upload";

const RightSidebar = () => {
  return (
    <div className="hidden lg:grid px-2 py-5   rounded-b-[10px]">
      <div>
        <h2 className="text-[1em] text-primary font-bold my-2">Downloads</h2>
        <p className="text-[0.7rem]">There are no downloads yet...</p>
      </div>
      <Upload />
    </div>
  );
};

export default RightSidebar;
