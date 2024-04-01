// 🔍 Part 1 error
let userName = "Moroni";
console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);

// 🔍 Part 2 error
const currentDateAndTime = new Date(); // Corrected to create a new Date object
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error
let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
	let sum = 0;
	for (let aNumber of theNumbers) { // Corrected 'in' to 'of' for iterating over array elements
		sum += aNumber; // Removed * 1 as unnecessary conversion
	}
	return sum;
}
