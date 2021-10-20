let nextButton = document.querySelector('.next');

nextButton.addEventListener('click', function(event){
    event.preventDefault();

    console.log("You clicked me",document.querySelector('#question-card').getAttribute("value"));

    let currentQuestionID = document.querySelector('#question-card').getAttribute("value");

    currentQuestionID++;

    location.replace(`/card/${currentQuestionID}`);
})