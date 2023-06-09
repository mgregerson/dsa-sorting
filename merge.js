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

// function mergeSort(arr) {
//   // base case = array with 1 or 0 elements inside
//   if (arr.length <= 1) {
//     return arr;
//   }
//   // otherwise, split array in half over and over.
//   const arr1 = arr.slice(0, arr.length / 2);
//   const arr2 = arr.slice((arr.length / 2), arr.length);
//   console.log('arr1=', arr1, 'arr2=', arr2)
//   const sortedArr1 = mergeSort(arr1);
//   const sortedArr2 = mergeSort(arr2);

//   console.log('our return statement', merge(sortedArr1, sortedArr2))
//   return merge(sortedArr1, sortedArr2);
// }

function mergeSort(arr) {
  const queue = [arr.slice(0, arr.length)]

  function _checkIfAllShort(queue) {
    for (let arr of queue) {
      if (arr.length > 1) {
        return false
      }
    }
    return true
  }

  while(!_checkIfAllShort(queue)) {
    const curr = queue.shift()
    queue.push(curr.slice(0, curr.length / 2))
    queue.push(curr.slice((curr.length / 2), curr.length))
  }

  while (queue.length > 1) {
    const arr1 = queue.shift()
    const arr2 = queue.shift()
    const merged = merge(arr1, arr2)
    queue.push(merged)
  }

  return(queue[0]);
}

module.exports = { merge, mergeSort};
