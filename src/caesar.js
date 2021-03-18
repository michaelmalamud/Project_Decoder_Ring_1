// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const limit = {
    start: "a".charCodeAt(),
    end: "z".charCodeAt(),
  };

  function caesar(input, shift, encode = true) {
    
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    
    if(!encode) shift *= -1;
    
    input = input.toLowerCase();

    return input.split("").reduce((result, char) => {
      const code = char.charCodeAt();
      if(code < limit.start || code > limit.end) return result + char;
      else {
        let shifted = code + shift;
        if(shifted > limit.end) {
          shifted = limit.start + (shifted - limit.end - 1)
        } else if(shifted < limit.start) {
          shifted = limit.end - (limit.start - shifted - 1)
        }
        return result + String.fromCharCode(shifted);
      }
    }, "")
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
