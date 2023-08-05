/*const fs = require("fs");
// fs.readFileSync(path[, options])
// fs.writeFileSync(file, data[, options])

fs.writeFileSync("test.txt", "mon deuxieme fichier");
console.log("mon fichier a était modier");

const fileContent = fs.readFileSync("test.txt","utf8");
console.log(fileContent);*/

//const { require } = require("yargs");


/*const ft = require("./function");

console.log(ft.multiply(5, 10))
console.log(ft.devide(10, 5))*/

/*const {multiply,devide} = require("./function");
const {chain} = require("mathjs");

console.log(multiply(5, 10))
console.log(devide(10, 5))

console.log(chain(3)
    .add(4)
    .multiply(2)
    .done()  )
*/

/*const chalk = require("chalk");

console.log(chalk.bgRed("Erreur!"));
console.log(chalk.green.bold("Succeès!"));
console.log(chalk.yellow.underline("Avertissement!")); */

/*const  { argv } = require("process");

const options = argv[2];

if(options === "foo"){
    console.log("foo");
} else if(options === "bar"){
    console.log("bar")
}else {
    console.log("default");
}*/

/*const argv = require("minimist")(process.argv.slice(2));

console.log(argv);
console.log(argv.name);
console.log(argv.a);*/
//const { readFileSync, writeFileSync } = require("fs");

//const jsonToObject = JSON.parse(readFileSync('./data.json','utf-8'));
/*
console.log(jsonToObject.name);
console.log(jsonToObject.age);
console.log(jsonToObject.legal);
*/

// const newData = {
//     name:"justine",
//     age :27,
//     legal: true
// }
// const objToJson = JSON.stringify(newData);
// console.log(objectToJson);

// writeFileSync('./myData.json', objectToJson);
// const myData =JSON.parse(readFileSync('./myData.json','utf-8'));


// myData.name ="pierre";
// const objectToJson = JSON.stringify(myData);
// writeFileSync('./myData.json',objectToJson);

// debugger

// console.log(myData.name);

//  console.log ("Je suis lancé en premier ")
// setTimeout(()=>{
//     console.log ("après 3 seconde")
// },3000)
//  console.log ("après c'est moi ")

// const request  = require('postman-request');
// request("https://dog.ceo/api/breeds/image/random",(error,response,body)=>{
//     const {message,status} = JSON.parse(body);
//     console.log(message);
//     console.log(status);
// })

// request("https://api.thecatapi.com/v1/images/search",(error,response,body)=>{
//     const catPicture = JSON.parse(body);
//     console.log(catPicture[0].url);
// })

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res=>res.json())
//     .then(data=>console.log(data.message));

// fetch("https://api.thecatapi.com/v1/images/search")
//     .then(res=>res.json())
//     .then(data=>console.log(data[0].url));

// const paramaters = {
//     access_key:"229639c46f875c77bd8a6e8157c6641c",
//     query :"Paris",
//     units: "m"
// }

//  fetch(`http://api.weatherstack.com/current?access_key=${paramaters.access_key}&query=${paramaters.query}`)
//     .then(res=>res.json())     
//     .then(data=>{
//         if(data.success === false){
//             console.log(`Error ${data.error.code}: ${data.error.info}`)
//         }else{
//             const{current,location,request} = data
//         console.log(`le nom de la ville est ${location.region}. le nom du pays est ${location.country}. Il fait ${current.temperature}°, le ressenti est de ${current.feelslike}. le temps est ${current.weather_descriptions[0]}`);
//         }
        
//     });
// calback:err,data
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
}

weather("","m", (err,data)=>{
    console.log('Erreur:',err);
    console.log('Data:', data);
})

weather("New york","m", (err,data)=>{
    console.log('Erreur:',err);
    console.log('Data:', data);
})

