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
      this.document.cookie += "".concat(key, "=").concat(value, ";");
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

    this.canvas = new _graphics__WEBPACK_IMPORTED_MODULE_4__["Canvas"](document);
    this.canvas.width = mapWidth;
    this.canvas.height = mapHeight;
    this.scoreDisplay = new _graphics__WEBPACK_IMPORTED_MODULE_4__["ScoreDisplay"](document);
    this.playerCar = PlayerCar.atDefaultPosition();
    this.enemyCars = [];
    this.decorations = [];
    this.distanceTraveled = 0;
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
      var outputText = "Final score: ".concat(score, ".");

      if (!highScore || score > highScore) {
        writeHighScore(this.cookie, score);
        outputText = "New high score!\n".concat(outputText);
      }

      alert(outputText);
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
      this.scoreDisplay.update(this.calculateScore());
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
  function Canvas(document) {
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
    key: "update",
    value: function update(value) {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");

var game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"](document);
game.run();

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: repeatTask, randomElement, randomRange, addPoints, subtractPoints, pointsAreEqual, rectanglesOverlap, pointIsInsideRectangle, upperLeftPoint, upperRightPoint, lowerLeftPoint, lowerRightPoint, rectanglePoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatTask", function() { return repeatTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomElement", function() { return randomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomRange", function() { return randomRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPoints", function() { return addPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractPoints", function() { return subtractPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointsAreEqual", function() { return pointsAreEqual; });
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
function addPoints(p1, p2) {
  return {
    x: p1.x + p2.x,
    y: p1.y + p2.y
  };
}
function subtractPoints(p1, p2) {
  return {
    x: p1.x - p2.x,
    y: p1.y - p2.y
  };
}
function pointsAreEqual(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhclBhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbInRpcmVXaWR0aCIsInRpcmVIZWlnaHQiLCJib25uZXRXaWR0aCIsImJvbm5ldEhlaWdodCIsInJvb2ZXaWR0aCIsInJvb2ZIZWlnaHQiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsInRpcmUiLCJ4IiwieSIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY2FyUGFydHMiLCJwb3NpdGlvbiIsImJvbm5ldCIsInJvb2YiLCJmcm9udExlZnRUaXJlIiwiYm90dG9tTGVmdFRpcmUiLCJmcm9udFJpZ2h0VGlyZSIsImJvdHRvbVJpZ2h0VGlyZSIsIkNvb2tpZSIsImRvY3VtZW50Iiwia2V5IiwicGFpcldpdGhOZWVkZWRLZXkiLCJrZXlWYWx1ZVBhaXJzIiwiZmluZCIsInBhaXIiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImNvb2tpZSIsInNwbGl0IiwibWFwIiwicGllY2UiLCJyb2FkRHJhd2luZ1dpZHRoIiwicm9hZERyYXdpbmdIZWlnaHQiLCJSb2FkRHJhd2luZyIsIm1hcFdpZHRoIiwidmVydGljYWxTcGVlZCIsImxhbmVDb3VudCIsIm1hcEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIkdhbWUiLCJjYW52YXMiLCJDYW52YXMiLCJzY29yZURpc3BsYXkiLCJTY29yZURpc3BsYXkiLCJwbGF5ZXJDYXIiLCJQbGF5ZXJDYXIiLCJhdERlZmF1bHRQb3NpdGlvbiIsImVuZW15Q2FycyIsImRlY29yYXRpb25zIiwiZGlzdGFuY2VUcmF2ZWxlZCIsImtleUhhbmRsZXIiLCJLZXlIYW5kbGVyIiwicmVwZWF0VGFza1doaWxlUnVubmluZyIsInRhc2siLCJwdXNoIiwiRW5lbXlDYXIiLCJhdFJhbmRvbVBvc2l0aW9uIiwibWlsbGlzZWNvbmRzIiwicmVwZWF0VGFzayIsInRpbWVEZWx0YSIsImdhbWVPdmVyIiwiY2xlYXJDYW52YXMiLCJtb3ZlQWxsT2JqZWN0cyIsImRlc3Ryb3lPZmZzY3JlZW5PYmplY3RzIiwiZHJhd0V2ZXJ5dGhpbmciLCJjaGVja0dhbWVPdmVyIiwicGxheWVyQ2FyQ3Jhc2hlZCIsInNob3dTY29yZSIsInNvbWUiLCJlbmVteUNhciIsImNhcnNDcmFzaGVkIiwic2NvcmUiLCJjYWxjdWxhdGVTY29yZSIsImhpZ2hTY29yZSIsInJlYWRIaWdoU2NvcmUiLCJvdXRwdXRUZXh0Iiwid3JpdGVIaWdoU2NvcmUiLCJhbGVydCIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNwZWVkIiwicmVsYXRpdml0eVN5c3RlbSIsIlZlcnRpY2FsUmVsYXRpdml0eVN5c3RlbSIsInJlbGF0aXZlVG8iLCJhZGRFbGVtZW50cyIsImtleUlzRG93biIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibW92ZUVsZW1lbnRzIiwiYWN0aXZlT2JqZWN0cyIsImNsZWFyIiwiZHJhd0RlY29yYXRpb25zIiwiZHJhd0NhciIsImRyYXdDYXJzIiwidXBkYXRlIiwia2V5RG93bk1hcCIsIk1hcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXQiLCJnZXQiLCJyYW5kb21Db2xvciIsInJhbmRvbUVsZW1lbnQiLCJDYXIiLCJob3Jpem9udGFsU3BlZWQiLCJuZXdTcGVlZCIsImFicyIsImJhc2VTcGVlZCIsIm1heFNwZWVkIiwibGVmdEJvdW5kYXJ5IiwibmV3WCIsInJpZ2h0Qm91bmRhcnkiLCJyYW5kb21SYW5nZSIsImMxIiwiYzIiLCJwaHlzaWNhbFBhcnRzIiwicGFydDEiLCJwYXJ0MiIsInJlY3RhbmdsZXNPdmVybGFwIiwib2JqZWN0cyIsImlzQWN0aXZlIiwib2JqZWN0IiwiZmlsdGVyIiwiY2VudGVyT2JqZWN0IiwiZWxlbWVudHMiLCJlbGVtZW50QXJyYXkiLCJlbGVtZW50IiwiY29va2llSGlnaFNjb3JlS2V5IiwicmVhZCIsIndyaXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd1JlY3QiLCJwIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJjYXIiLCJwYXJ0IiwiY2FycyIsImRlY29yYXRpb24iLCJnYW1lIiwicnVuIiwicnVuVGFzayIsInRpbWVyIiwibGFzdENhbGwiLCJzdGVwIiwidGltZXN0YW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXJyYXkiLCJsZW5ndGgiLCJtaW4iLCJtYXgiLCJyYW5kb20iLCJhZGRQb2ludHMiLCJwMSIsInAyIiwic3VidHJhY3RQb2ludHMiLCJwb2ludHNBcmVFcXVhbCIsInJlY3QxIiwicmVjdDIiLCJyZWN0YW5nbGVQb2ludHMiLCJwb2ludCIsInBvaW50SXNJbnNpZGVSZWN0YW5nbGUiLCJ1cHBlckxlZnRSZWN0UG9pbnQiLCJ1cHBlckxlZnRQb2ludCIsImxvd2VyUmlnaHRSZWN0UG9pbnQiLCJsb3dlclJpZ2h0UG9pbnQiLCJ1cHBlclJpZ2h0UG9pbnQiLCJsb3dlckxlZnRQb2ludCIsInJlY3RhbmdsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFD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QyxHQUFQO0FBQ0g7QUFFTSxTQUFTMEosZUFBVCxDQUF5QlMsU0FBekIsRUFBb0M7QUFDdkMsU0FBTyxDQUNITCxjQUFjLENBQUNLLFNBQUQsQ0FEWCxFQUVIRixlQUFlLENBQUNFLFNBQUQsQ0FGWixFQUdIRCxjQUFjLENBQUNDLFNBQUQsQ0FIWCxFQUlISCxlQUFlLENBQUNHLFNBQUQsQ0FKWixDQUFQO0FBTUgsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCB0aXJlV2lkdGggPSA3O1xyXG5leHBvcnQgY29uc3QgdGlyZUhlaWdodCA9IDE1O1xyXG5leHBvcnQgY29uc3QgYm9ubmV0V2lkdGggPSAzMDtcclxuZXhwb3J0IGNvbnN0IGJvbm5ldEhlaWdodCA9IDIwO1xyXG5leHBvcnQgY29uc3Qgcm9vZldpZHRoID0gYm9ubmV0V2lkdGgrdGlyZVdpZHRoKjI7XHJcbmV4cG9ydCBjb25zdCByb29mSGVpZ2h0ID0gYm9ubmV0SGVpZ2h0KzUwO1xyXG5leHBvcnQgY29uc3QgY2FyV2lkdGggPSByb29mV2lkdGgrdGlyZVdpZHRoKjJcclxuZXhwb3J0IGNvbnN0IGNhckhlaWdodCA9IHJvb2ZIZWlnaHQrYm9ubmV0SGVpZ2h0O1xyXG5cclxuZnVuY3Rpb24gdGlyZSh7eCwgeX0pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVjdDoge1xyXG4gICAgICAgICAgICB4LCB5LCBcclxuICAgICAgICAgICAgd2lkdGg6IHRpcmVXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aXJlSGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhclBhcnRzKHBvc2l0aW9uLCBjb2xvcikge1xyXG4gICAgY29uc3QgYm9ubmV0ID0ge1xyXG4gICAgICAgIHJlY3Q6IHtcclxuICAgICAgICAgICAgeDogcG9zaXRpb24ueCt0aXJlV2lkdGgqMiwgXHJcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uLnksIFxyXG4gICAgICAgICAgICB3aWR0aDogYm9ubmV0V2lkdGgsIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJvbm5ldEhlaWdodCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgcm9vZiA9IHtcclxuICAgICAgICByZWN0OiB7XHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLngrdGlyZVdpZHRoLCBcclxuICAgICAgICAgICAgeTogYm9ubmV0LnJlY3QueStib25uZXRIZWlnaHQsIFxyXG4gICAgICAgICAgICB3aWR0aDogcm9vZldpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHJvb2ZIZWlnaHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZnJvbnRMZWZ0VGlyZSA9IHRpcmUoe1xyXG4gICAgICAgIHg6IHBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogcm9vZi5yZWN0LnkrNVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBib3R0b21MZWZ0VGlyZSA9IHRpcmUoe1xyXG4gICAgICAgIHg6IHBvc2l0aW9uLngsIFxyXG4gICAgICAgIHk6IHJvb2YucmVjdC55K3Jvb2ZIZWlnaHQtMjBcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZnJvbnRSaWdodFRpcmUgPSB0aXJlKHtcclxuICAgICAgICB4OiByb29mLnJlY3QueCtyb29mV2lkdGgsIFxyXG4gICAgICAgIHk6IHJvb2YucmVjdC55KzVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYm90dG9tUmlnaHRUaXJlID0gdGlyZSh7XHJcbiAgICAgICAgeDogcm9vZi5yZWN0Lngrcm9vZldpZHRoLCBcclxuICAgICAgICB5OiByb29mLnJlY3QueStyb29mSGVpZ2h0LTIwXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGJvbm5ldCwgcm9vZiwgZnJvbnRMZWZ0VGlyZSwgYm90dG9tTGVmdFRpcmUsIGZyb250UmlnaHRUaXJlLCBib3R0b21SaWdodFRpcmVcclxuICAgIF07XHJcbn07IiwiZXhwb3J0IGNsYXNzIENvb2tpZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZWFkKGtleSkge1xyXG4gICAgICAgIGNvbnN0IHBhaXJXaXRoTmVlZGVkS2V5ID0gdGhpcy5rZXlWYWx1ZVBhaXJzKCkuZmluZChwYWlyID0+IHBhaXIua2V5ID09PSBrZXkpO1xyXG4gICAgICAgIHJldHVybiBwYWlyV2l0aE5lZWRlZEtleSA/IHBhaXJXaXRoTmVlZGVkS2V5LnZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGtleVZhbHVlUGFpcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpLm1hcChwaWVjZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHBpZWNlLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7a2V5LCB2YWx1ZX07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGUoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnQuY29va2llICs9IGAke2tleX09JHt2YWx1ZX07YDtcclxuICAgIH1cclxufVxyXG4iLCJcclxuY29uc3Qgcm9hZERyYXdpbmdXaWR0aCA9IDMwO1xyXG5jb25zdCByb2FkRHJhd2luZ0hlaWdodCA9IDEyMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb2FkRHJhd2luZyB7XHJcbiAgICBzdGF0aWMgYXREZWZhdWx0UG9zaXRpb24obWFwV2lkdGgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJvYWREcmF3aW5nKHtcclxuICAgICAgICAgICAgeDogbWFwV2lkdGgvMi1yb2FkRHJhd2luZ1dpZHRoLzIsXHJcbiAgICAgICAgICAgIHk6IC1yb2FkRHJhd2luZ0hlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAnZ3JleSc7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNwZWVkID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVjdCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgd2lkdGg6IHJvYWREcmF3aW5nV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogcm9hZERyYXdpbmdIZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7Y2FyUGFydHMsIGNhcldpZHRoLCBjYXJIZWlnaHR9IGZyb20gJy4vY2FyUGFydHMnO1xyXG5pbXBvcnQge3JhbmRvbVJhbmdlLCByYW5kb21FbGVtZW50LCByZWN0YW5nbGVzT3ZlcmxhcCwgcmVwZWF0VGFza30gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7Q29va2llfSBmcm9tICcuL2Nvb2tpZSc7XHJcbmltcG9ydCB7Um9hZERyYXdpbmd9IGZyb20gJy4vZGVjb3JhdGlvbnMnO1xyXG5pbXBvcnQge0NhbnZhcywgZHJhd0NhciwgZHJhd0NhcnMsIGRyYXdEZWNvcmF0aW9ucywgU2NvcmVEaXNwbGF5fSBmcm9tICcuL2dyYXBoaWNzJztcclxuXHJcbmNvbnN0IGxhbmVDb3VudCA9IDY7XHJcbmNvbnN0IG1hcFdpZHRoID0gbGFuZUNvdW50KmNhcldpZHRoO1xyXG5jb25zdCBtYXBIZWlnaHQgPSBjYXJIZWlnaHQqNjtcclxuY29uc3QgYmFja2dyb3VuZENvbG9yID0gJyNFNkU2RjUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoZG9jdW1lbnQpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gbWFwV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gbWFwSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5ID0gbmV3IFNjb3JlRGlzcGxheShkb2N1bWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyID0gUGxheWVyQ2FyLmF0RGVmYXVsdFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5lbmVteUNhcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmRlY29yYXRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZVRyYXZlbGVkID0gMDtcclxuICAgICAgICB0aGlzLmNvb2tpZSA9IG5ldyBDb29raWUoZG9jdW1lbnQpO1xyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlciA9IG5ldyBLZXlIYW5kbGVyKGRvY3VtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXBlYXRUYXNrV2hpbGVSdW5uaW5nKHtcclxuICAgICAgICAgICAgdGFzazogKCkgPT4gdGhpcy5lbmVteUNhcnMucHVzaChFbmVteUNhci5hdFJhbmRvbVBvc2l0aW9uKCkpLCBcclxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzOiAoKSA9PiAxMDAwL3RoaXMucGxheWVyQ2FyLnZlcnRpY2FsU3BlZWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZXBlYXRUYXNrV2hpbGVSdW5uaW5nKHtcclxuICAgICAgICAgICAgdGFzazogKCkgPT4gdGhpcy5kZWNvcmF0aW9ucy5wdXNoKFJvYWREcmF3aW5nLmF0RGVmYXVsdFBvc2l0aW9uKG1hcFdpZHRoKSksXHJcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kczogKCkgPT4gMzUwL3RoaXMucGxheWVyQ2FyLnZlcnRpY2FsU3BlZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgcmVwZWF0VGFzayh7XHJcbiAgICAgICAgICAgIHRhc2s6IHRpbWVEZWx0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQWxsT2JqZWN0cyh0aW1lRGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveU9mZnNjcmVlbk9iamVjdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdFdmVyeXRoaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0dhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0dhbWVPdmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNhckNyYXNoZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2NvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyQ2FyQ3Jhc2hlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmVteUNhcnMuc29tZShlbmVteUNhciA9PiBjYXJzQ3Jhc2hlZChlbmVteUNhciwgdGhpcy5wbGF5ZXJDYXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2NvcmUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NvcmUgPSB0aGlzLmNhbGN1bGF0ZVNjb3JlKCk7XHJcbiAgICAgICAgY29uc3QgaGlnaFNjb3JlID0gcmVhZEhpZ2hTY29yZSh0aGlzLmNvb2tpZSk7XHJcbiAgICAgICAgbGV0IG91dHB1dFRleHQgPSBgRmluYWwgc2NvcmU6ICR7c2NvcmV9LmA7XHJcbiAgICAgICAgaWYgKCFoaWdoU2NvcmUgfHwgc2NvcmUgPiBoaWdoU2NvcmUpIHtcclxuICAgICAgICAgICAgd3JpdGVIaWdoU2NvcmUodGhpcy5jb29raWUsIHNjb3JlKTtcclxuICAgICAgICAgICAgb3V0cHV0VGV4dCA9IGBOZXcgaGlnaCBzY29yZSFcXG4ke291dHB1dFRleHR9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlcnQob3V0cHV0VGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlU2NvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5kaXN0YW5jZVRyYXZlbGVkLzFlMyk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUFsbE9iamVjdHModGltZURlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDYXIudXBkYXRlU3BlZWQodGhpcy5kaXN0YW5jZVRyYXZlbGVkKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVsYXRpdml0eVN5c3RlbSA9IFZlcnRpY2FsUmVsYXRpdml0eVN5c3RlbS5yZWxhdGl2ZVRvKHRoaXMucGxheWVyQ2FyKTtcclxuICAgICAgICByZWxhdGl2aXR5U3lzdGVtLmFkZEVsZW1lbnRzKHRoaXMuZW5lbXlDYXJzKTtcclxuICAgICAgICByZWxhdGl2aXR5U3lzdGVtLmFkZEVsZW1lbnRzKHRoaXMuZGVjb3JhdGlvbnMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmtleUhhbmRsZXIua2V5SXNEb3duKCdBcnJvd0xlZnQnKSlcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDYXIubW92ZUxlZnQoMCwgdGltZURlbHRhKTtcclxuICAgICAgICBpZiAodGhpcy5rZXlIYW5kbGVyLmtleUlzRG93bignQXJyb3dSaWdodCcpKVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNhci5tb3ZlUmlnaHQobWFwV2lkdGgtY2FyV2lkdGgsIHRpbWVEZWx0YSk7XHJcblxyXG4gICAgICAgIHJlbGF0aXZpdHlTeXN0ZW0ubW92ZUVsZW1lbnRzKHRpbWVEZWx0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCArPSB0aGlzLnBsYXllckNhci52ZXJ0aWNhbFNwZWVkICogdGltZURlbHRhO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lPZmZzY3JlZW5PYmplY3RzKCkge1xyXG4gICAgICAgIHRoaXMuZW5lbXlDYXJzID0gYWN0aXZlT2JqZWN0cyh0aGlzLmVuZW15Q2Fycyk7XHJcbiAgICAgICAgdGhpcy5kZWNvcmF0aW9ucyA9IGFjdGl2ZU9iamVjdHModGhpcy5kZWNvcmF0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY2xlYXIoYmFja2dyb3VuZENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3RXZlcnl0aGluZygpIHtcclxuICAgICAgICBkcmF3RGVjb3JhdGlvbnModGhpcy5jYW52YXMsIHRoaXMuZGVjb3JhdGlvbnMpO1xyXG4gICAgICAgIGRyYXdDYXIodGhpcy5jYW52YXMsIHRoaXMucGxheWVyQ2FyKTtcclxuICAgICAgICBkcmF3Q2Fycyh0aGlzLmNhbnZhcywgdGhpcy5lbmVteUNhcnMpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnVwZGF0ZSh0aGlzLmNhbGN1bGF0ZVNjb3JlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGVhdFRhc2tXaGlsZVJ1bm5pbmcoe3Rhc2ssIG1pbGxpc2Vjb25kc30pIHtcclxuICAgICAgICByZXBlYXRUYXNrKHtcclxuICAgICAgICAgICAgdGFzazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVPdmVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2soKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEtleUhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcclxuICAgICAgICB0aGlzLmtleURvd25NYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICh7a2V5fSkgPT4gdGhpcy5rZXlEb3duTWFwLnNldChrZXksIHRydWUpKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7a2V5fSkgPT4gdGhpcy5rZXlEb3duTWFwLnNldChrZXksIGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGtleUlzRG93bihrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlEb3duTWFwLmdldChrZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcclxuICAgIHJldHVybiByYW5kb21FbGVtZW50KFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAneWVsbG93JywgJ3B1cnBsZScsICdvcmFuZ2UnLCAnbWFnZW50YScsICdhcXVhJywgJ21hcm9vbiddKTtcclxufVxyXG5cclxuY2xhc3MgQ2FyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHJhbmRvbUNvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHBoeXNpY2FsUGFydHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhclBhcnRzKHRoaXMucG9zaXRpb24sIHRoaXMuY29sb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXJDYXIgZXh0ZW5kcyBDYXIge1xyXG4gICAgc3RhdGljIGF0RGVmYXVsdFBvc2l0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXJDYXIoe1xyXG4gICAgICAgICAgICB4OiBtYXBXaWR0aC8yLWNhcldpZHRoLzIsXHJcbiAgICAgICAgICAgIHk6IG1hcEhlaWdodC1jYXJIZWlnaHQtNVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiYXNlU3BlZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDAuODtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWF4U3BlZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsU3BlZWQgPSB0aGlzLnZlcnRpY2FsU3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3BlZWQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3BlZWQoZGlzdGFuY2VUcmF2ZWxlZCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1NwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2VUcmF2ZWxlZC81MDAwMCkrUGxheWVyQ2FyLmJhc2VTcGVlZCgpO1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFNwZWVkID0gdGhpcy52ZXJ0aWNhbFNwZWVkID0gXHJcbiAgICAgICAgICAgIChuZXdTcGVlZCA+IFBsYXllckNhci5tYXhTcGVlZCgpKSA/IFBsYXllckNhci5tYXhTcGVlZCgpIDogbmV3U3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUxlZnQobGVmdEJvdW5kYXJ5LCB0aW1lRGVsdGEpIHtcclxuICAgICAgICBjb25zdCBuZXdYID0gdGhpcy5wb3NpdGlvbi54LXRoaXMuaG9yaXpvbnRhbFNwZWVkICogdGltZURlbHRhO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IChuZXdYIDwgbGVmdEJvdW5kYXJ5KSA/IGxlZnRCb3VuZGFyeSA6IG5ld1g7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVJpZ2h0KHJpZ2h0Qm91bmRhcnksIHRpbWVEZWx0YSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1ggPSB0aGlzLnBvc2l0aW9uLngrdGhpcy5ob3Jpem9udGFsU3BlZWQgKiB0aW1lRGVsdGE7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gKG5ld1ggPiByaWdodEJvdW5kYXJ5KSA/IHJpZ2h0Qm91bmRhcnkgOiBuZXdYO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFbmVteUNhciBleHRlbmRzIENhciB7XHJcbiAgICBzdGF0aWMgYXRSYW5kb21Qb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVuZW15Q2FyKHtcclxuICAgICAgICAgICAgeDogY2FudmFzLndpZHRoL2xhbmVDb3VudCpyYW5kb21SYW5nZSgwLCBsYW5lQ291bnQpLCBcclxuICAgICAgICAgICAgeTogLWNhckhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTcGVlZCA9IDAuNDU7XHJcbiAgICB9XHJcblxyXG4gICAgcGh5c2ljYWxQYXJ0cygpIHtcclxuICAgICAgICByZXR1cm4gY2FyUGFydHModGhpcy5wb3NpdGlvbiwgdGhpcy5jb2xvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhcnNDcmFzaGVkKGMxLCBjMikge1xyXG4gICAgZm9yIChjb25zdCBwYXJ0MSBvZiBjMS5waHlzaWNhbFBhcnRzKCkpXHJcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0MiBvZiBjMi5waHlzaWNhbFBhcnRzKCkpXHJcbiAgICAgICAgICAgIGlmIChyZWN0YW5nbGVzT3ZlcmxhcChwYXJ0MS5yZWN0LCBwYXJ0Mi5yZWN0KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhY3RpdmVPYmplY3RzKG9iamVjdHMpIHtcclxuICAgIGNvbnN0IGlzQWN0aXZlID0gKG9iamVjdCkgPT4gb2JqZWN0LnBvc2l0aW9uLnkgPCBtYXBIZWlnaHQ7XHJcbiAgICByZXR1cm4gb2JqZWN0cy5maWx0ZXIoaXNBY3RpdmUpO1xyXG59XHJcblxyXG5jbGFzcyBWZXJ0aWNhbFJlbGF0aXZpdHlTeXN0ZW0ge1xyXG4gICAgc3RhdGljIHJlbGF0aXZlVG8oe29iamVjdCwgdmVydGljYWxTcGVlZH0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVsYXRpdml0eVN5c3RlbSh7b2JqZWN0LCB2ZXJ0aWNhbFNwZWVkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2VudGVyT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJPYmplY3QgPSBjZW50ZXJPYmplY3Q7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEVsZW1lbnRzKGVsZW1lbnRBcnJheSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaCguLi5lbGVtZW50QXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVFbGVtZW50cyh0aW1lRGVsdGEpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGhpcy5lbGVtZW50cylcclxuICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi55ICs9ICh0aGlzLmNlbnRlck9iamVjdC52ZXJ0aWNhbFNwZWVkLWVsZW1lbnQudmVydGljYWxTcGVlZCkgKiB0aW1lRGVsdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvb2tpZUhpZ2hTY29yZUtleSA9ICdoaWdoc2NvcmUnO1xyXG5cclxuZnVuY3Rpb24gcmVhZEhpZ2hTY29yZShjb29raWUpIHtcclxuICAgIHJldHVybiBjb29raWUucmVhZChjb29raWVIaWdoU2NvcmVLZXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cml0ZUhpZ2hTY29yZShjb29raWUsIGhpZ2hTY29yZSkge1xyXG4gICAgY29va2llLndyaXRlKGNvb2tpZUhpZ2hTY29yZUtleSwgaGlnaFNjb3JlKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzIHtcclxuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZHJhd1JlY3Qoe3gsIHksIHdpZHRoLCBoZWlnaHR9LCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3UmVjdCh7XHJcbiAgICAgICAgICAgIHg6IDAsIFxyXG4gICAgICAgICAgICB5OiAwLCBcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgfSwgYmFja2dyb3VuZENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWlnaHQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlRGlzcGxheSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xyXG4gICAgICAgIHRoaXMucCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucC5pbm5lckhUTUwgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0NhcihjYW52YXMsIGNhcikge1xyXG4gICAgZm9yIChjb25zdCBwYXJ0IG9mIGNhci5waHlzaWNhbFBhcnRzKCkpXHJcbiAgICAgICAgY2FudmFzLmRyYXdSZWN0KHBhcnQucmVjdCwgcGFydC5jb2xvcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FycyhjYW52YXMsIGNhcnMpIHtcclxuICAgIGZvciAoY29uc3QgY2FyIG9mIGNhcnMpXHJcbiAgICAgICAgZHJhd0NhcihjYW52YXMsIGNhcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3RGVjb3JhdGlvbnMoY2FudmFzLCBkZWNvcmF0aW9ucykge1xyXG4gICAgZm9yIChjb25zdCBkZWNvcmF0aW9uIG9mIGRlY29yYXRpb25zKVxyXG4gICAgICAgIGNhbnZhcy5kcmF3UmVjdChkZWNvcmF0aW9uLnJlY3QsIGRlY29yYXRpb24uY29sb3IpO1xyXG59XHJcbiIsImltcG9ydCB7R2FtZX0gZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShkb2N1bWVudCk7XHJcbmdhbWUucnVuKCk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRUYXNrKHt0YXNrLCBtaWxsaXNlY29uZHN9KSB7XHJcbiAgICBpZiAobWlsbGlzZWNvbmRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBydW5UYXNrKHRhc2spO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGltZXIgPSBtaWxsaXNlY29uZHMoKTtcclxuXHJcbiAgICBydW5UYXNrKHRpbWVEZWx0YSA9PiB7XHJcbiAgICAgICAgdGltZXIgLT0gdGltZURlbHRhO1xyXG5cclxuICAgICAgICBpZiAodGltZXIgPD0gMCkge1xyXG4gICAgICAgICAgICB0aW1lciA9IG1pbGxpc2Vjb25kcygpO1xyXG4gICAgICAgICAgICB0YXNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuVGFzayh0YXNrKSB7XHJcbiAgICBsZXQgbGFzdENhbGwgPSBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0ZXAodGltZXN0YW1wKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG5cclxuICAgICAgICBpZiAobGFzdENhbGwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGFzdENhbGwgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWVEZWx0YSA9IHRpbWVzdGFtcCAtIGxhc3RDYWxsO1xyXG4gICAgICAgIGxhc3RDYWxsID0gdGltZXN0YW1wO1xyXG4gICAgICAgIHRhc2sodGltZURlbHRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21FbGVtZW50KGFycmF5KSB7XHJcbiAgICByZXR1cm4gYXJyYXlbcmFuZG9tUmFuZ2UoMCwgYXJyYXkubGVuZ3RoKV07XHJcbn0gXHJcblxyXG4vLyBtaW4gaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLCBtYXggaXNuJ3RcclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heC1taW4pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50cyhwMSwgcDIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogcDEueCtwMi54LFxyXG4gICAgICAgIHk6IHAxLnkrcDIueVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0UG9pbnRzKHAxLCBwMikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBwMS54LXAyLngsXHJcbiAgICAgICAgeTogcDEueS1wMi55XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRzQXJlRXF1YWwocDEsIHAyKSB7XHJcbiAgICByZXR1cm4gcDEueCA9PT0gcDIueCAmJiBwMS55ID09PSBwMi55O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlc092ZXJsYXAocmVjdDEsIHJlY3QyKSB7XHJcbiAgICByZXR1cm4gcmVjdGFuZ2xlUG9pbnRzKHJlY3QxKS5zb21lKHBvaW50ID0+IHBvaW50SXNJbnNpZGVSZWN0YW5nbGUocG9pbnQsIHJlY3QyKSkgfHxcclxuICAgICAgICAgICAgcmVjdGFuZ2xlUG9pbnRzKHJlY3QyKS5zb21lKHBvaW50ID0+IHBvaW50SXNJbnNpZGVSZWN0YW5nbGUocG9pbnQsIHJlY3QxKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludElzSW5zaWRlUmVjdGFuZ2xlKHBvaW50LCByZWN0KSB7XHJcbiAgICBjb25zdCB1cHBlckxlZnRSZWN0UG9pbnQgPSB1cHBlckxlZnRQb2ludChyZWN0KTtcclxuICAgIGNvbnN0IGxvd2VyUmlnaHRSZWN0UG9pbnQgPSBsb3dlclJpZ2h0UG9pbnQocmVjdCk7XHJcbiAgICByZXR1cm4gKHBvaW50LnggPiB1cHBlckxlZnRSZWN0UG9pbnQueCAmJiBwb2ludC54IDwgbG93ZXJSaWdodFJlY3RQb2ludC54KSAmJlxyXG4gICAgICAgICAgICAocG9pbnQueSA+IHVwcGVyTGVmdFJlY3RQb2ludC55ICYmIHBvaW50LnkgPCBsb3dlclJpZ2h0UmVjdFBvaW50LnkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBwZXJMZWZ0UG9pbnQocmVjdCkge1xyXG4gICAgcmV0dXJuIHt4OiByZWN0LngsIHk6IHJlY3QueX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHBlclJpZ2h0UG9pbnQocmVjdCkge1xyXG4gICAgcmV0dXJuIHt4OiByZWN0LngrcmVjdC53aWR0aCwgeTogcmVjdC55fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvd2VyTGVmdFBvaW50KHJlY3QpIHtcclxuICAgIHJldHVybiB7eDogcmVjdC54LCB5OiByZWN0LnkrcmVjdC5oZWlnaHR9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG93ZXJSaWdodFBvaW50KHJlY3QpIHtcclxuICAgIHJldHVybiB7eDogcmVjdC54K3JlY3Qud2lkdGgsIHk6IHJlY3QueStyZWN0LmhlaWdodH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVQb2ludHMocmVjdGFuZ2xlKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHVwcGVyTGVmdFBvaW50KHJlY3RhbmdsZSksXHJcbiAgICAgICAgdXBwZXJSaWdodFBvaW50KHJlY3RhbmdsZSksXHJcbiAgICAgICAgbG93ZXJMZWZ0UG9pbnQocmVjdGFuZ2xlKSxcclxuICAgICAgICBsb3dlclJpZ2h0UG9pbnQocmVjdGFuZ2xlKVxyXG4gICAgXTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=