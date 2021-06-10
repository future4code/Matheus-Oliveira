import React, { useState, useEffect} from 'react'
import axios from "axios";

export default function PokeCard(props) {
  const [Pokemon, setPokemon] = useState({})

  useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
        .then(response => {
          setPokemon(response.data)
        })
        .catch(err => {
          console.log(err);
        });
  }, [Pokemon, props.pokemon])

    return (
      <div>
        <p>{Pokemon.name}</p>
        <p>{Pokemon.weight} Kg</p>
        {Pokemon.types && <p>{Pokemon.types[0].type.name}</p>}
        {Pokemon.sprites && (
          <img src={Pokemon.sprites.front_default} alt={Pokemon.name} />
        )}
      </div>
    );
}

