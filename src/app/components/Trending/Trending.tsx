/** @format */
"use client";
import axios from "axios";
import "./Trending.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Trending = () => {
  const [trending, setTranding] = useState<any[]>([]);
  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTranding(response.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!trending) return null;

  return (
    <>
      <div className="trending">
        <div className="container">
          <h1> Trending </h1>
          <div className="trending-layout">
            {trending.map((trend, idx) => {
              return (
                <div key={idx} className="trending-items">
                  <div className="trending-content">
                    <Link href={`/cryptochart/${trend.item.id}`}>
                      <div className="trending-left">
                        <Image
                          src={trend.item.small}
                          alt={trend.item.name}
                          width={64}
                          height={64}
                        />
                        <div>
                          <p>{trend.item.name}</p>
                          <p>{trend.item.symbol}</p>
                        </div>
                      </div>
                    </Link>
                    <div className="trending-right">
                      <Image
                        src={
                          "https://static.coinstats.app/coins/1650455588819.png"
                        }
                        alt={"trend.item.name"}
                        width={30}
                        height={30}
                      />
                      <p>{trend.item.price_btc.toFixed(7)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
