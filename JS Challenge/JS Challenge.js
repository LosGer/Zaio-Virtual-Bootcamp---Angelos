var bigBox = document.getElementById("bigBox");
var blueButton = document.getElementById("Blue");
var greenButton = document.getElementById("Green");
var redButton = document.getElementById("Red");
var pTags = document.getElementById('pTags');
var redCalc = "r".charCodeAt(0) + "e".charCodeAt(0) + "d".charCodeAt(0);
var calc = document.getElementById('Calc');
var blueCalc = "b".charCodeAt(0) + "l".charCodeAt(0) + "u".charCodeAt(0) + "e".charCodeAt(0);
var greenCalc = "g".charCodeAt(0) + "r".charCodeAt(0) + "e".charCodeAt(0) + "e".charCodeAt(0) + "n".charCodeAt(0);

blueButton.onclick = function() {
              bigBox.className = "bigBoxBlue";
              pTags.innerHTML = "Hi, my name is blue";
              pTags.style.color = ("white");
              calc.innerHTML = blueCalc;
              calc.style.color = ("white");
};

greenButton.onclick = function() {
              bigBox.className = "bigBoxGreen";
              pTags.innerHTML = "Hi, my name is green";
              pTags.style.color = ("white");
              calc.innerHTML = greenCalc;
              calc.style.color = ("white");
};

redButton.onclick = function() {
              bigBox.className = "bigBoxRed"
              pTags.innerHTML = "Hi, my name is red";
              pTags.style.color = ("white");
              calc.innerHTML = redCalc;
              calc.style.color = ("white");


};

bigBox.onclick = function() {
              bigBox.className = "bigBox";
              pTags.innerHTML = "<p style='color:black'>Box that will be filled with the selected colour</p><p style='color:black'>Text will come here</p><p style='color:black'>calculation</p>"


};
