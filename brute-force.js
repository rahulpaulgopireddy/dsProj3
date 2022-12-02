import inputData from "./inputdata.json" assert { type: "json" };

inputData.forEach((element, index) => {
  stringMatch(element.stringText, element.pattern);
});

function stringMatch(string, pattern) {
  var startTime = performance.now();
  let patLen = pattern.length;
  let stringLen = string.length;
  let compareCount = 0;
  for (let _patIndex = 0; _patIndex <= stringLen - patLen; _patIndex++) {
    let _strindex;
    for (_strindex = 0; _strindex < patLen; _strindex++)
      if (string[_patIndex + _strindex] != pattern[_strindex]) {
        compareCount += 1;
        break;
      }
    if (_strindex == patLen)
      console.log(
        "Pattern found at index " +
          _patIndex +
          "no of comparisions " +
          (compareCount + patLen) +
          "</br>"
      );
  }
  var endTime = performance.now();
  console.log(`/n ${endTime - startTime}`);
}
