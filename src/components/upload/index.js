const Upload = () => {
  return (
    <div className="flex justify-between flex-col">
      <div className="">
        <div>
          <h2 className="text-[1em] text-primary font-bold my-2">Uploads</h2>
          <p className="text-[0.7rem]">Click the button to make an upload...</p>
        </div>
      </div>
      <div>
        <button className="bg-primary text-white rounded-md px-3 py-2 w-[100%] font-medium">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;