import Weapon from './Weapon'
import getWeapons from '../utils/getWeapons'
import { Link } from 'react-router-dom'

const Weapons = ({ productType }) => {

  if (productType === 'Killstreaks') {
    return null
  }

  const weapons = getWeapons()

  return (
    <div className="productsContainer">
        {Object.keys(weapons[productType]).map((index) => {
          const weapon = weapons[productType][index]
          const shortened_id = String(weapon.id).substring(2, 12)
          return (
            <Link to={`/shop/${shortened_id}`}>
              <Weapon key={shortened_id} weapon={weapon} />
            </Link>
            
          )
        })}
    </div>
  )
}

export default Weapons;