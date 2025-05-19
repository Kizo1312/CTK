var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var firstName = "Toma";
var yearOfBirth = 1996;
function trenutnaDob(ime, dob) {
    var currentAge = 2025 - dob;
    return "ime: " + ime + " Dob: " + currentAge;
}
console.log(trenutnaDob(firstName, yearOfBirth));
console.log("hahaha");
function add(a, b) {
    return a + b;
}
var hobbies = ["hobi1", "hobi2", "hobi3"];
hobbies.push("hobi4");
var number = [1, 2, 3];
var mixedArray;
mixedArray = [1, "haha"];
function proccesItems(items) {
    var newItems = items.map(function (item) {
        if (typeof (item) == "string") {
            return item.toUpperCase();
        }
        else {
            return item * item;
        }
    });
    return newItems;
}
console.log(proccesItems(["toma", 5]));
var nekiObj = {
    name: "Ana",
    age: 30,
    akcije: ["nogomet"],
    info: function () {
        console.log("hahah");
    }
};
nekiObj.name = "hhahaha";
var obj = {};
//lol
console.log(nekiObj.info());
//lol
var student;
function getActiveStudents(popis) {
    var brojac = 0;
    var aktivni = popis.map(function (student) {
        if (student.isActive) {
            return student.grade;
        }
        else {
            brojac += 1;
            return 0;
        }
    });
    var sum = 0;
    for (var i = 0; i < aktivni.length; i++) {
        sum += aktivni[i];
    }
    return sum / (aktivni.length - brojac);
}
var studenti = [{ name: "toma", lastName: "ilcic", grade: 5, isActive: true },
    { name: "toma", lastName: "ilcic", grade: 4, isActive: true },
    { name: "toma", lastName: "ilcic", grade: 4, isActive: false }];
console.log(getActiveStudents(studenti));
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Viewer"] = 2] = "Viewer";
})(Role || (Role = {}));
var user1 = {
    name: "Toma",
    role: Role.Admin
};
var user2 = {
    name: "Matej",
    role: Role.Editor
};
var user3 = {
    name: "Andro",
    role: Role.Viewer
};
var user4 = {
    name: "Mihael",
    role: Role.Admin
};
var users = [user1, user2, user3, user4];
function getAdmins(useri) {
    var admini = [];
    useri.filter(function (user) {
        if (user.role === Role.Admin) {
            admini.push(user.name);
        }
    });
    return admini;
}
console.log(getAdmins(users));
var Korisnik = /** @class */ (function () {
    function Korisnik(ime, godine) {
        this.ime = ime;
        this.godine = godine;
    }
    Korisnik.prototype.pozdravi = function () {
        console.log("pozdrav od" + this.ime);
    };
    Korisnik.prototype.pokaziGodine = function () {
        console.log(this.ime + " ima" + this.godine);
    };
    return Korisnik;
}());
var korisnik = new Korisnik("Toma", 29);
korisnik.pozdravi();
korisnik.pokaziGodine();
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(ime, godine, specialKey) {
        var _this = _super.call(this, ime, godine) || this;
        _this.specialKey = specialKey;
        return _this;
    }
    Admin.prototype.pokaziGodine = function () {
        console.log("hahahah");
    };
    return Admin;
}(Korisnik));
var noviAdmin = new Admin("Toma", 29, true);
noviAdmin.pokaziGodine();
