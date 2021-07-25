// removing dupicates using anonymous ();

let remov = function (arr) {
    let setArray = [...new Set(arr)]; 
    console.log(setArray); //[1, 2, 3]
}
remov([1, 2, 2, 3]);





// removing duplicates using IIFE();
(function (val) {
    let setArr = [...new Set(val)]; //using Set() and ...spread;
    console.log(setArr); //["a", "b", "c", "A"]

})(["a", "b", "c", "a", "A"])
