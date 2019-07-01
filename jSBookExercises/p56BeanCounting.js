//let s="string";
//s[2]=r
const readline = require('readline-sync');
function countBs(Bumblebees) {
    let c = 0;

// count the number of "B's" and return
for (let i = 0; i<Bumblebees.length; i++) {
if(Bumblebees[i]=="B") {
    c++;
}
}
return c;
}
let Bumblebees = readline.question("How many Bs?");
console.log(countBs(Bumblebees));
