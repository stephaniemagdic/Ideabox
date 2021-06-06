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
var ideaContainerSection = document.querySelector('.idea-container');


var savedIdeas = [];
// saveIdeaBtn.disabled = false;

// starredIdeasBtn.addEventListener("click",);
saveIdeaBtn.addEventListener("click", createNewIdea);
titleInput.addEventListener("keyup", checkInputs);
bodyInput.addEventListener("keyup", checkInputs);
// favoriteBtn.addEventListener("click",);
// deleteCardBtn.addEventListener("click",);
// commentBtn.addEventListener("click",);
// starWhiteImg.addEventListener("click",);
// starRedImg.addEventListener("click",);
// xWhiteImg.addEventListener("click",);
// xRedImg.addEventListener("click",);


function checkInputs() {
  if (titleInput.value === "" || bodyInput.value === "")
   {
    disableBtn();
    return false;
  } else {
    enableBtn();
    return true;
  }
}

function enableBtn() {
  if (saveIdeaBtn.disabled === true) {
    saveIdeaBtn.disabled = false;
  }
}

function disableBtn() {
  if (saveIdeaBtn.disabled === false) {
    saveIdeaBtn.disabled = true;
  }
}

function createNewIdea() {
  if (checkInputs() === false) {
    return false;
  }
    var newIdea = new Idea(titleInput.value, bodyInput.value)

// Goal:  We need to know which id's we are accessing and storing inside
//      the local storage.  So we need some way to track those.

  //    We want to create an empty list to hold the id of each of the
  //    items we put in local storage
  //    We want to copy the id of the idea to the empty list
  //    We then want to store the idea in the local storage
  //
    savedIdeas.push(newIdea);
    newIdea.saveToStorage();
    displayIdeas();
  }

function displayIdeas() {
  for (i = 0; i < savedIdeas.length; i++) {
    ideaContainerSection.innerHTML += `<article>
      <header>
          <button id="favorite" class="favorite-button">
            <img name="star-white" src="assets/star.svg" alt="star">
            <img name="star-red" src="assets/star-active.svg" alt="star">
          </button>
          <button id="deleteCard" class="favorite-button">
            <img name="x-white" src="assets/delete.svg" alt="X">
            <img name="x-red" src="assets/delete-active.svg" alt="X">
          </button>
      </header>
      <div class="idea-body">
        <strong>${savedIdeas[i].title}</strong>
        <p>${savedIdeas[i].body}</p>
      </div>
      <footer>
        <button class="comment-button">
          <img src="assets/comment.svg" alt="comment">
          <span>Comment</span>
        </button>
      </footer>
    </article>`
  }
}




// Goal:  Is to make sure that on page reload/any point in time where
// we need the DM to be updated with the most recent info.

// We want our saved ideas array to have all the instances/ keys that are
// in our local storage.

// We want to get and parse the information that is in local storage
// We want to put that info into an array so JS can read.
// We want it to be able to show the information in a useable way.
//



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
