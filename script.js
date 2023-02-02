const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let showPasswords = document.querySelectorAll('.box');
let generateBtn = document.getElementById('generate-btn');

function generateRandomPasswords()
{
    let randomChar1 = "";
    let randomChar2 = "";
    for (let i = 0; i < 15; ++i) 
    {
      randomChar1 += characters[Math.floor(Math.random() * characters.length)];
      randomChar2 += characters[Math.floor(Math.random() * characters.length)];
      
    }
    showPasswords[0].textContent = randomChar1;
    showPasswords[1].textContent = randomChar2;
}

generateBtn.addEventListener('click', generateRandomPasswords);