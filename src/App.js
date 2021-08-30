import React, { useState, useEffect} from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

  const [productType, setProductType] = useState('Killstreaks')
  const [currentProducts, setCurrentProducts] = useState([])

  const handleProductTypeClick = (e) => {
    const newProductType = e.target.getAttribute('value')
    setProductType(newProductType)
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/shop" exact render={() => <Products productType={productType} handleProductTypeClick={handleProductTypeClick}/>} />
          <Route path="/shop/:id" exact remder={() => <ProductDetail />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
