/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ShowData = ({ data }) => {
    const {id,picture,title,category,category_bg,card_bg,text_col,description,price}=data;
    
    
  
    return (
    <div>
      <Link to={`/details/${id}`} state={id}>
      <div className="card w-80 bg-base-100 rounded-lg">
        <figure>
          <img className="w-full h-48"
            src={picture}
            alt=""
          />
        </figure>
        <div className="h-24 rounded-b-lg" style={{backgroundColor:category_bg}}>
          <div className="inline-block px-2 py-1 ml-5 mt-3 rounded-lg text-sm font-medium" style={{backgroundColor:card_bg, color:text_col}}>
            {category}
          </div>
          <div className="ml-5 pt-2 text-xl font-bold" style={{color:text_col}}>
            {title}
          </div>
        </div>
      </div>
      </Link>
      
    </div>
  );
};

export default ShowData;
