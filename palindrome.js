
// checking palindrome using anonymous ();
let palin = function (arr) {
    let isPalin = true;

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            isPalin = false;
            break;
        }
    }
    if (isPalin === true) {
        console.log("array is palindrome", arr); //array is palindrome [1, 2, 3, 4, 3, 2, 1];
    }



}
let arrString = palin([1, 2, 3, 4, 3, 2, 1]);


// checking palindrome using IIFE()()

(function (arr) {
    let isPalin = true;

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            isPalin = false;
            break;
        }
    }
    if (isPalin === true) {
        console.log("array is palindrome", arr); // array is palindrome [1, 2, 3, 4, 3, 2, 1]
    }
})([1, 2, 3, 4, 3, 2, 1]);
