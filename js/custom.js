// Hello World

// count is position of where the user in the quiz or which question they're up to
var count = 0, quiz, quiz_status, question, choice, choices, chA, chB, chC, chD, correct = 0;

// this is a multidimensional array with 5 inner array elements with 10 elements inside them
var questions = [["Which one of the following is reffered as Stormborn?","Jon Snow","Arya Stark","Daenerys Targaryen","Cersei Lannister", "C"],
                     ["A golden rose on a green field is the sigil of ?","House Arryn","House Martell","House Arryn","House Tyrell","D"],
                     ["As High as Honor are the words of?","House Martell","House Lannister","House Arryn","House Tully","C"],
                     ["A golden rose on a green field is the sigil of ?","House Arryn","House Martell","House Arryn","House Tyrell","D"],
                     ["As High as Honor are the words of?","House Martell","House Lannister","House Arryn","House Tully","C"],
                     ["A golden rose on a green field is the sigil of ?","House Arryn","House Martell","House Arryn","House Tyrell","D"],
                     ["As High as Honor are the words of?","House Martell","House Lannister","House Arryn","House Tully","C"],
                     ["A golden rose on a green field is the sigil of ?","House Arryn","House Martell","House Arryn","House Tyrell","D"],
                     ["As High as Honor are the words of?","House Martell","House Lannister","House Arryn","House Tully","C"],
                     ["A golden rose on a green field is the sigil of ?","House Arryn","House Martell","House Arryn","House Tyrell","D"]];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  quiz = get("quiz");
  if(count >= questions.length){
    quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct!</h2>";
    get("quiz_status").innerHTML = "Quiz Completed";
    // resets the variable to allow users to restart the quiz
    count = 0;
    correct = 0;
    // stops rest of renderQuestion function running when quiz is completed
    return false;
  }
  get("quiz_status").innerHTML = "Question "+(count+1)+" of "+questions.length;
  question = questions[count][0];
  chA = questions[count][1];
  chB = questions[count][2];
  chC = questions[count][3];
  chD = questions[count][4];
  quiz.innerHTML = "<h3>"+question+"</h3>";
  // the += appends to the data we started on the line above
  quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"&nbsp;&nbsp;&nbsp;";
  quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"&nbsp;&nbsp;&nbsp;";
  quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"&nbsp;&nbsp;&nbsp;";
  quiz.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()' class='btn btn-primary'>S u b m i t</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[count][5]){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  count++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
