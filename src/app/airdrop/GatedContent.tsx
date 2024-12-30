"use client";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./airdrop.css";

export const GatedContent = () => {
  return (
    <>
      <Navbar />
      <div className="sign">
        <div className="container">
          <h1>Access Granted</h1>
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc20.html?contract=0x151Ca0DbAf921CACB33b1616e10573C940a6D66C&chain=%7B%22name%22%3A%22Polygon+Amoy+Testnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F80002.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22polygonamoy%22%2C%22chainId%22%3A80002%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22polygon-amoy-testnet%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=5430ddfe188ae1d7fdb3902959158063&theme=system&primaryColor=purple"
            className="responsive-iframe"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};
