import {
  faWallet,
  faBolt,
  faSatellite,
  faChessKing,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import chooseUs from "../images/chooseus/choose-main.png";
import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";

const ChooseUs = () => {
  return (
    <section className="chooseUs" id="chooseUs">
      <div className="container">
        <h1>
          WHY <span>CHOOSE US</span>
        </h1>
        <div className="content">
          <div className="boxContainer">
            <div className="box">
              <FontAwesomeIcon icon={faWallet} className="icon" />
              <div className="text">
                <h2>CONNECT YOUR WALLET</h2>
                <p>Use Trust Wallet, Metamask or to connect to the app.</p>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faEthereum} className="icon" />
              <div className="text">
                <h2>SELECT YOUR QUANTITY</h2>
                <p>
                  Upload your crypto and set a title, description and price.
                </p>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faBolt} className="icon" />
              <div className="text">
                <h2>CONFIRM TRANSACTION</h2>
                <p>Earn by selling your crypto on our marketplace.</p>
              </div>
            </div>
          </div>
          <Image src={chooseUs} alt="Hand carrying bitcoin" className="image" />
          <div className="boxContainer">
            <div className="box">
              <FontAwesomeIcon icon={faSatellite} className="icon" />
              <div className="text">
                <h2>RECEIVE YOUR OWN NFTS</h2>
                <p>Invest all your crypto at one place on one platform.</p>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faChessKing} className="icon" />
              <div className="text">
                <h2>TAKE A MARKET TO SELL</h2>
                <p>
                  Discover, collect the right crypto collections to buy or sell.
                </p>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faBitcoin} className="icon" />
              <div className="text">
                <h2>DRIVE YOUR COLLECTION</h2>
                <p>We make it easy to Discover, Invest and manage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
