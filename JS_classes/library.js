class Book {
    constructor(title, author, isbn, isIssued) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }
    issueBook() {
        this.isIssued = true;
    }
    returnBook() {
        this.isIssued = false;
    }
}
let b1 = new Book("Book A", "Writer 1", "111", false);
let b2 = new Book("Book B", "Writer 2", "222", true);
let b3 = new Book("Book C", "Writer 3", "333", false);
let books = [b1, b2, b3];
let available = books.filter(b => b.isIssued === false);
console.log(available);
function issueByISBN(code) {
    let book = books.find(b => b.isbn === code);
    if (book) {
        book.issueBook();
        console.log("Book issued");
    } else {
        console.log("Not found");
    }
}
issueByISBN("111");