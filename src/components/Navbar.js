import './Navbar.css';

const Navbar = () => {

  return (
    <ul>
      <li><a href="default.asp">Call of Duty: Modern Warfare</a></li>
      
      <span className="navbarRight">
        <li><a href="home">Home</a></li>
        <li><a href="shop">Shop</a></li>
        <li><a href="contact">Contact</a></li>
        <li><a href="shopping-cart">
          Shopping Cart
        </a></li>
      </span>
    </ul>
  )
}

export default Navbar;