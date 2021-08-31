import './Sidebar.css';
import { Link } from 'react-router-dom'

const Sidebar = ({ handleProductTypeClick }) => {
  return (
    <div className="sidenav">
      <Link to="/shop" value="Killstreaks" onClick={handleProductTypeClick}>Killstreaks</Link>
      <Link to="/shop" value="Assault Rifles" onClick={handleProductTypeClick}>Assault Rifles</Link>
      <Link to="/shop" value="SMGs" onClick={handleProductTypeClick}>Sub Machine Guns (SMGs)</Link>
      <Link to="/shop" value="LMGs" onClick={handleProductTypeClick}>Light Machine Guns (LMGs)</Link>
      <Link to="/shop" value="Marksman Rifles" onClick={handleProductTypeClick}>Marksman Rifles</Link>
      <Link to="/shop" value="Sniper Rifles" onClick={handleProductTypeClick}>Sniper Rifles</Link>
      <Link to="/shop" value="Handguns" onClick={handleProductTypeClick}>Handguns</Link>
      <Link to="/shop" value="Launchers" onClick={handleProductTypeClick}>Rocket Launchers</Link>
      <Link to="/shop" value="Melee" onClick={handleProductTypeClick}>Melee</Link>
    </div>
  )
}

export default Sidebar;