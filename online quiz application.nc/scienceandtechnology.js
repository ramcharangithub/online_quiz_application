
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const counters = document.getElementById('counter')
const result = document.getElementById('resultLable')
const category = document.getElementById('category-btn')

let shuffledQuestions, currentQuestionIndex
var incrementer=0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5) /* To get random questions */
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  result.innerHTML = ''
  category.classList.remove('show')
  
  if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
      if(correct){
      incrementer++
      counters.classList.add('show')
      counters.innerHTML = 'Correct Answers = '+incrementer
      }
  } else {
      if(incrementer >= 8) {
        result.innerHTML = 'Congratulations! You have successfully passed the test. If you have to play another quiz, then please click on "Quiz category" link.'
        nextButton.classList.add('hide')
        category.classList.add('show')
      }
      else {
        result.innerHTML = 'Unfortunately you did not pass the test. Please click on try again to play again and click on "Quiz Category" link to play other quizzes.'
        startButton.innerText = 'Try Again'
        nextButton.classList.add('hide')
        startButton.classList.remove('hide')
        category.classList.add('show')
      }
    incrementer=0
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Oil, natural gas and coal are examples of …',
    answers: [
        { text: 'Renewable Resources', correct: false },
        { text: 'BioFuels', correct: false },
        { text: 'Fossil Fuels', correct: true },
        { text: 'Geothermal Resources', correct: false }
    ]
  },
  {
    question: 'Humans and chimpanzees share roughly how much DNA?',
    answers: [
      { text: '10%', correct: false },
      { text: '20%', correct: false },
      { text: '50%', correct: false },
      { text: '98%', correct: true }
    ]
  },
  {
    question: 'What is the most abundant gas in the Earth’s atmosphere?',
    answers: [
      { text: 'Oxygen', correct: false },
      { text: 'Hydrogen', correct: false },
      { text: 'Nitrogen', correct: true },
      { text: 'Carbon Dioxide', correct: false }
    ]
  },
  {
    question: 'Roughly how long does it take for the sun’s light to reach Earth – 8 minutes, 8 hours or 8 days?',
    answers: [
      { text: '50 Minutes', correct: false },
      { text: '8 Minutes', correct: true },
      { text: '10 Minutes', correct: false },
      { text: '5 Minutes', correct: false }
    ]
  },
  {
    question: 'Which famous British physicist wrote A Brief History of Time?',
    answers: [
      { text: 'Stephen Hawking', correct: true },
      { text: 'Albert Einstein', correct: false },
      { text: 'Isaac Newton', correct: false },
      { text: 'Nikola Tesla', correct: false }
    ]
  },
  {
    question: 'At what temperature are Celsius and Fahrenheit equal?',
    answers: [
      { text: '-20', correct: false },
      { text: '-10', correct: false },
      { text: '-40', correct: true },
      { text: '-50', correct: false }
    ]
  },
  {
    question: 'What modern-day country was Marie Curie born in?',
    answers: [
      { text: 'Poland', correct: true },
      { text: 'England', correct: false },
      { text: 'Russia', correct: false },
      { text: 'The USA', correct: false }
    ]
  },
  {
    question: 'What is the biggest planet in our solar system?',
    answers: [
      { text: 'Uranus', correct: false },
      { text: 'Earth', correct: false },
      { text: 'Jupiter', correct: true },
      { text: 'Venus', correct: false }
    ]
  },
  {
    question: 'How many moons does the earth have?',
    answers: [
      { text: '3', correct: false },
      { text: '0', correct: false },
      { text: '1', correct: true },
      { text: '5', correct: false }
    ]
  },
  {
    question: 'How many vertebrae does the average human possess?',
    answers: [
      { text: '23', correct: false },
      { text: '33', correct: true },
      { text: '43', correct: false},
      { text: '60', correct: false }
    ]
  },
  {
    question: 'What was the name of the first man-made satellite launched by the Soviet Union in 1957?',
    answers: [
      { text: 'Sputnik 1', correct: true },
      { text: 'Sputnik 5', correct: false },
      { text: 'Sputnik 10', correct: false },
      { text: 'Sputnik 20', correct: false }
    ]
  },
  {
    question: 'What is a material that will not carry an electrical charge called?',
    answers: [
      { text: 'Insulator', correct: true },
      { text: 'Conductor', correct: false },
      { text: 'Semiconductor', correct: false },
      { text: 'Copper', correct: false }
    ]
  },
  {
    question: 'The Bhagvat Gita is the holy book of which religion?',
    answers: [
      { text: 'Christianity', correct: false },
      { text: 'Hinduism', correct: true },
      { text: 'Judaism', correct: false },
      { text: 'Islam', correct: false }
    ]
  },
  {
    question: 'Which Apollo moon mission was the first to carry a lunar rover?',
    answers: [
      { text: 'Apollo 12', correct: false },
      { text: 'Apollo 18', correct: false },
      { text: 'Apollo 1', correct: false },
      { text: 'Apollo 15', correct: true }
    ]
  },
  {
    question: 'How many teeth does an adult human have?',
    answers: [
      { text: '32', correct: true },
      { text: '40', correct: false },
      { text: '30', correct: false },
      { text: '31', correct: false }
    ]
  },
  {
    question: 'What is the study of mushrooms called?',
    answers: [
      { text: 'Geology', correct: false },
      { text: 'Mycology', correct: true },
      { text: 'Physiology', correct: false },
      { text: 'Psychology', correct: false }
    ]
  },
  {
    question: 'On the periodic table, what symbol stands for silver?',
    answers: [
      { text: 'Cu', correct: false },
      { text: 'Ag', correct: true },
      { text: 'Si', correct: false },
      { text: 'Br', correct: false }
    ]
  },
  {
    question: 'Which two planets lack moons?',
    answers: [
      { text: 'Mercury', correct: true },
      { text: 'Earth', correct: false },
      { text: 'Uranus', correct: false },
      { text: 'Jupiter', correct: false }
    ]
  },
  {
    question: 'How many hearts do octopuses have?',
    answers: [
      { text: 'Three', correct: true },
      { text: 'One', correct: false },
      { text: 'Eight', correct: false },
      { text: 'Four', correct: false }
    ]
  },
  {
    question: 'Which of the following creature is linked with the moon pollution?',
    answers: [
      { text: 'Tardigrades', correct: false },
      { text: 'Water Bears', correct: true },
      { text: 'Both A and B', correct: false },
      { text: 'Neither A nor B', correct: false }
    ]
  }
]
