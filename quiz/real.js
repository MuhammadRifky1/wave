var data = [
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis impedit molestias, amet omnis, esse harum nulla delectus eum ullam porro,quam eveniet ratione temporibus fuga quisquam? Deserunt at voluptatibus magnis.",
        answerA: "FIRST ANSWER",
        answerB: "SECOND ANSWER",
        cnswerC: "THIRD ANSWER",
        correct: "A"
    },
    {
        question: "ini adalah pertanyaan kedua yang akan disediakan oleh programmer handal Aamiin",
        answerA: "FIRST ANSWER",
        answerB: "SECOND ANSWER",
        cnswerC: "THIRD ANSWER",
        correct: "A"
    }
]

var questionParent = document.getElementById('question-container'),
    answerParent = document.getElementById('answer-container'),
    progress = document.getElementById('main-indicator'),
    bg = document.getElementById('gauge');

var lastQuestionIndex = data.length - 1;
var runningQuestionIndex = 0;
var score = 0;

function renderQuestion() {
    let q = data[runningQuestionIndex];
    questionParent.innerHTML = "<p>"+ q.question + "</p>";
}

function progressRender() {
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
      test =   progress.innerHTML += "<div class='indicator' id="+ qIndex +"></div>"
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = '#0f0';
}

function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = '#f00';

}


function checkAnswer(answer){
    if(data[runningQuestionIndex].correct == answer){
        score++;
        answerIsCorrect();
    }else {
        answerIsWrong();
    }

    if(runningQuestionIndex < lastQuestionIndex){
        runningQuestionIndex++;
        renderQuestion();
    }
}


renderQuestion();
progressRender();

































// function checkAnswer(answer){
//     var ans = document.getElementById("answer");

//     var data = answer.getAttribute("data-correct");
    
//     if(data == "true"){
        
//         answer.classList.add("correct");
//     }else {
//         answer.classList.add("wrong");
//     }
    
// }


