(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/conway.js":
/*!************************!*\
  !*** ../pkg/conway.js ***!
  \************************/
/*! exports provided: Universe, __wbg_random_3fe3216a972fe49a, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conway_bg.wasm */ \"../pkg/conway_bg.wasm\");\n/* harmony import */ var _conway_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conway_bg.js */ \"../pkg/conway_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _conway_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_3fe3216a972fe49a\", function() { return _conway_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_3fe3216a972fe49a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _conway_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/conway.js?");

/***/ }),

/***/ "../pkg/conway_bg.js":
/*!***************************!*\
  !*** ../pkg/conway_bg.js ***!
  \***************************/
/*! exports provided: Universe, __wbg_random_3fe3216a972fe49a, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_3fe3216a972fe49a\", function() { return __wbg_random_3fe3216a972fe49a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conway_bg.wasm */ \"../pkg/conway_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @returns {Universe}\n    */\n    static new(width, height) {\n        var ret = _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"](width, height);\n        return Universe.__wrap(ret);\n    }\n    /**\n    */\n    rand() {\n        _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_rand\"](this.ptr);\n    }\n    /**\n    */\n    kill() {\n        _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_kill\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get_width() {\n        var ret = _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_get_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * Set the width of the universe.\n    *\n    * Resets all cells to dead state\n    * @param {number} width\n    */\n    set_width(width) {\n        _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_width\"](this.ptr, width);\n    }\n    /**\n    * @returns {number}\n    */\n    get_height() {\n        var ret = _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_get_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * Set the height of the universe.\n    *\n    * Resets all cells to dead state\n    * @param {number} height\n    */\n    set_height(height) {\n        _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_height\"](this.ptr, height);\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        var ret = _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_cells\"](this.ptr);\n        return ret;\n    }\n    /**\n    */\n    clear_cells() {\n        _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_clear_cells\"](this.ptr);\n    }\n    /**\n    * @param {number} row\n    * @param {number} col\n    */\n    toggle_cell(row, col) {\n        _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_toggle_cell\"](this.ptr, row, col);\n    }\n    /**\n    */\n    tick() {\n        _conway_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n    }\n}\n\nconst __wbg_random_3fe3216a972fe49a = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/conway_bg.js?");

/***/ }),

/***/ "../pkg/conway_bg.wasm":
/*!*****************************!*\
  !*** ../pkg/conway_bg.wasm ***!
  \*****************************/
/*! exports provided: memory, __wbg_universe_free, universe_new, universe_rand, universe_kill, universe_get_width, universe_set_width, universe_get_height, universe_set_height, universe_cells, universe_clear_cells, universe_toggle_cell, universe_tick */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./conway_bg.js */ \"../pkg/conway_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/conway_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var conway_conway_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! conway/conway_bg */ \"../pkg/conway_bg.wasm\");\n/* harmony import */ var conway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! conway */ \"../pkg/conway.js\");\n\n\n\nconst SIZE = 96;\nconst CELL_SIZE = Math.floor(Math.min(window.innerWidth, window.innerHeight) / (SIZE * 1.25));  // px\nconst GRID_COLOR = \"#eee8d5\";\nconst DEAD_COLOR = \"#fdf6e3\";\nconst ALIVE_COLOR = \"#268bd2\";\n\n// make the universe\nconst width = SIZE;\nconst height = SIZE;\nconst universe = conway__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"].new(width, height);\n\n\n// make the canvas, and add a 1px border around each cell\nconst canvas = document.getElementById(\"conway-canvas\")\ncanvas.width = (CELL_SIZE + 1) * width + 1;;\ncanvas.height = (CELL_SIZE + 1) * height + 1;;\n\nconst ctx = canvas.getContext('2d');\n\nconst drawGrid = () => {\n    // begin drawing\n    ctx.beginPath();\n    ctx.strokeStyle = GRID_COLOR;\n    // vertical lines\n    for (let i = 0; i <= width; ++i) {\n        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n    }\n    // horizontal lines\n    for (let j = 0; j <= height; ++j) {\n        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);\n        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);\n    }\n    // draw\n    ctx.stroke();\n}\n\nconst getIndex = (row, col) => {\n    return row * width + col;\n}\n\nconst bitIsSet = (n, arr) => {\n    const byte = Math.floor(n / 8);\n    const mask = 1 << (n % 8);\n    return (arr[byte] & mask) === mask;\n}\n\nconst drawCells = () => {\n    // allocate memory\n    const cellsPtr = universe.cells();\n    const cells = new Uint8Array(conway_conway_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer, cellsPtr, (width * height) / 8);\n\n    // begin drawing\n    ctx.beginPath();\n    for (let row = 0; row < height; ++row) {\n        for (let col = 0; col < width; ++col) {\n            const idx = getIndex(row, col);\n            ctx.fillStyle = bitIsSet(idx, cells)\n                ? ALIVE_COLOR\n                : DEAD_COLOR;\n            ctx.fillRect(\n                col * (CELL_SIZE + 1) + 1,\n                row * (CELL_SIZE + 1) + 1,\n                CELL_SIZE, CELL_SIZE);\n        }\n    }\n    ctx.stroke();\n}\n\nconst render = () => {\n    drawGrid();\n    drawCells();\n}\n\nlet animationId = null;\nconst renderLoop = () => {\n    universe.tick();\n    render();\n    animationId = requestAnimationFrame(renderLoop);\n};\n\nconst playStopButton = document.getElementById('play-stop');\n\nconst play = () => {\n    playStopButton.textContent = \"STOP\";\n    renderLoop();\n}\n\nconst stop = () => {\n    playStopButton.textContent = \"PLAY\";\n    cancelAnimationFrame(animationId);\n    animationId = null;\n}\n\nconst isStopped = () => {\n    return animationId === null;\n}\n\nplayStopButton.addEventListener(\"click\", event => {\n    if (isStopped()) {\n        play();\n    } else {\n        stop();\n    }\n})\n\nconst nextButton = document.getElementById('next');\nnextButton.textContent = \"NEXT\";\n\nnextButton.addEventListener(\"click\", event => {\n    stop();\n    universe.tick();\n    render();\n})\n\ncanvas.addEventListener(\"click\", event => {\n    stop();\n\n    const boundingRect = canvas.getBoundingClientRect();\n    const scaleX = canvas.width / boundingRect.width;\n    const scaleY = canvas.height / boundingRect.height;\n\n    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;\n    const canvasTop = (event.clientY - boundingRect.top) * scaleY;\n\n    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);\n    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);\n\n    universe.toggle_cell(row, col);\n    render();\n});\n\nconst randButton = document.getElementById('rand');\nrandButton.textContent = \"RAND\";\n\nrandButton.addEventListener(\"click\", event => {\n    stop();\n    universe.rand();\n    render();\n})\n\nconst killButton = document.getElementById('kill');\nkillButton.textContent = \"KILL\";\n\nkillButton.addEventListener(\"click\", event => {\n    stop();\n    universe.kill();\n    render();\n})\n\n// initial play\nplay();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);