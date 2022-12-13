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
  shuffledQuestions = questions.sort(() => Math.random()) /* To get random questions */
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
  
  if (shuffledQuestions.length > currentQuestionIndex+1) {
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

    question: 'What is the hosting country of icc t20worldcup 2022?',
    answers: [
      { text: 'England', correct: false },
      { text: 'India', correct: false },
      { text: 'Australia', correct: true },
      { text: 'New Zealand', correct: false }
    ]
    },
    {
    question: 'What is the Jersey Number of Legendary Indian Cricketer Mahendra Singh Dhoni?',
    answers: [
    { text: '10', correct: false },
    { text: '7', correct: true },
    { text: '17', correct: false },
    { text: '18', correct: false }
    ]
    },
    {
    question: 'what is the retirement anounced date of cricketer MS Dhoni?',
    answers: [
    { text: 'July 7,2020', correct: false },
    { text: 'August 15,2020', correct: true },
    { text: 'August 26,2020', correct: false },
    { text: 'October 17,20', correct: false }
    ]
    },
    {
    question: "Who is the current indian captain for men's cricket team?",
    answers: [
    { text: 'Virat Kohli', correct: false },
    { text: 'KL Rahul', correct: false },
    { text: 'Rohit Sharma', correct: true },
    { text: 'N Harsha Vardhan', correct: false }
    ]
    },
    {
    question: 'which of the below IPL team has never won a IPL Title?',
    answers: [
    { text: 'sunrisers hyderabad', correct: false },
    { text: 'mumbai indians', correct: false },
    { text: 'chennai super kings', correct: false },
    { text: 'Royal Challengers Bangalore', correct: true }
    ]
    },
    {
    question: 'Which of the below mentioned name is not belongs to a cricketer?',
    answers: [
    { text: 'Naveen Chandu', correct: true },
    { text: 'shardul thakur', correct: false },
    { text: 'ruturaj gaikwad', correct: false },
    { text: 'mukesh choudhary', correct: false }
    ]
    },
    {
    question: 'how many centuries does virat kohli had?',
    answers: [
    { text: '50', correct: false },
    { text: '100', correct: false },
    { text: '71', correct: true },
    { text: '70', correct: false }
    ]
    },
    {
    question: 'according to a survey who is the current handsome cricketer in the world?',
    answers: [
    { text: 'Temba Bavuma', correct: false },
    { text: 'virat Kohli', correct: false },
    { text: 'KL Rahul', correct: true },
    { text: 'kane Williamson', correct: false }
    ]
    },
    {
    question: 'who is the fittest indian cricketer?',
    answers: [
    { text: 'KL Rahul', correct: false },
    { text: 'Manish Pandey', correct: true },
    { text: 'Rohit Sharma', correct: false},
    { text: 'Ts Harsha', correct: false }
    ]
    },
    {
    question: 'In cricket worldcup 2011,who hitted the winning runs for india?',
    answers: [
    { text: 'Yuzi Chahal', correct: false },
    { text: 'Jasprit Bumrah', correct: false },
    { text: 'MS Sdoni', correct: true },
    { text: 'Yuvraj Singh', correct: false }
    ]
    },
    {
    question: 'In whose bouncer ball austrailian cricketer phillip hughes died in 2014?',
    answers: [
    { text: 'Andrew Tye', correct: false },
    { text: 'Sean Abbott', correct: true },
    { text: 'Kane Richardson', correct: false },
    { text: 'Pat Cummins', correct: false }
    ]
    },
    {
    question: 'which of the indian cricketer scored a ton in his test debut ?',
    answers: [
    { text: 'KL Rahul', correct: false },
    { text: 'Shreyas Iyer', correct: true },
    { text: 'Rishabh Pant', correct: false },
    { text: 'Cheteshwar Pujara', correct: false }
    ]
    },
    {
    question: 'how many ipl trovgghghygt,kytt,\gn phies that are won by chennai super kings?',
    answers: [
    { text: '6', correct: false },
    { text: '5', correct: false },
    { text: '3', correct: false },
    { text: '4', correct: true }
    ]
    },
    {
    question: 'who is verified cricketer below?',
    answers: [
    { text: 'Shreyas Iyer', correct: true },
    { text: 'Naveen Chandu', correct: false },
    { text: 'Charan Bapireddy', correct: false },
    { text: 'Ts Harsha', correct: false }
    ]
    },
    {
    question: 'who scored a double hundred in his test debut?',
    answers: [
    { text: 'Shreyas Iyer', correct: false },
    { text: 'kevein petersen', correct: false },
    { text: 'Faf duplessis', correct: false },
    { text: 'Devon conway', correct: true }
    ]
    }
]