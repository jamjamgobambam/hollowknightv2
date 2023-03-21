import BossAPI from '../services/BossAPI'
import '../css/Boss.css'
import '@picocss/pico'

const location = window.location.pathname
const bossId = location.substring(location.length - 1)
const bossData = BossAPI.getBoss(bossId)

document.querySelector('#boss-content').innerHTML = `
    <h2>${bossData.name}</h2>
    <p>${bossData.health}</p>
    <p>${bossData.location}</p>
    <p>${bossData.description}</p>

    <img src=${boss.image} />
`