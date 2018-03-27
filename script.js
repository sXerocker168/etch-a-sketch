const titleDensity = 36;
let pixelDensity = 16;
let pixelPrompt = 1;
let sketchpad = document.querySelector('#sketchpad');
let title = document.querySelector('#title');
let titleResetArea = document.querySelector('#title-button');
let titleReset = document.querySelector('#title-reset');
let color = 'black';

window.onload = function() {
  pixelChange();
  titleChange();
}

function pixelChange() {
  for (let i = 0; i < (pixelDensity * pixelDensity); i++) {
    let sketchpadPixel = document.createElement('div');
    sketchpadPixel.classList.add('sketchpad-pixel');
    sketchpad.appendChild(sketchpadPixel);

    sketchpadPixel.style.cssText = 'width: calc(100% / ' + pixelDensity + '); height: calc(100% / ' + pixelDensity + ')';
  }
  let sketchpadPixel = document.querySelectorAll('.sketchpad-pixel');
  let pixelColor = blackPixel();
  
  sketchpadPixel.forEach(square => {
    square.addEventListener('mouseenter', function(e) {
      if (color == 'rainbow') {
        pixelColor = rainbowPixel();
      } else if (color == 'black') {
        pixelColor = blackPixel();
      } else if (color == 'red') {
        pixelColor = redPixel();
      } else if (color == 'blue') {
        pixelColor = bluePixel(); 
      } else if (color == 'green') {
        pixelColor = greenPixel();
      } else {
        pixelColor = greyPixel();
      }
      e.target.style.backgroundColor = pixelColor;
    });
  });
}

//Title container creation function
function titleChange() {
  for (let i = 0; i < (titleDensity * 5); i++) {
    let titlePixel = document.createElement('div');
    titlePixel.classList.add('title-pixel');
    title.appendChild(titlePixel);
  }
  let titlePixelSelector = document.querySelectorAll('.title-pixel');
  
  let arr = [0,1,2,4,6,8,9,10,12,13,14,16,17,18,20,22,25,26,27,29,30,31,33,34,36,40,42,44,49,52,56,58,61,63,65,67,69,71,72,73,74,76,77,80,81,82,85,88,92,93,94,97,98,99,101,102,103,105,107,110,112,114,116,121,124,128,130,133,137,139,141,143,144,145,146,148,150,152,153,154,157,160,161,162,164,166,169,173,175,177,178];
  
  for (let i = 0; i < arr.length; i++) {
    j = arr[i];
    titlePixelSelector[j].style.backgroundColor = 'black';
  }

  titlePixelSelector.forEach(square => {
    square.addEventListener('mouseenter', function(e) {
      e.target.classList.add('hidden');
    });
  });

  titleReset.addEventListener('click', function(e) {
    titlePixelSelector.forEach(square => {
      square.classList.remove('hidden');
    });
  });
}

titleResetArea.addEventListener('mouseenter', function(e) {
  titleReset.classList.remove('hidden');
});


titleResetArea.addEventListener('mouseleave', function(e) {
  titleReset.classList.add('hidden');
});

let canvasSize = document.getElementById('canvas-size');
canvasSize.addEventListener('click', function(e) {
  pixelPrompt = prompt("Please specify # of pixels desired horizontally and vertically. (Choose 1-100)");

  if (pixelPrompt > 100 || pixelPrompt < 1) {
    alert("Must be between 1-100.");
    } else {
      pixelDensity = pixelPrompt;
      while (sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.firstChild);
      }
      pixelChange();
  }
});

function redPixel() {
  return 'rgb(255,0,0)';
}

function bluePixel() {
  return 'rgb(0,0,255)';
}

function greenPixel() {
  return 'rgb(0,225,0)';
}

function blackPixel() {
  return 'black';
}

function rainbowPixel() {
  function rgbRandom() {
    return Math.floor(Math.random()*256);
  }
  return 'rgb(' + rgbRandom() + ', ' + rgbRandom() + ', ' + rgbRandom() + ')'
}

function greyPixel() {
  return '#e6e6e6';
}

let blackPixelButton = document.getElementById('black-pixel');
blackPixelButton.addEventListener('click', function(e) {
  color = 'black';
});

let rainbowPixelButton = document.getElementById('rainbow');
rainbowPixelButton.addEventListener('click', function(e) {
  color = 'rainbow';
});


let redPixelButton = document.getElementById('red-pixel');
redPixelButton.addEventListener('click', function(e) {
  color = 'red';
});

let bluePixelButton = document.getElementById('blue-pixel');
bluePixelButton.addEventListener('click', function(e) {
  color = 'blue';
});

let greenPixelButton = document.getElementById('green-pixel');
greenPixelButton.addEventListener('click', function(e) {
  color = 'green';
});

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function(e) {
  let sketchpadPixel = document.querySelectorAll('.sketchpad-pixel');
  sketchpadPixel.forEach(square => {
    square.style.backgroundColor = greyPixel();
  });
  color = 'grey';
});
