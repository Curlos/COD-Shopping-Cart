import './Navbar.css';

const Navbar = () => {

  return (
    <ul>
      <li><a href="default.asp">Call of Duty: Modern Warfare</a></li>
      
      <span className="navbarRight">
        <li><a href="news.asp">Home</a></li>
        <li><a href="contact.asp">Product</a></li>
        <li><a href="about.asp">Contact</a></li>
        <li><a href="about.asp">
          Shopping Cart
        </a></li>
      </span>
    </ul>
  )
}

export default Navbar;