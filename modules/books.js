export default class Books {
  createObject() {
    this.books = [
      {
        Id: 1,
        title: 'Lorem ipsum',
        author: 'Testeroo Testyy',
      },
      {
        Id: 2,
        title: 'Second Books',
        author: 'Testeroo Testyy',
      },
    ];
    if (localStorage.getItem('books') != null) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

  // Display the book list
  displayBooks() {
    const x = this.books;
    let book = '';
    let displayType = 1;
    for (let i = 0; i < x.length; i += 1) {
      book += `<div id='books-container${displayType}'>`;
      book += `<div id='book-author'><p id="booktext">"${x[i].title}" by ${x[i].author}</p></div>`;
      book += `<button class="remove-btn" data-book-id="${x[i].Id}">Remove</button></div>`;
      if (displayType === 1) {
        displayType = 2;
      } else {
        displayType = 1;
      }
    }
    document.getElementById('display').innerHTML = book;
    this.addRemoveButtonListeners();
  }

  // Add books
  addBooks() {
    const x = this.books;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title !== '' && author !== '') {
      const bookId = x.length + 1;
      x.push({ Id: bookId, title, author });
      this.displayBooks();
      document.querySelector('form').reset();
      this.saveToLocalStorage();
    }
  }

  // Remove books from the list
  removeBooks(removeId) {
    const bookIndex = this.books.findIndex((book) => book.Id === removeId);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
      this.displayBooks();
      this.saveToLocalStorage();
    }
  }

  // Save to local storage
  saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  // Add event listeners to remove buttons
  addRemoveButtonListeners() {
    const removeButtons = document.getElementsByClassName('remove-btn');
    for (let i = 0; i < removeButtons.length; i += 1) {
      const button = removeButtons[i];
      // eslint-disable-next-line prefer-destructuring
      const bookId = button.dataset.bookId;
      button.addEventListener('click', () => {
        // eslint-disable-next-line radix
        this.removeBooks(parseInt(bookId));
      });
    }
  }
}
