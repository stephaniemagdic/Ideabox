class Idea {
  constructor(infoTitle, infoBody, infoId, infoStar) {
    this.id = infoId || Date.now();
    this.title = infoTitle;
    this.body = infoBody;
    this.star = infoStar || false;
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

    this.saveToStorage();
  }
};
