// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function fortuneTeller (jobTitle, location, partner, numChild){
  document.write("<p>You will be a " + jobTitle + " living in a loosely associated domestic arrangement with " + partner + " in " + location + " with " + numChild + " kids.</p>");
}

fortuneTeller("developer", "Swaziland", "Mona Lisa", 12);
fortuneTeller("professional hunter", "Florida", "Freda Kahlo", 2);

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function ageCalculator(currentYear, birthYear){
  return "<p>You are either " + ((currentYear - birthYear) - 1) + " or " + (currentYear - birthYear) + ".</p>";
};

document.write(ageCalculator(2013, 1985));
document.write(ageCalculator(2013, 1865));
document.write(ageCalculator(2013, 2001));




// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function lifeTimeSupplyCalc(age, amtPerDay){
  var maxAge = 103;
  var supply = 0;
  supply = ((maxAge - age) * 365) * amtPerDay;
  return supply;
};

document.write("<p>" + lifeTimeSupplyCalc(38, 3) + "</p>");
document.write("<p>" + lifeTimeSupplyCalc(100, 1) + "</p>");

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(rads){
  var circ = Math.PI * 2 * rads;
  return "The circumference is " + circ + ".";
};

function calcArea(rads){
  var area = Math.PI * rads * rads;
  return "The area is " + area + ".";
};

document.write("<p>" + calcCircumference(5) + "</p>");
document.write("<p>" + calcCircumference(36) + "</p>");


document.write("<p>" + calcArea(5) + "</p>");
document.write("<p>" + calcArea(36) + "</p>");


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(cToF){
  var converted = cToF * (9/5) + 32;
  return "<p>" + cToF + " degrees Celsius is " + converted + " degrees Fahrenheit.</p>";

};

function fahrenheitToCelsius(fToC){
  var converted = (fToC - 32) * (5/9);
  return "<p>" + fToC + " degrees Fahrenheit is " + converted + " degrees Celsius.</p>";

};

document.write(celsiusToFahrenheit(32));
document.write(celsiusToFahrenheit(70));

document.write(fahrenheitToCelsius(70));
document.write(fahrenheitToCelsius(32));
document.write(fahrenheitToCelsius(0));
