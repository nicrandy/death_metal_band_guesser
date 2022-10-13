import React from "react";
export const BandImg = (props) => {
    const bandImg = props.bandImg;
    console.log("band image: ",bandImg);
  return (
    <div className="header">
      <img id="logoImage" src={bandImg} alt="condemned logo" />
    </div>
  );
};
