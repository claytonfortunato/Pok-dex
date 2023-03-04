import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import "./SearchBar.scss";

export const SearchBar = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });
    onResetForm();
  };

  return (
    <>
      <header className="container-search">
        <h1>Mais de 250 pokemons para voce escolher!</h1>
        <form onSubmit={onSearchSubmit}>
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
              onClick={onSearchSubmit}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Buscar nome de pokemon"
            />
          </div>
        </form>
      </header>

      <Outlet />
    </>
  );
};
