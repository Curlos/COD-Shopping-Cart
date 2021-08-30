import Weapon from './Weapon'
import getWeapons from '../utils/getWeapons'
import { nanoid } from 'nanoid'

const Weapons = ({ productType }) => {

  if (productType === 'Killstreaks') {
    return null
  }

  const weapons = getWeapons()

  return (
    <div className="productsContainer">
        {Object.keys(weapons[productType]).map((index) => {
          const uniqueID = nanoid()

          return (
            <Weapon key={uniqueID} id={uniqueID} weapon={weapons[productType][index]}/>
          )
        })}
    </div>
  )
}

export default Weapons;