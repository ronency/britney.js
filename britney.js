var css = "@font-face { font-family: 2Dumb; src: local('2Dumb.ttf'), url('2Dumb.ttf'); } "+
    "@font-face { font-family: 3Dumb; src: url('3Dumb.ttf'); } "+
    "body { font-face: 2Dumb; font-family: 2Dumb; } " +
    "body h1 { font-face: 2Dumb; font-family: 3Dumb; }";

var newStyle = document.createElement('style');
newStyle.appendChild(document.createTextNode("\
@font-face {\
  font-family: '2Dumb';\
  src: local('2Dumb.ttf'), url('2Dumb.ttf') format('trueType');\
}\
@font-face {\
  font-family: '3Dumb';\
  src: local('3Dumb.ttf'), url('3Dumb.ttf') format('trueType');\
}\
body {\
  font-family: '2Dumb';\
}\
body h1 {\
  font-family: '3Dumb';\
}\
"));

document.head.appendChild(newStyle);
