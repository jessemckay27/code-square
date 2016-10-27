function encoder(inputString) {
  var rootLength = Math.sqrt(inputString.length);
  var rootLengthDec = rootLength % 1;
  rootLength -= rootLengthDec;
  var gridDimensions = getDimensions(rootLengthDec, rootLength);
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
     $("output").text(encoder($("#input").val()));
  });
});
