let total_books = document.getElementById("test");
let total_read = document.getElementById("total_read");

let myLibrary = [];


// Book constructor!
function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

   this.info = function() {
        console.log(`${title} by ${author}, ${pages} pages`);
        return `${title} by ${author}, ${pages} pages`;
    }
}

function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
}

function fillLibrary(myLibrary) {
    for(let i = 0; i < myLibrary.length; i++) {
        console.log(i);
    }
}

const theHobbit = new book("The Hobbit", "J.R.R Tolkien", 295);
const harryPotter = new book("Harry Potter", "Rowling", 295);
const algorithmsFourth = new book("Algorithms", "Sedgewick", 600);
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(algorithmsFourth);

fillLibrary(myLibrary);
console.log(`Books in Library: ${myLibrary.length}`);
console.log(`Books read: 0`);
total_books.textContent = `Books in Library: ${myLibrary.length}`;
total_read.textContent = `Books read: 0`;
