let size = 30;
let str = "";
for (y=1;y<=13;y++) {
   for(x=1;x<=size;x++) {
       if (x<=14 && y<=7) {
           if ((y + x) % 2 == 0) {
               str+=":jeans:";
           } else {
               str +=":star:";
           }
       } else {
           if (y%2==0) {
               str+=":baseball:";
           } else {
               str += ":apple:";
           }
       }
   }
   str+="\n";
}
console.log(str);