import Sidebar from './Sidebar'
import Killstreaks from './Killstreaks'
import Weapons from './Weapons'

const Products = ({ productType, handleProductTypeClick, changeCurrentProducts}) => {
  return (
    <div>
      <Sidebar handleProductTypeClick={handleProductTypeClick}/>
      <Killstreaks productType={productType} changeCurrentProducts={changeCurrentProducts}/>
      <Weapons productType={productType} changeCurrentProducts={changeCurrentProducts}/>
    </div>
  )
}

export default Products;