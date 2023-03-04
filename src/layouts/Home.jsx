import { Link } from "react-router-dom";

import PokemonHome from "../../image/pokemon-home.png";
import Footer from "./Footer";

import "./Home.scss";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <div className="home-container">
          <h1>Qual pokémon</h1>
          <h2>você escolheria?</h2>
          <p>Você pode ver todas as informações dos Pokémon!</p>
          <br />
          <ul>
            <li className="item">
              <Link to={"/homepage"}>Escolha os Pokémons !</Link>
            </li>
          </ul>
        </div>

        <img src={PokemonHome} alt="pokemon" />
      </div>

      <Footer />
    </>
  );
};

export default Home;
