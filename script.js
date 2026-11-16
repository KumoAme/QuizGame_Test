
// ==========================
// 問題データ
// ==========================

const questions = [
{question:"このうちメガシンカ使いは誰？",options:[ "エリートトレーナー・ショウコ","観光客・ヤンチ","オカルトマニア・ジョゼット","おじょうさま・ユキノ"],correct:2,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？",options:[ "観光客・アグラ","おぼっちゃま・リオ","ビジネスマン・ジャン","バックパッカー・ススム"],correct:0,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？",options:[ "バックパッカー・メイ","バックパッカー・ダミアン","バックパッカー・マヨイ","バックパッカー・ススム"],correct:1,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？",options:[ "バトルガール・リリコ","フレア団ヌーヴォ・ブリュレ","ベテラントレーナー・ローザ","エリートトレーナー・トキヤ"],correct:1,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？",options:[ "スクールキッズ・ノエミ","ホープトレーナー・マモリ","OL・ルミ","エリートトレーナー・ジェスタン"],correct:3,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？",options:[ "フレア団ヌーヴォ・ブレイズ","オカルトマニア・イノリ","DG4・ファンス","バトルガール・アキラ"],correct:3,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？",options:[ "ポケセン受付嬢・イヤス","ポケモンコレクター・クリオ","ポケセン受付嬢・ナオ","ポケモンコレクター・シュン"],correct:2,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？",options:[ "ベテラントレーナー・サユリ","ベテラントレーナー・ローザ","エリートトレーナー・ヒトミ","エリートトレーナー・トキヤ"],correct:0,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？",options:[ "ベテラントレーナー・カトリーヌ","ポケモンコレクター・ゲンヤ","観光客・マキコ","おまわりさん・ケースケ"],correct:0,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？",options:[ "ふりそで・マイコ","おまわりさん・エミリー","スクールキッズ・ヒロム","ジョガー・ポール"],correct:1,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？<br>（選択肢に∞には登場しないトレーナーがいます）",options:[ "オカルトマニア・クレール","DG4・キテン","エリートトレーナー・ヒトミ","ポケモンコレクター・シュウシ"],correct:3,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？<br>（選択肢に∞には登場しないトレーナーがいます）",options:[ "ホープトレーナー・ゴロウ","エリートトレーナー・ジャスタン","芸術家・リリー","配達員・エルザ"],correct:2,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？<br>（選択肢に∞には登場しないトレーナーがいます）",options:[ "バトルガール・アキラ","MSBC・ジラール","ホープトレーナー・マノン","OL・ケイリ"],correct:0,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？<br>（選択肢に∞には登場しないトレーナーがいます）",options:[ "MSBC・シノワ","ポケセン受付嬢・ナオ","スクールキッズ・タロウ","芸術家・イオリ"],correct:1,difficultypoints:500},
{question:"このうちメガシンカ使いは誰？<br>（選択肢に∞には登場しないトレーナーがいます）",options:[ "ウエーター・ロイド","おぼっちゃま・オオチ","ドライバー・アキーム","オカルトマニア・ジョゼット"],correct:3,difficultypoints:500},
{question:"私の手持ちはこの２匹です。私は誰でしょう？<br>ピジョットLv62、ファイアローLv63",options:[ "配達員・ロッセーニ","ドライバー・ユリ","ベテラントレーナー・サユリ","おまわりさん・ミサキ"],correct:0,difficultypoints:500},
{question:"私の手持ちはこの２匹です。私は誰でしょう？<br>ドラミドロLv65、ダストダスLv65",options:[ "ポケモンコレクター・ゲンヤ","芸術家・イオリ","エリートトレーナー・ジェスタン","MSBC・シノワ"],correct:1,difficultypoints:500},
{question:"私の手持ちはこの２匹です。私は誰でしょう？<br>ヘラクロスLv64、ゴロンダLv64",options:[ "ビジネスマン・ジャン","スクールキッズ・ヒロム","ジャスティスの会・ヴァレリー","バトルガール・リリコ"],correct:2,difficultypoints:500},
{question:"私の手持ちはこの２匹です。私は誰でしょう？<br>リザードンLv63、カイリューLv63",options:[ "MSBC・シノワ","ホープトレーナー・ゴロウ","フレア団ヌーヴォ・ブレイズ","ホープトレーナー・マモリ"],correct:3,difficultypoints:500},
{question:"私の手持ちはこの２匹です。私は誰でしょう？<br>フラージェスLv62、フラージェスLv62",options:[ "MSBC・ビビシー","ふりそで・シオネ","OL・ルミ","スクールキッズ・チエミ"],correct:1,difficultypoints:500},
{question:"ウエートレス・ブリジットに勝利した後のブリジットのセリフは？",options:[ "駆けっこなら負けない……<br>駆けっこなら……","メガシンカの輝きが<br>あたしを救ってくれたのさ","負けたらZAロワイヤルで<br>ポイントを稼げません","相手の視線を避けるのが<br>ZAロワイヤルのポイント"],correct:2,difficultypoints:500},
{question:"ポケセン受付嬢・ナオに勝利した後のナオのセリフは？",options:[ "ポケモンセンターで<br>回復してきたらダメかな？","戦ってくれたポケモンの<br>手当てをしないと","今度こそ優勝して<br>バカンスを２倍にします","ポケセンで回復しながら<br>戦えば無敵だったのに！"],correct:3,difficultypoints:500},
{question:"ビジネスマン・アツヤに勝利した後のアツヤのセリフは？",options:[ "勝負を仕掛けられると<br>いまだに驚いてしまう！","仕事はできますが<br>勝負はまだまだのようです","勝つために再教育を受けてきた<br>それでも勝てないものだな","都市開発とZAロワイヤル<br>ミアレの今後が楽しみだ！"],correct:1,difficultypoints:500},
{question:"ポケモンコレクター・シュウシに勝利した後のシュウシのセリフは？",options:[ "負けたが終わりじゃねえ！<br>おれたちの道はまだ続く！","メガシンカしての敗北……<br>すなわちメガ敗北だ……！","優勝でもらいたかった<br>タワーはあんな風になるし","バトルゾーンでも<br>裏道を通るべきかもな"],correct:0,difficultypoints:500},
{question:"バトルガール・アキラに勝利した後のアキラのセリフは？",options:[ "メガチャーレムを<br>モノともしない強さとは？","メガピジョットなのに！<br>メガピジョットなのに！！","メガシンカしての敗北……<br>すなわちメガ敗北だ……！","ポケモンと一体化していた<br>そんな感じがしましたよ"],correct:0,difficultypoints:500},
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
