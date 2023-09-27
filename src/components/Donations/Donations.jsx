import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donations = () => {

    const [data, setData] = useState([]);
    const [isShow,setIsShow] = useState(false);
    useEffect(() => {
        const datas = JSON.parse(localStorage.getItem("item"));
    
        if (datas) {
          setData(datas);
        }
      }, []);

    return (
        <div>
      {
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:mx-32 mx-8 mt-8 mb-24">
            {
                isShow ? data.map((data) => (
                    <DonationCard key={data.id} data={data}></DonationCard>
                    )) 
                  : data.slice(0,4).map((data) => (
                    <DonationCard key={data.id} data={data}></DonationCard>
                  ))
            }
          </div>

          {data.length > 4 && <button onClick={()=>setIsShow(!isShow)} className={`${isShow ? 'hidden' : " px-5 rounded text-lg text-white bg-[#FF444A] font-semibold w-36 h-10 block mx-auto"} `}>
            {isShow ? "" : "See more"}
          </button>}
        </div>
      }
    </div>
  );
};

export default Donations;