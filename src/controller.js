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
    model.handleClickSave(book);
  },

  //Обработчик события 'ПОКАЗАТЬ ЭЛЕМЕНТЫ УПРАВЛЕНИЯ КНИГОЙ'
  showControl: function(event){

    let id =        event.target.id;
    let className = event.target.className;
    model.showControl(id, className);

  },







}
