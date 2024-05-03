const questionario = [
    {
        question: "Che cos'è l'HTML?",
        answers: [
            { text: "Un linguaggio di markup", correct: true },
            { text: "Un linguaggio di programmazione", correct: false },
            { text: "Un linguaggio per programmare macchine virtuali", correct: false },
            { text: "Un software per visualizzare siti web", correct: false },
        ]
    },
    {
        question: "Che cos'è l'HTML?",
        answers: [
            { text: "Un linguaggio di markup", correct: true },
            { text: "Un linguaggio di programmazione", correct: false },
            { text: "Un linguaggio per programmare macchine virtuali", correct: false },
            { text: "Un software per visualizzare siti web", correct: false },
        ]
    },
    {
        question: "Che cos'è l'HTML?",
        answers: [
            { text: "Un linguaggio di markup", correct: true },
            { text: "Un linguaggio di programmazione", correct: false },
            { text: "Un linguaggio per programmare macchine virtuali", correct: false },
            { text: "Un software per visualizzare siti web", correct: false },
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const invioButton = document.getElementById("invio-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    invioButton.innerHTML = "Invio";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

function resetState(){
    invioButton.style.display="none";
    while(answerButton.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();
