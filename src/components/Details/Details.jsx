

import { useLoaderData, useParams } from "react-router-dom";
import ShowDetails from "./ShowDetails";

const Details = () => {
    
    
    const {id}=useParams();
    const datas=useLoaderData();
    
    console.log(id,datas);
    const data=datas.find(data=>data.id==id)

    console.log(data);
    
    return (
        <div>
          <ShowDetails data={data}></ShowDetails>  
        </div>
    );
};

export default Details;