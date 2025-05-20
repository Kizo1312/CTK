const input = document.getElementById("input") as HTMLInputElement
const button = document.getElementById("add") as HTMLBodyElement
const popis = document.getElementById("popis") as HTMLBodyElement

button.addEventListener("click", function(){
    if(input.value){

        const stavka = document.createElement("li") 
        let   inputValue = input.value;
        stavka.textContent= inputValue
        
        popis.appendChild(stavka)
        input.value = ""
    }else{
        console.log("need an input")
    }
})
console.log("lala")
console.log("ajde vise")