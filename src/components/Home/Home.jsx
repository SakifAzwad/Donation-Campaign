/* eslint-disable no-unused-vars */
import { useState } from "react";
import Data from "../Data/Data";
import useGetData from "../hook/useGetData";
import "./Home.css";

const Home = () => {

    const [datas] = useGetData()
    const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);

    const filteredResults = datas.filter(
      (item) =>
        item.category.toLowerCase() === searchTerm.toLowerCase()
    );

    setSearchResults(filteredResults);
    setIsSearching(false);
  };

  return (
    <div>
      <div className="pic1 h-[500px]"></div>
      <div>
        <h1 className="ban1 flex items-center justify-center lg:text-5xl md:text-4xl text-2xl font-bold pt-24">
          I Grow By Helping People In Need
        </h1>
        <div className="sea1 flex justify-center items-center">
        <input className="lg:w-1/4 px-7 py-3.5 rounded-l-lg border-r-0 border-2 border-solid" type="text" value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search here...."/>
        
        <button onClick={handleSearch} disabled={isSearching} className="text-lg text-white rounded-r-lg font-semibold bg-[#FF444A] px-7 py-[13px]">
              Search
            </button>
        </div>
      </div>
        {
          searchResults.length>0 ? (

            <Data datas={searchResults}></Data>
          ) : (

            <Data datas={datas}></Data>
          )

        }
    </div>
  );
};

export default Home;
