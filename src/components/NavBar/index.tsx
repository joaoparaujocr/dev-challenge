import Header from "./styles";
import Image from "next/image";
import Logo from "./../../../public/logo.svg";
import Link from "next/link";
import Search from "@/Icons/Search";

const NavBar = () => {
  return (
    <Header>
      <Image src={Logo} width={174} height={32} alt="Logo" />

      <nav>
        <Link href="/">Filmes</Link>
        <Link href="/">Séries</Link>
        <Link href="/">Minha Lista</Link>
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
