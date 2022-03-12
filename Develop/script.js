let passwordInfo = {
  value: "",
  length: 8
}

let passwordLengthCheck = function () {
  let passwordLength = window.prompt("Please specify number of characters from 8 to 128.");
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);

  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordInfo.length = passwordLength;
  } else {
    window.alert("Please enter a number between 8 and 128. Try again!");
    passwordLengthCheck();
  }
};


function generatePassword() {
  passwordLengthCheck();
  let passwordCharacters = selectCharacters();
  let password = "";
  for (let i = 0; i < passwordInfo.length; i++) {
    let random = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters[random];
  }

  passwordInfo.value = password;
  return passwordInfo.value;
};

function selectCharacters() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let specialCharacters = "!@#$%^&*()_+";
  let lowerCaseCheck = window.confirm("Would you like to include lowercase letters?");
  let upperCaseCheck = window.confirm("Would you like to include uppercase letters?");
  let numbersCheck = window.confirm("Would you like to include numbers?");
  let specialCharactersCheck = window.confirm("Would you like to include special characters?");
  let passwordCharacters = "";

  if (lowerCaseCheck) {
    passwordCharacters += lowerCase;
  }
  if (upperCaseCheck) {
    passwordCharacters += upperCase;
  }
  if (numbersCheck) {
    passwordCharacters += numbers;
  }
  if (specialCharactersCheck) {
    passwordCharacters += specialCharacters;
  }
  return passwordCharacters;
}

let passwordLength = function (min, max) {


};

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
