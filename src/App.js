import React, { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

  const [productType, setProductType] = useState('Killstreaks')

  const handleProductTypeClick = (e) => {
    const newProductType = e.target.getAttribute('value')
    setProductType(newProductType)
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop" exact>
            <Products productType={productType} handleProductTypeClick={handleProductTypeClick} />}
          </Route>
          <Route path="/shop/:id">
            <ProductDetail productType={productType} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
