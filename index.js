const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pw1 = document.getElementById("pw-1");
let pw2 = document.getElementById("pw-2");

function selectRandomIndex(array) {
    let randomIndex = Math.random()*characters.length;
    return Math.floor(randomIndex);
}

function generatePassword() {
    let pwLength = 15;
    let password = "";
    for (let i = 0; i<pwLength; i++) {
        password += characters[selectRandomIndex(characters)];
    }
    return password;
}

function populateFields() {
    pw1.textContent = generatePassword();
    pw2.textContent = generatePassword();
}