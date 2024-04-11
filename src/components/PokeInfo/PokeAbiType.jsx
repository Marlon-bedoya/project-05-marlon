

const PokeAbiType = ({ PokeAbiType }) => {


  return (
      <article>
        <span>Type</span>
       <ul>
        {
            PokeAbiType?.types.map(typeInfo => (
                <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))
        }
       </ul>
       <ul>
        <span>Abilities</span>
        {
            PokeAbiType?.abilities.map(abiliInfo => (
                <li key={abiliInfo.ability.url}>{abiliInfo.ability.name}</li>
            ))
        }
       </ul>
      </article>
  )
}

export default PokeAbiType