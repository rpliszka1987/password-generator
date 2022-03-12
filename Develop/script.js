var passwordInfo = {
  value: "",
  length: 8
}

var passwordLengthCheck = function() {
  var passwordLength = window.prompt("Please specify number of characters from 8 to 128.");
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);

  // Check to make sure the entry is between 8 and 128 characters
  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordInfo.length = passwordLength;
  } else {
    window.alert("Please enter a number between 8 and 128. Try again!");
    passwordLengthCheck();
  }
};


function generatePassword() {
  passwordLengthCheck();
};

// Calculates the number of characters.
var passwordLength = function(min, max) {


};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
