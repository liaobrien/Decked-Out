let nextButton = document.querySelector('.next');
let backButton = document.querySelector('.back');

nextButton.addEventListener('click', function(event){
    event.preventDefault();

    let currentQuestionID = document.querySelector('#question-card').getAttribute("value");
    let previousQuestionID = document.querySelector('#question-card').getAttribute("deck");

    
    if(`${currentQuestionID}` == `${previousQuestionID}`){
        
        currentQuestionID++;

        
        location.replace(`/card/${currentQuestionID}`);
    }else{
        document.getElementById(".next").disabled = true;
    }
    

})

backButton.addEventListener('click', function(event){
    event.preventDefault();

    let currentQuestionID = document.querySelector('#question-card').getAttribute("value");
    let previousQuestionID = document.querySelector('#question-card').getAttribute("deck");

    
    if(`${currentQuestionID}` == `${previousQuestionID}`){

        currentQuestionID--;
        
        location.replace(`/card/${currentQuestionID}`);
    }else{
        document.getElementById(".back").disabled = true;
    }
    
})