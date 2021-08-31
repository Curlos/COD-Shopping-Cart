const killstreakIDs = [259894626886079806713552931725061887720, 259894692645454693552953134366540666600, 259894701360552570122030269656375203560, 259894707698805571263177277139891230440, 259894713244776947261680908687967753960, 259894718790748323260184540236044277480, 259894725129001324401331547719560304360, 259894730674972700399835179267636827880, 259894736220944076398338810815713351400, 259894741766915452396842442363789874920, 259894747312886828395346073911866398440, 259894752858858204393849705459942921960, 259894758404829580392353337008019445480, 259894763158519331248213592620656465640, 259894768704490707246717224168732989160, 259894798811192462667165509715434116840]

const getKillstreaks = () => {
  const killstreaks = {
    'Personal Radar': {
      id: killstreakIDs[0],
      name: 'Personal Radar',
      image: '/assets/Killstreaks/personal_radar.jpg',
      description: 'Escort drone that enables the radar for the owner, and pings nearby enemies.',
      price: 30000000
    },
    'Shield Turret': {
      id: killstreakIDs[1],
      name: 'Shield Turret',
      image: '/assets/Killstreaks/ShieldTurret.jpg',
      description: 'A manual shielded turret that can be deployed on most surfaces.',
      price: 30000000
    },
    'Counter UAV': {
      id: killstreakIDs[2],
      name: 'Counter UAV',
      image: '/assets/Killstreaks/counter_uav.jpg',
      description: 'A drone that constantly emits a scrambling signal, disabling enemy mini maps and incrementally disrupting their sense the closer they get to it.',
      price: 40000000
    },
    'UAV': {
      id: killstreakIDs[0],
      name: 'UAV',
      image: '/assets/Killstreaks/uav.jpg',
      description: 'UAV recon ship that enables the map for all allies, and reveals enemy locations.',
      price: 40000000
    },
    'Care Package': {
      id: killstreakIDs[3],
      name: 'Care Package',
      image: '/assets/Killstreaks/care_package.jpg',
      description: 'Call in a random killstreak care package to your location.',
      price: 40000000
    },
    'Cluster Strike': {
      id: killstreakIDs[4],
      name: 'Cluster Strike',
      image: '/assets/Killstreaks/cluster_strike.jpg',
      description: 'Signal for a number of cluster mortars to hit the designated location.',
      price: 50000000
    },
    'Infantry Assault Vehicle': {
      id: killstreakIDs[5],
      name: 'Infantry Assault Vehicle',
      image: '/assets/Killstreaks/infantry_assault_vehicle.jpg',
      description: 'A manned light infantry vehicle with a .50 cal machine gun on top.',
      price: 70000000
    },
    'Sentry Gun': {
      id: killstreakIDs[6],
      name: 'Sentry Gun',
      image: '/assets/Killstreaks/SentryGun.jpg',
      description: 'Automated turret that scans for nearby enemies.',
      price: 70000000
    },
    'Wheelson': {
      id: killstreakIDs[7],
      name: 'Wheelson',
      image: '/assets/Killstreaks/wheelson.jpg',
      description: 'Remote controlled UGV with a powerful airburst turret.',
      price: 70000000
    },
    'Emergency Airdrop': {
      id: killstreakIDs[8],
      name: 'Emergency Airdrop',
      image: '/assets/Killstreaks/emergency_air_drop.jpg',
      description: 'Call in 3 random killstreak care packages to your location.',
      price: 80000000
    },
    'White Phosphorus': {
      id: killstreakIDs[9],
      name: 'White Phosphorus',
      image: '/assets/Killstreaks/wheelson.jpg',
      description: 'Cover the battlefield with white smoke flare canisters that will disorient the enemy, and burn any that wander too close.',
      price: 100000000
    },
    'Gunship': {
      id: killstreakIDs[10],
      name: 'Gunship',
      image: '/assets/Killstreaks/gunship.jpg',
      description: 'Heavy assault gunship with three types of armaments.',
      price: 120000000
    },
    'Advanced UAV': {
      id: killstreakIDs[11],
      name: 'Advanced UAV',
      image: '/assets/Killstreaks/advanced_uav.jpg',
      description: 'Orbital UAV that reveals the enemy’s direction on the mini map.',
      price: 120000000
    },
    'Juggernaut': {
      id: killstreakIDs[12],
      name: 'Juggernaut',
      image: '/assets/Killstreaks/juggernaut.jpg',
      description: 'Call in a care package that contains the Juggernaut assault gear.',
      price: 150000000
    },
  }
  
  return killstreaks
}

export default getKillstreaks;