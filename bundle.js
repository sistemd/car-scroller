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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhclBhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbInRpcmVXaWR0aCIsInRpcmVIZWlnaHQiLCJib25uZXRXaWR0aCIsImJvbm5ldEhlaWdodCIsInJvb2ZXaWR0aCIsInJvb2ZIZWlnaHQiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsInRpcmUiLCJ4IiwieSIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY2FyUGFydHMiLCJwb3NpdGlvbiIsImJvbm5ldCIsInJvb2YiLCJmcm9udExlZnRUaXJlIiwiYm90dG9tTGVmdFRpcmUiLCJmcm9udFJpZ2h0VGlyZSIsImJvdHRvbVJpZ2h0VGlyZSIsIkNvb2tpZSIsImRvY3VtZW50Iiwia2V5IiwicGFpcldpdGhOZWVkZWRLZXkiLCJrZXlWYWx1ZVBhaXJzIiwiZmluZCIsInBhaXIiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImNvb2tpZSIsInNwbGl0IiwibWFwIiwicGllY2UiLCJyb2FkRHJhd2luZ1dpZHRoIiwicm9hZERyYXdpbmdIZWlnaHQiLCJSb2FkRHJhd2luZyIsIm1hcFdpZHRoIiwidmVydGljYWxTcGVlZCIsImxhbmVDb3VudCIsIm1hcEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIkdhbWUiLCJjYW52YXMiLCJDYW52YXMiLCJzY29yZURpc3BsYXkiLCJTY29yZURpc3BsYXkiLCJwbGF5ZXJDYXIiLCJQbGF5ZXJDYXIiLCJhdERlZmF1bHRQb3NpdGlvbiIsImVuZW15Q2FycyIsImRlY29yYXRpb25zIiwiZGlzdGFuY2VUcmF2ZWxlZCIsImtleUhhbmRsZXIiLCJLZXlIYW5kbGVyIiwicmVwZWF0VGFza1doaWxlUnVubmluZyIsInRhc2siLCJwdXNoIiwiRW5lbXlDYXIiLCJhdFJhbmRvbVBvc2l0aW9uIiwibWlsbGlzZWNvbmRzIiwicmVwZWF0VGFzayIsInRpbWVEZWx0YSIsImdhbWVPdmVyIiwiY2xlYXJDYW52YXMiLCJtb3ZlQWxsT2JqZWN0cyIsImRlc3Ryb3lPZmZzY3JlZW5PYmplY3RzIiwiZHJhd0V2ZXJ5dGhpbmciLCJjaGVja0dhbWVPdmVyIiwicGxheWVyQ2FyQ3Jhc2hlZCIsInNob3dTY29yZSIsInNvbWUiLCJlbmVteUNhciIsImNhcnNDcmFzaGVkIiwic2NvcmUiLCJjYWxjdWxhdGVTY29yZSIsImhpZ2hTY29yZSIsInJlYWRIaWdoU2NvcmUiLCJvdXRwdXRUZXh0Iiwid3JpdGVIaWdoU2NvcmUiLCJhbGVydCIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZVNwZWVkIiwicmVsYXRpdml0eVN5c3RlbSIsIlZlcnRpY2FsUmVsYXRpdml0eVN5c3RlbSIsInJlbGF0aXZlVG8iLCJhZGRFbGVtZW50cyIsImtleUlzRG93biIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibW92ZUVsZW1lbnRzIiwiYWN0aXZlT2JqZWN0cyIsImNsZWFyIiwiZHJhd0RlY29yYXRpb25zIiwiZHJhd0NhciIsImRyYXdDYXJzIiwidXBkYXRlIiwia2V5RG93bk1hcCIsIk1hcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXQiLCJnZXQiLCJyYW5kb21Db2xvciIsInJhbmRvbUVsZW1lbnQiLCJDYXIiLCJob3Jpem9udGFsU3BlZWQiLCJuZXdTcGVlZCIsImFicyIsImJhc2VTcGVlZCIsIm1heFNwZWVkIiwibGVmdEJvdW5kYXJ5IiwibmV3WCIsInJpZ2h0Qm91bmRhcnkiLCJyYW5kb21SYW5nZSIsImMxIiwiYzIiLCJwaHlzaWNhbFBhcnRzIiwicGFydDEiLCJwYXJ0MiIsInJlY3RhbmdsZXNPdmVybGFwIiwib2JqZWN0cyIsImlzQWN0aXZlIiwib2JqZWN0IiwiZmlsdGVyIiwiY2VudGVyT2JqZWN0IiwiZWxlbWVudHMiLCJlbGVtZW50QXJyYXkiLCJlbGVtZW50IiwiY29va2llSGlnaFNjb3JlS2V5IiwicmVhZCIsIndyaXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd1JlY3QiLCJwIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJjYXIiLCJwYXJ0IiwiY2FycyIsImRlY29yYXRpb24iLCJnYW1lIiwicnVuIiwicnVuVGFzayIsInRpbWVyIiwibGFzdENhbGwiLCJzdGVwIiwidGltZXN0YW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXJyYXkiLCJsZW5ndGgiLCJtaW4iLCJtYXgiLCJyYW5kb20iLCJyZWN0MSIsInJlY3QyIiwicmVjdGFuZ2xlUG9pbnRzIiwicG9pbnQiLCJwb2ludElzSW5zaWRlUmVjdGFuZ2xlIiwidXBwZXJMZWZ0UmVjdFBvaW50IiwidXBwZXJMZWZ0UG9pbnQiLCJsb3dlclJpZ2h0UmVjdFBvaW50IiwibG93ZXJSaWdodFBvaW50IiwidXBwZXJSaWdodFBvaW50IiwibG93ZXJMZWZ0UG9pbnQiLCJyZWN0YW5nbGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxTQUFTLEdBQUcsQ0FBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsRUFBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsRUFBckI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFdBQVcsR0FBQ0YsU0FBUyxHQUFDLENBQXhDO0FBQ0EsSUFBTUssVUFBVSxHQUFHRixZQUFZLEdBQUMsRUFBaEM7QUFDQSxJQUFNRyxRQUFRLEdBQUdGLFNBQVMsR0FBQ0osU0FBUyxHQUFDLENBQXJDO0FBQ0EsSUFBTU8sU0FBUyxHQUFHRixVQUFVLEdBQUNGLFlBQTdCOztBQUVQLFNBQVNLLElBQVQsT0FBc0I7QUFBQSxNQUFQQyxDQUFPLFFBQVBBLENBQU87QUFBQSxNQUFKQyxDQUFJLFFBQUpBLENBQUk7QUFDbEIsU0FBTztBQUNIQyxRQUFJLEVBQUU7QUFDRkYsT0FBQyxFQUFEQSxDQURFO0FBQ0NDLE9BQUMsRUFBREEsQ0FERDtBQUVGRSxXQUFLLEVBQUVaLFNBRkw7QUFHRmEsWUFBTSxFQUFFWjtBQUhOLEtBREg7QUFNSGEsU0FBSyxFQUFFO0FBTkosR0FBUDtBQVFIOztBQUVNLFNBQVNDLFFBQVQsQ0FBa0JDLFFBQWxCLEVBQTRCRixLQUE1QixFQUFtQztBQUN0QyxNQUFNRyxNQUFNLEdBQUc7QUFDWE4sUUFBSSxFQUFFO0FBQ0ZGLE9BQUMsRUFBRU8sUUFBUSxDQUFDUCxDQUFULEdBQVdULFNBQVMsR0FBQyxDQUR0QjtBQUVGVSxPQUFDLEVBQUVNLFFBQVEsQ0FBQ04sQ0FGVjtBQUdGRSxXQUFLLEVBQUVWLFdBSEw7QUFJRlcsWUFBTSxFQUFFVjtBQUpOLEtBREs7QUFPWFcsU0FBSyxFQUFMQTtBQVBXLEdBQWY7QUFTQSxNQUFNSSxJQUFJLEdBQUc7QUFDVFAsUUFBSSxFQUFFO0FBQ0ZGLE9BQUMsRUFBRU8sUUFBUSxDQUFDUCxDQUFULEdBQVdULFNBRFo7QUFFRlUsT0FBQyxFQUFFTyxNQUFNLENBQUNOLElBQVAsQ0FBWUQsQ0FBWixHQUFjUCxZQUZmO0FBR0ZTLFdBQUssRUFBRVIsU0FITDtBQUlGUyxZQUFNLEVBQUVSO0FBSk4sS0FERztBQU9UUyxTQUFLLEVBQUxBO0FBUFMsR0FBYjtBQVNBLE1BQU1LLGFBQWEsR0FBR1gsSUFBSSxDQUFDO0FBQ3ZCQyxLQUFDLEVBQUVPLFFBQVEsQ0FBQ1AsQ0FEVztBQUV2QkMsS0FBQyxFQUFFUSxJQUFJLENBQUNQLElBQUwsQ0FBVUQsQ0FBVixHQUFZO0FBRlEsR0FBRCxDQUExQjtBQUlBLE1BQU1VLGNBQWMsR0FBR1osSUFBSSxDQUFDO0FBQ3hCQyxLQUFDLEVBQUVPLFFBQVEsQ0FBQ1AsQ0FEWTtBQUV4QkMsS0FBQyxFQUFFUSxJQUFJLENBQUNQLElBQUwsQ0FBVUQsQ0FBVixHQUFZTCxVQUFaLEdBQXVCO0FBRkYsR0FBRCxDQUEzQjtBQUlBLE1BQU1nQixjQUFjLEdBQUdiLElBQUksQ0FBQztBQUN4QkMsS0FBQyxFQUFFUyxJQUFJLENBQUNQLElBQUwsQ0FBVUYsQ0FBVixHQUFZTCxTQURTO0FBRXhCTSxLQUFDLEVBQUVRLElBQUksQ0FBQ1AsSUFBTCxDQUFVRCxDQUFWLEdBQVk7QUFGUyxHQUFELENBQTNCO0FBSUEsTUFBTVksZUFBZSxHQUFHZCxJQUFJLENBQUM7QUFDekJDLEtBQUMsRUFBRVMsSUFBSSxDQUFDUCxJQUFMLENBQVVGLENBQVYsR0FBWUwsU0FEVTtBQUV6Qk0sS0FBQyxFQUFFUSxJQUFJLENBQUNQLElBQUwsQ0FBVUQsQ0FBVixHQUFZTCxVQUFaLEdBQXVCO0FBRkQsR0FBRCxDQUE1QjtBQUtBLFNBQU8sQ0FDSFksTUFERyxFQUNLQyxJQURMLEVBQ1dDLGFBRFgsRUFDMEJDLGNBRDFCLEVBQzBDQyxjQUQxQyxFQUMwREMsZUFEMUQsQ0FBUDtBQUdIO0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNETSxJQUFNQyxNQUFiO0FBQUE7QUFBQTtBQUNJLGtCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ2xCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7O0FBSEw7QUFBQTtBQUFBLHlCQUtTQyxHQUxULEVBS2M7QUFDTixVQUFNQyxpQkFBaUIsR0FBRyxLQUFLQyxhQUFMLEdBQXFCQyxJQUFyQixDQUEwQixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDSixHQUFMLEtBQWFBLEdBQWpCO0FBQUEsT0FBOUIsQ0FBMUI7QUFDQSxhQUFPQyxpQkFBaUIsR0FBR0EsaUJBQWlCLENBQUNJLEtBQXJCLEdBQTZCQyxTQUFyRDtBQUNIO0FBUkw7QUFBQTtBQUFBLG9DQVVvQjtBQUNaLGFBQU8sS0FBS1AsUUFBTCxDQUFjUSxNQUFkLENBQXFCQyxLQUFyQixDQUEyQixJQUEzQixFQUFpQ0MsR0FBakMsQ0FBcUMsVUFBQUMsS0FBSyxFQUFJO0FBQUEsMkJBQzVCQSxLQUFLLENBQUNGLEtBQU4sQ0FBWSxHQUFaLENBRDRCO0FBQUE7QUFBQSxZQUMxQ1IsR0FEMEM7QUFBQSxZQUNyQ0ssS0FEcUM7O0FBRWpELGVBQU87QUFBQ0wsYUFBRyxFQUFIQSxHQUFEO0FBQU1LLGVBQUssRUFBTEE7QUFBTixTQUFQO0FBQ0gsT0FITSxDQUFQO0FBSUg7QUFmTDtBQUFBO0FBQUEsMEJBaUJVTCxHQWpCVixFQWlCZUssS0FqQmYsRUFpQnNCO0FBQ2QsV0FBS04sUUFBTCxDQUFjUSxNQUFkLGFBQTBCUCxHQUExQixjQUFpQ0ssS0FBakM7QUFDSDtBQW5CTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0EsSUFBTU0sZ0JBQWdCLEdBQUcsRUFBekI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxHQUExQjtBQUVPLElBQU1DLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUM2QkMsUUFEN0IsRUFDdUM7QUFDL0IsYUFBTyxJQUFJRCxXQUFKLENBQWdCO0FBQ25CN0IsU0FBQyxFQUFFOEIsUUFBUSxHQUFDLENBQVQsR0FBV0gsZ0JBQWdCLEdBQUMsQ0FEWjtBQUVuQjFCLFNBQUMsRUFBRSxDQUFDMkI7QUFGZSxPQUFoQixDQUFQO0FBSUg7QUFOTDs7QUFRSSx1QkFBWXJCLFFBQVosRUFBc0I7QUFBQTs7QUFDbEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLRixLQUFMLEdBQWEsTUFBYjtBQUNBLFNBQUswQixhQUFMLEdBQXFCLENBQXJCO0FBQ0g7O0FBWkw7QUFBQTtBQUFBLHdCQWNlO0FBQ1AsYUFBTztBQUNIL0IsU0FBQyxFQUFFLEtBQUtPLFFBQUwsQ0FBY1AsQ0FEZDtBQUVIQyxTQUFDLEVBQUUsS0FBS00sUUFBTCxDQUFjTixDQUZkO0FBR0hFLGFBQUssRUFBRXdCLGdCQUhKO0FBSUh2QixjQUFNLEVBQUV3QjtBQUpMLE9BQVA7QUFNSDtBQXJCTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUksU0FBUyxHQUFHLENBQWxCO0FBQ0EsSUFBTUYsUUFBUSxHQUFHRSxTQUFTLEdBQUNuQyxrREFBM0I7QUFDQSxJQUFNb0MsU0FBUyxHQUFHbkMsbURBQVMsR0FBQyxDQUE1QjtBQUNBLElBQU1vQyxlQUFlLEdBQUcsU0FBeEI7QUFFTyxJQUFNQyxJQUFiO0FBQUE7QUFBQTtBQUNJLGdCQUFZcEIsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUNsQixTQUFLcUIsTUFBTCxHQUFjLElBQUlDLGdEQUFKLENBQVd0QixRQUFYLENBQWQ7QUFDQSxTQUFLcUIsTUFBTCxDQUFZakMsS0FBWixHQUFvQjJCLFFBQXBCO0FBQ0EsU0FBS00sTUFBTCxDQUFZaEMsTUFBWixHQUFxQjZCLFNBQXJCO0FBQ0EsU0FBS0ssWUFBTCxHQUFvQixJQUFJQyxzREFBSixDQUFpQnhCLFFBQWpCLENBQXBCO0FBRUEsU0FBS3lCLFNBQUwsR0FBaUJDLFNBQVMsQ0FBQ0MsaUJBQVYsRUFBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsU0FBS3RCLE1BQUwsR0FBYyxJQUFJVCw4Q0FBSixDQUFXQyxRQUFYLENBQWQ7QUFDQSxTQUFLK0IsVUFBTCxHQUFrQixJQUFJQyxVQUFKLENBQWVoQyxRQUFmLENBQWxCO0FBRUEsU0FBS2lDLHNCQUFMLENBQTRCO0FBQ3hCQyxVQUFJLEVBQUU7QUFBQSxlQUFNLEtBQUksQ0FBQ04sU0FBTCxDQUFlTyxJQUFmLENBQW9CQyxRQUFRLENBQUNDLGdCQUFULEVBQXBCLENBQU47QUFBQSxPQURrQjtBQUV4QkMsa0JBQVksRUFBRTtBQUFBLGVBQU0sT0FBSyxLQUFJLENBQUNiLFNBQUwsQ0FBZVQsYUFBMUI7QUFBQTtBQUZVLEtBQTVCO0FBS0EsU0FBS2lCLHNCQUFMLENBQTRCO0FBQ3hCQyxVQUFJLEVBQUU7QUFBQSxlQUFNLEtBQUksQ0FBQ0wsV0FBTCxDQUFpQk0sSUFBakIsQ0FBc0JyQix3REFBVyxDQUFDYSxpQkFBWixDQUE4QlosUUFBOUIsQ0FBdEIsQ0FBTjtBQUFBLE9BRGtCO0FBRXhCdUIsa0JBQVksRUFBRTtBQUFBLGVBQU0sTUFBSSxLQUFJLENBQUNiLFNBQUwsQ0FBZVQsYUFBekI7QUFBQTtBQUZVLEtBQTVCO0FBSUg7O0FBdkJMO0FBQUE7QUFBQSwwQkF5QlU7QUFBQTs7QUFDRnVCLCtEQUFVLENBQUM7QUFDUEwsWUFBSSxFQUFFLGNBQUFNLFNBQVMsRUFBSTtBQUNmLGNBQUksQ0FBQyxNQUFJLENBQUNDLFFBQVYsRUFBb0I7QUFDaEIsa0JBQUksQ0FBQ0MsV0FBTDs7QUFDQSxrQkFBSSxDQUFDQyxjQUFMLENBQW9CSCxTQUFwQjs7QUFDQSxrQkFBSSxDQUFDSSx1QkFBTDs7QUFDQSxrQkFBSSxDQUFDQyxjQUFMOztBQUNBLGtCQUFJLENBQUNDLGFBQUw7QUFDSDtBQUNKO0FBVE0sT0FBRCxDQUFWO0FBV0g7QUFyQ0w7QUFBQTtBQUFBLG9DQXVDb0I7QUFDWixVQUFJLEtBQUtDLGdCQUFMLEVBQUosRUFBNkI7QUFDekIsYUFBS04sUUFBTCxHQUFnQixJQUFoQjtBQUNBLGFBQUtPLFNBQUw7QUFDSDtBQUNKO0FBNUNMO0FBQUE7QUFBQSx1Q0E4Q3VCO0FBQUE7O0FBQ2YsYUFBTyxLQUFLcEIsU0FBTCxDQUFlcUIsSUFBZixDQUFvQixVQUFBQyxRQUFRO0FBQUEsZUFBSUMsV0FBVyxDQUFDRCxRQUFELEVBQVcsTUFBSSxDQUFDekIsU0FBaEIsQ0FBZjtBQUFBLE9BQTVCLENBQVA7QUFDSDtBQWhETDtBQUFBO0FBQUEsZ0NBa0RnQjtBQUNSLFVBQU0yQixLQUFLLEdBQUcsS0FBS0MsY0FBTCxFQUFkO0FBQ0EsVUFBTUMsU0FBUyxHQUFHQyxhQUFhLENBQUMsS0FBSy9DLE1BQU4sQ0FBL0I7QUFDQSxVQUFJZ0QsVUFBVSwwQkFBbUJKLEtBQW5CLE1BQWQ7O0FBQ0EsVUFBSSxDQUFDRSxTQUFELElBQWNGLEtBQUssR0FBR0UsU0FBMUIsRUFBcUM7QUFDakNHLHNCQUFjLENBQUMsS0FBS2pELE1BQU4sRUFBYzRDLEtBQWQsQ0FBZDtBQUNBSSxrQkFBVSw4QkFBdUJBLFVBQXZCLENBQVY7QUFDSDs7QUFDREUsV0FBSyxDQUFDRixVQUFELENBQUw7QUFDSDtBQTNETDtBQUFBO0FBQUEscUNBNkRxQjtBQUNiLGFBQU9HLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUs5QixnQkFBTCxHQUFzQixHQUFqQyxDQUFQO0FBQ0g7QUEvREw7QUFBQTtBQUFBLG1DQWlFbUJVLFNBakVuQixFQWlFOEI7QUFDdEIsV0FBS2YsU0FBTCxDQUFlb0MsV0FBZixDQUEyQixLQUFLL0IsZ0JBQWhDO0FBRUEsVUFBTWdDLGdCQUFnQixHQUFHQyx3QkFBd0IsQ0FBQ0MsVUFBekIsQ0FBb0MsS0FBS3ZDLFNBQXpDLENBQXpCO0FBQ0FxQyxzQkFBZ0IsQ0FBQ0csV0FBakIsQ0FBNkIsS0FBS3JDLFNBQWxDO0FBQ0FrQyxzQkFBZ0IsQ0FBQ0csV0FBakIsQ0FBNkIsS0FBS3BDLFdBQWxDO0FBRUEsVUFBSSxLQUFLRSxVQUFMLENBQWdCbUMsU0FBaEIsQ0FBMEIsV0FBMUIsQ0FBSixFQUNJLEtBQUt6QyxTQUFMLENBQWUwQyxRQUFmLENBQXdCLENBQXhCLEVBQTJCM0IsU0FBM0I7QUFDSixVQUFJLEtBQUtULFVBQUwsQ0FBZ0JtQyxTQUFoQixDQUEwQixZQUExQixDQUFKLEVBQ0ksS0FBS3pDLFNBQUwsQ0FBZTJDLFNBQWYsQ0FBeUJyRCxRQUFRLEdBQUNqQyxrREFBbEMsRUFBNEMwRCxTQUE1QztBQUVKc0Isc0JBQWdCLENBQUNPLFlBQWpCLENBQThCN0IsU0FBOUI7QUFFQSxXQUFLVixnQkFBTCxJQUF5QixLQUFLTCxTQUFMLENBQWVULGFBQWYsR0FBK0J3QixTQUF4RDtBQUNIO0FBaEZMO0FBQUE7QUFBQSw4Q0FrRjhCO0FBQ3RCLFdBQUtaLFNBQUwsR0FBaUIwQyxhQUFhLENBQUMsS0FBSzFDLFNBQU4sQ0FBOUI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CeUMsYUFBYSxDQUFDLEtBQUt6QyxXQUFOLENBQWhDO0FBQ0g7QUFyRkw7QUFBQTtBQUFBLGtDQXVGa0I7QUFDVixXQUFLUixNQUFMLENBQVlrRCxLQUFaLENBQWtCcEQsZUFBbEI7QUFDSDtBQXpGTDtBQUFBO0FBQUEscUNBMkZxQjtBQUNicUQsdUVBQWUsQ0FBQyxLQUFLbkQsTUFBTixFQUFjLEtBQUtRLFdBQW5CLENBQWY7QUFDQTRDLCtEQUFPLENBQUMsS0FBS3BELE1BQU4sRUFBYyxLQUFLSSxTQUFuQixDQUFQO0FBQ0FpRCxnRUFBUSxDQUFDLEtBQUtyRCxNQUFOLEVBQWMsS0FBS08sU0FBbkIsQ0FBUjtBQUNBLFdBQUtMLFlBQUwsQ0FBa0JvRCxNQUFsQixDQUF5QixLQUFLdEIsY0FBTCxFQUF6QjtBQUNIO0FBaEdMO0FBQUE7QUFBQSxpREFrR2lEO0FBQUE7O0FBQUEsVUFBckJuQixLQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxVQUFmSSxZQUFlLFFBQWZBLFlBQWU7QUFDekNDLCtEQUFVLENBQUM7QUFDUEwsWUFBSSxFQUFFLGdCQUFNO0FBQ1IsY0FBSSxDQUFDLE1BQUksQ0FBQ08sUUFBVixFQUNJUCxLQUFJO0FBQ1gsU0FKTTtBQUtQSSxvQkFBWSxFQUFaQTtBQUxPLE9BQUQsQ0FBVjtBQU9IO0FBMUdMOztBQUFBO0FBQUE7O0lBNkdNTixVOzs7QUFDRixzQkFBWWhDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFDbEIsU0FBSzRFLFVBQUwsR0FBa0IsSUFBSUMsR0FBSixFQUFsQjtBQUNBN0UsWUFBUSxDQUFDOEUsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUM7QUFBQSxVQUFFN0UsR0FBRixTQUFFQSxHQUFGO0FBQUEsYUFBVyxNQUFJLENBQUMyRSxVQUFMLENBQWdCRyxHQUFoQixDQUFvQjlFLEdBQXBCLEVBQXlCLElBQXpCLENBQVg7QUFBQSxLQUFyQztBQUNBRCxZQUFRLENBQUM4RSxnQkFBVCxDQUEwQixPQUExQixFQUFtQztBQUFBLFVBQUU3RSxHQUFGLFNBQUVBLEdBQUY7QUFBQSxhQUFXLE1BQUksQ0FBQzJFLFVBQUwsQ0FBZ0JHLEdBQWhCLENBQW9COUUsR0FBcEIsRUFBeUIsS0FBekIsQ0FBWDtBQUFBLEtBQW5DO0FBQ0g7Ozs7OEJBRVNBLEcsRUFBSztBQUNYLGFBQU8sS0FBSzJFLFVBQUwsQ0FBZ0JJLEdBQWhCLENBQW9CL0UsR0FBcEIsQ0FBUDtBQUNIOzs7Ozs7QUFHTCxTQUFTZ0YsV0FBVCxHQUF1QjtBQUNuQixTQUFPQyw0REFBYSxDQUFDLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsUUFBekIsRUFBbUMsUUFBbkMsRUFBNkMsUUFBN0MsRUFBdUQsU0FBdkQsRUFBa0UsTUFBbEUsRUFBMEUsUUFBMUUsQ0FBRCxDQUFwQjtBQUNIOztJQUVLQyxHOzs7QUFDRixlQUFZM0YsUUFBWixFQUFzQjtBQUFBOztBQUNsQixTQUFLRixLQUFMLEdBQWEyRixXQUFXLEVBQXhCO0FBQ0EsU0FBS3pGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7Ozs7b0NBRWU7QUFDWixhQUFPRCwwREFBUSxDQUFDLEtBQUtDLFFBQU4sRUFBZ0IsS0FBS0YsS0FBckIsQ0FBZjtBQUNIOzs7Ozs7SUFHQ29DLFM7Ozs7Ozs7d0NBQ3dCO0FBQ3RCLGFBQU8sSUFBSUEsU0FBSixDQUFjO0FBQ2pCekMsU0FBQyxFQUFFOEIsUUFBUSxHQUFDLENBQVQsR0FBV2pDLGtEQUFRLEdBQUMsQ0FETjtBQUVqQkksU0FBQyxFQUFFZ0MsU0FBUyxHQUFDbkMsbURBQVYsR0FBb0I7QUFGTixPQUFkLENBQVA7QUFJSDs7O2dDQUVrQjtBQUNmLGFBQU8sR0FBUDtBQUNIOzs7K0JBRWlCO0FBQ2QsYUFBTyxDQUFQO0FBQ0g7OztBQUVELHFCQUFZUyxRQUFaLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ2xCLG9GQUFNQSxRQUFOO0FBQ0EsV0FBSzRGLGVBQUwsR0FBdUIsT0FBS3BFLGFBQUwsR0FBcUIsQ0FBNUM7O0FBQ0EsV0FBSzZDLFdBQUwsQ0FBaUIsQ0FBakI7O0FBSGtCO0FBSXJCOzs7O2dDQUVXL0IsZ0IsRUFBa0I7QUFDMUIsVUFBTXVELFFBQVEsR0FBRzFCLElBQUksQ0FBQzJCLEdBQUwsQ0FBU3hELGdCQUFnQixHQUFDLEtBQTFCLElBQWlDSixTQUFTLENBQUM2RCxTQUFWLEVBQWxEO0FBQ0EsV0FBS0gsZUFBTCxHQUF1QixLQUFLcEUsYUFBTCxHQUNsQnFFLFFBQVEsR0FBRzNELFNBQVMsQ0FBQzhELFFBQVYsRUFBWixHQUFvQzlELFNBQVMsQ0FBQzhELFFBQVYsRUFBcEMsR0FBMkRILFFBRC9EO0FBRUg7Ozs2QkFFUUksWSxFQUFjakQsUyxFQUFXO0FBQzlCLFVBQU1rRCxJQUFJLEdBQUcsS0FBS2xHLFFBQUwsQ0FBY1AsQ0FBZCxHQUFnQixLQUFLbUcsZUFBTCxHQUF1QjVDLFNBQXBEO0FBQ0EsV0FBS2hELFFBQUwsQ0FBY1AsQ0FBZCxHQUFtQnlHLElBQUksR0FBR0QsWUFBUixHQUF3QkEsWUFBeEIsR0FBdUNDLElBQXpEO0FBQ0g7Ozs4QkFFU0MsYSxFQUFlbkQsUyxFQUFXO0FBQ2hDLFVBQU1rRCxJQUFJLEdBQUcsS0FBS2xHLFFBQUwsQ0FBY1AsQ0FBZCxHQUFnQixLQUFLbUcsZUFBTCxHQUF1QjVDLFNBQXBEO0FBQ0EsV0FBS2hELFFBQUwsQ0FBY1AsQ0FBZCxHQUFtQnlHLElBQUksR0FBR0MsYUFBUixHQUF5QkEsYUFBekIsR0FBeUNELElBQTNEO0FBQ0g7Ozs7RUFwQ21CUCxHOztJQXVDbEIvQyxROzs7Ozs7O3VDQUN3QjtBQUN0QixhQUFPLElBQUlBLFFBQUosQ0FBYTtBQUNoQm5ELFNBQUMsRUFBRW9DLE1BQU0sQ0FBQ2pDLEtBQVAsR0FBYTZCLFNBQWIsR0FBdUIyRSwwREFBVyxDQUFDLENBQUQsRUFBSTNFLFNBQUosQ0FEckI7QUFFaEIvQixTQUFDLEVBQUUsQ0FBQ0gsbURBQVNBO0FBRkcsT0FBYixDQUFQO0FBSUg7OztBQUVELG9CQUFZUyxRQUFaLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ2xCLG1GQUFNQSxRQUFOO0FBQ0EsV0FBS3dCLGFBQUwsR0FBcUIsSUFBckI7QUFGa0I7QUFHckI7Ozs7b0NBRWU7QUFDWixhQUFPekIsMERBQVEsQ0FBQyxLQUFLQyxRQUFOLEVBQWdCLEtBQUtGLEtBQXJCLENBQWY7QUFDSDs7OztFQWZrQjZGLEc7O0FBa0J2QixTQUFTaEMsV0FBVCxDQUFxQjBDLEVBQXJCLEVBQXlCQyxFQUF6QixFQUE2QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUN6Qix5QkFBb0JELEVBQUUsQ0FBQ0UsYUFBSCxFQUFwQjtBQUFBLFVBQVdDLEtBQVg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDSSw4QkFBb0JGLEVBQUUsQ0FBQ0MsYUFBSCxFQUFwQjtBQUFBLGNBQVdFLEtBQVg7QUFDSSxjQUFJQyxnRUFBaUIsQ0FBQ0YsS0FBSyxDQUFDN0csSUFBUCxFQUFhOEcsS0FBSyxDQUFDOUcsSUFBbkIsQ0FBckIsRUFDSSxPQUFPLElBQVA7QUFGUjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUR5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUt6QixTQUFPLEtBQVA7QUFDSDs7QUFFRCxTQUFTbUYsYUFBVCxDQUF1QjZCLE9BQXZCLEVBQWdDO0FBQzVCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUM3RyxRQUFQLENBQWdCTixDQUFoQixHQUFvQmdDLFNBQWhDO0FBQUEsR0FBakI7O0FBQ0EsU0FBT2lGLE9BQU8sQ0FBQ0csTUFBUixDQUFlRixRQUFmLENBQVA7QUFDSDs7SUFFS3JDLHdCOzs7OztzQ0FDeUM7QUFBQSxVQUF4QnNDLE1BQXdCLFNBQXhCQSxNQUF3QjtBQUFBLFVBQWhCckYsYUFBZ0IsU0FBaEJBLGFBQWdCO0FBQ3ZDLGFBQU8sSUFBSStDLHdCQUFKLENBQTZCO0FBQUNzQyxjQUFNLEVBQU5BLE1BQUQ7QUFBU3JGLHFCQUFhLEVBQWJBO0FBQVQsT0FBN0IsQ0FBUDtBQUNIOzs7QUFFRCxvQ0FBWXVGLFlBQVosRUFBMEI7QUFBQTs7QUFDdEIsU0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7Ozs7Z0NBRVdDLFksRUFBYztBQUFBOztBQUN0Qiw2QkFBS0QsUUFBTCxFQUFjckUsSUFBZCwwQ0FBc0JzRSxZQUF0QjtBQUNIOzs7aUNBRVlqRSxTLEVBQVc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDcEIsOEJBQXNCLEtBQUtnRSxRQUEzQjtBQUFBLGNBQVdFLE9BQVg7QUFDSUEsaUJBQU8sQ0FBQ2xILFFBQVIsQ0FBaUJOLENBQWpCLElBQXNCLENBQUMsS0FBS3FILFlBQUwsQ0FBa0J2RixhQUFsQixHQUFnQzBGLE9BQU8sQ0FBQzFGLGFBQXpDLElBQTBEd0IsU0FBaEY7QUFESjtBQURvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR3ZCOzs7Ozs7QUFHTCxJQUFNbUUsa0JBQWtCLEdBQUcsV0FBM0I7O0FBRUEsU0FBU3BELGFBQVQsQ0FBdUIvQyxNQUF2QixFQUErQjtBQUMzQixTQUFPQSxNQUFNLENBQUNvRyxJQUFQLENBQVlELGtCQUFaLENBQVA7QUFDSDs7QUFFRCxTQUFTbEQsY0FBVCxDQUF3QmpELE1BQXhCLEVBQWdDOEMsU0FBaEMsRUFBMkM7QUFDdkM5QyxRQUFNLENBQUNxRyxLQUFQLENBQWFGLGtCQUFiLEVBQWlDckQsU0FBakM7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUN2UEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWE7Ozs7Ozs7O0FBRU4sSUFBTWhDLE1BQWI7QUFBQTtBQUFBO0FBQ0ksa0JBQVl0QixRQUFaLEVBQXNCO0FBQUE7O0FBQ2xCLFNBQUtxQixNQUFMLEdBQWNyQixRQUFRLENBQUM4RyxjQUFULENBQXdCLFFBQXhCLENBQWQ7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBSzFGLE1BQUwsQ0FBWTJGLFVBQVosQ0FBdUIsSUFBdkIsQ0FBZjtBQUNIOztBQUpMO0FBQUE7QUFBQSxtQ0FNb0MxSCxLQU5wQyxFQU0yQztBQUFBLFVBQTdCTCxDQUE2QixRQUE3QkEsQ0FBNkI7QUFBQSxVQUExQkMsQ0FBMEIsUUFBMUJBLENBQTBCO0FBQUEsVUFBdkJFLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLFVBQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFDbkMsV0FBSzBILE9BQUwsQ0FBYUUsU0FBYixHQUF5QjNILEtBQXpCO0FBQ0EsV0FBS3lILE9BQUwsQ0FBYUcsUUFBYixDQUFzQmpJLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QkUsS0FBNUIsRUFBbUNDLE1BQW5DO0FBQ0g7QUFUTDtBQUFBO0FBQUEsMEJBV1U4QixlQVhWLEVBVzJCO0FBQ25CLFdBQUtnRyxRQUFMLENBQWM7QUFDVmxJLFNBQUMsRUFBRSxDQURPO0FBRVZDLFNBQUMsRUFBRSxDQUZPO0FBR1ZFLGFBQUssRUFBRSxLQUFLQSxLQUhGO0FBSVZDLGNBQU0sRUFBRSxLQUFLQTtBQUpILE9BQWQsRUFLRzhCLGVBTEg7QUFNSDtBQWxCTDtBQUFBO0FBQUEsd0JBb0JnQjtBQUNSLGFBQU8sS0FBS0UsTUFBTCxDQUFZakMsS0FBbkI7QUFDSCxLQXRCTDtBQUFBLHNCQTRCY2tCLEtBNUJkLEVBNEJxQjtBQUNiLFdBQUtlLE1BQUwsQ0FBWWpDLEtBQVosR0FBb0JrQixLQUFwQjtBQUNIO0FBOUJMO0FBQUE7QUFBQSx3QkF3QmlCO0FBQ1QsYUFBTyxLQUFLZSxNQUFMLENBQVloQyxNQUFuQjtBQUNILEtBMUJMO0FBQUEsc0JBZ0NlaUIsS0FoQ2YsRUFnQ3NCO0FBQ2QsV0FBS2UsTUFBTCxDQUFZaEMsTUFBWixHQUFxQmlCLEtBQXJCO0FBQ0g7QUFsQ0w7O0FBQUE7QUFBQTtBQXFDTyxJQUFNa0IsWUFBYjtBQUFBO0FBQUE7QUFDSSx3QkFBWXhCLFFBQVosRUFBc0I7QUFBQTs7QUFDbEIsU0FBS29ILENBQUwsR0FBU3BILFFBQVEsQ0FBQzhHLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBVDtBQUNIOztBQUhMO0FBQUE7QUFBQSwyQkFLV3hHLEtBTFgsRUFLa0I7QUFDVixXQUFLOEcsQ0FBTCxDQUFPQyxTQUFQLEdBQW1CL0csS0FBSyxDQUFDZ0gsUUFBTixFQUFuQjtBQUNIO0FBUEw7O0FBQUE7QUFBQTtBQVVPLFNBQVM3QyxPQUFULENBQWlCcEQsTUFBakIsRUFBeUJrRyxHQUF6QixFQUE4QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNqQyx5QkFBbUJBLEdBQUcsQ0FBQ3hCLGFBQUosRUFBbkI7QUFBQSxVQUFXeUIsSUFBWDtBQUNJbkcsWUFBTSxDQUFDOEYsUUFBUCxDQUFnQkssSUFBSSxDQUFDckksSUFBckIsRUFBMkJxSSxJQUFJLENBQUNsSSxLQUFoQztBQURKO0FBRGlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHcEM7QUFFTSxTQUFTb0YsUUFBVCxDQUFrQnJELE1BQWxCLEVBQTBCb0csSUFBMUIsRUFBZ0M7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbkMsMEJBQWtCQSxJQUFsQjtBQUFBLFVBQVdGLEdBQVg7QUFDSTlDLGFBQU8sQ0FBQ3BELE1BQUQsRUFBU2tHLEdBQVQsQ0FBUDtBQURKO0FBRG1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHdEM7QUFFTSxTQUFTL0MsZUFBVCxDQUF5Qm5ELE1BQXpCLEVBQWlDUSxXQUFqQyxFQUE4QztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNqRCwwQkFBeUJBLFdBQXpCO0FBQUEsVUFBVzZGLFVBQVg7QUFDSXJHLFlBQU0sQ0FBQzhGLFFBQVAsQ0FBZ0JPLFVBQVUsQ0FBQ3ZJLElBQTNCLEVBQWlDdUksVUFBVSxDQUFDcEksS0FBNUM7QUFESjtBQURpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR3BELEM7Ozs7Ozs7Ozs7OztBQzlERDtBQUFBO0FBQUE7QUFFQSxJQUFNcUksSUFBSSxHQUFHLElBQUl2RywwQ0FBSixDQUFTcEIsUUFBVCxDQUFiO0FBQ0EySCxJQUFJLENBQUNDLEdBQUwsRzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFhOztBQUVOLFNBQVNyRixVQUFULE9BQTBDO0FBQUEsTUFBckJMLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZJLFlBQWUsUUFBZkEsWUFBZTs7QUFDN0MsTUFBSUEsWUFBWSxLQUFLL0IsU0FBckIsRUFBZ0M7QUFDNUJzSCxXQUFPLENBQUMzRixJQUFELENBQVA7QUFDQTtBQUNIOztBQUVELE1BQUk0RixLQUFLLEdBQUd4RixZQUFZLEVBQXhCO0FBRUF1RixTQUFPLENBQUMsVUFBQXJGLFNBQVMsRUFBSTtBQUNqQnNGLFNBQUssSUFBSXRGLFNBQVQ7O0FBRUEsUUFBSXNGLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ1pBLFdBQUssR0FBR3hGLFlBQVksRUFBcEI7QUFDQUosVUFBSTtBQUNQO0FBQ0osR0FQTSxDQUFQO0FBUUg7O0FBRUQsU0FBUzJGLE9BQVQsQ0FBaUIzRixJQUFqQixFQUF1QjtBQUNuQixNQUFJNkYsUUFBUSxHQUFHLElBQWY7O0FBRUEsV0FBU0MsSUFBVCxDQUFjQyxTQUFkLEVBQXlCO0FBQ3JCQyx5QkFBcUIsQ0FBQ0YsSUFBRCxDQUFyQjs7QUFFQSxRQUFJRCxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkJBLGNBQVEsR0FBR0UsU0FBWDtBQUNBO0FBQ0g7O0FBRUQsUUFBTXpGLFNBQVMsR0FBR3lGLFNBQVMsR0FBR0YsUUFBOUI7QUFDQUEsWUFBUSxHQUFHRSxTQUFYO0FBQ0EvRixRQUFJLENBQUNNLFNBQUQsQ0FBSjtBQUNIOztBQUVEMEYsdUJBQXFCLENBQUNGLElBQUQsQ0FBckI7QUFDSDs7QUFFTSxTQUFTOUMsYUFBVCxDQUF1QmlELEtBQXZCLEVBQThCO0FBQ2pDLFNBQU9BLEtBQUssQ0FBQ3ZDLFdBQVcsQ0FBQyxDQUFELEVBQUl1QyxLQUFLLENBQUNDLE1BQVYsQ0FBWixDQUFaO0FBQ0gsQyxDQUVEOztBQUNPLFNBQVN4QyxXQUFULENBQXFCeUMsR0FBckIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQ2xDLFNBQU9ELEdBQUcsR0FBRzFFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUM0RSxNQUFMLE1BQWlCRCxHQUFHLEdBQUNELEdBQXJCLENBQVgsQ0FBYjtBQUNIO0FBRU0sU0FBU25DLGlCQUFULENBQTJCc0MsS0FBM0IsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQzVDLFNBQU9DLGVBQWUsQ0FBQ0YsS0FBRCxDQUFmLENBQXVCdkYsSUFBdkIsQ0FBNEIsVUFBQTBGLEtBQUs7QUFBQSxXQUFJQyxzQkFBc0IsQ0FBQ0QsS0FBRCxFQUFRRixLQUFSLENBQTFCO0FBQUEsR0FBakMsS0FDQ0MsZUFBZSxDQUFDRCxLQUFELENBQWYsQ0FBdUJ4RixJQUF2QixDQUE0QixVQUFBMEYsS0FBSztBQUFBLFdBQUlDLHNCQUFzQixDQUFDRCxLQUFELEVBQVFILEtBQVIsQ0FBMUI7QUFBQSxHQUFqQyxDQURSO0FBRUg7QUFFTSxTQUFTSSxzQkFBVCxDQUFnQ0QsS0FBaEMsRUFBdUN4SixJQUF2QyxFQUE2QztBQUNoRCxNQUFNMEosa0JBQWtCLEdBQUdDLGNBQWMsQ0FBQzNKLElBQUQsQ0FBekM7QUFDQSxNQUFNNEosbUJBQW1CLEdBQUdDLGVBQWUsQ0FBQzdKLElBQUQsQ0FBM0M7QUFDQSxTQUFRd0osS0FBSyxDQUFDMUosQ0FBTixHQUFVNEosa0JBQWtCLENBQUM1SixDQUE3QixJQUFrQzBKLEtBQUssQ0FBQzFKLENBQU4sR0FBVThKLG1CQUFtQixDQUFDOUosQ0FBakUsSUFDRTBKLEtBQUssQ0FBQ3pKLENBQU4sR0FBVTJKLGtCQUFrQixDQUFDM0osQ0FBN0IsSUFBa0N5SixLQUFLLENBQUN6SixDQUFOLEdBQVU2SixtQkFBbUIsQ0FBQzdKLENBRHpFO0FBRUg7QUFFTSxTQUFTNEosY0FBVCxDQUF3QjNKLElBQXhCLEVBQThCO0FBQ2pDLFNBQU87QUFBQ0YsS0FBQyxFQUFFRSxJQUFJLENBQUNGLENBQVQ7QUFBWUMsS0FBQyxFQUFFQyxJQUFJLENBQUNEO0FBQXBCLEdBQVA7QUFDSDtBQUVNLFNBQVMrSixlQUFULENBQXlCOUosSUFBekIsRUFBK0I7QUFDbEMsU0FBTztBQUFDRixLQUFDLEVBQUVFLElBQUksQ0FBQ0YsQ0FBTCxHQUFPRSxJQUFJLENBQUNDLEtBQWhCO0FBQXVCRixLQUFDLEVBQUVDLElBQUksQ0FBQ0Q7QUFBL0IsR0FBUDtBQUNIO0FBRU0sU0FBU2dLLGNBQVQsQ0FBd0IvSixJQUF4QixFQUE4QjtBQUNqQyxTQUFPO0FBQUNGLEtBQUMsRUFBRUUsSUFBSSxDQUFDRixDQUFUO0FBQVlDLEtBQUMsRUFBRUMsSUFBSSxDQUFDRCxDQUFMLEdBQU9DLElBQUksQ0FBQ0U7QUFBM0IsR0FBUDtBQUNIO0FBRU0sU0FBUzJKLGVBQVQsQ0FBeUI3SixJQUF6QixFQUErQjtBQUNsQyxTQUFPO0FBQUNGLEtBQUMsRUFBRUUsSUFBSSxDQUFDRixDQUFMLEdBQU9FLElBQUksQ0FBQ0MsS0FBaEI7QUFBdUJGLEtBQUMsRUFBRUMsSUFBSSxDQUFDRCxDQUFMLEdBQU9DLElBQUksQ0FBQ0U7QUFBdEMsR0FBUDtBQUNIO0FBRU0sU0FBU3FKLGVBQVQsQ0FBeUJTLFNBQXpCLEVBQW9DO0FBQ3ZDLFNBQU8sQ0FDSEwsY0FBYyxDQUFDSyxTQUFELENBRFgsRUFFSEYsZUFBZSxDQUFDRSxTQUFELENBRlosRUFHSEQsY0FBYyxDQUFDQyxTQUFELENBSFgsRUFJSEgsZUFBZSxDQUFDRyxTQUFELENBSlosQ0FBUDtBQU1ILEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgdGlyZVdpZHRoID0gNztcclxuZXhwb3J0IGNvbnN0IHRpcmVIZWlnaHQgPSAxNTtcclxuZXhwb3J0IGNvbnN0IGJvbm5ldFdpZHRoID0gMzA7XHJcbmV4cG9ydCBjb25zdCBib25uZXRIZWlnaHQgPSAyMDtcclxuZXhwb3J0IGNvbnN0IHJvb2ZXaWR0aCA9IGJvbm5ldFdpZHRoK3RpcmVXaWR0aCoyO1xyXG5leHBvcnQgY29uc3Qgcm9vZkhlaWdodCA9IGJvbm5ldEhlaWdodCs1MDtcclxuZXhwb3J0IGNvbnN0IGNhcldpZHRoID0gcm9vZldpZHRoK3RpcmVXaWR0aCoyXHJcbmV4cG9ydCBjb25zdCBjYXJIZWlnaHQgPSByb29mSGVpZ2h0K2Jvbm5ldEhlaWdodDtcclxuXHJcbmZ1bmN0aW9uIHRpcmUoe3gsIHl9KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlY3Q6IHtcclxuICAgICAgICAgICAgeCwgeSwgXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aXJlV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGlyZUhlaWdodFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXJQYXJ0cyhwb3NpdGlvbiwgY29sb3IpIHtcclxuICAgIGNvbnN0IGJvbm5ldCA9IHtcclxuICAgICAgICByZWN0OiB7XHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLngrdGlyZVdpZHRoKjIsIFxyXG4gICAgICAgICAgICB5OiBwb3NpdGlvbi55LCBcclxuICAgICAgICAgICAgd2lkdGg6IGJvbm5ldFdpZHRoLCBcclxuICAgICAgICAgICAgaGVpZ2h0OiBib25uZXRIZWlnaHQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvclxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJvb2YgPSB7XHJcbiAgICAgICAgcmVjdDoge1xyXG4gICAgICAgICAgICB4OiBwb3NpdGlvbi54K3RpcmVXaWR0aCwgXHJcbiAgICAgICAgICAgIHk6IGJvbm5ldC5yZWN0LnkrYm9ubmV0SGVpZ2h0LCBcclxuICAgICAgICAgICAgd2lkdGg6IHJvb2ZXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiByb29mSGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvclxyXG4gICAgfTtcclxuICAgIGNvbnN0IGZyb250TGVmdFRpcmUgPSB0aXJlKHtcclxuICAgICAgICB4OiBwb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHJvb2YucmVjdC55KzVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYm90dG9tTGVmdFRpcmUgPSB0aXJlKHtcclxuICAgICAgICB4OiBwb3NpdGlvbi54LCBcclxuICAgICAgICB5OiByb29mLnJlY3QueStyb29mSGVpZ2h0LTIwXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZyb250UmlnaHRUaXJlID0gdGlyZSh7XHJcbiAgICAgICAgeDogcm9vZi5yZWN0Lngrcm9vZldpZHRoLCBcclxuICAgICAgICB5OiByb29mLnJlY3QueSs1XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGJvdHRvbVJpZ2h0VGlyZSA9IHRpcmUoe1xyXG4gICAgICAgIHg6IHJvb2YucmVjdC54K3Jvb2ZXaWR0aCwgXHJcbiAgICAgICAgeTogcm9vZi5yZWN0Lnkrcm9vZkhlaWdodC0yMFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBib25uZXQsIHJvb2YsIGZyb250TGVmdFRpcmUsIGJvdHRvbUxlZnRUaXJlLCBmcm9udFJpZ2h0VGlyZSwgYm90dG9tUmlnaHRUaXJlXHJcbiAgICBdO1xyXG59OyIsImV4cG9ydCBjbGFzcyBDb29raWUge1xyXG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcclxuICAgICAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZChrZXkpIHtcclxuICAgICAgICBjb25zdCBwYWlyV2l0aE5lZWRlZEtleSA9IHRoaXMua2V5VmFsdWVQYWlycygpLmZpbmQocGFpciA9PiBwYWlyLmtleSA9PT0ga2V5KTtcclxuICAgICAgICByZXR1cm4gcGFpcldpdGhOZWVkZWRLZXkgPyBwYWlyV2l0aE5lZWRlZEtleS52YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBrZXlWYWx1ZVBhaXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKS5tYXAocGllY2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBwaWVjZS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICByZXR1cm4ge2tleSwgdmFsdWV9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRvY3VtZW50LmNvb2tpZSA9IGAke2tleX09JHt2YWx1ZX1gO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5jb25zdCByb2FkRHJhd2luZ1dpZHRoID0gMzA7XHJcbmNvbnN0IHJvYWREcmF3aW5nSGVpZ2h0ID0gMTIwO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvYWREcmF3aW5nIHtcclxuICAgIHN0YXRpYyBhdERlZmF1bHRQb3NpdGlvbihtYXBXaWR0aCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUm9hZERyYXdpbmcoe1xyXG4gICAgICAgICAgICB4OiBtYXBXaWR0aC8yLXJvYWREcmF3aW5nV2lkdGgvMixcclxuICAgICAgICAgICAgeTogLXJvYWREcmF3aW5nSGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICdncmV5JztcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU3BlZWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgICB3aWR0aDogcm9hZERyYXdpbmdXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiByb2FkRHJhd2luZ0hlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHtjYXJQYXJ0cywgY2FyV2lkdGgsIGNhckhlaWdodH0gZnJvbSAnLi9jYXJQYXJ0cyc7XHJcbmltcG9ydCB7cmFuZG9tUmFuZ2UsIHJhbmRvbUVsZW1lbnQsIHJlY3RhbmdsZXNPdmVybGFwLCByZXBlYXRUYXNrfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHtDb29raWV9IGZyb20gJy4vY29va2llJztcclxuaW1wb3J0IHtSb2FkRHJhd2luZ30gZnJvbSAnLi9kZWNvcmF0aW9ucyc7XHJcbmltcG9ydCB7Q2FudmFzLCBkcmF3Q2FyLCBkcmF3Q2FycywgZHJhd0RlY29yYXRpb25zLCBTY29yZURpc3BsYXl9IGZyb20gJy4vZ3JhcGhpY3MnO1xyXG5cclxuY29uc3QgbGFuZUNvdW50ID0gNjtcclxuY29uc3QgbWFwV2lkdGggPSBsYW5lQ291bnQqY2FyV2lkdGg7XHJcbmNvbnN0IG1hcEhlaWdodCA9IGNhckhlaWdodCo2O1xyXG5jb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSAnI0U2RTZGNSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyhkb2N1bWVudCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBtYXBXaWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBtYXBIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkgPSBuZXcgU2NvcmVEaXNwbGF5KGRvY3VtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDYXIgPSBQbGF5ZXJDYXIuYXREZWZhdWx0UG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmVuZW15Q2FycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGVjb3JhdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmRpc3RhbmNlVHJhdmVsZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuY29va2llID0gbmV3IENvb2tpZShkb2N1bWVudCk7XHJcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVyID0gbmV3IEtleUhhbmRsZXIoZG9jdW1lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnJlcGVhdFRhc2tXaGlsZVJ1bm5pbmcoe1xyXG4gICAgICAgICAgICB0YXNrOiAoKSA9PiB0aGlzLmVuZW15Q2Fycy5wdXNoKEVuZW15Q2FyLmF0UmFuZG9tUG9zaXRpb24oKSksIFxyXG4gICAgICAgICAgICBtaWxsaXNlY29uZHM6ICgpID0+IDEwMDAvdGhpcy5wbGF5ZXJDYXIudmVydGljYWxTcGVlZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlcGVhdFRhc2tXaGlsZVJ1bm5pbmcoe1xyXG4gICAgICAgICAgICB0YXNrOiAoKSA9PiB0aGlzLmRlY29yYXRpb25zLnB1c2goUm9hZERyYXdpbmcuYXREZWZhdWx0UG9zaXRpb24obWFwV2lkdGgpKSxcclxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzOiAoKSA9PiAzNTAvdGhpcy5wbGF5ZXJDYXIudmVydGljYWxTcGVlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpIHtcclxuICAgICAgICByZXBlYXRUYXNrKHtcclxuICAgICAgICAgICAgdGFzazogdGltZURlbHRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVBbGxPYmplY3RzKHRpbWVEZWx0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95T2Zmc2NyZWVuT2JqZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0V2ZXJ5dGhpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrR2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ2FyQ3Jhc2hlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTY29yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJDYXJDcmFzaGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Q2Fycy5zb21lKGVuZW15Q2FyID0+IGNhcnNDcmFzaGVkKGVuZW15Q2FyLCB0aGlzLnBsYXllckNhcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTY29yZSgpIHtcclxuICAgICAgICBjb25zdCBzY29yZSA9IHRoaXMuY2FsY3VsYXRlU2NvcmUoKTtcclxuICAgICAgICBjb25zdCBoaWdoU2NvcmUgPSByZWFkSGlnaFNjb3JlKHRoaXMuY29va2llKTtcclxuICAgICAgICBsZXQgb3V0cHV0VGV4dCA9IGBGaW5hbCBzY29yZTogJHtzY29yZX0uYDtcclxuICAgICAgICBpZiAoIWhpZ2hTY29yZSB8fCBzY29yZSA+IGhpZ2hTY29yZSkge1xyXG4gICAgICAgICAgICB3cml0ZUhpZ2hTY29yZSh0aGlzLmNvb2tpZSwgc2NvcmUpO1xyXG4gICAgICAgICAgICBvdXRwdXRUZXh0ID0gYE5ldyBoaWdoIHNjb3JlIVxcbiR7b3V0cHV0VGV4dH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChvdXRwdXRUZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVTY29yZSgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmRpc3RhbmNlVHJhdmVsZWQvMWUzKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlQWxsT2JqZWN0cyh0aW1lRGVsdGEpIHtcclxuICAgICAgICB0aGlzLnBsYXllckNhci51cGRhdGVTcGVlZCh0aGlzLmRpc3RhbmNlVHJhdmVsZWQpO1xyXG5cclxuICAgICAgICBjb25zdCByZWxhdGl2aXR5U3lzdGVtID0gVmVydGljYWxSZWxhdGl2aXR5U3lzdGVtLnJlbGF0aXZlVG8odGhpcy5wbGF5ZXJDYXIpO1xyXG4gICAgICAgIHJlbGF0aXZpdHlTeXN0ZW0uYWRkRWxlbWVudHModGhpcy5lbmVteUNhcnMpO1xyXG4gICAgICAgIHJlbGF0aXZpdHlTeXN0ZW0uYWRkRWxlbWVudHModGhpcy5kZWNvcmF0aW9ucyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMua2V5SGFuZGxlci5rZXlJc0Rvd24oJ0Fycm93TGVmdCcpKVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNhci5tb3ZlTGVmdCgwLCB0aW1lRGVsdGEpO1xyXG4gICAgICAgIGlmICh0aGlzLmtleUhhbmRsZXIua2V5SXNEb3duKCdBcnJvd1JpZ2h0JykpXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2FyLm1vdmVSaWdodChtYXBXaWR0aC1jYXJXaWR0aCwgdGltZURlbHRhKTtcclxuXHJcbiAgICAgICAgcmVsYXRpdml0eVN5c3RlbS5tb3ZlRWxlbWVudHModGltZURlbHRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZVRyYXZlbGVkICs9IHRoaXMucGxheWVyQ2FyLnZlcnRpY2FsU3BlZWQgKiB0aW1lRGVsdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveU9mZnNjcmVlbk9iamVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy5lbmVteUNhcnMgPSBhY3RpdmVPYmplY3RzKHRoaXMuZW5lbXlDYXJzKTtcclxuICAgICAgICB0aGlzLmRlY29yYXRpb25zID0gYWN0aXZlT2JqZWN0cyh0aGlzLmRlY29yYXRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhcihiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdFdmVyeXRoaW5nKCkge1xyXG4gICAgICAgIGRyYXdEZWNvcmF0aW9ucyh0aGlzLmNhbnZhcywgdGhpcy5kZWNvcmF0aW9ucyk7XHJcbiAgICAgICAgZHJhd0Nhcih0aGlzLmNhbnZhcywgdGhpcy5wbGF5ZXJDYXIpO1xyXG4gICAgICAgIGRyYXdDYXJzKHRoaXMuY2FudmFzLCB0aGlzLmVuZW15Q2Fycyk7XHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkudXBkYXRlKHRoaXMuY2FsY3VsYXRlU2NvcmUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwZWF0VGFza1doaWxlUnVubmluZyh7dGFzaywgbWlsbGlzZWNvbmRzfSkge1xyXG4gICAgICAgIHJlcGVhdFRhc2soe1xyXG4gICAgICAgICAgICB0YXNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFzaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtaWxsaXNlY29uZHNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgS2V5SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xyXG4gICAgICAgIHRoaXMua2V5RG93bk1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKHtrZXl9KSA9PiB0aGlzLmtleURvd25NYXAuc2V0KGtleSwgdHJ1ZSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKHtrZXl9KSA9PiB0aGlzLmtleURvd25NYXAuc2V0KGtleSwgZmFsc2UpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAga2V5SXNEb3duKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleURvd25NYXAuZ2V0KGtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHJhbmRvbUVsZW1lbnQoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICd5ZWxsb3cnLCAncHVycGxlJywgJ29yYW5nZScsICdtYWdlbnRhJywgJ2FxdWEnLCAnbWFyb29uJ10pO1xyXG59XHJcblxyXG5jbGFzcyBDYXIge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gcmFuZG9tQ29sb3IoKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcGh5c2ljYWxQYXJ0cygpIHtcclxuICAgICAgICByZXR1cm4gY2FyUGFydHModGhpcy5wb3NpdGlvbiwgdGhpcy5jb2xvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllckNhciBleHRlbmRzIENhciB7XHJcbiAgICBzdGF0aWMgYXREZWZhdWx0UG9zaXRpb24oKXtcclxuICAgICAgICByZXR1cm4gbmV3IFBsYXllckNhcih7XHJcbiAgICAgICAgICAgIHg6IG1hcFdpZHRoLzItY2FyV2lkdGgvMixcclxuICAgICAgICAgICAgeTogbWFwSGVpZ2h0LWNhckhlaWdodC01XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJhc2VTcGVlZCgpIHtcclxuICAgICAgICByZXR1cm4gMC44O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYXhTcGVlZCgpIHtcclxuICAgICAgICByZXR1cm4gMjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxTcGVlZCA9IHRoaXMudmVydGljYWxTcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTcGVlZCgwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTcGVlZChkaXN0YW5jZVRyYXZlbGVkKSB7XHJcbiAgICAgICAgY29uc3QgbmV3U3BlZWQgPSBNYXRoLmFicyhkaXN0YW5jZVRyYXZlbGVkLzUwMDAwKStQbGF5ZXJDYXIuYmFzZVNwZWVkKCk7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsU3BlZWQgPSB0aGlzLnZlcnRpY2FsU3BlZWQgPSBcclxuICAgICAgICAgICAgKG5ld1NwZWVkID4gUGxheWVyQ2FyLm1heFNwZWVkKCkpID8gUGxheWVyQ2FyLm1heFNwZWVkKCkgOiBuZXdTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlTGVmdChsZWZ0Qm91bmRhcnksIHRpbWVEZWx0YSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1ggPSB0aGlzLnBvc2l0aW9uLngtdGhpcy5ob3Jpem9udGFsU3BlZWQgKiB0aW1lRGVsdGE7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gKG5ld1ggPCBsZWZ0Qm91bmRhcnkpID8gbGVmdEJvdW5kYXJ5IDogbmV3WDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlUmlnaHQocmlnaHRCb3VuZGFyeSwgdGltZURlbHRhKSB7XHJcbiAgICAgICAgY29uc3QgbmV3WCA9IHRoaXMucG9zaXRpb24ueCt0aGlzLmhvcml6b250YWxTcGVlZCAqIHRpbWVEZWx0YTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAobmV3WCA+IHJpZ2h0Qm91bmRhcnkpID8gcmlnaHRCb3VuZGFyeSA6IG5ld1g7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEVuZW15Q2FyIGV4dGVuZHMgQ2FyIHtcclxuICAgIHN0YXRpYyBhdFJhbmRvbVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlDYXIoe1xyXG4gICAgICAgICAgICB4OiBjYW52YXMud2lkdGgvbGFuZUNvdW50KnJhbmRvbVJhbmdlKDAsIGxhbmVDb3VudCksIFxyXG4gICAgICAgICAgICB5OiAtY2FySGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNwZWVkID0gMC40NTtcclxuICAgIH1cclxuXHJcbiAgICBwaHlzaWNhbFBhcnRzKCkge1xyXG4gICAgICAgIHJldHVybiBjYXJQYXJ0cyh0aGlzLnBvc2l0aW9uLCB0aGlzLmNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2Fyc0NyYXNoZWQoYzEsIGMyKSB7XHJcbiAgICBmb3IgKGNvbnN0IHBhcnQxIG9mIGMxLnBoeXNpY2FsUGFydHMoKSlcclxuICAgICAgICBmb3IgKGNvbnN0IHBhcnQyIG9mIGMyLnBoeXNpY2FsUGFydHMoKSlcclxuICAgICAgICAgICAgaWYgKHJlY3RhbmdsZXNPdmVybGFwKHBhcnQxLnJlY3QsIHBhcnQyLnJlY3QpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2ZU9iamVjdHMob2JqZWN0cykge1xyXG4gICAgY29uc3QgaXNBY3RpdmUgPSAob2JqZWN0KSA9PiBvYmplY3QucG9zaXRpb24ueSA8IG1hcEhlaWdodDtcclxuICAgIHJldHVybiBvYmplY3RzLmZpbHRlcihpc0FjdGl2ZSk7XHJcbn1cclxuXHJcbmNsYXNzIFZlcnRpY2FsUmVsYXRpdml0eVN5c3RlbSB7XHJcbiAgICBzdGF0aWMgcmVsYXRpdmVUbyh7b2JqZWN0LCB2ZXJ0aWNhbFNwZWVkfSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVydGljYWxSZWxhdGl2aXR5U3lzdGVtKHtvYmplY3QsIHZlcnRpY2FsU3BlZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXJPYmplY3QpIHtcclxuICAgICAgICB0aGlzLmNlbnRlck9iamVjdCA9IGNlbnRlck9iamVjdDtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRWxlbWVudHMoZWxlbWVudEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKC4uLmVsZW1lbnRBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUVsZW1lbnRzKHRpbWVEZWx0YSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLmVsZW1lbnRzKVxyXG4gICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnkgKz0gKHRoaXMuY2VudGVyT2JqZWN0LnZlcnRpY2FsU3BlZWQtZWxlbWVudC52ZXJ0aWNhbFNwZWVkKSAqIHRpbWVEZWx0YTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY29va2llSGlnaFNjb3JlS2V5ID0gJ2hpZ2hzY29yZSc7XHJcblxyXG5mdW5jdGlvbiByZWFkSGlnaFNjb3JlKGNvb2tpZSkge1xyXG4gICAgcmV0dXJuIGNvb2tpZS5yZWFkKGNvb2tpZUhpZ2hTY29yZUtleSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlSGlnaFNjb3JlKGNvb2tpZSwgaGlnaFNjb3JlKSB7XHJcbiAgICBjb29raWUud3JpdGUoY29va2llSGlnaFNjb3JlS2V5LCBoaWdoU2NvcmUpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMge1xyXG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkcmF3UmVjdCh7eCwgeSwgd2lkdGgsIGhlaWdodH0sIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcihiYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgICB0aGlzLmRyYXdSZWN0KHtcclxuICAgICAgICAgICAgeDogMCwgXHJcbiAgICAgICAgICAgIHk6IDAsIFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCwgXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRcclxuICAgICAgICB9LCBiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB3aWR0aCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcmVEaXNwbGF5IHtcclxuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XHJcbiAgICAgICAgdGhpcy5wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5wLmlubmVySFRNTCA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FyKGNhbnZhcywgY2FyKSB7XHJcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgY2FyLnBoeXNpY2FsUGFydHMoKSlcclxuICAgICAgICBjYW52YXMuZHJhd1JlY3QocGFydC5yZWN0LCBwYXJ0LmNvbG9yKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDYXJzKGNhbnZhcywgY2Fycykge1xyXG4gICAgZm9yIChjb25zdCBjYXIgb2YgY2FycylcclxuICAgICAgICBkcmF3Q2FyKGNhbnZhcywgY2FyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdEZWNvcmF0aW9ucyhjYW52YXMsIGRlY29yYXRpb25zKSB7XHJcbiAgICBmb3IgKGNvbnN0IGRlY29yYXRpb24gb2YgZGVjb3JhdGlvbnMpXHJcbiAgICAgICAgY2FudmFzLmRyYXdSZWN0KGRlY29yYXRpb24ucmVjdCwgZGVjb3JhdGlvbi5jb2xvcik7XHJcbn1cclxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tICcuL2dhbWUnO1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGRvY3VtZW50KTtcclxuZ2FtZS5ydW4oKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdFRhc2soe3Rhc2ssIG1pbGxpc2Vjb25kc30pIHtcclxuICAgIGlmIChtaWxsaXNlY29uZHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJ1blRhc2sodGFzayk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0aW1lciA9IG1pbGxpc2Vjb25kcygpO1xyXG5cclxuICAgIHJ1blRhc2sodGltZURlbHRhID0+IHtcclxuICAgICAgICB0aW1lciAtPSB0aW1lRGVsdGE7XHJcblxyXG4gICAgICAgIGlmICh0aW1lciA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRpbWVyID0gbWlsbGlzZWNvbmRzKCk7XHJcbiAgICAgICAgICAgIHRhc2soKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBydW5UYXNrKHRhc2spIHtcclxuICAgIGxldCBsYXN0Q2FsbCA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2FsbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsYXN0Q2FsbCA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGltZURlbHRhID0gdGltZXN0YW1wIC0gbGFzdENhbGw7XHJcbiAgICAgICAgbGFzdENhbGwgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgdGFzayh0aW1lRGVsdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUVsZW1lbnQoYXJyYXkpIHtcclxuICAgIHJldHVybiBhcnJheVtyYW5kb21SYW5nZSgwLCBhcnJheS5sZW5ndGgpXTtcclxufSBcclxuXHJcbi8vIG1pbiBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UsIG1heCBpc24ndFxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4LW1pbikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlc092ZXJsYXAocmVjdDEsIHJlY3QyKSB7XHJcbiAgICByZXR1cm4gcmVjdGFuZ2xlUG9pbnRzKHJlY3QxKS5zb21lKHBvaW50ID0+IHBvaW50SXNJbnNpZGVSZWN0YW5nbGUocG9pbnQsIHJlY3QyKSkgfHxcclxuICAgICAgICAgICAgcmVjdGFuZ2xlUG9pbnRzKHJlY3QyKS5zb21lKHBvaW50ID0+IHBvaW50SXNJbnNpZGVSZWN0YW5nbGUocG9pbnQsIHJlY3QxKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludElzSW5zaWRlUmVjdGFuZ2xlKHBvaW50LCByZWN0KSB7XHJcbiAgICBjb25zdCB1cHBlckxlZnRSZWN0UG9pbnQgPSB1cHBlckxlZnRQb2ludChyZWN0KTtcclxuICAgIGNvbnN0IGxvd2VyUmlnaHRSZWN0UG9pbnQgPSBsb3dlclJpZ2h0UG9pbnQocmVjdCk7XHJcbiAgICByZXR1cm4gKHBvaW50LnggPiB1cHBlckxlZnRSZWN0UG9pbnQueCAmJiBwb2ludC54IDwgbG93ZXJSaWdodFJlY3RQb2ludC54KSAmJlxyXG4gICAgICAgICAgICAocG9pbnQueSA+IHVwcGVyTGVmdFJlY3RQb2ludC55ICYmIHBvaW50LnkgPCBsb3dlclJpZ2h0UmVjdFBvaW50LnkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBwZXJMZWZ0UG9pbnQocmVjdCkge1xyXG4gICAgcmV0dXJuIHt4OiByZWN0LngsIHk6IHJlY3QueX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHBlclJpZ2h0UG9pbnQocmVjdCkge1xyXG4gICAgcmV0dXJuIHt4OiByZWN0LngrcmVjdC53aWR0aCwgeTogcmVjdC55fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvd2VyTGVmdFBvaW50KHJlY3QpIHtcclxuICAgIHJldHVybiB7eDogcmVjdC54LCB5OiByZWN0LnkrcmVjdC5oZWlnaHR9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG93ZXJSaWdodFBvaW50KHJlY3QpIHtcclxuICAgIHJldHVybiB7eDogcmVjdC54K3JlY3Qud2lkdGgsIHk6IHJlY3QueStyZWN0LmhlaWdodH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVQb2ludHMocmVjdGFuZ2xlKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHVwcGVyTGVmdFBvaW50KHJlY3RhbmdsZSksXHJcbiAgICAgICAgdXBwZXJSaWdodFBvaW50KHJlY3RhbmdsZSksXHJcbiAgICAgICAgbG93ZXJMZWZ0UG9pbnQocmVjdGFuZ2xlKSxcclxuICAgICAgICBsb3dlclJpZ2h0UG9pbnQocmVjdGFuZ2xlKVxyXG4gICAgXTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=