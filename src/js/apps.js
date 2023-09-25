// Select Elements
const container = document.querySelector('.container');
const search = document.querySelector('.searchBox button');
const weatherBox = document.querySelector('.weatherBox');
const weatherDetails = document.querySelector('.weatherDetails');
const error404 = document.querySelector('.NotFound');

// Data apps
const weather = {};

weather.temperature = {
    unit : "celsius"
}



const KELVIN = 273;
// Get weather from API OpenWeatherApp

search.addEventListener('click', ( ) => {
    // OpenweatherMap Key

    const keyglasaqui =`4c8ae3a35b2617b887888c3c82247a07`;
    const city = document.querySelector('searchBox inpu').value;

    if(city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keyglasaqui}`).then
    (response=>response.json()).then (json =>{

        if(json.cod==='404'){
            container.style.height= '400px';
            weatherBox.display = 'none';
            weatherDetails.display = 'none';
            error404.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.display = 'none';
        error404.classList.add('fadeIn');
        const image = document.querySelector('.weatherBox img');
        const temperature = document.querySelector('.weatherBox .temperature');
        const description = document.querySelector('.weatherBox .description');
        const humidity = document.querySelector('.weatherDetails .humidity span');
        const wind = document.querySelector('.weatherDetails .wind span');

    })







})
