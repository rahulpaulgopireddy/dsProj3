import inputData from "./inputdata.json" assert { type: "json" };

let range = 200;
inputData.forEach((element, index) => {
  var startTime = performance.now();
  BMSearch(element.stringText, element.pattern);
  var endTime = performance.now();
  console.log(
    ` Execution time to find "${element.pattern}" in string " ${
      element.stringText
    } "   ${endTime - startTime} Milliseconds`
  );
});

function FailureTableHeuristic(stringtext, size, failureChar) {
  // initial all the values with -1

  for (let index = 0; index < range; index++) {
    failureChar[index] = -1;
  }

  //fill the values that are indexes of occrurance
  for (let index = 0; index < size; index++) {
    failureChar[stringtext[index].charCodeAt(0)] = index;
  }
}

function maxValue(a, b) {
  return a > b ? a : b;
}

function BMSearch(stringText, pattern) {
  let CompCount = 0;
  let patLen = pattern.length;
  let strLen = stringText.length;
  let failureChar = new Array(range);
  FailureTableHeuristic(pattern, patLen, failureChar);
  let shiftNumber = 0;
  while (shiftNumber <= strLen - patLen) {
    let j = patLen - 1;
    while (j >= 0 && pattern[j] == stringText[shiftNumber + j]) {
      j--;
    }

    if (j < 0) {
      console.log(" At Shift " + shiftNumber + "Pattern occures");
      shiftNumber +=
        shiftNumber + patLen < strLen
          ? patLen - failureChar[stringText[shiftNumber + patLen].charCodeAt(0)]
          : 1;
    } else {
      shiftNumber += maxValue(
        1,
        j - failureChar[stringText[shiftNumber + j].charCodeAt(0)]
      );
    }
  }
}
