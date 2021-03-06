// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

  for(i = 0; i < 21; i += 1){
    var oddOrEven
    if(i % 2 === 0){
      oddOrEven = "even";
    } else {
      oddOrEven = "odd";
    }
    document.write("<p>" + i + " is " + oddOrEven + ".</p>")
  }




// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for(i = 0; i < 11; i += 1){
  document.write("<p>")
  for(mult = 1; mult < 11; mult += 1){
    document.write(" || " + i * mult)
  }
  document.write("</p>")
}



// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.


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

for(a = 60; a < 101; a ++){
  document.write("<p>" + a + " is a " + assignGrade(a) + "</p>");
}