import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "../components/CardPokemon";
import NavBar from "../layouts/NavBar";
import { SearchBar } from "../components";

const SearchPage = () => {
  const location = useLocation();

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <SearchBar />
      <div className="container">
        <p className="p-search">
          Total encontrado : <span>{filteredPokemons.length}</span>
        </p>
        <div className="card-list-pokemon container">
          {filteredPokemons.map((pokemon) => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
