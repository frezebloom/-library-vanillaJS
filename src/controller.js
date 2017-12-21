import {model} from './model.js'


export var controller = {

  handleClickSave: function() {
    var book = {
      nameBook    : document.getElementById("name").value,
      authorBook  : document.getElementById("author").value,
      yearBook    : document.getElementById("year").value,
      numberPages : document.getElementById("numberPages").value
    }
    model.saveNewBook(book);
  },

  handleClickEdit: function(event) {
    console.log(event.target.className);
  },


  handleClickDelete: function(){
    console.log(event.target.className);
  }


}
