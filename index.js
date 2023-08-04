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

const request  = require('postman-request');
request("https://dog.ceo/api/breeds/image/random",(error,response,body)=>{
    const {message,status} = JSON.parse(body);
    console.log(message);
    console.log(status);
})

request("https://api.thecatapi.com/v1/images/search",(error,response,body)=>{
    const catPicture = JSON.parse(body);
    console.log(catPicture[0].url);
})


