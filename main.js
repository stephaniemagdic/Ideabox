// -----------------------------Global Variables -----------------------------//
const starredIdeasBtn = document.querySelector('.show-starred-ideas');
const saveIdeaBtn = document.querySelector('.primary');
const titleInput = document.getElementById('titleInput');
const bodyInput = document.getElementById('bodyInput');
const ideaContainerSection = document.querySelector('.idea-container');
const searchBar = document.querySelector('.search');
let savedIdeas = [];
// ---------------------------Event Listeners --------------------------------//
window.addEventListener('load', () => getLocalStorage());
saveIdeaBtn.addEventListener('click', () => createNewIdea());
titleInput.addEventListener('keyup', () => checkInputs());
bodyInput.addEventListener('keyup', () => checkInputs());
ideaContainerSection.addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'starWhite':
    case 'starRed':
      addToFavorite(e);
      break;
    case 'x-red':
      deleteIdea(e);
      break;
  }
});

starredIdeasBtn.addEventListener('click', () => {
  switch (checkPageView()) {
    case 'favorites':
      displayFavorites();
      break;
    case 'all':
      displayIdeas();
      break;
  }
});

searchBar.addEventListener('keyup', function(e) {
  createFilteredList(e);
});

// ---------------------------------Functions --------------------------------//
const getLocalStorage = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const parsedInfo = (JSON.parse(localStorage.getItem(localStorage.key(i))));
    const {
      title,
      body,
      id,
      star
    } = parsedInfo;
    savedIdeas.push(new Idea(title, body, id, star));
  }
  displayIdeas();
} 

const checkPageView = () => {
  if (starredIdeasBtn.innerText === 'Show Starred Ideas') {
    return 'favorites';
  } else if (starredIdeasBtn.innerText === 'Show All Ideas') {
    return 'all';
  }
}

const createFilteredList = (e) => {
  const searchIdeaCards = e.target.value.toLowerCase();
  if (checkPageView() === 'favorites') {
    let filteredIdeas = savedIdeas.filter((idea) => {
      return (
        idea.title.toLowerCase().includes(searchIdeaCards) ||
        idea.body.toLowerCase().includes(searchIdeaCards)
      )
    });
    displayFilteredIdeas(filteredIdeas);
  } else {
    const filteredFavorites = savedIdeas.filter(idea => idea.star === true);
    const starredIdeas = filteredFavorites.filter((idea) => {
      return (
        idea.title.toLowerCase().includes(searchIdeaCards) || 
        idea.body.toLowerCase().includes(searchIdeaCards)
      )
    });
    displayFilteredIdeas(starredIdeas);
  }
}

const checkInputs = () => {
  if (!titleInput.value.trim().length || !bodyInput.value.trim().length) {
    disableBtn();
    return false;
  } else {
    enableBtn();
    return true;
  }
}

const enableBtn = () => {
  if (saveIdeaBtn.disabled === true) {
    saveIdeaBtn.disabled = false;
  }
}

const disableBtn = () => {
  if (saveIdeaBtn.disabled === false) {
    saveIdeaBtn.disabled = true;
  }
}

const createNewIdea = () => {
  if (checkInputs() === false) {
    return false;
  }
  const newIdea = new Idea(titleInput.value, bodyInput.value)
  savedIdeas.push(newIdea);
  newIdea.saveToStorage();
  displayIdeas();
}

const createHTML = (ideaList) => {
  ideaContainerSection.innerHTML = "";
  for (let i = 0; i < ideaList.length; i++) {
    if (ideaList[i].star === true) {
      ideaContainerSection.innerHTML +=`
      <article id=${ideaList[i].id} class="starred">
        <header>
            <button id="favorite" class="favorite-button">
              <img name="star-white" id="starWhite" 
              src="assets/star.svg" alt="star">
              <img name="star-red" id="starRed" 
              src="assets/star-active.svg" alt="star">
            </button>
            <button id="deleteCard" class="delete-button">
              <img name="x-white" src="assets/delete.svg" alt="X">
              <img name="x-red" id="x-red" 
              src="assets/delete-active.svg" alt="X">
            </button>
        </header>
        <div class="idea-body">
          <strong>${ideaList[i].title}</strong>
          <p>${ideaList[i].body}</p>
        </div>
        <footer>
          <button class="comment-button">
            <img src="assets/comment.svg" alt="comment">
            <span>Comment</span>
          </button>
        </footer>
      </article>`
    } else if (ideaList[i].star === false) {
      ideaContainerSection.innerHTML += 
    `<article id=${ideaList[i].id}>
      <header>
          <button id="favorite" class="favorite-button">
            <img name="star-white" id="starWhite" 
            src="assets/star.svg" alt="star">
            <img name="star-red" id="starRed" 
            src="assets/star-active.svg" alt="star">
          </button>
          <button id="deleteCard" class="delete-button">
            <img name="x-white" src="assets/delete.svg" alt="X">
            <img name="x-red" id="x-red" src="assets/delete-active.svg" alt="X">
          </button>
      </header>
      <div class="idea-body">
        <strong>${ideaList[i].title}</strong>
        <p>${ideaList[i].body}</p>
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

const displayIdeas = () => {
  searchBar.value = null;
  titleInput.value = null;
  bodyInput.value = null;
  starredIdeasBtn.innerText = 'Show Starred Ideas';
  createHTML(savedIdeas);
}

const displayFilteredIdeas = filteredIdeaList => createHTML(filteredIdeaList);

const displayFavorites = () => {
  searchBar.value = null;
  createHTML(savedIdeas.filter(idea => idea.star));
  starredIdeasBtn.innerText = 'Show All Ideas';
}

const addToFavorite = (e) => {
  savedIdeas.forEach((idea) => {
    if (`${e.target.closest('article').id}` === `${idea.id}`) {
      if (!idea.star) {
        document.getElementById(e.target.closest("article").id)
          .classList.remove('starred');
      } else {
        document.getElementById(e.target.closest("article").id)
          .classList.add("starred");
      }
      idea.toggleStar();
    }
  });
  switch (checkPageView()) {
    case 'favorites':
      displayIdeas();
      break;
    case 'all':
      displayFavorites();
      break;
  }
}

const deleteIdea = (e) =>  {
  for (let i = 0; i < savedIdeas.length; i ++) {
    if (`${e.target.closest('article').id}` === `${savedIdeas[i].id}`) {
      savedIdeas[i].deleteFromStorage();
      savedIdeas.splice(i, 1);
    }
  }
  switch (checkPageView()) {
  case 'favorites':
    displayIdeas();
    break;
  case 'all':
    displayFavorites();
    break;
  }
}


