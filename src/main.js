import {controller} from './controller.js';
import './style/main.css';

window.onload = function(){
  (function() {
    var app = {

      init: function() {
        this.main();
        this.save()
      },

      main: function () {

      },

      save: function () {
        var el = document.getElementById("button");
        el.onclick = controller.handleClickSave;
      }


    };

    app.init();
  }());
}
