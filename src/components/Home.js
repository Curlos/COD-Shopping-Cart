import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="home">
      <div className="homeIntro">
        <div className="homeProductName">Juggernaut</div>
        <span className="homeProductDescription">Call in a care package that contains the Juggernaut assault gear. Now available for order.</span>

        <div>
          <Link to="/shop">
            <button className="shopNowButton">Shop now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;