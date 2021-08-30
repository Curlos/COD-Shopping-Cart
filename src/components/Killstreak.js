const Killstreak = ({ name, image, description, price }) => {

  return (
    <span className="product">
      <span>
        <img className="productImage" src={image} alt={name}></img>
        <div>{name}</div>
        <div className="productPrice">${Number(price).toLocaleString() }</div>
      </span>
    </span>
  )
}

export default Killstreak;