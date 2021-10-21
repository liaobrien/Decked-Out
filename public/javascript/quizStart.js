let startButton = document.querySelector('.start');

startButton.addEventListener('click', function(event){
    event.preventDefault();
    
    let startQuestions = document.querySelector('#deckQuestions').getAttribute("value");
    let questionDeck = document.querySelector('#deckQuestions').getAttribute("deck");

console.log(startQuestions);
console.log(questionDeck);


location.replace(`/deck/${startQuestions}/card/${questionDeck}`);  

    
})