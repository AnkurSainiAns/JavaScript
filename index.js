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
  greeting.textContent = "Thank you for your purchase!"}