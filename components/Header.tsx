import {
  faFacebook,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolly, setScrolly] = useState<number>(0);
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {
    function scrollHandler() {
      setScrolly(window.scrollY);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const menuActiveHandler = () => {
    setMenuActive(true);
  };
  const menuDeactiveHandler = () => {
    setMenuActive(false);
  };
  return (
    <header className={scrolly > 50 ? "sticky" : undefined}>
      <div className="container">
        <div className="logo">Cryptonite</div>
        <nav>
          <ul className={menuActive ? "links active" : "links"}>
            <li className="close" onClick={menuDeactiveHandler}>
              X
            </li>
            <li onClick={menuDeactiveHandler}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={menuDeactiveHandler}>
              <a href="#market">Market</a>
            </li>
            <li onClick={menuDeactiveHandler}>
              <a href="#chooseUs">Choose Us</a>
            </li>
            <li onClick={menuDeactiveHandler}>
              <a href="#join">Join</a>
            </li>
          </ul>
        </nav>
        <ul className="social">
          <li>
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faDiscord} className="icon" />
          </li>
          <li onClick={menuActiveHandler}>
            <FontAwesomeIcon icon={faBarsStaggered} className="menu" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
