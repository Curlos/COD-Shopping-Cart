import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <ul class="navbar">
      <Link to="/">
        <li>Call of Duty: Modern Warfare</li>
      </Link>
      
      <span className="navbarRight">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/shopping-cart">
          <li>Shopping Cart</li>
        </Link>
      </span>
    </ul>
  )
}

export default Navbar;