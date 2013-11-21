// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var first_recipe = {
  name: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

var bread_recipe = {
  name: "bread",
  servings: 6,
  ingredients: ["flour", "yeast", "water", "sugar"]
};


function printRecipe(a_recipe){
  for(var property in a_recipe){
  if (a_recipe[property] === a_recipe["ingredients"]){
    for(var i = 0; i < a_recipe["ingredients"].length; i++){
      document.write("<p>" + a_recipe["ingredients"][i] + "</p>")
    }

  } else {
  document.write("<p>" + property + ": " + a_recipe[property] + "</p>");
  };
};
};

printRecipe(bread_recipe);
printRecipe(first_recipe);

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'




function book(titleIn, authorIn, alreadyReadIn){
  this.title = titleIn,
  this.author = authorIn,
  this.alreadyRead = alreadyReadIn
};

var firstBook = new book("The Hobbit", "J.R.R. Tolkein", true);
var secondBook = new book("LOTR", "J.R.R. Tolkein", true);
var thirdBook = new book("Ulysses", "James Joyce", true);
var fourthBook = new book("The Fountainhead", "Ayn Rand", false);

var readingList = [firstBook, secondBook, thirdBook, fourthBook];

for(var i = 0; i < readingList.length; i++){
  if (readingList[i].alreadyRead === true) {
    document.write("<p>" + readingList[i].title + ", " + readingList[i].author + "</p>");
    document.write("<p> You already read " + readingList[i].title + " by " + readingList[i].author + ".</p>");
  } else {
    document.write("<p>" + readingList[i].title + ", " + readingList[i].author + "</p>");
    document.write("<p> You still need to read " + readingList[i].title + " by " + readingList[i].author + ".</p>");
  }
}



// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


function Film(titleIn, directorIn, numStarsIn, actorsIn){
  this.title = titleIn,
  this.director = directorIn,
  this.numStars = numStarsIn,
  this.actors = actorsIn
};


var firstFilm = new Film("The Matrix", "The Wachowski Bros.", "****", ["Keanu Reeves", "Trinity", "Morpheus"]);
var secondFilm = new Film("True Grit", "The Coen Bros.", "**", ["Jeff Bridges", "Matt Damon"]);
var thirdFilm = new Film("True Grit", "Someone better than the Coen Bros.", "****", ["John Wayne", "Maddie", "Texas Ranger"]);

function printFilms(aFilm){
  var actorsList = aFilm.actors.join(", ");
  document.write("<p>" + aFilm.title + " was directed by " + aFilm.director + " and in my opinion earned " + 
    aFilm.numStars + " stars and starred " + actorsList + ".</p>");
};

printFilms(firstFilm);
printFilms(secondFilm);
printFilms(thirdFilm);


console.log(firstFilm.title)