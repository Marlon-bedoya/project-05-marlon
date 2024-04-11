
const PokeMovements = ({ PokeMove }) => {
 
 
return (
    <div >
        {
            PokeMove?.moves.map( moveInfo => (
                <li key={moveInfo.move.url}>{moveInfo.move.name}</li>
            ))
        }
    </div>

  )
}

export default PokeMovements