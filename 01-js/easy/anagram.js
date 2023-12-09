/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;
  let upCasestr1 = str1.toUpperCase();
  let upCasestr2=str2.toUpperCase();

  if(n1 != n2) return false;
  let sortedStr1 = upCasestr1.split("").sort().join("");
  let sortedStr2 = upCasestr2.split("").sort().join("");
  for(let i = 0; i < n1; ++i){
    if(sortedStr1[i] != sortedStr2[i])
    return false;
  }
  return true;

}

module.exports = isAnagram;
