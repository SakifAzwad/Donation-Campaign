/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const DonationCard = ({ data }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_col,
    price,
  } = data;

  return (
    <div className="">
      <div className="flex md:h-48 h-64 bg-base-100 rounded-lg">
        <figure className="">
          <img
            className="h-full w-96 rounded-l-lg"
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="w-full rounded-r-lg" style={{backgroundColor:category_bg}}>
          <div
            className="inline-block  px-2 py-1 ml-5 mt-6 rounded-lg text-sm font-medium"
            style={{ backgroundColor: card_bg, color: text_col }}
          >
            {category}
          </div>
          <div className="ml-5 pt-2 text-2xl font-bold">
            {title}
          </div>
          <div className="text-base font-semibold ml-5 pt-2" style={{color:text_col}}>
            {price}
          </div>
          <div className="card-actions">
            
            <Link to={`/details/${id}`} state={id}>
            <button className="rounded text-lg font-semibold ml-5 mt-3 w-36 h-10 text-white" style={{backgroundColor:text_col}}>View Details</button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
