import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import {
  SearchFormStyles,
  InputStyles,
  ButtonStyles,
} from "../search/SearchStyles";

const Search = ({ handleSubmit }) => {
  const [pokemon, setPokemon] = useState("");

  return (
    <SearchFormStyles
      onSubmit={(e) => {
        handleSubmit(e, pokemon);
        setPokemon("");
      }}
    >
      <InputStyles
        value={pokemon}
        placeholder="Search a Pokemon"
        onChange={(e) => {
          setPokemon(e.target.value);
        }}
      />
      <ButtonStyles type="submit">
        <ImSearch size="1.5em" color="black" />
      </ButtonStyles>
    </SearchFormStyles>
  );
};

export default Search;
