
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
    question: 'What was Italy’s primary role in the war?',
    answers: [
        { text: 'It helped Germany in accomplishing its main objectives', correct: false },
        { text: 'It was helpful to Britain', correct: false },
        { text: 'It caused problems for Japan', correct: false },
        { text: 'It distracted Germany from accomplishing its main objectives', correct: true }
    ]
 },
{
    question: 'What was Hitler’s primary justification for invading Russia?',
    answers: [
        { text: 'Stalin was preparing to attack Germany', correct: false },
        { text: 'Germany needed more space for its population', correct: true },
        { text: 'Hitler believed that a war on two fronts would be to his advantage', correct: false },
        { text: 'He desired revenge for the execution of Tsar Nicholas II', correct: false }
    ]
  },
{
    question: 'What was the code name given to Germany’s plan to invade the USSR?',
    answers: [
        { text: 'Operation Sea Lion', correct: false },
        { text: 'Operation Barbarossa', correct: true },
        { text: 'Operation Wolfenstein', correct: false },
        { text: 'Operation Crossbow', correct: false }
    ]
  },
{
    question: 'What happened to the Soviet air force during the opening days of the German invasion?',
    answers: [
        { text: 'Up to 2,000 Soviet aircraft were destroyed while still on the ground.', correct: true },
        { text: 'Soviet pilots scored easy victories against inexperienced German pilots', correct: false },
        { text: 'It was evacuated to Siberia', correct: false },
        { text: 'The Soviet air force engaged in huge dogfights involving thousands of planes on each side', correct: false }
    ]
  },
{
    question: 'Which of the following was not a part of the Soviet defense plan against Germany?',
    answers: [
        { text: 'Well-organized partisan resistance', correct: false },
        { text: 'A strict policy of destroying any usable resources before retreating', correct: false },
        { text: 'The Soviets sought to lure German armies into forests, which they would then set on fire', correct: true },
        { text: 'Major factories were disassembled and moved east', correct: false }
    ]
  },
{
    question: 'On which region of the Soviet Union did Hitler place the highest priority?',
    answers: [
        { text: 'Ukraine and southern Russia', correct: true },
        { text: 'Leningrad and northern Russia', correct: false },
        { text: 'Moscow and central Russia', correct: false },
        { text: 'Siberia', correct: false }
    ]
  },
{
    question: 'Via what route did Russians manage to send some supplies to Leningrad during the German siege of the city?',
    answers: [
        { text: 'A German supply line across the Black Sea', correct: false },
        { text: 'An underground railroad', correct: false },
        { text: 'A supply route across Lake Ladoga', correct: true },
        { text: 'An airlift', correct: false }
    ]
  },
{
    question: 'Which country was the site of most of the Nazi extermination camps?',
    answers: [
        { text: 'The USSR', correct: false },
        { text: 'Czechoslovakia', correct: false },
        { text: 'Poland', correct: true },
        { text: 'Hungary', correct: false }
    ]
  },
{
    question: 'How did the Western Allies respond to Germany’s invasion of Russia?',
    answers: [
        { text: 'They sent supplies and intelligence information to the USSR', correct: false },
        { text: 'They were largely indifferent to the situation in Russia', correct: false },
        { text: 'They sent large numbers of troops to fight in Russia', correct: true },
        { text: 'They attacked German naval forces from the Black Sea', correct: false }
    ]
  },
{
    question: 'What Japanese action created tension with the United States?',
    answers: [
        { text: 'Its seizure of territory in China', correct: true },
        { text: 'Its seizure of territory in Russia', correct: false },
        { text: 'Its decision to block American shipping routes', correct: false },
        { text: 'Its seizure of territory in Korea', correct: false }
    ]
  },
{
    question: 'What U.S. action created tension with Japan?',
    answers: [
        { text: 'Its blockade of Japanese ports', correct: false },
        { text: 'Its freezing of Japanese assets', correct: false },
        { text: 'Its establishment of a trade embargo against Japan', correct: true },
        { text: 'Its default on Japanese loans', correct: false }
    ]
  },
{
    question: 'Who was the Japanese admiral behind the Pearl Harbor attack?',
    answers: [
        { text: 'Hirohito', correct: false },
        { text: 'Myamoto', correct: false },
        { text: 'Yamamoto', correct: true },
        { text: 'Matsuhito', correct: false }
    ]
  },
{
    question: 'Which of the following was not true about the Pearl Harbor attack?',
    answers: [
        { text: 'U.S. officials knew the day before that Japan was planning a major attack', correct: false },
        { text: 'There was concern among U.S. military leaders that Peal Harbor was vulnerable to attack', correct: false },
        { text: 'The Japanese painted their aircraft to look like American planes', correct: true },
        { text: 'Prior to the attack, Japanese spies had verified which U.S. battleships would be in port', correct: false }
    ]
  },
{
    question: 'What was unique about the Doolittle Raid?',
    answers: [
        { text: 'The bombers were launched from an aircraft carrier', correct: true },
        { text: 'It was the first raid to employ jet aircraft', correct: false },
        { text: 'The bombers flew to Japan all the way from Hawaii', correct: false },
        { text: 'The bombers were unmanned', correct: false }
    ]
  },
{
    question: 'Which battle is considered to be the turning point for the war in the Pacific?',
    answers: [
        { text: 'The Battle of the Coral Sea', correct: false },
        { text: 'The Battle of Guadalcanal', correct: false },
        { text: 'The Battle of Iwo Jima', correct: false },
        { text: 'The Battle of Midway', correct: true }
    ]
  },
{
    question: 'The Battle of the Coral Sea was a unique naval battle in that',
    answers: [
        { text: 'It was fought entirely with submarines', correct: false },
        { text: 'It was fought during a typhoon', correct: false },
        { text: 'It was fought entirely with carrier-based aircraft', correct: true },
        { text: 'It was fought primarily at night', correct: false }
    ]
  },
{
    question: 'During the Battle of Midway, Japan lost',
    answers: [
        { text: 'Most of its battleships', correct: false },
        { text: 'Most of its aircraft carriers', correct: false },
        { text: 'Admiral Yamamoto', correct: false },
        { text: 'Most of its Pacific Fleet', correct: true }
    ]
  },
{
    question: 'The Battle of Stalingrad was',
    answers: [
        { text: 'A clear-cut example of a blitzkrieg', correct: false },
        { text: 'An easy victory for Germany', correct: false },
        { text: 'One of the deadliest battles in human history', correct: true },
        { text: 'Primarily a tank battle', correct: false }
    ]
  },
{
    question: 'Who met at Casablanca?',
    answers: [
        { text: 'Roosevelt and Churchill', correct: true },
        { text: 'Roosevelt, Churchill, and Stalin', correct: false },
        { text: 'Roosevelt, Churchill, Stalin, and Hitler', correct: false },
        { text: 'Truman and Churchill', correct: false }
    ]
  },
{
    question: 'What was the focus of the Tehran Conference?',
    answers: [
        { text: 'The Allied invasion of France', correct: true },
        { text: 'The war in the Pacific', correct: false },
        { text: 'The Battle of Stalingrad', correct: false },
        { text: 'The division of Germany after the war', correct: false }
    ]
  }
]