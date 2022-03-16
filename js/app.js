const API_KEY = `c709a413b7e6b127093d9ed721f858d2`
const searchTemperature = () => {
    const place = document.getElementById('place-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));

}