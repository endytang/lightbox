var colorArr = ["black" , "red" , "green" , "blue", "orange", "purple"]

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function getRandomColor() {
  var randomNumber = getRandomInteger(0,colorArr.length) //0,1,2,3
  return colorArr[randomNumber]
}


var blueColor = document.getElementsByClassName("background-color-blue")
var greenColor = document.getElementsByClassName("background-color-green")
var blackColor = document.getElementsByClassName("background-color-black")


var gridButtons = document.getElementsByClassName("grid-button")

var topOne = document.getElementById("topOne");
var number = document.getElementById("number"
)
topOne.onclick = function(){
  var next;
  if (number.innerHTML === '') {
    next = 0
  } else {
    next = Number(number.innerHTML) + 1
  }
  number.innerHTML = next

  //step 1 - Remove all classes background-color-*
 for (var i =0; i < colorArr.length; i++) {
   var loopColor = colorArr[i]
   if(topOne.classList.contains("background-color-" + loopColor)){
     topOne.classList.remove("background-color-" + loopColor)
   }
 }

  //step 2 - Add random color class
  var randomColor = "background-color-" + getRandomColor()
  topOne.classList.add(randomColor) ;
}

var topTwo = document.getElementById("topTwo");

topTwo.onclick = function() {
  var next;
  if (numberOne.innerHTML === '') {
    next = 0
  } else {
    next = Number(numberOne.innerHTML) + 1
  }
  numberOne.innerHTML = next
  if (topTwo.classList.contains("background-color-green")) {
    console.log("check 1")
    topTwo.classList.add("background-color-red")
    topTwo.classList.remove("background-color-green")
    return ;
  }

  if (topTwo.classList.contains("background-color-red")) {
    console.log("check 2")
    topTwo.classList.add("background-color-black")
    topTwo.classList.remove("background-color-red")
    return;
  }

  if (topTwo.classList.contains("background-color-black")) {
    console.log("check 3")
    topTwo.classList.add("background-color-blue")
    topTwo.classList.remove("background-color-black")
    return;
  }

  if (topTwo.classList.contains("background-color-blue")) {
    console.log("check 4")
    topTwo.classList.add("background-color-green")
    topTwo.classList.remove("background-color-blue")
    return;
  }

  topTwo.classList.add("background-color-green")

}

