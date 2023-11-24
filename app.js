const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherDisplay = document.getElementById('weather-display');

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    const apiKey = 'a7ae2778e3ed0e8e4cd2f7241a646329'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        const cityName = data.name;
        const weatherDesc = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humid