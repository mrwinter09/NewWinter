"use client";
import { TransactionButton, useActiveAccount } from "thirdweb/react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./claim.css";
import { defineChain, getContract } from "thirdweb";
import { client } from "../client";
import { polygonAmoy } from "thirdweb/chains";
import { claimTo } from "thirdweb/extensions/erc721";

export default function NftClaim() {
  const account = useActiveAccount();
  return (
    <>
      <Navbar />
      <div className="sign">
        <div className="container">
          <h1>Claim NFT</h1>
          <p>You can claim the access NFT here</p>
          <TransactionButton
            className="btn"
            transaction={() =>
              claimTo({
                contract: getContract({
                  client: client,
                  chain: defineChain(polygonAmoy),
                  address: "0xF7c007aa844b5f3621958Fb8D5C359e07F30a12F",
                }),
                to: account?.address || "",
                quantity: 1n,
              })
            }
            onTransactionConfirmed={async () => {
              alert("NFT claimed");
            }}
          >
            Claim NFT
          </TransactionButton>
        </div>
      </div>
      <Footer />
    </>
  );
}
