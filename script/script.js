const FRONT = 'card-front';
const BACK = 'card-back';
const CARD = 'card';
const imageBack = 'G4brielBarbosa'
const gameboard = document.getElementById('gameboard')



startGame();

function startGame() {
    cards = createCardsFromTechs(techs);
    shuflleCards(cards);
    createGameBoard(cards);
}

function createGameBoard(cards) {

    cards.forEach((card) => {
        let cardElement = document.createElement('div')
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;
        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flippedCard)
        gameboard.appendChild(cardElement);

    })
}

function createCardContent(card, cardElement) {
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if (face == FRONT) {
        let iconElement = document.createElement('img')
        iconElement.src = 'assets/images/' + card.icon + '.png'
        cardElementFace.appendChild(iconElement)
    } else {
        let iconElement = document.createElement('img')
        iconElement.src = 'assets/images/' + imageBack + '.png'
        cardElementFace.appendChild(iconElement)
    }
    element.appendChild(cardElementFace)
}


function flippedCard() {
    if (setCard(this.id)) {
        this.classList.add('flip');
        if (checkMatch()) {
            clearCards();
        } else {
            setTimeout(() => {
                let firstCardView = document.getElementById(firstCard.id);
                let secondCardView = document.getElementById(secondCard.id);

                firstCardView.classList.remove('flip');
                secondCardView.classList.remove('flip');
                clearCards()
            }, 1000)
            
        }
    }
}