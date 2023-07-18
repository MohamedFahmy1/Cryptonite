import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Market = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<
    [
      {
        id: number;
        image: string;
        name: string;
        current_price: number;
        price_change_percentage_24h: number;
        market_cap: number;
      }
    ]
  >();
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false
  `;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData().catch((error) => console.error("failed to fetch data"));
  }, [url]);

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const scrollMarket = () => {
    window.scrollTo({
      top: window.scrollY - 800,
      behavior: "smooth",
    });
  };
  const buttons = [];
  for (let i = 1; i <= 5; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => {
          return setPage(i), scrollMarket();
        }}
        className={i === page ? "activePagi" : ""}
      >
        {i}
      </button>
    );
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="market" id="market">
      <div className="container">
        <div className="market-content">
          <h2>Market Update</h2>
          <div className="market-content__coin-list">
            <div className="market-content__coin-list__top">
              <p>Coin</p>
              <p>Price</p>
              <p>24h Change</p>
              <p>Market Cap</p>
            </div>
            <div
              onLoad={() => setIsLoading(false)}
              className="market-content__coin-list__row"
            >
              {isLoading && <span className="loader"></span>}
              {isLoading && (
                <p
                  style={{ textAlign: "center", width: "100%", color: "white" }}
                >
                  Too Many Requests This is a free api only for testing please
                  wait 10 min then load the page again
                </p>
              )}
              {data?.map((item) => (
                <Link
                  onClick={scrollTop}
                  href={`/${item.id}`}
                  className="coin-row"
                  key={item.id}
                >
                  <span>
                    <Image
                      loader={() => item.image}
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      unoptimized
                    />
                    {item.name}
                  </span>
                  <p>{"$ " + item.current_price.toFixed(2)}</p>
                  <p
                    className={
                      "slider-coin__price " +
                      (item.price_change_percentage_24h >= 0 ? "green" : "red")
                    }
                  >
                    {item.price_change_percentage_24h?.toFixed(2) + " %"}
                  </p>
                  <p>{"$ " + numberWithCommas(item.market_cap)}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="market-content__coin-list__pagination">{buttons}</div>
        </div>
      </div>
    </section>
  );
};

export default Market;
