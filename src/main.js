import {controller} from './controller.js';
import {model} from './model.js';
import {view} from './view.js'

import './style/main.css';

window.onload = function(){
  (function() {
    var app = {

      init: function() {
        this.main();
        this.save()
        this.noDelete();
        model.showStorage();
      },

      main: function() {

      },

      save: function () {
        var el = document.getElementById("button");
        el.onclick = controller.handleClickSave;
      },

      noDelete: function(){
        var el = document.getElementById("no");
        el.onclick = view.closeQuery;
      },

      deleteBook: function(){
        var el = document.getElementById("yes");
        el.onclick = controller.handleClickDelete;
      }

    };

    app.init();
  }());
}
