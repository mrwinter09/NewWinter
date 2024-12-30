/** @format */

import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Featured.css"; // Ensure this path is correct

type Coin = {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  price: number;
  priceChange1d: number;
};

const Featured = () => {
  const [coins, setCoins] = useState<Coin[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCoins = async () => {
      const url = "https://openapiv1.coinstats.app/coins?limit=6";
      const options = {
        headers: {
          "X-API-KEY": "5Ez2jtAA85vhISZTH5hU3jR75TZ4igmDLGhUcTuSMSA=",
          accept: "application/json",
        },
      };

      const coinsDataFeature = localStorage.getItem("coinsDataFeature");
      if (coinsDataFeature) {
        setCoins(JSON.parse(coinsDataFeature));
      } else {
        try {
          const response = await axios.get(url, options);
          localStorage.setItem(
            "coinsDataFeature",
            JSON.stringify(response.data.result),
          );
          setCoins(response.data.result);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchCoins();
  }, []);

  if (!coins) return null;

  const cryptochart = () => {
    console.log("Wagwan Fam, We got you");
    router.push("/");
  };

  return (
    <>
      <div className="featured">
        <div className="container">
          {/* Left Side */}
          <div className="left">
            <h2>
              Explore top Crypto&apos;s Like Bitcoin, Ethereum and Dogecoin
            </h2>
            <p>See all available assets: Cryptocurrencies and NFT&apos;s</p>
            <button className="btn" onClick={cryptochart}>
              See More Coins
            </button>
          </div>

          {/* Right Side */}
          <div className="right">
            {coins.map((coin) => {
              return (
                <Link href={`/coinpage/${coin.id}`} key={coin.id}>
                  <div className="card">
                    <div className="top">
                      <Image
                        src={coin.icon}
                        alt={coin.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="bottom">
                      <h5>{coin.symbol}</h5>
                      <p>
                        $
                        {coin.price.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                    {coin.priceChange1d < 0 ? (
                      <span className="red">
                        <FiArrowDownRight className="icon" />{" "}
                        {coin.priceChange1d.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="green">
                        <FiArrowUpRight className="icon" />{" "}
                        {coin.priceChange1d?.toFixed(2)}%
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
