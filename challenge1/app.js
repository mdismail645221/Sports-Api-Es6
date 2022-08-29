const sportsAPI = (search) =>{
    // console.log(search)
        fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=${search}`)
        .then(res => res.json())
        .then(data => displaySportAPI(data.teams))
}

const displaySportAPI = (data) =>{
    console.log(data)
    const sportsContainer = document.getElementById('sports-container');
    data.forEach(element => {
        // console.log(element)
        const {strTeam, strAlternate, strLeague5, strSport, strTeamBadge, strStadium, strDescriptionEN} = element;
        // console.log(strTeam)
        const newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `
            <div class="card h-100">
            <img src="${strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
            <h3 class="card-title">Name:${strTeam}</h3>
            <h4 class="card-title">Team:${strSport?strSport: 'n/a'}</h4>
            <p class="card-text">${strDescriptionEN.slice(0,150)?strDescriptionEN.slice(0,150): "N/A"})</p>
            </div>
            <div class="card-footer">
            <small class="bg-light">Stadium: ${strStadium}</small>
            </div>
        `;
        sportsContainer.appendChild(newDiv)
    })
}

const searchBtn = () => {
    const inputField = document.getElementById('input-field');
    const inputString = (inputField.value).toLowerCase();
    sportsAPI(inputString)
}

sportsAPI('Banladesh')