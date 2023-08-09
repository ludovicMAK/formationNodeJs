const weather = (location,unit,callback)=>{
    const url =`http://api.weatherstack.com/current?access_key=229639c46f875c77bd8a6e8157c6641c&query=${encodeURIComponent(location)}&units=${unit}`
    fetch(url)
        .then(res=>res.json())     
        .then(data=>{
            if(data.success === false){
                callback(`Impossible de renvoyer vos information. Error ${data.error.code}: ${data.error.info}`,undefined)
            }else{
                const{current,location} = data
            callback(undefined,`le nom de la ville est ${location.region}. le nom du pays est ${location.country}. Il fait ${current.temperature}°, le ressenti est de ${current.feelslike}. le temps est ${current.weather_descriptions[0]}`);
            }
            
        });
};

module.exports = { weather };