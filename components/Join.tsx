import Image from "next/image";
import Link from "next/link";
import bitcoin from "../images/hero/bitcoin.png";
import ether from "../images/hero/ethereum.png";
const Join = () => {
  return (
    <section className="join" id="join">
      <div className="container">
        <Image
          src={bitcoin}
          alt="bitcoin"
          width={80}
          height={80}
          className="bitcoin"
        />
        <h1>
          JOIN US VIA <br />
          <span>DISCORD</span>
        </h1>
        <Image
          src={ether}
          alt="etherium"
          width={80}
          height={80}
          className="ether"
        />
        <p>Invest and manage all your crypto at one place.</p>
        <Link href="https://www.discord.com" target="_blank">
          <button>Join via Discord</button>
        </Link>
      </div>
    </section>
  );
};

export default Join;
