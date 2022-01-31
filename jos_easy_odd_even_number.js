// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  let oddResult = [];
  let evenResult = [];
  let allResult = [];
  number.forEach((element) => {
    if (element % 2 == 0) {
      oddResult.push(element);
    } else if (element % 2 == 1) {
      evenResult.push(element);
    }
  });
  return (allResult = [evenResult, oddResult]);
}

console.log(result(number));
