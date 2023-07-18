import React, { useState } from "react";
import coin1 from "../images/hero/bitcoin.png";
import coin2 from "../images/hero/ethereum.png";
import Image from "next/image";
import Link from "next/link";

const Landing: React.FC<{
  data: [
    {
      id: string;
      name: string;
      image: string;
      current_price: number;
      price_change_percentage_24h: number;
    }
  ];
}> = ({ data }) => {
  // const [data, setData] = useState<
  //   | []
  //   | [
  //       {
  //         id: string;
  //         name: string;
  //         image: string;
  //         current_price: number;
  //         price_change_percentage_24h: number;
  //       }
  //     ]
  // >([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new SyntaxError("chech url entered.");
  //     }
  //     const responseData = await response.json();
  //     setData(responseData);
  //   };
  //   fetchData().catch((error) => {
  //     console.error(error);
  //   });
  // }, []);

  function numberWithCommas(x: number) {
    return x
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <section className="landing">
      <div className="container">
        <div className="text">
          <Image src={coin1} alt="coin" className="bitcoin" unoptimized />
          <h1>
            TRACK YOUR FAVOURITE <br />
            <span> CRYPTO CURRENCIES</span>
          </h1>
          <Image src={coin2} alt="coin" className="ether" unoptimized />
        </div>
        <div className="coins">
          {Array.isArray(data) &&
            data.map((coin) => {
              return (
                <Link href={`/${coin.id}`} className="coin" key={coin.id}>
                  <Image
                    loader={() => coin.image}
                    src={coin.image}
                    alt={coin.name}
                    className="image"
                    width={90}
                    height={90}
                    unoptimized
                  />
                  <p>
                    {coin.name}
                    <span
                      className={
                        coin.price_change_percentage_24h > 0 ? "green" : "red"
                      }
                    >
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </p>
                  <p>{"$ " + numberWithCommas(coin.current_price)}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Landing;
