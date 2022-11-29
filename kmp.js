import inputData from "./inputdata.json" assert { type: "json" };
console.log(inputData);

inputData.forEach((element, index) => {
  KMPPatternSearch(element.stringText, element.pattern);
});

function KMPPatternSearch(stringText, pattern) {
  // index of stringText
  var i = 0;
  // index for the pattern
  var j = 0;
  // length of the pattern
  var M = pattern.length;
  //length of the given text
  var N = stringText.length;
  //initial lps value -- longest prefix suffix table
  var lpsArray = [];
  // creates an lps table or Pi table for matching
  computeLpsTable(lpsArray, pattern, M);

  // search logic
  while (N - i >= M - j) {
    // if the pattern matches with the text
    if (pattern.charAt(j) == stringText.charAt(i)) {
      //index of stringtext and pattern are increased
      i++;
      j++;
    }
    // string match check , comparing length of the pattern with j which is the subset of the stringtext
    if (j == M) {
      console.log(
        "\n" +
          `Given Pattern ${pattern} has been match at the index  ` +
          (i - j) +
          "\n"
      );
      // to continue the remaining of the string if its not the last index, specified from where j should start i.e 1 index before j
      j = lpsArray[j - 1];
    } else if (i < N && pattern.charAt(j) != stringText.charAt(i)) {
      // mismatch of the pattern occurs
      if (j != 0) {
        // after mismatch j value is reset to previous index for the comparision
        j = lpsArray[j - 1];
      } else {
        // if j is 0 , i is incremented anyways
        i++;
      }
    }
  }
}

function computeLpsTable(lpsArray, _pattern, _patternlen) {
  console.log(lpsArray, _pattern, _patternlen);
  // previous lpslen
  var prLpsLen = 0;
  // according to algorithm index of the lps to considered
  var i = 1;
  // according to algorithm inital element is ommited , so we have taken 0 as inplace null value
  lpsArray[0] = 0;
  while (i < _patternlen) {
    if (_pattern.charAt(prLpsLen) == _pattern.charAt(i)) {
      // if match happens previous lps index is increased
      prLpsLen++;
      // index is copied to array
      lpsArray[i] = prLpsLen;
      // and index on the match string is also increased
      i++;
    } else {
      if (prLpsLen != 0) {
        prLpsLen = lpsArray[prLpsLen - 1];
      } else {
        // if pre-lps is 0
        lpsArray[i] = prLpsLen;
        i++;
      }
    }
  }
}
