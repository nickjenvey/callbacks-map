var words = ["ground", "control", "to", "major", "tom"];

let myMap = function(arr, callback) {
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

let wordsLength = function(word) {
  return word.length;
};

let wordsUpperCase = function(word) {
  return word.toUpperCase();
};

let wordsReverse = function(word) {
  return word.split('').reverse().join('');
};

console.log(myMap(words, wordsLength));
console.log(myMap(words, wordsUpperCase));
console.log(myMap(words, wordsReverse));