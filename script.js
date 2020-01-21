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


//Create a variable containing all the "pixels", or cells to draw on
var allPixels = document.getElementsByClassName("space");

//The user's current selected color.
var currentColor = "";

//For each pixel/cell,
for (i = 0; i < allPixels.length; i++) {
   //Listen for when the user clicks on it,
   allPixels[i].addEventListener("mousemove", function() {
      //Alert the user of the clicked pixel's ID
      //alert(this.id);
      //If the user has their mouse button down,
      if(drawing == 1) {
         //Style this element's background color to the user's current color
         this.style.backgroundColor = currentColor;
      }
   })
}

var allColors = document.getElementsByClassName("color");

for (i = 0; i < allColors.length; i++) {
   allColors[i].addEventListener("mousedown", function() {
      //Find the background color of clicked element.
      //DOES NOT WORK.
      //console.log(this.style.backgroundColor);
      //Googled "return background color of element javascript". Find other coders are not able to do it this way. One stackoverflow user says "style only gets inline styles. Have a look at getComputedStyle". 
      //getComputedStyle retrieves the current color -after- CSS stylings from multiple sources
      //console.log(getComputedStyle(this, null).getPropertyValue("background-color"));
      //Found out I can shorten it by removing .getPropertyValue() and replacing with .backgroundColor. After reading about it, not entirely sure how they are different, perhaps .getPropertyValue is more precise in some cases?
      //console.log(getComputedStyle(this, null).backgroundColor);
      //Create variable containing this element's background color
      var newColor = getComputedStyle(this, null).backgroundColor;
      //Update currentColor value
      currentColor = newColor;
      //Check to see if currentColor is updated
      console.log(currentColor);
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

var board = document.getElementsByClassName("board")[0];
var drawing = 0;
board.addEventListener("mousedown", function() {
   drawing = 1;
})
board.addEventListener("mouseup", function() {
   drawing = 0;
})

   //Now I need to check if (drawing == 1) when I mouseover the pixel/cell. Updated Pixel/cell eventListener