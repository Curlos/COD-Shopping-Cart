const Killstreak = ({ name, image, description, price }) => {

  return (
    <span className="product">
      <img className="productThumbImage" src={image} alt={name}></img>
      <div className="productName productThumbName">{name}</div>
      <div className="productPrice productThumbPrice">${Number(price).toLocaleString() }</div>
    </span>
  )
}

export default Killstreak;