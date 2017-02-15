
var style = document.createElement('style');
style.appendChild(document.createTextNode("\
@font-face {\
  font-family: '2Dumb';\
  src: local('2Dumb.ttf'), url('https://github.com/ronency/britney.js/raw/master/2Dumb.ttf') format('trueType');\
}\
@font-face {\
  font-family: '3Dumb';\
  src: local('3Dumb.ttf'), url('https://github.com/ronency/britney.js/raw/master/3Dumb.ttf') format('trueType');\
}\
body, body * {\
  font-family: '2Dumb' !important;\
}\
body h1, body h2, body h3, body h4, body h5, body h6 {\
  font-family: '3Dumb' !important;\
}\
body{\
  background: url('https://raw.githubusercontent.com/ronency/britney.js/master/wig.png') no-repeat center top; background-size: 80% 100%;\
}\
"));

document.head.appendChild(style);
