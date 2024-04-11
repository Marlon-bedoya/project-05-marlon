
const PokeStats = ({ pokestats }) => {



  return (
    <div>
      <h2>Stats</h2>
      <article>
        {
          pokestats?.stats.map(statInfo => (
            <li key={statInfo.stat.url}>
              <span>{statInfo.stat.name} </span> 
              <span>{statInfo.base_stat}</span> 
              <br/> 1            
            </li>
          ))
        }
      </article>
    </div>
  )
}

export default PokeStats