// User choice object
var passwordInfo = {
  value: "",
  lengthNumber: 8,
  characters: [],
  reset: function(){
    this.value = "";
    this.characters = [];
    lengthNumer = 8;
  }
};

// Choices object
var passwordChoices = {
  lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  specialCharacters: ['!', '@', '#', '$', '%', '&'],
  numeric: [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9]
}
;
// Function for password length
var passwordLengthCheck = function() {
  var passwordLength = window.prompt("Please specify number of characters from 8 to 128.");
  if (passwordLength === "" || passwordLength === null) {
    window.alert("Fields left empty. Please try again.");
    passwordLengthCheck()
  }

  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);

  // Check to make sure the entry is between 8 and 128 characters
  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordInfo.lengthNumber = passwordLength;
  } else {
    window.alert("Please enter a number between 8 and 128. Try again!");
    passwordLengthCheck();
  }
};

// Random numer generation
var randomPasswordGeneration = function() {

  for (var n = 0; n < passwordInfo.lengthNumber; n++) {
    var randomNumber = Math.floor(Math.random() * passwordInfo.characters.length);
    passwordInfo.value += passwordInfo.characters[randomNumber];
    
  }
  console.log(passwordInfo.value);
  console.log(passwordInfo.value.length);

}

// Lowercase numbers function
var lowercaseFunction = function() {
  var lowercaseChoice = window.prompt("Would you like to use lowercase? Choose 'yes' or 'no'.");
    if (lowercaseChoice === "" || lowercaseChoice === null) {
      window.alert("Fields left empty. Please try again");
      lowercaseChoice = window.prompt("Would you like to use lowercase? Choose 'yes' or 'no'.");
    } else {
      lowercaseChoice = lowercaseChoice.toLowerCase();

      switch (lowercaseChoice) {
        case 'yes':
          passwordInfo.characters = passwordInfo.characters.concat(passwordChoices.lowercase);
          console.log(passwordInfo.characters);
          break;
        case 'no':
          break;
        default: 
          window.alert("Please make a valid selection. Try again.");
          lowercaseFunction();
      }
    }
};

// Uppercase Function
var uppercaseFunction = function() {
  var uppercaseChoice = window.prompt("Would you like to use uppercase? Choose 'yes' or 'no'.");
    if (uppercaseChoice === "" || uppercaseChoice === null) {
      window.alert("Fields left empty. Please try again");
      uppercaseFunction();
    } else {
      uppercaseChoice = uppercaseChoice.toLowerCase();

      switch (uppercaseChoice) {
        case 'yes':
          passwordInfo.characters = passwordInfo.characters.concat(passwordChoices.uppercase);
          break;
        case 'no':
          break;
        default: 
          window.alert("Please make a valid selection. Try again.");
          uppercaseFunction();
      }
    }
};

// Numeric Function
var numericFunction = function() {
  var numericChoice = window.prompt("Would you like to use numbers? Choose 'yes' or 'no'.");
    if (numericChoice === "" || numericChoice === null) {
      window.alert("Fields left empty. Please try again");
      numericFunction();
    } else {
      numericChoice = numericChoice.toLowerCase();

      switch (numericChoice) {
        case 'yes':
          passwordInfo.characters = passwordInfo.characters.concat(passwordChoices.numeric);
          break;
        case 'no':
          break;
        default: 
          window.alert("Please make a valid selection. Try again.");
          numericFunction();
      }
    }
};

// Special Characters Function
var specialCharactersFunction = function() {
  var specialCharacterChoice = window.prompt("Would you like to use special characters? Choose 'yes' or 'no'.");
    if (specialCharacterChoice === "" || specialCharacterChoice === null) {
      window.alert("Fields left empty. Please try again");
      specialCharactersFunction();
    } else {
      spcialCharacterChoice = specialCharacterChoice.toLowerCase();

      switch (specialCharacterChoice) {
        case 'yes':
          passwordInfo.characters = passwordInfo.characters.concat(passwordChoices.specialCharacters);
          break;
        case 'no':
          break;
        default: 
          window.alert("Please make a valid selection. Try again.");
          specialCharactersFunction();
      }
    }
};

// Starting function
function generatePassword() {
  // Clear the previous choices
  passwordInfo.reset();
  // Password length check
  passwordLengthCheck();

  // User characters choices
  lowercaseFunction();
  uppercaseFunction();
  numericFunction();
  specialCharactersFunction();

  randomPasswordGeneration();


  
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordInfo.value;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
