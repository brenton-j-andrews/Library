let total_books = document.getElementById("total-books");
let add_book_btn = document.getElementById("add_btn");
let delete_book_btn = document.getElementById("delete_btn");
let new_book_form = document.getElementById("newBook");

// Oraganize library buttons.
let organize_by = document.getElementById("organize_by");
let order_by = document.getElementById("order_by");

// New book form buttons.
let new_book_container = document.getElementById("form-container")
let submit_form_btn = document.getElementById("submit-form");
let clear_form_btn = document.getElementById("clear-form")
let close_form_btn = document.getElementById("close-form");


// Library content variables.
let library_contents = document.getElementById("library_contents");
let cards = library_contents.childNodes;
let myLibrary = [];
let delete_mode = false;
console.log(order_by.value);


// Book object constructor and prototype functions.
function book(title, author, pages, publish_date, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publish_date = publish_date;
    this.index = index;
    this.read = true;
}

book.prototype.info = function() {
    return `${title} by ${author}, ${pages} pages`;
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


// Toggle "delete_mode", which allows you to delete book cards.
delete_book_btn.addEventListener("click", () => {

    // if false -> activate delete mode, add "click" eventlistener to each card object to remove corresponding book object from myLibrary.
    if (!delete_mode) {
        delete_mode = true;
        delete_book_btn.textContent = "Click when done";
        cards.forEach(card => {
            card.classList.add("delete");
            card.addEventListener("click", deleteBtnlListener, false);

            function deleteBtnlListener(e) {
                myLibrary.splice(Number(card.id), 1);
                console.log(myLibrary.length);
                delete_book_btn.textContent = "Delete a book";
                fillLibrary(myLibrary);
                delete_mode = false;
            }
        })
    } 
})


// Add new book to library with form submit button.
new_book_container.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    let new_book = new book(formProps['book-title'], formProps['book-author'], formProps['book-pages'], formProps['book-pub-date'], myLibrary.length - 1);
    addBookToLibrary(new_book);
    new_book_container.reset();
    new_book_form.style.display = "none";
    fillLibrary(myLibrary);
})


// Add book object to myLibrary array.
function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
}


// Use myLibrary info to fill webpage with library content cards.
function fillLibrary(myLibrary) {
    library_contents.innerHTML = "";
    readBooksCount = 0;
    for(let i = 0; i < myLibrary.length; i++) {

        // Create the display card.
        const card = document.createElement("div");
        card.className = "card";

        // Create all children elements.
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const publish_date = document.createElement("p");
        card.id = i;

        // Create "read" checkbox and count number of read books.
        const read_check_div = document.createElement("div");
        const read_check_input = document.createElement("input");
        read_check_div.className = "read-book-checkbox";
        read_check_div.textContent = "Read: "
        read_check_input.type = "checkbox";
        read_check_input.checked = myLibrary[i].read;

        read_check_input.addEventListener("click", () => {
            if (!read_check_input.checked) {
                card.classList.add("unread-card");
            } else {
                card.classList.remove("unread-card");
            }
        })
        read_check_div.append(read_check_input);

        // Add Text Content to each text element.
        title.textContent = "Title: " + myLibrary[i].title;
        author.textContent = "Author: " + myLibrary[i].author;
        pages.textContent = "Pages: " + myLibrary[i].pages;
        publish_date.textContent = "Publish date: " + myLibrary[i].publish_date;

        // Append new elements to card_content div.
        card.append(title, author, pages, publish_date);
        card.append(read_check_div);
        library_contents.appendChild(card);
    }

    // Update library stats.
    statUpdate();
}


// Update stats on upper right page.
function statUpdate() {
    total_books.textContent = `Books in Library: ${myLibrary.length}`;
}


// Add books to library for testing / visualization -> delete later maybe!
const harryPotter2 = new book("Harry Potter and the Chamber of Secrets", "J.K Rowling", 295, "01-25-1999", 0);
const theHobbit = new book("The Hobbit", "J.R.R Tolkien", 295, "09-21-1937", 1);
const algorithmsForth = new book("Algorithms, Forth Ed", "Sedgewick", 610, "10-10-2011", 2);
const calcProblems = new book("Calculus, Forth Ed", "Lang", 950, "10-10-2011", 2);
addBookToLibrary(harryPotter2);
addBookToLibrary(theHobbit);
addBookToLibrary(algorithmsForth);
addBookToLibrary(calcProblems);
fillLibrary(myLibrary);
