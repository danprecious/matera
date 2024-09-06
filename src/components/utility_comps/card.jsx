const Card = ({modifiedTitle, category, url, thumbnail}) => {
  
  
  return (
    <div className="md:min-w-[13rem] w-full max-w-[14rem] h-[13rem] mx-3 rounded-[7px] bg-bgShade overflow-hidden">
      <div className="h-[65%]"></div>
      <div className="h-[35%] px-1 text-textcolor border-bgShade bg-bg border ">
        <p className="font-medium text-sm">{modifiedTitle}</p>
        <p className="text-[0.65rem]">{category}</p>
      </div>
    </div>
  );
};

export default Card;
