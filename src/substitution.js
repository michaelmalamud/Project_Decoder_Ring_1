// Please refrain from tampering with the setup code provided here,
// as the char.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
// function uniqueness(str) {
//   for (let i = 0; i < str.length; i++) {
//     if ( str[i] !== str.lastcharOf(str[i]) ) {
//       return false;
//     }
//   }
// return true;
// }

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const trueAlpha = "abcdefghijklmnopqrstuvwxyz";

    function howManyRepeated(str) {
      const result = [];
      const strArr = str
        .toLowerCase()
        .split("")
        .sort()
        .join("")
        .match(/(.)\1+/g);

      if (strArr != null) {
        strArr.forEach((elem) => {
          result.push(elem[0]);
        });
      }
      return result;
    }

    if (!alphabet || howManyRepeated(alphabet).length !== 0 ||alphabet.length !== 26) return false;

    let result = "";

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let code = input.charCodeAt(char);
        // if (input.charCodeAt(char) >= && input.charCodeAt(char) <= 122)
        if (char === " ") {
          result += " ";
        } else if (code < 65 || code > 122 || (code > 90 && code < 97)) {
          result += char;
        } else {
          if (input.charCodeAt(char) >= 97 && input.charCodeAt(char) <= 122) {
            const index = trueAlpha.indexOf(char);
            char = alphabet[index];
            result += char;
          } else if (
            input.charCodeAt(char) >= 65 &&
            input.charCodeAt(char) <= 90
          ) {
            char = char.toLowerCase();
            const index = trueAlpha.indexOf(char);
            char = alphabet[index];
            result += char;
          }
        }
      }
      return result;
      // your solution code here
    }

    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      let code = input.charCodeAt(char);

      if (char === " ") {
        result += " ";
      } else if (!(code < 65 || code > 122 || (code > 90 && code < 97))) {
        char = char.toLowerCase();
        let index = alphabet.indexOf(char);
        result += trueAlpha[index];
        console.log(result);
      } else {
        result += char;
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
