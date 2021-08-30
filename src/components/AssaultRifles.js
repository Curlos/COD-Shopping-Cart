import Weapon from './Weapon'
import getWeapons from '../utils/getWeapons'

const AssaultRifles = () => {
  const weapons = getWeapons()

  return (
    <div className="weaponsContainer">
        {Object.keys(weapons['Assault Rifles']).map((index) => <Weapon key={index} id={index} weapon={weapons['Assault Rifles'][index]}/>)}
    </div>
  )
}

export default AssaultRifles;