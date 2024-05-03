// ============= elments =============
let input = document.querySelector('#input');
let copy = document.querySelector('.fa-copy');
let range = document.querySelector('#length');
let value = document.querySelector('#lengthValue');
let subBtn = document.getElementById('generate');


// ============= Checkbox =============
let uppercaseinput = document.getElementById('uppercase');
let lowercaseinput = document.getElementById('lowercase');
let numbersinput = document.getElementById('Numbers');
let symbolsinput = document.getElementById('Symbols');

// ============= Variables =============

let uppercase = 'abcdefghijklmnopqrstuvwxyz';
let lowercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789';
let symbols = '!@#$%^&*()';

// =========== FUNCTION =============

range.addEventListener('input', () => {
    value.textContent = range.value;
})


subBtn.addEventListener("click", () => {
    function randompass(includeUpperCase, includeLowerCase, includeNumber, includeSymbol, length) {
        let Passward = ""
        let allowedChars = ""

        allowedChars += includeUpperCase ? uppercase : "";
        allowedChars += includeLowerCase ? lowercase : "";
        allowedChars += includeNumber ? numbers : "";
        allowedChars += includeSymbol ? symbols : "";


        for (i = 0; i < length; i++){
            const passmaker = Math.ceil(Math.random() * allowedChars.length)
            Passward += allowedChars[passmaker]
        }        
        return Passward
    }

    isincludeUpper = document.getElementById("uppercase").checked
    isincludeLower = document.getElementById("lowercase").checked
    isincludeNumber = document.getElementById("numbers").checked
    isincludeSymbol = document.getElementById("sympols").checked

    const length = document.getElementById("length").value

    const paasword = randompass(isincludeUpper, isincludeLower, isincludeNumber, isincludeSymbol, length)

    input.value = paasword
})

copy.addEventListener("click", () => {
    input.select()
    // document.execCommand("copy")
    document.execCommand("copy")
})