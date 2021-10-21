async function newFormHandler(event) {
    event.preventDefault();
  
    const cardQuestion = document.querySelector('input[name="card-question"]').value;
    const cardAnswer = document.querySelector('input[name="card-answer"]').value;

    const urlArray = window.location.href.split("/"); //splits on the last /
    const deckID = urlArray[urlArray.length - 1]; //take the new array and spits out the number which should be the final id pointer
  
    const response = await fetch(`/api/cards`, {
      method: 'POST',
      body: JSON.stringify({
        cardQuestion,
        cardAnswer,
        deckID
      }
      
      ),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
        console.log(cardQuestion)
        console.log(cardAnswer)
      alert(response.statusText);
    }
  };
console.log('test')

document.querySelector('#new-deck-form').addEventListener('submit', newFormHandler);