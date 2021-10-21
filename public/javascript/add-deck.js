async function newFormHandler(event) {
    event.preventDefault();
  
    const deckName = document.querySelector('input[name="post-title"]').value;
  
    const response = await fetch(`/api/decks`, {
      method: 'POST',
      body: JSON.stringify({
        deckName,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
        console.log(deckName)
      alert(response.statusText);
    }
  };
  
document.querySelector('#new-deck-form').addEventListener('submit', newFormHandler);