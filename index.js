let count1 = document.getElementById("counter")
console.log(count1)
let count = 0
function increment() {
  count += 1
  console.log(count)
  count1.innerText = count
}
let greeting = document.getElementById("thanks")
console.log(greeting)

function buyNow() {
  greeting.textContent = "Thank you for your purchase!"
} 
// calculator
let number1=5
let number2=10
document.getElementById("num1").textContent=number1
document.getElementById("num2").textContent=number2
let sum = document.getElementById("result")
function add() {
  let results = number1 + number2
  sum.textContent = results
}
function subtract() {
  let results = number1 - number2
  sum.textContent = results
}
function multiply() {
  let results = number1 * number2
  sum.textContent = results
}
function divide() {
  let results = number1 / number2
  sum.textContent = results
}