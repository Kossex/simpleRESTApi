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

/***/ "../modules/DeleteAndDeleteAll.js":
/*!****************************************!*\
  !*** ../modules/DeleteAndDeleteAll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DeleteAndDeleteAll = () =>{\r\n    const BtnDelete = document.querySelector('.btnDelete');\r\n    const inputDelete = document.querySelector('.InputDelete');\r\n    const BtnDeleteAll = document.querySelector('.BtnDeleteAll');\r\n    var valueID2;\r\n    inputDelete.addEventListener('input',()=>{\r\n    valueID2 = inputDelete.value;\r\n    });\r\n    const DeleteData = async (url) =>{\r\n        const responce = await fetch(url,{\r\n             method:'DELETE',\r\n             body:JSON.stringify(),\r\n             headers:{\r\n                 'Content-Type':'application/json'\r\n             }\r\n         }).then(response => response.json());\r\n     }\r\n     BtnDelete.addEventListener('click',(e)=>{\r\n        e.preventDefault();\r\n        if (valueID2 === undefined){\r\n            inputDelete.classList.add('mistake');\r\n            confirm('Please enter a value');\r\n        }\r\n        else{\r\n        fetch(`http://localhost:3000/posts`,{\r\n            method:'GET',\r\n            headers:{\r\n                'Content-Type':'application/json'\r\n                }\r\n                }).then(response => response.json()).then(data =>{\r\n                    console.log(data.length);\r\n                    let i = data.length;\r\n                    console.log(i);\r\n                    if (valueID2>i){\r\n                        inputDelete.classList.add('mistake');\r\n                        confirm('There is no such coin in the database');   \r\n                    }\r\n                    else{\r\n                        inputDelete.classList.remove('mistake');\r\n                        DeleteData(`http://localhost:3000/posts/${valueID2}`)\r\n                        confirm(`${valueID2} has been deleted`);\r\n                    }\r\n                }\r\n                ).catch(err => console.log(err));\r\n        }\r\n    });\r\n    //delete all coins\r\n    BtnDeleteAll.addEventListener('click',(e)=>{\r\n        e.preventDefault();\r\n        fetch(`http://localhost:3000/posts`,{\r\n            method:'GET',\r\n            headers:{\r\n                'Content-Type':'application/json'\r\n                }\r\n                }).then(response => response.json()).then(data =>{\r\n                    console.log(data.length);\r\n                    for (var i = 0; i < data.length; i++){\r\n                        DeleteData(`http://localhost:3000/posts/${data[i].id}`)\r\n                    }\r\n                    confirm(`All coins have been deleted`);\r\n                }\r\n                ).catch(err => console.log(err));\r\n            });\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteAndDeleteAll);\n\n//# sourceURL=webpack://webpack-demo/../modules/DeleteAndDeleteAll.js?");

/***/ }),

/***/ "../modules/GetAndPost.js":
/*!********************************!*\
  !*** ../modules/GetAndPost.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst GetAndPost = () =>\r\n{\r\n    const btn = document.querySelector('button');\r\n    let output = document.querySelector('.output');\r\n    let input = document.querySelector('.input');\r\n    const btnPOST = document.querySelector('.btnPOST');\r\n    var cryptocurrency={\r\n        name:'',\r\n        price:'',\r\n        };\r\n        var value;\r\n        input.addEventListener('input',()=>{\r\n        value = input.value;\r\n       });\r\n       const postData = async (url,data) =>{\r\n        const responce = await fetch(url,{\r\n            method:'POST',\r\n            body:JSON.stringify(data),\r\n            headers:{\r\n                'Content-Type':'application/json'\r\n            }\r\n        }).then(response => response.json());\r\n       // console.log(responce);\r\n    }\r\n    function getAndPostData(url){\r\n        let responce = fetch(url)\r\n        .then(response => response.json()).then(data =>{\r\n             console.log(data);\r\n             console.log(value);\r\n             if (value === undefined){\r\n                 confirm('Please enter a value');\r\n             }\r\n             else{\r\n             value=value.toUpperCase();\r\n             console.log(data.rates[value]);\r\n             if (data.rates[value] === undefined){\r\n                 output.classList.add('mistake');\r\n                 output.innerHTML += `<b>${value} is not a valid currency</b>`;\r\n             }\r\n             else{\r\n             output.classList.remove('mistake');\r\n             output.innerHTML += `<b> Course of ${value} = ${data.rates[value]}$</b>`;\r\n             btnPOST.onclick = (e)=>{\r\n             e.preventDefault();\r\n             cryptocurrency.name = value;\r\n             cryptocurrency.price = data.rates[value];\r\n             console.log(cryptocurrency);\r\n             let InfoOfCoin = output.textContent;\r\n             console.log(InfoOfCoin);\r\n             if (cryptocurrency===undefined)\r\n             {\r\n                 confirm(\"Please enter a value\");\r\n             }\r\n             postData('http://localhost:3000/posts',cryptocurrency);\r\n             }\r\n             }\r\n        }\r\n        }   \r\n         ).catch(err => console.log(err));\r\n          } \r\n     \r\n         btn.addEventListener('click',(e)=>{\r\n             e.preventDefault();\r\n             output.innerHTML='';\r\n             getAndPostData('http://api.coinlayer.com/api/live?access_key=3c9ad27fc653cc0ca8f4da2654acdf85');\r\n         });\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetAndPost);\n\n//# sourceURL=webpack://webpack-demo/../modules/GetAndPost.js?");

/***/ }),

/***/ "../modules/GetInfo.js":
/*!*****************************!*\
  !*** ../modules/GetInfo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst GetInfo = () =>\r\n{\r\n    const inputInfo = document.querySelector('.inputInfo');\r\n    const BtnGetInfo = document.querySelector('.GetInfo');\r\n    const InfoOutput = document.querySelector('.InfoOutput');\r\n    var valueInfo;\r\n    inputInfo.addEventListener('input',()=>{\r\n        valueInfo = inputInfo.value;\r\n        valueInfo = valueInfo.toUpperCase();\r\n    }\r\n    );\r\n    BtnGetInfo.addEventListener('click',(e)=>{\r\n        e.preventDefault();\r\n      fetch(`https://min-api.cryptocompare.com/data/top/pairs?fsym=${valueInfo}&limit=20&api_key=d562b3f990f1a116efcecd5b691a35df3abe71a1acdb443d110ec44079f8c690`,{\r\n        method:'GET',\r\n        headers:{\r\n            'Content-Type':'application/json'\r\n            }\r\n            }).then(response => response.json()).then(data =>{\r\n                console.log(data);\r\n                console.log(valueInfo);\r\n                if (valueInfo === undefined){\r\n                    inputInfo.classList.add('mistake');\r\n                    confirm('Please enter a value');\r\n                }\r\n                else{\r\n                valueInfo=valueInfo.toUpperCase();\r\n                InfoOutput.innerHTML='';\r\n               // console.log(data.Data[valueInfo]);\r\n                if (data.Response === \"Error\"){\r\n                    inputInfo.classList.add('mistake');\r\n                    confirm(`${valueInfo} is not a valid currency`);\r\n                }\r\n                else{\r\n                    inputInfo.classList.remove('mistake');\r\n                    InfoOutput.innerHTML += `<table>\r\n                    <tr>\r\n                    <th>Currency</th>\r\n                    <th>${valueInfo}</th>\r\n                    <th>Amount of currency spent</th>\r\n                    <th>Price 1 ${valueInfo} in currency</th>\r\n                    </tr></table>`;\r\n                    for (var i = 0; i < data.Data.length; i++){\r\n                        InfoOutput.innerHTML += `<table>\r\n                        <tr>\r\n                        <td>${data.Data[i].toSymbol}</td>\r\n                        <td>${data.Data[i].volume24h}</td>\r\n                        <td>${data.Data[i].volume24hTo}</td>\r\n                        <td>${data.Data[i].price}</td>\r\n                        </tr>\r\n                        </table>`;\r\n                    }\r\n               console.log(data.Data[0].toSymbol);\r\n\r\n                }\r\n                }\r\n            }\r\n            ).catch(err => console.log(err));\r\n    }\r\n    );\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetInfo);\n\n//# sourceURL=webpack://webpack-demo/../modules/GetInfo.js?");

/***/ }),

/***/ "../modules/put.js":
/*!*************************!*\
  !*** ../modules/put.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst put = ()=>{\r\n    const btnPUT = document.querySelector('.btnPUT'); \r\n    const input1 = document.querySelector('.inputPUT');\r\n    const inputID = document.querySelector('.inputID');\r\n    var valueID;\r\n    inputID.addEventListener('input',()=>{\r\n    valueID = inputID.value;\r\n}\r\n);\r\nconst putData = async (url,data) =>{\r\n    const responce = await fetch(url,{\r\n         method:'PUT',\r\n         body:JSON.stringify(data),\r\n         headers:{\r\n             'Content-Type':'application/json'\r\n         }\r\n     }).then(response => response.json());\r\n }\r\n btnPUT.addEventListener('click',(e)=>{\r\n    e.preventDefault();\r\n    let value1 = input1.value;\r\n    if (value1 === ''){\r\n        input1.classList.add('mistake');\r\n        confirm('Please enter a value');\r\n    }\r\n    value1 = value1.toUpperCase();\r\n    if (value1.match(/[!@#$%*,<>()]/)){\r\n        input1.classList.add('mistake');\r\n        confirm('Please enter a value');\r\n    }\r\n    else{\r\n    input1.classList.remove('mistake');\r\n    let cryptocurrency1 = {\r\n        name: value1.replace(/[^A-Z]/g,''),\r\n        price:+(value1.replace(/[A-Z]/g,\"\").slice(1)),\r\n    }\r\n\r\n    console.log(cryptocurrency1);\r\n// how many coins are in the database\r\n    fetch('http://localhost:3000/posts',{\r\n        method:'GET',\r\n        headers:{\r\n            'Content-Type':'application/json'\r\n        }\r\n    }).then(response => response.json()).then(data =>{\r\n        console.log(data);\r\n        console.log(data.length);\r\n        let i = data.length;\r\n        if (valueID>i){\r\n            input1.classList.add('mistake');\r\n            confirm('There is no such coin in the database');   \r\n        }\r\n        else{\r\n   putData(`http://localhost:3000/posts/${valueID}`,cryptocurrency1);\r\n        }\r\n});\r\n}\r\n});\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (put);\n\n//# sourceURL=webpack://webpack-demo/../modules/put.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_put_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/put.js */ \"../modules/put.js\");\n/* harmony import */ var _modules_GetAndPost_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/GetAndPost.js */ \"../modules/GetAndPost.js\");\n/* harmony import */ var _modules_GetInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/GetInfo.js */ \"../modules/GetInfo.js\");\n/* harmony import */ var _modules_DeleteAndDeleteAll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/DeleteAndDeleteAll.js */ \"../modules/DeleteAndDeleteAll.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded',()=>{\r\n    (0,_modules_GetAndPost_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_modules_put_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_modules_GetInfo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_modules_DeleteAndDeleteAll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;