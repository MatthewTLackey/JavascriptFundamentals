// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.

//var googleLogo = document.getElementById('hplogo');
//googleLogo.src = "a new url";

// EXERCISE: About Me

// Cuz every webpage needs an "About" section.

// Start with this HTML and save it as "aboutme.html":
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>
  
//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>
  
//  </body>
// </html>
  
// Add a script tag to the bottom.
// Change the body style so it has a font-family of "Arial, sans-serif".
// Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var myVar = document.getElementsByTagName("li");
var setFont = document.all;


var attributes = ["Mateo", "Reese", "Stoneboro", 1, 2, 3, 4, 5, 6]

// var attributes = {
//   nickname: "Mateo",
//   favorites: "Reeses Peanut Butter Cups",
//   hometown: "Stoneboro"
// };

for(i = 0; i < myVar.length; i++){
  var temp = myVar[i].getElementsByTagName('span');
  temp[0].textContent = attributes[i];

}

var pageNode = document.getElementsByTagName('li');
for(i = 0; i < pageNode.length; i++){
  pageNode[i].style.color = 'red';
}

//var image_source = "http://www.womenshealthmag.com/files/wh6_uploads/images/all-you-can-eat-art.jpg";

//document.write("<img src = http://www.womenshealthmag.com/files/wh6_uploads/images/all-you-can-eat-art.jpg />" );

// myVar.nickname = "Matt";
// myVar.Favorites = "movies";
// this.hometown = "Stoneboro"




// EXERCISE: The Book List

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy the array of books from the previous exercise.
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe", 
"John Quincy Adams", "Jackson", "Tyler", "van Buren", "Pierce", "Taylor", "Lincoln", 
"Johnson", "Grant", "Garfield", "Arthur", "McKinley", "Taft", "Wilson", "Roosevelt", 
"Roosevelt", "Eisenhower", "Truman", "Kennedy", "Johnson", "Nixon", "Ford", "Carter", 
"Reagan", "Bush", "Clinton", "Bush", "Obama"];



var pageNode = document.getElementsByTagName('body')[0];


for(i = 0; i < presidents.length; i++){
  var newLine = document.createElement('p');
  var newText = document.createTextNode(presidents[i]);
  //document.write("<p>" + presidents[i] + "</p>");
  
  newLine.appendChild(newText);
  pageNode.appendChild(newLine);

  
}
