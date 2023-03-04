import React from "react";
import { Link } from "react-router-dom";
import "./CardPokemon.scss";

const CardPokemon = ({ pokemon }) => {
  const typeSelect = (type) => {
    switch (type) {
      case "normal":
        return "#f4f4f4";
        break;
      case "grass":
        return "#E2F9E1";
        break;
      case "ground":
        return " #f4e7da";
        break;
      case "fighting":
        return "#FF8274";
        break;
      case "rock":
        return "#d5d5d4";
        break;
      case "steel":
        return "#b9b7cf";
        break;
      case "fire":
        return "#FBE3DF";
        break;
      case "electric":
        return "rgb(255, 255, 161)";
        break;
      case "flying":
        return "#E6E0D4";
        break;
      case "psychic":
        return "#eaeda1";
        break;
      case "bug":
        return "#F6D6A7";
        break;
      case "dragon":
        return "#97b3e6";
        break;
      case "water":
        return "#E0F1FD";
        break;
      case "ice":
        return "#98d5d6";
        break;
      case "poison":
        return "#e0a7f6";
        break;
      case "dark":
        return "#AD866C";
        break;
      case "ghost":
        return "#B45ADB";
        break;
      case "fairy":
        return "rgba(255, 192, 203, 0.863)";
        break;
    }
  };

  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="card-pokemon"
      style={{ backgroundColor: typeSelect(pokemon.types[0].type.name) }}
    >
      <span className="pokemon-id">#0{pokemon.id}</span>
      <div className="card-img">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className="card-info">
        <h3>{pokemon.name}</h3>
        <div className="card-types">
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CardPokemon;
