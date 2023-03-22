(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();class i extends Error{constructor(o,n){super(o),this.name="API"+this.name,this.details=n}}const c={"Content-Type":"application/json"},d=async(t,o,n=null)=>{const a=n?{method:t,headers:c,body:JSON.stringify(n)}:{method:t,headers:c};let e;try{e=await fetch(o,a)}catch(r){throw new i("API cannot be reached",r.message)}const s=await e.json();if(e.ok)return s;if(s.error)throw new i(s.error.message,s.error.details)},f="/api/bosses",p=()=>d("GET",f),g=t=>d("GET",`${f}/${t}`),h={getAllBosses:p,getBoss:g},b=async()=>await h.getAllBosses(),m=async t=>await h.getBoss(t),u={fetchBosses:b,fetchBossById:m};const y="/assets/shade-f1371e93.gif";document.querySelector("#banner").innerHTML=`
    <div class="nav-container">
        <h1>Hollow Knight</h1>
        <p>For those who are tired of being repeatedly defeated by the bosses 💀</p>
        <a href="/" role="button">All Bosses</a>
    </div>
`;const v=async()=>{const t=await u.fetchBosses();for(const o of t)document.querySelector("#main-content").innerHTML+=`
      <article style="background: url(${o.image}); background-repeat: no-repeat; background-size: cover; background-position: center center">
        <div class="boss-card-overlay">
          <div class="boss-brief boss-card-name">
            <h3>${o.name}</h3>
            <hr>
            <div class="boss-brief boss-card-location">
              <p>${o.location}</p>
              <div class="boss-brief boss-card-link">
                <a href="/bosses/${o.id}" role="button">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    `},w=async()=>{const t=window.location.pathname,o=t.substring(t.length-1);if(isNaN(o))l();else try{const n=await u.fetchBossById(o);document.querySelector("#main-content").innerHTML=`
        <div class="boss-info">
          <div class="boss-health-location">
            <h2>${n.name}</h2>
            <p><strong><span class="fa-solid fa-heart info-icon"></span> Health:</strong>${n.health}</p>
            <p><strong><span class="fa-solid fa-map-location-dot info-icon"></span>${n.location}</p>
            <p class="boss-info-description">${n.description}</p>
          </div>

          <img src=${n.image} />
        </div>
      `}catch{l()}},l=()=>{document.querySelector("#main-content").innerHTML=`
    <div class="page-not-found">
        <img src=${y} />
        <h2>There's nothing here!</h2>
        <p>The page you're looking for doesn't exist.</p>
    </div>
  `};window.location.pathname==="/"?v():w();
