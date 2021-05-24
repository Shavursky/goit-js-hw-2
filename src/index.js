//=====================завдання 1=========================
// function checkAge(age) {
//     if (age >= 18) { // Change this line
//       return "You are an adult";
//     }

//     return "You are a minor";
//   }
//=====================завдання 2=========================
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line



//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";}
//       return "Access denied, wrong password!";

//     // Change code above this line
//   }
//   console.log(checkPassword("mangohackzor"));
//   console.log(checkPassword("polyhax"));
//   console.log(checkPassword("jqueryismyjam"));

//=====================завдання 3=========================
// function checkStorage(available, ordered) {
//     // Change code below this line

//     if (ordered === 0) {
//         return "Your order is empty!";
//     }
//     if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!";
//     }
//     return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//=====================завдання 4=========================
// const fruits = ['apple', 'plum', 'pear', 'orange'];
//=====================завдання 5=========================
// const fruits = ["apple", "plum", "pear", "orange"];


// // Change code below this line
// const firstElement = "apple";
// const secondElement = "plum";
// const lastElement = "orange";
//=====================завдання 6=========================
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";
//=====================завдання 7=========================
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
//=====================завдання 8=========================
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex)
// const lastElement = fruits[lastElementIndex];
//=====================завдання 9=========================
// function getExtremeElements(array) {
//     // Change code below this line
//     const firstElement = array[0];
//     const lastElement = array[array.length - 1];
//     const newArray = [firstElement, lastElement];

//     // Change code above this line
//     return newArray;
// }
// // console.log(getExtremeElements([1, 2, 3, 4, 5]));

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
//=====================завдання 10=========================
// function splitMessage(message, a) {
//     let words = message.split(a);

//     return words;
// }


// splitMessage("Mango hurries to the train", " ");


// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));
//=====================завдання 11=========================
// function calculateEngravingPrice(message, pricePerWord) {
//     return message.split(' ').length * pricePerWord;

// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));
//=====================завдання 12=========================
// function makeStringFromArray(array, delimeter) {
//     let string = array.join(delimeter);

//     return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
//=====================завдання 13=========================
// function slugify(title) {
//     // Change code below this line
//     const slug = title.toLowerCase();

//     return slug;
//     // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
//=====================завдання 14=========================
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);
//=====================завдання 15=========================
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
//=====================завдання 16=========================
// function makeArray(firstArray, secondArray, maxLength) {

//     const array1 = firstArray.concat(secondArray);
//     if (array1.length > maxLength); {
//         return array1.slice(0, maxLength);
//     }
//     return array1;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
//=====================завдання 17=========================
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//     console.log(i);
// }
//=====================завдання 18=========================
// function calculateTotal(number) {
//     let sum = 0;
//     for (let i = 1; i <= number; i += 1) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
//=====================завдання 19=========================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//     const fruit = fruits[i]; // Change this line
//     console.log(fruit);
// }
//=====================завдання 20=========================
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//=====================завдання 21=========================
// function findLongestWord(string) {
//     const find = string.split(" ");
//     let streetLength = 0;
//     let longest;
//     for (let i = 0; i < find.length; i += 1) {
//         if (find[i].length > streetLength) {
//             streetLength = find[i].length;
//             longest = find[i];
//         }
//     }
//     return longest;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
//=====================завдання 22=========================
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//     return numbers;

// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
//=====================завдання 23=========================
// function filterArray(numbers, value) {
//     const array = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             array.push(numbers[i]);
//         }
//     }
//     return array;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
//=====================завдання 24=========================
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));
//=====================завдання 25=========================
// function getCommonElements(array1, array2) {
//     const array = [];
//     for (const element of array1)
//         if (array2.includes(element)) {
//             array.push(element)
//         }
//     return array;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
//=====================завдання 26=========================
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

//     for (let value of order) {
//         total += value;

//     }

//     // Change code above this line
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));
//=====================завдання 27=========================
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];

//     for (let number of numbers) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }
//     return filteredNumbers;
//     // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
//=====================завдання 28=========================

// const a = 3 % 3; // = 0
// const b = 4 % 3; // = 1
// const c = 11 % 8; // = 3
// const d = 12 % 7; // = 5
// const e = 8 % 6; // = 2

//=====================завдання 29=========================

// function getEvenNumbers(start, end) {
//     const result = [];
//     for (let i = start; i <= end; i += 1)
//         if (i % 2 === 0) {
//             result.push(i)
//         }
//     return result;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
//=====================завдання 30=========================
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
//=====================завдання 31=========================
// function findNumber(start, end, divisor) {
//     // Change code below this line
//     let number;

//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//             number = i;
//             return i;
//         }
//     }

//     return number;
//     // Change code above this line
// }
//=====================завдання 32=========================
function includes(array, value) {
    // Change code below this line
    for (const number of array) {
        if (number === value) {
            return true;
        }
    }
    return false;
    // Change code above this line
}
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));