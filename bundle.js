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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/carParts.js":
/*!*************************!*\
  !*** ./src/carParts.js ***!
  \*************************/
/*! exports provided: tireWidth, tireHeight, bonnetWidth, bonnetHeight, roofWidth, roofHeight, carWidth, carHeight, carParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tireWidth", function() { return tireWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tireHeight", function() { return tireHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bonnetWidth", function() { return bonnetWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bonnetHeight", function() { return bonnetHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roofWidth", function() { return roofWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roofHeight", function() { return roofHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carWidth", function() { return carWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carHeight", function() { return carHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carParts", function() { return carParts; });
var tireWidth = 7;
var tireHeight = 15;
var bonnetWidth = 30;
var bonnetHeight = 20;
var roofWidth = bonnetWidth + tireWidth * 2;
var roofHeight = bonnetHeight + 50;
var carWidth = roofWidth + tireWidth * 2;
var carHeight = roofHeight + bonnetHeight;

function tire(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return {
    rect: {
      x: x,
      y: y,
      width: tireWidth,
      height: tireHeight
    },
    color: 'black'
  };
}

function carParts(position, color) {
  var bonnet = {
    rect: {
      x: position.x + tireWidth * 2,
      y: position.y,
      width: bonnetWidth,
      height: bonnetHeight
    },
    color: color
  };
  var roof = {
    rect: {
      x: position.x + tireWidth,
      y: bonnet.rect.y + bonnetHeight,
      width: roofWidth,
      height: roofHeight
    },
    color: color
  };
  var frontLeftTire = tire({
    x: position.x,
    y: roof.rect.y + 5
  });
  var bottomLeftTire = tire({
    x: position.x,
    y: roof.rect.y + roofHeight - 20
  });
  var frontRightTire = tire({
    x: roof.rect.x + roofWidth,
    y: roof.rect.y + 5
  });
  var bottomRightTire = tire({
    x: roof.rect.x + roofWidth,
    y: roof.rect.y + roofHeight - 20
  });
  return [bonnet, roof, frontLeftTire, bottomLeftTire, frontRightTire, bottomRightTire];
}
;

/***/ }),

/***/ "./src/cookie.js":
/*!***********************!*\
  !*** ./src/cookie.js ***!
  \***********************/
/*! exports provided: Cookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cookie", function() { return Cookie; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cookie =
/*#__PURE__*/
function () {
  function Cookie(document) {
    _classCallCheck(this, Cookie);

    this.document = document;
  }

  _createClass(Cookie, [{
    key: "read",
    value: function read(key) {
      var pairWithNeededKey = this.keyValuePairs().find(function (pair) {
        return pair.key === key;
      });
      return pairWithNeededKey ? pairWithNeededKey.value : undefined;
    }
  }, {
    key: "keyValuePairs",
    value: function keyValuePairs() {
      return this.document.cookie.split('; ').map(function (piece) {
        var _piece$split = piece.split('='),
            _piece$split2 = _slicedToArray(_piece$split, 2),
            key = _piece$split2[0],
            value = _piece$split2[1];

        return {
          key: key,
          value: value
        };
      });
    }
  }, {
    key: "write",
    value: function write(key, value) {
      this.document.cookie = "".concat(key, "=").concat(value);
    }
  }]);

  return Cookie;
}();

/***/ }),

/***/ "./src/decorations.js":
/*!****************************!*\
  !*** ./src/decorations.js ***!
  \****************************/
/*! exports provided: RoadDrawing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadDrawing", function() { return RoadDrawing; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var roadDrawingWidth = 30;
var roadDrawingHeight = 120;
var RoadDrawing =
/*#__PURE__*/
function () {
  _createClass(RoadDrawing, null, [{
    key: "atDefaultPosition",
    value: function atDefaultPosition(mapWidth) {
      return new RoadDrawing({
        x: mapWidth / 2 - roadDrawingWidth / 2,
        y: -roadDrawingHeight
      });
    }
  }]);

  function RoadDrawing(position) {
    _classCallCheck(this, RoadDrawing);

    this.position = position;
    this.color = 'grey';
    this.verticalSpeed = 0;
  }

  _createClass(RoadDrawing, [{
    key: "rect",
    get: function get() {
      return {
        x: this.position.x,
        y: this.position.y,
        width: roadDrawingWidth,
        height: roadDrawingHeight
      };
    }
  }]);

  return RoadDrawing;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _carParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carParts */ "./src/carParts.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookie */ "./src/cookie.js");
/* harmony import */ var _decorations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorations */ "./src/decorations.js");
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphics */ "./src/graphics.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var laneCount = 6;
var mapWidth = laneCount * _carParts__WEBPACK_IMPORTED_MODULE_0__["carWidth"];
var mapHeight = _carParts__WEBPACK_IMPORTED_MODULE_0__["carHeight"] * 6;
var backgroundColor = '#E6E6F5';
var Game =
/*#__PURE__*/
function () {
  function Game(document) {
    var _this = this;

    _classCallCheck(this, Game);

    this.canvas = new _graphics__WEBPACK_IMPORTED_MODULE_4__["Canvas"]();
    this.canvas.width = mapWidth;
    this.canvas.height = mapHeight;
    this.scoreDisplay = document.getElementById('score');
    this.restartButton = document.getElementById('restart');

    this.restartButton.onclick = function () {
      _this.restart();

      _this.restartButton.hidden = true;
    };

    this.playerCar = PlayerCar.atDefaultPosition();
    this.enemyCars = [];
    this.decorations = [];
    this.distanceTraveled = 0;
    this.gameOver = false;
    this.cookie = new _cookie__WEBPACK_IMPORTED_MODULE_2__["Cookie"](document);
    this.keyHandler = new KeyHandler(document);
    this.repeatTaskWhileRunning({
      task: function task() {
        return _this.enemyCars.push(EnemyCar.atRandomPosition());
      },
      milliseconds: function milliseconds() {
        return 1000 / _this.playerCar.verticalSpeed;
      }
    });
    this.repeatTaskWhileRunning({
      task: function task() {
        return _this.decorations.push(_decorations__WEBPACK_IMPORTED_MODULE_3__["RoadDrawing"].atDefaultPosition(mapWidth));
      },
      milliseconds: function milliseconds() {
        return 350 / _this.playerCar.verticalSpeed;
      }
    });
  }

  _createClass(Game, [{
    key: "restart",
    value: function restart() {
      this.canvas.clear();
      this.playerCar = PlayerCar.atDefaultPosition();
      this.enemyCars = [];
      this.decorations = [];
      this.distanceTraveled = 0;
      this.gameOver = false;
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["repeatTask"])({
        task: function task(timeDelta) {
          if (!_this2.gameOver) {
            _this2.clearCanvas();

            _this2.moveAllObjects(timeDelta);

            _this2.destroyOffscreenObjects();

            _this2.drawEverything();

            _this2.checkGameOver();
          }
        }
      });
    }
  }, {
    key: "checkGameOver",
    value: function checkGameOver() {
      if (this.playerCarCrashed()) {
        this.gameOver = true;
        this.showScore();
        this.restartButton.hidden = false;
      }
    }
  }, {
    key: "playerCarCrashed",
    value: function playerCarCrashed() {
      var _this3 = this;

      return this.enemyCars.some(function (enemyCar) {
        return carsCrashed(enemyCar, _this3.playerCar);
      });
    }
  }, {
    key: "showScore",
    value: function showScore() {
      var score = this.calculateScore();
      var highScore = readHighScore(this.cookie);
      var outputText = "Final score: ".concat(score);

      if (!highScore || score > highScore) {
        writeHighScore(this.cookie, score);
        outputText = "New high score!".concat(outputText);
      }

      this.scoreDisplay.innerHTML = outputText;
    }
  }, {
    key: "calculateScore",
    value: function calculateScore() {
      return Math.floor(this.distanceTraveled / 1e3);
    }
  }, {
    key: "moveAllObjects",
    value: function moveAllObjects(timeDelta) {
      this.playerCar.updateSpeed(this.distanceTraveled);
      var relativitySystem = VerticalRelativitySystem.relativeTo(this.playerCar);
      relativitySystem.addElements(this.enemyCars);
      relativitySystem.addElements(this.decorations);
      if (this.keyHandler.keyIsDown('ArrowLeft')) this.playerCar.moveLeft(0, timeDelta);
      if (this.keyHandler.keyIsDown('ArrowRight')) this.playerCar.moveRight(mapWidth - _carParts__WEBPACK_IMPORTED_MODULE_0__["carWidth"], timeDelta);
      relativitySystem.moveElements(timeDelta);
      this.distanceTraveled += this.playerCar.verticalSpeed * timeDelta;
    }
  }, {
    key: "destroyOffscreenObjects",
    value: function destroyOffscreenObjects() {
      this.enemyCars = activeObjects(this.enemyCars);
      this.decorations = activeObjects(this.decorations);
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.canvas.clear(backgroundColor);
    }
  }, {
    key: "drawEverything",
    value: function drawEverything() {
      Object(_graphics__WEBPACK_IMPORTED_MODULE_4__["drawDecorations"])(this.canvas, this.decorations);
      Object(_graphics__WEBPACK_IMPORTED_MODULE_4__["drawCar"])(this.canvas, this.playerCar);
      Object(_graphics__WEBPACK_IMPORTED_MODULE_4__["drawCars"])(this.canvas, this.enemyCars);
      this.scoreDisplay.innerHTML = this.calculateScore();
    }
  }, {
    key: "repeatTaskWhileRunning",
    value: function repeatTaskWhileRunning(_ref) {
      var _this4 = this;

      var _task = _ref.task,
          milliseconds = _ref.milliseconds;
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["repeatTask"])({
        task: function task() {
          if (!_this4.gameOver) _task();
        },
        milliseconds: milliseconds
      });
    }
  }]);

  return Game;
}();

var KeyHandler =
/*#__PURE__*/
function () {
  function KeyHandler(document) {
    var _this5 = this;

    _classCallCheck(this, KeyHandler);

    this.keyDownMap = new Map();
    document.addEventListener('keydown', function (_ref2) {
      var key = _ref2.key;
      return _this5.keyDownMap.set(key, true);
    });
    document.addEventListener('keyup', function (_ref3) {
      var key = _ref3.key;
      return _this5.keyDownMap.set(key, false);
    });
  }

  _createClass(KeyHandler, [{
    key: "keyIsDown",
    value: function keyIsDown(key) {
      return this.keyDownMap.get(key);
    }
  }]);

  return KeyHandler;
}();

function randomColor() {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["randomElement"])(['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'magenta', 'aqua', 'maroon']);
}

var Car =
/*#__PURE__*/
function () {
  function Car(position) {
    _classCallCheck(this, Car);

    this.color = randomColor();
    this.position = position;
  }

  _createClass(Car, [{
    key: "physicalParts",
    value: function physicalParts() {
      return Object(_carParts__WEBPACK_IMPORTED_MODULE_0__["carParts"])(this.position, this.color);
    }
  }]);

  return Car;
}();

var PlayerCar =
/*#__PURE__*/
function (_Car) {
  _inherits(PlayerCar, _Car);

  _createClass(PlayerCar, null, [{
    key: "atDefaultPosition",
    value: function atDefaultPosition() {
      return new PlayerCar({
        x: mapWidth / 2 - _carParts__WEBPACK_IMPORTED_MODULE_0__["carWidth"] / 2,
        y: mapHeight - _carParts__WEBPACK_IMPORTED_MODULE_0__["carHeight"] - 5
      });
    }
  }, {
    key: "baseSpeed",
    value: function baseSpeed() {
      return 0.8;
    }
  }, {
    key: "maxSpeed",
    value: function maxSpeed() {
      return 2;
    }
  }]);

  function PlayerCar(position) {
    var _this6;

    _classCallCheck(this, PlayerCar);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(PlayerCar).call(this, position));
    _this6.horizontalSpeed = _this6.verticalSpeed = 0;

    _this6.updateSpeed(0);

    return _this6;
  }

  _createClass(PlayerCar, [{
    key: "updateSpeed",
    value: function updateSpeed(distanceTraveled) {
      var newSpeed = Math.abs(distanceTraveled / 50000) + PlayerCar.baseSpeed();
      this.horizontalSpeed = this.verticalSpeed = newSpeed > PlayerCar.maxSpeed() ? PlayerCar.maxSpeed() : newSpeed;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft(leftBoundary, timeDelta) {
      var newX = this.position.x - this.horizontalSpeed * timeDelta;
      this.position.x = newX < leftBoundary ? leftBoundary : newX;
    }
  }, {
    key: "moveRight",
    value: function moveRight(rightBoundary, timeDelta) {
      var newX = this.position.x + this.horizontalSpeed * timeDelta;
      this.position.x = newX > rightBoundary ? rightBoundary : newX;
    }
  }]);

  return PlayerCar;
}(Car);

var EnemyCar =
/*#__PURE__*/
function (_Car2) {
  _inherits(EnemyCar, _Car2);

  _createClass(EnemyCar, null, [{
    key: "atRandomPosition",
    value: function atRandomPosition() {
      return new EnemyCar({
        x: canvas.width / laneCount * Object(_utils__WEBPACK_IMPORTED_MODULE_1__["randomRange"])(0, laneCount),
        y: -_carParts__WEBPACK_IMPORTED_MODULE_0__["carHeight"]
      });
    }
  }]);

  function EnemyCar(position) {
    var _this7;

    _classCallCheck(this, EnemyCar);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(EnemyCar).call(this, position));
    _this7.verticalSpeed = 0.45;
    return _this7;
  }

  _createClass(EnemyCar, [{
    key: "physicalParts",
    value: function physicalParts() {
      return Object(_carParts__WEBPACK_IMPORTED_MODULE_0__["carParts"])(this.position, this.color);
    }
  }]);

  return EnemyCar;
}(Car);

function carsCrashed(c1, c2) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = c1.physicalParts()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var part1 = _step.value;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = c2.physicalParts()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var part2 = _step2.value;
          if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["rectanglesOverlap"])(part1.rect, part2.rect)) return true;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}

function activeObjects(objects) {
  var isActive = function isActive(object) {
    return object.position.y < mapHeight;
  };

  return objects.filter(isActive);
}

var VerticalRelativitySystem =
/*#__PURE__*/
function () {
  _createClass(VerticalRelativitySystem, null, [{
    key: "relativeTo",
    value: function relativeTo(_ref4) {
      var object = _ref4.object,
          verticalSpeed = _ref4.verticalSpeed;
      return new VerticalRelativitySystem({
        object: object,
        verticalSpeed: verticalSpeed
      });
    }
  }]);

  function VerticalRelativitySystem(centerObject) {
    _classCallCheck(this, VerticalRelativitySystem);

    this.centerObject = centerObject;
    this.elements = [];
  }

  _createClass(VerticalRelativitySystem, [{
    key: "addElements",
    value: function addElements(elementArray) {
      var _this$elements;

      (_this$elements = this.elements).push.apply(_this$elements, _toConsumableArray(elementArray));
    }
  }, {
    key: "moveElements",
    value: function moveElements(timeDelta) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var element = _step3.value;
          element.position.y += (this.centerObject.verticalSpeed - element.verticalSpeed) * timeDelta;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }]);

  return VerticalRelativitySystem;
}();

var cookieHighScoreKey = 'highscore';

function readHighScore(cookie) {
  return cookie.read(cookieHighScoreKey);
}

function writeHighScore(cookie, highScore) {
  cookie.write(cookieHighScoreKey, highScore);
}

/***/ }),

/***/ "./src/graphics.js":
/*!*************************!*\
  !*** ./src/graphics.js ***!
  \*************************/
/*! exports provided: Canvas, ScoreDisplay, drawCar, drawCars, drawDecorations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreDisplay", function() { return ScoreDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCar", function() { return drawCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCars", function() { return drawCars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawDecorations", function() { return drawDecorations; });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Canvas =
/*#__PURE__*/
function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
  }

  _createClass(Canvas, [{
    key: "drawRect",
    value: function drawRect(_ref, color) {
      var x = _ref.x,
          y = _ref.y,
          width = _ref.width,
          height = _ref.height;
      this.context.fillStyle = color;
      this.context.fillRect(x, y, width, height);
    }
  }, {
    key: "clear",
    value: function clear(backgroundColor) {
      this.drawRect({
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      }, backgroundColor);
    }
  }, {
    key: "width",
    get: function get() {
      return this.canvas.width;
    },
    set: function set(value) {
      this.canvas.width = value;
    }
  }, {
    key: "height",
    get: function get() {
      return this.canvas.height;
    },
    set: function set(value) {
      this.canvas.height = value;
    }
  }]);

  return Canvas;
}();
var ScoreDisplay =
/*#__PURE__*/
function () {
  function ScoreDisplay(document) {
    _classCallCheck(this, ScoreDisplay);

    this.p = document.getElementById('score');
  }

  _createClass(ScoreDisplay, [{
    key: "setValue",
    value: function setValue(value) {
      this.p.innerHTML = value.toString();
    }
  }]);

  return ScoreDisplay;
}();
function drawCar(canvas, car) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = car.physicalParts()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var part = _step.value;
      canvas.drawRect(part.rect, part.color);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
function drawCars(canvas, cars) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = cars[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var car = _step2.value;
      drawCar(canvas, car);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
function drawDecorations(canvas, decorations) {
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = decorations[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var decoration = _step3.value;
      canvas.drawRect(decoration.rect, decoration.color);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: setupRestartButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupRestartButton", function() { return setupRestartButton; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");

function setupRestartButton() {
  var button = document.getElementById('restart');
}
var game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"](document);
game.run();

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: repeatTask, randomElement, randomRange, rectanglesOverlap, pointIsInsideRectangle, upperLeftPoint, upperRightPoint, lowerLeftPoint, lowerRightPoint, rectanglePoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatTask", function() { return repeatTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomElement", function() { return randomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomRange", function() { return randomRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectanglesOverlap", function() { return rectanglesOverlap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointIsInsideRectangle", function() { return pointIsInsideRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperLeftPoint", function() { return upperLeftPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperRightPoint", function() { return upperRightPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowerLeftPoint", function() { return lowerLeftPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowerRightPoint", function() { return lowerRightPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectanglePoints", function() { return rectanglePoints; });


function repeatTask(_ref) {
  var task = _ref.task,
      milliseconds = _ref.milliseconds;

  if (milliseconds === undefined) {
    runTask(task);
    return;
  }

  var timer = milliseconds();
  runTask(function (timeDelta) {
    timer -= timeDelta;

    if (timer <= 0) {
      timer = milliseconds();
      task();
    }
  });
}

function runTask(task) {
  var lastCall = null;

  function step(timestamp) {
    requestAnimationFrame(step);

    if (lastCall === null) {
      lastCall = timestamp;
      return;
    }

    var timeDelta = timestamp - lastCall;
    lastCall = timestamp;
    task(timeDelta);
  }

  requestAnimationFrame(step);
}

function randomElement(array) {
  return array[randomRange(0, array.length)];
} // min is included in the range, max isn't

function randomRange(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}
function rectanglesOverlap(rect1, rect2) {
  return rectanglePoints(rect1).some(function (point) {
    return pointIsInsideRectangle(point, rect2);
  }) || rectanglePoints(rect2).some(function (point) {
    return pointIsInsideRectangle(point, rect1);
  });
}
function pointIsInsideRectangle(point, rect) {
  var upperLeftRectPoint = upperLeftPoint(rect);
  var lowerRightRectPoint = lowerRightPoint(rect);
  return point.x > upperLeftRectPoint.x && point.x < lowerRightRectPoint.x && point.y > upperLeftRectPoint.y && point.y < lowerRightRectPoint.y;
}
function upperLeftPoint(rect) {
  return {
    x: rect.x,
    y: rect.y
  };
}
function upperRightPoint(rect) {
  return {
    x: rect.x + rect.width,
    y: rect.y
  };
}
function lowerLeftPoint(rect) {
  return {
    x: rect.x,
    y: rect.y + rect.height
  };
}
function lowerRightPoint(rect) {
  return {
    x: rect.x + rect.width,
    y: rect.y + rect.height
  };
}
function rectanglePoints(rectangle) {
  return [upperLeftPoint(rectangle), upperRightPoint(rectangle), lowerLeftPoint(rectangle), lowerRightPoint(rectangle)];
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhclBhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbInRpcmVXaWR0aCIsInRpcmVIZWlnaHQiLCJib25uZXRXaWR0aCIsImJvbm5ldEhlaWdodCIsInJvb2ZXaWR0aCIsInJvb2ZIZWlnaHQiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsInRpcmUiLCJ4IiwieSIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY2FyUGFydHMiLCJwb3NpdGlvbiIsImJvbm5ldCIsInJvb2YiLCJmcm9udExlZnRUaXJlIiwiYm90dG9tTGVmdFRpcmUiLCJmcm9udFJpZ2h0VGlyZSIsImJvdHRvbVJpZ2h0VGlyZSIsIkNvb2tpZSIsImRvY3VtZW50Iiwia2V5IiwicGFpcldpdGhOZWVkZWRLZXkiLCJrZXlWYWx1ZVBhaXJzIiwiZmluZCIsInBhaXIiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImNvb2tpZSIsInNwbGl0IiwibWFwIiwicGllY2UiLCJyb2FkRHJhd2luZ1dpZHRoIiwicm9hZERyYXdpbmdIZWlnaHQiLCJSb2FkRHJhd2luZyIsIm1hcFdpZHRoIiwidmVydGljYWxTcGVlZCIsImxhbmVDb3VudCIsIm1hcEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIkdhbWUiLCJjYW52YXMiLCJDYW52YXMiLCJzY29yZURpc3BsYXkiLCJnZXRFbGVtZW50QnlJZCIsInJlc3RhcnRCdXR0b24iLCJvbmNsaWNrIiwicmVzdGFydCIsImhpZGRlbiIsInBsYXllckNhciIsIlBsYXllckNhciIsImF0RGVmYXVsdFBvc2l0aW9uIiwiZW5lbXlDYXJzIiwiZGVjb3JhdGlvbnMiLCJkaXN0YW5jZVRyYXZlbGVkIiwiZ2FtZU92ZXIiLCJrZXlIYW5kbGVyIiwiS2V5SGFuZGxlciIsInJlcGVhdFRhc2tXaGlsZVJ1bm5pbmciLCJ0YXNrIiwicHVzaCIsIkVuZW15Q2FyIiwiYXRSYW5kb21Qb3NpdGlvbiIsIm1pbGxpc2Vjb25kcyIsImNsZWFyIiwicmVwZWF0VGFzayIsInRpbWVEZWx0YSIsImNsZWFyQ2FudmFzIiwibW92ZUFsbE9iamVjdHMiLCJkZXN0cm95T2Zmc2NyZWVuT2JqZWN0cyIsImRyYXdFdmVyeXRoaW5nIiwiY2hlY2tHYW1lT3ZlciIsInBsYXllckNhckNyYXNoZWQiLCJzaG93U2NvcmUiLCJzb21lIiwiZW5lbXlDYXIiLCJjYXJzQ3Jhc2hlZCIsInNjb3JlIiwiY2FsY3VsYXRlU2NvcmUiLCJoaWdoU2NvcmUiLCJyZWFkSGlnaFNjb3JlIiwib3V0cHV0VGV4dCIsIndyaXRlSGlnaFNjb3JlIiwiaW5uZXJIVE1MIiwiTWF0aCIsImZsb29yIiwidXBkYXRlU3BlZWQiLCJyZWxhdGl2aXR5U3lzdGVtIiwiVmVydGljYWxSZWxhdGl2aXR5U3lzdGVtIiwicmVsYXRpdmVUbyIsImFkZEVsZW1lbnRzIiwia2V5SXNEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJtb3ZlRWxlbWVudHMiLCJhY3RpdmVPYmplY3RzIiwiZHJhd0RlY29yYXRpb25zIiwiZHJhd0NhciIsImRyYXdDYXJzIiwia2V5RG93bk1hcCIsIk1hcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXQiLCJnZXQiLCJyYW5kb21Db2xvciIsInJhbmRvbUVsZW1lbnQiLCJDYXIiLCJob3Jpem9udGFsU3BlZWQiLCJuZXdTcGVlZCIsImFicyIsImJhc2VTcGVlZCIsIm1heFNwZWVkIiwibGVmdEJvdW5kYXJ5IiwibmV3WCIsInJpZ2h0Qm91bmRhcnkiLCJyYW5kb21SYW5nZSIsImMxIiwiYzIiLCJwaHlzaWNhbFBhcnRzIiwicGFydDEiLCJwYXJ0MiIsInJlY3RhbmdsZXNPdmVybGFwIiwib2JqZWN0cyIsImlzQWN0aXZlIiwib2JqZWN0IiwiZmlsdGVyIiwiY2VudGVyT2JqZWN0IiwiZWxlbWVudHMiLCJlbGVtZW50QXJyYXkiLCJlbGVtZW50IiwiY29va2llSGlnaFNjb3JlS2V5IiwicmVhZCIsIndyaXRlIiwiY29udGV4dCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdSZWN0IiwiU2NvcmVEaXNwbGF5IiwicCIsInRvU3RyaW5nIiwiY2FyIiwicGFydCIsImNhcnMiLCJkZWNvcmF0aW9uIiwic2V0dXBSZXN0YXJ0QnV0dG9uIiwiYnV0dG9uIiwiZ2FtZSIsInJ1biIsInJ1blRhc2siLCJ0aW1lciIsImxhc3RDYWxsIiwic3RlcCIsInRpbWVzdGFtcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFycmF5IiwibGVuZ3RoIiwibWluIiwibWF4IiwicmFuZG9tIiwicmVjdDEiLCJyZWN0MiIsInJlY3RhbmdsZVBvaW50cyIsInBvaW50IiwicG9pbnRJc0luc2lkZVJlY3RhbmdsZSIsInVwcGVyTGVmdFJlY3RQb2ludCIsInVwcGVyTGVmdFBvaW50IiwibG93ZXJSaWdodFJlY3RQb2ludCIsImxvd2VyUmlnaHRQb2ludCIsInVwcGVyUmlnaHRQb2ludCIsImxvd2VyTGVmdFBvaW50IiwicmVjdGFuZ2xlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtB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Q0U7QUFBdEMsR0FBUDtBQUNIO0FBRU0sU0FBU3lKLGVBQVQsQ0FBeUJTLFNBQXpCLEVBQW9DO0FBQ3ZDLFNBQU8sQ0FDSEwsY0FBYyxDQUFDSyxTQUFELENBRFgsRUFFSEYsZUFBZSxDQUFDRSxTQUFELENBRlosRUFHSEQsY0FBYyxDQUFDQyxTQUFELENBSFgsRUFJSEgsZUFBZSxDQUFDRyxTQUFELENBSlosQ0FBUDtBQU1ILEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgdGlyZVdpZHRoID0gNztcclxuZXhwb3J0IGNvbnN0IHRpcmVIZWlnaHQgPSAxNTtcclxuZXhwb3J0IGNvbnN0IGJvbm5ldFdpZHRoID0gMzA7XHJcbmV4cG9ydCBjb25zdCBib25uZXRIZWlnaHQgPSAyMDtcclxuZXhwb3J0IGNvbnN0IHJvb2ZXaWR0aCA9IGJvbm5ldFdpZHRoK3RpcmVXaWR0aCoyO1xyXG5leHBvcnQgY29uc3Qgcm9vZkhlaWdodCA9IGJvbm5ldEhlaWdodCs1MDtcclxuZXhwb3J0IGNvbnN0IGNhcldpZHRoID0gcm9vZldpZHRoK3RpcmVXaWR0aCoyXHJcbmV4cG9ydCBjb25zdCBjYXJIZWlnaHQgPSByb29mSGVpZ2h0K2Jvbm5ldEhlaWdodDtcclxuXHJcbmZ1bmN0aW9uIHRpcmUoe3gsIHl9KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY3Q6IHtcclxuICAgICAgICAgICAgeCwgeSwgXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aXJlV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGlyZUhlaWdodFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXJQYXJ0cyhwb3NpdGlvbiwgY29sb3IpIHtcclxuICAgIGNvbnN0IGJvbm5ldCA9IHtcclxuICAgICAgICByZWN0OiB7XHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLngrdGlyZVdpZHRoKjIsIFxyXG4gICAgICAgICAgICB5OiBwb3NpdGlvbi55LCBcclxuICAgICAgICAgICAgd2lkdGg6IGJvbm5ldFdpZHRoLCBcclxuICAgICAgICAgICAgaGVpZ2h0OiBib25uZXRIZWlnaHQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvclxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJvb2YgPSB7XHJcbiAgICAgICAgcmVjdDoge1xyXG4gICAgICAgICAgICB4OiBwb3NpdGlvbi54K3RpcmVXaWR0aCwgXHJcbiAgICAgICAgICAgIHk6IGJvbm5ldC5yZWN0LnkrYm9ubmV0SGVpZ2h0LCBcclxuICAgICAgICAgICAgd2lkdGg6IHJvb2ZXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiByb29mSGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvclxyXG4gICAgfTtcclxuICAgIGNvbnN0IGZyb250TGVmdFRpcmUgPSB0aXJlKHtcclxuICAgICAgICB4OiBwb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHJvb2YucmVjdC55KzVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYm90dG9tTGVmdFRpcmUgPSB0aXJlKHtcclxuICAgICAgICB4OiBwb3NpdGlvbi54LCBcclxuICAgICAgICB5OiByb29mLnJlY3QueStyb29mSGVpZ2h0LTIwXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZyb250UmlnaHRUaXJlID0gdGlyZSh7XHJcbiAgICAgICAgeDogcm9vZi5yZWN0Lngrcm9vZldpZHRoLCBcclxuICAgICAgICB5OiByb29mLnJlY3QueSs1XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGJvdHRvbVJpZ2h0VGlyZSA9IHRpcmUoe1xyXG4gICAgICAgIHg6IHJvb2YucmVjdC54K3Jvb2ZXaWR0aCwgXHJcbiAgICAgICAgeTogcm9vZi5yZWN0Lnkrcm9vZkhlaWdodC0yMFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBib25uZXQsIHJvb2YsIGZyb250TGVmdFRpcmUsIGJvdHRvbUxlZnRUaXJlLCBmcm9udFJpZ2h0VGlyZSwgYm90dG9tUmlnaHRUaXJlXHJcbiAgICBdO1xyXG59OyIsImV4cG9ydCBjbGFzcyBDb29raWUge1xyXG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcclxuICAgICAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZChrZXkpIHtcclxuICAgICAgICBjb25zdCBwYWlyV2l0aE5lZWRlZEtleSA9IHRoaXMua2V5VmFsdWVQYWlycygpLmZpbmQocGFpciA9PiBwYWlyLmtleSA9PT0ga2V5KTtcclxuICAgICAgICByZXR1cm4gcGFpcldpdGhOZWVkZWRLZXkgPyBwYWlyV2l0aE5lZWRlZEtleS52YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBrZXlWYWx1ZVBhaXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKS5tYXAocGllY2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwaWVjZS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICByZXR1cm4ge2tleSwgdmFsdWV9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRvY3VtZW50LmNvb2tpZSA9IGAke2tleX09JHt2YWx1ZX1gO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5jb25zdCByb2FkRHJhd2luZ1dpZHRoID0gMzA7XHJcbmNvbnN0IHJvYWREcmF3aW5nSGVpZ2h0ID0gMTIwO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvYWREcmF3aW5nIHtcclxuICAgIHN0YXRpYyBhdERlZmF1bHRQb3NpdGlvbihtYXBXaWR0aCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUm9hZERyYXdpbmcoe1xyXG4gICAgICAgICAgICB4OiBtYXBXaWR0aC8yLXJvYWREcmF3aW5nV2lkdGgvMixcclxuICAgICAgICAgICAgeTogLXJvYWREcmF3aW5nSGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICdncmV5JztcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU3BlZWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB3aWR0aDogcm9hZERyYXdpbmdXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiByb2FkRHJhd2luZ0hlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHtjYXJQYXJ0cywgY2FyV2lkdGgsIGNhckhlaWdodH0gZnJvbSAnLi9jYXJQYXJ0cyc7XHJcbmltcG9ydCB7cmFuZG9tUmFuZ2UsIHJhbmRvbUVsZW1lbnQsIHJlY3RhbmdsZXNPdmVybGFwLCByZXBlYXRUYXNrfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHtDb29raWV9IGZyb20gJy4vY29va2llJztcclxuaW1wb3J0IHtSb2FkRHJhd2luZ30gZnJvbSAnLi9kZWNvcmF0aW9ucyc7XHJcbmltcG9ydCB7Q2FudmFzLCBkcmF3Q2FyLCBkcmF3Q2FycywgZHJhd0RlY29yYXRpb25zLCBTY29yZURpc3BsYXl9IGZyb20gJy4vZ3JhcGhpY3MnO1xyXG5cclxuY29uc3QgbGFuZUNvdW50ID0gNjtcclxuY29uc3QgbWFwV2lkdGggPSBsYW5lQ291bnQqY2FyV2lkdGg7XHJcbmNvbnN0IG1hcEhlaWdodCA9IGNhckhlaWdodCo2O1xyXG5jb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSAnI0U2RTZGNSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gbWFwV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gbWFwSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQnKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlc3RhcnRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyID0gUGxheWVyQ2FyLmF0RGVmYXVsdFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5lbmVteUNhcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmRlY29yYXRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZVRyYXZlbGVkID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb29raWUgPSBuZXcgQ29va2llKGRvY3VtZW50KTtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXIgPSBuZXcgS2V5SGFuZGxlcihkb2N1bWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVwZWF0VGFza1doaWxlUnVubmluZyh7XHJcbiAgICAgICAgICAgIHRhc2s6ICgpID0+IHRoaXMuZW5lbXlDYXJzLnB1c2goRW5lbXlDYXIuYXRSYW5kb21Qb3NpdGlvbigpKSwgXHJcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kczogKCkgPT4gMTAwMC90aGlzLnBsYXllckNhci52ZXJ0aWNhbFNwZWVkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVwZWF0VGFza1doaWxlUnVubmluZyh7XHJcbiAgICAgICAgICAgIHRhc2s6ICgpID0+IHRoaXMuZGVjb3JhdGlvbnMucHVzaChSb2FkRHJhd2luZy5hdERlZmF1bHRQb3NpdGlvbihtYXBXaWR0aCkpLFxyXG4gICAgICAgICAgICBtaWxsaXNlY29uZHM6ICgpID0+IDM1MC90aGlzLnBsYXllckNhci52ZXJ0aWNhbFNwZWVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyID0gUGxheWVyQ2FyLmF0RGVmYXVsdFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5lbmVteUNhcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmRlY29yYXRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZVRyYXZlbGVkID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHJlcGVhdFRhc2soe1xyXG4gICAgICAgICAgICB0YXNrOiB0aW1lRGVsdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUFsbE9iamVjdHModGltZURlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lPZmZzY3JlZW5PYmplY3RzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3RXZlcnl0aGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tHYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tHYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDYXJDcmFzaGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Njb3JlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyQ2FyQ3Jhc2hlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteUNhcnMuc29tZShlbmVteUNhciA9PiBjYXJzQ3Jhc2hlZChlbmVteUNhciwgdGhpcy5wbGF5ZXJDYXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2NvcmUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NvcmUgPSB0aGlzLmNhbGN1bGF0ZVNjb3JlKCk7XHJcbiAgICAgICAgY29uc3QgaGlnaFNjb3JlID0gcmVhZEhpZ2hTY29yZSh0aGlzLmNvb2tpZSk7XHJcbiAgICAgICAgbGV0IG91dHB1dFRleHQgPSBgRmluYWwgc2NvcmU6ICR7c2NvcmV9YDtcclxuICAgICAgICBpZiAoIWhpZ2hTY29yZSB8fCBzY29yZSA+IGhpZ2hTY29yZSkge1xyXG4gICAgICAgICAgICB3cml0ZUhpZ2hTY29yZSh0aGlzLmNvb2tpZSwgc2NvcmUpO1xyXG4gICAgICAgICAgICBvdXRwdXRUZXh0ID0gYE5ldyBoaWdoIHNjb3JlISR7b3V0cHV0VGV4dH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5pbm5lckhUTUwgPSBvdXRwdXRUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVNjb3JlKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZGlzdGFuY2VUcmF2ZWxlZC8xZTMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVBbGxPYmplY3RzKHRpbWVEZWx0YSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyLnVwZGF0ZVNwZWVkKHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZpdHlTeXN0ZW0gPSBWZXJ0aWNhbFJlbGF0aXZpdHlTeXN0ZW0ucmVsYXRpdmVUbyh0aGlzLnBsYXllckNhcik7XHJcbiAgICAgICAgcmVsYXRpdml0eVN5c3RlbS5hZGRFbGVtZW50cyh0aGlzLmVuZW15Q2Fycyk7XHJcbiAgICAgICAgcmVsYXRpdml0eVN5c3RlbS5hZGRFbGVtZW50cyh0aGlzLmRlY29yYXRpb25zKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5rZXlIYW5kbGVyLmtleUlzRG93bignQXJyb3dMZWZ0JykpXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2FyLm1vdmVMZWZ0KDAsIHRpbWVEZWx0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5SGFuZGxlci5rZXlJc0Rvd24oJ0Fycm93UmlnaHQnKSlcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDYXIubW92ZVJpZ2h0KG1hcFdpZHRoLWNhcldpZHRoLCB0aW1lRGVsdGEpO1xyXG5cclxuICAgICAgICByZWxhdGl2aXR5U3lzdGVtLm1vdmVFbGVtZW50cyh0aW1lRGVsdGEpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3RhbmNlVHJhdmVsZWQgKz0gdGhpcy5wbGF5ZXJDYXIudmVydGljYWxTcGVlZCAqIHRpbWVEZWx0YTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95T2Zmc2NyZWVuT2JqZWN0cygpIHtcclxuICAgICAgICB0aGlzLmVuZW15Q2FycyA9IGFjdGl2ZU9iamVjdHModGhpcy5lbmVteUNhcnMpO1xyXG4gICAgICAgIHRoaXMuZGVjb3JhdGlvbnMgPSBhY3RpdmVPYmplY3RzKHRoaXMuZGVjb3JhdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNsZWFyKGJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0V2ZXJ5dGhpbmcoKSB7XHJcbiAgICAgICAgZHJhd0RlY29yYXRpb25zKHRoaXMuY2FudmFzLCB0aGlzLmRlY29yYXRpb25zKTtcclxuICAgICAgICBkcmF3Q2FyKHRoaXMuY2FudmFzLCB0aGlzLnBsYXllckNhcik7XHJcbiAgICAgICAgZHJhd0NhcnModGhpcy5jYW52YXMsIHRoaXMuZW5lbXlDYXJzKTtcclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS5pbm5lckhUTUwgPSB0aGlzLmNhbGN1bGF0ZVNjb3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwZWF0VGFza1doaWxlUnVubmluZyh7dGFzaywgbWlsbGlzZWNvbmRzfSkge1xyXG4gICAgICAgIHJlcGVhdFRhc2soe1xyXG4gICAgICAgICAgICB0YXNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFzaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtaWxsaXNlY29uZHNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgS2V5SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xyXG4gICAgICAgIHRoaXMua2V5RG93bk1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKHtrZXl9KSA9PiB0aGlzLmtleURvd25NYXAuc2V0KGtleSwgdHJ1ZSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHtrZXl9KSA9PiB0aGlzLmtleURvd25NYXAuc2V0KGtleSwgZmFsc2UpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAga2V5SXNEb3duKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleURvd25NYXAuZ2V0KGtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHJhbmRvbUVsZW1lbnQoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICd5ZWxsb3cnLCAncHVycGxlJywgJ29yYW5nZScsICdtYWdlbnRhJywgJ2FxdWEnLCAnbWFyb29uJ10pO1xyXG59XHJcblxyXG5jbGFzcyBDYXIge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gcmFuZG9tQ29sb3IoKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcGh5c2ljYWxQYXJ0cygpIHtcclxuICAgICAgICByZXR1cm4gY2FyUGFydHModGhpcy5wb3NpdGlvbiwgdGhpcy5jb2xvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllckNhciBleHRlbmRzIENhciB7XHJcbiAgICBzdGF0aWMgYXREZWZhdWx0UG9zaXRpb24oKXtcclxuICAgICAgICByZXR1cm4gbmV3IFBsYXllckNhcih7XHJcbiAgICAgICAgICAgIHg6IG1hcFdpZHRoLzItY2FyV2lkdGgvMixcclxuICAgICAgICAgICAgeTogbWFwSGVpZ2h0LWNhckhlaWdodC01XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJhc2VTcGVlZCgpIHtcclxuICAgICAgICByZXR1cm4gMC44O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYXhTcGVlZCgpIHtcclxuICAgICAgICByZXR1cm4gMjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxTcGVlZCA9IHRoaXMudmVydGljYWxTcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTcGVlZCgwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTcGVlZChkaXN0YW5jZVRyYXZlbGVkKSB7XHJcbiAgICAgICAgY29uc3QgbmV3U3BlZWQgPSBNYXRoLmFicyhkaXN0YW5jZVRyYXZlbGVkLzUwMDAwKStQbGF5ZXJDYXIuYmFzZVNwZWVkKCk7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsU3BlZWQgPSB0aGlzLnZlcnRpY2FsU3BlZWQgPSBcclxuICAgICAgICAgICAgKG5ld1NwZWVkID4gUGxheWVyQ2FyLm1heFNwZWVkKCkpID8gUGxheWVyQ2FyLm1heFNwZWVkKCkgOiBuZXdTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlTGVmdChsZWZ0Qm91bmRhcnksIHRpbWVEZWx0YSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1ggPSB0aGlzLnBvc2l0aW9uLngtdGhpcy5ob3Jpem9udGFsU3BlZWQgKiB0aW1lRGVsdGE7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gKG5ld1ggPCBsZWZ0Qm91bmRhcnkpID8gbGVmdEJvdW5kYXJ5IDogbmV3WDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlUmlnaHQocmlnaHRCb3VuZGFyeSwgdGltZURlbHRhKSB7XHJcbiAgICAgICAgY29uc3QgbmV3WCA9IHRoaXMucG9zaXRpb24ueCt0aGlzLmhvcml6b250YWxTcGVlZCAqIHRpbWVEZWx0YTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAobmV3WCA+IHJpZ2h0Qm91bmRhcnkpID8gcmlnaHRCb3VuZGFyeSA6IG5ld1g7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEVuZW15Q2FyIGV4dGVuZHMgQ2FyIHtcclxuICAgIHN0YXRpYyBhdFJhbmRvbVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlDYXIoe1xyXG4gICAgICAgICAgICB4OiBjYW52YXMud2lkdGgvbGFuZUNvdW50KnJhbmRvbVJhbmdlKDAsIGxhbmVDb3VudCksIFxyXG4gICAgICAgICAgICB5OiAtY2FySGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNwZWVkID0gMC40NTtcclxuICAgIH1cclxuXHJcbiAgICBwaHlzaWNhbFBhcnRzKCkge1xyXG4gICAgICAgIHJldHVybiBjYXJQYXJ0cyh0aGlzLnBvc2l0aW9uLCB0aGlzLmNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2Fyc0NyYXNoZWQoYzEsIGMyKSB7XHJcbiAgICBmb3IgKGNvbnN0IHBhcnQxIG9mIGMxLnBoeXNpY2FsUGFydHMoKSlcclxuICAgICAgICBmb3IgKGNvbnN0IHBhcnQyIG9mIGMyLnBoeXNpY2FsUGFydHMoKSlcclxuICAgICAgICAgICAgaWYgKHJlY3RhbmdsZXNPdmVybGFwKHBhcnQxLnJlY3QsIHBhcnQyLnJlY3QpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2ZU9iamVjdHMob2JqZWN0cykge1xyXG4gICAgY29uc3QgaXNBY3RpdmUgPSAob2JqZWN0KSA9PiBvYmplY3QucG9zaXRpb24ueSA8IG1hcEhlaWdodDtcclxuICAgIHJldHVybiBvYmplY3RzLmZpbHRlcihpc0FjdGl2ZSk7XHJcbn1cclxuXHJcbmNsYXNzIFZlcnRpY2FsUmVsYXRpdml0eVN5c3RlbSB7XHJcbiAgICBzdGF0aWMgcmVsYXRpdmVUbyh7b2JqZWN0LCB2ZXJ0aWNhbFNwZWVkfSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVydGljYWxSZWxhdGl2aXR5U3lzdGVtKHtvYmplY3QsIHZlcnRpY2FsU3BlZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXJPYmplY3QpIHtcclxuICAgICAgICB0aGlzLmNlbnRlck9iamVjdCA9IGNlbnRlck9iamVjdDtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRWxlbWVudHMoZWxlbWVudEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKC4uLmVsZW1lbnRBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUVsZW1lbnRzKHRpbWVEZWx0YSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLmVsZW1lbnRzKVxyXG4gICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnkgKz0gKHRoaXMuY2VudGVyT2JqZWN0LnZlcnRpY2FsU3BlZWQtZWxlbWVudC52ZXJ0aWNhbFNwZWVkKSAqIHRpbWVEZWx0YTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY29va2llSGlnaFNjb3JlS2V5ID0gJ2hpZ2hzY29yZSc7XHJcblxyXG5mdW5jdGlvbiByZWFkSGlnaFNjb3JlKGNvb2tpZSkge1xyXG4gICAgcmV0dXJuIGNvb2tpZS5yZWFkKGNvb2tpZUhpZ2hTY29yZUtleSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlSGlnaFNjb3JlKGNvb2tpZSwgaGlnaFNjb3JlKSB7XHJcbiAgICBjb29raWUud3JpdGUoY29va2llSGlnaFNjb3JlS2V5LCBoaWdoU2NvcmUpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZHJhd1JlY3Qoe3gsIHksIHdpZHRoLCBoZWlnaHR9LCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3UmVjdCh7XHJcbiAgICAgICAgICAgIHg6IDAsIFxyXG4gICAgICAgICAgICB5OiAwLCBcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgfSwgYmFja2dyb3VuZENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWlnaHQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlRGlzcGxheSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xyXG4gICAgICAgIHRoaXMucCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5wLmlubmVySFRNTCA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FyKGNhbnZhcywgY2FyKSB7XHJcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgY2FyLnBoeXNpY2FsUGFydHMoKSlcclxuICAgICAgICBjYW52YXMuZHJhd1JlY3QocGFydC5yZWN0LCBwYXJ0LmNvbG9yKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDYXJzKGNhbnZhcywgY2Fycykge1xyXG4gICAgZm9yIChjb25zdCBjYXIgb2YgY2FycylcclxuICAgICAgICBkcmF3Q2FyKGNhbnZhcywgY2FyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdEZWNvcmF0aW9ucyhjYW52YXMsIGRlY29yYXRpb25zKSB7XHJcbiAgICBmb3IgKGNvbnN0IGRlY29yYXRpb24gb2YgZGVjb3JhdGlvbnMpXHJcbiAgICAgICAgY2FudmFzLmRyYXdSZWN0KGRlY29yYXRpb24ucmVjdCwgZGVjb3JhdGlvbi5jb2xvcik7XHJcbn1cclxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tICcuL2dhbWUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwUmVzdGFydEJ1dHRvbigpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0Jyk7XHJcblxyXG59XHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoZG9jdW1lbnQpO1xyXG5nYW1lLnJ1bigpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0VGFzayh7dGFzaywgbWlsbGlzZWNvbmRzfSkge1xyXG4gICAgaWYgKG1pbGxpc2Vjb25kcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcnVuVGFzayh0YXNrKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRpbWVyID0gbWlsbGlzZWNvbmRzKCk7XHJcblxyXG4gICAgcnVuVGFzayh0aW1lRGVsdGEgPT4ge1xyXG4gICAgICAgIHRpbWVyIC09IHRpbWVEZWx0YTtcclxuXHJcbiAgICAgICAgaWYgKHRpbWVyIDw9IDApIHtcclxuICAgICAgICAgICAgdGltZXIgPSBtaWxsaXNlY29uZHMoKTtcclxuICAgICAgICAgICAgdGFzaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1blRhc2sodGFzaykge1xyXG4gICAgbGV0IGxhc3RDYWxsID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGVwKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuXHJcbiAgICAgICAgaWYgKGxhc3RDYWxsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxhc3RDYWxsID0gdGltZXN0YW1wO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0aW1lRGVsdGEgPSB0aW1lc3RhbXAgLSBsYXN0Q2FsbDtcclxuICAgICAgICBsYXN0Q2FsbCA9IHRpbWVzdGFtcDtcclxuICAgICAgICB0YXNrKHRpbWVEZWx0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tRWxlbWVudChhcnJheSkge1xyXG4gICAgcmV0dXJuIGFycmF5W3JhbmRvbVJhbmdlKDAsIGFycmF5Lmxlbmd0aCldO1xyXG59IFxyXG5cclxuLy8gbWluIGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZSwgbWF4IGlzbid0XHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21SYW5nZShtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXgtbWluKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVzT3ZlcmxhcChyZWN0MSwgcmVjdDIpIHtcclxuICAgIHJldHVybiByZWN0YW5nbGVQb2ludHMocmVjdDEpLnNvbWUocG9pbnQgPT4gcG9pbnRJc0luc2lkZVJlY3RhbmdsZShwb2ludCwgcmVjdDIpKSB8fFxyXG4gICAgICAgICAgICByZWN0YW5nbGVQb2ludHMocmVjdDIpLnNvbWUocG9pbnQgPT4gcG9pbnRJc0luc2lkZVJlY3RhbmdsZShwb2ludCwgcmVjdDEpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50SXNJbnNpZGVSZWN0YW5nbGUocG9pbnQsIHJlY3QpIHtcclxuICAgIGNvbnN0IHVwcGVyTGVmdFJlY3RQb2ludCA9IHVwcGVyTGVmdFBvaW50KHJlY3QpO1xyXG4gICAgY29uc3QgbG93ZXJSaWdodFJlY3RQb2ludCA9IGxvd2VyUmlnaHRQb2ludChyZWN0KTtcclxuICAgIHJldHVybiAocG9pbnQueCA+IHVwcGVyTGVmdFJlY3RQb2ludC54ICYmIHBvaW50LnggPCBsb3dlclJpZ2h0UmVjdFBvaW50LngpICYmXHJcbiAgICAgICAgICAgIChwb2ludC55ID4gdXBwZXJMZWZ0UmVjdFBvaW50LnkgJiYgcG9pbnQueSA8IGxvd2VyUmlnaHRSZWN0UG9pbnQueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHBlckxlZnRQb2ludChyZWN0KSB7XHJcbiAgICByZXR1cm4ge3g6IHJlY3QueCwgeTogcmVjdC55fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwcGVyUmlnaHRQb2ludChyZWN0KSB7XHJcbiAgICByZXR1cm4ge3g6IHJlY3QueCtyZWN0LndpZHRoLCB5OiByZWN0Lnl9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG93ZXJMZWZ0UG9pbnQocmVjdCkge1xyXG4gICAgcmV0dXJuIHt4OiByZWN0LngsIHk6IHJlY3QueStyZWN0LmhlaWdodH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb3dlclJpZ2h0UG9pbnQocmVjdCkge1xyXG4gICAgcmV0dXJuIHt4OiByZWN0LngrcmVjdC53aWR0aCwgeTogcmVjdC55K3JlY3QuaGVpZ2h0fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RhbmdsZVBvaW50cyhyZWN0YW5nbGUpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgdXBwZXJMZWZ0UG9pbnQocmVjdGFuZ2xlKSxcclxuICAgICAgICB1cHBlclJpZ2h0UG9pbnQocmVjdGFuZ2xlKSxcclxuICAgICAgICBsb3dlckxlZnRQb2ludChyZWN0YW5nbGUpLFxyXG4gICAgICAgIGxvd2VyUmlnaHRQb2ludChyZWN0YW5nbGUpXHJcbiAgICBdO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==