async function editFormHandler(event) {
    event.preventDefault();

    const deckName = document.querySelector('input[name="post-title"]').value;
    console.log(deckName);
    
    const urlArray = window.location.href.split("/"); //splits on the last /
    const deckID = urlArray[urlArray.length - 1]; //take the new array and spits out the number which should be the final id pointer


    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
      const response = await fetch(`/api/decks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          deckName,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace(`/`);
    } else {
        console.log(deckName)
        alert(response.statusText);
      }

}

document.querySelector('.edit-deck-form').addEventListener('submit', editFormHandler);