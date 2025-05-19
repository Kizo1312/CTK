const firstName: string = "Toma";
const yearOfBirth: number = 1996;

function trenutnaDob(ime: string, dob: number) {
    let currentAge: number = 2025 - dob;
    return "ime: " + ime + " Dob: " + currentAge;
}

console.log(trenutnaDob(firstName, yearOfBirth));
console.log("hahaha");

function add(a:number, b:number):number {
    return a+b

}
let hobbies = ["hobi1", "hobi2", "hobi3"]
hobbies.push("hobi4")
let number:number[] =[1,2,3]
let mixedArray:(string|number) [];
mixedArray = [1,"haha"]


function proccesItems(items:any[]){
 const newItems =  items.map((item) =>{
    if (typeof(item) == "string"){
        return item.toUpperCase()
    }else{
        return item*item
    }
 })
 return newItems
}

console.log(proccesItems(["toma", 5]))

let nekiObj: {
    name:string,
    age: number,
    akcije: string[],
   info: ()=> void


} = {
    name:"Ana",
    age:30,
    akcije: ["nogomet"],
    info: ()=>{
        console.log("hahah")
    }
}
nekiObj.name ="hhahaha"

let obj = {};
//lol
console.log(nekiObj.info())
//lol
let student:{
    name:string,
    lastName:string,
    grade:number,
    isActive:boolean
}

function getActiveStudents(popis:{
    name:string,
    lastName:string,
    grade:number,
    isActive:boolean
}[]){
    let brojac:number = 0
   const aktivni =popis.map((student) =>{
    if (student.isActive){
        return student.grade
    }
    else{
        brojac +=1
        return 0
    }

    })
    let sum:number = 0
    for(let i = 0; i < aktivni.length; i++){
       

            sum += aktivni[i]
        

    }
    return sum / (aktivni.length - brojac)
}
const studenti:any[] = [{name:"toma", lastName:"ilcic", grade:5, isActive:true},
                        {name:"toma", lastName:"ilcic", grade:4, isActive:true},
                        {name:"toma", lastName:"ilcic", grade:4, isActive:false}]
console.log(getActiveStudents(studenti))

enum Role  {
Admin,
Editor,
Viewer
}


const user1:{} = {
    name: "Toma",
    role: Role.Admin

}
const user2:{} = {
    name:"Matej",
    role: Role.Editor

}
const user3:{} = {
    name:"Andro",
    role: Role.Viewer

}
const user4:{} = {
    name:"Mihael",
    role: Role.Admin
}
const users:{}[] = [user1,user2,user3,user4]

function getAdmins(useri:any[]){
    let admini:string[] =[]
     useri.filter((user) => {
         if(user.role === Role.Admin){
           admini.push (user.name)

       }

        
    })
    return admini
   

    
}



console.log(getAdmins(users))



class Korisnik{
    public ime:string;
    private godine:number;

    constructor(ime:string, godine:number){
         this.ime=ime
        this.godine =godine
    }
    
        

       
    
    public pozdravi():void{
        console.log("pozdrav od" + this.ime)
    }
    public pokaziGodine():void{
        console.log(this.ime + " ima" + this.godine)
    }
}

const korisnik = new Korisnik("Toma", 29);
korisnik.pozdravi();
korisnik.pokaziGodine()

class Admin extends Korisnik{
    private specialKey: boolean;
    constructor(ime:string, godine:number, specialKey:boolean){
        super(ime,godine)
        this.specialKey = specialKey
    }
    public pokaziGodine(): void {
        console.log("hahahah")
    }
}
const noviAdmin = new Admin("Toma", 29, true)

noviAdmin.pokaziGodine()