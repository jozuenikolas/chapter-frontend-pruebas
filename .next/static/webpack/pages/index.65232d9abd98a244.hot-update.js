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

/***/ "./src/components/molecules/MarvelBody/index.tsx":
/*!*******************************************************!*\
  !*** ./src/components/molecules/MarvelBody/index.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared_hooks_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/hooks/useForm */ \"./src/shared/hooks/useForm.js\");\n/* harmony import */ var _pages_api_marvel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pages/api/marvel */ \"./src/pages/api/marvel.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ \"./src/components/molecules/MarvelBody/style.tsx\");\n/* harmony import */ var _atoms_Character__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @atoms/Character */ \"./src/components/atoms/Character/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\root\\\\Documents\\\\prueba-pichincha\\\\chapter-frontend-pruebas\\\\src\\\\components\\\\molecules\\\\MarvelBody\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // import { PokemonCard } from './PokemonCard';\n// import { PokemonCardDetail } from './PokemonCardDetail';\n\n\n\n\n\n\nvar MarvelBody = function MarvelBody(_ref) {\n  _s();\n\n  var characters = _ref.characters;\n\n  // const [selectedPokemon, setSelectedPokemon] = useState();\n  var _useForm = (0,_shared_hooks_useForm__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n    searchPokemon: ''\n  }),\n      _useForm2 = (0,C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useForm, 2),\n      formValues = _useForm2[0],\n      handleInputChange = _useForm2[1]; // @ts-ignore\n\n\n  var searchPokemon = formValues.searchPokemon;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      marvelSearch = _useState[0],\n      setMarvelSearch = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      notFound = _useState2[0],\n      setNotFound = _useState2[1];\n\n  console.log(formValues, 'formValues');\n\n  var onSearch = /*#__PURE__*/function () {\n    var _ref2 = (0,C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(marvel) {\n      var result;\n      return C_Users_root_Documents_prueba_pichincha_chapter_frontend_pruebas_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (marvel) {\n                _context.next = 5;\n                break;\n              }\n\n              setMarvelSearch([]); // setReload(true);\n\n              setNotFound(false);\n              _context.next = 15;\n              break;\n\n            case 5:\n              _context.prev = 5;\n              _context.next = 8;\n              return (0,_pages_api_marvel__WEBPACK_IMPORTED_MODULE_5__.fetchCharacter)(marvel.toLowerCase());\n\n            case 8:\n              result = _context.sent;\n\n              if (!result) {\n                setNotFound(true);\n              } else {\n                setMarvelSearch(result);\n                setNotFound(false);\n              }\n\n              _context.next = 15;\n              break;\n\n            case 12:\n              _context.prev = 12;\n              _context.t0 = _context[\"catch\"](5);\n              setNotFound(true);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[5, 12]]);\n    }));\n\n    return function onSearch(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // @ts-ignore\n\n\n  var handleSearch = function handleSearch(e) {\n    e.preventDefault(); // @ts-ignore\n\n    onSearch(formValues.searchPokemon);\n  }; // const handleClick = (pokemonDetail) => {\n  //     setSelectedPokemon(pokemonDetail);\n  // }\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_6__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"container-search\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"form\", {\n        onSubmit: handleSearch,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Buscar\",\n          className: \"box-search\",\n          name: \"searchPokemon\",\n          value: searchPokemon // @ts-ignore\n          ,\n          onChange: handleInputChange,\n          autoComplete: \"off\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"button\", {\n        className: \"button\",\n        children: \"Nuevo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"\",\n      children: [marvelSearch.length === 0 && characters.map(function (_char) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_atoms_Character__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          character: _char\n        }, _char._id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }, _this);\n      }), marvelSearch.length > 0 && marvelSearch.map(function (_char2) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_atoms_Character__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          character: _char2\n        }, _char2._id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(MarvelBody, \"iFtmU6Qe/Tj3TbK0ILHSOgdEEPs=\", false, function () {\n  return [_shared_hooks_useForm__WEBPACK_IMPORTED_MODULE_4__.useForm];\n});\n\n_c = MarvelBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MarvelBody);\n\nvar _c;\n\n$RefreshReg$(_c, \"MarvelBody\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvTWFydmVsQm9keS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBOztBQUNBO0FBRUE7QUFDQTs7O0FBTUEsSUFBTU0sVUFBMEIsR0FBRyxTQUE3QkEsVUFBNkIsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUVuRDtBQUNBLGlCQUF3Q0wsOERBQU8sQ0FBQztBQUFDTSxJQUFBQSxhQUFhLEVBQUU7QUFBaEIsR0FBRCxDQUEvQztBQUFBO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxpQkFBbkIsZ0JBSG1ELENBSW5EOzs7QUFDQSxNQUFRRixhQUFSLEdBQTBCQyxVQUExQixDQUFRRCxhQUFSOztBQUNBLGtCQUF3Q1AsK0NBQVEsQ0FBZSxFQUFmLENBQWhEO0FBQUEsTUFBT1UsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBZ0NYLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9ZLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBR0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxVQUFaLEVBQXdCLFlBQXhCOztBQUVBLE1BQU1RLFFBQVE7QUFBQSw2WEFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDUkEsTUFEUTtBQUFBO0FBQUE7QUFBQTs7QUFFVE4sY0FBQUEsZUFBZSxDQUFDLEVBQUQsQ0FBZixDQUZTLENBR1Q7O0FBQ0FFLGNBQUFBLFdBQVcsQ0FBQyxLQUFELENBQVg7QUFKUztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU9nQlgsaUVBQWMsQ0FBQ2UsTUFBTSxDQUFDQyxXQUFQLEVBQUQsQ0FQOUI7O0FBQUE7QUFPQ0MsY0FBQUEsTUFQRDs7QUFRTCxrQkFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDVE4sZ0JBQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7QUFDSCxlQUZELE1BRU87QUFDSEYsZ0JBQUFBLGVBQWUsQ0FBQ1EsTUFBRCxDQUFmO0FBQ0FOLGdCQUFBQSxXQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0g7O0FBYkk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlTEEsY0FBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDs7QUFmSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSRyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQsQ0FabUQsQ0ErQnREOzs7QUFDRyxNQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRixHQUR3QixDQUV4Qjs7QUFDQU4sSUFBQUEsUUFBUSxDQUFDUixVQUFVLENBQUNELGFBQVosQ0FBUjtBQUNILEdBSkQsQ0FoQ21ELENBc0NuRDtBQUNBO0FBQ0E7OztBQUVBLHNCQUNJLDhEQUFDLDZDQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFDQTtBQUFNLGdCQUFRLEVBQUVhLFlBQWhCO0FBQUEsK0JBRUk7QUFDSSxjQUFJLEVBQUMsTUFEVDtBQUVJLHFCQUFXLEVBQUMsUUFGaEI7QUFHSSxtQkFBUyxFQUFDLFlBSGQ7QUFJSSxjQUFJLEVBQUMsZUFKVDtBQUtJLGVBQUssRUFBRWIsYUFMWCxDQU1JO0FBTko7QUFPSSxrQkFBUSxFQUFFRSxpQkFQZDtBQVFJLHNCQUFZLEVBQUM7QUFSakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQWNJO0FBQVEsaUJBQVMsRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBa0JJO0FBQUssZUFBUyxFQUFDLEVBQWY7QUFBQSxpQkFDS0MsWUFBWSxDQUFDYSxNQUFiLEtBQXdCLENBQXhCLElBQTZCakIsVUFBVSxDQUFDa0IsR0FBWCxDQUFnQixVQUFDQyxLQUFEO0FBQUEsNEJBQzFDLDhEQUFDLHdEQUFEO0FBQTBCLG1CQUFTLEVBQUVBO0FBQXJDLFdBQWdCQSxLQUFJLENBQUNDLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDBDO0FBQUEsT0FBaEIsQ0FEbEMsRUFNTWhCLFlBQVksQ0FBQ2EsTUFBYixHQUFzQixDQUF0QixJQUEyQmIsWUFBWSxDQUFDYyxHQUFiLENBQWtCLFVBQUNDLE1BQUQ7QUFBQSw0QkFDM0MsOERBQUMsd0RBQUQ7QUFBMEIsbUJBQVMsRUFBRUE7QUFBckMsV0FBZ0JBLE1BQUksQ0FBQ0MsR0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEMkM7QUFBQSxPQUFsQixDQU5qQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtQ0gsQ0E3RUQ7O0dBQU1yQjtVQUdzQ0o7OztLQUh0Q0k7QUErRU4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL01hcnZlbEJvZHkvaW5kZXgudHN4PzE3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBGQyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2hvb2tzL3VzZUZvcm0nXHJcbi8vIGltcG9ydCB7IFBva2Vtb25DYXJkIH0gZnJvbSAnLi9Qb2tlbW9uQ2FyZCc7XHJcbi8vIGltcG9ydCB7IFBva2Vtb25DYXJkRGV0YWlsIH0gZnJvbSAnLi9Qb2tlbW9uQ2FyZERldGFpbCc7XHJcbmltcG9ydCB7IGZldGNoQ2hhcmFjdGVyLCBmZXRjaENoYXJhY3RlcnMgfSBmcm9tICcuLi8uLi8uLi9wYWdlcy9hcGkvbWFydmVsJztcclxuaW1wb3J0IHsgSUNoYXJhY3RlciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnQGF0b21zL0NoYXJhY3Rlcic7XHJcblxyXG5pbnRlcmZhY2UgQ2hhcmFjdGVycyB7XHJcbiAgICBjaGFyYWN0ZXJzOiBJQ2hhcmFjdGVyW11cclxufVxyXG5cclxuY29uc3QgTWFydmVsQm9keTogRkM8Q2hhcmFjdGVycz4gPSAoeyBjaGFyYWN0ZXJzIH0pID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCBbc2VsZWN0ZWRQb2tlbW9uLCBzZXRTZWxlY3RlZFBva2Vtb25dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtmb3JtVmFsdWVzLCBoYW5kbGVJbnB1dENoYW5nZV0gPSB1c2VGb3JtKHtzZWFyY2hQb2tlbW9uOiAnJ30pO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgeyBzZWFyY2hQb2tlbW9uIH0gPSBmb3JtVmFsdWVzO1xyXG4gICAgY29uc3QgW21hcnZlbFNlYXJjaCwgc2V0TWFydmVsU2VhcmNoXSA9IHVzZVN0YXRlPElDaGFyYWN0ZXJbXT4oW10pO1xyXG4gICAgY29uc3QgW25vdEZvdW5kLCBzZXROb3RGb3VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKGZvcm1WYWx1ZXMsICdmb3JtVmFsdWVzJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IG9uU2VhcmNoID0gYXN5bmMgKG1hcnZlbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtYXJ2ZWwpIHtcclxuICAgICAgICAgICAgc2V0TWFydmVsU2VhcmNoKFtdKTtcclxuICAgICAgICAgICAgLy8gc2V0UmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICBzZXROb3RGb3VuZChmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoQ2hhcmFjdGVyKG1hcnZlbC50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXROb3RGb3VuZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFydmVsU2VhcmNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Tm90Rm91bmQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHNldE5vdEZvdW5kKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gLy8gQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIG9uU2VhcmNoKGZvcm1WYWx1ZXMuc2VhcmNoUG9rZW1vbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAocG9rZW1vbkRldGFpbCkgPT4ge1xyXG4gICAgLy8gICAgIHNldFNlbGVjdGVkUG9rZW1vbihwb2tlbW9uRGV0YWlsKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItc2VhcmNoJz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQnVzY2FyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYm94LXNlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdzZWFyY2hQb2tlbW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQb2tlbW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdvZmYnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uJz5OdWV2bzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICAgICAge21hcnZlbFNlYXJjaC5sZW5ndGggPT09IDAgJiYgY2hhcmFjdGVycy5tYXAoIChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXJhY3RlciBrZXk9e2NoYXIuX2lkfSBjaGFyYWN0ZXI9e2NoYXJ9IC8+XHJcbiAgICAgICAgICAgICAgICApIClcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7IG1hcnZlbFNlYXJjaC5sZW5ndGggPiAwICYmIG1hcnZlbFNlYXJjaC5tYXAoIChjaGFyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXJhY3RlciBrZXk9e2NoYXIuX2lkfSBjaGFyYWN0ZXI9e2NoYXJ9IC8+XHJcbiAgICAgICAgICAgICAgICApIClcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJ2ZWxCb2R5XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsImZldGNoQ2hhcmFjdGVyIiwiQ29udGFpbmVyIiwiQ2hhcmFjdGVyIiwiTWFydmVsQm9keSIsImNoYXJhY3RlcnMiLCJzZWFyY2hQb2tlbW9uIiwiZm9ybVZhbHVlcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwibWFydmVsU2VhcmNoIiwic2V0TWFydmVsU2VhcmNoIiwibm90Rm91bmQiLCJzZXROb3RGb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJvblNlYXJjaCIsIm1hcnZlbCIsInRvTG93ZXJDYXNlIiwicmVzdWx0IiwiaGFuZGxlU2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwibWFwIiwiY2hhciIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/molecules/MarvelBody/index.tsx\n");

/***/ })

});