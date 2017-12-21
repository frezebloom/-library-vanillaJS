import editIcon from './img/edit.png';
import deleteIcon from './img/delete.png';
import {controller} from './controller.js';

export var view = {

  clearDom: function(){
    var el = document.getElementById("content").innerHTML = '';
  },

  showBooks: function (books) {

    books.map(function(item, index){
      var el = document.getElementById("content");

      var divBook = document.createElement('div');
      divBook.className = "book";
      divBook.id = item.id;
      divBook.innerHTML = `<div class="nameBook">${item.nameBook}
                           <div class="authorBook">${item.authorBook}</div>
                           <div class="buttonGroup">
                            <div class="editButton">
                              <img src=${editIcon} class=${item.id} />
                            </div>
                            <div class="deleteButton">
                              <img src=${deleteIcon} class=${item.id} />
                            </div>
                           </div>
                           `
      el.appendChild(divBook);

      var editButton = document.getElementsByClassName("editButton")[index];
      editButton.addEventListener( "click" , controller.handleClickEdit);

      var deleteButton = document.getElementsByClassName("deleteButton")[index];
      deleteButton.addEventListener( "click" , controller.handleClickDelete);
    })
  },

  showQuery: function(){
    document.getElementById("query").style.display = "block";

  }






}
