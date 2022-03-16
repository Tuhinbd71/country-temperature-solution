const API_KEY = `c709a413b7e6b127093d9ed721f858d2`
const searchTemperature = () => {
    const place = document.getElementById('place-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('place', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather.icon}@2x.png`;
    const imgIcon = document.getElementById('eather-icon');
    imgIcon.setAttribute('src', url);
}