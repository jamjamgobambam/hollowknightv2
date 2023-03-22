import bosses from './src/utilities/bosses'
import '@picocss/pico'
import './style.css'
import './src/css/Navigation.css'
import './src/css/Boss.css'
import './src/css/BossCard.css'
import './src/css/404.css'
import shade from './src/assets/shade.gif'

document.querySelector('#banner').innerHTML = `
    <div class="nav-container">
        <h1>Hollow Knight</h1>
        <p>For those who are tired of being repeatedly defeated by the bosses 💀</p>
        <a href="/" role="button">All Bosses</a>
    </div>
`

const showAllBosses = async () => {
  const bossData = await bosses.fetchBosses()

  for (const boss of bossData) {
    document.querySelector('#main-content').innerHTML += `
      <article style="background: url(${boss.image}); background-repeat: no-repeat; background-size: cover; background-position: center center">
        <div class="boss-card-overlay">
          <div class="boss-brief boss-card-name">
            <h3>${boss.name}</h3>
            <hr>
            <div class="boss-brief boss-card-location">
              <p>${boss.location}</p>
              <div class="boss-brief boss-card-link">
                <a href="/bosses/${boss.id}" role="button">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    `
  }
}

const showBossById = async () => {
  const location = window.location.pathname
  const bossId = location.substring(location.length - 1)

  if (!isNaN(bossId)) {
    try {
      const bossData = await bosses.fetchBossById(bossId)

      document.querySelector('#main-content').innerHTML = `
        <div class="boss-info">
          <div class="boss-health-location">
            <h2>${bossData.name}</h2>
            <p><strong><span class="fa-solid fa-heart info-icon"></span> Health:</strong>${bossData.health}</p>
            <p><strong><span class="fa-solid fa-map-location-dot info-icon"></span>${bossData.location}</p>
            <p class="boss-info-description">${bossData.description}</p>
          </div>

          <img src=${bossData.image} />
        </div>
      `
    } 
    catch (error) {
      setPageNotFound()
    }
  }
  else {
    setPageNotFound()
  }
}

const setPageNotFound = () => {
  document.querySelector('#main-content').innerHTML = `
    <div class="page-not-found">
        <img src=${shade} />
        <h2>There's nothing here!</h2>
        <p>The page you're looking for doesn't exist.</p>
    </div>
  `
}

if (window.location.pathname === '/') {
  showAllBosses()
}
else {
  showBossById()
}