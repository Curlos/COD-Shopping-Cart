const Weapon = ({ weapon }) => {
  console.log(weapon)
  return (
    <div class="weapon">
      <img className="weaponImage" src={weapon['image']} alt={weapon['name']} />
      <div className="weaponName">{weapon['name']}</div>
      <div className="weaponPrice">${weapon['price']}</div>
    </div>
  )
}

export default Weapon;