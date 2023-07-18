import React, { useState } from "react";
import Header from "../components/Header";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";

const Coin = ({
  coin,
}: {
  coin: {
    id: string;
    name: string;
    description: {
      en: string;
    };
    market_data: {
      price_change_percentage_24h: number;
      current_price: {
        usd: number;
      };
    };
    coingecko_rank: number;
    image: { large: string };
    symbol: string;
  };
}) => {
  const [loadCoin, setLoadCoin] = useState(true);
  function numberWithCommas(x: number) {
    return x
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <Header />
      <section className="coinPage">
        <div className="container">
          <div onLoad={() => setLoadCoin(false)} className="coin-content">
            <div className="coin-content__img-side">
              {loadCoin && <span className="loader"></span>}
              {coin.image ? (
                <Image
                  loader={() => coin.image.large}
                  src={coin.image.large}
                  alt={coin.id}
                  width={200}
                  height={200}
                  unoptimized
                />
              ) : null}
              <Link href={"/"} className="close">
                X
              </Link>
              <h2>{coin.name}</h2>
              <p>Rank: #{coin.coingecko_rank}</p>
            </div>
            <div className="coin-content__text-side">
              <div className="numb">
                <div className="coin-content__text-side__24h">
                  <span>24h Change:</span>
                  <p
                    className={
                      coin.market_data.price_change_percentage_24h >= 0
                        ? "green"
                        : "red"
                    }
                  >
                    {coin.market_data
                      ? coin.market_data.price_change_percentage_24h.toFixed(
                          2
                        ) + "%"
                      : ""}
                  </p>
                </div>
                <div className="coin-content__text-side__current">
                  <span>Price:</span>
                  <p className={"green"}>
                    {coin.market_data
                      ? "$" +
                        numberWithCommas(coin.market_data.current_price.usd)
                      : null}
                  </p>
                </div>
                <div className="coin-content__text-side__symbol">
                  <p>Symbol:</p>
                  <span>{coin.symbol}</span>
                </div>
              </div>
              {loadCoin && <span className="loader"></span>}
              <div className="description">
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      coin.description ? coin.description.en : ""
                    ),
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Coin;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const req = context.req;
  const res = context.res;
  const coinId = context.params?.coinID;
  try {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new SyntaxError("check url entered");
    }
    const responseData = await response.json();
    return {
      props: {
        coin: responseData,
      },
    };
  } catch (error) {
    console.error("failed to fetch data");
  }
}

// export async function getStaticPaths(context: GetStaticPropsContext) {
//   return {
//     fallback: false,
//     paths: [
//       {
//         params: {
//           coinID: "bitcoin",
//         },
//       },
//     ],
//   };
// }
// export async function getStaticProps(context: GetStaticPropsContext) {
//   const coinId = context.params!.coinID;
//   try {
//     const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new SyntaxError("check url entered");
//     }
//     const responseData = await response.json();
//     return {
//       props: {
//         coin: responseData,
//       },
//     };
//   } catch (error) {
//     console.error("failed to fetch data");
//   }
// }
