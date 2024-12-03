allQuestion = [
  {
    question: "What is the fastest land animal in the world?",
    options: ["Lion", "Cheetah", "Tiger", "Horse"],
    answer: "Cheetah",
  },
  {
    question: "Which of these animals is a mammal?",
    options: ["Snake", "Whale", "Frog", "Eagle"],
    answer: "Whale",
  },
  {
    question: "What do pandas mainly eat?",
    options: ["Bamboo", "Fish", "Grass", "Honey"],
    answer: "Bamboo",
  },
  {
    question: "What type of animal is a Komodo dragon?",
    options: ["Snake", "Lizard", "Turtle", "Frog"],
    answer: "Lizard",
  },
  {
    question: "Which bird is known for its colorful tail feathers?",
    options: ["Sparrow", "Peacock", "Parrot", "Owl"],
    answer: "Peacock",
  },
  {
    question:
      "Which animal can change its color to blend with its surroundings?",
    options: ["Chameleon", "Elephant", "Dolphin", "Kangaroo"],
    answer: "Chameleon",
  },
  {
    question: "What is a baby kangaroo called?",
    options: ["Cub", "Joey", "Kitten", "Calf"],
    answer: "Joey",
  },
  {
    question: "Where do penguins live?",
    options: ["Desert", "Rainforest", "Arctic and Antarctic", "Grasslands"],
    answer: "Arctic and Antarctic",
  },
  {
    question: "Which of these animals is known as the 'King of the Jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Bear"],
    answer: "Lion",
  },
  {
    question: "What do dolphins use to breathe?",
    options: ["Gills", "Blowholes", "Mouth", "Fins"],
    answer: "Blowholes",
  },
];

let questionEl = document.querySelector("#questions");
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
let questionAsked = {};
let popupEl = document.querySelector(".popup");
let chooseOptionEl = document.querySelector(".chooseOption");
let incorrectEl = document.querySelector(".incorrect");
let passedEl = document.querySelector(".passed");
let closeEl = document.querySelectorAll(".closeBtn");
let answerEl;
let allAskedQ = [];
let newQuizEl = document.querySelector(".newQuiz");

newQuizEl.addEventListener("click", function () {
  location.reload();
});
let alreadyAsked = [];

showQuiz();

function showQuiz() {
  let randomQ = Math.ceil(Math.random() * allQuestion.length - 1);
  if (alreadyAsked.includes(randomQ)) {
    randomQ = Math.ceil(Math.random() * allQuestion.length - 1);
  }
  questionEl.textContent = allQuestion[randomQ].question;
  aEl.textContent = allQuestion[randomQ].options[0];
  bEl.textContent = allQuestion[randomQ].options[1];
  cEl.textContent = allQuestion[randomQ].options[2];
  dEl.textContent = allQuestion[randomQ].options[3];
  answerEl = allQuestion[randomQ].answer;
  questionAsked = allQuestion[randomQ];
  alreadyAsked.push(randomQ);
}

checkQ.addEventListener("click", function () {
  let selectedOption = document.querySelector("input:checked");
  let isAnswered = {};
  if (selectedOption == null) {
    chooseOptionEl.showModal();
  } else if (selectedOption.nextSibling.textContent === answerEl) {
    points++;
    for (let option of options) {
      option.setAttribute("disabled", true);
    }
    checkQ.disabled = true;
    isAnswered = { answered: true };
    Object.assign(questionAsked, isAnswered);
    console.log(questionAsked);
    nextQuestion();
  } else {
    points;
    incorrectEl.showModal();
    for (let option of options) {
      option.setAttribute("disabled", true);
    }
    checkQ.disabled = true;
    isAnswered = { answered: false };
    Object.assign(questionAsked, isAnswered);
    console.log(questionAsked);
    nextQuestion();
  }

  result.textContent = points;
});

function nextQuestion() {
  if (totalQ < 5) {
    showQuiz();
    allAskedQ.push(questionAsked);
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
    allAskedQ.push(questionAsked);
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
