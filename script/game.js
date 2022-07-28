const techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react',

];

let lockMode = false;
let firstCard = null;
let secondCard = null;


function shuflleCards(cards) {

    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }
}

    function createCardsFromTechs(techs) {

        let cards = [];
        techs.forEach( (tech) => {
            cards.push(createPairFromTechs(tech))
        })
        return cards.flatMap(pair => pair)
    }

    function createPairFromTechs(tech) {
        return [{
            id: createIdWithTech(tech),
            icon: tech,
            flipped: false
        },
        {
            id: createIdWithTech(tech),
            icon: tech,
            flipped: false
        }]
    }

    function createIdWithTech(tech) {
        return tech + parseInt(Math.random() * 1000)
    }

    function setCard(id){

        let carta = cards.filter(card => card.id == id)[0];

        if(carta.flipped || lockMode){
            return false
        }

        if(!firstCard){
            firstCard = carta;
            return true;
        }else{
            secondCard = carta;
            lockMode = true;
            return true

        }
    }

    function checkMatch(){
        if(secondCard){
            return firstCard.icon === secondCard.icon
        }
    }

    function clearCards(){
        firstCard = null;
        secondCard = null;
        lockMode = false;
    }