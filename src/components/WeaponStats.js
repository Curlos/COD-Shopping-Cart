const WeaponStats = ({ weapon }) => {
  return (
    <div className="weaponStats">
      <div>Statistics</div>
      <div className="weaponStatCategory">
        <div className="w3-light-grey">
          <div className="w3-grey" style={{height: "20px", width: `${weapon['accuracy']}%`}}><span className="stat-bar">Accuracy: {weapon['accuracy']}</span></div>
          </div>
      </div>

      <div className="weaponStatCategory">
        <div className="w3-light-grey">
          <div className="w3-grey" style={{height: "20px", width: `${weapon['damage']}%`}}><span className="stat-bar">Damage: {weapon['damage']}</span></div>
          </div>
      </div>

      <div className="weaponStatCategory">
        <div className="w3-light-grey">
          <div className="w3-grey" style={{height: "20px", width: `${weapon['range']}%`}}><span className="stat-bar">Range: {weapon['range']}</span></div>
          </div>
      </div>

      <div className="weaponStatCategory">
        <div className="w3-light-grey">
          <div className="w3-grey" style={{height: "20px", width: `${weapon['fire-rate']}%`}}><span className="stat-bar">Fire Rate: {weapon['fire-rate']}</span></div>
          </div>
      </div>

      <div className="weaponStatCategory">
        <div className="w3-light-grey">
          <div className="w3-grey" style={{height: "20px", width: `${weapon['mobility']}%`}}><span className="stat-bar">Mobility: {weapon['mobility']}</span></div>
          </div>
      </div>

      <div className="weaponStatCategory">
        <div className="w3-light-grey">
          <div className="w3-grey" style={{height: "20px", width: `${weapon['control']}%`}}><span className="stat-bar">Control: {weapon['control']}</span></div>
          </div>
      </div>
      



    </div>
  )
}

export default WeaponStats;