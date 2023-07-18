import { Books } from './modules/books.js';

const listNav = document.getElementById('lists-nav');
const addNewNav = document.getElementById('add-new-nav');
const contactNav = document.getElementById('contactus-nav');

const addNew = document.getElementById('add-new');
const contactUs = document.getElementById('contactus');
const list = document.getElementById('lists');

addNewNav.addEventListener('click', () => {
  addNew.style.display = 'flex';
  contactUs.style.display = 'none';
  list.style.display = 'none';
});

contactNav.addEventListener('click', () => {
  contactUs.style.display = 'flex';
  addNew.style.display = 'none';
  list.style.display = 'none';
});

listNav.addEventListener('click', () => {
  list.style.display = 'flex';
  addNew.style.display = 'none';
  contactUs.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
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

