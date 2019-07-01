
let list = ["first", "second", "third", "fourth", "fifth"];
console.log(list);
let list2 = [];
let x = list.length;
for (let i = 0; i < x; i++) 
    list2.push(list.pop()); 
console.log(list2);