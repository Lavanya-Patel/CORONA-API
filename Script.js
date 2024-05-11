function fetchCovidData() {
    fetch("https://api.rootnet.in/covid19-in/stats/latest")
      .then(res => res.json())
      .then(data => displayData(data.data.regional))
      .catch(err => console.log(err));
  }
  
  fetchCovidData();
  
  function displayData(data) {
    let store = data.map(region =>
      createCard(region.loc, region.totalConfirmed, region.discharged, region.deaths)
    );
    document.querySelector(".container").innerHTML = store.join("");
  }
  
  function createCard(location, confirmed, recovered, deaths) {
    let card = `
      <div class="card">
        <h3>Location: ${location}</h3>
        <p>Total Confirmed Cases: ${confirmed}</p>
        <p>Recovered: ${recovered}</p>
        <p>Deaths: ${deaths}</p>
      </div>
    `;
    return card;
  }