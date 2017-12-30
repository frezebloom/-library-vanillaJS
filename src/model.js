import {view} from './view.js'

export var model = {

  //Сохранить в хранилище
  handleClickSave: function(book){
    localStorage.removeItem('loglevel:webpack-dev-server');
    var size = localStorage.length + 1;
    
    book.id = size;
    var newBook = JSON.stringify(book);
    localStorage.setItem(size, newBook);

    document.getElementById("name").value = '';
    document.getElementById("author").value = '';
    document.getElementById("year").value = '';
    document.getElementById("numberPages").value = '';

    this.showStorage();

  },

  //Показать блок управления
  showControl: function(id, className){
    localStorage.removeItem('loglevel:webpack-dev-server');
    if(document.getElementById("buttonGroup")){
      return false;
    }
    if(className === 'book'){
      view.showControl(id, className);
    }
  },


  
  //Показать все элементы хранилища
  showStorage: function(){

    var arr = [];
    for (var key in localStorage){
      var showBooks = localStorage.getItem(key);
      arr.push(showBooks);
      
    }

    var books = arr.filter(function(x) {
      return x !== undefined && x !== null && x !== 'INFO';
    });

    view.clearDom();
    view.showBooks(books);

  },

  //Модальное окно удаления
  ModalWindowDeleteBook: function(id){
    view.showQuery();
  },

  //Удалить книгу
  handleClickDelete: function(id){
    localStorage.removeItem(id);
    this.showStorage();
  },

  //Изменить книгу
  handleClickEdit: function(id){
    var data = JSON.parse(localStorage.getItem(id));
    view.handleClickEdit(data.nameBook, data.authorBook, data.yearBook, numberPages, id);
  }



}
