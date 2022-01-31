// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  let sortedArray = input.sort((n1, n2) => n1 - n2);
  let median =
    (sortedArray[input.length / 2 - 1] + sortedArray[input.length / 2]) / 2;
  return median;
}

console.log(result(input));
