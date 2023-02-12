import React from "react";
import { CoinItem } from "./coin-item";
import "../assets/styles/cmps/coins.scss";
import { Link } from "react-router-dom";
import { Coin } from "./coin";

export const Coins = (props) => {
  console.log("asfaf", props.coins);
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
      </div>
      {props.coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`}  key={coins.id} element={<Coin />}>
            <CoinItem coins={coins} key={coins.id} />
          </Link>
        );
      })}
    </div>
  );
};
