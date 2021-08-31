import getKillstreaks from '../utils/getKillstreaks'
import Killstreak from './Killstreak'
import { Link } from 'react-router-dom'

const Killstreaks = ({ productType }) => {
  if (productType !== 'Killstreaks') {
    return null
  }

  const killstreaks = getKillstreaks()

  return (
    <div className="productsContainer">
      {Object.keys(killstreaks).map((name, i) => {
        const killstreak = killstreaks[name]
        const shortened_id = String(killstreak.id).substring(2, 12)
        const image = killstreak.image
        const description = killstreak.description
        const price = killstreak.price
        
        return (
          <Link to={`/shop/${shortened_id}`}>
              <Killstreak name={name} key={shortened_id} id={shortened_id} image={image} description={description} price={price}/>
            </Link>
        )
      })}
    </div>
  )
}

export default Killstreaks;