const city = document.querySelector('.city')
const weather = document.querySelector('.weather')
const temp = document.querySelector('.temp')
const weatherIcon = document.querySelector('.icon')

window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ceb9ca9f68496c5837fe37d3f65bd9e7`)
            .then(response => response.json())
            .then(data => {
               show(data)
            })
            .catch(reject => {
                console.log('error cok')
            })
    })
    const form = document.querySelector('form')
    const input = document.querySelector('#cityVal')
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=ceb9ca9f68496c5837fe37d3f65bd9e7`)
        .then(response => response.json())
        .then(cityData => {
            show(cityData)
        })
})
})


function show(data){
     console.log(data)
            const {name} = data;
            const {main, icon} = data.weather[0];
            const celc = parseInt(data.main.temp) -273;
            const {country} = data.sys;
            city.innerHTML = `${name}, ${country}`;
            weather.innerHTML = `${main}`;
            temp.innerHTML = `${celc}`;
            weatherIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
}