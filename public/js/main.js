// Fichier js pour le front-end

// `le nom de la ville est ${location.region}. le nom du pays est ${location.country}. Il fait ${current.temperature}°, le ressenti est de ${current.feelslike}. le temps est ${current.weather_descriptions[0]}`

const myform = document.querySelector('.myForm');
const myLocation = document.querySelector('.myLocation');
const weatherData = document.getElementById('weatherData');

myform.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(`http://localhost:3000/weather?location=${myLocation.value}`)
        .then(res=>res.json())     
        .then(data=>{
            const {location,feelslike,country,temperature,weather_descriptions} = data
            weatherData.innerHTML=`le nom de la ville est ${location}. le nom du pays est ${country}. Il fait ${temperature}°, le ressenti est de ${feelslike}. le temps est ${weather_descriptions}`
        });
})