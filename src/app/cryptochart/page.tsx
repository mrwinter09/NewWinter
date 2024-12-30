/** @format */

import React from "react";
import Coinstats from "../components/Coinstats/Coinstats";
import Footer from "../components/Footer/Footer";
import Trending from "../components/Trending/Trending";
import Navbar from "../components/Navbar/Navbar";

const CryptoChartPage = () => {
  return (
    <>
      <Navbar />
      <Coinstats />
      <Trending />
      <Footer />
    </>
  );
};

export default CryptoChartPage;
