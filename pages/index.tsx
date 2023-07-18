import { Fragment } from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import ChooseUs from "../components/ChooseUs";
import Join from "../components/Join";
import Footer from "../components/Footer";
import Market from "../components/Market";

const HomePage: React.FC<{
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
  return (
    <Fragment>
      <Header />
      <Landing data={data} />
      <Market />
      <ChooseUs />
      <Join />
      <Footer />
    </Fragment>
  );
};

export default HomePage;

export async function getStaticProps() {
  try {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false";
    const response = await fetch(url);
    const responseData = await response.json();
    return {
      props: {
        data: responseData,
      },
      revalidate: 500,
    };
  } catch (error) {
    console.error("failed to fetch data!");
  }
}
