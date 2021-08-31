import getKillstreaks from "../utils/getKillstreaks"
import getWeapons from "../utils/getWeapons";

const ProductDetail = ({ productType }) => {
  let products;

  if (productType === 'Killstreaks') {
    products = getKillstreaks()
  } else {
    products = getWeapons()[productType]
  }

  console.log('hello fag')

  console.log(products)
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail;