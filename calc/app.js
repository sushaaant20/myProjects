/*let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('is-equal')
const clearbutton = document.getElementById('clearbtn')
const lastOperationScreen = document.getElementById('screen2')
const currentOperationScreen = document.getElementById('screen1')


window.addEventListener('keydown',keyInput)
equalsButton.addEventListener('click',calculate)
clearbutton.addEventListener('click',clear)


numberButtons.forEach((button)=>
button.addEventListener('click',()=>appendNumber(button.textContent))
)
operatorButtons.forEach((button)=>
    button.addEventListener('click',()=>appendNumber(button.textContent))
)*/

function display(val){
    document.getElementsByClassName('calc-button').value+val

}

function evaluate(){
    let x = document.getElementsByClassName('calc-button').value
    let y = eval(x)
    getElementsByClassName('calc-button').value = y
}