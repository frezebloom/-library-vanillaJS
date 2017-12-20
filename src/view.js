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
      divBook.innerHTML = item.nameBook;
      el.appendChild(divBook);
    })

  }
}
