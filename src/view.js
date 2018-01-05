import editIcon from './img/edit.png';
import deleteIcon from './img/delete.png';
import {controller} from './controller.js';

export var view = {

  clearDom: function(){
    var el = document.getElementById("content").innerHTML = '';
  },

  //Показать книги
  showBooks: function (books) {

    books.forEach(function(item, key){

      var el = document.getElementById("content");
      var divBook = document.createElement('div');
      divBook.className = "book";
      divBook.id = `book${item.id}`;
      divBook.innerHTML = `<div class="nameBook">${item.nameBook}
                           <div class="authorBook">${item.authorBook}</div>
                           `
      el.appendChild(divBook);

    });

  },

  //Показать блок управления
  showControl: function(id, className){
    var el = document.getElementById(id);
    var token = id.replace(/\D+/g,"");
    var divBook = document.createElement('div');
    divBook.id = "buttonGroup";
    divBook.innerHTML = `<div id="editButton">
                          <img src=${editIcon} class=${token} />
                         </div>
                         <div id="deleteButton">
                          <img src=${deleteIcon} class=${token} />
                         </div>`
    
    el.appendChild(divBook);

    //Скрыть блок управления
    var hide = document.getElementById(id);
    hide.addEventListener("mouseleave", this.hideControl);

    //Обработчик модального окна
    //ИЗМЕНИТЬ КНИГУ
    var editButton = document.getElementById("editButton");
    editButton.addEventListener( "click" , controller.handleClickEdit);

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
    var query = document.getElementById("query");
    query.style.display = "block";
    query.className = event.target.className;
  },

   //Скрыть модальное окно УДАЛИТЬ КНИГУ
   closeQuery: function(){
    document.getElementById("query").style.display = "none";
  },

  //Редактировать книгу
  handleClickEdit: function(nameBook, authorBook, yearBook, numberPages, id){
    document.getElementById("editName").value = nameBook;
    document.getElementById("editAuthor").value = authorBook;
    document.getElementById("editYear").value = yearBook;
    document.getElementById("editNumberPages").value = numberPages;
    document.getElementById("newBook").style.display = "none";
    document.getElementById("editBook").style.display = "inline-block";
    document.getElementById("editBook").className = id;
    
  },

  //Выход из режима редактирования
  exitEdit: function(){
    document.getElementById("editBook").style.display = "none";
    document.getElementById("newBook").style.display = "inline-block";
  },

  //Проверка
  validation: function(error){
    document.getElementById("error").innerHTML = '';

    error.forEach(function(item, key){
      var el = document.getElementById("error");
      var divBook = document.createElement('li');
      divBook.innerHTML = `${item}`;
      el.appendChild(divBook);
    });  
     
  }

}