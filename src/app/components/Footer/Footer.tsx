/** @format */

import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="col col-1">
            <h1>
              De<span className="primary">Fi</span>
            </h1>
          </div>
          <div className="col">
            <h5>Support</h5>
            <span className="bar"></span>
            <a href="/">Contact Up</a>
            <a href="/">Chat</a>
            <a href="/">Help Center</a>
            <a href="/">FAQ</a>
          </div>
          <div className="col">
            <h5>Developers</h5>
            <span className="bar"> </span>
            <a href="/">Cloud</a>
            <a href="/">Commerce</a>
            <a href="/">Pro</a>
            <a href="/">API</a>
          </div>
          <div className="col">
            <h5>Company</h5>
            <span className="bar"> </span>
            <a href="/">About</a>
            <a href="/">Information</a>
            <a href="/">Legal</a>
            <a href="/">Privacy</a>
          </div>
          <div className="col">
            <h5>Social</h5>
            <span className="bar"> </span>
            <a
              href="https://www.instagram.com/winterdao.nft/"
              target="_blank"
              rel="noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://twitter.com/winterdaonft"
              target="_blank"
              rel="noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.facebook.com/winterdaonft/"
              target="_blank"
              rel="noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=EiW4lKrMXQ4"
              target="_blank"
              rel="noreferrer">
              <FaYoutube className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
