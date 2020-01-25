//My goal: I want the user to be able to click a color on the color palette, then when they click on a pixel/cell, it "colors" it.
//My idea: Listen to when the user clicks on a color in the palette, update a variable like 'currentColor'. Then, listen for when the user clicks on a pixel/cell, and change that element's background to the currentColor value.

//First step: I need to create eventListener's for every pixel/cell. There might be 25-50 (or more) of them, so I will attach an eventListener to each one within a for loop- (as opposed to doing each one by hand).
//I want to make sure I can click on a specific pixel/cell and ensure it's not affecting any other pixel/cell. I can check this by making an alert containing the element's ID.

//Second step: I want to create color palette functionality. When the user clicks on a color in the color palette, update the value of currentColor to the selected color's value.
//Idea 1 (not used): Use the already-made for-loop so that it creates an addEventListener for both the palette colors AND art board pixels. I can dictate what happens by creating an if statement (if the clicked element belongs to the palette or art space)
//Idea 2 (used): Create a new for-loop to cycle through the color palette items, and give .addEventListener to each one. When the user clicks a color, change currentColor to the chosen color.
   //To give currentColor a new value, I need to find out what color to give it. My options are:
      //1. update currentColor with the background color of the clicked element. (RGB or hex code for example)
      //2. I already have classes like ("color red") for my color palette items. I can strip away the classes other than the color word itself ("red" in this case), and use that.
      //3. I can add an ID containing the color name (or hex) to each color palette item. The value of currentColor will update to the value of the ID of the element clicked.
      //Chose #1. Seems the simplest and safest.


//Create a variable containing all the "Pixels", or cells to be drawn on
var allPixels = document.getElementsByClassName("space");

//Create variable to contain the user's current selected color.
var currentColor = "";

//For each pixel/cell,
for (i = 0; i < allPixels.length; i++) {
   //Listen for if the user presses their mouse down on a Pixel, color it
   allPixels[i].addEventListener("mousedown", function() {
      this.style.backgroundColor = currentColor;
   })
   //If the user moves their cursor over the Pixel,
   allPixels[i].addEventListener("mousemove", function() {
      //If the user has their mouse button down,
      if(drawing == 1) {
         //Style the Pixel's background color to the value of currentColor
         this.style.backgroundColor = currentColor;
      }
   })
}
//Create an array containing all of the elements within the palette container
var allColors = document.getElementsByClassName("color");

//For each element in the palette container
for (i = 0; i < allColors.length; i++) {
   //List for if the user mouse-downs on one of the elements in the palette container,
   allColors[i].addEventListener("mousedown", function() {
      //Create variable containing this element's background color
      var newColor = getComputedStyle(this, null).backgroundColor;
      //Update currentColor value
      currentColor = newColor;
      //Change color of the cursor element
      cursor.style.backgroundColor = currentColor;
   })
}
//Third Step: I notice that the 'pixel's only change on a CLICK, when I want it to listen ONLY if the user has their left MOUSE BUTTON DOWN. replace "click" with "mousedown" for the necessarily addEventListener functions.
   //I noticed that changing it from "click" to "mousedown", it didn't seem to work. I still have it set to alerting the user on mouse click, so I'll turn that off to see if it works.
   //Still doesn't work as I intended. It's checking if I press mousedown- when I want to check if I already /have/ my mousedown as I enter the element.
   //I found mousemove, which I will replace mousedown with.
   //It works only as it reads "on mouse movement over element". I only want it to listen if: user moves mouse over element WHILE mouse button is down.
   //After looking through different mouse events, none of them seem to do what I want, but I can combine mousedown and mousemove to do this.
//Idea: Create variable 'drawing'. If the user presses the mouse button (mousedown) down anywhere on the drawing board, set 'drawing' to 1. If the user is not clicking (mouseup), set 'drawing' to 0.
   //This way, it's possible to check if the user mouses over a Pixel while their mouse button is held down, in order to color it.
   //Link below contains code doing what I want
   //https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event

//Create a variable containing the board element
var board = document.getElementsByClassName("board")[0];
//Set the default "drawing" state to 0, or false
var drawing = 0;

//Create variable with the element that will follow the cursor containing the current color
var cursor = document.getElementById("cursor");

//Listen if the user presses down on the board
board.addEventListener("mousedown", function(event) {
   //If the user presses down on the board, set the "drawing" state to 1
   drawing = 1;
});
//If the user lets go of left-mouse-button on the board, set the drawing state to 0
board.addEventListener("mouseup", function() {
   drawing = 0;
});

//Listen to see if there's any mouse movement on the page, and when there is, move the cursor element's location to the user's cursor location.
document.addEventListener("mousemove", function() {
   //-15 to offset the cursor element to be positioned above and to the left of the users cursor
   cursor.style.left = (event.clientX-15)+"px";
   cursor.style.top = (event.clientY-15)+"px";
});
