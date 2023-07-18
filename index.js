import { Books } from './modules/books.js';
import { setupNavigation } from './modules/navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  const a = new Books();
  a.createObject();
  a.displayBooks();
  a.saveToLocalStorage();

  document.getElementById('addbtn').addEventListener('click', () => {
    a.addBooks();
  });

  // Remove button event listener
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
      const bookId = parseInt(event.target.dataset.bookId);
      a.removeBooks(bookId);
    }
  });
});

