import {view} from './view.js'

export var model = {

  saveNewBook: function(book){

    var size = localStorage.length;
    book.id = size;
    var newBook = JSON.stringify(book);
    localStorage.setItem(size, newBook);

    this.showStorage();

  },


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
    
  }

}
