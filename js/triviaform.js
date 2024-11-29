const allQuestions = [
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
let questionsEl = document.querySelector("#questions");
let aEl = document.querySelector("#optionA");
let bEl = document.querySelector("#optionB");
let cEl = document.querySelector("#optionC");
let dEl = document.querySelector("#optionD");
let checkQ = document.querySelector("#btCheck");
let result = document.querySelector(".result");
let nextQ = document.querySelector("#btNext");
let options = document.querySelectorAll("input");
let numberOfQ = document.querySelector(".numberOfQ");
let points = 0;
let totalQ = 1;
let questionsAsked = {};
let popupEl = document.querySelector("dialog");
let closeEl = document.querySelector("dialog>button");
let answerEl;
let allAskedQ = [];

getQuiz();

function getQuiz() {
  const randomQ = Math.ceil(Math.random() * allQuestions.length - 1);
  answerEl = allQuestions[randomQ].answer;
  questionsEl.textContent = allQuestions[randomQ].question;

  aEl.textContent = allQuestions[randomQ].options[0];
  bEl.textContent = allQuestions[randomQ].options[1];
  cEl.textContent = allQuestions[randomQ].options[2];
  dEl.textContent = allQuestions[randomQ].options[3];

  questionsAsked = {
    question: allQuestions[randomQ].question,
    options: [allQuestions[randomQ].options],
    answer: allQuestions[randomQ].answer,
  };
  // console.log(questionsAsked);
}

function checkAnswer() {
  let selectedOption = document.querySelector('input[name="option"]:checked');
  let isAnswered = {};
  //   console.log(points + "before");
  if (selectedOption.nextSibling.textContent === answerEl) {
    // popupEl.closeModal();
    points++;
    for (let option of options) {
      option.setAttribute("disabled", true);
    }
    checkQ.disabled = true;

    isAnswered = { Answered: "Correctly Answered" };
    Object.assign(questionsAsked, isAnswered);
    console.log(questionsAsked);
  } else {
    points;
    for (let option of options) {
      option.setAttribute("disabled", true);
    }
    checkQ.disabled = true;
    alert(`You got that wrong, the right Answer is :${answerEl}`);
    isAnswered = { Answered: "Not Answered correctly" };
    Object.assign(questionsAsked, isAnswered);
  }

  return points;
}
checkQ.addEventListener("click", function () {
  checkAnswer();
  result.textContent = points;
  nextQ.disabled = false;
});

nextQ.addEventListener("click", function () {
  if (totalQ < 5) {
    getQuiz();

    allAskedQ.push(questionsAsked);
    // console.log(allAskedQ);
    totalQ += 1;
    numberOfQ.textContent = totalQ;
    options.forEach((option) => {
      option.checked = false;
      option.disabled = false;
    });
    checkQ.disabled = false;
    nextQ.disabled = true;
  } else {
    alert("You finished your 5 questions!");
    allAskedQ.push(questionsAsked);
    console.log(allAskedQ);
    for (let option of options) {
      option.setAttribute("disabled", true);
    }
  }
});
closeEl.addEventListener("click", function () {
  popupEl.close;
});
