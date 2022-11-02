var colorArr = ["black", "red", "green", "blue", "orange", "purple"]

var text = document.getElementById("text")
var move = document.getElementById("move")

move.onclick = function() {
  var word = "light Box";
  for (var i = 0; i < colorArr.length; i++) {
    var loopColor = colorArr[i]
    if (text.classList.contains("text-color-" + loopColor)) {
      text.classList.remove("text-color-" + loopColor)
      console.log("test 1")
    }
  }
  var randomColor = "text-color-" + getRandomColor()
  text.classList.add(randomColor);
  console.log("test 2")
  if (!text.classList.contains("animation")) {
    text.classList.add("animation")
    text.innerHTML = word
  }
}




  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomColor() {
    var randomNumber = getRandomInteger(0, colorArr.length) //0,1,2,3
    return colorArr[randomNumber]
  }

  var topOne = document.getElementById("topOne");
  var number = document.getElementById("number"
  )
  topOne.onclick = function () {
    var next;
    if (number.innerHTML === '') {
      next = 1
    } else {
      next = Number(number.innerHTML) + 1
    }
    number.innerHTML = next

    //step 1 - Remove all classes background-color-*
    for (var i = 0; i < colorArr.length; i++) {
      var loopColor = colorArr[i]
      if (topOne.classList.contains("background-color-" + loopColor)) {
        topOne.classList.remove("background-color-" + loopColor)
      }
    }
    //step 2 - Add random color class
    var randomColor = "background-color-" + getRandomColor()
    topOne.classList.add(randomColor);
  }

  var topTwo = document.getElementById("topTwo");

  topTwo.onclick = function () {
    var next;
    if (numberOne.innerHTML === '') {
      next = 1
    } else {
      next = Number(numberOne.innerHTML) + 1
    }
    numberOne.innerHTML = next
    for (var i = 0; i < colorArr.length; i++) {
      var loopColor = colorArr[i]
      if (topTwo.classList.contains("background-color-" + loopColor)) {
        topTwo.classList.remove("background-color-" + loopColor)
      }
    }
    //step 2 - Add random color class
    var randomColor = "background-color-" + getRandomColor()
    topTwo.classList.add(randomColor);
  }

