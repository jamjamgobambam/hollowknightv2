import BossAPI from './src/services/BossAPI'
import './style.css'
import '@picocss/pico'

const bossData = await BossAPI.getAllBosses()

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
              <a href="/bosses/${boss.id}/${boss.name}" role="button">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  `
}