

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: { 
            value: 3,
            rest: null
        }

    }
};
console.log(list);
let myArray = [];
while (list != null) {
    myArray.push(list.value);
    list = list.rest;
}
console.log(myArray);