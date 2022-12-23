const question = [{
   'que': 'what is your favorite programming Language?',
   'a': 'Java',
   'b': 'PHP',
   'c': 'CSS',
   'd': 'JavaScript',
   'correct': 'a'
},
{
   'que': 'which years lanch Js programming Language?',
   'a': '1992',
   'b': '1923',
   'c': '1974',
   'd': 'none of this',
   'correct': 'c'
},
{
   'que': 'How is an array initialized in C language?',
   'a': 'int arr[3]={1,2,3}',
   'b': ' arr[3] int ={1,2,3,6}',
   'c': 'int a=array(1,2,3)',
   'd': 'none of this',
   'correct': 'a'
},
{
   'que': "Which of the following is an exit controlled loop?",
   'a': 'while loop',
   'b': 'do-while Loop',
   'c': 'For Loop',
   'd': 'none of this',
   'correct': 'b'
},
{
   'que': 'Which is platform dependent?',
   'a': 'Java',
   'b': 'HTML',
   'c': 'CSS',
   'd': 'JavaScript',
   'correct': 'a'
},
{
   'que': 'CSS stand for ?',
   'a': 'Case Cading Style Sheet ',
   'b': 'beauty parler',
   'c': 'Makeup',
   'd': 'All of these',
   'correct': 'd'
},
]
let index = 0;
const total = question.length;
let right = 0,
   wrong = 0;
const quebox = document.getElementById("quebox");
const optionInput = document.querySelectorAll(".options");
const loadQuestion = () => {
   if (index === total) {
      return endQuiz()
   }
   reset();
   const data = question[index];
   quebox.innerText = `${index + 1})  ${data.que}`;
   optionInput[0].nextElementSibling.innerText=data.a;
   optionInput[1].nextElementSibling.innerText=data.b;
   optionInput[2].nextElementSibling.innerText=data.c;
   optionInput[3].nextElementSibling.innerText=data.d;
}
const submitQuiz = () => {
   const data = question[index];
   const ans = getans()
   if (ans === data.correct) {
      right++;
   }
   else {
      wrong++;
   }
   index++;
   loadQuestion();
   return;
}
const getans = () => {
   let answer;
   optionInput.forEach(
      (input) => {
         if (input.checked) {
            answer=input.value;
         }
      }
   )
   return answer;
}
const reset = () => {
   optionInput.forEach(
      (input) => {
         input.checked = false;
      }
   )
}
const endQuiz = () => {
   document.getElementById("main").innerHTML = `
<h2> Thank You </h2>
<h3>${right}/${total} correct</h3>
`;
}
loadQuestion();