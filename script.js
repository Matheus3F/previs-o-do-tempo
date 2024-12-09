function getWeather () {
    const apiKey = 'e0dd94df6bfbbd3c019025ab586ccd9e'
    const City = document.getElementById('city').value;
    if (!City) {
        alert('Please enter a city');
        return;
    }
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
}
function getWeather() {
    
    fetch(correntWeatherUrl)
    .then(Response => Response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch
}