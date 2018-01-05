import {view} from './view.js'

export var model = {

  //Вспомогательный метод работы с storage
  localStorage: function(){
    var arr = [];
    for (var key in localStorage){
      var showBooks = localStorage.getItem(key);
      arr.push(showBooks);
    }

    var books = arr.filter(function(x) {
      return x !== undefined && x !== null && x !== 'INFO';
    });

    var arr = [];
    books.forEach(function(item, index){
      var books = JSON.parse(item);
      arr.push(books);
    });
    return arr;
  },

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
    var arr = this.localStorage();
    view.clearDom();
    view.showBooks(arr);
    console.log(arr);
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
    view.handleClickEdit(data.nameBook, data.authorBook, data.yearBook, data.numberPages, id);
  },

  //Сохранить изменения
  editBook: function(id, book){
    var editBook = JSON.stringify(book);
    localStorage.setItem(id, editBook);
    this.showStorage();
  },

  //Поиск книги
  searchBook: function(searchValue){
    var search = searchValue.toLowerCase();
    
    var arr = this.localStorage();

    var books = arr.filter(function(data){
      let nameBook =    data.nameBook.toLowerCase();
      let authorBook =  data.authorBook.toLowerCase();
      let yearBook =    data.yearBook.toLowerCase();
      let numberPages = data.numberPages.toLowerCase();
      return nameBook.includes(search)   || 
             authorBook.includes(search) || 
             yearBook.includes(search)   || 
             numberPages.includes(search);
    });

    view.clearDom();
    view.showBooks(books);
  },

  //Сортировка по автору или по названию
  sortingBook: function(data){
    var books = this.localStorage();
    var sortBy = 'nameBook';
  
    books.sort(function(a, b){

      if(data === 'author'){
        var sortA = a.authorBook;
        var sortB = b.authorBook;
      }
  
      if(data ==='name'){
        var sortA = a.nameBook;
        var sortB = b.nameBook;
      }

      if(sortA < sortB) return -1;
      if(sortA > sortB) return 1;

    });

    view.clearDom();
    view.showBooks(books);
  }




}
