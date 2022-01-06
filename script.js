let total_books = document.getElementById("test");
let total_read = document.getElementById("total_read");
let library_contents = document.getElementById("library_contents");
let add_book_btn = document.getElementById("add_btn");
let delete_book_btn = document.getElementById("delete_btn");

let myLibrary = [];


// Book constructor!
function book(title, author, pages, publish_date) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publish_date = publish_date;

   this.info = function() {
        return `${title} by ${author}, ${pages} pages`;
    }
}

// add_book_btn functionality.
add_book_btn.addEventListener("click", () => console.log("click!"));

// Add book object to myLibrary array.
function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
}

// Use myLibrary info to fill webpage with library content.
function fillLibrary(myLibrary) {
    for(let i = 0; i < myLibrary.length; i++) {
        // Create the display card.
        const card = document.createElement("div");
        card.className = "card";

        // Create all children elements.
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const publish_date = document.createElement("p");

        // Add Text Content to each text element.
        title.textContent = "Title: " + myLibrary[i].title;
        author.textContent = "Author: " + myLibrary[i].author;
        pages.textContent = "Pages: " + myLibrary[i].pages;
        publish_date.textContent = "Publish date: " + myLibrary[i].publish_date;

        // Append new elements to the card.
        card.append(title, author, pages, publish_date);
        library_contents.appendChild(card);
    }
}

// Add books to library for testing / visualization -> delete later!
const theHobbit = new book("The Hobbit", "J.R.R Tolkien", 295, "11/12/1930");
const harryPotter2 = new book("Harry Potter and the Chamber of Secrets", "J.K Rowling", 295, "01/25/1999");
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter2);


fillLibrary(myLibrary);
total_books.textContent = `Books in Library: ${myLibrary.length}`;
total_read.textContent = `Books read: 0`;
