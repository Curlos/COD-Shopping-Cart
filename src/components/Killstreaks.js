import getKillstreaks from '../utils/getKillstreaks'
import Killstreak from './Killstreak'

const Killstreaks = ({ productType }) => {
  if (productType !== 'Killstreaks') {
    return null
  }

  const killstreaks = getKillstreaks()

  console.log(Object.keys(killstreaks))

  return (
    <div className="killstreaksContainer">
      <div className="killstreaks">
        {Object.keys(killstreaks).map((name) => {
          const killstreak = killstreaks[name]
          const image = killstreak.image
          const description = killstreak.description
          const price = killstreak.price
          
          return (
            <Killstreak name={name} image={image} description={description} price={price}/>
          )
        })}
      </div>
    </div>
  )
}

export default Killstreaks;