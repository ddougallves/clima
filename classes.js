// class Weather {

//     _location;
//     _lat;
//     _long;
//     _weather;
//     _forecast;
//     _apiKey = '8fd86a036badd0aa010406e2ee17faa8';
    
//     constructor(input){
//         this.input = input;
//     }

//     start() {

//         // navigator.geolocation.getCurrentPosition(async (pos)=>{
//         //     this.lat = pos.coords.latitude;
//         //     this.long = pos.coords.longitude;

//         //     loadingArea.classList.remove('hidden');

//         //     try {

//         //         let reqLocation = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${this.lat}&lon=${this.long}&limit=1&appid=${this.apiKey}`);
//         //         this.location = await reqLocation.json(); 
 
//         //         let reqWeather = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${this.lat}&lon=${this.long}&appid=${this.apiKey}`)
//         //         // let reqWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(this.location[0].name)}&appid=${this.apiKey}&units=metric&lang=pt_br`);
//         //         // this.weather = await reqWeather.json(); 
//         //         // this.showWeather();

//         //         // let reqForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURI(this.location[0].name)}&appid=${this.apiKey}&cnt=4&units=metric&lang=pt_br`);
//         //         // this.forecast = await reqForecast.json();  
//         //         // this.showForecast(); 

//         //         // this.showMap(); 
 
//         //     } catch (error) {
//         //         alert('OCORREU UM ERRO LOCATION') 
//         //     }finally{
                
//         //     }  
//         // },()=>{

//         //     resultArea.classList.add('hidden');
//         //     searchArea.classList.remove('hidden');

//         // }) 
//     };

//     async search(city) {

//         // searchArea.classList.add('hidden');
//         // resultArea.classList.add('hidden');
//         // loadingArea.classList.remove('hidden');
       
//         try {

//             let reqWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${this.apiKey}&units=metric&lang=pt_br`);
//             this.weather = await reqWeather.json();
//             // this.showWeather();  
//             // console.log(this.weather); 
//             reqWeather = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${this.weather.coord.lat}&lon=${this.weather.coord.lon}&appid=${this.apiKey}&units=metric&lang=pt_br`)
//             this.weather = await reqWeather.json(); 
             
//             // let reqForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURI(city)}&appid=${this.apiKey}&cnt=4&units=metric&lang=pt_br`);
//             // this.forecast = await reqForecast.json();  
//             // this.showForecast(); 

            
   
//         } catch (error) {
//             alert('OCORREU UM ERRO SEARCH');
//         }

//     }
 
//     showWeather() { 
        
//         let date = new Date(this.weather.dt*1000);
//         currentWxTime.innerText = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getHours()}h${date.getMinutes()}m`; 
//         cityName.innerText = `${this.weather.name}, ${this.weather.sys.country}`; 
//         currentWxIcon.src = `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`;
//         currentWxTemp.innerHTML = `${this.weather.main.temp}&degC`
//         currentWxDesc.innerHTML =
//         `${this.weather.weather[0].description}, sensação térmica ${this.weather.main.feels_like}&degC`;
//     }

//     showMap() {
 

//         // let map = L.map('map').setView([this.lat, this.long], 13);
//         // L.tileLayer(`https://tile.openstreetmap.org/0/0/0.png`, {
//         // }).addTo(map);


//     }

//     showForecast() { 
        
//         for(let i = 0; i< allHour.length; i++){
//             let date = new Date(this.forecast.list[i].dt*1000);
//             allHour[i].querySelector('.result__time').innerText = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getHours()}h${date.getMinutes()}m`; 
//             allHour[i].querySelector('.result__description').innerText = `${this.forecast.list[i].weather[0].description}`; 
//             allHour[i].querySelector('.result__temp .result__value').innerHTML = `${this.forecast.list[i].main.temp}&degC`;
//             allHour[i].querySelector('.result__temp .result__icon').src = `https://openweathermap.org/img/wn/${this.forecast.list[i].weather[0].icon}.png`;
//         }

//         // loadingArea.classList.add('hidden');
//         // searchArea.classList.remove('hidden');
//         // resultArea.classList.remove('hidden');

//     }  

//     get apiKey() {
//         return this._apiKey;
//     }

//     get location() {
//         return this._location
//     }

//     set location(object) {
//         this._location = object;
//     }

//     get lat() {
//         return this._lat;
//     }

//     set lat(value) {
//         this._lat = value
//     }

//     get long() {
//         return this._long;
//     }

//     set long(value) {
//         this._long = value
//     }

//     get weather() {
//         return this._weather
//     }

//     set weather(object) {
//         this._weather = object
//     }

//     get forecast() {
//         return this._forecast
//     }

//     set forecast(object) {
//         this._forecast = object
//     }

// }