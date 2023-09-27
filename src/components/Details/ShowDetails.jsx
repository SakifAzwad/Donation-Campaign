/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import swal from 'sweetalert';

const ShowDetails = ({ data }) => {
  const divStyle = {
    backgroundColor: "rgba(11, 11, 11, 0.5)", // Red color with 50% opacity
  };
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_col,
    description,
    price,
  } = data;

  const buttonClick = () => {
    const addedDataArray = [];

    const Items = JSON.parse(localStorage.getItem("item"));
    if (!Items) {
      addedDataArray.push(data);
      localStorage.setItem("item", JSON.stringify(addedDataArray));
      swal("Congratulations", "Thanks for donating!!", "success");
    } else {
      const isExits = Items.find((data) => data.id === id);
      if (!isExits) {
        addedDataArray.push(...Items, data);
        localStorage.setItem("item", JSON.stringify(addedDataArray));
        swal("Congratulations", "Thanks for donating!!", "success");
      } else {
        swal("Congratulations", "Thanks for donating again!!", "success");
      }
    }
  };

  return (
    <div>
      <img
        className="w-full h-[500px] mx-auto px-8 lg:px-32 mt-8 "
        src={picture}
        alt=""
      />
      <div
        style={divStyle}
        className="relative -top-24 mx-8 lg:mx-32 h-24 rounded-b-lg"
      >
        <button
          onClick={() => {
            buttonClick();
          }}
          style={{ backgroundColor: text_col }}
          className="text-white rounded-lg px-4 py-3 mt-5 ml-8 text-lg font-bold"
        >
          Donate {price}
        </button>
        
      </div>
      <h1 className="relative -top-8 font-bold text-4xl mx-8 lg:mx-32">{title}</h1>
      <p className="lg:mx-32 mx-8 mb-24 text-base font-normal">{description}</p>
    </div>
  );
};

export default ShowDetails;
