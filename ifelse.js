// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
var num1
var num2


var whatsBigger = function(num1, num2){
  if (num1 < num2){
    document.write("<p>The greater number of " + num1 + " and " + num2 + " is " + num2 + ".</p>");
  } else {
    document.write("<p>The greater number of " + num1 + " and " + num2 + " is " + num1 + ".</p>");
  }
};

whatsBigger(5, 10);
whatsBigger(55, 23);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

var worldTranslator = function(languageCode){
  switch(languageCode){
    case "es":
      return "Hola, Mundo";
      break;
    case "eng":
      return "Hello World";
      break;
    case "fr":
      return "Bonjour monde";
      break;
  }
}

document.write(worldTranslator("es"));
document.write(worldTranslator("eng"));
document.write(worldTranslator("fr"));

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.


var assignGrade = function(score){
  if (score >= 95){
    return "A";
    
  } else if (score < 95 && score >= 89){
    return "B";
   
  } else if (score < 89 && score >= 80){
    return "C";
    
  } else if (score < 80 && score > 69){
    return "D";
    
  } else {
    return "F";
    
  };
};

document.write("<p>" + assignGrade(93) + "</p>");
document.write("<p>" + assignGrade(88) + "</p>");
document.write("<p>" + assignGrade(73) + "</p>");
document.write("<p>" + assignGrade(53) + "</p>");
document.write("<p>" + assignGrade(83) + "</p>");
document.write("<p>" + assignGrade(99) + "</p>");


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


var pluralizer = function(noun, number){
  if (number > 1)
    return number + " " + noun + "s";
  else
    return number + " " + noun +  ".";
};

document.write("<p>" + pluralizer("cow", 5) + "</p>")
document.write("<p>" + pluralizer("cow", 1) + "</p>")
document.write("<p>" + pluralizer("bird", 5) + "</p>")

