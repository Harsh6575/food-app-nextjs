/* eslint-disable @next/next/no-img-element */
import React from "react";
import PopularContent from "./PopularContent";

const Popular = () => {
  return (
    <section id="popular" className="popular">
      <h1 className="heading">
        most <span>popular</span> foods
      </h1>
      <div className="box-container">
        <PopularContent foodName="tasty burgers" imgSrc="images/p-1.jpg" />
        <PopularContent foodName="tasty cakes" imgSrc="images/p-2.jpg" />
        <PopularContent foodName="tasty sweets" imgSrc="images/g-5.jpg" />
        <PopularContent foodName="tasty cupcakes" imgSrc="images/p-4.jpg" />
        <PopularContent foodName="cold drinks" imgSrc="images/p-5.jpg" />
        <PopularContent foodName="Candies" imgSrc="images/p-6.jpg" />
        <PopularContent foodName="Ice cream" imgSrc="images/menu-4.jpg" />
      </div>
    </section>
  );
};

export default Popular;
