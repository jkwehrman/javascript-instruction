let javaBook = {
    code: "java",
    description: "Merach's Java Programmng",
    price: 57.50
};
console.log("code" in javaBook);
//let you inspect, not type out, ended true and false
console.log("test" in javaBook);
console.log(Object.keys(javaBook));
//keys keyword, what parameters are  in the object (javaBook)
let mysqlBook = {
    code: "mysql",
    description: "Murach's MySQL",
    price: 55
};
let books = [javaBook, mysqlBook]
console.log(books);
console.log("do an old-school for loop")
for (let i=0; i < books.length; i++) {
console.log(books[i]);
}

for (let book of books) {
console.log("'enhanced' for loop... ");
for (let book of books) {
    console.log(book);
}

}
//not finished

