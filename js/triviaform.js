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
let questionsAsked = "";
let popupEl = document.querySelector("dialog");
let closeEl = document.querySelector("dialog>button");
let answerEl;

getQuiz();

function getQuiz() {
  const randomQ = Math.ceil(Math.random() * allQuestions.length - 1);
  answerEl = allQuestions[randomQ].answer;
  questionsEl.textContent = allQuestions[randomQ].question;

  aEl.textContent = allQuestions[randomQ].options[0];
  bEl.textContent = allQuestions[randomQ].options[1];
  cEl.textContent = allQuestions[randomQ].options[2];
  dEl.textContent = allQuestions[randomQ].options[3];
  // questionsAsked += `Question:- ${allQuestions[randomQ].question} And the Answer is ${allQuestions[randomQ].answer}   `;
  console.log(`the question is ${allQuestions[randomQ].question}`);
}

function checkAnswer() {
  let selectedOption = document.querySelector('input[name="option"]:checked');
  //   console.log(points + "before");
  if (selectedOption.nextSibling.textContent === answerEl) {
    console.log(`the Answer is ${answerEl}`);
    // popupEl.closeModal();

    points++;
  } else {
    console.log(`the Answer is ${answerEl}`);
    alert(`You got that wrong, the right Answer is :${answerEl}`);

    points;

    // console.log(points + "after");
  }

  return points;
}

checkQ.addEventListener("click", function () {
  checkAnswer();
  result.textContent = points;
});

nextQ.addEventListener("click", function () {
  if (totalQ < 5) {
    getQuiz();
    totalQ += 1;
    numberOfQ.textContent = totalQ;
    options.forEach((option) => {
      option.checked = false;
    });
  } else {
    // alert("You finished your 5 questions!");
    console.log(questionsAsked);
  }
});
// closeEl.addEventListener("click", function () {
//   popupEl.close;
// });
