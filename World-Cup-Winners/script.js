const quizData = [
    {
        question: "Which country won the FIFA world cup in 1970",
        a: "Morocco",
        b: "Portugal",
        c: "U.S.A",
        d: "Brazil",
        correct: "d",
    },
    {
        question: "Which country won the FIFA world cup in 1938",
        a: "England",
        b: "Italy",
        c: "Uruguay",
        d: "Sweden",
        correct: "b",
    },
    {
        question: "Which country won the FIFA world cup in 2018",
        a: "France",
        b: "Netherlands",
        c: "Ireland",
        d: "Germany",
        correct: "a",
    },
    {
        question: "Which country won the FIFA world cup in 2010",
        a: "Belgium",
        b: "Spain",
        c: "Croatia",
        d: "Argentina",
        correct: "b",
    },
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score} out of ${quizData.length} questions correctly.</h2>
                 
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});