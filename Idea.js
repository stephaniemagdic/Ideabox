class Idea {
  constructor(infoTitle, infoBody) {
    this.id = Date.now();
    this.title = infoTitle;
    this.body = infoBody;
    this.star = false;
  }
  //
  // 1-when the user click(addEventListener) the button SAVE , we have to instanciate
  // the information that we are receiving from the user input.
  // 2-from the user imput ( argument to the instance) the info will go to the contructor
  // and will create a card,
  // 3-this card ( an object with 4 key:value pair) will be added to the local storage (array-DataModel)/push to the array.
  // 4- than we will update(reassign a key to the updated array) the array of ideas.
  // 5- one method will pick up the object that was just created -
  // from the contructor( instance ) that comes as a string of keys and values that will be transformed into
  // and object/ JSON.parse /and than we can put ( push) it into the array of saved cards.

  saveToStorage() {



  }

  deleteFromStorage() {
    // -will delete the card from the storage/
  }

  updateIdea() {
    // -will pick up the property of star and update the ideaCard

  }
};


module.exports = Idea;
// saveToStorage (should only have one job which is to save the instance to storage)
// deleteFromStorage
// updateIdea
