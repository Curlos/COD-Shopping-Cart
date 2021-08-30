import getKillstreaks from '../utils/getKillstreaks'
import Killstreak from './Killstreak'

const Killstreaks = ({ productType }) => {
  if (productType !== 'Killstreaks') {
    return null
  }

  const killstreaks = getKillstreaks()

  console.log(Object.keys(killstreaks))

  return (
    <div className="productsContainer">
      {Object.keys(killstreaks).map((name, i) => {
        const killstreak = killstreaks[name]
        const image = killstreak.image
        const description = killstreak.description
        const price = killstreak.price
        
        return (
          <Killstreak name={name} key={i} image={image} description={description} price={price}/>
        )
      })}
    </div>
  )
}

export default Killstreaks;