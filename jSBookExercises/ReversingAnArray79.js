//This one is good - Jonelle's original
// let list = ["first", "second", "third", "fourth", "fifth"];
// console.log(list);
// let list2 = [];
// let x = list.length;
// for (let i = 1; i <= x; i++) {
//     let f = list.pop();
//     list2.push(f);
// } 
// console.log("pop/push - "+list2);


// for (let i = 1; i <= x; i++) {
//     let f = list.shift();
//     list2.push(f);
// } 
// console.log("shift/push - "+list2);
// for (let i = 1; i <= x; i++) {
//     let f = list.pop();
//     list2.unshift(f);
// } 
// console.log("pop/unshift - "+list2);
// for (let i = 1; i <= x; i++) {
//     let f = list.shift();
//     list2.unshift(f);
// } 
// console.log("shift/unshift - "+list2);

//Sean's version - look through list, get elements and push to list
//JOnelle's get from the beginning, and  put in front
let array = ["first", "second", "third", "fourth", "fifth"];
console.log(array);
let array2 = [];
let x = array.length;
for (let i = x - 1; i >= 0; i--) {
    array2.push(array[i]);
 //   let f = list.pop();
   // list2.push(f);
} 
console.log("Sean's push - "+array2);


list = ["first", "second", "third", "fourth", "fifth"];
console.log(list);
list2 = [];
x = list.length;
for (let i = 1; i <= x; i++) {
    array2.unshift(array[i]);
    let f = list.pop();
    list2.push(f);
} 
console.log("Jonelle's unshift - "+list2);

//first array in place - Erin's solution
// array = ["first", "second", "third", "fourth", "fifth"];
// console.log(array);
// array2 = [];
// for (i = 0; i <=  array.length+1; i++) {
//     array2.unshift(array[i]);
//  //   let f = list.pop();
//    // list2.push(f);
// } 
// console.log("Erin's push - "+array2);

//class demo
//hold values, then put back in
array = ["first", "second", "third", "fourth", "fifth"];
console.log("\nreverseArrayInPlace..." + array);
for (i = 0; i <  array.length/2; i++) {
let a = array[1];
let end = array.length-1-i;
let b = array[end];
//swapping the two positions in the array
array[i] = b;
array[end] = a;

} 
console.log("classdemo's push - "+array2);

array = ["first", "second", "third", "fourth", "fifth", "sixth"];
console.log("\nreverseArrayInPlace..." + array);
for (i = 0; i <  array.length/2; i++) {
let a = array[1];
let end = array.length-1-i;
let b = array[end];
//swapping the two positions in the array
array[i] = b;
array[end] = a;

} 
console.log("classdemo's push - "+array);
 





