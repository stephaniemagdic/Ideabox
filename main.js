// var starredIdeasBtn = document.querySelector('.show-starred-ideas');
var saveIdeaBtn = document.querySelector('.primary');
// var favoriteBtn = document.getElementById('favorite');
// var deleteCardBtn = document.getElementById('deleteCard');
// var commentBtn = document.querySelector('.comment-button');
// var starWhiteImg = document.getElementByName('star-white');
// var starRedImg = document.getElementByName('star-red');
// var xWhiteImg = document.getElementByName('x-white');
// var xRedImg = document.getElementByName('x-red');
var titleInput = document.getElementById('titleInput');
var bodyInput = document.getElementById('bodyInput');
console.log(titleInput);
console.log(bodyInput);

var savedIdeas =[];
// saveIdeaBtn.disabled = false;

// starredIdeasBtn.addEventListener("click",);
saveIdeaBtn.addEventListener("click", createNewIdea);
// favoriteBtn.addEventListener("click", function());
// deleteCardBtn.addEventListener("click", function());
// commentBtn.addEventListener("click", function());
// starWhiteImg.addEventListener("click", function());
// starRedImg.addEventListener("click", function());
// xWhiteImg.addEventListener("click", function());
// xRedImg.addEventListener("click", function());



function createNewIdea() {
  var newTitleInput = titleInput.value;
  var newBodyInput = bodyInput.value;
  var newIdea = new Idea(newTitleInput, newBodyInput)
  console.log(newIdea);
}

//Goal: When both input fields have a value, allow user to click the save button
//     and add the new new idea card to the idea container section.

//  The save button should start out as disabled.  If title and body have text
//  inside, disable and mark false, else button.disable assigned to true.  Pull the value from both the
//  title and the body inputs.  If both fields have a value (not undefined), then
//  change the save button attribute of disabled to false.

//  Add innerHTML in a dynamic form with interpolation to add the new idea cards.
//  To look into the favorite use .filter method inside of a global variable
//  use the same function that has innerHTML to add cards to page (show idea card fcn).
//  We need to save user edited data to local storage before the page reloads.
//  Set the saved ideas equal to a fcn that goes and grabs the key that
//  gets the array from local storage and display.









// var newIdeaCard = new Idea(parameters:infoTitle, infoBody);
