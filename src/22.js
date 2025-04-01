function findMaxDifference(arr) {
  let maxDiff = arr[1] - arr[0];
  
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i-1] > maxDiff) {
      maxDiff = arr[i] - arr[i-1];
    }
  }
  
  return maxDiff;
}

// Example usage
const numbers = [7, 3, 6, 9, 2, 4, 5];
console.log(findMaxDifference(numbers)); // Output: 8
