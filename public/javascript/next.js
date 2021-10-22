let startButton = document.querySelector('.start');
    let nextButton = document.querySelector('.next');
    let backButton = document.querySelector('.back');
    

    
    nextButton.addEventListener('click', function (event) {
        event.preventDefault();
        
    let previousQuestionID = document.querySelector('#question-card').getAttribute("deck");
    let currentQuestionID = document.querySelector('#question-card').getAttribute("value");
    // let dataQuestionID = document.querySelector('#question-card').getAttribute("data");
        
    
            console.log(previousQuestionID);
            console.log(currentQuestionID);
            // console.log(dataQuestionID);
            previousQuestionID++;
            console.log(previousQuestionID);
    })

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