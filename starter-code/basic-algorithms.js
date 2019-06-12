// Names and Input
// let hacker1 = 'Guilherme';
// console.log("The driver's name is " + hacker1);
const hacker2 = window.prompt("Navigator's name: ");
console.log(`The navigator's name is ${hacker2}`);

// // Conditionals

// if(hacker1.length > hacker2.length)
// {
//     console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
// }
// else if(hacker1.length < hacker2.length)
// {
//     console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
// }
// else
// {
//     console.log("Wow, you both have equally long names, " + hacker1.length + " characters!!");
// }

// // 6
// console.log(hacker2.split('').join(' ').toUpperCase());

// // 7
// hacker2Reversed = '';
// for(let i = hacker2.length - 1; i >= 0; i--)
// {
//     hacker2Reversed +=  hacker2[i];
// }
// console.log(hacker2Reversed);

// // 8
const comparisonLength = Math.min(hacker1.length, hacker2.length);
let nextCondition = 1;

for (let i = 0; i < comparisonLength; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first");
    nextCondition = 0;
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log('Yo, the navigator goes first, definitely');
    nextCondition = 0;
    break;
  }
}

// if(nextCondition === 1)
// {
//     if(hacker1.length === hacker2.length)
//     {
//         console.log("What? You both got the same name?");
//     }
//     if(hacker1.length > hacker2.length)
//     {
//         console.log("Yo, the navigator goes first, definitely");
//     }
//     if(hacker1.length < hacker2.length)
//     {
//         console.log("The driver's name goes first");
//     }
// }

// 9

const phrase = window.prompt('Phrase:');
let cleanPhrase = '';

for (i = 0; i < phrase.length; i++) {
  const cc = phrase.charCodeAt(i);
  if (cc > 47 && cc < 58 || cc > 64 && cc < 91 || cc > 96 && cc < 123) {
    cleanPhrase += phrase[i];
  }
}

let isPalindrome = 1;
for (i = 0; i < cleanPhrase.length; i++) {
  if (cleanPhrase[i].toLowerCase() !== cleanPhrase[cleanPhrase.length - 1 - i].toLowerCase()) {
    console.log('Not a palindrome!');
    isPalindrome = 0;
    break;
  }
}

if (isPalindrome) {
  console.log("It's a palindrome!");
}
