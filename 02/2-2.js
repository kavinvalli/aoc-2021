const fs = require("fs");

const data = fs.readFileSync("2-input.txt");
const dataList = data
  .toString()
  .split("\n")
  .slice(0, -1)
  .map((line) => ({ command: line.split(" ")[0], value: +line.split(" ")[1] }));

horizontal = 0;
depth = 0;
aim = 0;
dataList.forEach(({ command, value }) => {
  switch (command) {
    case "forward":
      horizontal += value;
      depth += (aim * value);
      break;
    case "down":
      aim += value;
      break;
    case "up":
      aim -= value;
      break;
  }
});

console.log(horizontal * depth);
