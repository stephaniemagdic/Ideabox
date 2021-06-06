var starredIdeasBtn = document.querySelector('.show-starred-ideas');
var saveIdeaBtn = document.querySelector('.primary');
// var favoriteBtn = document.getElementById('favorite');
var deleteCardBtn = document.getElementById('deleteCard');
// var commentBtn = document.querySelector('.comment-button');
// var starWhiteImg = document.getElementByName('star-white');
// var starRedImg = document.getElementByName('star-red');
// var xWhiteImg = document.getElementByName('x-white');
var xRedImg = document.getElementById('x-red');
var titleInput = document.getElementById('titleInput');
var bodyInput = document.getElementById('bodyInput');
var ideaContainerSection = document.querySelector('.idea-container');


var savedIdeas = [];

// window.addEventListener("load", getLocalStorage);
//
// function getLocalStorage() {
// for(var i =0; i < localStorage.length; i++) {
//   console.log(localStorage.getItem(localStorage.key(i)))
// //   savedIdeas.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//  }
//}


// saveIdeaBtn.disabled = false;

// starredIdeasBtn.addEventListener("click",);
saveIdeaBtn.addEventListener("click", createNewIdea);
titleInput.addEventListener("keyup", checkInputs);
bodyInput.addEventListener("keyup", checkInputs);
// favoriteBtn.addEventListener("click",);
// deleteCardBtn.addEventListener("click",);
// commentBtn.addEventListener("click",);
// starWhiteImg.addEventListener("click",);

// e.target.id === "star-white" ||
ideaContainerSection.addEventListener("click", function(e) {
  if(e.target.id === "starWhite" || e.target.id === "starRed") {
    addToFavorite(e);
  }
});

ideaContainerSection.addEventListener("click", function(e) {
  if(e.target.id === "x-red") {
    deleteIdea(e)
  }
  });

starredIdeasBtn.addEventListener("click", function() {
  if (starredIdeasBtn.innerText === "Show Starred Ideas") {
    displayFavorites();
  } else if(starredIdeasBtn.innerText === "Show All Ideas") {
    displayIdeas();
  }
});

  function addToFavorite(e) {
  for(var i = 0; i < savedIdeas.length; i ++) {
      if(`${e.target.closest("article").id}` === `${savedIdeas[i].id}`) {
        if (savedIdeas[i].star === true) {
          document.getElementById(e.target.closest("article").id).classList.remove("starred");
        } else {
          document.getElementById(e.target.closest("article").id).classList.add("starred");
        }
          savedIdeas[i].updateIdea();
      }
  }
}

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
    savedIdeas.push(newIdea);
    newIdea.saveToStorage();
    displayIdeas();
  }

function displayIdeas() {
  titleInput.value = null;
  bodyInput.value = null;
  starredIdeasBtn.innerText = "Show Starred Ideas";

  ideaContainerSection.innerHTML = "";

  console.log("savedIdeas", savedIdeas);

  for (i = 0; i < savedIdeas.length; i++) {
    if (savedIdeas[i].star === true) {
      ideaContainerSection.innerHTML +=`<article id=${savedIdeas[i].id} class="starred">
        <header>
            <button id="favorite" class="favorite-button">
              <img name="star-white" id="starWhite" src="assets/star.svg" alt="star">
              <img name="star-red" id="starRed" src="assets/star-active.svg" alt="star">
            </button>
            <button id="deleteCard" class="delete-button">
              <img name="x-white" src="assets/delete.svg" alt="X">
              <img name="x-red" id="x-red" src="assets/delete-active.svg" alt="X">
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
    } else if (savedIdeas[i].star === false) {
      ideaContainerSection.innerHTML += `<article id=${savedIdeas[i].id}>
        <header>
            <button id="favorite" class="favorite-button">
              <img name="star-white" id="starWhite" src="assets/star.svg" alt="star">
              <img name="star-red" id="starRed" src="assets/star-active.svg" alt="star">
            </button>
            <button id="deleteCard" class="delete-button">
              <img name="x-white" src="assets/delete.svg" alt="X">
              <img name="x-red" id="x-red" src="assets/delete-active.svg" alt="X">
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
}

function displayFavorites() {
  var filteredFavorites = savedIdeas.filter(idea => idea.star === true);
  ideaContainerSection.innerHTML = "";
  for (i = 0; i < filteredFavorites.length; i++) {
    ideaContainerSection.innerHTML += `<article id=${filteredFavorites[i].id} class="starred">
      <header>
          <button id="favorite" class="favorite-button">
            <img name="star-white" id="starWhite" src="assets/star.svg" alt="star">
            <img name="star-red" id="starRed" src="assets/star-active.svg" alt="star">
          </button>
          <button id="deleteCard" class="delete-button">
            <img name="x-white" src="assets/delete.svg" alt="X">
            <img name="x-red" id="x-red" src="assets/delete-active.svg" alt="X">
          </button>
      </header>
      <div class="idea-body">
        <strong>${filteredFavorites[i].title}</strong>
        <p>${filteredFavorites[i].body}</p>
      </div>
      <footer>
        <button class="comment-button">
          <img src="assets/comment.svg" alt="comment">
          <span>Comment</span>
        </button>
      </footer>
    </article>`
  }
  starredIdeasBtn.innerText = "Show All Ideas";

}



function deleteIdea(e) {
  for(var i = 0; i < savedIdeas.length; i ++) {
    if(`${e.target.closest("article").id}` === `${savedIdeas[i].id}`) {
      savedIdeas[i].deleteFromStorage();
      savedIdeas.splice(i, 1);
    }
  }
  displayIdeas();

}
