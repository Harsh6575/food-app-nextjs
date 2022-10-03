/* eslint-disable @next/next/no-img-element */
import React from "react";

const SpecialityContent = ({ imgSrc1, imgSrc2,foodName }) => {
  return (
    <div className="box">
      <img className="image" src={imgSrc1} alt="" />
      <div className="content">
        <img src={imgSrc2} alt="" />
        <h3>{foodName}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          inventore neque amet ipsa tenetur voluptates aperiam tempore libero
          labore aut.
        </p>
      </div>
    </div>
  );
};

export default SpecialityContent;
