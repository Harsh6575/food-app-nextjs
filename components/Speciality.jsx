/* eslint-disable @next/next/no-img-element */
import React from "react";
import SpecialityContent from "./SpecialityContent";

const Speciality = () => {
  return (
    <section id="speciality" className="speciality">
      <h1 className="heading">
        our <span>speciality</span>
      </h1>
      <div className="box-container">
        <SpecialityContent
            imgSrc1="images/s-img-1.jpg"
            imgSrc2="images/s-1.png"
            foodName="tasty burger"
        />
        <SpecialityContent
            imgSrc1="images/s-img-2.jpg"
            imgSrc2="images/s-2.png"
            foodName="tasty pizza"
        />
        <SpecialityContent
            imgSrc1="images/s-img-3.jpg"
            imgSrc2="images/s-3.png"
            foodName="Cold Ice-cream"
        />
        <SpecialityContent
            imgSrc1="images/s-img-4.jpg"
            imgSrc2="images/s-4.png"
            foodName="Cold Drink"
        />
        <SpecialityContent
            imgSrc1="images/s-img-5.jpg"
            imgSrc2="images/s-5.png"
            foodName="tasty sweets"
        />
        <SpecialityContent
            imgSrc1="images/s-img-6.jpg"
            imgSrc2="images/s-6.png"
            foodName="healthy breakfast"
        />
      </div>
    </section>
  );
};

export default Speciality;
