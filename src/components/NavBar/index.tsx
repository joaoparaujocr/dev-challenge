import Header from "./styles";
import Image from "next/image";
import Logo from "./../../../public/logo.svg";
import Link from "next/link";
import Search from "@/Icons/Search";
import { useState } from "react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Header menuIsVisible={isVisible}>
      <Image src={Logo} width={174} height={32} alt="Logo" />

      <nav>
        <button onClick={() => setIsVisible(!isVisible)}>
          <span />
        </button>
        <ul>
          <li>
            <Link href="/">Filmes</Link>
          </li>
          <li>
            <Link href="/">Séries</Link>
          </li>
          <li>
            <Link href="/">Minha Lista</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Search />

        <div>
          <p>DC</p>
        </div>
      </div>
    </Header>
  );
};

export default NavBar;
