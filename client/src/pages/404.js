import '../css/404.css'
import '@picocss/pico'

document.querySelector('#page-not-found').innerHTML = `
    <div>
        <img src="../assets/shade.gif" />
    </div>

    <div>
        <h2>There's nothing here!</h2>
        <p>The page you're looking for doesn't exist.</p>
    </div>
`