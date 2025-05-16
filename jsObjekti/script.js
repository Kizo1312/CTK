/*function Zvotinja(vrsta,ime,dob,domestic,omiljenaHrana){
    this.vrsta= vrsta;
    this.ime=ime;
    this.dob = dob;
    this.domestic = domestic;
    this.omiljenaHrana =omiljenaHrana;
    this.info = function(){
        console.log("info o imenu", this.ime)
    }

}

const pas = new Zvotinja("pas", "floki", 5, true, ["cipele", "lopta"])
const maca = new Zvotinja("macka", "Lulu", 4, true, ["cipele", "lopta"])

console.log(pas)
console.log(maca)
console.log(pas.info())
pas.napraviZvuk = function(){
    console.log("Woof WOof")
}
console.log(pas.napraviZvuk)
pas.imaRep = true;
*/
function Car (brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        return "This car is " + brand +" " + model +" from " +year
    }

}
const audi = new Car("Audi", "A6", 2025)
console.log(audi.getCarInfo())

const parametri = document.getElementsByClassName("parametri")
const auti = document.getElementById("auti")


const button = document.getElementById("add")
button.addEventListener("click", function(){
    const auto = new Car(parametri[0].value, parametri[1].value, parametri[2].value)
    const jedan = document.createElement("p")
    jedan.innerHTML = `${auto.getCarInfo()}`
    auti.appendChild(jedan)


})

const ferarri = new Car("Ferarri", "tornado",2025)
ferarri.boja = "red"
ferarri.crvena = function(){
    if (ferarri.boja == "red") {
        console.log("Da, crveni je")

    }else {
        console.log("Nije crveni")
    }
        
        

}
ferarri.crvena()




function Todo (name){
    this.name = name
}
