const Killstreak = ({ name, image, description, price }) => {

  return (
    <span className="product">
      <img className="productThumbImage" src={image} alt={name}></img>
      <div class="killstreakThumbInfo">
        <div className="productName productThumbName">{name}</div>
        <div className="productPrice productThumbPrice">${Number(price).toLocaleString() }</div>
      </div>
    </span>
  )
}

export default Killstreak;