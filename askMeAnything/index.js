const elementAnswer = document.querySelector("#answer")
const inputQuestion = document.querySelector("#inputQuestion")
const buttonAsk = document.querySelector('#buttonAsk')
const answers = [
  "Sure!",
  "I'm not so sure.",
  "It's truly like that.",
  "Don't count on that.",
  "For sure!",
  "Ask again later.",
  "Tes, definetely!",
  "My answer is 'no'.",
  "Count on that.",
  "It's best not to tell you now.",
  "By the looks of it, yes",
  "My sources say 'no'.",
  "Probably.",
  "It's not possible to say now.",
  "There's a good perspective.",
  "The perspectives are not so good.",
  "Yes.",
  "Focus and ask again.",
  "The signs point to a positive answer.",
]

function askQuestion() {

  if(inputQuestion.value == "") {
    alert("Type your question.")
    return
  }

  buttonAsk.setAttribute("disabled", true)

  const question = "<div>" + inputQuestion.value + "</div>"


  const totalAnswers = answers.length
  const randomNumber = Math.floor(Math.random() * totalAnswers)

  elementAnswer.innerHTML = question + answers[randomNumber]

  elementAnswer.style.opacity = 1;


  setTimeout(function() {
    elementAnswer.style.opacity = 0;
    buttonAsk.removeAttribute("disabled")
  }, 3000)
}