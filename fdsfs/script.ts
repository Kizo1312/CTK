var firstName: string = "Toma";
var yearOfBirth: number = 1996;

function trenutnaDob2(ime: string, dob: number) {
    let currentAge: number = 2025 - dob;
    return "ime: " + ime + " Dob: " + currentAge;
}

console.log(trenutnaDob(firstName, yearOfBirth));
console.log("hahaha");
