
var style = document.createElement('style');
style.appendChild(document.createTextNode("\
@font-face {\
  font-family: '2Dumb';\
  src: local('2Dumb.ttf'), url('2Dumb.ttf') format('trueType');\
}\
@font-face {\
  font-family: '3Dumb';\
  src: local('3Dumb.ttf'), url('3Dumb.ttf') format('trueType');\
}\
body, body * {\
  font-family: '2Dumb' !important;\
}\
body h1, body h2, body h3, body h4, body h5, body h6 {\
  font-family: '3Dumb' !important;\
}\
xbody:after{\
  content: '';\
  background: url('wig.png') no-repeat center top; background-size: 100%;\
  position: fixed; top:0; bottom:0; right: 0; left:0;\
}\
body{\
  background: url('wig.webp') no-repeat center top; background-size: 80% 100%;\
}\
"));

document.head.appendChild(style);
