/** @format */
"use client";
import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { slice } from "lodash";
import CoinItem from "../CoinItem/CoinItem";
import "./Coinstats.css";

const Coinstats = () => {
  const [searchText, setSearchText] = useState("");
  const [coins, setCoins] = useState<any[] | null>(null);
  const [index, setIndex] = useState(10);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const url = "https://openapiv1.coinstats.app/coins?limit=1000";
    const options = {
      headers: {
        "X-API-KEY": "5Ez2jtAA85vhISZTH5hU3jR75TZ4igmDLGhUcTuSMSA=",
        accept: "application/json",
      },
    };

    const coinsData = localStorage.getItem("coinsData");
    if (coinsData) {
      setCoins(JSON.parse(coinsData));
    } else {
      axios
        .get(url, options)
        .then((response) => {
          localStorage.setItem(
            "coinsData",
            JSON.stringify(response.data.result),
          );
          setCoins(response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const loadMore = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 10;
      {
        /* @ts-ignore */
      }
      setIsCompleted(newIndex >= (coins?.length ?? 0));
      return newIndex;
    });
  };

  const displayedCoins = useMemo(() => {
    const filteredCoins =
      coins?.filter(
        (coin: { name: string }) =>
          searchText === "" ||
          coin.name.toLowerCase().includes(searchText.toLowerCase()),
      ) || [];
    return slice(filteredCoins, 0, index);
  }, [coins, searchText, index]);

  if (!coins) return null;

  return (
    <>
      <div className="stats">
        <div className="container">
          {/* banner */}
          <div className="search-banner">
            <h1> Search Crypto </h1>
            <form>
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                placeholder="Search a coin"
              />
            </form>
          </div>
          {/* banner */}
          <table>
            <thead>
              <tr>
                <th></th>
                <th>#</th>
                <th>Coin</th>
                <th className="mobile"></th>
                <th>Price</th>
                <th className="mobile">24H</th>
                <th className="mobile">24H Volume</th>
                <th className="mobile">Mkt</th>
              </tr>
            </thead>
            <tbody>
              {displayedCoins.map((coin: any) => (
                <CoinItem key={coin.rank} initialCoins={coin} />
              ))}
            </tbody>
          </table>
          <div className="sb-blog-container">
            {isCompleted ? (
              <button
                type="button"
                className="btn btn-primary disabled"
                id="sb-button"
              >
                That&apos;s It
              </button>
            ) : (
              <button
                onClick={loadMore}
                type="button"
                className="btn btn-primary"
                id="sb-button"
              >
                Laad meer
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Coinstats;
