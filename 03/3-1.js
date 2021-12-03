const fs = require("fs");

const data = fs.readFileSync("3-input.txt");
const dataList = data
  .toString()
  .split("\n")

let gamma=""
let epsilon=""
for (let i = 0; i <= 11; i++) {
  on = 0
  off = 0
  dataList.forEach((line) => {
    if (line[i] === "1") {
      on++
    } else {
      off++
    }
  })
  if (on > off) {
    gamma += "1"
    epsilon += "0"
  } else {
    gamma += "0"
    epsilon += "1"
  }
}

console.log(gamma, epsilon)
gamma = parseInt(+gamma, 2)
epsilon = parseInt(+epsilon, 2)

console.log(gamma, epsilon, gamma * epsilon)
