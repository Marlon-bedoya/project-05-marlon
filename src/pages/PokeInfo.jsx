import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import PokeAbiType from "../components/PokeInfo/PokeAbiType"
import PokeStats from "../components/PokeInfo/PokeStats"
import PokeMovements from "../components/PokeInfo/PokeMovements"
import './styles/PokeCardInfo.css'

const PokeInfo = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon, getPekemon] = useFetch(url)

  useEffect(() => {
    getPekemon()
  }, [url])

  console.log(pokemon)

  return (
    <article className="info">
      <header className="info__header">
        <img className="Pokedex" src="Pokedex_11-removebg-preview.png" alt="Pokédex" />
      </header>
      <article className={`card_info br-${pokemon?.types[0].type.name}`}>
        <header className={`card__header bg-${pokemon?.types[0].type.name}`}>
          <img className="card__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <h1 className="Card__order">#{pokemon?.order}</h1>
        <h2 className={`card__name color-${pokemon?.types[0].type.name}`}> {pokemon?.name}</h2>
        <article className="Card__list-container">
          <ul className="card__list">
            <li className="">
              <span className="card__label">Weight </span>
              <span className="card__value">{pokemon?.weight}</span>
            </li>
            <li className="">
              <span className="card__label">Height </span>
              <span className="card__value">{pokemon?.height}</span></li>
          </ul>
        </article>
        < PokeAbiType
          PokeAbiType={pokemon}
        />

        < PokeStats
          pokestats={pokemon}
        />
      </article>

      <header className={`Movements br-${pokemon?.types[0].type.name}`}>
        <h2>Movements</h2>
        <PokeMovements
          PokeMove={pokemon}
        />
      </header>
    </article>
  )
}

export default PokeInfo