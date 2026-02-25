// Create an array of book objects where each book has:

// { title: "Book Name", author: "Author Name", isAvailable: true }

// Write functions to:
//     List all books.
//     Mark a book as borrowed (isAvailable = false).
//     Return a book (isAvailable = true).
//     Find books by a specific author.

const books = [
  { title: "Book1", author: "Author1", isAvailable: true },
  { title: "Book2", author: "Author2", isAvailable: true },
  { title: "Book3", author: "Author3", isAvailable: true },
  { title: "Book4", author: "Author4", isAvailable: true },
  { title: "Book5", author: "Author5", isAvailable: true },
];

function listOfBooks() {
  return books;
}

function borrowBook(title) {
  if (typeof title !== "string") {
    return "Title must be a string";
  }
  for (const book of books) {
    if (book.title === title) {
      if (book.isAvailable) {
        book.isAvailable = false;
        return `Book "${title}" borrowed successfully.`;
      } else {
        return `Book "${title}" is already borrowed.`;
      }
    }
  }
  // const book = books.find(b => b.title === title);
  // if(book) {
  //     if(book.isAvailable) {
  //         book.isAvailable = false;
  //         return `Book "${title}" borrowed successfully.`;
  //     } else {
  //         return `Book "${title}" is already borrowed.`;
  //     }
  // }
  return `Book "${title}" not found.`;
}

function returnBook(title) {
  if (typeof title !== "string") {
    return "Title must be a string";
  }
  for (const book of books) {
    if (book.title === title) {
      if (!book.isAvailable) {
        book.isAvailable = true;
        return `Book "${title}" returned successfully.`;
      } else {
        return `Book "${title}" was not borrowed.`;
      }
    }
  }
  return `Book "${title}" not found.`;
}

function findBooksByAuthor(author) {
  if (typeof author !== "string") {
    return "Author must be a string";
  }
  const foundBooks = [];
  for (const book of books) {
    if (book.author === author) {
      foundBooks.push(book);
    }
  }
  return foundBooks;
}

console.log(listOfBooks());
console.log(borrowBook("Book1"));
console.log(borrowBook("Book1"));
console.log(returnBook("Book1"));
console.log(returnBook("Book1"));
console.log(findBooksByAuthor("Author3"));

books.push({ title: "Book6", author: "Author1", isAvailable: true });
console.log(findBooksByAuthor("Author1"));

// closures
