const fs = require("fs")

const data = fs.readFileSync("input.txt")
const dataList = data.toString().split("\n").slice(0, -1).map(num => +num)

n = 0
prev = Number.POSITIVE_INFINITY
for (let x of dataList) {
  if (x > prev) {
    n += 1
  }
  prev = x
}

console.log(n)
