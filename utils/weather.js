const weather = (location,unit,callback)=>{
    const url =`http://api.weatherstack.com/current?access_key=229639c46f875c77bd8a6e8157c6641c&query=${encodeURIComponent(location)}&units=${unit}`
    fetch(url)
        .then(res=>res.json())     
        .then(data=>{
            if(data.success === false){
                callback(`Impossible de renvoyer vos information. Error ${data.error.code}: ${data.error.info}`,undefined)
            }else{
                const{current,location} = data
            callback(undefined,{
                location: location.name,
                country: location.country,
                temperature: current.temperature,
                feelslike: current.feelslike,
                weather_descriptions: current.weather_descriptions[0],
            });
            }
            
        });
};

module.exports = { weather };