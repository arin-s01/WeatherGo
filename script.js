const apiKey = "e59c5997768bb26e78fafae150d04103";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');




async function checkweatherDetails(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        var data = await response.json();
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/hr';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png';
}else if(data.weather[0].main == 'Clear'){
    weatherIcon.src = 'images/clear.png';
}else if(data.weather[0].main == 'drizzle'){
    weatherIcon.src = 'images/drizzle.png';
}else if(data.weather[0].main == 'Humidity'){
    weatherIcon.src = 'images/humidity.png';
}else if(data.weather[0].main == 'Mist'){
    weatherIcon.src = 'images/humidity.png';
}else if(data.weather[0].main == 'Rain'){
    weatherIcon.src = 'images/rain.png';
}else if(data.weather[0].main == 'Snow'){
    weatherIcon.src = 'images/snow.png';
}else if(data.weather[0].main == 'Wind'){
    weatherIcon.src = 'images/wind.png';
}
document.querySelector('.error').style.display = 'none';

}

}

searchBtn.addEventListener('click',() => {
    checkweatherDetails(searchInput.value);
});