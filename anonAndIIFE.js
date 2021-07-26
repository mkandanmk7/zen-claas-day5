

//1. Print odd numbers in an array 
// anonymous function : 
let empty = [];
let odd = function (value) {
    value.forEach((i) => {
        if (i % 2 !== 0) {
            empty.push(i);
        }
    })
    return empty.join(",")
}
console.log(odd([1, 2, 3, 4, 5, 6])); //1,3,5

//iIFE () method:
(function (value) {
    let empty = [];
    value.forEach((i) => {
        if (i % 2 !== 0) {
            empty.push(i);
        }
    });
    console.log(empty.join(",")); //1,3,5
})([1, 2, 3, 4, 5, 6])





//2.Convert all the strings to title caps in a string array


// Anonymous function:

let checkArr = function (str) {
    str = str.toLowerCase().split(" ");//lowercase and spliting wrt space " ";
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }
    return str.join(" ");
}
stringCap = checkArr("i'm like to play scoccer"); //I'm Like To Play Scoccer
console.log(stringCap);

// //map() method .

let titleCase = function (value) {
    value = value.toLowerCase().split(" ");
    value = value.map((words) => {
        return words = (words.charAt(0).toUpperCase() + words.slice(1));

    });
    return value.join(" ")

}
let result = titleCase("I'm a body builder"); //I'm A Body Builder
console.log(result);


//IIFE method;
(function (value) {
    value = value.toLowerCase().split(" ");
    for (let i in value) {
        value[i] = value[i].charAt(0).toUpperCase() + value[i].slice(1);

    }
    console.log(value.join(" ")); //I'm Coding In Visual Studio
})("I'm coding in visual studio")


//3.Sum of all numbers in an array

//IIFE function using : ()()
let arrAdd = 0;
(function (arr) {
    arr.forEach((add) => {
        arrAdd += add;
    });
    console.log("sum of array:", arrAdd);// expected output: sum of array: 44
}
)([2, 3, 4, 5, 6, 7, 8, 9]);





// anonyous function:
let add = 0;
let arr = function (odd) {
    odd.forEach((key) => {
        add = add + key;

    });


};
arr([2, 3, 4, 5, 6, 7, 8, 9]);
console.log("some of array:", add); // expected output: sum of array: 44

//4.Return all the prime numbers in an array;

//anonymous () method:

let primeNum = function (arr) {
    return arr.filter((n) => {
        for (let i = 2; i < n; i++) {
            if (n % 2 === 0) return false;

        }
        return n > 1;
    })


}
console.log(primeNum([3, 4, 5, 7, 10])); //[3, 5, 7]

//IIFE () method:
(function (arr) {
    return arr.filter((n) => {
        for (let i = 2; i < n; i++) {
            if (n % 2 === 0) return false;

        }
        console.log(n); // 3,4,7
        return n > 1;

    })


})(primeNum([3, 4, 5, 7, 10]))





//5.Return all the palindrome in an array:

//anonymous () method:

let primeArr = function (arr) {
    let empty = [];
    for (let i in arr) {
        if (arr[i].split("").reverse().join("") === arr[i].split("").join("")) {
            empty.push(arr[i])
        }
    }
    return empty;
}
console.log(primeArr(["eye", "selva", "madam", "guvi"])); //["eye", "madam"]

//IIFE() method:

(function (arr) {
    let empty = [];
    for (let i in arr) {
        if (arr[i].split("").reverse().join("") === arr[i].split("").join("")) {
            empty.push(arr[i])
        }
    }
    console.log(empty); //["eye", "ette", "madam"]
})(primeArr(["eye", "selva", "ette", "madam", "guvi"]))


//6.removes duplicate from an array

//IIFE () method:

(function (arr) {
    let arr1 = [];
    for (let i in arr) {
        if (arr1.indexOf(arr[i]) === -1) {
            arr1.push(arr[i]);
        }
    }
    console.log(arr1); //[2,4,9,15];
})([2, 2, 4, 4, 9, 15]);

//7.Rotate an array by k times

// anonymous () method:


let rotate = function (value, k) {
    for (let i = 0; i < k; i++) {
        value.unshift(value.pop());
    }
    return value;

}

console.log(rotate([1, 2, 3], 2)); //[2,3,1]
