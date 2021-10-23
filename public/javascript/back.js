window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    let backButton = document.querySelectorAll('.back');
    
for (let i = 0; i < backButton.length; i++) {
    backButton[i].addEventListener('click', function (event) {
        event.preventDefault();
        
        let id=this.getAttribute('data-id');
        id=parseInt(id);
        let  beforeId = id - 1;
        let stringBeforeId = beforeId.toString();
        if(beforeId >= 1 ){
      let flipcardEl=document.getElementById("card-" +id);  
        flipcardEl.classList.add("hideMe");
       
        console.log("card-"+ stringBeforeId);
        
        let flipcardBeforeEl= document.getElementById("card-"+ stringBeforeId); 
        flipcardBeforeEl.classList.remove("hideMe");
        let beforeId=parseInt(id);
        
        }
    })
    
}
});