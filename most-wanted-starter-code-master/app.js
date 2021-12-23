"use strict"


//Menu functions.
//Used for the overall flow of the application.
/////////////////////////////////////////////////////////////////
//#region 

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no' for more options.", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = searchBySingleTrait(people);
      // TODO: search by traits
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = promptFor("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", autoValid);

  switch(displayOption){
    case "info":
    // TODO: get person's info
    displayPerson(person[0])
    break;
    case "family":
    // TODO: get person's family
    displaySpouse(person[0])
    displayParents(person[0])
    displaySiblings(person[0])
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

//#endregion

//Filter functions.
//Ideally you will have a function for each trait.
/////////////////////////////////////////////////////////////////
//#region 

//nearly finished function used to search through an array of people to find matching first and last name and return a SINGLE person object.
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", autoValid);
  let lastName = promptFor("What is the person's last name?", autoValid);

  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.firstName === firstName && potentialMatch.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person single person object using the name they entered.
  return foundPerson;
}

//unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.
function searchByEyeColor(people){
  let eyeColor = promptFor("What is the person's eye color?", autoValid);
  
  let searchEyeColor = people.filter(function(potentialMatch){
    if(potentialMatch.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }
  })
    return searchEyeColor;
}

function searchByGender(people){
  let gender = promptFor("What is the person's gender?", autoValid);
  
  let searchGender = people.filter(function(potentialMatch){
    if(potentialMatch.gender === gender){
      return true;
    }
    else{
      return false;
    }
  })
  if(searchGender.length != 0){
    let results = ""
  for(let i = 0; i < searchGender.length; i++){
    results += searchGender[i].firstName +" "+  searchGender[i].lastName +"\n"
  }
  alert("test!" + results)
    //return searchGender;
  
  }}

function searchByHeight(people){
  let height = promptFor("What is the person's height?", autoValid);
  
  let searchHeight = people.filter(function(potentialMatch){
    if(potentialMatch.height === height){
      return true;
    }
    else{
      return false;
    }
  })
    return searchHeight;
}

function searchByWeight(people){
  let weight = promptFor("What is the person's weight?", autoValid);
  
  let searchWeight = people.filter(function(potentialMatch){
    if(potentialMatch.weight === weight){
      return true;
    }
    else{
      return false;
    }
  })
    return searchWeight;
}

function searchByOccupation(people){
  let occupation = promptFor("What is the person's occupation?", autoValid);
  
  let searchOccupation = people.filter(function(potentialMatch){
    if(potentialMatch.occupation === occupation){
      return true;
    }
    else{
      return false;
    }
  })
    return searchOccupation;
}

function searchBySingleTrait(people) {
  let search = promptFor("Would you like to sort by a person's specific trait? Enter 'yes' or 'no' \n To search by multiple traits Enter 'multi'", autoValid).toLowerCase();
  switch (search) {
    case 'yes':
      let selection = promptFor("By what trait would you like to search by? Enter corresponding number \n" +
        "1. Eye Color \n" +
        "2. Gender \n" +
        "3. Height \n" +
        "4. Weight \n" +
        "5. Occupation \n",
        autoValid);
      let searchSelection = people;
      if (selection.includes(1)) {
        searchSelection = searchByEyeColor(searchSelection);
      }
      if (selection.includes(2)) {
        searchSelection = searchByGender(searchSelection);
      }
      if (selection.includes(3)) {
        searchSelection = searchByHeight(searchSelection);
      }
      if (selection.includes(4)) {
        searchSelection = searchByWeight(searchSelection);
      }
      if (selection.includes(5)) {
        searchSelection = searchByOccupation(searchSelection);
      }
      return displayPerson(searchSelection);
      case 'multi':
        // This is where the search for multiple traits will go. 
        break;
      case 'no':
        app(people);
        break;
      }
}



//TODO: add other trait filter functions here.



//#endregion

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region 

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "D.O.B.: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "EyeColor: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";  
  // TODO: finish getting the rest of the information to display.
  alert(personInfo);
}


function displaySpouse(person){
  let results = data.filter(function(element){
  if(person.currentSpouse === element.id){
    return true;
  }
  else{
    return false;
  }})
  if(results.length != 0){
  alert("Spouse: " + results[0].firstName + " " + results[0].lastName) 
  } else
  alert("No Spouse Found!")}
  


function displayParents(person){
  let results = data.filter(function(element){
  if(person.parents.includes(element.id)){
    return true;
  }
  else{
    return false;
    
  }})
  if(results.length != 0){
    let parents = ""
    for(let i = 0; i < results.length; i++){
      parents += results[i].firstName +" "+  results[i].lastName +"\n"
    }
    alert("Parents: " + parents)
} else
  alert("No Parents Found!")}
  


  function displaySiblings(person){
    let results = data.filter(function(element){
    if(person.parents.includes(element.parents[0]) && person.id != element.id){
      return true;
    }
    else{
      return false;
      
    }})
    if(results.length != 0){
      let siblings = ""
      for(let i = 0; i < results.length; i++){
        siblings += results[i].firstName +" "+  results[i].lastName +"\n"
      }
      alert("Siblings: " + siblings)
  } else
    alert("No Siblings Found!")}

// function displayDescendants

//#endregion



//Validation functions.
//Functions to validate user input.
/////////////////////////////////////////////////////////////////
//#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
function promptFor(question, valid){
  let isValid;
  do{
    var response = prompt(question).trim();
    isValid = valid(response);
  } while(response === ""  ||  isValid === false)
  return response;
}

// helper function/callback to pass into promptFor to validate yes/no answers.
function yesNo(input){
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return true;
  }
  else{
    return false;
  }
}

// helper function to pass in as default promptFor validation.
//this will always return true for all inputs.
function autoValid(input){
  return true; // default validation only
}

//Unfinished validation function you can use for any of your custom validation callbacks.
//can be used for things like eye color validation for example.
function customValidation(input){
  
}

//#endregion