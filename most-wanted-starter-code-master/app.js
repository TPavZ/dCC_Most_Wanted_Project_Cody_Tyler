"use strict"


//Menu functions.
//Used for the overall flow of the application.
/////////////////////////////////////////////////////////////////
//#region 

// app is the function called to start the entire application
function app(people) {
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no' for more options.", yesNo).toLowerCase();
  let searchResults;
  switch (searchType) {
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = traitsSearch(people);
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
function mainMenu(person, people) {

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if (!person) {
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = promptFor("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", autoValid);

  switch (displayOption) {
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
      displayDescendants(person[0])
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
function searchByName(people) {
  let firstName = promptFor("What is the person's first name?", autoValid);
  let lastName = promptFor("What is the person's last name?", autoValid);

  let foundPerson = people.filter(function (potentialMatch) {
    if (potentialMatch.firstName === firstName && potentialMatch.lastName === lastName) {
      return true;
    }
    else {
      return false;
    }
  })
  // TODO: find the person single person object using the name they entered.
  return foundPerson;
}

//unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.
function searchByEyeColor(people) {
  let eyeColor = promptFor("What is the person's eye color?", eyeColorValidation);

  let searchEyeColor = people.filter(function (potentialMatch) {
    if (potentialMatch.eyeColor === eyeColor) {
      return true;
    }
    else {
      return false;
    }
  })
  if (searchEyeColor.length > 0) {
    let results = ""
    for (let i = 0; i < searchEyeColor.length; i++) {
      results += searchEyeColor[i].firstName + " " + searchEyeColor[i].lastName + " - " + searchEyeColor[i].eyeColor + "\n"
    }
    alert("Here are your EYE COLOR search results: \n" + results);
  }
  else {
    alert("No Results Found!");
  }
  return searchEyeColor;
}

function searchByGender(people) {
  let gender = promptFor("What is the person's gender?", genderValidation);

  let searchGender = people.filter(function (potentialMatch) {
    if (potentialMatch.gender === gender) {
      return true;
    }
    else {
      return false;
    }
  })
  if (searchGender.length > 0) {
    let results = ""
    for (let i = 0; i < searchGender.length; i++) {
      results += searchGender[i].firstName + " " + searchGender[i].lastName + " - " + searchGender[i].gender + "\n"
    }
    alert("Here are your GENDER search results: \n" + results);
  }
  else {
    alert("No Results Found!");
  }
  return searchGender;
}

function searchByHeight(people) {
  let height = promptFor("What is the person's height?", heightValidation);

  let searchHeight = people.filter(function (potentialMatch) {
    if (potentialMatch.height == height) {
      return true;
    }
    else {
      return false;
    }
  })
  if (searchHeight.length > 0) {
    let results = ""
    for (let i = 0; i < searchHeight.length; i++) {
      results += searchHeight[i].firstName + " " + searchHeight[i].lastName + " - " + searchHeight[i].height + "\n"
    }
    alert("Here are your HEIGHT search results: \n" + results);
  }
  else {
    alert("No Results Found!");
  }
  return searchHeight;
}

function searchByWeight(people) {
  let weight = promptFor("What is the person's weight?", weightValidation);

  let searchWeight = people.filter(function (potentialMatch) {
    if (potentialMatch.weight == weight) {
      return true;
    }
    else {
      return false;
    }
  })
  if (searchWeight.length > 0) {
    let results = ""
    for (let i = 0; i < searchWeight.length; i++) {
      results += searchWeight[i].firstName + " " + searchWeight[i].lastName + " - " + searchWeight[i].weight + "\n"
    }
    alert("Here are your WEIGHT search results: \n" + results);
  }
  else {
    alert("No Results Found!");
  }
  return searchWeight;
}

function searchByOccupation(people) {
  let occupation = promptFor("What is the person's occupation?", occupationValidation);

  let searchOccupation = people.filter(function (potentialMatch) {
    if (potentialMatch.occupation === occupation) {
      return true;
    }
    else {
      return false;
    }
  })
  if (searchOccupation.length > 0) {
    let results = ""
    for (let i = 0; i < searchOccupation.length; i++) {
      results += searchOccupation[i].firstName + " " + searchOccupation[i].lastName + " - " + searchOccupation[i].occupation + "\n"
    }
    alert("Here are your OCCUPATION search results: \n" + results);
  }
  else {
    alert("No Results Found!");
  }
  return searchOccupation;
}

function searchByDateOfBirth(people) {
  let dob = promptFor("What is the person's date of birth? Format: mo/dy/year", dateOfBirthValidation);

  let searchDateOfBirth = people.filter(function (potentialMatch) {
    if (potentialMatch.dob === dob) {
      return true;
    }
    else {
      return false;
    }
  })
  if (searchDateOfBirth.length > 0) {
    let results = ""
    for (let i = 0; i < searchDateOfBirth.length; i++) {
      results += searchDateOfBirth[i].firstName + " " + searchDateOfBirth[i].lastName + " - " + searchDateOfBirth[i].dob + "\n"
    }
    alert("Here are your DATE OF BIRTH search results: \n" + results);
  }
  else {
    alert("No Results Found!");
  }
  return searchDateOfBirth;
}
function traitsSearch(people) {
  let search = promptFor("Would you like to sort by a person's specific traits? Enter 'yes' or 'no' ", yesNo).toLowerCase();
  let searchSelection = people;
  switch (search) {
    case 'yes':
      let selection = promptFor("By what traits would you like to search by? Enter corresponding numbers. \n EXAMPLE: 1, 2, 3 etc. \n" +
        "1. Eye Color \n" +
        "2. Gender \n" +
        "3. Height \n" +
        "4. Weight \n" +
        "5. Occupation \n" +
        "6. Date Of Birth \n",
        traitValidation);
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
      if (selection.includes(6)) {
        searchSelection = searchByDateOfBirth(searchSelection);
      }
      break;
    case 'no':
      app(people);
      break;
  }
  if (!person) {
    return app(people); // restart
  }
  /* return searchSelection */
}

//#endregion

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region 

// alerts a list of people
function displayPeople(people) {
  alert(people.map(function (person) {
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person) {
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


function displaySpouse(person) {
  let results = data.filter(function (element) {
    if (person.currentSpouse === element.id) {
      return true;
    }
    else {
      return false;
    }
  })
  if (results.length != 0) {
    alert("Spouse: " + results[0].firstName + " " + results[0].lastName)
  } else
    alert("No Spouse Found!")
}



function displayParents(person) {
  let results = data.filter(function (element) {
    if (person.parents.includes(element.id)) {
      return true;
    }
    else {
      return false;

    }
  })
  if (results.length != 0) {
    let parents = ""
    for (let i = 0; i < results.length; i++) {
      parents += results[i].firstName + " " + results[i].lastName + "\n"
    }
    alert("Parents: " + parents)
  } else
    alert("No Parents Found!")
}



function displaySiblings(person) {
  let results = data.filter(function (element) {
    if (person.parents.includes(element.parents[0]) && person.id != element.id) {
      return true;
    }
    else {
      return false;

    }
  })
  if (results.length != 0) {
    let siblings = ""
    for (let i = 0; i < results.length; i++) {
      siblings += results[i].firstName + " " + results[i].lastName + "\n"
    }
    alert("Siblings: " + siblings)
  } else
    alert("No Siblings Found!")
}

function displayDescendants(person) {
  let results = data.filter(function (element) {
    if (person.id === element.parents[0] || (person.id === element.parents[1])) {
      return true;
    }
    else {
      return false;
    }
  })
  if (results.length != 0) {
    let descendants = ""
    for (let i = 0; i < results.length; i++) {
      descendants += results[i].firstName + " " + results[i].lastName + "\n"
      displaySecondGenDescendants(results[i])
    }
    alert("Children: " + descendants)
  } else
    alert("No Children Found!")
}

function displaySecondGenDescendants(descendants) {
  let results = data.filter(function (element) {
    if (descendants.id === element.parents[0]) {
      return true;
    }
    else {
      return false;
    }
  })
  if (results.length != 0) {
    let secondGenDescendants = ""
    for (let i = 0; i < results.length; i++) {
      secondGenDescendants += results[i].firstName + " " + results[i].lastName + "\n"
    }
    alert("Grandkids: " + secondGenDescendants)
  }
}

//#endregion



//Validation functions.
//Functions to validate user input.
/////////////////////////////////////////////////////////////////
//#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
function promptFor(question, valid) {
  let isValid;
  do {
    var response = prompt(question).trim();
    isValid = valid(response);
  } while (response === "" || isValid === false)
  return response;
}

// helper function/callback to pass into promptFor to validate yes/no answers.
function yesNo(input) {
  if (input.toLowerCase() == "yes" || input.toLowerCase() == "no") {
    return true;
  }
  else {
    return false;
  }
}

// helper function to pass in as default promptFor validation.
//this will always return true for all inputs.
function autoValid(input) {
  return true; // default validation only
}

//Unfinished validation function you can use for any of your custom validation callbacks.
//can be used for things like eye color validation for example.
function traitValidation(input) {
  if (input >= "1" && input <= "6")
    return true
  else {
    return false
  }
}

function eyeColorValidation(input) {
  if (input == "brown" || input == "black" || input == "hazel" || input == "blue" || input == "green")
    return true
  else {
    return false
  }
}

function genderValidation(input) {
  if (input == "male" || input == "female")
    return true
  else {
    return false
  }
}

function heightValidation(input) {
  if (input > 0 && input < 100)
    return true
  else {
    return false
  }
}

function weightValidation(input) {
  if (input > 0 && input < 300)
    return true
  else {
    return false
  }
}

function occupationValidation(input) {
  if (input == "assistant" || input == "doctor" || input == "politician" || input == "nurse" || input == "landscaper" || input == "programmer" || input == "architect" || input == "student")
    return true
  else {
    return false
  }
}

function dateOfBirthValidation(input) {
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(input))
    return false  
  else {
    return true
  }
}
//#endregion