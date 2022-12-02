import inputData from "./inputdata.json" assert { type: "json" };

var startTime = performance.now();

inputData.forEach((element, index) => {
  stringMatch(element.stringText, element.pattern);
});

function stringMatch(string, pattern) {
  let stringLen = string.length;
  let patLen = pattern.length;
  console.log("inside function", stringLen, patLen);
  //pattern loop
  for (let _patindex = 0; _patindex <= stringLen - patLen; _patindex++) {
    //pattern match logic in string and current index
    for (let _strindex = 0; _strindex < patLen.length; _strindex++) {
      if (string[_patindex + _strindex] != pattern[_patindex]) break;
    }
    if (_patindex == patLen) {
      var endTime = performance.now();
      console.log(
        "\n" +
          `Given Pattern ${pattern} has been match at the index  ` +
          _patindex +
          `Execution time ${endTime - startTime} milliseconds` +
          "\n"
      );
    }
  }
}
