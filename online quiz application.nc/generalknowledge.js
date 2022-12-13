
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

if (shuffledQuestions.length > currentQuestionIndex + 1) {
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
question: 'What country is sushi from?',
answers: [
  { text: 'Thailand', correct: false },
  { text: 'India', correct: false },
  { text: 'Japan', correct: true },
  { text: 'China', correct: false }
]
},
{
question: 'According to the Old Testament, how many days did it take God to create the world?',
answers: [
{ text: '1', correct: false },
{ text: '6', correct: true },
{ text: '7', correct: false },
{ text: '11', correct: false }
]
},
{
question: 'Which is the worlds most populous country?',
answers: [
{ text: 'India', correct: false },
{ text: 'China', correct: true },
{ text: 'The USA', correct: false },
{ text: 'Brazil', correct: false }
]
},
{
question: 'About what percentage of the earths surface is water?',
answers: [
{ text: '50%', correct: false },
{ text: '33%', correct: false },
{ text: '70%', correct: true },
{ text: '10%', correct: false }
]
},
{
question: 'Which of these is not a major world ocean?',
answers: [
{ text: 'Arctic Ocean', correct: false },
{ text: 'Indian Ocean', correct: false },
{ text: 'Pacific Ocean', correct: false },
{ text: 'American Ocean', correct: true }
]
},
{
question: 'Which city is capital of Canada?',
answers: [
{ text: 'Toronto', correct: false },
{ text: 'Montreal', correct: false },
{ text: 'Ottawa', correct: true },
{ text: 'Vancouver', correct: false }
]
},
{
question: 'About how many countries are there in the world?',
answers: [
{ text: '50', correct: false },
{ text: '100', correct: false },
{ text: '200', correct: true },
{ text: '400', correct: false }
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
question: 'How many official language does India have?',
answers: [
{ text: '2', correct: false },
{ text: '22', correct: true },
{ text: '50', correct: false},
{ text: '25', correct: false }
]
},
{
question: 'How many planets are there in the solar system?',
answers: [
{ text: '2', correct: false },
{ text: '9', correct: false },
{ text: '8', correct: true },
{ text: '11', correct: false }
]
},
{
question: 'Where is the country of Hong Kong?',
answers: [
{ text: 'Asia', correct: true },
{ text: 'Africa', correct: false },
{ text: 'Europe', correct: false },
{ text: 'South America', correct: false }
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
question: 'Which of these rivers is often cited as the longest river on earth?',
answers: [
{ text: 'The Ganga', correct: false },
{ text: 'Thames', correct: false },
{ text: 'Delaware', correct: false },
{ text: 'Nile', correct: true }
]
},
{
question: 'Most of the worlds ______ occur in the area known as the Pacific Ring of Fire.',
answers: [
{ text: 'Earthquakes', correct: true },
{ text: 'Floods', correct: false },
{ text: 'Droughts', correct: false },
{ text: 'Tornados', correct: false }
]
},
{
question: 'Which is the worlds largest desert?',
answers: [
{ text: 'Gobi', correct: false },
{ text: 'Sahara', correct: true },
{ text: 'Mojave', correct: false },
{ text: 'Thar', correct: false }
]
},
{
question: 'Which of these languages is English most closely related to?',
answers: [
{ text: 'Russian', correct: false },
{ text: 'German', correct: true },
{ text: 'Latin', correct: false },
{ text: 'Spanish', correct: false }
]
},
{
question: 'What country does yoga come from?',
answers: [
{ text: 'India', correct: true },
{ text: 'China', correct: false },
{ text: 'The USA', correct: false },
{ text: 'Sweden', correct: false }
]
},
{
question: 'Which of these foods is most common in the standard Western diet?',
answers: [
{ text: 'Red Meat', correct: true },
{ text: 'Fruits', correct: false },
{ text: 'Vegetables', correct: false },
{ text: 'Fish', correct: false }
]
},
{
question: 'Which country is shaped like a boot?',
answers: [
{ text: 'India', correct: false },
{ text: 'Canada', correct: false },
{ text: 'The USA', correct: false },
{ text: 'Italy', correct: true }
]
},
{
question: 'What percentage of the worlds population has red hair?',
answers: [
{ text: '0%', correct: false },
{ text: 'About 2%', correct: true },
{ text: '10%', correct: false },
{ text: 'About 25%', correct: false }
]
}
]