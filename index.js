const _ = require("underscore")

const numArr = [25, 693, 89, 7, 1]

const returnNum = (num) => {
  return num
}

const maxNum = _.max(numArr, returnNum) // returns the highest value number in a list. Does not change the original. dat

const minNum = _.min(numArr, returnNum) // returns the lowest value number in a list. Does not change the original.

console.log(`Underscore Data:`, maxNum)
console.log(`Original Data:`, numArr)
console.log(
  `*****************************************************************************************`
)
console.log(`Underscore Data:`, minNum)
console.log(`Original Data:`, numArr)
