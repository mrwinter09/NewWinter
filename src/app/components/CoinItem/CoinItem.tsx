/** @format */

import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import "./CoinItem.css";

const CoinItem = ({ initialCoins }: { initialCoins: any }) => {
  const [savedCoin, setSavedCoin] = useState(false);

  const saveCoin = () => {
    // Assuming the user is authenticated elsewhere, we will just toggle the saved state
    setSavedCoin(!savedCoin);
    alert(`Coin ${savedCoin ? "removed from" : "added to"} your watch list`);
  };

  return (
    <>
      <tr className="coin-item-row" key={initialCoins.id}>
        {/*  */}
        <td onClick={saveCoin}>
          {savedCoin ? <AiFillStar size={25} /> : <AiOutlineStar size={25} />}
        </td>
        {/*  */}
        <td>{initialCoins.rank}</td>
        {/*  */}
        <td>
          <Link href={`/cryptochart/${initialCoins.id}`} passHref>
            <div className="td-coin-icon">
              <Image
                src={initialCoins.icon}
                alt={initialCoins.name}
                width={30}
                height={30}
              />
              <p className="coin-name">{initialCoins.name}</p>
            </div>
          </Link>
        </td>
        {/*  */}
        <td className="coin-symbol mobile">
          <span>{initialCoins.symbol}</span>
        </td>
        {/*  */}
        <td>
          <span className="coin-price">
            $
            {initialCoins.price.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </span>
        </td>
        {/*  */}
        <td className="coin-percent">
          <span
            className={
              initialCoins.priceChange1d > 0
                ? "coin-percent green"
                : "coin-percent red"
            }
          >
            {initialCoins.priceChange1d}%
          </span>
        </td>
        {/*  */}
        <td className="coin-volume mobile">
          <span>
            $
            {initialCoins.volume.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </span>
        </td>
        {/*  */}
        <td className="coin-volume mobile">
          <span>
            $
            {initialCoins.marketCap.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </span>
        </td>
      </tr>
    </>
  );
};

export default CoinItem;
