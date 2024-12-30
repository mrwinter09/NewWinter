/** @format */
import PhoneInput from "react-phone-number-input";
import Image from "next/image";
import "react-phone-number-input/style.css";
import React, { useState } from "react";
import "./Signup.css";
import Crypto from "../../assets/tradeFluf.png";

const Signup = () => {
  const [phoneValue, setPhoneValue] = useState<string | undefined>();
  return (
    <>
      <div className="signup">
        <div className="container">
          {/* Left Side */}
          <div className="left">
            <Image
              src={Crypto}
              alt=""
              style={{
                filter: "drop-shadow(0px 0px 24px #a726a9a8)",
              }}
            />
          </div>

          {/* Right Side  */}
          <div className="right">
            <h1>Support The Velvetti Tea Project</h1>
            <p>
              Your contributions help us brew the future of tea with a dash of
              crypto flair. Support The Velvetti tea project by buying us a
              coffee, and join us in blending traditional tea culture with
              modern blockchain technology. As we develop The Velvetti,
              supporters like you will receive exclusive updates, early access
              to new tea blends, and a taste of our limited edition launches.
              Your support fuels our journey to revolutionize the tea industry.
            </p>
            <h2>
              Curious about our progress or have suggestions? Let&apos;s stay
              connected.
            </h2>
            <div className="input-container">
              <div className="input-form">
                <form
                  action="https://getform.io/f/f9c1847d-cbc0-4a5b-8810-e3eadf58cbb2"
                  method="POST"
                  encType="multipart/form-data"
                  target="_blank"
                >
                  <div className="top">
                    <div>
                      <label>Name</label>
                      <input type="text" name="name" required />
                      <input
                        type="hidden"
                        name="_gotcha"
                        className="hidden"
                      ></input>
                    </div>
                    <div>
                      <label>Phone Number</label>
                      <PhoneInput
                        value={phoneValue}
                        onChange={setPhoneValue}
                        name="phone-number"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label>Email</label>
                    <input type="email" name="email" required />
                  </div>
                  <div>
                    <label>Subject</label>
                    <input type="text" name="subject" required />
                  </div>
                  <div>
                    <label>Message</label>
                    <textarea rows={8} name="message" required></textarea>
                  </div>
                  <div>
                    <label>Upload Screenshot</label>
                    <input
                      type="file"
                      name="photos[]"
                      multiple
                      accept=".png, .jpg, .jpeg, webp, .mp4, .mov, .webm"
                    />
                  </div>
                  <button className="btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
