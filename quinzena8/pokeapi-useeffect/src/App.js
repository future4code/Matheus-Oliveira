import React, { useState, useEffect} from 'react'
import "./styles.css"
import axios from "axios"
import PokeCard from "./components/PokeCard"

export default function App() {
  const [PokeList, setPokeList] = useState([])
  const [PokeName, setPokeName] = useState("")

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [PokeList, PokeName])
 
  const changePokeName = event => {
    setPokeName(event.target.value)
  }

    return (
      <div className="App">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {PokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            )
          })}
        </select>
        {PokeName && <PokeCard pokemon={PokeName} />}
      </div>
    )
}
