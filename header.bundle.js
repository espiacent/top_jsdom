"use strict";
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["header"],{

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawFooter)
/* harmony export */ });
function drawFooter() {
  var body = document.querySelector('body');
  var footer = document.createElement('div');
  footer.id = 'footer';
  footer.className = 'footer';
  var footertext = document.createElement('span');
  footertext.textContent = "made with webpack and a pinch of salt";
  body.appendChild(footer);
  footer.appendChild(footertext);
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawHeader)
/* harmony export */ });
/* harmony import */ var _assets_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/icon.png */ "./src/assets/icon.png");
/* harmony import */ var _assets_heart_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/heart.png */ "./src/assets/heart.png");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



function drawHeader() {
  var body = document.querySelector('body');
  var navbar = document.createElement('div');
  navbar.id = 'navbar';
  navbar.className = 'navbar';
  var logo = document.createElement('div');
  logo.id = 'logo';
  logo.className = 'logo';
  var logoImage = new Image(80, 80);
  logoImage.src = _assets_icon_png__WEBPACK_IMPORTED_MODULE_0__;
  logoImage.id = 'logoImage';
  logoImage.className = 'logoImage';
  var logoText1 = document.createElement('span');
  logoText1.textContent = 'Chez';
  logoText1.className = 'logoText1';
  var logoImage2 = new Image(40, 40);
  logoImage2.src = _assets_heart_png__WEBPACK_IMPORTED_MODULE_1__;
  logoImage2.id = 'logoImage2';
  logoImage2.className = 'logoImage2';
  var logoText2 = document.createElement('span');
  logoText2.textContent = 'Webpack';
  logoText2.className = 'logoText2';
  var menu = document.createElement('div');
  menu.id = 'menu';
  menu.className = 'menu';
  var btn1 = document.createElement('button');
  btn1.textContent = 'Our Menu';
  btn1.id = 'btn1';
  var btn2 = document.createElement('button');
  btn2.textContent = 'Impressions';
  btn2.id = 'btn2';
  var link3 = document.createElement('a');
  link3.href = 'https://webpack.js.org/';
  var btn3 = document.createElement('button');
  btn3.textContent = "Contact";
  body.appendChild(navbar);
  navbar.appendChild(logo);
  logo.appendChild(logoImage);
  logo.appendChild(logoText1);
  logo.appendChild(logoImage2);
  logo.appendChild(logoText2);
  navbar.appendChild(menu);
  menu.appendChild(btn1);
  menu.appendChild(btn2);
  menu.appendChild(link3);
  link3.appendChild(btn3);
  btn1.onclick = ourMenu;
  btn2.onclick = impressions;
  var logoLink = document.getElementById('logoImage');
  logoLink.style.cursor = 'pointer';
  logoLink.addEventListener('click', function () {
    var body = document.querySelector('body');
    body.innerHTML = '';
    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  function ourMenu() {
    var body = document.querySelector('body');
    body.innerHTML = '';
    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])('ourMenu');
  }
  function impressions() {
    var body = document.querySelector('body');
    body.innerHTML = '';
    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])('impressions');
  }
}
;

/***/ }),

/***/ "./src/impressions.js":
/*!****************************!*\
  !*** ./src/impressions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawLandingPage)
/* harmony export */ });
/* harmony import */ var _assets_cat_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/cat.jpg */ "./src/assets/cat.jpg");
/* harmony import */ var _assets_cat2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/cat2.jpg */ "./src/assets/cat2.jpg");
/* harmony import */ var _assets_cat3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cat3.jpg */ "./src/assets/cat3.jpg");
/* harmony import */ var _assets_cat4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/cat4.jpg */ "./src/assets/cat4.jpg");
/* harmony import */ var _assets_cat5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/cat5.png */ "./src/assets/cat5.png");





function drawLandingPage() {
  var body = document.querySelector('body');
  var maincontent = document.createElement('div');
  maincontent.id = 'maincontent';
  maincontent.className = 'maincontent';
  var maincontentLeft = document.createElement('div');
  maincontentLeft.id = 'maincontentLeft';
  maincontentLeft.className = 'maincontentLeft';
  var headline = document.createElement('h1');
  headline.innerText = "IMPRESSIONS";
  var welcometext = document.createElement('p');
  welcometext.innerText = "Here you can see some impressions from our premises. Let me in let me out let me in let me out let me in let me out who broke this door anyway poop on floor and watch human clean up, or the best thing in the universe is a cardboard box asdflkjaertvlkjasntvkjn (sits on keyboard). Lay on arms while you're using the keyboard cats go for world domination growl at dogs in my sleep or loved it, hated it, loved it, hated it so i cry and cry and cry unless you pet me, and then maybe i cry just for fun or i just saw other cats inside the house and nobody ask me before using my litter box i am the best. Spit up on light gray carpet instead of adjacent linoleum if it fits i sits cat ass trophy and meow meow mama. Pee on walls it smells like breakfast lick human with sandpaper tongue, oooo! dangly balls!";
  var maincontentRight = document.createElement('div');
  maincontentRight.id = 'maincontentRight';
  maincontentRight.className = 'maincontentRight';
  var image1 = document.createElement('img');
  image1.src = _assets_cat_jpg__WEBPACK_IMPORTED_MODULE_0__;
  image1.className = 'cat';
  var image2 = document.createElement('img');
  image2.src = _assets_cat2_jpg__WEBPACK_IMPORTED_MODULE_1__;
  image2.className = 'cat';
  var image3 = document.createElement('img');
  image3.src = _assets_cat3_jpg__WEBPACK_IMPORTED_MODULE_2__;
  image3.className = 'cat';
  var image4 = document.createElement('img');
  image4.src = _assets_cat4_jpg__WEBPACK_IMPORTED_MODULE_3__;
  image4.className = 'cat';
  var image5 = document.createElement('img');
  image5.src = _assets_cat5_png__WEBPACK_IMPORTED_MODULE_4__;
  image5.className = 'cat';
  body.appendChild(maincontent);
  maincontent.appendChild(maincontentLeft);
  maincontentLeft.appendChild(headline);
  maincontentLeft.appendChild(welcometext);
  maincontent.appendChild(maincontentRight);
  maincontentRight.appendChild(image1);
  maincontentRight.appendChild(image2);
  // maincontentRight.appendChild(image3);
  maincontentRight.appendChild(image4);
  maincontentRight.appendChild(image5);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPage)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.js */ "./src/landing.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _impressions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impressions.js */ "./src/impressions.js");
/* harmony import */ var _ourmenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ourmenu.js */ "./src/ourmenu.js");






window.addEventListener('load', initPage);
function initPage(page) {
  if (page == 'ourMenu') {
    (0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_ourmenu_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } else if (page == 'impressions') {
    (0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_impressions_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } else {
    (0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_landing_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
}

/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawLandingPage)
/* harmony export */ });
/* harmony import */ var _assets_webpack_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/webpack.png */ "./src/assets/webpack.png");

function drawLandingPage() {
  var body = document.querySelector('body');
  var maincontent = document.createElement('div');
  maincontent.id = 'maincontent';
  maincontent.className = 'maincontent';
  var maincontentLeft = document.createElement('div');
  maincontentLeft.id = 'maincontentLeft';
  maincontentLeft.className = 'maincontentLeft';
  var headline = document.createElement('h1');
  headline.innerText = "Welcome to our Restaurant!";
  var welcometext = document.createElement('p');
  welcometext.innerText = "At its core, webpack is a static module bundler restaurant for modern JavaScript gourmets. When webpack prepares your application, it internally builds a flavourful dependency graph from one or more entry points and then combines every modular flavour your project needs into one or more bundled dishes, which are static assets to be served fresh.";
  var maincontentRight = document.createElement('div');
  maincontentRight.id = 'maincontentRight';
  maincontentRight.className = 'maincontentRight';
  var webpackImage = document.createElement('img');
  webpackImage.src = _assets_webpack_png__WEBPACK_IMPORTED_MODULE_0__;
  webpackImage.className = 'webpack';
  body.appendChild(maincontent);
  maincontent.appendChild(maincontentLeft);
  maincontentLeft.appendChild(headline);
  maincontentLeft.appendChild(welcometext);
  maincontent.appendChild(maincontentRight);
  maincontentRight.appendChild(webpackImage);
}

/***/ }),

/***/ "./src/ourmenu.js":
/*!************************!*\
  !*** ./src/ourmenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ourMenu)
/* harmony export */ });
/* harmony import */ var _assets_webpack_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/webpack.png */ "./src/assets/webpack.png");

function ourMenu() {
  var body = document.querySelector('body');
  var maincontent = document.createElement('div');
  maincontent.id = 'maincontent';
  maincontent.className = 'maincontent';
  var maincontentLeft = document.createElement('div');
  maincontentLeft.id = 'maincontentLeft';
  maincontentLeft.className = 'maincontentLeft';
  var headline = document.createElement('h1');
  headline.innerText = "OUR MENU";
  var welcometext = document.createElement('p');
  welcometext.innerText = "Here you can find our current menu. Tart chocolate bear claw lemon drops halvah soufflé fruitcake. Chocolate cake pudding oat cake pastry sugar plum jujubes cake cake pudding. Shortbread candy macaroon oat cake lemon drops cake marshmallow danish. Toffee tart marzipan toffee shortbread lollipop bear claw. Wafer soufflé caramels oat cake ice cream sugar plum. Sugar plum lemon drops icing jujubes oat cake.";
  var maincontentRight = document.createElement('div');
  maincontentRight.id = 'maincontentRight';
  maincontentRight.className = 'maincontentRight';
  var menucard1 = document.createElement('div');
  menucard1.id = 'menucard1';
  menucard1.innerHTML = '<h2><u>Loaders</u></h2>Loaders provide a way to flavour the output through preprocessing functions. Gourmets now have more flexibility to include fine-grained salt such as compression, packaging, language translations and more.';
  var menucard2 = document.createElement('div');
  menucard2.className = 'menucard';
  menucard2.innerHTML = '<h2><u>Plugins</u></h2>Plugins are the protein of webpack. Webpack itself is cooked on the same plugin system that you use in your webpack configuration! They also are served for the purpose of doing anything else that a stove cannot do. Webpack provides many such flavours out of the box.';
  var menucard3 = document.createElement('div');
  menucard3.className = 'menucard';
  menucard3.innerHTML = '<h2><u>Modules</u></h2>Each modular dish has a smaller surface area than a full dish, making verification, debugging, and testing super tasty. Well-written modules provide solid flavour and encapsulation boundaries, so that each module has a coherent design and a clear taste within the overall palette.';
  var menucard4 = document.createElement('div');
  menucard4.className = 'menucard';
  menucard4.innerHTML = '<h2><u>Targets</u></h2>Because JavaScript can be sautéd for both server and browser, webpack offers multiple cooking targets that you can boil in your webpack configuration. Warning: The webpack target property is not to be confused with the taste of libraryTarget property. For more information see our preparation guide on the output property.';
  body.appendChild(maincontent);
  maincontent.appendChild(maincontentLeft);
  maincontentLeft.appendChild(headline);
  maincontentLeft.appendChild(welcometext);
  maincontent.appendChild(maincontentRight);
  maincontentRight.appendChild(menucard1);
  maincontentRight.appendChild(menucard2);
  maincontentRight.appendChild(menucard3);
  maincontentRight.appendChild(menucard4);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Parisienne&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cabin:wght@600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  height: 130vh;\n  font-family: \"Cabin\", sans-serif;\n  margin: 0;\n  background-color: #263740;\n}\n\n.navbar {\n  position: sticky;\n  top: 0;\n  background-color: #446273;\n  font-weight: 700;\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10;\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1);\n  border-bottom: 2px solid white;\n}\n\n.logo {\n  font-family: \"Parisienne\", cursive;\n  display: flex;\n  align-items: center;\n  margin: 10px 25px;\n  color: #FFFFFF;\n  font-size: 2.8rem;\n}\n\nspan {\n  margin-left: 18px;\n}\n\nh2 {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.logoImage2 {\n  margin-left: 18px;\n}\n\n.maincontent {\n  display: flex;\n  justify-content: center;\n  overflow: scroll;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.maincontentLeft {\n  padding: 4%;\n  text-align: center;\n  color: #FFFFFF;\n  width: 50%;\n}\n\n.maincontentLeft > h1 {\n  font-size: 2.5rem;\n  line-height: 4rem;\n  text-decoration: underline;\n  min-width: 280px;\n}\n\n.maincontentLeft > p {\n  height: 75vh;\n  font-size: 1.2rem;\n  line-height: 2.4rem;\n  font-family: \"Cabin\", sans-serif;\n  min-width: 280px;\n}\n\n.maincontentRight {\n  width: 80vw;\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n\n.webpack {\n  height: 60vh;\n}\n\n.cat {\n  margin-top: 30px;\n  margin-left: 10px;\n  height: 35vh;\n}\n\n#menucard1 {\n  font-family: \"Parisienne\", cursive;\n  font-size: 1.4rem;\n  text-align: center;\n  background-color: #FFFFFF;\n  height: 33vh;\n  margin: 15%;\n  margin-top: 5%;\n  margin-bottom: 0;\n  padding: 5%;\n  border-radius: 10px;\n}\n\n.menucard {\n  font-family: \"Parisienne\", cursive;\n  font-size: 1.4rem;\n  text-align: center;\n  background-color: #FFFFFF;\n  height: 35vh;\n  margin: 15%;\n  margin-top: 5%;\n  margin-bottom: 0;\n  padding: 5%;\n  border-radius: 10px;\n}\n\n.footer {\n  background-color: #446273;\n  position: fixed;\n  font-size: 0.9rem;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  border-top: 2px solid white;\n  line-height: 6vh;\n}\n\n.footer > span {\n  color: #FFFFFF;\n  font-size: 1.1rem;\n}\n\nbutton {\n  background-color: #446273;\n  color: #FFFFFF;\n  font-family: \"Cabin\", sans-serif;\n  border: 3px solid #FFFFFF;\n  border-radius: 10px;\n  margin: 10px 20px 5px 10px;\n  font-size: 1.3rem;\n  width: 180px;\n  height: 50px;\n  cursor: pointer;\n}\nbutton:hover {\n  scale: 0.97;\n}\nbutton:focus {\n  outline: 0;\n}\n\na {\n  text-decoration: none;\n  color: #FFFFFF;\n}\na:hover {\n  text-decoration: none;\n  color: #FFFFFF;\n}\na:focus {\n  text-decoration: none;\n  color: #FFFFFF;\n}\na:active {\n  text-decoration: none;\n  color: #FFFFFF;\n}\na:visited {\n  text-decoration: none;\n  color: #FFFFFF;\n}\n\n@media only screen and (max-width: 1200px) {\n  .logoText1,\n.logoText2,\n.logoImage2 {\n    display: none;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .logoImage {\n    display: none;\n  }\n  .maincontent {\n    flex-direction: column;\n    align-items: center;\n  }\n  .maincontentLeft {\n    padding: 2%;\n  }\n}\n@media only screen and (max-width: 700px) {\n  button {\n    display: block;\n    width: 300px;\n  }\n  .navbar {\n    justify-content: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAQA;EACI,sBAAA;AALJ;;AAQA;EACI,aAAA;EACA,gCAAA;EACA,SAAA;EACA,yBAXe;AAMnB;;AAQA;EACI,gBAAA;EACA,MAAA;EACA,yBAnBY;EAoBZ,gBAAA;EACA,aAAA;EACA,cAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,wEAxBS;EAyBT,8BAAA;AALJ;;AAQA;EACI,kCAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,cAnCc;EAoCd,iBAAA;AALJ;;AAQA;EACI,iBAAA;AALJ;;AAQA;EACI,gBAAA;EACA,aAAA;AALJ;;AAQA;EACI,iBAAA;AALJ;;AAQA;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AALJ;;AAQA;EACI,WAAA;EACA,kBAAA;EACA,cA/Dc;EAgEd,UAAA;AALJ;;AAQA;EACI,iBAAA;EACA,iBAAA;EACA,0BAAA;EACA,gBAAA;AALJ;;AAQA;EACI,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,gCAAA;EACA,gBAAA;AALJ;;AAQA;EACI,WAAA;EACA,aAAA;EACA,4BAAA;EACA,wBAAA;EACA,2BAAA;AALJ;;AAQA;EACI,YAAA;AALJ;;AAQA;EACI,gBAAA;EACA,iBAAA;EACA,YAAA;AALJ;;AAQA;EACI,kCAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAxGc;EAyGd,YAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;EACA,mBAAA;AALJ;;AAQA;EACI,kCAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBArHc;EAsHd,YAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;EACA,mBAAA;AALJ;;AAQA;EACI,yBAhIY;EAiIZ,eAAA;EACA,iBAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,2BAAA;EACA,gBAAA;AALJ;;AAQA;EACI,cA1Ic;EA2Id,iBAAA;AALJ;;AAQA;EACI,yBAhJY;EAiJZ,cAhJc;EAiJd,gCAAA;EACA,yBAAA;EACA,mBAAA;EACA,0BAAA;EACA,iBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;AALJ;AAOI;EACI,WAAA;AALR;AAQI;EACI,UAAA;AANR;;AAUA;EACI,qBAAA;EACA,cArKc;AA8JlB;AASI;EACI,qBAAA;EACA,cAzKU;AAkKlB;AAUI;EACI,qBAAA;EACA,cA9KU;AAsKlB;AAWI;EACI,qBAAA;EACA,cAnLU;AA0KlB;AAYI;EACI,qBAAA;EACA,cAxLU;AA8KlB;;AAcA;EAEI;;;IAGI,aAAA;EAZN;AACF;AAeA;EACI;IACI,aAAA;EAbN;EAgBE;IACI,sBAAA;IACA,mBAAA;EAdN;EAiBE;IACI,WAAA;EAfN;AACF;AAkBA;EACI;IACI,cAAA;IACA,YAAA;EAhBN;EAmBE;IACI,uBAAA;EAjBN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@600&display=swap');\n\n$primary-color: #446273;\n$secondary-color: #FFFFFF;\n$background-color: #263740;\n$box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1);\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    height: 130vh;\n    font-family: 'Cabin', sans-serif;\n    margin: 0;\n    background-color: $background-color;\n}\n\n.navbar {\n    position: sticky;\n    top: 0;\n    background-color: $primary-color;\n    font-weight: 700;\n    display: flex;\n    flex-shrink: 0;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 10;\n    box-shadow: $box-shadow;\n    border-bottom: 2px solid white;\n}\n\n.logo {\n    font-family: 'Parisienne', cursive;\n    display: flex;\n    align-items: center;\n    margin: 10px 25px;\n    color: $secondary-color;\n    font-size: 2.8rem;\n}\n\nspan {\n    margin-left: 18px;\n}\n\nh2 {\n    margin-bottom: 0;\n    margin-top: 0;\n}\n\n.logoImage2 {\n    margin-left: 18px;\n}\n\n.maincontent {\n    display: flex;\n    justify-content: center;\n    overflow: scroll;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.maincontentLeft {\n    padding: 4%;\n    text-align: center;\n    color: $secondary-color;\n    width: 50%;\n}\n\n.maincontentLeft>h1 {\n    font-size: 2.5rem;\n    line-height: 4rem;\n    text-decoration: underline;\n    min-width: 280px;\n}\n\n.maincontentLeft>p {\n    height: 75vh;\n    font-size: 1.2rem;\n    line-height: 2.4rem;\n    font-family: 'Cabin', sans-serif;\n    min-width: 280px;\n}\n\n.maincontentRight {\n    width: 80vw;\n    height: 100vh;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n}\n\n.webpack {\n    height: 60vh;\n}\n\n.cat {\n    margin-top: 30px;\n    margin-left: 10px;\n    height: 35vh;\n}\n\n#menucard1 {\n    font-family: 'Parisienne', cursive;\n    font-size: 1.4rem;\n    text-align: center;\n    background-color: $secondary-color;\n    height: 33vh;\n    margin: 15%;\n    margin-top: 5%;\n    margin-bottom: 0;\n    padding: 5%;\n    border-radius: 10px;\n}\n\n.menucard {\n    font-family: 'Parisienne', cursive;\n    font-size: 1.4rem;\n    text-align: center;\n    background-color: $secondary-color;\n    height: 35vh;\n    margin: 15%;\n    margin-top: 5%;\n    margin-bottom: 0;\n    padding: 5%;\n    border-radius: 10px;\n}\n\n.footer {\n    background-color: $primary-color;\n    position: fixed;\n    font-size: 0.9rem;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n    border-top: 2px solid white;\n    line-height: 6vh;\n}\n\n.footer>span {\n    color: $secondary-color;\n    font-size: 1.1rem;\n}\n\nbutton {\n    background-color: $primary-color;\n    color: $secondary-color;\n    font-family: 'Cabin', sans-serif;\n    border: 3px solid $secondary-color;\n    border-radius: 10px;\n    margin: 10px 20px 5px 10px;\n    font-size: 1.3rem;\n    width: 180px;\n    height: 50px;\n    cursor: pointer;\n\n    &:hover {\n        scale: 0.97;\n    }\n\n    &:focus {\n        outline: 0;\n    }\n}\n\na {\n    text-decoration: none;\n    color: $secondary-color;\n\n    &:hover {\n        text-decoration: none;\n        color: $secondary-color;\n    }\n\n    &:focus {\n        text-decoration: none;\n        color: $secondary-color;\n    }\n\n    &:active {\n        text-decoration: none;\n        color: $secondary-color;\n    }\n\n    &:visited {\n        text-decoration: none;\n        color: $secondary-color;\n    }\n}\n\n@media only screen and (max-width: 1200px) {\n\n    .logoText1,\n    .logoText2,\n    .logoImage2 {\n        display: none;\n    }\n}\n\n@media only screen and (max-width: 800px) {\n    .logoImage {\n        display: none;\n    }\n\n    .maincontent {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .maincontentLeft {\n        padding: 2%;\n    }\n}\n\n@media only screen and (max-width: 700px) {\n    button {\n        display: block;\n        width: 300px;\n    }\n\n    .navbar {\n        justify-content: center;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/cat.jpg":
/*!****************************!*\
  !*** ./src/assets/cat.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cat.jpg";

/***/ }),

/***/ "./src/assets/cat2.jpg":
/*!*****************************!*\
  !*** ./src/assets/cat2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cat2.jpg";

/***/ }),

/***/ "./src/assets/cat3.jpg":
/*!*****************************!*\
  !*** ./src/assets/cat3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cat3.jpg";

/***/ }),

/***/ "./src/assets/cat4.jpg":
/*!*****************************!*\
  !*** ./src/assets/cat4.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cat4.jpg";

/***/ }),

/***/ "./src/assets/cat5.png":
/*!*****************************!*\
  !*** ./src/assets/cat5.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cat5.png";

/***/ }),

/***/ "./src/assets/heart.png":
/*!******************************!*\
  !*** ./src/assets/heart.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "heart.png";

/***/ }),

/***/ "./src/assets/icon.png":
/*!*****************************!*\
  !*** ./src/assets/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon.png";

/***/ }),

/***/ "./src/assets/webpack.png":
/*!********************************!*\
  !*** ./src/assets/webpack.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "webpack.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/header.js"));
/******/ }
]);
//# sourceMappingURL=header.bundle.js.map