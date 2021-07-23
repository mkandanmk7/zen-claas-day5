//IIFE function using : ()()
(function (arr) {
    arr.forEach((odd) => {
        if (odd % 2 != 0) {
            console.log("odd numbers:", odd);
        };
    });
}
)([2, 3, 4, 5, 6, 7, 8, 9]);

/**  expected output:
 odd numbers: 3
 odd numbers: 5
 odd numbers: 7
 odd numbers: 9
*/

// anonyous function:

let arr = function (odd) {
    odd.forEach((key) => {
        if (key % 2 != 0) {
            console.log("odd number:", key);
        };
    });


};
arr([2, 3, 4, 5, 6, 7, 8, 9]);

/**
expected output:
 odd number: 3
 odd number: 5
 odd number: 7
 odd number: 9
 */