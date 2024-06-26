// 와일드카드 패턴과 매칭되는지 확인하고, true 또는 false를 리턴하는 함수
function isMatch(pattern, text) {
  if (pattern.length === 0) {
    return text.length === 0;
  }

  if (pattern[0] === "*") {
    // *인 경우, 0글자부터 text의 길이 매칭
    for (let i = 0; i <= text.length; i++) {
      if (isMatch(pattern.substring(1), text.substring(i))) {
        return true;
      }
    }
    return false;
  } else if (pattern[0] === "?") {
    // ?인 경우, 텍스트의 현재 글자가 존재하는지 확인
    if (text.length === 0) {
      return false;
    }
    return isMatch(pattern.substring(1), text.substring(1));
  } else if (pattern[0] === text[0]) {
    // 현재 패턴 문자와 텍스트 문자가 일치하는 경우 다음 문자 비교
    return isMatch(pattern.substring(1), text.substring(1));
  } else {
    // 일치하지 않는 경우
    return false;
  }
}

// 결과 출력
console.log(isMatch("he*o", "hello")); // true
console.log(isMatch("h?", "hi")); // true
console.log(isMatch("f*o", "faa")); // false