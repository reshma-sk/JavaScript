const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', getCountry);
const countryData = document.querySelector('.country');

function getCountry(){
let countryName = document.getElementById('search-input').value;

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then(response=>
    response.json())
    .then((data)=>{
   let text = `<div class = "country-item">
    <div class = "flag">
    <img src = "${data[0].flags.png}">
    </div>
    <div class = "content">
       <h1 class="name">Name : ${data[0].name.common}</h1>
       <h2 class = "capital">Capital:${data[0].capital[0]}</h2>
    <h2 class = "currency">Currency :${Object.keys(data[0].currencies)[0]}</h2>
    <h2 class = "population">Population :${data[0].population}</h2>
    
    </div>
    </div>`;
    countryData.innerHTML = text;

        
    })

}