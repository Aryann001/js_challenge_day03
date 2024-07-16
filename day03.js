let a = 1;
let b = 10;
let c = 500;
let age = 17;
let day = 7;
let marks = 88;
let eveOdd = 101;
let year = 2100

// task 1
if (Math.sign(a) === 1) {
  console.log("Positive");
} else if (Math.sign(a) === -1) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// task 2
if (age >= 18) {
  console.log("Eligible For Vote");
} else {
  console.log("Not Eligible For Vote");
}

// task 3
if (a > b) {
  if (a > c) {
    console.log(`a is the largest number, ${a}`);
  } else {
    console.log(`c is the largest number, ${c}`);
  }
} else {
  if (b > c) {
    console.log(`b is the largest number, ${b}`);
  } else {
    console.log(`c is the largest number, ${c}`);
  }
}

// task 4
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
    break;
}

// task 5
switch (true) {
  case marks <= 100 && marks >= 85:
    console.log("A");
    break;
  case marks <= 85 && marks >= 65:
    console.log("B");
    break;
  case marks <= 65 && marks >= 45:
    console.log("C");
    break;
  case marks <= 45 && marks >= 33:
    console.log("D");
    break;
  case marks <= 33:
    console.log("F");
    break;
  default:
    console.log("Invalid Marks");
    break;
}

// task 6
eveOdd % 2 === 0 ? console.log("Even") : console.log("Odd");

// task 7
if(year%4 === 0){
    if (year%400 === 0) {
        console.log("Leap Year")
    }
    else if (year%100 === 0) {
        console.log("Not a Leap year")
    } else {
        console.log("Leap Year")
    }
} else {
    console.log("Not a Leap year")
}
