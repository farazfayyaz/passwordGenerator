const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let displayPass1 = document.getElementById('password1')
let displayPass2 = document.getElementById('password2')

function randomNum () {
    return Math.floor(Math.random() * characters.length) 
}

function generate () {
    let password1 = ''
    let password2 = ''

    for (let i = 0; i < 15; i++) {
        password1 += characters[randomNum()]
    }
    displayPass1.textContent = password1
    
    for (let i = 0; i < 15; i++) {
        password2 += characters[randomNum()]
    }
    displayPass2.textContent = password2
}

// generate()

// console.log(password1)
// console.log(password2)