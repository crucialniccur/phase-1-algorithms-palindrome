function isPalindrome(word) {
  // reverse input string
  const reversedWord = reverseString(word);
  // if (word === reversedWord) {
  //   return true;
  // } else {
  //   return false;
  // }
  return word === reversedWord;
}

function reverseString(word) {
  // create array and split
  const wordArray = word.split("");
  // reverse the array
  const reversedArray = wordArray.reverse();
  // make reversed array a string
  const reversedWord = reversedArray.join("");
  // return reversed string
  return reversedWord;
}

isPalindrome("mom");

/* 
take in input and reverse it

  if reversed is same as input
      return true
  else 
    return false
*/

/*
  Add written explanation of your solution here
  take an input, words in lowercase
  retutrn true if palindrome and false if not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
