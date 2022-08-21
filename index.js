
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let checkedArray = [];
let passwordGenerated = false;
let oneChecked = false;
let checkedMessage = document.getElementById("minimum-check");
let copyMessage = document.getElementById("copy-message");
let pw1 = document.getElementById("pw-1");
let pw2 = document.getElementById("pw-2");

function setCheckedArray() {
    checkedArray = [];
    passwordGenerated = false;
    oneChecked = false;
    copyMessage.textContent = "";
    let letterCheck = document.getElementById("letters");
    let numberCheck = document.getElementById("numbers");
    let symbolCheck = document.getElementById("symbols");
    
    if (letterCheck.checked === true) {
        checkedArray = checkedArray.concat(letters)
        oneChecked = true;
        checkedMessage.textContent = "";
    }
     if (numberCheck.checked === true) {
        checkedArray = checkedArray.concat(numbers)
        oneChecked = true;
        checkedMessage.textContent = "";
    }
     if (symbolCheck.checked === true) {
        checkedArray = checkedArray.concat(symbols)
        oneChecked = true;
        checkedMessage.textContent = "";
    }
    
    if (oneChecked == false) {
        checkedMessage.textContent = "You must select at least one box."
    }
}

function selectRandomIndex(array) {
    let randomIndex = Math.random()*checkedArray.length;
    return Math.floor(randomIndex);
}

function generatePassword(length) {
    setCheckedArray();
    if (oneChecked == true) {
        let pwLength = length;
	if (length >=4 && length <= 100) {
        let password = "";
        for (let i = 0; i<pwLength; i++) {
            password += checkedArray[selectRandomIndex(checkedArray)];
        }
    passwordGenerated = true;
    return password;
	}
    }
}

function populateFields() {
    let pwLength = document.getElementById("pw-length").value;
    pw1.textContent = generatePassword(pwLength);
    pw2.textContent = generatePassword(pwLength);
}

function copyToClipboard(id) {
    if (passwordGenerated == true) {
        document.getElementById(id).select();
        document.execCommand('copy');
        copyMessage.textContent = "Password copied to clipboard!";
    }
}