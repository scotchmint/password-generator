const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let showPasswords = document.querySelectorAll('.box');
let generateBtn = document.getElementById('generate-btn');

let checkboxNumbers = document.querySelector("input[name=numbers]");
let checkboxChars = document.querySelector("input[name=chars]");
let checkBoxNoSymbols = document.querySelector("input[name=numChars]");

let onlyNumbers = characters.filter(char => (+char || +char === 0));
let onlyChars = characters.filter(char => char.match(/[a-zA-Z]+/g));
let numbersAndChars = characters.filter(char => char.match(/[a-zA-Z0-9]+/g));

function generateRandomPasswords()
{
    let randomPassword1 = "";
    let randomPassword2 = "";
    for (let i = 0; i < 15; ++i) 
    {
        if (checkboxNumbers.checked)
        {
            randomPassword1 += onlyNumbers[Math.floor(Math.random() * onlyNumbers.length)];
            randomPassword2 += onlyNumbers[Math.floor(Math.random() * onlyNumbers.length)];
        }
        else if (checkboxChars.checked)
        {
            randomPassword1 += onlyChars[Math.floor(Math.random() * onlyChars.length)];
            randomPassword2 += onlyChars[Math.floor(Math.random() * onlyChars.length)];
        }
        else if (checkBoxNoSymbols.checked)
        {
            randomPassword1 += numbersAndChars[Math.floor(Math.random() * numbersAndChars.length)];
            randomPassword2 += numbersAndChars[Math.floor(Math.random() * numbersAndChars.length)];
        }
        else
        {
            randomPassword1 += characters[Math.floor(Math.random() * characters.length)];
            randomPassword2 += characters[Math.floor(Math.random() * characters.length)];
        }
      
    }
    showPasswords[0].textContent = randomPassword1;
    showPasswords[1].textContent = randomPassword2;
}

generateBtn.addEventListener('click', generateRandomPasswords);

checkboxNumbers.addEventListener('change', function() {
    checkboxChars.checked = false;
    checkBoxNoSymbols.checked = false;
});

checkboxChars.addEventListener('change', function() {
    checkboxNumbers.checked = false;
    checkBoxNoSymbols.checked = false;
});

checkBoxNoSymbols.addEventListener('change', function() {
    checkboxChars.checked = false;
    checkboxNumbers.checked = false;
});