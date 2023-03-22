(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();class c extends Error{constructor(o,r){super(o),this.name="API"+this.name,this.details=r}}const a={"Content-Type":"application/json"},l=async(t,o,r=null)=>{const i=r?{method:t,headers:a,body:JSON.stringify(r)}:{method:t,headers:a};let e;try{e=await fetch(o,i)}catch(n){throw new c("API cannot be reached",n.message)}const s=await e.json();if(e.ok)return s;if(s.error)throw new c(s.error.message,s.error.details)},d="/api/bosses",u=()=>l("GET",d),f=t=>l("GET",`${d}/${t}`),p={getAllBosses:u,getBoss:f};document.querySelector("#banner").innerHTML=`
    <div class="nav-container">
        <h1>Hollow Knight</h1>
        <p>For those who are tired of being repeatedly defeated by the bosses 💀</p>
        <a href="/" role="button">All Bosses</a>
    </div>
`;const b=async()=>await p.getAllBosses(),h=async()=>{const t=await b();for(const o of t)document.querySelector("#main-content").innerHTML+=`
      <article style="background: url(${o.image}); background-repeat: no-repeat; background-size: cover; background-position: center center">
        <div className="boss-card-overlay">
          <div className="boss-brief boss-card-name">
            <h3>${o.name}</h3>
            <hr>
            <div className="boss-brief boss-card-location">
              <p>${o.location}</p>
              <div className="boss-brief boss-card-link">
                <a href="/bosses/${o.id}" role="button">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    `};h();
