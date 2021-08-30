const Weapon = ({ weapon }) => {

  return (
    <div className="product">
      <img className="productImage" src={weapon['image']} alt={weapon['name']} />
      <div className="productName">{weapon['name']}</div>
      <div className="productPrice">${weapon['price']}</div>
    </div>
  )
}

export default Weapon;