const quizContainer = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const answersEl = document.querySelector('.answers');
const resultEl = document.querySelector('.result');

let currentQuestionIndex = 0;
let score = 0;
let questions = [];

// Fetch questions from the API
async function fetchQuestions() {
  const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
  const data = await response.json();
  questions = data.results;
  displayQuestion();
}

// Display the current question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.innerHTML = currentQuestion.question;

  answersEl.innerHTML = '';
  const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    .sort(() => Math.random() - 0.5);

  answers.forEach(answer => {
    const button = document.createElement('button');
    button.classList.add('answer');
    button.innerHTML = answer;
    button.addEventListener('click', () => checkAnswer(answer, currentQuestion.correct_answer));
    answersEl.appendChild(button);
  });
}

// Check the selected answer
function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

// Show the final result
function showResult() {
  questionEl.style.display = 'none';
  answersEl.style.display = 'none';
  resultEl.innerHTML = `You scored ${score} out of ${questions.length}!`;
}

// Start the quiz
fetchQuestions();
