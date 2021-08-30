const Killstreak = ({ name, image, description, price }) => {

  return (
    <span className="killstreak">
      <span>
        <img className="killstreakImage" src={image} alt={name}></img>
        <div>{name}</div>
        <div>${Number(price).toLocaleString() }</div>
      </span>
    </span>
  )
}

export default Killstreak;