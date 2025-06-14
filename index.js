import{a as m,S as p,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="50836787-9d290f1c212f5ca84adef07b2",g="https://pixabay.com/api/";async function y(s){const o={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get(g,{params:o})).data}catch(r){throw r}}const d=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new p(".gallery a");function L(s){const o=s.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:c,downloads:f})=>`
        <li class="gallery-item">
          <div class="card">
            <a href="${a}">
              <img src="${r}" alt="${e}" />
            </a>
            <div class="info">
              <p><b>Likes:</b> ${t}</p>
              <p><b>Views:</b> ${i}</p>
              <p><b>Comments:</b> ${c}</p>
              <p><b>Downloads:</b> ${f}</p>
            </div>
          </div>
        </li>
      `).join("");d.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){d.innerHTML=""}function S(){u.classList.remove("is-hidden")}function l(){u.classList.add("is-hidden")}const v=document.querySelector(".form");v.addEventListener("submit",E);async function E(s){s.preventDefault();const{elements:o}=s.target,r=o["search-text"].value.trim();if(r===""){n.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}if(r.length<3){n.error({title:"Error",message:"Search term must be at least 3 characters long!",position:"topRight"});return}w(),S();const a=1e3,e=Date.now();try{const t=await y(r);t.hits.length===0&&n.error({title:"No Results",message:"No images found. Please try again!",position:"topRight"});const i=Date.now()-e,c=Math.max(a-i,0);setTimeout(()=>{l(),t.hits.length>0&&L(t.hits)},c)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),l()}}
//# sourceMappingURL=index.js.map
