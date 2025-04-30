
let count = 0
function addCSS() {
  count++
  if (count % 2 !== 0) {
    document.getElementById("head").innerHTML = '<meta name="viewport" content="width=device-width, initial-scale=1.0"> \n <meta charset="UTF-8"> \n<title>Example HTML Website</title> \n<link rel="stylesheet" href="./style.css" /> \n <script src="script.js"></script>'
  } else {

    document.getElementById("head").innerHTML = ' <meta name="viewport" content="width=device-width, initial-scale=1.0"> \n <meta charset="UTF-8"> \n <title>Example HTML Website</title> \n <script src="script.js"></script> '

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
*/

let unos = prompt("unesi broj godina")
let max = 90
let preostaleGodine = 90 - unos
let mjeseci = preostaleGodine*12
let dani = preostaleGodine*365
if(unos > 90){
    alert("ne valja")
    
}else{
    alert(`do 90. rodendana vam preostaje ${preostaleGodine} godina ili ${mjeseci} mjeseci ili ${dani} dana`)
}
   
