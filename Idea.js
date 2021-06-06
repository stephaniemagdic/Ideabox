class Idea {
  constructor(infoTitle, infoBody) {
    this.id = Date.now();
    this.title = infoTitle;
    this.body = infoBody;
    this.star = false;
  }

  saveToStorage() {
    var ideaCard = JSON.stringify(this);
    localStorage.setItem(`${this.id}`,ideaCard);
  }

  deleteFromStorage() {
    localStorage.removeItem(`${this.id}`);
  }

  updateIdea() {
    if (this.star === true) {
      this.star = false;
    } else if (this.star === false) {
      this.star = true;
    }
      saveToStorage();
  }
};
