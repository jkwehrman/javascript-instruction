
const readline = require('readline-sync');
let lines = "";
let gs = readline.questionInt("grid size: ")
for (let i = 1; i <= gs; i++) {
   for (let n = 1; n <= gs/2; n++) {
     {

        if (i % 2 == 0) {
            // even row
            lines += "# ";
        }
        else {
            //odd row
            lines += " #";
        }
    }
lines += "\n";
}
console.log(lines);
