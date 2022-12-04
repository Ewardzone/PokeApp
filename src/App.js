import GlobalStyles from "./styles/GlobalStyles";
import Search from "./components/search/Search";
import "./App.css";
import Card from "./components/pokeCard/card/Card";
import { MyAppStyles } from "./AppStyles";
import axios from "axios";
import { useState } from "react";
import Loader from "../src/components/loader/Loader";
import { initialScreen } from './data/initialScreen'

function App() {
  const [data, setData] = useState(initialScreen);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null)
    setError(false)
    setIsLoading(true)

    try{
      let selectedPokemon = pokemon.toLowerCase().trim()
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      setData(data)
    }catch (error) {
      setError('Pokemon not found')
    }
    setIsLoading(false)
  };

  return (
    <>
      <MyAppStyles>
        <Search handleSubmit={handleSubmit} />
        {isLoading && <Loader/>}
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        {data && <Card {...data} />}
      </MyAppStyles>
      <GlobalStyles />
    </>
  );
}

export default App;
