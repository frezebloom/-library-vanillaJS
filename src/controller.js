import {model} from './model.js'


export var controller = {

  //Обработчик события 'СОХРАНИТЬ КНИГУ'
  handleClickSave: function() {
    var book = {
      nameBook    : document.getElementById("name").value,
      authorBook  : document.getElementById("author").value,
      yearBook    : document.getElementById("year").value,
      numberPages : document.getElementById("numberPages").value
    }
    model.saveNewBook(book);
  },

  //Обработчик события 'УДАЛИТЬ КНИГУ'
  handleClickDelete: function(event){
    model.deleteBook(event.target.className);
  },

  //Обработчик события 'ИЗМЕНИТЬ КНИГУ'
  handleClickEdit: function(event) {
    console.log(event.target.className);
  },





}
