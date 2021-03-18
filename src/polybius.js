// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
  const encoder = {
    "a": "11",
    "b": "21",
    "c": "31",
    "d": "41",
    "e": "51",
    "f": "12",
    "g": "22",
    "h": "32",
    "i": "42",
    "j": "42",
    "k": "52",
    "l": "13",
    "m": "23",
    "n": "33",
    "o": "43",
    "p": "53",
    "q": "14",
    "r": "24",
    "s": "34",
    "t": "44", 
    "u": "54",
    "v": "15",
    "w": "25",
    "x": "35",
    "y": "45", 
    "z": "55",
  };

  const decoder = {
    "11": "a",
    "21": "b",
    "31": "c",
    "41": "d",
    "51": "e",
    "12": "f",
    "22": "g",
    "32": "h",
    "42": "i/j",
    "52": "k",
    "13": "l",
    "23": "m",
    "33": "n",
    "43": "o",
    "53": "p",
    "14": "q",
    "24": "r",
    "34": "s",
    "44": "t", 
    "54": "u",
    "15": "v",
    "25": "w",
    "35": "x",
    "45": "y", 
    "55": "z",
  };

  input = input.split("");

  
if (encode) {
  
  return input.reduce((result, char) => {
    // const encoderKeys = Object.keys(encoder);
    char = char.toLowerCase();
    const code = char.charCodeAt();
    if (code >= 97 && code <= 122) {
      return `${result}${encoder[char]}`
    }
    return `${result}${char}`
    //   char = encoder.char
    // }
    // return result + char;
  }, "");
}
/*
1. Loop through the string and access the double digit values.
2. Use the decoder object to translate the values back to letters.
3. Leave any spaces in tact. 
*/

//I need to find a way to count up all the characters in the string that are not spaces, add it up, and if its odd, return false. Let's try a for loop.

// let acc = 0;

// for (let i = 0; i < input.length; i++) {
//   if (input[i] !== " ") {
//     acc += 1;
//   }
// }

const acc = input.reduce((result, char) => {
   return char !== " " ? result + 1 : result
  }, 0);

if (acc % 2 !== 0) return false;



// const withoutSpaces = input.filter((char) => char !== " ");
// if (withoutSpaces.length % 2 !== 0) return false;

let newStr = "";

for (let i = 0; i < input.length; i += 2) {
  //I need to find a way to add the space to newStr, while skipping over it and going to the next index
  if (input[i] !== " ") {
    const encoded = input[i] + input[i + 1];
    const decoded = decoder[encoded];
    newStr = `${newStr}${decoded}`;
  }
  else {
    i += 1;
    const encoded = input[i] + input[i + 1];
    const decoded = decoder[encoded];
    newStr = `${newStr} ${decoded}`;
    }
  }
  return newStr;
}
  // else {
  //   if (input[i] === " ") {
  //     newStr = `${newStr}${input[i]}`;
  //   }
  //   if (input[i + 1] === " ") {
  //     newStr = `${newStr}${input[i + 1]}`;
    // }

// const newString = input.join("")

// console.log(input)
// if (newString.length % 2 !== 0) return false;
  


  
//   for (let i = 0; i < input.length; i++) {

//   }
// }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
