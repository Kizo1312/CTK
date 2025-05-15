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

function dijeljivSa(nums){
    arr = []
    for (let i = 1; i< nums ; i++){
        arr.push(i)
    }
    for(let i = 0; i < arr.length; i++){
        
    if (arr[i] % 3 === 0 && arr[i] % 5 !=0){
        arr[i] ="Fizz"
        
    }else if(arr[i] % 5 === 0 && arr[i] % 3 !=0){
        arr[i] ="Buzz"
    }else if(arr[i] % 5 === 0 && arr[i] % 3 ===0){
        arr[i] ="Fizz Buzz"
    }
    
}
console.log(arr)
}

dijeljivSa(100)

function beer (){
    for (let bottles = 99; bottles>= 0; bottles--){
        if (bottles == 0){
            console.log("No more bottles of the beer on the wall, Go buy some more")
            
        }else{
            console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. 
        Take one down and pass it around, ${bottles-1} bottles of beer on the wall`)
    }
}

}

beer()

function fibonacci (n){
    let a =0
    let b =1
    let num = 0
    let list = [a,b]
    for(let i = 2; i <n; i++ ){
        num = a+b
        list.push(num)
        a= list[i-1]
        b= list[i]
        
    }
    
    
    console.log(list)
    
}
fibonacci(10)




const button = document.getElementById("add")
const input = document.getElementById("input")
const lista = document.getElementsByTagName("ul")[0]


button.addEventListener("click", () =>{
    const inputValue = input.value
    const jedan = document.createElement("li")
    jedan.innerHTML = inputValue 
    lista.appendChild(jedan) 
    input.value = ""
})
*/

function add(x,y){
    return x+y
}

function multiply(x,y){
    return x*y
}

function divide (x,y){
    return x/y
}
function deduct(x,y){
    return x-y
}


function caclulate(x,y, operator){
    return operator(x,y)


}

console.log(caclulate(5,7,multiply))
console.log(caclulate(5,7,add))
console.log(caclulate(5,7,deduct))
console.log(caclulate(5,7,divide))

