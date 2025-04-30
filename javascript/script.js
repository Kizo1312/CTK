let count = 0;
function addCSS() {
  count++;
  if (count % 2 !== 0) {
    document.getElementById("head").innerHTML =
      '<meta name="viewport" content="width=device-width, initial-scale=1.0"> \n <meta charset="UTF-8"> \n<title>Example HTML Website</title> \n<link rel="stylesheet" href="./style.css" /> \n <script src="script.js"></script>';
  } else {
    document.getElementById("head").innerHTML =
      ' <meta name="viewport" content="width=device-width, initial-scale=1.0"> \n <meta charset="UTF-8"> \n <title>Example HTML Website</title> \n <script src="script.js"></script> ';
  }
}
/*
let unos = prompt("unesi text")
let broj = unos.length
let max = 10
if(!broj ){
alert("alo, unesi nesto")
}else if(broj > max){
    alert(unos.slice(0,max))
}else {
    
let ostalo = max - broj
alert(unos +" ostalo "+ ostalo)
}

let unos = prompt("unesi broj godina");
const max = 90;
let preostaleGodine = max - unos;
let mjeseci = preostaleGodine * 12;
let dani = preostaleGodine * 365;
if (unos > 90) {
    alert("ne valja");
} else {
    alert(
`do 90. rodendana vam preostaje ${preostaleGodine} godina ili
${mjeseci} mjeseci ili
${dani} dana`
);
}

function alerts(){
    alert("Korak1")
    alert("Korak2")
    alert("Korak3")
    
}
alerts()
const availableMoney = prompt("koliko imas para")
priceOfBread= 1.5
function howMuch(pare){
    const canBuy = Math.floor(pare / priceOfBread)
    const ostatak = pare% priceOfBread
    console.log(`za ${availableMoney} para mozes kupit ${canBuy} kruha i ostane ti ${ostatak} para`)
}
howMuch(availableMoney)
*/
const userName= prompt("enter name")
const names = ["Paula", "Matej","Toma","Hana","Andro","Mihael"]
function checkGuests(name){
    if(names.includes(name)){
        return `Dobrodosli ${name}`

    }else return `${name}, niste na popisu`
}
const prvi = names[0]
const zadnji =names[names.length -1]
console.log(checkGuests(userName))
console.log(prvi,zadnji )