import bosses from './src/utilities/bosses'
import './style.css'
import './src/css/Navigation.css'
import './src/css/Boss.css'
import './src/css/404.css'
import '@picocss/pico'
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
        <div className="boss-card-overlay">
          <div className="boss-brief boss-card-name">
            <h3>${boss.name}</h3>
            <hr>
            <div className="boss-brief boss-card-location">
              <p>${boss.location}</p>
              <div className="boss-brief boss-card-link">
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
          <h2>${bossData.name}</h2>
          <p>${bossData.health}</p>
          <p>${bossData.location}</p>
          <p>${bossData.description}</p>

          <img src=${bossData.image} />
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
    <div>
        <img src=${shade} />
    </div>

    <div>
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