import {model} from './model.js'
import {view} from './view.js'


export var controller = {

  //Обработчик события 'СОХРАНИТЬ КНИГУ'
  handleClickSave: function() {

    var book = {
      nameBook    : document.getElementById("name").value,
      authorBook  : document.getElementById("author").value,
      yearBook    : document.getElementById("year").value,
      numberPages : document.getElementById("numberPages").value
    }
    model.validation(book);

  },

  //Обработчик события 'ПОКАЗАТЬ ЭЛЕМЕНТЫ УПРАВЛЕНИЯ КНИГОЙ'
  showControl: function(event){
    let id =        event.target.id;
    let className = event.target.className;
    model.showControl(id, className);

  },
  
  //Обработчик события 'УДАЛИТЬ КНИГУ'
  handleClickDelete: function(event){
    var id = document.getElementById(event.target.id).parentElement.parentElement.className;
    model.handleClickDelete(id);
    view.closeQuery();
  },

  //Обработчик события 'ИЗМЕНИТЬ КНИГУ'
  handleClickEdit: function(event){
    var id = event.target.className;
    model.handleClickEdit(id);
  },

  //Обработчик события 'ВЫХОД ИЗ РЕЖИМА РЕДАКТИРОВАНИЯ КНИГИ'
  exitEdit: function(){
    view.exitEdit();
  },

  //Обработчик события 'СОХРАНИТЬ ИЗМЕНЕНИЯ'
  editBook: function(event){
    var id = Number(document.getElementById(event.target.id).parentElement.parentElement.className);
  
    var book = {
      nameBook    : document.getElementById("editName").value,
      authorBook  : document.getElementById("editAuthor").value,
      yearBook    : document.getElementById("editYear").value,
      numberPages : document.getElementById("editNumberPages").value,
      id          : id
    }
    model.editBook(id, book);
  },

  //Обработчик события 'ПОИСК КНИГИ'
  searchBook: function(){
    var searchValue = document.getElementById("search").value;
    model.searchBook(searchValue);
  },

  //Обработчик события 'СОРТИРОВКА'
  sortingBook: function(event){
    model.sortingBook(event.target.value);
  }

  







}
