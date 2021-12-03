const fs = require("fs");

const data = fs.readFileSync("3-input.txt");
const dataList = data.toString().split("\n").slice(0, -1);

let oxygenArray = [...dataList];
for (let i = 0; i <= 11; i++) {
  let on = 0;
  let off = 0;
  oxygenArray.forEach((line) => {
    if (line[i] === "1") {
      on++;
    } else {
      off++;
    }
  });
  if (on >= off) {
    let toBeRemovedIndexes = [];
    for (let j = 0; j < oxygenArray.length; j++) {
      if (oxygenArray[j][i] !== "1") {
        toBeRemovedIndexes.push(j);
      }
    }
    for (let s = 0; s < toBeRemovedIndexes.length; s++) {
      oxygenArray.splice(toBeRemovedIndexes[s], 1);
      toBeRemovedIndexes = toBeRemovedIndexes.map((k) => k - 1);
    }
  } else {
    let toBeRemovedIndexes = [];
    for (let j = 0; j < oxygenArray.length; j++) {
      if (oxygenArray[j][i] !== "0") {
        toBeRemovedIndexes.push(j);
      }
    }
    for (let s = 0; s < toBeRemovedIndexes.length; s++) {
      oxygenArray.splice(toBeRemovedIndexes[s], 1);
      toBeRemovedIndexes = toBeRemovedIndexes.map((k) => k - 1);
    }
  }

  if (oxygenArray.length === 1) break;
}

let co2Array = [...dataList];
for (let i = 0; i <= 11; i++) {
  let on = 0;
  let off = 0;
  co2Array.forEach((line) => {
    if (line[i] === "1") {
      on++;
    } else {
      off++;
    }
  });
  if (off <= on) {
    let toBeRemovedIndexes = [];
    for (let j = 0; j < co2Array.length; j++) {
      if (co2Array[j][i] !== "0") {
        toBeRemovedIndexes.push(j);
      }
    }
    for (let s = 0; s < toBeRemovedIndexes.length; s++) {
      co2Array.splice(toBeRemovedIndexes[s], 1);
      toBeRemovedIndexes = toBeRemovedIndexes.map((k) => k - 1);
    }
  } else {
    let toBeRemovedIndexes = [];
    for (let j = 0; j < co2Array.length; j++) {
      if (co2Array[j][i] !== "1") {
        toBeRemovedIndexes.push(j);
      }
    }
    for (let s = 0; s < toBeRemovedIndexes.length; s++) {
      co2Array.splice(toBeRemovedIndexes[s], 1);
      toBeRemovedIndexes = toBeRemovedIndexes.map((k) => k - 1);
    }
  }

  if (co2Array.length === 1) break;
}

console.log(parseInt(+oxygenArray[0], 2) * parseInt(+co2Array[0], 2) )
