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
    
     
      // var editButton = document.getElementsByClassName("editButton")[index];
      // editButton.addEventListener( "click" , controller.handleClickEdit);

      // var deleteButton = document.getElementsByClassName("deleteButton")[index];
      // deleteButton.addEventListener( "click" , controller.handleClickDelete);
    })
  },

  //Показать блок управления
  showControl: function(id, className){
    var el = document.getElementById(id);

    var divBook = document.createElement('div');
    divBook.id = "buttonGroup";
    divBook.innerHTML = `<div class="editButton">
                          <img src=${editIcon} />
                         </div>
                         <div class="deleteButton">
                          <img src=${deleteIcon} />
                         </div>`

    el.appendChild(divBook);

    //Скрыть блок управления
    var hide = document.getElementById(id);
    hide.addEventListener("mouseleave", this.hideControl);
  },

  hideControl: function(event){
    document.getElementById(event.target.id).removeChild(buttonGroup)
  },

 
  //Показать модальное окно
  showQuery: function(){
    document.getElementById("query").style.display = "block";
  },

  //Скрыть модальное окно
  closeQuery: function(){
    document.getElementById("query").style.display = "none";
  }






}
