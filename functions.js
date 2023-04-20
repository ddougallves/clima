const apiKey = '8fd86a036badd0aa010406e2ee17faa8';

let city;
let weather;
const monsths = ['Jan.','Fev.','Mar.','Abr.','Maio','Jun.','Jul.','Ago.','Set.','Out.','Nov.','Dez.'];
const week = ['Seg.','Ter.','Qua.','Qui.','Sex.','Sáb.','Dom.'];

async function search(cityName){

    loading.classList.add('loading--active');
    
    try {
 
        let req = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURI(cityName)}&appid=${apiKey}`);
        city = await req.json();
        req = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${city[0].lat}&lon=${city[0].lon}&units=metric&lang=pt_br&appid=${apiKey}`);
        weather = await req.json();

    } catch (error) {
        alert('Oops! ocorreu um erro. Atualize a página e pesquise novamente ou tente mais tarde.')
    }

    show();
    map.setView([weather.lat,weather.lon],13)
    loading.classList.remove('loading--active');

}  

function autoSearch() {

    loading.classList.add('loading--active');

    navigator.geolocation.getCurrentPosition(async (pos)=>{
        
        try {

            let req = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&limit=1&appid=${apiKey}`);
            city = await req.json();
            req = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${city[0].lat}&lon=${city[0].lon}&units=metric&lang=pt_br&appid=${apiKey}`);
            weather = await req.json();

        } catch (error) {
            alert('Oops! ocorreu um erro. Atualize a página e pesquise novamente ou tente mais tarde.')
        }

        show();
        map.setView([weather.lat,weather.lon],13)
        loading.classList.remove('loading--active');

    })

}

function show() {

    curTime.innerText = new Intl.DateTimeFormat('pt-BR',
    {
        weekday:'short',
        day:'numeric',
        month:'short',
        hour:'2-digit',
        minute:'2-digit',
        timeZone:weather.timezone
    }).format(new Date()); 

    curCity.innerText = `${city[0].name}, ${city[0].country}`; 
    curIcon.src = `https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`;
    curTemp.innerText = `${weather.current.temp}`; 
    curDesc.innerText = `${weather.current.weather[0].description}, sensação térmica ${weather.current.feels_like}`;
    
    info.querySelector('.weather__wind .weather__value').innerText = `Vento: ${weather.current.wind_speed}m/s`;
    info.querySelector('.weather__wind .weather__icon').style.rotate = `-${weather.current.wind_deg - 90}deg`;

    info.querySelector('.weather__uvi .weather__value').innerText = `Índice UVI: ${weather.current.uvi}`;
    info.querySelector('.weather__visibility .weather__value').innerText = `Visibilidade: ${weather.current.visibility/1000}km`;
    info.querySelector('.weather__humidity .weather__value').innerText = `Humidade: ${weather.current.humidity}%`;

    info.querySelector('.weather__sunrise .weather__time').innerText = 
    `Nascer do sol: ${
    new Intl.DateTimeFormat('pt-BR',
    {
        timeStyle:'short',
        timeZone:weather.timezone
    })
    .format(new Date(weather.current.sunrise*1000))
    }`;

    info.querySelector('.weather__sunset .weather__time').innerText = 
    `Pôr do sol: ${
    new Intl.DateTimeFormat('pt-BR',
    {
        timeStyle:'short',
        timeZone:weather.timezone
    })
    .format(new Date(weather.current.sunset*1000))
    }`;

    for(let i = 1;i<hourly.length+1;i++){

        hourly[i-1].querySelector('.weather__time').innerText = `
        ${new Intl.DateTimeFormat('pt-BR',{timeStyle:'short',timeZone:weather.timezone}).format(new Date(weather.hourly[i].dt*1000))}`;

        hourly[i-1].querySelector('.weather__icon').src = `https://openweathermap.org/img/wn/${weather.hourly[i].weather[0].icon}.png`;

        hourly[i-1].querySelector('.weather__celsius').innerHTML = `${weather.hourly[i].temp}`;

    } 

    for(let i = 1;i<daily.length+1;i++){

        daily[i-1].querySelector('.weather__time').innerText = `
        ${new Intl.DateTimeFormat('pt-BR',{weekday:'short',
        day:'numeric',
        month:'short',
        timeZone:weather.timezone}).format(new Date(weather.daily[i].dt*1000))}`;

        daily[i-1].querySelector('.weather__description').innerText = `${weather.daily[i].weather[0].description}`
 
        daily[i-1].querySelector('.weather__icon').src = `https://openweathermap.org/img/wn/${weather.daily[i].weather[0].icon}.png`;

        daily[i-1].querySelector('.weather__celsius .min').innerHTML = `${weather.daily[i].temp.min}`; 
        daily[i-1].querySelector('.weather__celsius .max').innerHTML = `/${weather.daily[i].temp.max}`;

    } 

} 
