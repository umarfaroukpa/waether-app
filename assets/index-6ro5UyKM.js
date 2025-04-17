(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();document.querySelector("#app").innerHTML=`
<div class="container">
  <div class="sidebar">
    <form class="input1">
      <input type="text" class="inputValue" placeholder="Search City">
      <button type="submit" class="btn-search"><i class="fas fa-search"></i></button>
    </form>
    <h2 class="kd-7">Kaduna 7 Days Forecast</h2>
    <div id="kd-7" class="card forecast-container"></div>
    <div class="report">
      <p>Forecast Report</p>
    </div>
    <div class="vertical-divider"></div>
  </div>
  <main>
    <div class="left-section">
      <h2 class="kd-today">Kaduna</h2>
      <div id="kdtoday" class="weather-display"></div>
      <div id="state" class="state">
        <div>States Weather Report</div>
      </div>
    </div>
    <div class="right-section">
      <form id="input2" class="input2">
        <input type="text" id="inputloc" class="inputValue" placeholder="Search Country">
        <button type="submit" class="btn-search"><i class="fas fa-search"></i></button>
      </form>
      <div id="weatherinfo" class="weather-display"></div>
    </div>
    <div class="vertical-divider"></div>
  </main>
</div>`;console.log("Script loaded and executed");document.querySelector("#app").innerHTML=`
<div class="container">
  <button class="mobile-nav-toggle" id="toggleSidebar">
    <i class="fas fa-bars"></i>
  </button>
  <div class="sidebar" id="sidebar">
    <form class="input1">
      <input type="text" class="inputValue" placeholder="Search City">
      <button type="submit" class="btn-search"><i class="fas fa-search"></i></button>
    </form>
    <h2 class="kd-7">Kaduna 7 Days Forecast</h2>
    <div id="kd-7" class="card forecast-container"></div>
    <div class="report">
      <p>Forecast Report</p>
    </div>
    <div class="vertical-divider"></div>
  </div>
  <main>
    <div class="left-section">
      <h2 class="kd-today">Kaduna</h2>
      <div id="kdtoday" class="weather-display"></div>
      <div id="state" class="state">
        <div>States Weather Report</div>
      </div>
    </div>
    <div class="right-section">
      <form id="input2" class="input2">
        <input type="text" id="inputloc" class="inputValue" placeholder="Search Country">
        <button type="submit" class="btn-search"><i class="fas fa-search"></i></button>
      </form>
      <div id="weatherinfo" class="weather-display"></div>
    </div>
    <div class="vertical-divider"></div>
  </main>
</div>`;const v="3c45a20ca0793fd7e391e64cd9f5b72d";async function u(e){const s=`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${v}&units=metric`;try{console.log("Fetching weather data for:",e);const a=await(await fetch(s)).json();if(console.log("API response:",a),a.cod!==200)throw new Error(`Error fetching weather data: ${a.message}`);return g(a)}catch(o){return console.error("Error fetching data:",o),null}}function g(e){return console.log("Processing weather data:",e),{location:e.name,temperature:e.main.temp,description:e.weather[0].description,icon:e.weather[0].icon,humidity:e.main.humidity,windSpeed:e.wind.speed,coordinates:{lat:e.coord.lat,lon:e.coord.lon}}}async function w(e){const s=`https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=${v}&units=metric`;try{console.log("Fetching 5-day forecast for city:",e);const a=await(await fetch(s)).json();if(console.log("5-day forecast API response:",a),a.cod!=="200")throw new Error(`Error fetching forecast data: ${a.message}`);const t=[],i=new Set;return a.list.forEach(n=>{const r=new Date(n.dt*1e3),c=r.toDateString(),l=r.getHours();!i.has(c)&&l>=11&&l<=13&&(i.add(c),t.push(n))}),a.list.forEach(n=>{const c=new Date(n.dt*1e3).toDateString();i.has(c)||(i.add(c),t.push(n))}),t.sort((n,r)=>n.dt-r.dt),t.slice(0,7)}catch(o){return console.error("Error fetching 5-day forecast:",o),null}}function b(e){if(!e)return null;const s=[],o=new Date,a=e.temperature,t=e.description,i=e.icon,n=[{desc:"clear sky",icon:"01d"},{desc:"few clouds",icon:"02d"},{desc:"scattered clouds",icon:"03d"},{desc:"broken clouds",icon:"04d"},{desc:"shower rain",icon:"09d"},{desc:"rain",icon:"10d"},{desc:"thunderstorm",icon:"11d"},{desc:"snow",icon:"13d"},{desc:"mist",icon:"50d"}];for(let r=0;r<7;r++){const c=new Date;c.setDate(o.getDate()+r);const l=Math.floor(Math.random()*6)-3,d=a+l;let p;r%3===0&&r>0?p=n[Math.floor(Math.random()*n.length)]:p={desc:t,icon:i},s.push({dt:Math.floor(c.getTime()/1e3),main:{temp:d,feels_like:d-1,temp_min:d-2,temp_max:d+2,humidity:Math.floor(Math.random()*20)+60},weather:[{description:p.desc,icon:p.icon}]})}return s}async function f(e,s,o){try{const a=await w(e);if(a&&a.length>0)return h(a,o),document.querySelector(".kd-7").textContent=`${e} Forecast`,!0;throw new Error("No forecast data available")}catch(a){if(console.error("Falling back to simulated forecast:",a),s){const t=b(s);return h(t,o),document.querySelector(".kd-7").textContent=`${e} Forecast`,!0}return!1}}function m(e,s,o=!1){const a=document.getElementById(s);console.log("Displaying weather info:",e),e?o?a.innerHTML=`
        <p><img src="http://openweathermap.org/img/wn/${e.icon}@2x.png" alt="${e.description}"></p>
        <p>Temperature: ${e.temperature}°C</p>
        <p>Description: ${e.description}</p>
      `:a.innerHTML=`
        <h2>Weather in ${e.location}</h2>
        <p>Temperature: ${e.temperature}°C</p>
        <p>Description: ${e.description}</p>
        <p>Humidity: ${e.humidity}%</p>
        <p>Wind Speed: ${e.windSpeed} m/s</p>
      `:a.innerHTML="<p>Unable to fetch weather data. Please try again.</p>"}function h(e,s){const o=document.getElementById(s);if(console.log("Displaying forecast:",e),e&&e.length>0){let a="";e.forEach(t=>{const n=new Date(t.dt*1e3).toLocaleDateString("en-US",{weekday:"long"}),r=t.main?t.main.temp:t.temp?t.temp.day:0,c=t.main?t.main.temp_max:t.temp?t.temp.max:r+2,l=t.main?t.main.temp_min:t.temp?t.temp.min:r-2,d=t.weather[0].description,p=t.weather[0].icon;a+=`
        <div class="forecast-day">
          <p>${n}</p>
          <p><img src="http://openweathermap.org/img/wn/${p}.png" alt="${d}"></p>
          <p>Temp: ${Math.round(r)}°C (${Math.round(l)}°C - ${Math.round(c)}°C)</p>
          <p>Description: ${d}</p>
        </div>
      `}),o.innerHTML=a}else o.innerHTML="<p>Unable to fetch forecast data. Please try again.</p>"}document.querySelector(".input1").addEventListener("submit",async e=>{e.preventDefault();const s=e.target.querySelector(".inputValue").value.trim();if(console.log("Form submitted with location:",s),s){const o=await u(s);o&&(m(o,"kdtoday",!0),document.querySelector(".kd-today").textContent=s,await f(s,o,"kd-7"),window.innerWidth<=768&&(document.getElementById("sidebar").classList.add("sidebar-collapsed"),document.getElementById("sidebar").classList.remove("sidebar-expanded")))}else console.error("Please enter a valid location")});document.getElementById("input2").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("inputloc").value.trim();if(console.log("Form submitted with location:",s),s){const o=await u(s);m(o,"weatherinfo"),o&&(await f(s,o,"kd-7"),document.querySelector(".kd-today").textContent=s)}else console.error("Please enter a valid location")});document.getElementById("toggleSidebar").addEventListener("click",()=>{const e=document.getElementById("sidebar");e.classList.contains("sidebar-collapsed")?(e.classList.remove("sidebar-collapsed"),e.classList.add("sidebar-expanded")):(e.classList.add("sidebar-collapsed"),e.classList.remove("sidebar-expanded"))});function y(){const e=document.getElementById("sidebar");window.innerWidth<=768?e.classList.add("sidebar-collapsed"):(e.classList.remove("sidebar-collapsed"),e.classList.remove("sidebar-expanded"))}window.addEventListener("resize",y);window.addEventListener("load",async()=>{const e="Kaduna",s=await u(e);s&&(m(s,"kdtoday",!0),await f(e,s,"kd-7"));const o=["Lagos","Abuja","Port Harcourt","Kano","Ibadan"];let a=0;async function t(){const i=await u(o[a]);m(i,"state"),a=(a+1)%o.length}t(),setInterval(t,5e3),y()});
