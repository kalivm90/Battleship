/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\n(0,_modules_UI__WEBPACK_IMPORTED_MODULE_1__.displayController)();\n\n//# sourceURL=webpack://battleship/./src/Main.js?");

/***/ }),

/***/ "./src/modules/Board.js":
/*!******************************!*\
  !*** ./src/modules/Board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Player = /*#__PURE__*/function () {\n  function Player(name) {\n    _classCallCheck(this, Player);\n    this.name = name;\n    this.board = new Board();\n  }\n  _createClass(Player, [{\n    key: \"shuffleBoard\",\n    value: function shuffleBoard() {\n      this.board = new Board();\n    }\n  }]);\n  return Player;\n}();\nvar Square = /*#__PURE__*/_createClass(function Square(row, col) {\n  var _this = this;\n  _classCallCheck(this, Square);\n  _defineProperty(this, \"info\", function () {\n    return {\n      \"row\": _this.row,\n      \"col\": _this.col,\n      \"ship\": _this.ship,\n      \"hit\": _this.hit\n    };\n  });\n  _defineProperty(this, \"hasShip\", function () {\n    return _this.ship;\n  });\n  this.row = row;\n  this.col = col;\n  this.ship = false;\n  this.hit = false;\n});\nvar Board = /*#__PURE__*/_createClass(function Board() {\n  var _this2 = this;\n  _classCallCheck(this, Board);\n  _defineProperty(this, \"getOpenSquares\", function () {\n    var open = [];\n    _this2.board.forEach(function (row, index) {\n      row.forEach(function (col) {\n        if (!col.hit) {\n          open.push(col);\n        }\n      });\n    });\n    _this2._shuffleArray(open);\n    return open;\n  });\n  _defineProperty(this, \"getBoard\", function () {\n    return _this2.board;\n  });\n  _defineProperty(this, \"setHit\", function (row, col) {\n    _this2.board[row][col].hit = true;\n  });\n  _defineProperty(this, \"_makeBoard\", function () {\n    var SIZE = 10;\n    return Array.from({\n      \"length\": SIZE\n    }, function (_, i) {\n      return Array.from({\n        \"length\": SIZE\n      }, function (_, j) {\n        return new Square(i, j);\n      });\n    });\n  });\n  _defineProperty(this, \"_placeShips\", function () {\n    // loop through ship types\n    for (var i = 0; i < _this2.shipTotal; i++) {\n      var ship = _this2.ships.shift();\n      var placed = false;\n      // while ship hasnt been placed yet...\n      while (!placed) {\n        var _this2$_getRandomSqua = _this2._getRandomSquare(),\n          _this2$_getRandomSqua2 = _slicedToArray(_this2$_getRandomSqua, 2),\n          row = _this2$_getRandomSqua2[0],\n          col = _this2$_getRandomSqua2[1];\n        _this2._shuffleArray(_this2.directions);\n        // if 1 square radius does not contain ship\n        if (_this2._checkSurroundings(row, col)) {\n          // loop through left, right, top, and bottom squares\n          for (var dir = 0; dir < _this2.directions.length; dir++) {\n            if (_this2._placeShipInDirection(ship, row, col, _this2.directions[dir])) {\n              placed = true;\n              break;\n            }\n          }\n        }\n      }\n    }\n  });\n  _defineProperty(this, \"_getRandomSquare\", function () {\n    var row = _this2._getRandomNum();\n    var col = _this2._getRandomNum();\n    return [row, col];\n  });\n  _defineProperty(this, \"_placeShipInDirection\", function (ship, row, col, direction) {\n    var newR = row + direction[0];\n    var newC = col + direction[1];\n    // if outside boundary\n    if (newR < 0 || newR >= 10 || newC < 0 || newC >= 10 || _this2.board[newR][newC].ship) {\n      return false;\n    }\n    // loop through squares in direction n=ship length\n    for (var i = 1; i < ship; i++) {\n      var r = row + i * direction[0];\n      var c = col + i * direction[1];\n      // if outside boundary or has a ship or radius squares have ships\n      if (r < 0 || r >= 10 || c < 0 || c >= 10 || _this2.board[r][c].hasShip() || !_this2._checkSurroundings(r, c)) {\n        return false;\n      }\n    }\n    // set ships on clean squares\n    for (var _i2 = 0; _i2 < ship; _i2++) {\n      var _r2 = row + _i2 * direction[0];\n      var _c = col + _i2 * direction[1];\n      _this2.board[_r2][_c].ship = true;\n    }\n    return true;\n  });\n  _defineProperty(this, \"_checkSurroundings\", function (row, col) {\n    for (var i = 0; i < _this2.surrounding.length; i++) {\n      var sR = row + _this2.surrounding[i][0];\n      var cR = col + _this2.surrounding[i][1];\n      if (sR < 0 || sR > 9 || cR < 0 || cR > 9) {\n        continue;\n      } else if (_this2.board[sR][cR].hasShip()) {\n        return false;\n      }\n    }\n    return true;\n  });\n  _defineProperty(this, \"_getRandomNum\", function () {\n    var rangeEnd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n    return Math.floor(Math.random() * rangeEnd);\n  });\n  _defineProperty(this, \"_shuffleArray\", function (array) {\n    for (var i = array.length - 1; i > 0; i--) {\n      var j = Math.floor(Math.random() * (i + 1));\n      var _ref = [array[j], array[i]];\n      array[i] = _ref[0];\n      array[j] = _ref[1];\n    }\n  });\n  _defineProperty(this, \"prettyPrint\", function () {\n    _this2.board.map(function (row) {\n      console.log(row.map(function (cell) {\n        return cell.ship ? \"B\" : \"#\";\n      }).join(\"\"));\n    });\n  });\n  this.board = this._makeBoard();\n  this.ships = [5, 4, 3, 3, 2, 2, 1];\n  this.shipTotal = 7;\n  this.directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];\n  this.surrounding = [].concat(_toConsumableArray(this.directions), [[1, 1], [1, -1], [-1, 1], [-1, -1]]);\n  this._placeShips();\n});\n\n//# sourceURL=webpack://battleship/./src/modules/Board.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayController\": () => (/* binding */ displayController)\n/* harmony export */ });\n/* harmony import */ var _assets_images_dot_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/dot.png */ \"./src/assets/images/dot.png\");\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ \"./src/modules/Util.js\");\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board */ \"./src/modules/Board.js\");\n/* START AT PLAYER TURN IN RENDER BOARD */\n\n\n\nvar Nav = function () {\n  var navbar = document.querySelector(\"nav\");\n  var banner = navbar.querySelector(\".nav-center span\");\n  var setBanner = function setBanner(turn) {\n    return banner.innerHTML = \"\".concat(turn, \"'s turn\");\n  };\n  var setBannerError = function setBannerError(message, lastPLayer) {\n    banner.innerHTML = \"\".concat(message);\n    banner.style.color = \"maroon\";\n    setTimeout(function () {\n      banner.style.color = \"green\";\n      Nav.setBanner(lastPLayer);\n    }, 700);\n  };\n  return {\n    setBanner: setBanner,\n    setBannerError: setBannerError\n  };\n}();\nvar renderBoard = function renderBoard(player) {\n  // size of columns and rows\n  var SIZE = 10;\n  var container = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.createElements)(\"div\", {\n    \"class\": \"\".concat(player.name, \"-board\")\n  });\n  var assemble = function assemble() {\n    [_makeTopLabel(), _makeLeftLabel(), _makeBoard(), _makeBottomLabel()].forEach(function (i) {\n      return container.appendChild(i);\n    });\n    return container;\n  };\n  var _makeBoard = function _makeBoard() {\n    var boardContainer = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.createElements)(\"div\", {\n      \"class\": \"board\"\n    });\n    var playerBoard = player.board.getBoard();\n    for (var r = 0; r < playerBoard.length; r++) {\n      var row = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.createElements)(\"div\", {\n        \"class\": \"row\",\n        \"data-index\": \"\".concat(r)\n      });\n      for (var c = 0; c < playerBoard[r].length; c++) {\n        var boardSqaure = playerBoard[r][c];\n        var square = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.createElements)(\"div\", {\n          \"class\": \"square\",\n          \"data-index\": \"\".concat(c),\n          \"data-ship\": \"\".concat(boardSqaure.ship),\n          \"data-hit\": \"\".concat(boardSqaure.hit),\n          \"data-player\": \"\".concat(player.name)\n        });\n        row.appendChild(square);\n      }\n      boardContainer.appendChild(row);\n    }\n    return boardContainer;\n  };\n  var _makeTopLabel = function _makeTopLabel() {\n    // returns first 10 chars of alphabet\n    var alpha = Array.from({\n      \"length\": SIZE\n    }, function (_, i) {\n      return String.fromCharCode(65 + i);\n    });\n    var container = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.createElements)(\"div\", {\n      \"class\": \"top\"\n    });\n    alpha.forEach(function (_char) {\n      container.innerHTML += \"<div class='top-label' id='\".concat(_char.toLocaleLowerCase(), \"'>\").concat(_char, \"</div>\");\n    });\n    return container;\n  };\n  var _makeLeftLabel = function _makeLeftLabel() {\n    var nums = Array.from({\n      \"length\": SIZE\n    }, function (_, i) {\n      return i + 1;\n    });\n    var container = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.createElements)(\"div\", {\n      \"class\": \"left\"\n    });\n    nums.forEach(function (num) {\n      container.innerHTML += \"<div class='left-label' id='label-\".concat(num, \"'>\").concat(num);\n    });\n    return container;\n  };\n  var _makeBottomLabel = function _makeBottomLabel() {\n    var container = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.createElements)(\"div\", {\n      \"class\": \"bottom\"\n    });\n    console.log(player.name);\n    if (player.name === \"player\") {\n      container.innerHTML = \"\\n                <span>\".concat(player.name, \"'s board</span>\\n                <div>\\n                    <button class=\\\"shuffle\\\">Shuffle</button>\\n                </div>\\n            \");\n      container.querySelector(\".shuffle\").addEventListener(\"click\", function () {\n        return _shuffle();\n      });\n      return container;\n    }\n    container.innerHTML = \"<span>\".concat(player.name, \"'s board</span>\");\n    return container;\n  };\n  var _shuffle = function _shuffle() {\n    player.shuffleBoard();\n    container.querySelector(\".board\").remove();\n    var newBoard = _makeBoard();\n    container.appendChild(newBoard);\n  };\n  return {\n    assemble: assemble\n  };\n};\nvar playGame = function playGame(player, opponent) {\n  var playerMemory = player.memoryBoard;\n  var playerBoard = player.DOMboard;\n  var compMemory = opponent.memoryBoard;\n  var compBoard = opponent.DOMboard;\n  var playerTurn = function playerTurn() {\n    var computerBoard = document.querySelectorAll('.computer-board .board .row');\n    computerBoard.forEach(function (row) {\n      var squares = row.querySelectorAll(\".square\");\n      squares.forEach(function (square) {\n        square.addEventListener(\"click\", function (e) {\n          if (!checkSquare(e.target)) {\n            console.log(\"ALREADY HIT\");\n            Nav.setBannerError(\"Square was already chosen\", playerMemory.name);\n            return;\n          }\n          Nav.setBanner(compMemory.name);\n          computerTurn();\n        });\n      });\n    });\n  };\n  var computerTurn = function computerTurn() {\n    var playerRow = document.querySelectorAll(\".player-board .row\");\n    var openSquares = playerMemory.board.getOpenSquares();\n    var randomOpen = openSquares[Math.floor(Math.random() * openSquares.length)];\n    var domSquare = playerRow[randomOpen.row].querySelectorAll(\".square\")[randomOpen.col];\n    // using a delay for computers turn\n    setInterval(function () {\n      var code = checkSquare(domSquare);\n      // 2 means a ship was hit so it proceeds with algorithm to try and get the rest of the ship\n      if (code === 2) {\n        console.log(\"HIT PROCEED WITH ALGORITHM\");\n      } else {\n        Nav.setBanner(playerMemory.name);\n      }\n    }, 500);\n  };\n  var checkSquare = function checkSquare(square) {\n    var data = {\n      row: square.parentElement.getAttribute('data-index'),\n      col: square.getAttribute('data-index'),\n      hit: square.getAttribute('data-hit'),\n      ship: square.getAttribute('data-ship')\n    };\n    if (data.hit === 'false' && data.ship === \"false\") {\n      var dot = (0,_Util__WEBPACK_IMPORTED_MODULE_1__.createElements)('span', {\n        \"class\": 'dot'\n      });\n      square.appendChild(dot);\n      compMemory.board.setHit(data.row, data.col);\n      square.setAttribute(\"data-hit\", true);\n      return 1; // no ship\n    } else if (data.ship === \"true\" && data.hit === \"false\") {\n      square.setAttribute(\"data-hit\", true);\n      return 2; // ship\n    } else if (data.hit === 'true') {\n      return 0; // false\n    }\n\n    // return true\n  };\n\n  playerTurn();\n};\nvar displayController = function displayController() {\n  var boardContainer = document.querySelector(\".board-container\");\n  var player = new _Board__WEBPACK_IMPORTED_MODULE_2__.Player(\"player\");\n  var computer = new _Board__WEBPACK_IMPORTED_MODULE_2__.Player(\"computer\");\n  var playerBoard = renderBoard(player).assemble();\n  var computerBoard = renderBoard(computer).assemble();\n  boardContainer.appendChild(playerBoard);\n  boardContainer.appendChild(computerBoard);\n  playGame({\n    \"memoryBoard\": player,\n    \"DOMboard\": playerBoard\n  }, {\n    \"memoryBoard\": computer,\n    \"DOMboard\": computerBoard\n  });\n};\n\n//# sourceURL=webpack://battleship/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/Util.js":
/*!*****************************!*\
  !*** ./src/modules/Util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElements\": () => (/* binding */ createElements),\n/* harmony export */   \"randomNumber\": () => (/* binding */ randomNumber)\n/* harmony export */ });\nvar createElements = function createElements(type) {\n  var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var innerHTML = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var element = document.createElement(type);\n  attr ? Object.keys(attr).forEach(function (i) {\n    element.setAttribute(i, attr[i]);\n  }) : {};\n  innerHTML ? element.innerHTML = innerHTML : {};\n  return element;\n};\nvar randomNumber = function randomNumber() {\n  var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n  return Math.floor(Math.random() * range);\n};\n\n//# sourceURL=webpack://battleship/./src/modules/Util.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n.FlexCenter {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\nbody {\\n    display: grid;\\n    grid-template-rows: .5 1fr;\\n    background-color: #f4f4f4;\\n    font-family: 'Fjalla One', sans-serif;\\n    font-weight: 100;\\n}\\nnav {\\n    display: flex;\\n    justify-content: space-between;\\n    overflow: hidden;\\n    border-bottom: 2px solid rgb(188, 188, 188);\\n}\\n.nav-left {\\n    gap: 100px;\\n}\\n.nav-left h1 {\\n    font-size: 2em;\\n    padding: 20px;\\n}\\n\\n.nav-left div > a {\\n    color: rgb(246, 2, 2);\\n    font-weight: 100;\\n    text-decoration: none;\\n    height: 100%;\\n    padding: 25px;\\n    font-size: 1.5em;\\n}\\n.nav-left .menu > a:nth-child(1) {\\n    background-color: rgb(215, 215, 215);\\n}\\n.nav-left div > a:hover {\\n    background-color: white;\\n}\\n.nav-center {\\n    text-transform: uppercase;\\n    width: 60%;\\n    height: 100%;\\n    font-size: 1.2em;\\n    font-weight: 600;\\n    color: green;\\n    /* background-color: red; */\\n}\\n.nav-center span {\\n    font-family: Arial, Helvetica, sans-serif;\\n    font-size: 1.2em;\\n}\\n.nav-right {\\n    width: 40%;\\n    height: 100%;\\n    display: flex;\\n    justify-content: flex-end;\\n    align-items: center;\\n}\\n.hamburger {\\n    display: flex;\\n    justify-content: center;\\n    flex-direction: column;\\n    align-items: flex-end;\\n\\n    gap: 7px;\\n    margin-right: 30px;\\n    cursor: pointer;\\n}\\n\\n.hamburger span {\\n    background-color: rgb(77, 76, 76);\\n    width: 50px;\\n    height: 5px;\\n}\\nmain {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;\\n    height: 100vh;\\n    background-color: #f4f4f4;\\n}\\n\\n\\n/* BOARD */\\n.board-container {\\n    display: flex;\\n    gap: 100px;\\n\\n    width: 95%;\\n    height: 90%;\\n    padding: 50px;\\n}\\n\\n.player-board, .computer-board {\\n    display: grid;\\n    grid-template-columns: .05fr 1fr;\\n    grid-template-rows: min-content 1fr min-content;\\n    grid-template-areas: \\n        \\\"top top\\\"\\n        \\\"left board\\\"\\n        \\\"desc desc\\\"\\n    ;\\n    flex: 1;\\n}\\n\\n\\n/* board section */\\n.top,\\n.left {\\n    display: flex;\\n    justify-content: space-around;\\n}\\n.top {\\n    grid-area: top;\\n\\n    flex-direction: row;\\n    margin-left: 30px;\\n    margin-bottom: 2px;\\n}\\n.left {\\n    grid-area: left;\\n    flex-direction: column;\\n}\\n.board {\\n    grid-area: board;\\n    height: 100%;\\n    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\\n    /* display: grid;\\n    grid-template-rows: repeat(auto-fill, 1fr); */\\n}\\n.row {\\n    height: 10%;\\n    display: flex;\\n}\\n.square {\\n    flex: 1;\\n    background-color: lightgrey;\\n    border: 1px solid black;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n[data-player=\\\"player\\\"][data-ship=\\\"true\\\"] {\\n    background-color: black;\\n}\\n\\n\\n[data-player=\\\"computer\\\"][data-ship=\\\"true\\\"] {\\n    background-color: maroon;\\n}\\n\\n[data-player=\\\"computer\\\"]:hover {\\n    background-color: rgb(248, 123, 123);\\n}\\n\\n[data-player=\\\"computer\\\"][data-ship=\\\"true\\\"][data-hit=\\\"true\\\"],\\n[data-player=\\\"player\\\"][data-ship=\\\"true\\\"][data-hit=\\\"true\\\"] {\\n    background-color: yellow;\\n}\\n\\n.dot {\\n    height: 8px;\\n    width: 8px;\\n    background-color: black;\\n    border-radius: 50%;\\n    display: inline-block;\\n}\\n/* #ship {\\n    background-color: rgb(0, 0, 0);\\n}\\n\\n\\n.cp:hover {\\n    background-color: rgb(249, 158, 158);\\n    cursor: pointer;\\n} */\\n\\n/* DELETE THIS TO HIDE COMPUTER SHIPS  */\\n/* #cp-ship {\\n    background-color: red;\\n}\\n\\n.dot {\\n    height: 8px;\\n    width: 8px;\\n    background-color: black;\\n    border-radius: 50%;\\n    display: inline-block;\\n}\\n\\n#ship-hit {\\n    background-color: aqua;\\n} */\\n\\n.bottom {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 90px;\\n    \\n    font-size: 2em;\\n    margin-top: 40px;\\n    grid-area: desc;\\n    font-family: 'Fjalla One', sans-serif;\\n}\\n.bottom div {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 20%;\\n}\\n.shuffle {\\n    width: 100%;\\n    height: 40px;\\n    font-size: 1.3rem;\\n    border: none;\\n    border-radius: 5px;\\n    background-color: rgb(246, 2, 2);\\n    color: white;\\n    font-weight: 600;\\n    box-shadow: 2px 2px 4px rgb(130, 130, 130);\\n}\\n.shuffle:hover {\\n    width: calc(100% - 50px);\\n    cursor: pointer;\\n}\\n\\n\\n@media only screen and (max-width: 620px) {\\n    main {\\n        justify-content: flex-start;\\n        align-items: flex-start;\\n    }\\n    .board-container {\\n        gap: 0px;\\n        height: 900px;\\n        background-color: bisque;\\n    }\\n    .player-board, .computer-board {\\n        height: 700px;\\n    }\\n    .bottom {\\n        margin-bottom: 40px;\\n    }\\n} \\n\\n\\n@media only screen and (max-width: 877px) {\\n    .board-container {\\n        display: flex;\\n        flex-direction: column;\\n        width: 650px;\\n    }\\n    .player-board, .computer-board {\\n        display: grid;\\n        grid-template-columns: .05fr 1fr;\\n        grid-template-rows: min-content min-content 400px;\\n        grid-template-areas: \\n            \\\"desc desc\\\"\\n            \\\"top top\\\"\\n            \\\"left board\\\"\\n        ;\\n    }\\n    .bottom {\\n        margin-bottom: 40px;\\n    }\\n} \\n\\n@media only screen and (max-width: 1298px) {\\n    .board-container {\\n        gap: 50px;\\n        height: 600px;\\n    }\\n    .shuffle {\\n        width: 600px;\\n    }\\n    .bottom div {\\n        width: 150px;\\n    }\\n    .shuffle:hover {\\n        width: 100px;\\n    }\\n} \", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/assets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/assets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/images/dot.png":
/*!***********************************!*\
  !*** ./src/assets/images/dot.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d90f1c51d32976b16a9.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/images/dot.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Main.js");
/******/ 	
/******/ })()
;