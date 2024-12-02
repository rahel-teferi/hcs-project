let questionsEl = document.querySelector("#questions");
let aEl = document.querySelector("#optionA");
let bEl = document.querySelector("#optionB");
let cEl = document.querySelector("#optionC");
let dEl = document.querySelector("#optionD");
let checkQ = document.querySelector("#btCheck");
let result = document.querySelector(".result");
let options = document.querySelectorAll("input");
let numberOfQ = document.querySelector(".numberOfQ");
let points = 0;
let totalQ = 1;
let questionsAsked = {};
let popupEl = document.querySelector(".popup");
let correctEl = document.querySelector(".chooseOption");
let incorrectEl = document.querySelector(".incorrect");
let passedEl = document.querySelector(".passed");
let closeEl = document.querySelectorAll(".closeBtn");
let answerEl;
let allAskedQ = [];
let newQuizEl = document.querySelector(".newQuiz");
//we have to first open the local node server.
url = "http://localhost:3000/allQuestions";
newQuizEl.addEventListener("click", function () {
  location.reload();
});
getQuiz();
function getQuiz() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        Promise.reject("url does not found");
      }
      return response.json();
    })
    .then((data) => {
      showQuiz(data);
    })
    .catch((error) => {
      alert(error);
    });
}
function showQuiz(data) {
  const randomQ = Math.ceil(Math.random() * data.length - 1);
  answerEl = data[randomQ].answer;
  questionsEl.textContent = data[randomQ].question;
  aEl.textContent = data[randomQ].options[0];
  bEl.textContent = data[randomQ].options[1];
  cEl.textContent = data[randomQ].options[2];
  dEl.textContent = data[randomQ].options[3];
  questionsAsked = data[randomQ];
}
checkQ.addEventListener("click", function () {
  let selectedOption = document.querySelector("input:checked");
  let isAnswered = {};
  if (selectedOption == null) {
    correctEl.showModal();
  } else {
    if (selectedOption.nextSibling.textContent === answerEl) {
      points++;
      // correctEl.showModal();
      for (let option of options) {
        option.setAttribute("disabled", true);
      }
      checkQ.disabled = true;
      isAnswered = { answered: true };
      Object.assign(questionsAsked, isAnswered);
      console.log(questionsAsked);
      nextQuestion();
    } else {
      points;
      incorrectEl.showModal();
      for (let option of options) {
        option.setAttribute("disabled", true);
      }
      checkQ.disabled = true;
      isAnswered = { answered: false };
      Object.assign(questionsAsked, isAnswered);
      console.log(questionsAsked);
      nextQuestion();
    }
  }
  result.textContent = points;
});

function nextQuestion() {
  if (totalQ < 5) {
    getQuiz();
    allAskedQ.push(questionsAsked);
    totalQ += 1;
    numberOfQ.textContent = totalQ;
    options.forEach((option) => {
      option.checked = false;
      option.disabled = false;
    });
    checkQ.disabled = false;
  } else {
    passedEl.innerHTML = points;
    popupEl.showModal();
    allAskedQ.push(questionsAsked);
    console.log(allAskedQ);
    for (let option of options) {
      option.setAttribute("disabled", true);
    }
  }
}
for (let close of closeEl) {
  close.addEventListener("click", function () {
    close.parentElement.close();
  });
}
