console.log('Doing Homework')





// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string. To get you started, you'll need to loop through each string in the array and get the length of each one. Those lengths should be stored in a different array that you will return.

// Remember that when building a function, you want to use declare a function with a name that accepts arguments. So for building our function called lengths that accepts an array of strings, it might look something like:

// // declare function named "lengths"
// // that accepts a arguments named "arrayOfStrings"
// function lengths(arrayOfStrings) {

//   // we can log out our "arrayOfStrings"
//   console.log(arrayOfStrings);

//   // now, we want to "return" something... but what?

//   return whateverVariableYouWantToReturnHere;

// }

const lengths = (arrayOfStrings) => {
	for (i = 0; i < arr.length; i++) {
	arrayOfStrings.push(arr[i].length)
    console.log(arrayOfStrings);
} 

//
//
const transmogrifier = (num1, num2, num3) => {
    return (num1 * num2) ** num3
};

transmogrifier(5, 4, 3)     //8000
transmogrifier(13, 12, 5).  //92389579776
transmogrifier(42, 13, 7).  //14466001271480793000



//////
// const toonify = (accent, sentence) => {
// 	if(accent = "daffy")
// 	return sentence.replaced(/s/i 'th')
// 	else if(accent = "elmers")
// 		return sentence.replaced(/s/i 'w')
// 	else {

// 	}
// }
// 	toonify("daffy", "so you smell like sausage");



////
// Write a function letterReverse that accepts a single argument, a string. 
// The function should maintain the order of words in the string but reverse the letters in each word. 
// Don't worry about punctuation. 
// This will be very similar to round 4 except you won't need to split them with a space.


// const letterReverse = (string) => {

// }
// const reversed = string.reverse();{

// } 
// console.log(letterReverse);
// // expected output: Array ['three', 'two', 'one']

// console.log(reversed);
// // expected output: Array ['three', 'two', 'one']

const letterR= ['one', 'two', 'three'];
const reversed = letterR.reverse();
undefined
console.log(letterR + reversed);
VM551:1 three,two,onethree,two,one
undefined

/// and then I tried this
const letterReversed= ['one', 'two', 'three'];
	console.log(letterReversed.reverse);
VM601:2 ƒ reverse() { [native code] }
undefined
//slowly I am understanding



///Write a function longest that accepts a single argument, an array of strings. 
//The method should return the longest word in the array. In case of a tie, 
//the method should return the word that appears first in the array.
const longestWord = (a) => {

}




// Reference: MDN: String.length
// longest(["oh", "good", "grief"]) # => "grief"
// longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
// # => "unrequited"












