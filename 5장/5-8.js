function makePalindrome(S) {
  let charCount = {};
  for (let char of S) {
    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  let oddCount = 0;
  let oddChar = "";
  let evenChars = [];

  for (let char in charCount) {
    if (charCount[char] % 2 === 0) {
      for (let i = 0; i < charCount[char] / 2; i++) {
        evenChars.push(char);
      }
    } else {
      oddCount++;
      oddChar = char;
      if (oddCount > 1) {
        return false;
      }
      for (let i = 0; i < Math.floor(charCount[char] / 2); i++) {
        evenChars.push(char);
      }
    }
  }

  let palindrome = evenChars.join("") + oddChar + evenChars.reverse().join("");
  return palindrome;
}

console.log(makePalindrome("ABDAB")); // 출력: 'ABDBA'
console.log(makePalindrome("ABDAB23")); // 출력: false
