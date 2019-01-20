const cards = document.querySelectorAll ('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle('flip');

    if(!hasFlippedCard) {
      //first click
      hasFlippedCard = true;
      firstCard = this;
    } else {
      //second click
      hasFlippedCard = false;
      secondCard = this;
      // check if the cards match
      if (firstCard.dataset.framework === secondCard.dataset.framework) {
        // if the cards match
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
      }else{
        //if cards dont match, set a delay before flipping back
        setTimeout(() => {                              firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      },1500);
    }
  }
};

cards.forEach(card => card.addEventListener('click', flipCard));
