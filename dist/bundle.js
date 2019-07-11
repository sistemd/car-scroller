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
    this.playerCar = PlayerCar.atDefaultPosition();
    this.enemyCars = [];
    this.decorations = [];
    this.distanceTraveled = 0;
    this.cookie = new _cookie__WEBPACK_IMPORTED_MODULE_2__["Cookie"](document);
    this.keyHandler = new KeyHandler(document);
    this.runEveryCalculated(function () {
      return _this.enemyCars.push(EnemyCar.atRandomPosition());
    }, function () {
      return 2800 / _this.playerCar.verticalSpeed;
    });
    this.runEveryCalculated(function () {
      return _this.decorations.push(_decorations__WEBPACK_IMPORTED_MODULE_3__["RoadDrawing"].atDefaultPosition(mapWidth));
    }, function () {
      return 2000 / _this.playerCar.verticalSpeed;
    });
  }

  _createClass(Game, [{
    key: "run",
    value: function run() {
      var _this2 = this;

      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["runInBackground"])(function () {
        if (!_this2.gameOver) {
          _this2.clearCanvas();

          _this2.moveAllObjects();

          _this2.destroyOffscreenObjects();

          _this2.drawEverything();

          _this2.checkGameOver();
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
        outputText = 'New high score!\n' + outputText;
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
    value: function moveAllObjects() {
      this.playerCar.updateSpeed(this.distanceTraveled);
      var relativitySystem = VerticalRelativitySystem.relativeTo(this.playerCar);
      relativitySystem.addElements(this.enemyCars);
      relativitySystem.addElements(this.decorations);
      if (this.keyHandler.keyIsDown('ArrowLeft')) this.playerCar.moveLeft(0);
      if (this.keyHandler.keyIsDown('ArrowRight')) this.playerCar.moveRight(mapWidth - _carParts__WEBPACK_IMPORTED_MODULE_0__["carWidth"]);
      relativitySystem.moveElements();
      this.distanceTraveled += this.playerCar.verticalSpeed;
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
    }
  }, {
    key: "runEveryCalculated",
    value: function runEveryCalculated(task, milliseconds) {
      var _this4 = this;

      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["runEveryCalculated"])(function () {
        if (!_this4.gameOver) task();
      }, milliseconds);
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
    document.addEventListener('keydown', function (_ref) {
      var key = _ref.key;
      return _this5.keyDownMap.set(key, true);
    });
    document.addEventListener('keyup', function (_ref2) {
      var key = _ref2.key;
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
      return 5;
    }
  }, {
    key: "maxSpeed",
    value: function maxSpeed() {
      return 7;
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
      var newVerticalSpeed = Math.abs(distanceTraveled / 5000) + PlayerCar.baseSpeed();
      this.horizontalSpeed = this.verticalSpeed = newVerticalSpeed > PlayerCar.maxSpeed() ? PlayerCar.maxSpeed() : newVerticalSpeed;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft(leftBoundary) {
      var newX = this.position.x - this.horizontalSpeed;
      this.position.x = newX < leftBoundary ? leftBoundary : newX;
    }
  }, {
    key: "moveRight",
    value: function moveRight(rightBoundary) {
      var newX = this.position.x + this.horizontalSpeed;
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
    _this7.verticalSpeed = 2;
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
    value: function relativeTo(_ref3) {
      var object = _ref3.object,
          verticalSpeed = _ref3.verticalSpeed;
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
    value: function moveElements() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var element = _step3.value;
          element.position.y += this.centerObject.verticalSpeed - element.verticalSpeed;
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
/*! exports provided: Canvas, drawCar, drawCars, drawDecorations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
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
/*! exports provided: runEveryCalculated, runEvery, runInBackground, randomElement, randomRange, addPoints, subtractPoints, pointsAreEqual, rectanglesOverlap, pointIsInsideRectangle, upperLeftPoint, upperRightPoint, lowerLeftPoint, lowerRightPoint, rectanglePoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runEveryCalculated", function() { return runEveryCalculated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runEvery", function() { return runEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInBackground", function() { return runInBackground; });
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


function runEveryCalculated(task, millisecondsGetter) {
  setTimeout(function () {
    runEveryCalculated(task, millisecondsGetter);
    task();
  }, millisecondsGetter());
}
function runEvery(task, milliseconds) {
  runEveryCalculated(task, function () {
    return milliseconds;
  });
}
function runInBackground(task) {
  runEvery(task, 0);
}
function randomElement(array) {
  return array[randomRange(0, array.length)];
} // min is included, max isn't

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhclBhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbInRpcmVXaWR0aCIsInRpcmVIZWlnaHQiLCJib25uZXRXaWR0aCIsImJvbm5ldEhlaWdodCIsInJvb2ZXaWR0aCIsInJvb2ZIZWlnaHQiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsInRpcmUiLCJ4IiwieSIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY2FyUGFydHMiLCJwb3NpdGlvbiIsImJvbm5ldCIsInJvb2YiLCJmcm9udExlZnRUaXJlIiwiYm90dG9tTGVmdFRpcmUiLCJmcm9udFJpZ2h0VGlyZSIsImJvdHRvbVJpZ2h0VGlyZSIsImRlZmluZSIsImNvb2tpZXMiLCJpbnRlcm5hbCIsIkNvb2tpZSIsImRvY3VtZW50Iiwia2V5IiwicGFpckhhc05lZWRlZEtleSIsInBhaXIiLCJwYWlyV2l0aE5lZWRlZEtleSIsImtleVZhbHVlUGFpcnMiLCJmaW5kIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjb29raWUiLCJzcGxpdCIsIm1hcCIsInBpZWNlIiwicm9hZERyYXdpbmdXaWR0aCIsInJvYWREcmF3aW5nSGVpZ2h0IiwiUm9hZERyYXdpbmciLCJtYXBXaWR0aCIsInZlcnRpY2FsU3BlZWQiLCJsYW5lQ291bnQiLCJtYXBIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJHYW1lIiwiY2FudmFzIiwiQ2FudmFzIiwicGxheWVyQ2FyIiwiUGxheWVyQ2FyIiwiYXREZWZhdWx0UG9zaXRpb24iLCJlbmVteUNhcnMiLCJkZWNvcmF0aW9ucyIsImRpc3RhbmNlVHJhdmVsZWQiLCJrZXlIYW5kbGVyIiwiS2V5SGFuZGxlciIsInJ1bkV2ZXJ5Q2FsY3VsYXRlZCIsInB1c2giLCJFbmVteUNhciIsImF0UmFuZG9tUG9zaXRpb24iLCJydW5JbkJhY2tncm91bmQiLCJnYW1lT3ZlciIsImNsZWFyQ2FudmFzIiwibW92ZUFsbE9iamVjdHMiLCJkZXN0cm95T2Zmc2NyZWVuT2JqZWN0cyIsImRyYXdFdmVyeXRoaW5nIiwiY2hlY2tHYW1lT3ZlciIsInBsYXllckNhckNyYXNoZWQiLCJzaG93U2NvcmUiLCJzb21lIiwiZW5lbXlDYXIiLCJjYXJzQ3Jhc2hlZCIsInNjb3JlIiwiY2FsY3VsYXRlU2NvcmUiLCJoaWdoU2NvcmUiLCJyZWFkSGlnaFNjb3JlIiwib3V0cHV0VGV4dCIsIndyaXRlSGlnaFNjb3JlIiwiYWxlcnQiLCJNYXRoIiwiZmxvb3IiLCJ1cGRhdGVTcGVlZCIsInJlbGF0aXZpdHlTeXN0ZW0iLCJWZXJ0aWNhbFJlbGF0aXZpdHlTeXN0ZW0iLCJyZWxhdGl2ZVRvIiwiYWRkRWxlbWVudHMiLCJrZXlJc0Rvd24iLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsIm1vdmVFbGVtZW50cyIsImFjdGl2ZU9iamVjdHMiLCJjbGVhciIsImRyYXdEZWNvcmF0aW9ucyIsImRyYXdDYXIiLCJkcmF3Q2FycyIsInRhc2siLCJtaWxsaXNlY29uZHMiLCJrZXlEb3duTWFwIiwiTWFwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldCIsImdldCIsInJhbmRvbUNvbG9yIiwicmFuZG9tRWxlbWVudCIsIkNhciIsImhvcml6b250YWxTcGVlZCIsIm5ld1ZlcnRpY2FsU3BlZWQiLCJhYnMiLCJiYXNlU3BlZWQiLCJtYXhTcGVlZCIsImxlZnRCb3VuZGFyeSIsIm5ld1giLCJyaWdodEJvdW5kYXJ5IiwicmFuZG9tUmFuZ2UiLCJvblNjcmVlbkNhcnMiLCJjYXJzIiwiY2FySXNPblNjcmVlbiIsImNhciIsImZpbHRlciIsImMxIiwiYzIiLCJwaHlzaWNhbFBhcnRzIiwicGFydDEiLCJwYXJ0MiIsInJlY3RhbmdsZXNPdmVybGFwIiwib2JqZWN0cyIsImlzQWN0aXZlIiwib2JqZWN0IiwiY2VudGVyT2JqZWN0IiwiZWxlbWVudHMiLCJlbGVtZW50QXJyYXkiLCJlbGVtZW50IiwiY29va2llSGlnaFNjb3JlS2V5IiwicmVhZCIsIndyaXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd1JlY3QiLCJwYXJ0IiwiZGVjb3JhdGlvbiIsImdhbWUiLCJydW4iLCJtaWxsaXNlY29uZHNHZXR0ZXIiLCJzZXRUaW1lb3V0IiwicnVuRXZlcnkiLCJhcnJheSIsImxlbmd0aCIsIm1pbiIsIm1heCIsInJhbmRvbSIsImFkZFBvaW50cyIsInAxIiwicDIiLCJzdWJ0cmFjdFBvaW50cyIsInBvaW50c0FyZUVxdWFsIiwicmVjdDEiLCJyZWN0MiIsInJlY3RhbmdsZVBvaW50cyIsInBvaW50IiwicG9pbnRJc0luc2lkZVJlY3RhbmdsZSIsInVwcGVyTGVmdFJlY3RQb2ludCIsInVwcGVyTGVmdFBvaW50IiwibG93ZXJSaWdodFJlY3RQb2ludCIsImxvd2VyUmlnaHRQb2ludCIsInVwcGVyUmlnaHRQb2ludCIsImxvd2VyTGVmdFBvaW50IiwicmVjdGFuZ2xlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUF3QmhLLElBQXhCLEVBQThCO0FBQ2pDLFNBQU87QUFBQ0YsS0FBQyxFQUFFRSxJQUFJLENBQUNGLENBQVQ7QUFBWUMsS0FBQyxFQUFFQyxJQUFJLENBQUNELENBQUwsR0FBT0MsSUFBSSxDQUFDRTtBQUEzQixHQUFQO0FBQ0g7QUFFTSxTQUFTNEosZUFBVCxDQUF5QjlKLElBQXpCLEVBQStCO0FBQ2xDLFNBQU87QUFBQ0YsS0FBQyxFQUFFRSxJQUFJLENBQUNGLENBQUwsR0FBT0UsSUFBSSxDQUFDQyxLQUFoQjtBQUF1QkYsS0FBQyxFQUFFQyxJQUFJLENBQUNELENBQUwsR0FBT0MsSUFBSSxDQUFDRTtBQUF0QyxHQUFQO0FBQ0g7QUFFTSxTQUFTc0osZUFBVCxDQUF5QlMsU0FBekIsRUFBb0M7QUFDdkMsU0FBTyxDQUNITCxjQUFjLENBQUNLLFNBQUQsQ0FEWCxFQUVIRixlQUFlLENBQUNFLFNBQUQsQ0FGWixFQUdIRCxjQUFjLENBQUNDLFNBQUQsQ0FIWCxFQUlISCxlQUFlLENBQUNHLFNBQUQsQ0FKWixDQUFQO0FBTUgsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCB0aXJlV2lkdGggPSA3O1xyXG5leHBvcnQgY29uc3QgdGlyZUhlaWdodCA9IDE1O1xyXG5leHBvcnQgY29uc3QgYm9ubmV0V2lkdGggPSAzMDtcclxuZXhwb3J0IGNvbnN0IGJvbm5ldEhlaWdodCA9IDIwO1xyXG5leHBvcnQgY29uc3Qgcm9vZldpZHRoID0gYm9ubmV0V2lkdGgrdGlyZVdpZHRoKjI7XHJcbmV4cG9ydCBjb25zdCByb29mSGVpZ2h0ID0gYm9ubmV0SGVpZ2h0KzUwO1xyXG5leHBvcnQgY29uc3QgY2FyV2lkdGggPSByb29mV2lkdGgrdGlyZVdpZHRoKjJcclxuZXhwb3J0IGNvbnN0IGNhckhlaWdodCA9IHJvb2ZIZWlnaHQrYm9ubmV0SGVpZ2h0O1xyXG5cclxuZnVuY3Rpb24gdGlyZSh7eCwgeX0pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVjdDoge1xyXG4gICAgICAgICAgICB4LCB5LCBcclxuICAgICAgICAgICAgd2lkdGg6IHRpcmVXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aXJlSGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJ1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhclBhcnRzKHBvc2l0aW9uLCBjb2xvcikge1xyXG4gICAgY29uc3QgYm9ubmV0ID0ge1xyXG4gICAgICAgIHJlY3Q6IHtcclxuICAgICAgICAgICAgeDogcG9zaXRpb24ueCt0aXJlV2lkdGgqMiwgXHJcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uLnksIFxyXG4gICAgICAgICAgICB3aWR0aDogYm9ubmV0V2lkdGgsIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJvbm5ldEhlaWdodCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgcm9vZiA9IHtcclxuICAgICAgICByZWN0OiB7XHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLngrdGlyZVdpZHRoLCBcclxuICAgICAgICAgICAgeTogYm9ubmV0LnJlY3QueStib25uZXRIZWlnaHQsIFxyXG4gICAgICAgICAgICB3aWR0aDogcm9vZldpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHJvb2ZIZWlnaHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZnJvbnRMZWZ0VGlyZSA9IHRpcmUoe1xyXG4gICAgICAgIHg6IHBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogcm9vZi5yZWN0LnkrNVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBib3R0b21MZWZ0VGlyZSA9IHRpcmUoe1xyXG4gICAgICAgIHg6IHBvc2l0aW9uLngsIFxyXG4gICAgICAgIHk6IHJvb2YucmVjdC55K3Jvb2ZIZWlnaHQtMjBcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZnJvbnRSaWdodFRpcmUgPSB0aXJlKHtcclxuICAgICAgICB4OiByb29mLnJlY3QueCtyb29mV2lkdGgsIFxyXG4gICAgICAgIHk6IHJvb2YucmVjdC55KzVcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYm90dG9tUmlnaHRUaXJlID0gdGlyZSh7XHJcbiAgICAgICAgeDogcm9vZi5yZWN0Lngrcm9vZldpZHRoLCBcclxuICAgICAgICB5OiByb29mLnJlY3QueStyb29mSGVpZ2h0LTIwXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGJvbm5ldCwgcm9vZiwgZnJvbnRMZWZ0VGlyZSwgYm90dG9tTGVmdFRpcmUsIGZyb250UmlnaHRUaXJlLCBib3R0b21SaWdodFRpcmVcclxuICAgIF07XHJcbn07IiwiZGVmaW5lKCgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSB7XHJcbiAgICAgICAgaW50ZXJuYWw6IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvb2tpZXMuQ29va2llID0gY2xhc3Mge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlYWQoa2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhaXJIYXNOZWVkZWRLZXkgPSBwYWlyID0+IHBhaXIua2V5ID09PSBrZXk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhaXJXaXRoTmVlZGVkS2V5ID0gdGhpcy5rZXlWYWx1ZVBhaXJzKCkuZmluZChwYWlySGFzTmVlZGVkS2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhaXJXaXRoTmVlZGVkS2V5ID8gcGFpcldpdGhOZWVkZWRLZXkudmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBrZXlWYWx1ZVBhaXJzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykubWFwKHBpZWNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHBpZWNlLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2tleSwgdmFsdWV9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdyaXRlKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5jb29raWUgPSBgJHtrZXl9PSR7dmFsdWV9YDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBjb29raWVzO1xyXG59KTsiLCJcclxuY29uc3Qgcm9hZERyYXdpbmdXaWR0aCA9IDMwO1xyXG5jb25zdCByb2FkRHJhd2luZ0hlaWdodCA9IDEyMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb2FkRHJhd2luZyB7XHJcbiAgICBzdGF0aWMgYXREZWZhdWx0UG9zaXRpb24obWFwV2lkdGgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJvYWREcmF3aW5nKHtcclxuICAgICAgICAgICAgeDogbWFwV2lkdGgvMi1yb2FkRHJhd2luZ1dpZHRoLzIsXHJcbiAgICAgICAgICAgIHk6IC1yb2FkRHJhd2luZ0hlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAnZ3JleSc7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNwZWVkID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVjdCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgd2lkdGg6IHJvYWREcmF3aW5nV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogcm9hZERyYXdpbmdIZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQge2NhclBhcnRzLCBjYXJXaWR0aCwgY2FySGVpZ2h0fSBmcm9tICcuL2NhclBhcnRzJztcclxuaW1wb3J0IHtyYW5kb21SYW5nZSwgcmFuZG9tRWxlbWVudCwgcmVjdGFuZ2xlc092ZXJsYXAsIHJ1bkV2ZXJ5Q2FsY3VsYXRlZCwgcnVuSW5CYWNrZ3JvdW5kfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHtDb29raWV9IGZyb20gJy4vY29va2llJztcclxuaW1wb3J0IHtSb2FkRHJhd2luZ30gZnJvbSAnLi9kZWNvcmF0aW9ucyc7XHJcbmltcG9ydCB7Q2FudmFzLCBkcmF3Q2FyLCBkcmF3Q2FycywgZHJhd0RlY29yYXRpb25zfSBmcm9tICcuL2dyYXBoaWNzJztcclxuXHJcbmNvbnN0IGxhbmVDb3VudCA9IDY7XHJcbmNvbnN0IG1hcFdpZHRoID0gbGFuZUNvdW50KmNhcldpZHRoO1xyXG5jb25zdCBtYXBIZWlnaHQgPSBjYXJIZWlnaHQqNjtcclxuY29uc3QgYmFja2dyb3VuZENvbG9yID0gJyNFNkU2RjUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoZG9jdW1lbnQpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gbWFwV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gbWFwSGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckNhciA9IFBsYXllckNhci5hdERlZmF1bHRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlDYXJzID0gW107XHJcbiAgICAgICAgdGhpcy5kZWNvcmF0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb29raWUgPSBuZXcgQ29va2llKGRvY3VtZW50KTtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXIgPSBuZXcgS2V5SGFuZGxlcihkb2N1bWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMucnVuRXZlcnlDYWxjdWxhdGVkKFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmVuZW15Q2Fycy5wdXNoKEVuZW15Q2FyLmF0UmFuZG9tUG9zaXRpb24oKSksIFxyXG4gICAgICAgICAgICAoKSA9PiAyODAwL3RoaXMucGxheWVyQ2FyLnZlcnRpY2FsU3BlZWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucnVuRXZlcnlDYWxjdWxhdGVkKFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmRlY29yYXRpb25zLnB1c2goUm9hZERyYXdpbmcuYXREZWZhdWx0UG9zaXRpb24obWFwV2lkdGgpKSxcclxuICAgICAgICAgICAgKCkgPT4gMjAwMC90aGlzLnBsYXllckNhci52ZXJ0aWNhbFNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgcnVuSW5CYWNrZ3JvdW5kKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVBbGxPYmplY3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lPZmZzY3JlZW5PYmplY3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdFdmVyeXRoaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrR2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ2FyQ3Jhc2hlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTY29yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJDYXJDcmFzaGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15Q2Fycy5zb21lKGVuZW15Q2FyID0+IGNhcnNDcmFzaGVkKGVuZW15Q2FyLCB0aGlzLnBsYXllckNhcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTY29yZSgpIHtcclxuICAgICAgICBjb25zdCBzY29yZSA9IHRoaXMuY2FsY3VsYXRlU2NvcmUoKTtcclxuICAgICAgICBjb25zdCBoaWdoU2NvcmUgPSByZWFkSGlnaFNjb3JlKHRoaXMuY29va2llKTtcclxuICAgICAgICBsZXQgb3V0cHV0VGV4dCA9IGBGaW5hbCBzY29yZTogJHtzY29yZX0uYDtcclxuICAgICAgICBpZiAoIWhpZ2hTY29yZSB8fCBzY29yZSA+IGhpZ2hTY29yZSkge1xyXG4gICAgICAgICAgICB3cml0ZUhpZ2hTY29yZSh0aGlzLmNvb2tpZSwgc2NvcmUpO1xyXG4gICAgICAgICAgICBvdXRwdXRUZXh0ID0gJ05ldyBoaWdoIHNjb3JlIVxcbicrb3V0cHV0VGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlcnQob3V0cHV0VGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlU2NvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5kaXN0YW5jZVRyYXZlbGVkLzFlMyk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUFsbE9iamVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDYXIudXBkYXRlU3BlZWQodGhpcy5kaXN0YW5jZVRyYXZlbGVkKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVsYXRpdml0eVN5c3RlbSA9IFZlcnRpY2FsUmVsYXRpdml0eVN5c3RlbS5yZWxhdGl2ZVRvKHRoaXMucGxheWVyQ2FyKTtcclxuICAgICAgICByZWxhdGl2aXR5U3lzdGVtLmFkZEVsZW1lbnRzKHRoaXMuZW5lbXlDYXJzKTtcclxuICAgICAgICByZWxhdGl2aXR5U3lzdGVtLmFkZEVsZW1lbnRzKHRoaXMuZGVjb3JhdGlvbnMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmtleUhhbmRsZXIua2V5SXNEb3duKCdBcnJvd0xlZnQnKSlcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDYXIubW92ZUxlZnQoMCk7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5SGFuZGxlci5rZXlJc0Rvd24oJ0Fycm93UmlnaHQnKSlcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDYXIubW92ZVJpZ2h0KG1hcFdpZHRoLWNhcldpZHRoKTtcclxuXHJcbiAgICAgICAgcmVsYXRpdml0eVN5c3RlbS5tb3ZlRWxlbWVudHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZVRyYXZlbGVkICs9IHRoaXMucGxheWVyQ2FyLnZlcnRpY2FsU3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveU9mZnNjcmVlbk9iamVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy5lbmVteUNhcnMgPSBhY3RpdmVPYmplY3RzKHRoaXMuZW5lbXlDYXJzKTtcclxuICAgICAgICB0aGlzLmRlY29yYXRpb25zID0gYWN0aXZlT2JqZWN0cyh0aGlzLmRlY29yYXRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhcihiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdFdmVyeXRoaW5nKCkge1xyXG4gICAgICAgIGRyYXdEZWNvcmF0aW9ucyh0aGlzLmNhbnZhcywgdGhpcy5kZWNvcmF0aW9ucyk7XHJcbiAgICAgICAgZHJhd0Nhcih0aGlzLmNhbnZhcywgdGhpcy5wbGF5ZXJDYXIpO1xyXG4gICAgICAgIGRyYXdDYXJzKHRoaXMuY2FudmFzLCB0aGlzLmVuZW15Q2Fycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuRXZlcnlDYWxjdWxhdGVkKHRhc2ssIG1pbGxpc2Vjb25kcykge1xyXG4gICAgICAgIHJ1bkV2ZXJ5Q2FsY3VsYXRlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lT3ZlcilcclxuICAgICAgICAgICAgICAgIHRhc2soKTtcclxuICAgICAgICB9LCBtaWxsaXNlY29uZHMpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEtleUhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQpIHtcclxuICAgICAgICB0aGlzLmtleURvd25NYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICh7a2V5fSkgPT4gdGhpcy5rZXlEb3duTWFwLnNldChrZXksIHRydWUpKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICh7a2V5fSkgPT4gdGhpcy5rZXlEb3duTWFwLnNldChrZXksIGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGtleUlzRG93bihrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlEb3duTWFwLmdldChrZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcclxuICAgIHJldHVybiByYW5kb21FbGVtZW50KFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAneWVsbG93JywgJ3B1cnBsZScsICdvcmFuZ2UnLCAnbWFnZW50YScsICdhcXVhJywgJ21hcm9vbiddKTtcclxufVxyXG5cclxuY2xhc3MgQ2FyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHJhbmRvbUNvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHBoeXNpY2FsUGFydHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhclBhcnRzKHRoaXMucG9zaXRpb24sIHRoaXMuY29sb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQbGF5ZXJDYXIgZXh0ZW5kcyBDYXIge1xyXG4gICAgc3RhdGljIGF0RGVmYXVsdFBvc2l0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQbGF5ZXJDYXIoe1xyXG4gICAgICAgICAgICB4OiBtYXBXaWR0aC8yLWNhcldpZHRoLzIsXHJcbiAgICAgICAgICAgIHk6IG1hcEhlaWdodC1jYXJIZWlnaHQtNVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiYXNlU3BlZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIDU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1heFNwZWVkKCkge1xyXG4gICAgICAgIHJldHVybiA3O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFNwZWVkID0gdGhpcy52ZXJ0aWNhbFNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNwZWVkKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNwZWVkKGRpc3RhbmNlVHJhdmVsZWQpIHtcclxuICAgICAgICBjb25zdCBuZXdWZXJ0aWNhbFNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2VUcmF2ZWxlZC81MDAwKStQbGF5ZXJDYXIuYmFzZVNwZWVkKCk7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsU3BlZWQgPSB0aGlzLnZlcnRpY2FsU3BlZWQgPSBcclxuICAgICAgICAgICAgKG5ld1ZlcnRpY2FsU3BlZWQgPiBQbGF5ZXJDYXIubWF4U3BlZWQoKSkgPyBQbGF5ZXJDYXIubWF4U3BlZWQoKSA6IG5ld1ZlcnRpY2FsU3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUxlZnQobGVmdEJvdW5kYXJ5KSB7XHJcbiAgICAgICAgY29uc3QgbmV3WCA9IHRoaXMucG9zaXRpb24ueC10aGlzLmhvcml6b250YWxTcGVlZDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAobmV3WCA8IGxlZnRCb3VuZGFyeSkgPyBsZWZ0Qm91bmRhcnkgOiBuZXdYO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVSaWdodChyaWdodEJvdW5kYXJ5KSB7XHJcbiAgICAgICAgY29uc3QgbmV3WCA9IHRoaXMucG9zaXRpb24ueCt0aGlzLmhvcml6b250YWxTcGVlZDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAobmV3WCA+IHJpZ2h0Qm91bmRhcnkpID8gcmlnaHRCb3VuZGFyeSA6IG5ld1g7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEVuZW15Q2FyIGV4dGVuZHMgQ2FyIHtcclxuICAgIHN0YXRpYyBhdFJhbmRvbVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlDYXIoe1xyXG4gICAgICAgICAgICB4OiBjYW52YXMud2lkdGgvbGFuZUNvdW50KnJhbmRvbVJhbmdlKDAsIGxhbmVDb3VudCksIFxyXG4gICAgICAgICAgICB5OiAtY2FySGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNwZWVkID0gMjsgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwaHlzaWNhbFBhcnRzKCkge1xyXG4gICAgICAgIHJldHVybiBjYXJQYXJ0cyh0aGlzLnBvc2l0aW9uLCB0aGlzLmNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25TY3JlZW5DYXJzKGNhcnMpIHtcclxuICAgIGNvbnN0IGNhcklzT25TY3JlZW4gPSAoY2FyKSA9PiBjYXIucG9zaXRpb24ueSA8IC1tYXBIZWlnaHQ7XHJcbiAgICByZXR1cm4gY2Fycy5maWx0ZXIoY2FySXNPblNjcmVlbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhcnNDcmFzaGVkKGMxLCBjMikge1xyXG4gICAgZm9yIChjb25zdCBwYXJ0MSBvZiBjMS5waHlzaWNhbFBhcnRzKCkpXHJcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0MiBvZiBjMi5waHlzaWNhbFBhcnRzKCkpXHJcbiAgICAgICAgICAgIGlmIChyZWN0YW5nbGVzT3ZlcmxhcChwYXJ0MS5yZWN0LCBwYXJ0Mi5yZWN0KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhY3RpdmVPYmplY3RzKG9iamVjdHMpIHtcclxuICAgIGNvbnN0IGlzQWN0aXZlID0gKG9iamVjdCkgPT4gb2JqZWN0LnBvc2l0aW9uLnkgPCBtYXBIZWlnaHQ7XHJcbiAgICByZXR1cm4gb2JqZWN0cy5maWx0ZXIoaXNBY3RpdmUpO1xyXG59XHJcblxyXG5jbGFzcyBWZXJ0aWNhbFJlbGF0aXZpdHlTeXN0ZW0ge1xyXG4gICAgc3RhdGljIHJlbGF0aXZlVG8oe29iamVjdCwgdmVydGljYWxTcGVlZH0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVsYXRpdml0eVN5c3RlbSh7b2JqZWN0LCB2ZXJ0aWNhbFNwZWVkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2VudGVyT2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJPYmplY3QgPSBjZW50ZXJPYmplY3Q7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEVsZW1lbnRzKGVsZW1lbnRBcnJheSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaCguLi5lbGVtZW50QXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVFbGVtZW50cygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGhpcy5lbGVtZW50cylcclxuICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbi55ICs9IHRoaXMuY2VudGVyT2JqZWN0LnZlcnRpY2FsU3BlZWQtZWxlbWVudC52ZXJ0aWNhbFNwZWVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjb29raWVIaWdoU2NvcmVLZXkgPSAnaGlnaHNjb3JlJztcclxuXHJcbmZ1bmN0aW9uIHJlYWRIaWdoU2NvcmUoY29va2llKSB7XHJcbiAgICByZXR1cm4gY29va2llLnJlYWQoY29va2llSGlnaFNjb3JlS2V5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JpdGVIaWdoU2NvcmUoY29va2llLCBoaWdoU2NvcmUpIHtcclxuICAgIGNvb2tpZS53cml0ZShjb29raWVIaWdoU2NvcmVLZXksIGhpZ2hTY29yZSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRyYXdSZWN0KHt4LCB5LCB3aWR0aCwgaGVpZ2h0fSwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKGJhY2tncm91bmRDb2xvcikge1xyXG4gICAgICAgIHRoaXMuZHJhd1JlY3Qoe1xyXG4gICAgICAgICAgICB4OiAwLCBcclxuICAgICAgICAgICAgeTogMCwgXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLCBcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodFxyXG4gICAgICAgIH0sIGJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdmFsdWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0NhcihjYW52YXMsIGNhcikge1xyXG4gICAgZm9yIChjb25zdCBwYXJ0IG9mIGNhci5waHlzaWNhbFBhcnRzKCkpXHJcbiAgICAgICAgY2FudmFzLmRyYXdSZWN0KHBhcnQucmVjdCwgcGFydC5jb2xvcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q2FycyhjYW52YXMsIGNhcnMpIHtcclxuICAgIGZvciAoY29uc3QgY2FyIG9mIGNhcnMpXHJcbiAgICAgICAgZHJhd0NhcihjYW52YXMsIGNhcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3RGVjb3JhdGlvbnMoY2FudmFzLCBkZWNvcmF0aW9ucykge1xyXG4gICAgZm9yIChjb25zdCBkZWNvcmF0aW9uIG9mIGRlY29yYXRpb25zKVxyXG4gICAgICAgIGNhbnZhcy5kcmF3UmVjdChkZWNvcmF0aW9uLnJlY3QsIGRlY29yYXRpb24uY29sb3IpO1xyXG59XHJcbiIsImltcG9ydCB7R2FtZX0gZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShkb2N1bWVudCk7XHJcbmdhbWUucnVuKCk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBydW5FdmVyeUNhbGN1bGF0ZWQodGFzaywgbWlsbGlzZWNvbmRzR2V0dGVyKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBydW5FdmVyeUNhbGN1bGF0ZWQodGFzaywgbWlsbGlzZWNvbmRzR2V0dGVyKTtcclxuICAgICAgICB0YXNrKCk7XHJcbiAgICB9LCBtaWxsaXNlY29uZHNHZXR0ZXIoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBydW5FdmVyeSh0YXNrLCBtaWxsaXNlY29uZHMpe1xyXG4gICAgcnVuRXZlcnlDYWxjdWxhdGVkKHRhc2ssICgpID0+IG1pbGxpc2Vjb25kcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBydW5JbkJhY2tncm91bmQodGFzaykge1xyXG4gICAgcnVuRXZlcnkodGFzaywgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21FbGVtZW50KGFycmF5KSB7XHJcbiAgICByZXR1cm4gYXJyYXlbcmFuZG9tUmFuZ2UoMCwgYXJyYXkubGVuZ3RoKV07XHJcbn0gXHJcblxyXG4vLyBtaW4gaXMgaW5jbHVkZWQsIG1heCBpc24ndFxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4LW1pbikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRzKHAxLCBwMikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBwMS54K3AyLngsXHJcbiAgICAgICAgeTogcDEueStwMi55XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3RQb2ludHMocDEsIHAyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IHAxLngtcDIueCxcclxuICAgICAgICB5OiBwMS55LXAyLnlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2ludHNBcmVFcXVhbChwMSwgcDIpIHtcclxuICAgIHJldHVybiBwMS54ID09PSBwMi54ICYmIHAxLnkgPT09IHAyLnk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVzT3ZlcmxhcChyZWN0MSwgcmVjdDIpIHtcclxuICAgIHJldHVybiByZWN0YW5nbGVQb2ludHMocmVjdDEpLnNvbWUocG9pbnQgPT4gcG9pbnRJc0luc2lkZVJlY3RhbmdsZShwb2ludCwgcmVjdDIpKSB8fFxyXG4gICAgICAgICAgICByZWN0YW5nbGVQb2ludHMocmVjdDIpLnNvbWUocG9pbnQgPT4gcG9pbnRJc0luc2lkZVJlY3RhbmdsZShwb2ludCwgcmVjdDEpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50SXNJbnNpZGVSZWN0YW5nbGUocG9pbnQsIHJlY3QpIHtcclxuICAgIGNvbnN0IHVwcGVyTGVmdFJlY3RQb2ludCA9IHVwcGVyTGVmdFBvaW50KHJlY3QpO1xyXG4gICAgY29uc3QgbG93ZXJSaWdodFJlY3RQb2ludCA9IGxvd2VyUmlnaHRQb2ludChyZWN0KTtcclxuICAgIHJldHVybiAocG9pbnQueCA+IHVwcGVyTGVmdFJlY3RQb2ludC54ICYmIHBvaW50LnggPCBsb3dlclJpZ2h0UmVjdFBvaW50LngpICYmXHJcbiAgICAgICAgICAgIChwb2ludC55ID4gdXBwZXJMZWZ0UmVjdFBvaW50LnkgJiYgcG9pbnQueSA8IGxvd2VyUmlnaHRSZWN0UG9pbnQueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHBlckxlZnRQb2ludChyZWN0KSB7XHJcbiAgICByZXR1cm4ge3g6IHJlY3QueCwgeTogcmVjdC55fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwcGVyUmlnaHRQb2ludChyZWN0KSB7XHJcbiAgICByZXR1cm4ge3g6IHJlY3QueCtyZWN0LndpZHRoLCB5OiByZWN0Lnl9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG93ZXJMZWZ0UG9pbnQocmVjdCkge1xyXG4gICAgcmV0dXJuIHt4OiByZWN0LngsIHk6IHJlY3QueStyZWN0LmhlaWdodH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb3dlclJpZ2h0UG9pbnQocmVjdCkge1xyXG4gICAgcmV0dXJuIHt4OiByZWN0LngrcmVjdC53aWR0aCwgeTogcmVjdC55K3JlY3QuaGVpZ2h0fTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RhbmdsZVBvaW50cyhyZWN0YW5nbGUpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgdXBwZXJMZWZ0UG9pbnQocmVjdGFuZ2xlKSxcclxuICAgICAgICB1cHBlclJpZ2h0UG9pbnQocmVjdGFuZ2xlKSxcclxuICAgICAgICBsb3dlckxlZnRQb2ludChyZWN0YW5nbGUpLFxyXG4gICAgICAgIGxvd2VyUmlnaHRQb2ludChyZWN0YW5nbGUpXHJcbiAgICBdO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==