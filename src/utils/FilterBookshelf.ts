// let timeoutRef: NodeJS.Timeout;

// // Execute filterBooks with slight delay
// function delayFilter() {
//     clearTimeout(timeoutRef);
//     timeoutRef = setTimeout(filterBooks, 200);
// }

// function filterBooks() {
//     // Declare variables
//     let input, filter, bookTitle, bookAuthor;

//     /*    Captures input field,
//           makes input all upper case,
//           selects library grid,
//           selects all interior h3 and p elements (title and author) */
//     input = document.getElementById('filter-books');
//     filter = input.value.toUpperCase();
//     books = document.getElementsByClassName('book__link');

//     // For each book...
//     for (book of books) {
//         // Grab the title and author...
//         bookTitle = book.children[0].children[1].innerText;
//         bookAuthor = book.children[0].children[2].innerText;
//         // Check to see if the book OR author matches the filter
//         if (bookTitle.toUpperCase().indexOf(filter) > -1 || bookAuthor.toUpperCase().indexOf(filter) > -1) {
//             // Display the card
//             book.style.display = '';
//         } else {
//             // Hide the card
//             book.style.display = 'none';
//         }
//     }
// }

// // Grab the form that does the filtering
// const filterForm = document.getElementById('filterForm');
// // Prevent user from hitting enter on the keyboard bc it refreshes the page
// filterForm.addEventListener('submit', (event) => {
//     event.preventDefault();
// });
// // Resets any text in the form when the page reloads
// window.addEventListener('unload', (event) => {
//     document.getElementById('filter-books').value = '';
// });
// // Trigger event to filter books
// filterForm.addEventListener('keyup', delayFilter);
