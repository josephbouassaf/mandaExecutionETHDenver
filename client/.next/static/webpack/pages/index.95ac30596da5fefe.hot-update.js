"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_josephhansbouassaf_Desktop_mandaExecutionETHDenver_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_josephhansbouassaf_Desktop_mandaExecutionETHDenver_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_josephhansbouassaf_Desktop_mandaExecutionETHDenver_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_josephhansbouassaf_Desktop_mandaExecutionETHDenver_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ethereum/web3 */ \"./src/utils/ethereum/web3.js\");\n/* harmony import */ var _utils_ethereum_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ethereum/contracts */ \"./src/utils/ethereum/contracts.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/josephhansbouassaf/Desktop/mandaExecutionETHDenver/client/src/components/Main.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Main = function Main() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      domLoaded = _useState[0],\n      setDomLoaded = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      signatories = _useState2[0],\n      setSignatories = _useState2[1];\n\n  var handleAddSignatory = function handleAddSignatory() {\n    var participant = '<br></br><input className=\"participant\" id={\"participant-\"+signatories} value=\"enter wallet address\" type=\"text\"></input>';\n    setSignatories(signatories + 1);\n    document.getElementById(\"signatoriesDiv\").insertAdjacentHTML('afterbegin', participant);\n  };\n\n  var getTokenSymbol = /*#__PURE__*/function () {\n    var _ref = (0,_Users_josephhansbouassaf_Desktop_mandaExecutionETHDenver_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_josephhansbouassaf_Desktop_mandaExecutionETHDenver_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(address) {\n      var contractInstance, symbol;\n      return _Users_josephhansbouassaf_Desktop_mandaExecutionETHDenver_client_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              contractInstance = new _utils_ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.web3.eth.Contract(_utils_ethereum_contracts__WEBPACK_IMPORTED_MODULE_4__.abi, address);\n              _context.next = 3;\n              return contractInstance.methods.symbol().call();\n\n            case 3:\n              symbol = _context.sent;\n              return _context.abrupt(\"return\", symbol);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getTokenSymbol(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var createWallet = function createWallet() {// TODO\n    // get all the signatories addresses from the input values\n    // create intu wallet\n    // get the symbols of the tokens\n    // save symbol, deal nature, intu wallet address in localstorage\n    // add a row with the above info in the table with nested table for acitivty\n  };\n\n  var endActivity = function endActivity() {// remove manda rom intu wallet signatory\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setDomLoaded(true);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: domLoaded && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      id: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h4\", {\n          children: \"Manda Execution Tool: Execute Merger & Acquisition securely\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h4\", {\n          children: \"Generate a secure MPC wallet, managed by all involved parties\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n            id: \"signatoriesSpan\",\n            children: \"Add a signatory to the wallet\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n            onClick: handleAddSignatory,\n            id: \"addButton\",\n            children: \"+\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 76\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            id: \"signatoriesDiv\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            id: \"dealNatureDiv\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n              id: \"dealNatureSpan\",\n              children: \"Deal Nature\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"select\", {\n              id: \"dealNatureSelect\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"option\", {\n                value: \"ACQUISITION\",\n                children: \"ACQUISITION\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"option\", {\n                value: \"MERGER\",\n                children: \"MERGER\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 57\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n            id: \"createWalletButton\",\n            children: \"Create Secure Wallet!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n          id: \"dealSummaryHeader\",\n          children: \"Deal Summary\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"table\", {\n          id: \"walletTable\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"tbody\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"tr\", {\n              id: \"walletTableRow\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"th\", {\n                children: \"Wallet Address\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"th\", {\n                children: \"Deal Nature\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"th\", {\n                children: \"Participant #1\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"th\", {\n                children: \"Participant #2\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 25\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"td\", {\n              children: \"None\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"td\", {\n              children: \"None\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"td\", {\n              children: \"None\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"td\", {\n              children: \"None\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h4\", {\n          children: \"Press the End Button to Terminate the Merger or Acquisition Activity\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          id: \"endButton\",\n          children: \"End M&A Trade Execution\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 19\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Main, \"Ao5EvHuSpPabLDhek21GtCHkyD0=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bXBvbmVudHMvTWFpbi5qcz8yMmQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdlYjMgfSBmcm9tIFwiLi4vdXRpbHMvZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IHsgYWJpIH0gZnJvbSBcIi4uL3V0aWxzL2V0aGVyZXVtL2NvbnRyYWN0c1wiO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2RvbUxvYWRlZCwgc2V0RG9tTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2lnbmF0b3JpZXMsIHNldFNpZ25hdG9yaWVzXSA9IHVzZVN0YXRlKDApOyBcblxuICAgIGNvbnN0IGhhbmRsZUFkZFNpZ25hdG9yeSA9ICgpID0+IHtcbiAgICAgICAgdmFyIHBhcnRpY2lwYW50ID0gJzxicj48L2JyPjxpbnB1dCBjbGFzc05hbWU9XCJwYXJ0aWNpcGFudFwiIGlkPXtcInBhcnRpY2lwYW50LVwiK3NpZ25hdG9yaWVzfSB2YWx1ZT1cImVudGVyIHdhbGxldCBhZGRyZXNzXCIgdHlwZT1cInRleHRcIj48L2lucHV0Pic7IFxuICAgICAgICBzZXRTaWduYXRvcmllcyhzaWduYXRvcmllcysxKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduYXRvcmllc0RpdlwiKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLHBhcnRpY2lwYW50KTsgXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9rZW5TeW1ib2wgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgICAgICBjb25zdCBjb250cmFjdEluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGFiaSxhZGRyZXNzKTsgXG4gICAgICAgIGNvbnN0IHN5bWJvbCA9IGF3YWl0IGNvbnRyYWN0SW5zdGFuY2UubWV0aG9kcy5zeW1ib2woKS5jYWxsKCk7IFxuICAgICAgICByZXR1cm4gc3ltYm9sOyBcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlV2FsbGV0ID0gKCkgPT4ge1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgICAvLyBnZXQgYWxsIHRoZSBzaWduYXRvcmllcyBhZGRyZXNzZXMgZnJvbSB0aGUgaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAvLyBjcmVhdGUgaW50dSB3YWxsZXRcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHN5bWJvbHMgb2YgdGhlIHRva2Vuc1xuICAgICAgICAgICAgICAgIC8vIHNhdmUgc3ltYm9sLCBkZWFsIG5hdHVyZSwgaW50dSB3YWxsZXQgYWRkcmVzcyBpbiBsb2NhbHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAvLyBhZGQgYSByb3cgd2l0aCB0aGUgYWJvdmUgaW5mbyBpbiB0aGUgdGFibGUgd2l0aCBuZXN0ZWQgdGFibGUgZm9yIGFjaXRpdnR5XG4gICAgfVxuXG4gICAgY29uc3QgZW5kQWN0aXZpdHkgPSAoKSA9PiB7XG4gICAgICAgIC8vIHJlbW92ZSBtYW5kYSByb20gaW50dSB3YWxsZXQgc2lnbmF0b3J5XG5cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0RG9tTG9hZGVkKHRydWUpO1xuICAgIH0pOyBcblxuICAgIHJldHVybiAoXG4gICAgPD5cbiAgICB7ZG9tTG9hZGVkICYmIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDQ+TWFuZGEgRXhlY3V0aW9uIFRvb2w6IEV4ZWN1dGUgTWVyZ2VyICYgQWNxdWlzaXRpb24gc2VjdXJlbHk8L2g0PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDQ+R2VuZXJhdGUgYSBzZWN1cmUgTVBDIHdhbGxldCwgbWFuYWdlZCBieSBhbGwgaW52b2x2ZWQgcGFydGllczwvaDQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBpZD1cInNpZ25hdG9yaWVzU3BhblwiPkFkZCBhIHNpZ25hdG9yeSB0byB0aGUgd2FsbGV0PC9zcGFuPjxidXR0b24gb25DbGljaz17aGFuZGxlQWRkU2lnbmF0b3J5fSBpZD1cImFkZEJ1dHRvblwiPis8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWduYXRvcmllc0RpdlwiPjwvZGl2PlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZGVhbE5hdHVyZURpdlwiPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJkZWFsTmF0dXJlU3BhblwiPkRlYWwgTmF0dXJlPC9zcGFuPjxzZWxlY3QgaWQ9XCJkZWFsTmF0dXJlU2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFDUVVJU0lUSU9OXCI+QUNRVUlTSVRJT048L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUVSR0VSXCI+TUVSR0VSPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNyZWF0ZVdhbGxldEJ1dHRvblwiPkNyZWF0ZSBTZWN1cmUgV2FsbGV0ITwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoMiBpZD1cImRlYWxTdW1tYXJ5SGVhZGVyXCI+RGVhbCBTdW1tYXJ5PC9oMj5cbiAgICAgICAgICAgIDx0YWJsZSBpZD1cIndhbGxldFRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQ9XCJ3YWxsZXRUYWJsZVJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPldhbGxldCBBZGRyZXNzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EZWFsIE5hdHVyZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGFydGljaXBhbnQgIzE8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBhcnRpY2lwYW50ICMyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Ob25lPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Ob25lPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Ob25lPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Ob25lPC90ZD5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoND5QcmVzcyB0aGUgRW5kIEJ1dHRvbiB0byBUZXJtaW5hdGUgdGhlIE1lcmdlciBvciBBY3F1aXNpdGlvbiBBY3Rpdml0eTwvaDQ+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiZW5kQnV0dG9uXCI+RW5kIE0mQSBUcmFkZSBFeGVjdXRpb248L2J1dHRvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PiB9PC8+KTsgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47ICJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIndlYjMiLCJhYmkiLCJNYWluIiwiZG9tTG9hZGVkIiwic2V0RG9tTG9hZGVkIiwic2lnbmF0b3JpZXMiLCJzZXRTaWduYXRvcmllcyIsImhhbmRsZUFkZFNpZ25hdG9yeSIsInBhcnRpY2lwYW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluc2VydEFkamFjZW50SFRNTCIsImdldFRva2VuU3ltYm9sIiwiYWRkcmVzcyIsImNvbnRyYWN0SW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIm1ldGhvZHMiLCJzeW1ib2wiLCJjYWxsIiwiY3JlYXRlV2FsbGV0IiwiZW5kQWN0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main.js\n"));

/***/ })

});