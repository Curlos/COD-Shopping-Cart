const getKillstreaks = () => {
  const killstreaks = {
    'Personal Radar': {
      image: '/assets/Killstreaks/personal_radar.jpg',
      description: 'Escort drone that enables the radar for the owner, and pings nearby enemies.',
      price: 30000000
    },
    'Shield Turret': {
      image: '/assets/Killstreaks/ShieldTurret.jpg',
      description: 'A manual shielded turret that can be deployed on most surfaces.',
      price: 30000000
    },
    'Counter UAV': {
      image: '/assets/Killstreaks/counter_uav.jpg',
      description: 'A drone that constantly emits a scrambling signal, disabling enemy mini maps and incrementally disrupting their sense the closer they get to it.',
      price: 40000000
    },
    'UAV': {
      image: '/assets/Killstreaks/uav.jpg',
      description: 'UAV recon ship that enables the map for all allies, and reveals enemy locations.',
      price: 40000000
    },
    'Care Package': {
      image: '/assets/Killstreaks/care_package.jpg',
      description: 'Call in a random killstreak care package to your location.',
      price: 40000000
    },
    'Cluster Strike': {
      image: '/assets/Killstreaks/cluster_strike.jpg',
      description: 'Signal for a number of cluster mortars to hit the designated location.',
      price: 50000000
    },
    'Infantry Assault Vehicle': {
      image: '/assets/Killstreaks/infantry_assault_vehicle.jpg',
      description: 'A manned light infantry vehicle with a .50 cal machine gun on top.',
      price: 70000000
    },
    'Sentry Gun': {
      image: '/assets/Killstreaks/SentryGun.jpg',
      description: 'Automated turret that scans for nearby enemies.',
      price: 70000000
    },
    'Wheelson': {
      image: '/assets/Killstreaks/wheelson.jpg',
      description: 'Remote controlled UGV with a powerful airburst turret.',
      price: 70000000
    },
    'Emergency Airdrop': {
      image: '/assets/Killstreaks/emergency_air_drop.jpg',
      description: 'Call in 3 random killstreak care packages to your location.',
      price: 80000000
    },
    'White Phosphorus': {
      image: '/assets/Killstreaks/wheelson.jpg',
      description: 'Cover the battlefield with white smoke flare canisters that will disorient the enemy, and burn any that wander too close.',
      price: 100000000
    },
    'Gunship': {
      image: '/assets/Killstreaks/gunship.jpg',
      description: 'Heavy assault gunship with three types of armaments.',
      price: 120000000
    },
    'Advanced UAV': {
      image: '/assets/Killstreaks/advanced_uav.jpg',
      description: 'Orbital UAV that reveals the enemy’s direction on the mini map.',
      price: 120000000
    },
    'Juggernaut': {
      image: '/assets/Killstreaks/juggernaut.jpg',
      description: 'Call in a care package that contains the Juggernaut assault gear.',
      price: 150000000
    },
  }
  
  return killstreaks
}

export default getKillstreaks;