import SearchBox from "./SearchBox";
const MainBox = ({ data }) => {
  return (
    <div className="w-full bg-white p-4 mt-12 min-h-[700px] rounded-2xl ">
      <SearchBox data={data} />
    </div>
  );
};

export default MainBox;
