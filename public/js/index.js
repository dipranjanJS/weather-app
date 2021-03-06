// DOM variables
let temperature = document.querySelector('.temperature');
let feels_like =  document.querySelector('.feels_like');
let obs_time = document.querySelector('.obs_time');
let pressure = document.querySelector('.pressure');
let uv_index = document.querySelector('.uv_index');
let wind_speed = document.querySelector('.wind_speed');
let precip = document.querySelector('.precip');
let loading = document.querySelector('.loading');
let button = document.querySelector('button');
let searchValue = document.querySelector('input');
let weather_details = document.querySelector('.weather_details');

// Initially loading block should be visible
loading.textContent = '';
weather_details.textContent = '';

// Function to fetch weather details
async function getWeather() {
    let city = searchValue.value;
    // API url
    const url = `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=e5f4d4e154172b6c71c35ab398454479&query=${city}`;
    loading.textContent = 'Loading...';
    weather_details.textContent = 'Weather details';

    // Setting everything to empty string
    temperature.textContent = '';
    feels_like.textContent = '';
    obs_time.textContent = '';
    pressure.textContent = '';
    uv_index.textContent = '';
    wind_speed.textContent = '';
    precip.textContent = '';

    // Fetching data from the api url
    const response = await fetch(url);

    // Parsing data to json
    const data = await response.json();

    // Storing the current data
    const currentData = data.current;

    // Removing loading div
    if(currentData) {
        loading.textContent = '';
        weather_details.textContent = 'Weather details';
        temperature.textContent = 'Temperature- ' + currentData.temperature + ' dergee centigrade';
        feels_like.textContent = 'Feels like- ' + currentData.feelslike + ' dergee centigrade';
        obs_time.textContent = 'Obsearved at- ' + currentData.observation_time;
        pressure.textContent = 'Pressure- ' + currentData.pressure;
        uv_index.textContent = 'UV index- ' + currentData.uv_index;
        wind_speed.textContent = 'Current wind speed- ' + currentData.wind_speed;
        precip.textContent = 'Precipitation- ' + currentData.precip
    }
    else {
        loading.textContent = 'Invalid city name';
    }
}

button.addEventListener('click', getWeather);