import getKillstreaks from "../utils/getKillstreaks"
import getWeapons from "../utils/getWeapons";
import { useParams } from 'react-router-dom'
import WeaponStats from "./WeaponStats";


const ProductDetail = () => {
  const { id } = useParams()
  const product = searchForProduct(id)

  console.log(product)

  return (
    <div class="productDetailContainer">
      <span className="productDetailLeft">
        {Object.keys(product).includes('accuracy') ? <img src={product['alt-image']} alt={product['name']}/> : <img src={product['image']} alt={product['name']}/>}
      </span>
      
      <span className="productDetailRight">
        <div className="productDetailName">
          {product['name']}
        </div>
        <div className="productDetailDescription">
          {product['description']}
        </div>
        {Object.keys(product).includes('accuracy') ? <WeaponStats weapon={product}/> : null}
        <div>
          <button className="addToCart">
            Add to cart
          </button>
        </div>
      </span>
    </div>
  )
}

const searchForProduct = (idToFind) => {
  const killstreaks = getKillstreaks()

  const killstreakName = Object.keys(killstreaks).find((killstreak) => {
    const shortenedID = String(killstreaks[killstreak].id).substring(2, 12)
    return shortenedID === idToFind
  })

  if (killstreakName !== undefined) {
    return killstreaks[killstreakName]
  }
  
  const weapons = getWeapons()
  const weaponClasses = Object.keys(getWeapons())

  for (let weaponClass of weaponClasses) {
    const weapon = weapons[weaponClass].find((weapon) => {
      const shortenedID = String(weapon.id).substring(2, 12)
      console.log(shortenedID)
      return shortenedID === idToFind
    })

    if (weapon !== undefined) {
      return weapon
    }
  }
}

export default ProductDetail;