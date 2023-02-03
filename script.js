// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var new_array = [];
var pass_array = [];

// Function to prompt user for password options
function generatePassword() {
  var pass = prompt('What is the length?');
  console.log(pass)
  if(pass < 10){
    alert('Password length is too short!')
    return
  }
  else if(pass > 64){
    alert('Password length is too long!')
    return
  }
  else{
    var ans = confirm('Do you need special character?')
    if(ans === true ){
      new_array = new_array.concat(specialCharacters) ;

    }

    var reply = confirm('Do you need capital character?')
    if(reply === true){
      new_array = new_array.concat(upperCasedCharacters);
    }
    var reply2 = confirm('Do you need lower case character?')
    if(reply2 === true){
      new_array = new_array.concat(lowerCasedCharacters);
    }
    var reply3 = confirm('Do you need numbers?')
    if(reply3 === true){
      new_array = new_array.concat(numericCharacters);
    }
    if(new_array.length === 0){
      alert('You need to choose at least one character!');
      return
    }
  }

  for(var i=0;i<pass;i++){
    pass_array.push(getRandom(new_array));
  }

  // console.log(pass_array.join(''));
  return pass_array.join('');

}


// Function for getting a random element from an array
function getRandom(arr) {
 
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;

}


// Function to generate password with user input


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
console.log(document.querySelector('#generate'));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);