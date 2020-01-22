console.log('COMBO');
// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.


//const evenOdd = (num) => {
 //   if (num % 2 === 0){
 //       return even;

 //   }else{
 //       return odd;
 //   };   

//}
console.log('evenodd', evenOdd(4));
console.log('evenodd', evenOdd(5));

// Challenge #2
// given a number, find its opposite. 2 = -2
//const opposite = (num) => {
//    return* (-1);  
//};
//console.log('opposite', opposite(3));

// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.
const palindrome = (text) => {
    const cleanText = text.toLowerCase().replace(' ', '');
    const opp = text.split('').reverse().join('');
    console.log('opp', opp);
    console.log('text', opp);  
return (cleanText === opp);
};

console.log('palindrone', palindrome('cat'));
console.log('palindrone', palindrome('mom'));
console.log('palindrone', palindrome('bear'));
console.log('palindrone', palindrome('racecar'));

// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide
//