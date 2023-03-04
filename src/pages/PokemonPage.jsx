import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { PokemonContext } from "../context/PokemonContext";
import "./PokemonPage.scss";
import { Link } from "react-router-dom";

import height from "../../image/heightPokemon.svg";
import weight from "../../image/weightPokemon.svg";
import back from "../../image/back-arrow.svg";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <div className="container-pokemon-page">
      <Link to="/homepage">
        <button className="back-homepage">
          <img src={back} alt="back-arrow" />
        </button>
      </Link>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="header-main-pokemon">
            <div className="status-name">
              <h1>{pokemon.name}</h1>
              <span>#{pokemon.id}</span>
            </div>
            <div className="container-img-pokemon">
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>

            <div className="container-info-pokemon">
              <div className="group-info">
                <p>Peso</p>
                <img src={weight} alt="" />
                <span>{pokemon.weight}</span>
              </div>
              <div className="card-type">
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className={`${type.type.name}`}>
                    {type.type.name}
                  </span>
                ))}
              </div>

              <div className="group-info">
                <p>Altura</p>
                <img src={height} alt="" />
                <span>{pokemon.height}</span>
              </div>
            </div>

            <div className="container-stats">
              <div className="stats">
                <h4>Hp</h4>
                <div className="stat-group">
                  <Progress percent={pokemon.stats[0].base_stat} />
                </div>
                <h4>Attack</h4>
                <div className="stat-group">
                  <Progress percent={pokemon.stats[1].base_stat} />
                </div>
                <h4>Defense</h4>
                <div className="stat-group">
                  <Progress percent={pokemon.stats[2].base_stat} />
                </div>
                <h4>Special Attack</h4>
                <div className="stat-group">
                  <Progress percent={pokemon.stats[3].base_stat} />
                </div>
                <h4>Special Defense</h4>
                <div className="stat-group">
                  <Progress percent={pokemon.stats[4].base_stat} />
                </div>
                <h4>Speed</h4>
                <div className="stat-group">
                  <Progress percent={pokemon.stats[5].base_stat} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonPage;
