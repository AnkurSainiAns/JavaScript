let count1 = document.getElementById("counter")
console.log(count1)
let count = 0
function increment() {
  count = count + 1
  count1.innerText = count
}
