//Write a program that prints the numbers from 1 to 100, 
//but for multiples of three print "Fizz" instead of the number 
//and for the multiples of five print "Buzz". 
//For numbers which are multiples of both three and five print "FizzBuzz".

const fizzBuzz = () => {
    for (let i=1; i<=20; i++){
        if (i % 15 == 0) {
            console.log("FizzBuzz");}
        else if (i % 3 == 0) {console.log("Fizz");}
        else if (i % 5 == 0) {console.log("Buzz");}
        else{console.log(i);}
    }
}

console.log(fizzBuzz());
console.log('------')

//part 2: FizzBuzz Sum If we list all the natural numbers below 10 
//that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23. 
//Build a function to find the sum of all the multiples of 3 or 5 below 1000.

const fizzBuzzSum = () => {
    let sum = 0;
    for (let i=1; i<100; i++){
        if (i % 3 == 0 || i % 5 == 0)
        {sum = sum+i;}
        else {sum = sum+0};
    }
    console.log(sum);
}

console.log(fizzBuzzSum());