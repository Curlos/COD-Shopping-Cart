import Weapon from './Weapon'
import getWeapons from '../utils/getWeapons'

const Weapons = ({ productType }) => {

  if (productType === 'Killstreaks') {
    return null
  }

  const weapons = getWeapons()

  return (
    <div className="productsContainer">
        {Object.keys(weapons[productType]).map((index) => <Weapon key={index} id={index} weapon={weapons[productType][index]}/>)}
    </div>
  )
}

export default Weapons;