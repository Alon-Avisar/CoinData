import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Coins } from "./components/coins";
import { Navbar } from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { Coin } from "./components/coin";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        return setCoins(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin  />}>
        <Route path=":coinId" element={<Coin />} />

          </Route>
      </Routes>
    </div>
  );
}

export default App;
