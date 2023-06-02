function merge(arr1, arr2) {
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  const out = [];

  while (arr1Pointer !== arr1.length || arr2Pointer !== arr2.length) {

    if (arr1Pointer === arr1.length) {
      out.push(arr2[arr2Pointer]);
      arr2Pointer++;
    } else if (arr2Pointer === arr2.length) {
      out.push(arr1[arr1Pointer]);
      arr1Pointer++;
    } else {
      if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
        out.push(arr1[arr1Pointer]);
        arr1Pointer++;
      } else {
        out.push(arr2[arr2Pointer]);
        arr2Pointer++;
      }
    }
  }
  return out;
}

function mergeSort() {}

module.exports = { merge, mergeSort};
