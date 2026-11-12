let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random number:", randomNumber);

if (randomNumber % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

let squareRoot = Math.sqrt(randomNumber);

console.log("Square root:", squareRoot.toFixed(2));