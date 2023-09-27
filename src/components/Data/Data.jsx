/* eslint-disable react/prop-types */
import ShowData from "./ShowData";

const Data = ({ datas }) => {

    
  return (
    <div>
      <div  className="relative -top-[120px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-16 mr-4 gap-y-8">
        {datas?.map((data) => (
          <ShowData key={data.id} data={data}></ShowData>
        ))}
      </div>
    </div>
  );
};

export default Data;
