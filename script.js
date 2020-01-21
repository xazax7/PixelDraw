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

//The user's current selected color. Set to red until palette functionality is set up.
var currentColor = "red";

//For each pixel/cell,
for (i = 0; i < allPixels.length; i++) {
   //Listen for when the user clicks on it,
   allPixels[i].addEventListener("click", function() {
      //Alert the user of the clicked pixel's ID
      alert(this.id);
      //Style this element's background color to the user's current color
      this.style.backgroundColor = currentColor;
   })
}

var allColors = document.getElementsByClassName("color");

for (i = 0; i < allColors.length; i++) {
   allColors[i].addEventListener("click", function() {
      //Find the background color of clicked element.
      //DOES NOT WORK.
      console.log(this.style.backgroundColor);
      //Googled "return background color of element javascript". Find other's are not able to do it this way. One stackoverflow user says "style only gets inline styles. Have a look at getComputedStyle". 
      //getComputedStyle retrieves the current color -after- CSS stylings from multiple sources
      console.log(getComputedStyle(this, null).getPropertyValue("background-color"));
      //Found out I can shorten it by removing .getPropertyValue() and replacing with .backgroundColor. After reading about it, not entirely sure how they are different, perhaps .getPropertyValue is more precise in some cases?
      console.log(getComputedStyle(this, null).backgroundColor);
   })
}