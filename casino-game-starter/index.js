// Ikona zastavice sa prijemjrom pobjednickog teksta
//🚩 Player 1 Wins!

const random1 = Math.floor(Math.random() * 6) +1;
const random2 = Math.floor(Math.random() * 6) +1;

document.getElementById("img1").src = `/casino-game-starter/images/dice${random1}.png`;
document.getElementById("img2").src = `/casino-game-starter/images/dice${random2}.png`;

if (random1 > random2){
    document.querySelector("h1").innerHTML ="Player 1 wins 🚩"
}else if(random2 > random1){
    document.querySelector("h1").innerHTML ="Player 2 wins 🚩"
} else {
    document.querySelector("h1").innerHTML ="It is a tie 🚩"
};