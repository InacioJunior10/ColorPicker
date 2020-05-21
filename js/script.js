window.addEventListener('load', start);

var inputR = 0;
var inputG = 0;
var inputB = 0;

function start() {
  document.querySelector('#slideR').addEventListener('input', rangeValue);
  document.querySelector('#slideG').addEventListener('input', rangeValue);
  document.querySelector('#slideB').addEventListener('input', rangeValue);

  setColor(0, 0, 0);
}

function rangeValue(event) {
  switch (event.target.id) {
    case 'slideR':
      inputR = event.target.value;
      document.querySelector('#textValueR').value = inputR;
      setColor(inputR, inputG, inputB);
      break;
    case 'slideG':
      inputG = event.target.value;
      document.querySelector('#textValueG').value = inputG;
      setColor(inputR, inputG, inputB);
      break;
    case 'slideB':
      inputB = event.target.value;
      document.querySelector('#textValueB').value = inputB;
      setColor(inputR, inputG, inputB);
      break;
  }
}

function setColor(r, g, b) {
  var divColor = document.querySelector('#divColor');
  var backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  divColor.style.backgroundColor = backgroundColor;
  toHexString();
}

// Converter RGB em Hexadecimal
function toHexString() {
  var textHex = document.querySelector('#hex');
  var backgroundColor = 'rgb(' + inputR + ', ' + inputG + ', ' + inputB + ')';
  textHex.value = rgb2hex(backgroundColor);
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
