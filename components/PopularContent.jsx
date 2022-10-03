/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaStar } from "react-icons/fa";


const PopularContent = ({foodName,imgSrc}) => {
  return (
    <div className="box">
      <span className="price"> $5 - $20 </span>
      <img src={imgSrc} alt="" />
      <h3>{foodName}</h3>
      <div className="stars">
        <i>
          <FaStar />
        </i>
        <i>
          <FaStar />
        </i>
        <i>
          <FaStar />
        </i>
        <i>
          <FaStar />
        </i>
        <i>
          <FaStar />
        </i>
      </div>
      <a href="#" className="btn">
        order now
      </a>
    </div>
  );
};

export default PopularContent;
