import React from "react";
import {
  ImageBoxStyles,
  ImageContainerStyles,
} from "./PokeImageStyles";

const PokemonImage = ({ image, alt }) => {
  return (
    <ImageContainerStyles>
      <ImageBoxStyles>
        <img src={image} alt={alt} />
      </ImageBoxStyles>
    </ImageContainerStyles>
  );
};

export default PokemonImage;