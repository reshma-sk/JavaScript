const showTemp = document.querySelector('.box');
const searchtButton = document.querySelector('.search-btn');
searchtButton.addEventListener('click',getTemprature);


function getTemprature(){
    let inputName = document.getElementById('search-input').value.trim();
fetch(`https://api.weatherapi.com/v1/current.json?key=e2f12d7b244643e5834202656220208&q=${inputName}&aqi=no`)
.then(response=>response.json())
.then(data=>{
    let text = `<div class = "content">
  <div>
  <img src = "${data.current.condition.icon}">
  </div>
   <h2>${data.location.name}</h2>
    <h2>temp: ${data.current.temp_c}&degc;</h2>
   <h2>feelslike: ${data.current.feelslike_c}&deg;</h2>
    <h2>humidity: ${data.current.humidity}</h2>
  <h2>text: ${data.current.condition.text}</h2>
 
</div>`;


showTemp.innerHTML = text;
 } )
   
}
    