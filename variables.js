// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var fortuneTeller = function(jobTitle, location, partner, numChild){
  document.write("You will be a " + jobTitle + " living in a loosely associated domestic arrangement with " + partner + " in " + location + " with " + numChild + " kids.");
}

fortuneTeller("developer", "Swaziland", "Mona Lisa", 12);
fortuneTeller("professional hunter", "Florida", "Freda Kahlo", 2);

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

currentYear = 2013
birthYear = 1970

document.write("<p>You are either " + (currentYear - birthYear - 1) + " or " + (currentYear - birthYear) + ", depending on your age.</p>")

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var age = 12;
var maxAge = 113;
var amtPerDay = 3;
var totalAmt = (maxAge - age) * 365 * 3
var snackName = "Reese's Peanut Butter Cups"

document.write("You will need " + totalAmt + " of " + snackName + " to last you until the ripe old age of " + maxAge + ".")

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var rads = 30;

var circumference = 2 * Math.PI * rads;

var area = Math.PI * rads * rads;
document.write("<p>The circumference is " + circumference + ".</p>")
document.write("<p>The area is " + area + ".</p>")

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsTemp = 0;

var fahrenTemp = celsTemp * (9/5) + 32;
document.write(celsTemp + " degres Celsius is " + fahrenTemp + " degrees in Fahrenheit.");

var fTemp = 32;
var fToC = (fTemp - 32) * (5/9);
document.write("<p>" + fTemp + " degrees Fahrenheit is " + fToC + " degrees in Celsius.</p>");

