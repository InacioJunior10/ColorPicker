window.addEventListener('load', start);

var inputR = null;
var inputG = null;
var inputB = null;

var slideR = null;
var slideG = null;
var slideB = null;

function start() {
  slideR = document.querySelector('#slideR');
  slideG = document.querySelector('#slideG');
  slideB = document.querySelector('#slideB');

  slideR.addEventListener('input', setRed);
  slideG.addEventListener('input', setGreen);
  slideB.addEventListener('input', setBlue);
  setDefaultColor();
}

function setDefaultColor() {
  inputR = 0;
  inputG = 0;
  inputB = 0;

  var slideR = document.querySelector('#slideR');
  var slideG = document.querySelector('#slideG');
  var slideB = document.querySelector('#slideB');
  slideR.value = inputR;
  slideG.value = inputG;
  slideB.value = inputB;

  var textR = document.querySelector('#textValueR');
  var textG = document.querySelector('#textValueG');
  var textB = document.querySelector('#textValueB');
  textR.value = slideR.value;
  textG.value = slideG.value;
  textB.value = slideB.value;

  setColor();
}

function setRed(event) {
  var value = event.target.value;
  inputR = value;
  var textR = document.querySelector('#textValueR');
  textR.value = value;

  setColor();
}

function setGreen(event) {
  var value = event.target.value;
  inputG = value;
  var textG = document.querySelector('#textValueG');
  textG.value = value;

  setColor();
}

function setBlue(event) {
  var value = event.target.value;
  inputB = value;
  var textB = document.querySelector('#textValueB');
  textB.value = value;

  setColor();
}

function setColor() {
  var divColor = document.querySelector('#divColor');
  var backgroundColor = 'rgb(' + inputR + ', ' + inputG + ', ' + inputB + ')';
  divColor.style.backgroundColor = backgroundColor;
  toHexString();
}

function toHexString() {
  // var r = toHex(inputR);
  // var g = toHex(inputG);
  // var b = toHex(inputB);

  // var textHex = document.querySelector('#hex');
  // textHex.value = '#' + r + g + b;

  var textHex = document.querySelector('#hex');
  var backgroundColor = 'rgb(' + inputR + ', ' + inputG + ', ' + inputB + ')';
  textHex.value = rgb2hex(backgroundColor);
}

function toHex(n) {
  var hex = n.toString(16);
  while (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
}

function rgb2hex(rgb) {
  rgb = rgb.match(
    /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
  );
  return rgb && rgb.length === 4
    ? '#' +
        ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
    : '';
}
