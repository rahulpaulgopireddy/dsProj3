import inputData from "./inputdata.json" assert { type: "json" };
console.log(inputData);

inputData.forEach((element, index) => {
  KMPPatternSearch(element.stringText, element.pattern);
});

function computeLpsTable(pat, M, lps) {
  // length of the previous longest prefix suffix
  var len = 0;
  var i = 1;
  lps[0] = 0; // lps[0] is always 0

  // the loop calculates lps[i] for i = 1 to M-1
  while (i < M) {
    if (pat.charAt(i) == pat.charAt(len)) {
      len++;
      lps[i] = len;
      i++;
    } // (pat[i] != pat[len])
    else {
      // This is tricky. Consider the example.
      // AAACAAAA and i = 7. The idea is similar
      // to search step.
      if (len != 0) {
        len = lps[len - 1];

        // Also, note that we do not increment
        // i here
      } // if (len == 0)
      else {
        lps[i] = len;
        i++;
      }
    }
  }
}

function KMPPatternSearch(stringText, pattern) {
  // length of the pattern
  var M = pattern.length;
  //length of the given text
  var N = stringText.length;
  console.log(M, N);
  //initial lps value -- longest prefix suffix table
  var lps = [];
  // index for the pattern
  var j = 0;

  computeLpsTable(lps, pattern, N);
  console.log(lps);
}

// function computeLpsTable(lpsArray, _pattern, _patternlen) {
//   console.log(lpsArray, _pattern, _patternlen);
//   var _c = 0;
//   // previous lpslen
//   var prLpsLen = 0;
//   // according to algorithm index of the lps to considered
//   var i = 1;
//   // according to algorithm inital element is ommited , so we have taken 0 as inplace null value
//   lpsArray[0] = 0;
//   //   while (i < _patternlen) {
//   //     _c++;
//   //     console.log(_pattern.charAt(i), _pattern.charAt(prLpsLen));
//   //     if (_c === _patternlen) {
//   //       return;
//   //     }
//   //   }
// }
