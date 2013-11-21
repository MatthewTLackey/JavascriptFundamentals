// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
var nth
presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe", "John Quincy Adams", "Jackson", "Tyler", "van Buren", "Pierce", "Taylor", "Lincoln", "Johnson", "Grant", "Garfield", "Arthur", "McKinley", "Taft", "Wilson", "Roosevelt", "Roosevelt", "Eisenhower", "Truman", "Kennedy", "Johnson", "Nixon", "Ford", "Carter", "Reagan", "Bush", "Clinton", "Bush", "Obama"]
for(i = 0; i < presidents.length; i ++){
  switch([i] % 10 + 1){
    
    case 0:
      nth = "th";
      break;
    case 1:
      nth = "st";
      break;
    case 2:
      nth = "nd";
      break;
    case 3:
      nth = "rd";
      break;
    case 4:
      nth = "th";
      break;
    case 5:
      nth = "th";
      break;
    case 6:
      nth = "th";
      break;
    case 7:
      nth = "th";
      break;
    case 8:
      nth = "th";
      break;
    case 9:
      nth = "th";
      break;

    default:
      nth = "th";
      break;
  };


  document.write("<p> The " + (i + 1)+ nth + " president I could remember was " + presidents[i] + "</p>");
};
