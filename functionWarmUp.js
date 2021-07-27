
// JavaScript Functions — Warmup Pbms


//1.Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.



function addFive(num) {
    return 5 + num;

}

console.log(addFive(10)); //15
console.log(addFive(0)); //5
console.log(addFive(-5)); //0

//2.Write a function called “getOpposite”.
// Given a number, return its opposite


function getOpposite(num) {
    if (num === parseInt(num)) {
        return -num;
    }
    else {
        return -1
    }
}

console.log(getOpposite(5)); //-5
console.log(getOpposite(0)); //-0
console.log(getOpposite(-5)); //5
console.log(getOpposite("5a"));//-1
console.log(getOpposite(5.5));//-1

//3.Fill in your code that takes an number minutes and converts it to seconds.
function toSeconds(min) {
    return min * 60;
}
console.log(toSeconds(5)); //300

//4.Create a function that takes a string and returns it as an integer.


function toInteger(str) {
    return parseInt(str);
}
console.log(toInteger("1000")); //1000

//5.Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function increment(num) {
    return num + 1;

}
console.log(increment(5));//6

//6.Create a function that takes an array and returns the first element.

function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([2, 3, 4])); //2

//7.Convert Hours into Seconds
// Write a function that converts hours into seconds.

function secs(hours) {
    for (let i in hours) {
        hours[i] = hours[i] * 3600;
    }
    return hours;
}
console.log(secs([1, 2, 3])); //[3600, 7200, 10800]

//8.Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.

function perimeter(length, width) {
    return (2 * (length + width));
}
console.log(perimeter(6, 7)); //26

//9.Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan(num1, num2) {
    let add = num1 + num2;
    if (add > 100) {
        return "false";
    }
    else {
        return "true";
    }
}
console.log(lessThan(45, 65)); //false

// 10.There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.


function reminder(num1, num2) {
    return num1 % num2;
}
console.log(reminder(1, 3)); //1

//11.Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function legsAnimals(turkey, horse, pigs) {
    return ((2 * turkey) + (4 * horse) + (4 * pigs));
}
console.log(legsAnimals(1, 2, 3)); //22

//12.Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function fps(num1, num2) {
    return num1 * (num2 * 60);
}
console.log(fps(1, 1)); //60

// 13.Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divFive(num) {
    if (num % 5 === 0) {
        return true;
    }
    else return false;
}
console.log(divFive(10)); //true
console.log(divFive(11)); //false

//14.Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.
function isEven(even) {

    if (even % 2 == 0)
        return true;
    else
        return false;

}
console.log(isEven(5)); //false
console.log(isEven(8)); //true
console.log(isEven("11h")); //false


//15.Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2) {
    if (num1 % 2 !== 0 & num2 % 2 !== 0)
        return true;
    else
        return false;
}
console.log(areBothOdd(6, 3));//false
console.log(areBothOdd(7, 3)); //true

//16.Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

function getFullName(firstname, lastname) {
    return firstname + " " + lastname;

}
console.log(getFullName("Muthu", "Mythu")); //Muthu Mythu
console.log(getFullName("Guvi", "Geek")); // Guvi Geek

//17.Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.

function getLengthOfWord(word) {
    return word.length;
}
console.log(getLengthOfWord("MythuMuthu"));//10
console.log(getLengthOfWord("9"));//1

//18.Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.

function isSameLength(word1, word2) {
    if (word1.length === word2.length) {
        return true;

    }
    else
        return false;
}
console.log(isSameLength("mythu", "muthu")); //true

// 19.Create a function to calculate the distance between two points defined by their x, y coordinates

function calculate(x1, y1, x2, y2) {
    let xterm = Math.pow(x2 - x1, 2);
    let yterm = Math.pow(y2 - y1, 2);
    return (Math.sqrt(xterm + yterm)).toFixed(2);


}

console.log(calculate(5, 4, 10, 8)); //6.40

//20.Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

function getNthElement(arr, num) {
    return arr[num];
}
console.log(getNthElement([1, 3, 5], 1));//3

//21.Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

function getLastElement(arr) {
    if (arr.length === 0)
        return -1;
    else
        return arr[arr.length - 1];

}
console.log(getLastElement([1, 2, 3, 4, 5, 6])); //6

//22.Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
function getProperty(obj, key) {
    return obj[key];
}
let object = { name: "muthu" };
console.log(getProperty(object, "name")); //muthu

//23.Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

function addProperty(obj, key) {
    obj[key] = true;
    return obj

}
let object1 = {
    fullName: "mani"
}
console.log(addProperty(object1, "isLive")); // object

// 24.Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.

function removeProperty(obj, key) {
    delete obj[key];
    return obj

}
let object3 = {
    name: "guvi",
    age: 4
}
console.log(removeProperty(object3, "name")); // {age:4}

//25.Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function ReturnArr(array) {
    let arr = [];
    let count = 0;
    let sum = 0;
    for (let i in array) {
        if (array[i] > 0)
            count++;
        else
            sum += array[i];
    }
    arr.push(count, sum)
    return arr // [5 -17]
}
console.log(ReturnArr(arr));

//26.Create a function that receives an array of numbers and returns an array containing only the positive numbers

function positive(arr) {
    let positiv = [];
    for (let i in arr) {
        if (arr[i] > 0) {
            positiv.push(arr[i])
        }
    }
    return positiv;
}
console.log(positive([1, 22, 32, -8, 2, -9])); //[1,22,32,2]


//27.Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

function powerOfTwo(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(Math.pow(2, i));
        console.log(arr);
    }

}
powerOfTwo(12); //[1,2,4,8,16,32,64,128,256,512,1024,2048]

//28.Find the maximum number in an array of numbers

function maxiOfArray(arr) {
    //     let sorting = arr.sort((a, b) => {
    //         return a - b;
    //     });
    //     let maxi = sorting[sorting.length - 1];
    //     return maxi

    let empty = 0;
    for (let i in arr) {
        empty = Math.max(empty, arr[i]);
    }
    return empty;
}
console.log(maxiOfArray([1, 34, 2, 45, 23])); //45

//29. print first 100 prime numbers:

function prime(arr) {
    let empty = []
    for (let i = 1; i <= arr; i++) {
        let prime = false;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                prime = true;
                break;
            }

        }
        if (prime === false) {
            empty.push(i);
        }
    }
    return empty;

}
console.log(prime(100));//[1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

//30.Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”



function listPrime(first, last) {
    let emt = [];
    for (let i = first; i < last; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            emt.push(i);
        }
    }
    return emt;
}
console.log(listPrime(10, 100)); //[prime numbers between 10 to 100]

//31.Reverse a string

function reverseStr(str) {
    let empty = [];
    for (let i in str) {
        empty.unshift(str[i]);
    }
    return empty.join("");
}
console.log(reverseStr("muthu"));//uhtum

//32.Create a function that will merge two arrays and return the result as a new array

function merge(arr1, arr2) {
    for (let i in arr2) {
        arr1.push(arr2[i]);
    }
    return arr1;
}
console.log(merge([2, 3, 4], [3, 1]));[2, 3, 4, 3, 1]

//33.Calculate the sum of numbers received in a comma delimited string

function sumOfSplit(strNumber) {
    let split = strNumber.split(",").map(Number);
    let sum = 0;
    for (let i in split) {
        sum += split[i];

    }
    return sum;
}
console.log(sumOfSplit("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")); //57.3
