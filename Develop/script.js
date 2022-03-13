// User choice object
var passwordInfo = {
  value: "",
  lengthNumber: 8,
  characters: []
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

var randomPasswordGeneration = function() {

  for (var n = 0; n < passwordInfo.lengthNumber; n++) {
    var randomNumber = Math.floor(Math.random() * passwordInfo.characters.length);
    passwordInfo.value += passwordInfo.characters[randomNumber];
    
    

  }
  console.log(passwordInfo.value);
  console.log(passwordInfo.value.length);

}

// Function to choose type of characters
var charactersType = function() {
    var charactersTypeUser = window.prompt("Please choose character type: 'lowercase', 'UPPERCASE', 'numeric', or 'special'.  ");
    if (charactersTypeUser === "" || charactersTypeUser === null) {
      window.alert("Fields left empty. Please try again.");
      charactersTypeUser = window.prompt("Please choose character type: 'lowercase', 'UPPERCASE', or 'special'.  ");
    }

    switch (charactersTypeUser) {
      case 'lowercase':
        case 'LOWERCASE':
          passwordInfo.characters = passwordChoices.lowercase;
          break;
      case 'uppercase':
        case 'UPPERCASE':
          passwordInfo.characters = passwordChoices.uppercase;
          break;
      case 'numeric':
        case 'NUMERIC':
          passwordInfo.characters = passwordChoices.numeric;
          break;
      case 'special':
        case 'SPECIAL':
          passwordInfo.characters = passwordChoices.specialCharacters;
          break;
      default:
        window.alert("Please make a valid selection. Try again.");
        charactersType();
    }

    console.log(passwordInfo.characters);

}

// Starting function
function generatePassword() {
  // User chooses length of password function

  passwordLengthCheck();

  // // User character type choice
  charactersType();

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
