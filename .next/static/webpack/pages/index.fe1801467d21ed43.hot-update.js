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

/***/ "./src/components/Intro5/intro5.jsx":
/*!******************************************!*\
  !*** ./src/components/Intro5/intro5.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Santiago_Nueva_carpeta_2_copia_santirbe98_ImagineBig_CreationGruup_github_CreationGroup_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_sections_intro5_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/sections/intro5.json */ \"./src/data/sections/intro5.json\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/removeSlashpagination */ \"./src/common/removeSlashpagination.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"D:\\\\Santiago\\\\Nueva carpeta (2) - copia\\\\santirbe98\\\\ImagineBig\\\\CreationGruup github\\\\CreationGroup\\\\src\\\\components\\\\Intro5\\\\intro5.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nswiper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_4__.Parallax]);\n\nvar Intro5 = function Intro5() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true),\n      _React$useState2 = (0,D_Santiago_Nueva_carpeta_2_copia_santirbe98_ImagineBig_CreationGruup_github_CreationGroup_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      load = _React$useState2[0],\n      setLoad = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {\n    (0,_common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    setTimeout(function () {\n      setLoad(false);\n    });\n  }, []);\n  var navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n  var navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n  var paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"header\", {\n    id: \"arch-slider\",\n    className: \"slider arch-slider\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"swiper-container parallax-slider\",\n      children: [!load ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n        speed: 1000,\n        parallax: true,\n        navigation: {\n          prevEl: navigationPrevRef.current,\n          nextEl: navigationNextRef.current\n        },\n        pagination: {\n          clickable: true,\n          el: paginationRef.current\n        },\n        onBeforeInit: function onBeforeInit(swiper) {\n          swiper.params.navigation.prevEl = navigationPrevRef.current;\n          swiper.params.navigation.nextEl = navigationNextRef.current;\n          swiper.params.pagination.el = paginationRef.current;\n        },\n        onSwiper: function onSwiper(swiper) {\n          setTimeout(function () {\n            for (var i = 0; i < swiper.slides.length; i++) {\n              swiper.slides[i].childNodes[0].setAttribute(\"data-swiper-parallax\", 0.75 * swiper.width);\n            }\n\n            swiper.params.navigation.prevEl = navigationPrevRef.current;\n            swiper.params.navigation.nextEl = navigationNextRef.current;\n            swiper.params.pagination.el = paginationRef.current;\n            swiper.navigation.destroy();\n            swiper.navigation.init();\n            swiper.navigation.update();\n            swiper.pagination.destroy();\n            swiper.pagination.init();\n            swiper.pagination.update();\n          });\n        },\n        className: \"swiper-wrapper\",\n        slidesPerView: 1,\n        children: _data_sections_intro5_json__WEBPACK_IMPORTED_MODULE_2__.map(function (slide, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n            className: \"swiper-slide\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n              className: \"bg-img valign\",\n              style: {\n                backgroundImage: \"url(\".concat(slide.image, \")\")\n              },\n              \"data-overlay-dark\": \"6\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n                  className: \"row\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n                    className: \"col-lg-6\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n                      className: \"caption mt-30\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h1\", {\n                        style: {\n                          fontSize: \"2.5rem\"\n                        },\n                        children: typeof slide.title === \"object\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n                          children: [slide.title.first, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 83,\n                            columnNumber: 53\n                          }, _this), \" \", slide.title.second]\n                        }, void 0, true) : slide.title\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 80,\n                        columnNumber: 27\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 79,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 78,\n                    columnNumber: 23\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 17\n            }, _this)\n          }, slide.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: \"setting\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: \"controls\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n            ref: navigationNextRef,\n            className: \"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"i\", {\n              className: \"ion-chevron-right\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n            ref: navigationPrevRef,\n            className: \"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"i\", {\n              className: \"ion-chevron-left\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          ref: paginationRef,\n          className: \"swiper-pagination\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Intro5, \"YbbpLk4SWaLFZ9AtkCChqgzqMUo=\");\n\n_c = Intro5;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intro5);\n\nvar _c;\n\n$RefreshReg$(_c, \"Intro5\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQWtCTCxLQUFLLENBQUNRLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFmO0FBMUNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxHQXVFRyxJQXhFTixlQXlFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0U7QUFDRSxlQUFHLEVBQUU3QixpQkFEUDtBQUVFLHFCQUFTLEVBQUMsNkRBRlo7QUFBQSxtQ0FJRTtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FO0FBQ0UsZUFBRyxFQUFFRixpQkFEUDtBQUVFLHFCQUFTLEVBQUMsNkRBRlo7QUFBQSxtQ0FJRTtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFlRTtBQUFLLGFBQUcsRUFBRUcsYUFBVjtBQUF5QixtQkFBUyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStGRCxDQTVHRDs7R0FBTVQ7O0tBQUFBO0FBOEdOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ludHJvNS9pbnRybzUuanN4PzQ2NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaW50cm81RGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9zZWN0aW9ucy9pbnRybzUuanNvblwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBQYXJhbGxheCB9IGZyb20gXCJzd2lwZXJcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHJlbW92ZVNsYXNoRnJvbVBhZ2luYXRpb24gZnJvbSBcIi4uLy4uL2NvbW1vbi9yZW1vdmVTbGFzaHBhZ2luYXRpb25cIjtcclxuU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb24sIFBhZ2luYXRpb24sIFBhcmFsbGF4XSk7XHJcblxyXG5jb25zdCBJbnRybzUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJlbW92ZVNsYXNoRnJvbVBhZ2luYXRpb24oKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbmF2aWdhdGlvblByZXZSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbmF2aWdhdGlvbk5leHRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcGFnaW5hdGlvblJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgaWQ9XCJhcmNoLXNsaWRlclwiIGNsYXNzTmFtZT1cInNsaWRlciBhcmNoLXNsaWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1jb250YWluZXIgcGFyYWxsYXgtc2xpZGVyXCI+XHJcbiAgICAgICAgeyFsb2FkID8gKFxyXG4gICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICBzcGVlZD17MTAwMH1cclxuICAgICAgICAgICAgcGFyYWxsYXg9e3RydWV9XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb249e3tcclxuICAgICAgICAgICAgICBwcmV2RWw6IG5hdmlnYXRpb25QcmV2UmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgbmV4dEVsOiBuYXZpZ2F0aW9uTmV4dFJlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGVsOiBwYWdpbmF0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQmVmb3JlSW5pdD17KHN3aXBlcikgPT4ge1xyXG4gICAgICAgICAgICAgIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5wcmV2RWwgPSBuYXZpZ2F0aW9uUHJldlJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICAgIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5uZXh0RWwgPSBuYXZpZ2F0aW9uTmV4dFJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICAgIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5lbCA9IHBhZ2luYXRpb25SZWYuY3VycmVudDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25Td2lwZXI9eyhzd2lwZXIpID0+IHtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVzW2ldLmNoaWxkTm9kZXNbMF0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1zd2lwZXItcGFyYWxsYXhcIixcclxuICAgICAgICAgICAgICAgICAgICAwLjc1ICogc3dpcGVyLndpZHRoXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLnByZXZFbCA9IG5hdmlnYXRpb25QcmV2UmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ubmV4dEVsID0gbmF2aWdhdGlvbk5leHRSZWYuY3VycmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgPSBwYWdpbmF0aW9uUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpcGVyLm5hdmlnYXRpb24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgc3dpcGVyLm5hdmlnYXRpb24uaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlci13cmFwcGVyXCJcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ludHJvNURhdGEubWFwKChzbGlkZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtzbGlkZS5pZH0gY2xhc3NOYW1lPVwic3dpcGVyLXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWltZyB2YWxpZ25cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtzbGlkZS5pbWFnZX0pYCB9fVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW92ZXJsYXktZGFyaz1cIjZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvbiBtdC0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogXCIyLjVyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2Ygc2xpZGUudGl0bGUgPT09IFwib2JqZWN0XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NsaWRlLnRpdGxlLmZpcnN0fSA8YnIgLz4ge3NsaWRlLnRpdGxlLnNlY29uZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICByZWY9e25hdmlnYXRpb25OZXh0UmVmfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tbmV4dCBzd2lwZXItbmF2LWN0cmwgbmV4dC1jdHJsIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHJlZj17bmF2aWdhdGlvblByZXZSZWZ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3dpcGVyLWJ1dHRvbi1wcmV2IHN3aXBlci1uYXYtY3RybCBwcmV2LWN0cmwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWNoZXZyb24tbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgcmVmPXtwYWdpbmF0aW9uUmVmfSBjbGFzc05hbWU9XCJzd2lwZXItcGFnaW5hdGlvblwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRybzU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImludHJvNURhdGEiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlN3aXBlckNvcmUiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIlBhcmFsbGF4IiwicmVtb3ZlU2xhc2hGcm9tUGFnaW5hdGlvbiIsInVzZSIsIkludHJvNSIsInVzZVN0YXRlIiwibG9hZCIsInNldExvYWQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwibmF2aWdhdGlvblByZXZSZWYiLCJ1c2VSZWYiLCJuYXZpZ2F0aW9uTmV4dFJlZiIsInBhZ2luYXRpb25SZWYiLCJwcmV2RWwiLCJjdXJyZW50IiwibmV4dEVsIiwiY2xpY2thYmxlIiwiZWwiLCJzd2lwZXIiLCJwYXJhbXMiLCJuYXZpZ2F0aW9uIiwicGFnaW5hdGlvbiIsImkiLCJzbGlkZXMiLCJsZW5ndGgiLCJjaGlsZE5vZGVzIiwic2V0QXR0cmlidXRlIiwid2lkdGgiLCJkZXN0cm95IiwiaW5pdCIsInVwZGF0ZSIsIm1hcCIsInNsaWRlIiwiaW5kZXgiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZSIsImZvbnRTaXplIiwidGl0bGUiLCJmaXJzdCIsInNlY29uZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Intro5/intro5.jsx\n");

/***/ })

});