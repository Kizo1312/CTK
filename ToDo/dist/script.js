"use strict";
const input = document.getElementById("input");
const button = document.getElementById("add");
const popis = document.getElementById("popis");
button.addEventListener("click", function () {
    if (input.value) {
        const stavka = document.createElement("li");
        let inputValue = input.value;
        stavka.textContent = inputValue;
        popis.appendChild(stavka);
        input.value = "";
    }
    else {
        console.log("need an input");
    }
});
console.log("lala");
console.log("ajde vise");
//# sourceMappingURL=script.js.map