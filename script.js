//My goal: I want the user to be able to click a color on the color palette, then when they click on a pixel/cell, it "colors" it.
//My idea: Listen to when the user clicks on a color in the palette, update a variable like 'currentColor'. Then, listen for when the user clicks on a pixel/cell, and change that element's background to the currentColor value.

//First step: I need to create eventListener's for every pixel/cell. There might be 25-50 (or more) of them, so I will attach an eventListener to each one within a for loop- (as opposed to doing each one by hand).
//I want to make sure I can click on a specific pixel/cell and ensure it's not affecting any other pixel/cell. I can check this by making an alert containing the element's ID.


//Create a variable containing all the "pixels", or cells to draw on
var allPixels = document.getElementsByClassName("space");
//For each pixel/cell,
for (i = 0; i < allPixels.length; i++) {
   //Listen for when the user clicks on it,
   allPixels[i].addEventListener("click", function() {
      //Alert the user of the clicked pixel's ID
      alert(this.id);
   })
}