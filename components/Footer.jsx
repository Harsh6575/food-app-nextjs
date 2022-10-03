import React from "react";

import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare,AiFillLinkedin} from 'react-icons/ai';

import {BsGithub, BsPinterest} from 'react-icons/bs';

const Footer = () => {
  return (
    <section className="footer">
      <div className="share">
        <a href="https://www.facebook.com/harsh.vansjaliya" className="btn social">
          <AiFillFacebook/>facebook
        </a>
        <a href="https://www.instagram.com/mr.hppatel_777/" className="btn social">
            <AiFillInstagram/>
          instagram
        </a>
        <a href="https://github.com/Harsh6575" className="btn social">
            <BsGithub/>Github
        </a>
        <a href="https://www.linkedin.com/in/harsh-vansjaliya-904825226/" className="btn social">
            <AiFillLinkedin/>
          linkedin
        </a>
      </div>
      <h1 className="credit">
        created by <span> Harsh Vansjaliya </span> | all rights reserved!
      </h1>
    </section>
  );
};

export default Footer;
