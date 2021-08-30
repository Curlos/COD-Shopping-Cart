import Sidebar from './Sidebar'
import Killstreaks from './Killstreaks'
import Weapons from './Weapons'

const Products = ({ productType, handleProductTypeClick}) => {
  return (
    <div>
      <Sidebar handleProductTypeClick={handleProductTypeClick}/>
      <Killstreaks productType={productType} />
      <Weapons productType={productType}/>
    </div>
  )
}

export default Products;