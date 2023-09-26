/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ShowDetails = ({data}) => {
    //console.log(data);
    const divStyle = {
        backgroundColor: 'rgba(11, 11, 11, 0.5)', // Red color with 50% opacity
      };
    const {id,picture,title,category,category_bg,card_bg,text_col,description,price}=data;
    return (
        <div>
            <img className="w-full h-[500px] mx-auto px-32 mt-8 " src={picture} alt="" />
            <div style={divStyle} className="relative -top-24 mx-32 h-24 rounded-b-lg">
                <button style={{backgroundColor:text_col}} className="text-white rounded-lg px-4 py-3 mt-5 ml-8 text-lg font-bold">Donate {price}</button>
            </div>
            <h1 className="relative -top-8 font-bold text-4xl mx-32">{title}</h1>
            <p className="mx-32 mb-24 text-base font-normal">{description}</p>


        </div>
    );
};

export default ShowDetails;