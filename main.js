document.querySelector('#app').innerHTML = `
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
</div>`;