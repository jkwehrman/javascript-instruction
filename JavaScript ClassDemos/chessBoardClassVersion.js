let lines = "";
for (let i = 1; i <= 8; i++) {
    for (let n = 1; n <= 4; n++) {

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
