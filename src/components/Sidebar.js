import './Sidebar.css';

const Sidebar = ({ handleProductTypeClick }) => {
  return (
    <div className="sidenav">
      <a href="#killstreaks" value="Killstreaks" onClick={handleProductTypeClick}>Killstreaks</a>
      <a href="#assault-rifles" value="Assault Rifles" onClick={handleProductTypeClick}>Assault Rifles</a>
      <a href="#smgs" value="SMGs" onClick={handleProductTypeClick}>Sub Machine Guns (SMGs)</a>
      <a href="#lmgs" value="LMGs" onClick={handleProductTypeClick}>Light Machine Guns (LMGs)</a>
      <a href="#marksman-rifles" value="Marksman Rifles" onClick={handleProductTypeClick}>Marksman Rifles</a>
      <a href="#sniper-rifles" value="Sniper Rifles" onClick={handleProductTypeClick}>Sniper Rifles</a>
      <a href="#handguns" value="Handguns" onClick={handleProductTypeClick}>Handguns</a>
      <a href="#rocket-launchers" value="Launchers" onClick={handleProductTypeClick}>Rocket Launchers</a>
      <a href="#melee" value="Melee" onClick={handleProductTypeClick}>Melee</a>
    </div>
  )
}

export default Sidebar;