import editIcon from './img/edit.png';
import deleteIcon from './img/delete.png';
import {controller} from './controller.js';

export var view = {

  clearDom: function(){
    var el = document.getElementById("content").innerHTML = '';
  },

  //Показать все книги
  showBooks: function (books) {

    books.map(function(item, index){
      var el = document.getElementById("content");

      var divBook = document.createElement('div');
      divBook.className = "book";
      divBook.id = `book${item.id}`;
      divBook.innerHTML = `<div class="nameBook">${item.nameBook}
                           <div class="authorBook">${item.authorBook}</div>
                           `
      el.appendChild(divBook);
    })
  },

  //Показать блок управления
  showControl: function(id, className){
    var el = document.getElementById(id);

    var divBook = document.createElement('div');
    divBook.id = "buttonGroup";
    divBook.innerHTML = `<div id="editButton">
                          <img src=${editIcon} />
                         </div>
                         <div id="deleteButton">
                          <img src=${deleteIcon} />
                         </div>`

    el.appendChild(divBook);

    //Скрыть блок управления
    var hide = document.getElementById(id);
    hide.addEventListener("mouseleave", this.hideControl);

    //Обработчик модального окна
    //ИЗМЕНИТЬ КНИГУ
    var editButton = document.getElementById("editButton");
    editButton.addEventListener( "click" , this.handleClickEdit);

    //УДАЛИТЬ КНИГУ
    var deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener( "click" , this.handleClickDelete);
  },

  hideControl: function(event){
    if(document.getElementById("buttonGroup")){
      document.getElementById(event.target.id).removeChild(buttonGroup);
    }
  },

  //Показать модальное окно УДАЛИТЬ КНИГУ
  handleClickDelete: function(event){
    document.getElementById("query").style.display = "block";
  },

   //Скрыть модальное окно УДАЛИТЬ КНИГУ
   closeQuery: function(){
    document.getElementById("query").style.display = "none";
  },

  //Модальное окно изменить КНИГУ
  handleClickEdit: function(){

  },

 






}
