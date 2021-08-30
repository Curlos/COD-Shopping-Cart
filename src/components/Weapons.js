import Weapon from './Weapon'
import getWeapons from '../utils/getWeapons'

const AssaultRifles = ({ productType }) => {

  if (productType === 'Killstreaks') {
    return null
  }

  const weapons = getWeapons()

  return (
    <div className="weaponsContainer">
        {Object.keys(weapons[productType]).map((index) => <Weapon key={index} id={index} weapon={weapons[productType][index]}/>)}
    </div>
  )
}

export default AssaultRifles;