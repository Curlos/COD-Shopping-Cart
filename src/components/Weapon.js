const Weapon = ({ weapon }) => {

  return (
    <div id={weapon.id} className="product">
      <img className="productThumbImage" src={weapon['image']} alt={weapon['name']} />
      <div className="productThumbName">{weapon['name']}</div>
      <div className="productThumbPrice">${weapon['price']}</div>
    </div>
  )
}

export default Weapon;