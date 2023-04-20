const searchButton = document.querySelector('.weather__search-button');
const searchInput = document.querySelector('.weather__search-input');
const autoSearchButton = document.querySelector('.weather__search-button--auto');
const loading = document.querySelector('.loading');

const curTime = document.querySelector('.weather__current .weather__time');
const curCity = document.querySelector('.weather__city');
const curIcon = document.querySelector('.weather__current .weather__icon');
const curTemp = document.querySelector('.weather__current .weather__celsius'); 
const curDesc = document.querySelector('.weather__current .weather__description');
const info = document.querySelector('.weather__info');
const hourly = document.querySelectorAll('.weather__hourly .weather__item');
const daily = document.querySelectorAll('.weather__daily .weather__item');  


var map = L.map('map').setView([-15.7934036,-47.8823172],13);
    L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); 

searchButton.addEventListener('click',(e)=>{

    e.preventDefault();

    if(searchInput.value == '')return;
   
    search(searchInput.value);

});

autoSearchButton.addEventListener('click',(e)=>{

    e.preventDefault();
    autoSearch();

});
 
window.addEventListener('load',()=>{

    searchInput.value = '';
    search('Brasilia');

})
