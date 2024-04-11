import FormTrainer from "../components/HomePage/FormTrainer"
import './styles/HomePag.css'

const HomePages = () => {
  return (
    <div className="Home">
      <header className="Home__header">
        <img className="Home__img" src="Pokedex_11-removebg-preview.png" alt="Pokédex" />
      </header>
      <article className="Home__container">
        <h2 className="Home__h2">¡hi trainer!</h2>
        <h3 className="Home__h3">to see pokemon's information tell me your trainer name</h3>
      </article>
      <FormTrainer

      />
      <article className="Home__container-b" >
        <img className='pokeball' src="Pokeball-removebg-preview.png" alt="" />
      </article>
    </div>
  )
}

export default HomePages