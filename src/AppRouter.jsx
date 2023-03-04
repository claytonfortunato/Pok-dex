import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";
import SearchPage from "./pages/SearchPage";
import Home from "./layouts/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/homepage" element={<HomePage />} />
      <Route path="pokemon/:id" element={<PokemonPage />} />
      <Route path="search" element={<SearchPage />} />
    </Routes>
  );
};
