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

function mergeSort(arr) {
  // base case = array with 1 or 0 elements inside
  if (arr.length <= 1) {
    return arr;
  }
  // otherwise, split array in half over and over.
  const arr1 = arr.slice(0, arr.length / 2);
  const arr2 = arr.slice((arr.length / 2), arr.length);
  console.log('arr1=', arr1, 'arr2=', arr2)
  const sortedArr1 = mergeSort(arr1);
  const sortedArr2 = mergeSort(arr2);

  console.log('our return statement', merge(sortedArr1, sortedArr2))
  return merge(sortedArr1, sortedArr2);
}

module.exports = { merge, mergeSort};
