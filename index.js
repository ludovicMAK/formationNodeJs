/*const fs = require("fs");
// fs.readFileSync(path[, options])
// fs.writeFileSync(file, data[, options])

fs.writeFileSync("test.txt", "mon deuxieme fichier");
console.log("mon fichier a était modier");

const fileContent = fs.readFileSync("test.txt","utf8");
console.log(fileContent);*/


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
const argv = require("minimist")(process.argv.slice(2));

console.log(argv);
console.log(argv.name);
console.log(argv.a);

