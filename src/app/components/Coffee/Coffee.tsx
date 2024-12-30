/** @format */
"use client";
import Image from "next/image";
import "react-phone-number-input/style.css";
import React, { useState } from "react";
import "./Coffee.css";
import Crypto from "../../assets/tradeFluf.png";
import {
  TransactionButton,
  useActiveAccount,
  useContractEvents,
  useReadContract,
} from "thirdweb/react";
import { prepareContractCall, toWei } from "thirdweb";
import { contract } from "@/app/utils/contracts";

const Coffee = () => {
  const account = useActiveAccount();
  const [tipAmount, setTipAmount] = useState(0);
  const [message, setMessage] = useState("");

  const { data: totalCoffee, refetch: refetchTotalCoffee } = useReadContract({
    contract: contract,
    method: "getTotalCoffee",
  });

  const { data: contractEvents, refetch: refetchContractEvents } =
    useContractEvents({
      contract: contract,
    });

  const truncateWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const convertDate = (timestamp: bigint) => {
    const timestampNumber = Number(timestamp);
    return new Date(timestampNumber * 1000).toLocaleString();
  };

  if (account) {
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
                Your support fuels our journey to revolutionize the tea
                industry.
              </p>
              <h2>
                Curious about our progress or have suggestions? Let&apos;s stay
                connected.
              </h2>
              <div className="input-container">
                <div className="input-form">
                  <div>
                    <label>Tip Amount</label>
                    <h4>Must be greater than 0</h4>
                    <input
                      type="number"
                      value={tipAmount}
                      onChange={(e) => setTipAmount(Number(e.target.value))}
                      step={0.001}
                    />
                  </div>
                  <div>
                    <label>Message</label>
                    <textarea
                      rows={8}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter a message"
                    ></textarea>
                  </div>
                  {message && tipAmount > 0 && (
                    <TransactionButton
                      className="btn btn-coffee"
                      transaction={() =>
                        prepareContractCall({
                          contract: contract,
                          method: "buyMeACoffee",
                          params: [message],
                          value: BigInt(toWei(tipAmount.toString())),
                        })
                      }
                      onTransactionConfirmed={() => {
                        alert("Thank you for the coffee");
                        setTipAmount(0);
                        setMessage("");
                        refetchTotalCoffee();
                        refetchContractEvents();
                      }}
                    >
                      Buy A Coffee
                    </TransactionButton>
                  )}
                </div>
                <div>
                  <h4>Total Coffee:{totalCoffee?.toString()}</h4>
                  <p>Recent Coffees:</p>
                  {contractEvents &&
                    contractEvents.length > 0 &&
                    [...contractEvents].reverse().map((event, index) => (
                      <div key={index} className="tip-card">
                        <div className="tip-address">
                          {/* @ts-ignore */}
                          <h5>{truncateWalletAddress(event.args.sender)}</h5>
                          {/* @ts-ignore */}
                          <h5>{convertDate(event.args.timestamp)}</h5>
                        </div>
                        <div className="tip-message">
                          {/* @ts-ignore */}
                          <h5>{event.args.message}</h5>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Coffee;
