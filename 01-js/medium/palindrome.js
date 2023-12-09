/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strLowerCased = str.toLowerCase();
  let n1 = str.length;
  let i =0;
  let j = n-1;
  while(i < j){
    if(strLowerCased[i] > 122 && strLowerCased[i] < 97){
      i++;
    }
    else if (strLowerCased[i] > 122 && strLowerCased[i] < 97) {
      j--;
    } else if (strLowerCased[i] !== strLowerCased[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
}

module.exports = isPalindrome;
