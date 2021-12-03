const fs = require("fs")

const data = fs.readFileSync("input.txt")
const dataList = data.toString().split("\n").slice(0, -1).map(num => +num)

let sumArray = []
for (let i = 0; i < dataList.length; i++) {
  sumArray.push(dataList[i] + dataList[i + 1] + dataList[i + 2])
}

console.log(sumArray)

n = 0
prev = Number.POSITIVE_INFINITY
for (let x of sumArray) {
  if (x > prev) {
    n += 1
  }
  prev = x
}

console.log(n)
