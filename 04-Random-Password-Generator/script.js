const passBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const lowerCase = "abcdefghijklmnoprstuvwxyz";
const number = "0123456789";
const symbol = "@#$+%&/(){}[]\\,_-*=";
const allChars = upperCase + lowerCase + number + symbol;

function createPass() {
 let pass = "";
 pass += upperCase[Math.floor(Math.random() * upperCase.length)];
 pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
 pass += number[Math.floor(Math.random() * number.length)];
 pass += symbol[Math.floor(Math.random() * symbol.length)];

 while (pass.length < length) {
  pass += allChars[Math.floor(Math.random() * allChars.length)];
 }

 passBox.value = pass;
}



function copyPass() {
 passBox.select();
 document.execCommand("copy");
}