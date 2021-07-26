//2) Do the below programs in arrow functions

//Print odd numbers in an array
const odd = (arr) => {
  let arr1 = [];
  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
};
console.log(odd([2, 4, 9, 7, 18, 27]));

//Convert all the strings to title caps in a string array
const capital1 = (str) => {
  let arr = str.split(" ");
  //console.log(arr);
  let res = [];
  for (let i in arr) {
    res.push((arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)));
  }
  return res.join(" ");
};
console.log(capital1("hello how summer"));

//Sum of all numbers in an array
let sum1 = (arr) => {
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }
  console.log(sum);
};
sum1([1, 5, 10]);

//Return all the prime numbers in an array
let primes = (arr) => {
  return arr.filter((e) => {
    for (let i = 2; i < e; i++) {
      if (e % i === 0) {
        return false;
      }
    }
    return e > 1;
  });
};
console.log(primes([1, 2, 5, 16, 25, 99, 101]));

//Return all the palindromes in an array
let pali = (arr) => {
  let arr1 = [];
  for (let i in arr) {
    if (arr[i].split("").reverse().join("") === arr[i]) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
};
console.log(pali(["eye", "arcade", "aya"]));
