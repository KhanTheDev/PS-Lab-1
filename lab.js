// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


 // Part 1.1
const isDivByFive = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`All numbers divisible by 5: ${isDivByFive}`);

// Part 1.2
const firstVsLast = n1 > n4;
console.log(`Is the first number greater than the last? ${firstVsLast}`);

// Part 1.3
console.log(`The result of ((n1 - n2) * n3) & n4 is: ${((n1 - n2) * n3) & n4}`);

// Part 1.4
const all25OrUnder = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`Are all numbers 25 or under? ${all25OrUnder}`);

// Part 2
  
// Trip 
let totalDistance = 1500;
let fuelBudget = 175;
let fuelPrice = 3;

// Speed options
let speed1 = 55;
let mpg1 = 30;

let speed2 = 60;
let mpg2 = 28;

let speed3 = 75;
let mpg3 = 23;

// Function
function showTripDetails(speed, mpg) {
  let gallons = totalDistance / mpg;
  let cost = gallons * fuelPrice;
  let time = totalDistance / speed;
  let withinBudget = cost <= fuelBudget;

  console.log("Speed: " + speed + " mph");
  console.log("Miles per gallon: " + mpg);
  console.log("Gallons needed: " + gallons.toFixed(2));
  console.log("Fuel cost: $" + cost.toFixed(2));
  console.log("Time to finish trip: " + time.toFixed(2) + " hours");
  console.log("Is it within budget? " + (withinBudget ? "Yes" : "No"));
}

// Print 
showTripDetails(speed1, mpg1);
showTripDetails(speed2, mpg2);
showTripDetails(speed3, mpg3);