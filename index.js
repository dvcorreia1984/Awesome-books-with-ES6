import Books from './modules/books.js';

document.addEventListener('DOMContentLoaded', () => {
  const a = new Books();

  a.createObject();
  a.displayBooks();


  // add event listerner to id addbtn
  document.getElementById('addbtn').addEventListener('click', () => {
  a.addBooks();
  });

});
