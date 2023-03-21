import '../css/Boss.css'
import '@picocss/pico'

document.querySelector('#page-not-found').innerHTML = `
    <div class="boss-health-location">
        <h2 id="boss-name"></h2>
        <p id="boss-health"></p>
        <p id="boss-location"></p>
        <p id="boss-description" class="boss-info-description"></p>
    </div>

    <img id="boss-image" src="" />
`