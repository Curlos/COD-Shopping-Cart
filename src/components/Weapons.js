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
          const weapon = weapons[productType][index]
          return (
            <a href={`/shop/${weapon.id}`}>
              <Weapon key={weapon.id} weapon={weapon} />
            </a>
          )
        })}
    </div>
  )
}

export default Weapons;