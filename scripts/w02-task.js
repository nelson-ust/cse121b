// scripts/w02-task.js file

/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "nelson"; // Declare and instantiate a variable to hold your name.
const currentYear = new Date().getFullYear(); // Declare and instantiate a variable to hold the current year.
const profilePicture = 'images/pix.jpg'; // Declare and instantiate a variable to hold the file path (location) and file name of the image.

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name'); // Use the document.getElementById() method to get the HTML element with the id of name.
const foodElement = document.getElementById('food'); // Use the document.getElementById() method to get the HTML element with the id of food.
const yearElement = document.querySelector('#year'); // Use the document.querySelector() method to get the element with the id of "year".

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; // Assign the nameElement's innerHTML property the fullName variable value, surrounded with <strong> tags.
yearElement.textContent = currentYear; // Use the textContent property to set the value of the element to the value of the variable currentYear.
const imageElement = document.querySelector('img'); // Use any viable method to get the profile image element stored into a variable named "imageElement".
imageElement.setAttribute('src', profilePicture); // Use the setAttribute method to set the src property of the image element to the file path variable set in Step 2.
imageElement.setAttribute('alt', `Profile image of ${fullName}`); // Use the setAttribute method to set the alt property of the image element and set its value to equal 'Profile image of [Insert Name Variable]'.

/* Step 5 - Array */
const favoriteFoods = ['Pizza', 'Sushi', 'Ice Cream']; // Declare an array variable to hold your favorite foods.


// Update the favorite foods array to include line breaks
const foodsWithLineBreaks = favoriteFoods.join('<br>');
// Assign the updated array with line breaks to the foodElement's innerHTML
foodElement.innerHTML = foodsWithLineBreaks;

const anotherFavoriteFood = 'Burgers'; // Declare and instantiate a variable to hold another single favorite food item.
favoriteFoods.push(anotherFavoriteFood); // Add the value stored in this new variable to your favorite food array.
favoriteFoods.shift(); // Remove the first element in the favorite food array.
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`; // Append the array output showing the modified array, using a line break.
favoriteFoods.pop(); // Remove the last element in the favorite food array.
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`; // Append the array output with this final modified favorite foods array.
