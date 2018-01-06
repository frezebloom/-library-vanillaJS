/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.view = undefined;

var _edit = __webpack_require__(4);

var _edit2 = _interopRequireDefault(_edit);

var _delete = __webpack_require__(5);

var _delete2 = _interopRequireDefault(_delete);

var _controller = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var view = exports.view = {

  clearDom: function clearDom() {
    var el = document.getElementById("content").innerHTML = '';
  },

  //Показать книги
  showBooks: function showBooks(books) {

    books.forEach(function (item, key) {

      var el = document.getElementById("content");
      var divBook = document.createElement('div');
      divBook.className = "book";
      divBook.id = 'book' + item.id;
      divBook.innerHTML = '<div class="nameBook">' + item.nameBook + '\n                           <div class="authorBook">' + item.authorBook + '</div>\n                           ';
      el.appendChild(divBook);
    });
  },

  //Показать блок управления
  showControl: function showControl(id, className) {
    var el = document.getElementById(id);
    var token = id.replace(/\D+/g, "");
    var divBook = document.createElement('div');
    divBook.id = "buttonGroup";
    divBook.innerHTML = '<div id="editButton">\n                          <img src=' + _edit2.default + ' class=' + token + ' />\n                         </div>\n                         <div id="deleteButton">\n                          <img src=' + _delete2.default + ' class=' + token + ' />\n                         </div>';

    el.appendChild(divBook);

    //Скрыть блок управления
    var hide = document.getElementById(id);
    hide.addEventListener("mouseleave", this.hideControl);

    //Обработчик модального окна
    //ИЗМЕНИТЬ КНИГУ
    var editButton = document.getElementById("editButton");
    editButton.addEventListener("click", _controller.controller.handleClickEdit);

    //УДАЛИТЬ КНИГУ
    var deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", this.handleClickDelete);
  },

  hideControl: function hideControl(event) {
    if (document.getElementById("buttonGroup")) {
      document.getElementById(event.target.id).removeChild(buttonGroup);
    }
  },

  //Показать модальное окно УДАЛИТЬ КНИГУ
  handleClickDelete: function handleClickDelete(event) {
    var query = document.getElementById("query");
    query.style.display = "block";
    query.className = event.target.className;
  },

  //Скрыть модальное окно УДАЛИТЬ КНИГУ
  closeQuery: function closeQuery() {
    document.getElementById("query").style.display = "none";
  },

  //Редактировать книгу
  handleClickEdit: function handleClickEdit(nameBook, authorBook, yearBook, numberPages, id) {
    document.getElementById("editName").value = nameBook;
    document.getElementById("editAuthor").value = authorBook;
    document.getElementById("editYear").value = yearBook;
    document.getElementById("editNumberPages").value = numberPages;
    document.getElementById("newBook").style.display = "none";
    document.getElementById("editBook").style.display = "inline-block";
    document.getElementById("editBook").className = id;
  },

  //Выход из режима редактирования
  exitEdit: function exitEdit() {
    document.getElementById("editBook").style.display = "none";
    document.getElementById("newBook").style.display = "inline-block";
  },

  //Проверка
  validation: function validation(error) {
    document.getElementById("error").innerHTML = '';

    error.forEach(function (item, key) {
      var el = document.getElementById("error");
      var divBook = document.createElement('li');
      divBook.innerHTML = '' + item;
      el.appendChild(divBook);
    });
  }

};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = undefined;

var _model = __webpack_require__(2);

var _view = __webpack_require__(0);

var controller = exports.controller = {

  //Обработчик события 'СОХРАНИТЬ КНИГУ'
  handleClickSave: function handleClickSave() {

    var book = {
      nameBook: document.getElementById("name").value,
      authorBook: document.getElementById("author").value,
      yearBook: document.getElementById("year").value,
      numberPages: document.getElementById("numberPages").value
    };
    _model.model.validation(book);
  },

  //Обработчик события 'ПОКАЗАТЬ ЭЛЕМЕНТЫ УПРАВЛЕНИЯ КНИГОЙ'
  showControl: function showControl(event) {
    var id = event.target.id;
    var className = event.target.className;
    _model.model.showControl(id, className);
  },

  //Обработчик события 'УДАЛИТЬ КНИГУ'
  handleClickDelete: function handleClickDelete(event) {
    var id = document.getElementById(event.target.id).parentElement.parentElement.className;
    _model.model.handleClickDelete(id);
    _view.view.closeQuery();
  },

  //Обработчик события 'ИЗМЕНИТЬ КНИГУ'
  handleClickEdit: function handleClickEdit(event) {
    var id = event.target.className;
    _model.model.handleClickEdit(id);
  },

  //Обработчик события 'ВЫХОД ИЗ РЕЖИМА РЕДАКТИРОВАНИЯ КНИГИ'
  exitEdit: function exitEdit() {
    _view.view.exitEdit();
  },

  //Обработчик события 'СОХРАНИТЬ ИЗМЕНЕНИЯ'
  editBook: function editBook(event) {
    var id = Number(document.getElementById(event.target.id).parentElement.parentElement.className);

    var book = {
      nameBook: document.getElementById("editName").value,
      authorBook: document.getElementById("editAuthor").value,
      yearBook: document.getElementById("editYear").value,
      numberPages: document.getElementById("editNumberPages").value,
      id: id
    };
    _model.model.editBook(id, book);
  },

  //Обработчик события 'ПОИСК КНИГИ'
  searchBook: function searchBook() {
    var searchValue = document.getElementById("search").value;
    _model.model.searchBook(searchValue);
  },

  //Обработчик события 'СОРТИРОВКА'
  sortingBook: function sortingBook(event) {
    _model.model.sortingBook(event.target.value);
  }

};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = undefined;

var _view = __webpack_require__(0);

var model = exports.model = {

  //Вспомогательный метод работы с storage
  localStorage: function (_localStorage) {
    function localStorage() {
      return _localStorage.apply(this, arguments);
    }

    localStorage.toString = function () {
      return _localStorage.toString();
    };

    return localStorage;
  }(function () {
    var arr = [];
    for (var key in localStorage) {
      var showBooks = localStorage.getItem(key);
      arr.push(showBooks);
    }

    var books = arr.filter(function (x) {
      return x !== undefined && x !== null && x !== 'INFO';
    });

    var arr = [];
    books.forEach(function (item, index) {
      var books = JSON.parse(item);
      arr.push(books);
    });
    return arr;
  }),

  //Сохранить в хранилище
  handleClickSave: function handleClickSave(book) {
    localStorage.removeItem('loglevel:webpack-dev-server');

    if (localStorage.length === 0) {
      var size = localStorage.length + 1;
    } else {
      var arr = [];
      this.localStorage().forEach(function (item) {
        arr.push(item.id);
      });
      var size = Math.max.apply(null, arr) + 1;
    }

    book.id = Number(size);

    var newBook = JSON.stringify(book);
    localStorage.setItem(size, newBook);

    document.getElementById("name").value = '';
    document.getElementById("author").value = '';
    document.getElementById("year").value = '';
    document.getElementById("numberPages").value = '';

    this.showStorage();
  },

  //Проверка
  validation: function validation(book) {

    var error = [];
    var yearBook = Number(book.yearBook);
    var numberPages = Number(book.numberPages);

    for (var item in book) {
      if (book[item] === '') {
        var message = "Заполните все поля";
        error.push(message);
        break;
      }
    }

    if (book.nameBook.length < 4) {
      var message = "Название книги не может быть меньше 4 символов";
      error.push(message);
    }

    if (book.authorBook.length < 4) {
      var message = "Имя автора не может быть меньше 4 символов";
      error.push(message);
    }

    if (isNaN(yearBook) || book.yearBook.length < 4 || book.yearBook.length > 4) {
      var message = "Введите правильный год";
      error.push(message);
    }

    if (isNaN(numberPages)) {
      var message = "Введите правильное количество страниц";
      error.push(message);
    }

    if (error.length !== 0) {
      _view.view.validation(error);
      error = [];
    } else {
      this.handleClickSave(book);
    }
  },

  //Показать блок управления
  showControl: function showControl(id, className) {
    localStorage.removeItem('loglevel:webpack-dev-server');
    if (document.getElementById("buttonGroup")) {
      return false;
    }
    if (className === 'book') {
      _view.view.showControl(id, className);
    }
  },

  //Показать все элементы хранилища
  showStorage: function showStorage() {
    var arr = this.localStorage();
    _view.view.clearDom();
    _view.view.showBooks(arr);
    console.log(arr);
  },

  //Модальное окно удаления
  ModalWindowDeleteBook: function ModalWindowDeleteBook(id) {
    _view.view.showQuery();
  },

  //Удалить книгу
  handleClickDelete: function handleClickDelete(id) {
    localStorage.removeItem(id);
    this.showStorage();
  },

  //Изменить книгу
  handleClickEdit: function handleClickEdit(id) {
    var data = JSON.parse(localStorage.getItem(id));
    _view.view.handleClickEdit(data.nameBook, data.authorBook, data.yearBook, data.numberPages, id);
  },

  //Сохранить изменения
  editBook: function editBook(id, book) {
    var editBook = JSON.stringify(book);
    localStorage.setItem(id, editBook);
    this.showStorage();
  },

  //Поиск книги
  searchBook: function searchBook(searchValue) {
    var search = searchValue.toLowerCase();

    var arr = this.localStorage();

    var books = arr.filter(function (data) {
      var nameBook = data.nameBook.toLowerCase();
      var authorBook = data.authorBook.toLowerCase();
      var yearBook = data.yearBook.toLowerCase();
      var numberPages = data.numberPages.toLowerCase();
      return nameBook.includes(search) || authorBook.includes(search) || yearBook.includes(search) || numberPages.includes(search);
    });

    _view.view.clearDom();
    _view.view.showBooks(books);
  },

  //Сортировка по автору или по названию
  sortingBook: function sortingBook(data) {
    var books = this.localStorage();

    books.sort(function (a, b) {

      if (data === 'author') {
        var sortA = a.authorBook;
        var sortB = b.authorBook;
      }

      if (data === 'name') {
        var sortA = a.nameBook;
        var sortB = b.nameBook;
      }

      if (sortA < sortB) return -1;
      if (sortA > sortB) return 1;
    });

    _view.view.clearDom();
    _view.view.showBooks(books);
  }

};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _controller = __webpack_require__(1);

var _model = __webpack_require__(2);

var _view = __webpack_require__(0);

__webpack_require__(6);

window.onload = function () {
  (function () {
    var app = {

      init: function init() {
        this.main();
        this.handleClickSave();
        this.showControl();
        this.closeQuery();
        this.deleteBook();
        this.exitEdit();
        this.editBook();
        this.searchBook();
        this.sortingBook();
        _model.model.showStorage();
      },

      main: function main() {},

      //Сохранить документ
      handleClickSave: function handleClickSave() {
        var el = document.getElementById("button");
        el.onclick = _controller.controller.handleClickSave;
      },

      //Показать блок управления 
      showControl: function showControl() {
        var el = document.getElementById("content");
        el.onmouseover = _controller.controller.showControl;
      },

      //Скрыть модальное окно удаления книги(ПОЛЬЗОВАТЕЛЬ НАЖАЛ НЕТ)
      closeQuery: function closeQuery() {
        var el = document.getElementById("no");
        el.onclick = _view.view.closeQuery;
      },

      //Удалить книгу (ПОЛЬЗОВАТЕЛЬ НАЖАЛ ДА)
      deleteBook: function deleteBook() {
        var el = document.getElementById("yes");
        el.onclick = _controller.controller.handleClickDelete;
      },

      //Выход из режима редактирования книги
      exitEdit: function exitEdit() {
        var el = document.getElementById("exit");
        el.onclick = _controller.controller.exitEdit;
      },

      //Сохранить изменения книги
      editBook: function editBook() {
        var el = document.getElementById("editbutton");
        el.onclick = _controller.controller.editBook;
      },

      //Поиск
      searchBook: function searchBook() {
        var el = document.getElementById("buttonSearch");
        el.onclick = _controller.controller.searchBook;
      },

      //Сортировка
      sortingBook: function sortingBook() {
        var author = document.getElementsByName("sorting")[0];
        var name = document.getElementsByName("sorting")[1];
        author.onclick = _controller.controller.sortingBook;
        name.onclick = _controller.controller.sortingBook;
      }

    };

    app.init();
  })();
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "./edit.png";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "./delete.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(10)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat);", ""]);

// module
exports.push([module.i, "body{\n  margin: 0;\n  padding: 0;\n  background-image: url(" + __webpack_require__(9) + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-color: #ffffff;\n}\n#newBook{\n  display: inline-block;\n  margin: 3%;\n  border: 2px solid #282D32;\n  background: #FFF8DC;\n  width: 400px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12),\n              0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n#editBook{\n  display: none;\n  margin: 3%;\n  border: 2px solid #282D32;\n  background: #FFF8DC;\n  width: 400px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12),\n              0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n.buttonEditGroup{\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n}\n.editButton{\n  display: inline-block;\n  color: rgb(70, 70, 68);;\n  padding: 10px 30px 10px 30px;\n  border: 2px solid #282D32;\n  text-align: center;\n  cursor: pointer;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 30%;\n  font-size: 18px;\n  font-weight: bold}\n.editButton:hover{\n  background: rgb(70, 70, 68);;\n  text-align: center;\n  color: white;\n  transition: 1s ease-out;\n}\n.form{\n  display: block;\n  margin: 0 auto;\n  width: 80%;\n  margin-top: 20px;\n}\ninput{\n  border-radius: 5px;\n  border-color: #282D32;\n  background: #FFFFFF;\n  color: #282D32;\n  font-size: 15px;\n  outline:0;\n  text-align: center;\n  height: 30px;\n}\ninput:focus{\n  outline: 0;\n}\nlabel{\n  font-size: 20px}\n.button{\n  display: block;\n  color: rgb(70, 70, 68);;\n  padding: 10px 30px 10px 30px;\n  border: 2px solid #282D32;\n  text-align: center;\n  cursor: pointer;\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 30%;\n  font-size: 18px;\n  font-weight: bold}\n.button:hover{\n  background: rgb(70, 70, 68);;\n  text-align: center;\n  color: white;\n  transition: 1s ease-out;\n}\n.right{\n  display: inline-block;\n  margin-top: 3%;\n  width: 60%;\n  vertical-align: top;\n}\n.top{\n  display: inline-block;\n  vertical-align: top;\n  z-index: 555;\n  height: auto;\n  margin: 1%;\n  width: 39%;\n  padding: 10px 30px 10px 30px;\n  border: 2px solid #282D32;\n  background:#FFF8DC;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12),\n              0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n.sort{\n  vertical-align:middle;\n}\n\n.labText{\n  vertical-align:middle;\n}\n#buttonSearch{\n float: right;\n cursor: pointer;\n background: #FFF8DC;\n}\n#search{\n  width: 70%;\n  background: white;\n}\n\n\n#content{\n  display: block;\n  text-align: center;\n  margin-top: 3%;\n  width: 100%;\n  vertical-align: top;\n}\n.book{\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  float: left;\n  z-index: 555;\n  height: 100px;\n  margin: 1%;\n  width: 40%;\n  padding: 10px 30px 10px 30px;\n  border: 2px solid #282D32;\n  background: #FFF8DC;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12),\n              0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n.book:hover{\n  background: #f5f0b7; /* Old browsers */\n  background: -moz-linear-gradient(top, #f5f0b7 0%, #eee796 47%, #e7dd71 100%); \n  background: -webkit-linear-gradient(top, #f5f0b7 0%,#eee796 47%,#e7dd71 100%);\n  background: linear-gradient(to bottom, #f5f0b7 0%,#eee796 47%,#e7dd71 100%); \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f0b7', endColorstr='#e7dd71',GradientType=0 );\n  cursor: pointer;\n  transition: 2s ease-out;\n}\n#buttonGroup{\n  text-align: left;\n  vertical-align: bottom;\n  width: 100%;\n  cursor: pointer;\n}\nimg{\n  width: 35px;\n  height: 30px;\n}\n#editButton{\n  display: inline-block;\n  margin: 20px;\n}\n#editButton:hover{\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12),\n              0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n#deleteButton{\n  display: inline-block;\n}\n#deleteButton:hover{\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12),\n              0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n#query{\n  display: none;\n  position: fixed;\n  z-index: 999;\n  text-align: center;\n  background: #FFF8DC;\n  left: 50%;\n  top: 30%;\n  margin-left: -15%;\n  border: 1px solid #F5F8FA;\n  width: 30%;\n  font-size: 18px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12),\n              0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n.queryTitle{\n  display: block;\n  background: rgb(70, 70, 68);\n  color: #F5F8FA;\n  padding: 7px;\n  font-size: 18px;\n  text-align: center;\n}\n.message{\n  padding: 15px;\n}\n.queryButtonGroup{\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n#yes{\n  cursor: pointer;\n  display: inline-block;\n  padding: 15px;\n}\n#yes:hover{\n  box-shadow: 0 2px 2px 0 #00000024,\n              0 1px 5px 0 rgba(0, 0, 0, 0.12),\n              0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n#no{\n  cursor: pointer;\n  display: inline-block;\n  padding: 15px;\n}\n#no:hover{\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12),\n              0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n.errors{\n  color:rgb(230, 235, 240);\n  background: #546e7a;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12),\n              0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n#error li{\n  padding: 1px;\n}\n\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "./back.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);