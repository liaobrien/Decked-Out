window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let nextButton = document.querySelectorAll('.next');
    
    
for (let i = 0; i < nextButton.length; i++) {
    nextButton[i].addEventListener('click', function (event) {
        event.preventDefault();
        let id=this.getAttribute('data-id');
      let flipcardEl=document.getElementById("card-" +id);  
        flipcardEl.classList.add("hideMe");
       let  nextId=parseInt(id) + 1;
        let flipcardNextEl= document.getElementById("card-"+nextId); 
        flipcardNextEl.classList.remove("hideMe");
        // let  beforeId=parseInt(id);
        // console.log("beforeId", beforeId);
        // let flipcardBeforeEl=document.getElementById("card-" +beforeId);  
        // flipcardBeforeEl.classList.add("hideMe");
    })
    
}
});

    
    

// backButton.addEventListener('click', function (event) {
//     event.preventDefault();

//     // let currentQuestionID = document.querySelector('#question-card').getAttribute("value");
//     // let previousQuestionID = document.querySelector('#question-card').getAttribute("deck");


//     // if(`${currentQuestionID}` == `${previousQuestionID}`){

//     //     currentQuestionID--;

//     //     location.replace(`/deck/${previousQuestionID}/card/${currentQuestionID}`);
//     // }else{
//     //     document.getElementById(".back").disabled = true;
//     // }

// })