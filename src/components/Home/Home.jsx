import Data from "../Data/Data";
import useGetData from "../hook/useGetData";
import "./Home.css";

const Home = () => {

    const [datas] = useGetData()


  return (
    <div>
      <div className="pic1 h-[500px]"></div>
      <div>
        <h1 className="ban1 flex items-center justify-center lg:text-5xl md:text-4xl text-2xl font-bold pt-24">
          I Grow By Helping People In Need
        </h1>
        <div className="sea1 flex justify-center items-center">
        <input className="lg:w-1/4 px-7 py-3.5 rounded-l-lg border-r-0 border-2 border-solid" type="text" placeholder="Search here...."/>
        
        <button className="text-lg text-white rounded-r-lg font-semibold bg-[#FF444A] px-7 py-[13px]">
              Search
            </button>
        </div>
      </div>
        <Data datas={datas}></Data>
    </div>
  );
};

export default Home;
