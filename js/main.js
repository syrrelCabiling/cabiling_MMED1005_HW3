// JavaScript Document
(() => {
console.log("Linked up");

/*let canvasSpaceGame = document.querySelector('#frame')
  rocketship = document.querySelector('#rocket_ship')
  asteroid1 = document.querySelector('#asteroid1')
  asteroid2 = document.querySelector('#asteroid2')
  asteroid3 = document.querySelector('#asteroid3')


var rocket_shipX = 0; // X position of ship
var rocket_shipY = 0;
var dest_x = 600;  //Ending Location - left
var interval = 20; //Move 2px every initialization
var canvas = context

function moveRocket() {
    //Keep on moving the image till the target is achieved
    if(x>dest_x) x = x + interval;
    if(y>dest_y) y = y + interval;
   document.getElementById("rocketship").style.left = x+'px';
  }

  function leftArrowPressed() {
              var element = document.getElementById("rocket_ship");
              element.style.left = parseInt(element.style.left) - 5 + 'px';
              }
  function rightArrowPressed() {
              var element = document.getElementById("rocket_ship");
              element.style.left = parseInt(element.style.left) + 5 + 'px';
              }

leftArrowPressed.addEventListener('keydown', moveRocket);

rightArrowPressed.addEventListener('keydown', moveRocket);

function setMousePosition(e) {
  rocket_shipX = e.clientX;
  rocket_shipY = e.clientY;
}*/

//

document.getElementById("rocket_ship").style.top = 525;
 document.getElementById("rocket_ship").style.left = 290;

document.body.onkeyup = function() {
var e = event.keyCode,
    charTop = parseInt(document.getElementById("rocket_ship").style.top),
    charLeft = parseInt(document.getElementById("rocket_ship").style.left);

    if (e == 37) { //left function
        document.getElementById("rocket_ship").style.left = (parseInt(document.getElementById("rocket_ship").style.left)) - 10 + "px";
    } else if (e == 39) { //right function
        document.getElementById("rocket_ship").style.left = (parseInt(document.getElementById("rocket_ship").style.left)) + 10 + "px";
    }

}


})();
