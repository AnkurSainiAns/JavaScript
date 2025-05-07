let count1 = document.getElementById("counter")
console.log(count1)
let count = 0
function increment() {
  for (let i = 0; i < 100000; i++) {
    count += 1
    console.log(count)
    count1.innerText = count
  }

  count = 0;
}
