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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  var cookies = {
    internal: {}
  };

  cookies.Cookie =
  /*#__PURE__*/
  function () {
    function _class(document) {
      _classCallCheck(this, _class);

      this.document = document;
    }

    _createClass(_class, [{
      key: "read",
      value: function read(key) {
        var pairHasNeededKey = function pairHasNeededKey(pair) {
          return pair.key === key;
        };

        var pairWithNeededKey = this.keyValuePairs().find(pairHasNeededKey);
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

    return _class;
  }();

  return cookies;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

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
;

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
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cookie__WEBPACK_IMPORTED_MODULE_2__);
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

function onScreenCars(cars) {
  var carIsOnScreen = function carIsOnScreen(car) {
    return car.position.y < -mapHeight;
  };

  return cars.filter(carIsOnScreen);
}

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
}(); // Tweak the speed and other constants and it should be fine


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
;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhclBhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbInRpcmVXaWR0aCIsInRpcmVIZWlnaHQiLCJib25uZXRXaWR0aCIsImJvbm5ldEhlaWdodCIsInJvb2ZXaWR0aCIsInJvb2ZIZWlnaHQiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsInRpcmUiLCJ4IiwieSIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY2FyUGFydHMiLCJwb3NpdGlvbiIsImJvbm5ldCIsInJvb2YiLCJmcm9udExlZnRUaXJlIiwiYm90dG9tTGVmdFRpcmUiLCJmcm9udFJpZ2h0VGlyZSIsImJvdHRvbVJpZ2h0VGlyZSIsImRlZmluZSIsImNvb2tpZXMiLCJpbnRlcm5hbCIsIkNvb2tpZSIsImRvY3VtZW50Iiwia2V5IiwicGFpckhhc05lZWRlZEtleSIsInBhaXIiLCJwYWlyV2l0aE5lZWRlZEtleSIsImtleVZhbHVlUGFpcnMiLCJmaW5kIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjb29raWUiLCJzcGxpdCIsIm1hcCIsInBpZWNlIiwicm9hZERyYXdpbmdXaWR0aCIsInJvYWREcmF3aW5nSGVpZ2h0IiwiUm9hZERyYXdpbmciLCJtYXBXaWR0aCIsInZlcnRpY2FsU3BlZWQiLCJsYW5lQ291bnQiLCJtYXBIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJHYW1lIiwiY2FudmFzIiwiQ2FudmFzIiwic2NvcmVEaXNwbGF5IiwiU2NvcmVEaXNwbGF5IiwicGxheWVyQ2FyIiwiUGxheWVyQ2FyIiwiYXREZWZhdWx0UG9zaXRpb24iLCJlbmVteUNhcnMiLCJkZWNvcmF0aW9ucyIsImRpc3RhbmNlVHJhdmVsZWQiLCJrZXlIYW5kbGVyIiwiS2V5SGFuZGxlciIsInJlcGVhdFRhc2tXaGlsZVJ1bm5pbmciLCJ0YXNrIiwicHVzaCIsIkVuZW15Q2FyIiwiYXRSYW5kb21Qb3NpdGlvbiIsIm1pbGxpc2Vjb25kcyIsInJlcGVhdFRhc2siLCJ0aW1lRGVsdGEiLCJnYW1lT3ZlciIsImNsZWFyQ2FudmFzIiwibW92ZUFsbE9iamVjdHMiLCJkZXN0cm95T2Zmc2NyZWVuT2JqZWN0cyIsImRyYXdFdmVyeXRoaW5nIiwiY2hlY2tHYW1lT3ZlciIsInBsYXllckNhckNyYXNoZWQiLCJzaG93U2NvcmUiLCJzb21lIiwiZW5lbXlDYXIiLCJjYXJzQ3Jhc2hlZCIsInNjb3JlIiwiY2FsY3VsYXRlU2NvcmUiLCJoaWdoU2NvcmUiLCJyZWFkSGlnaFNjb3JlIiwib3V0cHV0VGV4dCIsIndyaXRlSGlnaFNjb3JlIiwiYWxlcnQiLCJNYXRoIiwiZmxvb3IiLCJ1cGRhdGVTcGVlZCIsInJlbGF0aXZpdHlTeXN0ZW0iLCJWZXJ0aWNhbFJlbGF0aXZpdHlTeXN0ZW0iLCJyZWxhdGl2ZVRvIiwiYWRkRWxlbWVudHMiLCJrZXlJc0Rvd24iLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsIm1vdmVFbGVtZW50cyIsImFjdGl2ZU9iamVjdHMiLCJjbGVhciIsImRyYXdEZWNvcmF0aW9ucyIsImRyYXdDYXIiLCJkcmF3Q2FycyIsInVwZGF0ZSIsImtleURvd25NYXAiLCJNYXAiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0IiwiZ2V0IiwicmFuZG9tQ29sb3IiLCJyYW5kb21FbGVtZW50IiwiQ2FyIiwiaG9yaXpvbnRhbFNwZWVkIiwibmV3U3BlZWQiLCJhYnMiLCJiYXNlU3BlZWQiLCJtYXhTcGVlZCIsImxlZnRCb3VuZGFyeSIsIm5ld1giLCJyaWdodEJvdW5kYXJ5IiwicmFuZG9tUmFuZ2UiLCJvblNjcmVlbkNhcnMiLCJjYXJzIiwiY2FySXNPblNjcmVlbiIsImNhciIsImZpbHRlciIsImMxIiwiYzIiLCJwaHlzaWNhbFBhcnRzIiwicGFydDEiLCJwYXJ0MiIsInJlY3RhbmdsZXNPdmVybGFwIiwib2JqZWN0cyIsImlzQWN0aXZlIiwib2JqZWN0IiwiY2VudGVyT2JqZWN0IiwiZWxlbWVudHMiLCJlbGVtZW50QXJyYXkiLCJlbGVtZW50IiwiY29va2llSGlnaFNjb3JlS2V5IiwicmVhZCIsIndyaXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd1JlY3QiLCJwIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJwYXJ0IiwiZGVjb3JhdGlvbiIsImdhbWUiLCJydW4iLCJydW5UYXNrIiwidGltZXIiLCJsYXN0Q2FsbCIsInN0ZXAiLCJ0aW1lc3RhbXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhcnJheSIsImxlbmd0aCIsIm1pbiIsIm1heCIsInJhbmRvbSIsImFkZFBvaW50cyIsInAxIiwicDIiLCJzdWJ0cmFjdFBvaW50cyIsInBvaW50c0FyZUVxdWFsIiwicmVjdDEiLCJyZWN0MiIsInJlY3RhbmdsZVBvaW50cyIsInBvaW50IiwicG9pbnRJc0luc2lkZVJlY3RhbmdsZSIsInVwcGVyTGVmdFJlY3RQb2ludCIsInVwcGVyTGVmdFBvaW50IiwibG93ZXJSaWdodFJlY3RQb2ludCIsImxvd2VyUmlnaHRQb2ludCIsInVwcGVyUmlnaHRQb2ludCIsImxvd2VyTGVmdFBvaW50IiwicmVjdGFuZ2xlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FB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UDtBQUNIO0FBRU0sU0FBUzBLLGVBQVQsQ0FBeUJ6SyxJQUF6QixFQUErQjtBQUNsQyxTQUFPO0FBQUNGLEtBQUMsRUFBRUUsSUFBSSxDQUFDRixDQUFMLEdBQU9FLElBQUksQ0FBQ0MsS0FBaEI7QUFBdUJGLEtBQUMsRUFBRUMsSUFBSSxDQUFDRDtBQUEvQixHQUFQO0FBQ0g7QUFFTSxTQUFTMkssY0FBVCxDQUF3QjFLLElBQXhCLEVBQThCO0FBQ2pDLFNBQU87QUFBQ0YsS0FBQyxFQUFFRSxJQUFJLENBQUNGLENBQVQ7QUFBWUMsS0FBQyxFQUFFQyxJQUFJLENBQUNELENBQUwsR0FBT0MsSUFBSSxDQUFDRTtBQUEzQixHQUFQO0FBQ0g7QUFFTSxTQUFTc0ssZUFBVCxDQUF5QnhLLElBQXpCLEVBQStCO0FBQ2xDLFNBQU87QUFBQ0YsS0FBQyxFQUFFRSxJQUFJLENBQUNGLENBQUwsR0FBT0UsSUFBSSxDQUFDQyxLQUFoQjtBQUF1QkYsS0FBQyxFQUFFQyxJQUFJLENBQUNELENBQUwsR0FBT0MsSUFBSSxDQUFDRTtBQUF0QyxHQUFQO0FBQ0g7QUFFTSxTQUFTZ0ssZUFBVCxDQUF5QlMsU0FBekIsRUFBb0M7QUFDdkMsU0FBTyxDQUNITCxjQUFjLENBQUNLLFNBQUQsQ0FEWCxFQUVIRixlQUFlLENBQUNFLFNBQUQsQ0FGWixFQUdIRCxjQUFjLENBQUNDLFNBQUQsQ0FIWCxFQUlISCxlQUFlLENBQUNHLFNBQUQsQ0FKWixDQUFQO0FBTUgsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCB0aXJlV2lkdGggPSA3O1xyXG5leHBvcnQgY29uc3QgdGlyZUhlaWdodCA9IDE1O1xyXG5leHBvcnQgY29uc3QgYm9ubmV0V2lkdGggPSAzMDtcclxuZXhwb3J0IGNvbnN0IGJvbm5ldEhlaWdodCA9IDIwO1xyXG5leHBvcnQgY29uc3Qgcm9vZldpZHRoID0gYm9ubmV0V2lkdGgrdGlyZVdpZHRoKjI7XHJcbmV4cG9ydCBjb25zdCByb29mSGVpZ2h0ID0gYm9ubmV0SGVpZ2h0KzUwO1xyXG5leHBvcnQgY29uc3QgY2FyV2lkdGggPSByb29mV2lkdGgrdGlyZVdpZHRoKjJcclxuZXhwb3J0IGNvbnN0IGNhckhlaWdodCA9IHJvb2ZIZWlnaHQrYm9ubmV0SGVpZ2h0O1xyXG5cclxuZnVuY3Rpb24gdGlyZSh7eCwgeX0pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVjdDoge1xyXG4gICAgICAgICAgICB4LCB5LCBcclxuICAgICAgICAgICAgd2lkdGg6IHRpcmVXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aXJlSGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhclBhcnRzKHBvc2l0aW9uLCBjb2xvcikge1xyXG4gICAgY29uc3QgYm9ubmV0ID0ge1xyXG4gICAgICAgIHJlY3Q6IHtcclxuICAgICAgICAgICAgeDogcG9zaXRpb24ueCt0aXJlV2lkdGgqMiwgXHJcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uLnksIFxyXG4gICAgICAgICAgICB3aWR0aDogYm9ubmV0V2lkdGgsIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJvbm5ldEhlaWdodCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgcm9vZiA9IHtcclxuICAgICAgICByZWN0OiB7XHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLngrdGlyZVdpZHRoLCBcclxuICAgICAgICAgICAgeTogYm9ubmV0LnJlY3QueStib25uZXRIZWlnaHQsIFxyXG4gICAgICAgICAgICB3aWR0aDogcm9vZldpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHJvb2ZIZWlnaHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZnJvbnRMZWZ0VGlyZSA9IHRpcmUoe1xyXG4gICAgICAgIHg6IHBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogcm9vZi5yZWN0LnkrNVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBib3R0b21MZWZ0VGlyZSA9IHRpcmUoe1xyXG4gICAgICAgIHg6IHBvc2l0aW9uLngsIFxyXG4gICAgICAgIHk6IHJvb2YucmVjdC55K3Jvb2ZIZWlnaHQtMjBcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZnJvbnRSaWdodFRpcmUgPSB0aXJlKHtcclxuICAgICAgICB4OiByb29mLnJlY3QueCtyb29mV2lkdGgsIFxyXG4gICAgICAgIHk6IHJvb2YucmVjdC55KzVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYm90dG9tUmlnaHRUaXJlID0gdGlyZSh7XHJcbiAgICAgICAgeDogcm9vZi5yZWN0Lngrcm9vZldpZHRoLCBcclxuICAgICAgICB5OiByb29mLnJlY3QueStyb29mSGVpZ2h0LTIwXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGJvbm5ldCwgcm9vZiwgZnJvbnRMZWZ0VGlyZSwgYm90dG9tTGVmdFRpcmUsIGZyb250UmlnaHRUaXJlLCBib3R0b21SaWdodFRpcmVcclxuICAgIF07XHJcbn07IiwiZGVmaW5lKCgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSB7XHJcbiAgICAgICAgaW50ZXJuYWw6IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvb2tpZXMuQ29va2llID0gY2xhc3Mge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlYWQoa2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhaXJIYXNOZWVkZWRLZXkgPSBwYWlyID0+IHBhaXIua2V5ID09PSBrZXk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhaXJXaXRoTmVlZGVkS2V5ID0gdGhpcy5rZXlWYWx1ZVBhaXJzKCkuZmluZChwYWlySGFzTmVlZGVkS2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhaXJXaXRoTmVlZGVkS2V5ID8gcGFpcldpdGhOZWVkZWRLZXkudmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBrZXlWYWx1ZVBhaXJzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykubWFwKHBpZWNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHBpZWNlLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2tleSwgdmFsdWV9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdyaXRlKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5jb29raWUgPSBgJHtrZXl9PSR7dmFsdWV9YDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBjb29raWVzO1xyXG59KTsiLCJcclxuY29uc3Qgcm9hZERyYXdpbmdXaWR0aCA9IDMwO1xyXG5jb25zdCByb2FkRHJhd2luZ0hlaWdodCA9IDEyMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb2FkRHJhd2luZyB7XHJcbiAgICBzdGF0aWMgYXREZWZhdWx0UG9zaXRpb24obWFwV2lkdGgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJvYWREcmF3aW5nKHtcclxuICAgICAgICAgICAgeDogbWFwV2lkdGgvMi1yb2FkRHJhd2luZ1dpZHRoLzIsXHJcbiAgICAgICAgICAgIHk6IC1yb2FkRHJhd2luZ0hlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAnZ3JleSc7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNwZWVkID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVjdCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgd2lkdGg6IHJvYWREcmF3aW5nV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogcm9hZERyYXdpbmdIZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQge2NhclBhcnRzLCBjYXJXaWR0aCwgY2FySGVpZ2h0fSBmcm9tICcuL2NhclBhcnRzJztcclxuaW1wb3J0IHtyYW5kb21SYW5nZSwgcmFuZG9tRWxlbWVudCwgcmVjdGFuZ2xlc092ZXJsYXAsIHJlcGVhdFRhc2t9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQge0Nvb2tpZX0gZnJvbSAnLi9jb29raWUnO1xyXG5pbXBvcnQge1JvYWREcmF3aW5nfSBmcm9tICcuL2RlY29yYXRpb25zJztcclxuaW1wb3J0IHtDYW52YXMsIGRyYXdDYXIsIGRyYXdDYXJzLCBkcmF3RGVjb3JhdGlvbnMsIFNjb3JlRGlzcGxheX0gZnJvbSAnLi9ncmFwaGljcyc7XHJcblxyXG5jb25zdCBsYW5lQ291bnQgPSA2O1xyXG5jb25zdCBtYXBXaWR0aCA9IGxhbmVDb3VudCpjYXJXaWR0aDtcclxuY29uc3QgbWFwSGVpZ2h0ID0gY2FySGVpZ2h0KjY7XHJcbmNvbnN0IGJhY2tncm91bmRDb2xvciA9ICcjRTZFNkY1JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKGRvY3VtZW50KTtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IG1hcFdpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IG1hcEhlaWdodDtcclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheSA9IG5ldyBTY29yZURpc3BsYXkoZG9jdW1lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckNhciA9IFBsYXllckNhci5hdERlZmF1bHRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDYXJzID0gW107XHJcbiAgICAgICAgdGhpcy5kZWNvcmF0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb29raWUgPSBuZXcgQ29va2llKGRvY3VtZW50KTtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXIgPSBuZXcgS2V5SGFuZGxlcihkb2N1bWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVwZWF0VGFza1doaWxlUnVubmluZyh7XHJcbiAgICAgICAgICAgIHRhc2s6ICgpID0+IHRoaXMuZW5lbXlDYXJzLnB1c2goRW5lbXlDYXIuYXRSYW5kb21Qb3NpdGlvbigpKSwgXHJcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kczogKCkgPT4gMTAwMC90aGlzLnBsYXllckNhci52ZXJ0aWNhbFNwZWVkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVwZWF0VGFza1doaWxlUnVubmluZyh7XHJcbiAgICAgICAgICAgIHRhc2s6ICgpID0+IHRoaXMuZGVjb3JhdGlvbnMucHVzaChSb2FkRHJhd2luZy5hdERlZmF1bHRQb3NpdGlvbihtYXBXaWR0aCkpLFxyXG4gICAgICAgICAgICBtaWxsaXNlY29uZHM6ICgpID0+IDM1MC90aGlzLnBsYXllckNhci52ZXJ0aWNhbFNwZWVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHJlcGVhdFRhc2soe1xyXG4gICAgICAgICAgICB0YXNrOiB0aW1lRGVsdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUFsbE9iamVjdHModGltZURlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lPZmZzY3JlZW5PYmplY3RzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3RXZlcnl0aGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tHYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tHYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDYXJDcmFzaGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Njb3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXllckNhckNyYXNoZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lbXlDYXJzLnNvbWUoZW5lbXlDYXIgPT4gY2Fyc0NyYXNoZWQoZW5lbXlDYXIsIHRoaXMucGxheWVyQ2FyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Njb3JlKCkge1xyXG4gICAgICAgIGNvbnN0IHNjb3JlID0gdGhpcy5jYWxjdWxhdGVTY29yZSgpO1xyXG4gICAgICAgIGNvbnN0IGhpZ2hTY29yZSA9IHJlYWRIaWdoU2NvcmUodGhpcy5jb29raWUpO1xyXG4gICAgICAgIGxldCBvdXRwdXRUZXh0ID0gYEZpbmFsIHNjb3JlOiAke3Njb3JlfS5gO1xyXG4gICAgICAgIGlmICghaGlnaFNjb3JlIHx8IHNjb3JlID4gaGlnaFNjb3JlKSB7XHJcbiAgICAgICAgICAgIHdyaXRlSGlnaFNjb3JlKHRoaXMuY29va2llLCBzY29yZSk7XHJcbiAgICAgICAgICAgIG91dHB1dFRleHQgPSBgTmV3IGhpZ2ggc2NvcmUhXFxuJHtvdXRwdXRUZXh0fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0KG91dHB1dFRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVNjb3JlKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZGlzdGFuY2VUcmF2ZWxlZC8xZTMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVBbGxPYmplY3RzKHRpbWVEZWx0YSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyLnVwZGF0ZVNwZWVkKHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZpdHlTeXN0ZW0gPSBWZXJ0aWNhbFJlbGF0aXZpdHlTeXN0ZW0ucmVsYXRpdmVUbyh0aGlzLnBsYXllckNhcik7XHJcbiAgICAgICAgcmVsYXRpdml0eVN5c3RlbS5hZGRFbGVtZW50cyh0aGlzLmVuZW15Q2Fycyk7XHJcbiAgICAgICAgcmVsYXRpdml0eVN5c3RlbS5hZGRFbGVtZW50cyh0aGlzLmRlY29yYXRpb25zKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5rZXlIYW5kbGVyLmtleUlzRG93bignQXJyb3dMZWZ0JykpXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2FyLm1vdmVMZWZ0KDAsIHRpbWVEZWx0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5SGFuZGxlci5rZXlJc0Rvd24oJ0Fycm93UmlnaHQnKSlcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDYXIubW92ZVJpZ2h0KG1hcFdpZHRoLWNhcldpZHRoLCB0aW1lRGVsdGEpO1xyXG5cclxuICAgICAgICByZWxhdGl2aXR5U3lzdGVtLm1vdmVFbGVtZW50cyh0aW1lRGVsdGEpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3RhbmNlVHJhdmVsZWQgKz0gdGhpcy5wbGF5ZXJDYXIudmVydGljYWxTcGVlZCAqIHRpbWVEZWx0YTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95T2Zmc2NyZWVuT2JqZWN0cygpIHtcclxuICAgICAgICB0aGlzLmVuZW15Q2FycyA9IGFjdGl2ZU9iamVjdHModGhpcy5lbmVteUNhcnMpO1xyXG4gICAgICAgIHRoaXMuZGVjb3JhdGlvbnMgPSBhY3RpdmVPYmplY3RzKHRoaXMuZGVjb3JhdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmNsZWFyKGJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0V2ZXJ5dGhpbmcoKSB7XHJcbiAgICAgICAgZHJhd0RlY29yYXRpb25zKHRoaXMuY2FudmFzLCB0aGlzLmRlY29yYXRpb25zKTtcclxuICAgICAgICBkcmF3Q2FyKHRoaXMuY2FudmFzLCB0aGlzLnBsYXllckNhcik7XHJcbiAgICAgICAgZHJhd0NhcnModGhpcy5jYW52YXMsIHRoaXMuZW5lbXlDYXJzKTtcclxuICAgICAgICB0aGlzLnNjb3JlRGlzcGxheS51cGRhdGUodGhpcy5jYWxjdWxhdGVTY29yZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXBlYXRUYXNrV2hpbGVSdW5uaW5nKHt0YXNrLCBtaWxsaXNlY29uZHN9KSB7XHJcbiAgICAgICAgcmVwZWF0VGFzayh7XHJcbiAgICAgICAgICAgIHRhc2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nYW1lT3ZlcilcclxuICAgICAgICAgICAgICAgICAgICB0YXNrKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBLZXlIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XHJcbiAgICAgICAgdGhpcy5rZXlEb3duTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoe2tleX0pID0+IHRoaXMua2V5RG93bk1hcC5zZXQoa2V5LCB0cnVlKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoe2tleX0pID0+IHRoaXMua2V5RG93bk1hcC5zZXQoa2V5LCBmYWxzZSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBrZXlJc0Rvd24oa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5RG93bk1hcC5nZXQoa2V5KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gcmFuZG9tRWxlbWVudChbJ3JlZCcsICdncmVlbicsICdibHVlJywgJ3llbGxvdycsICdwdXJwbGUnLCAnb3JhbmdlJywgJ21hZ2VudGEnLCAnYXF1YScsICdtYXJvb24nXSk7XHJcbn1cclxuXHJcbmNsYXNzIENhciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSByYW5kb21Db2xvcigpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwaHlzaWNhbFBhcnRzKCkge1xyXG4gICAgICAgIHJldHVybiBjYXJQYXJ0cyh0aGlzLnBvc2l0aW9uLCB0aGlzLmNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUGxheWVyQ2FyIGV4dGVuZHMgQ2FyIHtcclxuICAgIHN0YXRpYyBhdERlZmF1bHRQb3NpdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUGxheWVyQ2FyKHtcclxuICAgICAgICAgICAgeDogbWFwV2lkdGgvMi1jYXJXaWR0aC8yLFxyXG4gICAgICAgICAgICB5OiBtYXBIZWlnaHQtY2FySGVpZ2h0LTVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYmFzZVNwZWVkKCkge1xyXG4gICAgICAgIHJldHVybiAwLjg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1heFNwZWVkKCkge1xyXG4gICAgICAgIHJldHVybiAyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFNwZWVkID0gdGhpcy52ZXJ0aWNhbFNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNwZWVkKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNwZWVkKGRpc3RhbmNlVHJhdmVsZWQpIHtcclxuICAgICAgICBjb25zdCBuZXdTcGVlZCA9IE1hdGguYWJzKGRpc3RhbmNlVHJhdmVsZWQvNTAwMDApK1BsYXllckNhci5iYXNlU3BlZWQoKTtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxTcGVlZCA9IHRoaXMudmVydGljYWxTcGVlZCA9IFxyXG4gICAgICAgICAgICAobmV3U3BlZWQgPiBQbGF5ZXJDYXIubWF4U3BlZWQoKSkgPyBQbGF5ZXJDYXIubWF4U3BlZWQoKSA6IG5ld1NwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVMZWZ0KGxlZnRCb3VuZGFyeSwgdGltZURlbHRhKSB7XHJcbiAgICAgICAgY29uc3QgbmV3WCA9IHRoaXMucG9zaXRpb24ueC10aGlzLmhvcml6b250YWxTcGVlZCAqIHRpbWVEZWx0YTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAobmV3WCA8IGxlZnRCb3VuZGFyeSkgPyBsZWZ0Qm91bmRhcnkgOiBuZXdYO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVSaWdodChyaWdodEJvdW5kYXJ5LCB0aW1lRGVsdGEpIHtcclxuICAgICAgICBjb25zdCBuZXdYID0gdGhpcy5wb3NpdGlvbi54K3RoaXMuaG9yaXpvbnRhbFNwZWVkICogdGltZURlbHRhO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IChuZXdYID4gcmlnaHRCb3VuZGFyeSkgPyByaWdodEJvdW5kYXJ5IDogbmV3WDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRW5lbXlDYXIgZXh0ZW5kcyBDYXIge1xyXG4gICAgc3RhdGljIGF0UmFuZG9tUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbmVteUNhcih7XHJcbiAgICAgICAgICAgIHg6IGNhbnZhcy53aWR0aC9sYW5lQ291bnQqcmFuZG9tUmFuZ2UoMCwgbGFuZUNvdW50KSwgXHJcbiAgICAgICAgICAgIHk6IC1jYXJIZWlnaHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU3BlZWQgPSAwLjQ1O1xyXG4gICAgfVxyXG5cclxuICAgIHBoeXNpY2FsUGFydHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhclBhcnRzKHRoaXMucG9zaXRpb24sIHRoaXMuY29sb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblNjcmVlbkNhcnMoY2Fycykge1xyXG4gICAgY29uc3QgY2FySXNPblNjcmVlbiA9IChjYXIpID0+IGNhci5wb3NpdGlvbi55IDwgLW1hcEhlaWdodDtcclxuICAgIHJldHVybiBjYXJzLmZpbHRlcihjYXJJc09uU2NyZWVuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2Fyc0NyYXNoZWQoYzEsIGMyKSB7XHJcbiAgICBmb3IgKGNvbnN0IHBhcnQxIG9mIGMxLnBoeXNpY2FsUGFydHMoKSlcclxuICAgICAgICBmb3IgKGNvbnN0IHBhcnQyIG9mIGMyLnBoeXNpY2FsUGFydHMoKSlcclxuICAgICAgICAgICAgaWYgKHJlY3RhbmdsZXNPdmVybGFwKHBhcnQxLnJlY3QsIHBhcnQyLnJlY3QpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2ZU9iamVjdHMob2JqZWN0cykge1xyXG4gICAgY29uc3QgaXNBY3RpdmUgPSAob2JqZWN0KSA9PiBvYmplY3QucG9zaXRpb24ueSA8IG1hcEhlaWdodDtcclxuICAgIHJldHVybiBvYmplY3RzLmZpbHRlcihpc0FjdGl2ZSk7XHJcbn1cclxuXHJcbmNsYXNzIFZlcnRpY2FsUmVsYXRpdml0eVN5c3RlbSB7XHJcbiAgICBzdGF0aWMgcmVsYXRpdmVUbyh7b2JqZWN0LCB2ZXJ0aWNhbFNwZWVkfSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVydGljYWxSZWxhdGl2aXR5U3lzdGVtKHtvYmplY3QsIHZlcnRpY2FsU3BlZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXJPYmplY3QpIHtcclxuICAgICAgICB0aGlzLmNlbnRlck9iamVjdCA9IGNlbnRlck9iamVjdDtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRWxlbWVudHMoZWxlbWVudEFycmF5KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKC4uLmVsZW1lbnRBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUVsZW1lbnRzKHRpbWVEZWx0YSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLmVsZW1lbnRzKVxyXG4gICAgICAgICAgICBlbGVtZW50LnBvc2l0aW9uLnkgKz0gKHRoaXMuY2VudGVyT2JqZWN0LnZlcnRpY2FsU3BlZWQtZWxlbWVudC52ZXJ0aWNhbFNwZWVkKSAqIHRpbWVEZWx0YTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVHdlYWsgdGhlIHNwZWVkIGFuZCBvdGhlciBjb25zdGFudHMgYW5kIGl0IHNob3VsZCBiZSBmaW5lXHJcblxyXG5jb25zdCBjb29raWVIaWdoU2NvcmVLZXkgPSAnaGlnaHNjb3JlJztcclxuXHJcbmZ1bmN0aW9uIHJlYWRIaWdoU2NvcmUoY29va2llKSB7XHJcbiAgICByZXR1cm4gY29va2llLnJlYWQoY29va2llSGlnaFNjb3JlS2V5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JpdGVIaWdoU2NvcmUoY29va2llLCBoaWdoU2NvcmUpIHtcclxuICAgIGNvb2tpZS53cml0ZShjb29raWVIaWdoU2NvcmVLZXksIGhpZ2hTY29yZSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRyYXdSZWN0KHt4LCB5LCB3aWR0aCwgaGVpZ2h0fSwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKGJhY2tncm91bmRDb2xvcikge1xyXG4gICAgICAgIHRoaXMuZHJhd1JlY3Qoe1xyXG4gICAgICAgICAgICB4OiAwLCBcclxuICAgICAgICAgICAgeTogMCwgXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLCBcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodFxyXG4gICAgICAgIH0sIGJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdmFsdWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcmVEaXNwbGF5IHtcclxuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XHJcbiAgICAgICAgdGhpcy5wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5wLmlubmVySFRNTCA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FyKGNhbnZhcywgY2FyKSB7XHJcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgY2FyLnBoeXNpY2FsUGFydHMoKSlcclxuICAgICAgICBjYW52YXMuZHJhd1JlY3QocGFydC5yZWN0LCBwYXJ0LmNvbG9yKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDYXJzKGNhbnZhcywgY2Fycykge1xyXG4gICAgZm9yIChjb25zdCBjYXIgb2YgY2FycylcclxuICAgICAgICBkcmF3Q2FyKGNhbnZhcywgY2FyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdEZWNvcmF0aW9ucyhjYW52YXMsIGRlY29yYXRpb25zKSB7XHJcbiAgICBmb3IgKGNvbnN0IGRlY29yYXRpb24gb2YgZGVjb3JhdGlvbnMpXHJcbiAgICAgICAgY2FudmFzLmRyYXdSZWN0KGRlY29yYXRpb24ucmVjdCwgZGVjb3JhdGlvbi5jb2xvcik7XHJcbn1cclxuIiwiaW1wb3J0IHtHYW1lfSBmcm9tICcuL2dhbWUnO1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGRvY3VtZW50KTtcclxuZ2FtZS5ydW4oKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdFRhc2soe3Rhc2ssIG1pbGxpc2Vjb25kc30pIHtcclxuICAgIGlmIChtaWxsaXNlY29uZHMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJ1blRhc2sodGFzayk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0aW1lciA9IG1pbGxpc2Vjb25kcygpO1xyXG5cclxuICAgIHJ1blRhc2sodGltZURlbHRhID0+IHtcclxuICAgICAgICB0aW1lciAtPSB0aW1lRGVsdGE7XHJcblxyXG4gICAgICAgIGlmICh0aW1lciA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRpbWVyID0gbWlsbGlzZWNvbmRzKCk7XHJcbiAgICAgICAgICAgIHRhc2soKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBydW5UYXNrKHRhc2spIHtcclxuICAgIGxldCBsYXN0Q2FsbCA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q2FsbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsYXN0Q2FsbCA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGltZURlbHRhID0gdGltZXN0YW1wIC0gbGFzdENhbGw7XHJcbiAgICAgICAgbGFzdENhbGwgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgdGFzayh0aW1lRGVsdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUVsZW1lbnQoYXJyYXkpIHtcclxuICAgIHJldHVybiBhcnJheVtyYW5kb21SYW5nZSgwLCBhcnJheS5sZW5ndGgpXTtcclxufSBcclxuXHJcbi8vIG1pbiBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UsIG1heCBpc24ndFxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4LW1pbikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRzKHAxLCBwMikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBwMS54K3AyLngsXHJcbiAgICAgICAgeTogcDEueStwMi55XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3RQb2ludHMocDEsIHAyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IHAxLngtcDIueCxcclxuICAgICAgICB5OiBwMS55LXAyLnlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludHNBcmVFcXVhbChwMSwgcDIpIHtcclxuICAgIHJldHVybiBwMS54ID09PSBwMi54ICYmIHAxLnkgPT09IHAyLnk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVzT3ZlcmxhcChyZWN0MSwgcmVjdDIpIHtcclxuICAgIHJldHVybiByZWN0YW5nbGVQb2ludHMocmVjdDEpLnNvbWUocG9pbnQgPT4gcG9pbnRJc0luc2lkZVJlY3RhbmdsZShwb2ludCwgcmVjdDIpKSB8fFxyXG4gICAgICAgICAgICByZWN0YW5nbGVQb2ludHMocmVjdDIpLnNvbWUocG9pbnQgPT4gcG9pbnRJc0luc2lkZVJlY3RhbmdsZShwb2ludCwgcmVjdDEpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50SXNJbnNpZGVSZWN0YW5nbGUocG9pbnQsIHJlY3QpIHtcclxuICAgIGNvbnN0IHVwcGVyTGVmdFJlY3RQb2ludCA9IHVwcGVyTGVmdFBvaW50KHJlY3QpO1xyXG4gICAgY29uc3QgbG93ZXJSaWdodFJlY3RQb2ludCA9IGxvd2VyUmlnaHRQb2ludChyZWN0KTtcclxuICAgIHJldHVybiAocG9pbnQueCA+IHVwcGVyTGVmdFJlY3RQb2ludC54ICYmIHBvaW50LnggPCBsb3dlclJpZ2h0UmVjdFBvaW50LngpICYmXHJcbiAgICAgICAgICAgIChwb2ludC55ID4gdXBwZXJMZWZ0UmVjdFBvaW50LnkgJiYgcG9pbnQueSA8IGxvd2VyUmlnaHRSZWN0UG9pbnQueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHBlckxlZnRQb2ludChyZWN0KSB7XHJcbiAgICByZXR1cm4ge3g6IHJlY3QueCwgeTogcmVjdC55fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwcGVyUmlnaHRQb2ludChyZWN0KSB7XHJcbiAgICByZXR1cm4ge3g6IHJlY3QueCtyZWN0LndpZHRoLCB5OiByZWN0Lnl9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG93ZXJMZWZ0UG9pbnQocmVjdCkge1xyXG4gICAgcmV0dXJuIHt4OiByZWN0LngsIHk6IHJlY3QueStyZWN0LmhlaWdodH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb3dlclJpZ2h0UG9pbnQocmVjdCkge1xyXG4gICAgcmV0dXJuIHt4OiByZWN0LngrcmVjdC53aWR0aCwgeTogcmVjdC55K3JlY3QuaGVpZ2h0fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RhbmdsZVBvaW50cyhyZWN0YW5nbGUpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgdXBwZXJMZWZ0UG9pbnQocmVjdGFuZ2xlKSxcclxuICAgICAgICB1cHBlclJpZ2h0UG9pbnQocmVjdGFuZ2xlKSxcclxuICAgICAgICBsb3dlckxlZnRQb2ludChyZWN0YW5nbGUpLFxyXG4gICAgICAgIGxvd2VyUmlnaHRQb2ludChyZWN0YW5nbGUpXHJcbiAgICBdO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==