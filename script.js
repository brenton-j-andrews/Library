let total_books = document.getElementById("test");
let total_read = document.getElementById("total_read");
let library_contents = document.getElementById("library_contents");
let add_book_btn = document.getElementById("add_btn");
let delete_book_btn = document.getElementById("delete_btn");
let new_book_form = document.getElementById("newBook");
let new_book_container = document.getElementById("form-container")
let submit_form_btn = document.getElementById("submit-form");
let clear_form_btn = document.getElementById("clear-form")
let close_form_btn = document.getElementById("close-form");
let myLibrary = [];


// Book object constructor!
function book(title, author, pages, publish_date) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publish_date = publish_date;

   this.info = function() {
        return `${title} by ${author}, ${pages} pages`;
    }
}


// Add event listeners to all buttons.
add_book_btn.addEventListener("click", () => {
    new_book_form.style.display = "block";
});

clear_form_btn.addEventListener("click", () => {
    new_book_container.reset();
});

close_form_btn.addEventListener("click", () => {
    new_book_form.style.display = "none";
});

delete_book_btn.addEventListener("click", () => {
    let cards = library_contents.childNodes;
    for (let i = 0; i < cards.length; i++) {
        let child = cards[i];
        child.classList.add("delete");
        console.log(child.className);
    }
    console.log(cards.length);
});


// Add new book to library with form submit button.
new_book_container.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    let new_book = new book(formProps['book-title'], formProps['book-author'], formProps['book-pages'], formProps['book-pub-date']);
    addBookToLibrary(new_book);
    new_book_container.reset();
    new_book_form.style.display = "none";
    fillLibrary(myLibrary);
});


// Add book object to myLibrary array.
function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
}


// Use myLibrary info to fill webpage with library content cards.
function fillLibrary(myLibrary) {
    library_contents.innerHTML = "";
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

        // Update library stats.
        statUpdate();
    }
}


// Update stats on upper right page.
function statUpdate() {
    total_books.textContent = `Books in Library: ${myLibrary.length}`;
    total_read.textContent = `Books read: 0`;
}


// Add books to library for testing / visualization -> delete later!
const harryPotter2 = new book("Harry Potter and the Chamber of Secrets", "J.K Rowling", 295, "01-25-1999");
addBookToLibrary(harryPotter2);
fillLibrary(myLibrary);
