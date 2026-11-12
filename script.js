
// ==========================
// 問題データ
// ==========================

const questions = [
  {
    question: "日本の首都はどこ？",
    choices: ["大阪", "東京", "京都", "名古屋"],
    answer: 1
  },
  {
    question: "1年は何か月？",
    choices: ["10か月", "11か月", "12か月", "13か月"],
    answer: 2
  },
  {
    question: "太陽系で最も大きな惑星は？",
    choices: ["地球", "火星", "土星", "木星"],
    answer: 3
  },
  {
    question: "日本で一番高い山は？",
    choices: ["富士山", "北岳", "奥穂高岳", "槍ヶ岳"],
    answer: 0
  },
  {
    question: "タコの足は何本？",
    choices: ["6本", "8本", "10本", "12本"],
    answer: 1
  }
];

// ==========================
// ゲームの状態
// ==========================

let currentQuestion = null;
let questionCount = 0;
let score = 0;
let answered = false;

// ==========================
// HTML要素の取得
// ==========================

const titleScreen = document.getElementById("title-screen");
const quizScreen = document.getElementById("quiz-screen");

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const messageElement = document.getElementById("message");

const nextButton = document.getElementById("next-button");
const startButton = document.getElementById("start-button");

// ==========================
// ゲーム開始
// ==========================

function startGame() {
  titleScreen.hidden = true;
  quizScreen.hidden = false;

  questionCount = 0;
  score = 0;
  currentQuestion = null;

  showQuestion();
}

// ==========================
// 問題を表示
// ==========================

function showQuestion() {
  answered = false;

  // 前回と違う問題をランダムに選ぶ
  let newQuestion;

  do {
    newQuestion = Math.floor(Math.random() * questions.length);
  } while (
    newQuestion === currentQuestion &&
    questions.length > 1
  );

  currentQuestion = newQuestion;

  const q = questions[currentQuestion];

  questionCount++;

  document.getElementById("question-number").textContent =
    `第${questionCount}問`;

  document.getElementById("score").textContent =
    `正解数：${score}`;

  questionElement.textContent = q.question;
  messageElement.textContent = "";

  nextButton.hidden = true;
  choicesElement.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");

    button.className = "choice";
    button.textContent = choice;

    button.addEventListener("click", () => {
      selectAnswer(index);
    });

    choicesElement.appendChild(button);
  });
}

// ==========================
// 回答判定
// ==========================

function selectAnswer(index) {
  if (answered) return;

  answered = true;

  const q = questions[currentQuestion];
  const buttons = choicesElement.querySelectorAll("button");

  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === q.answer) {
      button.classList.add("correct");
    } else if (i === index) {
      button.classList.add("wrong");
    }
  });

  if (index === q.answer) {
    score++;

    messageElement.textContent = "正解！";
    messageElement.style.color = "#20a66a";
  } else {
    messageElement.textContent = "不正解！";
    messageElement.style.color = "#d94c4c";
  }

  document.getElementById("score").textContent =
    `正解数：${score}`;

  nextButton.hidden = false;
}

// ==========================
// 次の問題
// ==========================

function nextQuestion() {
  showQuestion();
}

// ==========================
// ボタンの設定
// ==========================

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
