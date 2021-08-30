import getKillstreaks from '../utils/getKillstreaks'
import Killstreak from './Killstreak'
import { nanoid } from 'nanoid'

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
        const uniqueID = nanoid()
        
        return (
          <Killstreak name={name} key={uniqueID} id={uniqueID} image={image} description={description} price={price}/>
        )
      })}
    </div>
  )
}

export default Killstreaks;