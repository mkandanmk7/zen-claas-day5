//IIFE function using : ()()
let arrAdd = 0;
(function (arr) {
    arr.forEach((odd) => {
        arrAdd += odd;
    });
}
)([2, 3, 4, 5, 6, 7, 8, 9]);
console.log("sum of array:", arrAdd);


// expected output: sum of array: 44

// anonyous function:
let add = 0;
let arr = function (odd) {
    odd.forEach((key) => {
        add = add + key;

    });


};
arr([2, 3, 4, 5, 6, 7, 8, 9]);
console.log("some of array:", add);

// expected output: sum of array: 44
