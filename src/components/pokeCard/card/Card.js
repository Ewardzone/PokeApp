import React from 'react'
import { CardContainerStyles, CardTextStyles, CardStatsStyles, CardTypeStyles } from '../card/CardStyles'
import PokemonImage from '../pokeImage/PokeImage'
import StatusBar from '../statusBar/StatusBar'
import Type from '../../type/Type'



const Card = (props) => {

  const {name, order, sprites, stats, types} = props;

  return (
    
    <CardContainerStyles>
      <PokemonImage image={sprites?.other.home.front_default} alr={name} />
      <CardTextStyles>
        <h2>{name}</h2>
        <h3>{order}</h3>
      </CardTextStyles>
      <CardStatsStyles>
      {stats?.slice(0, 4).map((stat) =>(
        <StatusBar
        key={stat.stat.name}
        {...stat}
        firstType={types[0].type.name}
        />
      )
      )}
      </CardStatsStyles>
      <CardTypeStyles>
      {types?.map((type) => (
          <Type key={type.slot} typeName={type.type.name} />
        ))}
      </CardTypeStyles>
    </CardContainerStyles>

  )
}

export default Card