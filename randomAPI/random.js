const randomUserAPI = () => {
    fetch(`https://randomuser.me/api/?results=10`)
    .then(res=>res.json())
    .then(data=>displayRandomAPI(data.results))
}

const displayRandomAPI = (data)=>{
    // console.log(data)
    const randomContainer = document.getElementById('random-container');
    data.forEach(element =>{
        const {location} = element;
        const {city, country, postcode, state, street, timezone, coordinates} = location;
        console.log(coordinates)
        const newDivElement = document.createElement('div');
        newDivElement.classList.add('col');
        newDivElement.innerHTML = `
        <div class="card h-100">
            <img src="${element.picture.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
                 <h3 class="card-title">Country: ${country} <br>City: ${city}</h3>
                 <div>
                    <h3>Number:${street.number} <bt>name: ${street.name}</h3>
                 </div>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
                <h4>latitude:${coordinates.latitude}</h4>
                <h4>longitude:${coordinates.longitude}</h4>
            </div>
        </div>
        `;
        randomContainer.appendChild(newDivElement)
    })
}

randomUserAPI()