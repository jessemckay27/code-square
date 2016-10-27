function encoder(inputString) {
  var inputStringNoSpaces = inputString.split(" ").join("");
  var inputArrayNoSpaces = inputStringNoSpaces.split("");
  var rootLength = Math.sqrt(inputStringNoSpaces.length);
  var rootLengthDec = rootLength % 1;
  rootLength -= rootLengthDec;
  var gridDimensions = getDimensions(rootLengthDec, rootLength);
  var filledGrid = fillGrid(gridDimensions, inputArrayNoSpaces);
  return filledGrid;
}

function fillGrid(gridDimensions, inputArrayNoSpaces) {
  var filledArray = [];
  for (y = 0; y < gridDimensions[1]; y++) {
    filledArray.push([]);
    for (x = 0; x < gridDimensions[0]; x++) {
      filledArray[y].push(inputArrayNoSpaces[0]);
      inputArrayNoSpaces.shift();
    }
  }
  return filledArray;
}

function getDimensions(rootLengthDec, rootLength) {
  var xLength;
  var yLength;
  if (rootLengthDec === 0) {
    xLength = rootLength;
    yLength = rootLength;
  } else if (rootLengthDec < .5) {
    xLength = rootLength + 1;
    yLength = rootLength;
  } else {
    xLength = rootLength + 1;
    yLength = rootLength + 1;
  };
  return [xLength, yLength];
}





$(document).ready(function() {
  $("form").submit(function(event) {
     event.preventDefault();
     $("#output").text(encoder($("#input").val()));
  });
});
