import React, { useContext } from "react";

import NavBar from "../layouts/NavBar";
import PokemonList from "../components/PokemonList";
import { PokemonContext } from "../context/PokemonContext";
import Footer from "../layouts/Footer";
import { SearchBar } from "../components";
import { AiOutlineArrowDown } from "react-icons/ai";

import "./HomePage.scss";

const HomePage = () => {
  const { onClickLoadMore } = useContext(PokemonContext);

  return (
    <>
      <NavBar />
      <SearchBar />
      <PokemonList />
      <div className="container-btn-load-more container">
        <button className="btn-load-more" onClick={onClickLoadMore}>
          <AiOutlineArrowDown />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
