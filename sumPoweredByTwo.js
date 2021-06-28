//Take an array of numbers, 
//raise each number by the power of two and 
//return the sum of the new array.
/*javascript
  const myArr = [ 1, 2, 3]

  sumOfPoweredByTwo(myArr) // --> 14
*/

let arr = [1,2,3];
let sum = 0;
for (let i=0; i<arr.length; i++){
    sum += Math.pow(arr[i], 2);
}

console.log(sum);
console.log('------')
