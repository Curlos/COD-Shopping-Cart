import React, { useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Killstreaks from './components/Killstreaks'
import Weapons from './components/Weapons'

const App = () => {

  const [productType, setProductType] = useState('SMGs')

  const handleProductTypeClick = (e) => {
    const newProductType = e.target.getAttribute('value')
    setProductType(newProductType)
  }

  return (
    <div className="App">
      <Navbar />
      <Sidebar handleProductTypeClick={handleProductTypeClick}/>
      <Killstreaks productType={productType} />
      <Weapons productType={productType}/>
    </div>
  );
}

export default App;
