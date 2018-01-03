import {controller} from './controller.js';
import {model} from './model.js';
import {view} from './view.js'

import './style/main.css';

window.onload = function(){
  (function() {
    var app = {

      init: function() {
        this.main();
        this.handleClickSave();
        this.showControl();
        this.closeQuery();
        this.deleteBook();
        this.exitEdit();
        this.editBook();
        model.showStorage();
      },

      main: function() {

      },

      //Сохранить документ
      handleClickSave: function() {
        var el = document.getElementById("button");
        el.onclick = controller.handleClickSave;
      },

      //Показать блок управления 
      showControl: function(){
        var el = document.getElementById("content");
        el.onmouseover = controller.showControl;
      },

      //Скрыть модальное окно удаления книги(ПОЛЬЗОВАТЕЛЬ НАЖАЛ НЕТ)
      closeQuery: function(){
        var el = document.getElementById("no");
        el.onclick = view.closeQuery;
      },

      //Удалить книгу (ПОЛЬЗОВАТЕЛЬ НАЖАЛ ДА)
      deleteBook: function(){
        var el = document.getElementById("yes");
        el.onclick = controller.handleClickDelete;
      },

      //Выход из режима редактирования книги
      exitEdit: function(){
        var el = document.getElementById("exit");
        el.onclick = controller.exitEdit;
      },

      //Сохранить изменения книги
      editBook: function(){
        var el = document.getElementById("editbutton");
        el.onclick = controller.editBook;
      },

    };

    app.init();
  }());
}
