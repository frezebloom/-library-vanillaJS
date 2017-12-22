import {view} from './view.js'

export var model = {

  //Сохранить в хранилище
  saveNewBook: function(book){

    var size = localStorage.length;
    console.log(size);
    book.id = size;
    var newBook = JSON.stringify(book);
    localStorage.setItem(size, newBook);

    this.showStorage();

  },

  //Показать все элементы хранилища
  showStorage: function(){

    var arr = [];
    for(var i = 0; i <= localStorage.length; i++) {
      var showBooks = JSON.parse(localStorage.getItem(i))
      arr.push(showBooks);
    }

    var books = arr.filter(function(x) {
      return x !== undefined && x !== null;
    });

    view.clearDom();
    view.showBooks(books);

  },

  //Модальное окно удаления
  ModalWindowDeleteBook: function(id){
    view.showQuery();
  },

// localStorage.removeItem(id);


}
