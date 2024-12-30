/** @format */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Hero.css";
import TimeTravel from "../../assets/herotravel-img.png"; // Added the new image

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setEmail("");
  };
  return (
    <>
      <div className="hero">
        <div className="container">
          {/* Left Side */}
          {/* TODO connect the email with a mail explaining how swapping works*/}
          <div className="left">
            <h1>Empowering Your Crypto Journey with Art and Innovation</h1>
            <h4>Discover the Future with Influences of the 80s</h4>
            <br></br>
            <p>
              Welcome to WinterDAO, where we channel the vibrant spirit of the
              80s into the forefront of digital innovation with FluffTime
              Traveler. Immerse yourself in a realm where art converges with
              technology, creating a unique ecosystem of digital assets. Engage
              with our platform to explore, trade, and collect distinctive NFTs
              and meme coins that capture the quintessence of this iconic era.
            </p>
            <br></br>
            <p>
              WinterDAO leverages FluffTime Traveler NFTs to offer exclusive
              gated access to exciting project launches and meme coin presales,
              ensuring our community members never miss out. Holding an NFT
              allows you to access sample products, claim tokens at presale
              prices, and secure your front-row seat to innovation. Anticipate
              our NFT launch in Q3 and stay ahead of the curve by subscribing
              today.
            </p>

            <div className="input-container">
              <Link href="/coffee" passHref>
                <button className="btn">Learn More</button>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="right">
            <div className="img-container">
              <Image
                src={TimeTravel}
                alt=""
                style={{
                  filter: "drop-shadow(0px 0px 24px #a726a9a8)",
                }}
              />{" "}
              {/* Updated the image */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
