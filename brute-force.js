import inputData from "./sample.json" assert { type: "json" };

inputData.forEach((element, index) => {
  var startTime = performance.now();
  stringMatch(element.stringText, element.pattern);
  var endTime = performance.now();
  console.log(`/n ${endTime - startTime}`);
});

function stringMatch(string, pattern) {
  let patLen = pattern.length;
  let stringLen = string.length;
  let compareCount = 0;
  /* A loop to slide pat one by one */
  for (let _patIndex = 0; _patIndex <= stringLen - patLen; _patIndex++) {
    let _strindex;

    /* For current index i, check for pattern
        match */
    for (_strindex = 0; _strindex < patLen; _strindex++)
      if (string[_patIndex + _strindex] != pattern[_strindex]) {
        compareCount += 1;
        break;
      }
    // compareCount += 1;

    // if pat[0...M-1] = txt[i, i+1, ...i+M-1]
    if (_strindex == patLen)
      console.log(
        "Pattern found at index " +
          _patIndex +
          "no of comparisions " +
          (compareCount + patLen) +
          "</br>"
      );
  }
}
