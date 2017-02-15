/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*Active Background
* Coding by Sun
* Email: sevenskey@163.com
* Build since: 2017-1-24
* Latest update: 2017-1-24
*
* Compatibility:
* IE9
*/

;(function() {
    class ActiveBackground {
        constructor ({
            el = 'active_background',
            sensitivity = 50, // 灵敏度。数值越小越灵敏，建议50以上
            scope = 10, // 移动距离缩小倍数。数值越小单次移动距离越大
        } = {}) {
            this.el = typeof el == 'object' ? el : document.getElementById(el);
            this.sensitivity = sensitivity;
            this.scope = scope;
            
            this.timer = null;
            this.xCache = 0;
            this.yCache = 0;
            
            this.bindEvent( this.active.bind(this) );

            console.log( 'Active-background works!' );
        }

        active ( x, y ) {
            var deltaX = (this.xCache - x) / this.scope,
                deltaY = (this.yCache - y) / this.scope;
                this.xCache = x;
                this.yCache = y;

            var oldPosition = getComputedStyle(this.el, null)
                .getPropertyValue('background-position')
                .split(' ').map( function( ele ) {
                    return parseInt( ele );
                } );

            this.el.style.backgroundPosition = (deltaX + oldPosition[0]) + 'px ' + (deltaY + oldPosition[1]) + 'px';
        }

        bindEvent ( fn ) {
            document.body.addEventListener( 'mousemove', ( event ) => {
                if ( this.timer )
                    clearTimeout( this.timer );

                this.timer = setTimeout( function() {
                    event = event || window.event;
                    var x = event.clientX, y = event.clientY;
                    fn ( x, y );
                }, this.sensitivity );
            } );
        }
    }

    module.exports = ActiveBackground;
})()


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Test = __webpack_require__( 0 );

// Launch ActiveBackground
new Test({
    el : 'active_background',
    sensitivity : 50,
    scope : 10,
});


/***/ })
/******/ ]);