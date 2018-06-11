var correct = 0;
var incorrect = 0;
var notcomplete = 0;
var timeLeft = 90;
var intervalId;


// Counts down the user's time left to complete the game
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(timer, 1000);
}


function timer() {
  timeLeft--;

  var converted = timeConverter(timeLeft);

  // $("#timer").html("<h2>Time Left</h2>" + "<hr>" + "<h2>" + timeLeft + "</h2>");

  $("#timer").html("<h2>Time Left</h2>" + "<hr>" + "<h3>" + converted + "</h3>")

  if (timeLeft === 0) {

      alert("Time's Up!");

    checkAnswer()

  }
}


function checkAnswer() {

// console.log($(".questions"))
var answers = $(".questions")
var uncheckedBoxes = 0

for(var i = 0; i < answers.length; i++) {

      for(var y = 0; y < answers[i].elements.length; y++) {

        var checked = answers[i].elements[y].checked
        var defaultValue = answers[i].elements[y].defaultValue
        if (checked && defaultValue === "true") {
          correct ++
        }

        if (!checked) {
          uncheckedBoxes++
        }
    
      }

    }

notcomplete = uncheckedBoxes - (answers.length * 3)
incorrect = (answers.length - notcomplete) - correct

    console.log("this is correct!" , correct)
    console.log("this is incorrect!" , (answers.length - notcomplete) - correct)
    console.log("these are not answered" , uncheckedBoxes - (answers.length * 3))
  
  displayResults()
  }

function displayResults() {

$("#wrapper").empty()
var resultsDiv = $("<div>")
resultsDiv.html("<h2>Correct Answers: " + correct + "</h2> <br> <h2>Incorrect Answers: " + incorrect + "</h2> <br> <h2>Not Answered: " + notcomplete + "</h2>")
resultsDiv.attr("class","results")
$("#wrapper").append(resultsDiv)



}



$("#submit").on("click", function (event) {

  clearInterval(intervalId);
  checkAnswer()

 

})



//  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
};

run()