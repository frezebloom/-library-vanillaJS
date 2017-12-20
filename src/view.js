import editIcon from './img/edit.png';
import deleteIcon from './img/delete.png';

export var view = {

  clearDom: function(){
    var el = document.getElementById("content").innerHTML = '';
  },

  showBooks: function (books) {

    books.map(function(item, index){
      console.log(item);
      var el = document.getElementById("content");
      var divBook = document.createElement('div');
      divBook.className = "book"
      divBook.id = item.id;
      divBook.innerHTML = `<div class="nameBook">${item.nameBook}
                           <div class="authorBook">${item.authorBook}</div>
                           <div class="buttonGroup">
                            <div class="editButton">
                              <img src=${editIcon} />
                            </div>
                            <div class="deleteButton">
                              <img src=${deleteIcon} />
                            </div>
                           </div>
                           `
      el.appendChild(divBook);
    })

  }
}
