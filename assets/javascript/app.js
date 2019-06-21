// Variabe for my Questions, Options, Answers
var questions = [
    { q: "96 % 3", o: ["12", "3", "32", "9"], a: "2" },
    { q: "57 + 18", o: ["76", "86", "65", "75"], a: "3" },
    { q: "What are the electric appliances that are on both side of you?", o: ["DVD player", "Air Conditioner", "Television", "Amplifier"], a: "2" },
    { q: "What is the currency in Japan?", o: ["DEN", "NED", "YEN", "EYN"], a: "2" },
    { q: "Silver & Gold, Window & Target, Key & Oyster, Rainbow & (????)", o: ["North", "West", "East", "South"], a: "1" },
];
var rightAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var timer
var counter = 80;
var displayRightAnswer = document.getElementById("correct");
var displayWrongAnswer = document.getElementById("incorrect");
var displayNoAnswer = document.getElementById("unanswered");

// timer to start conuting while the user answer the questions 
function startTimer() {
    timer = setInterval(function () {
        if (counter <= 1) {
            clearInterval(timer);
            // alert("TIMES UP!");
            checkAnswers();
            $("#game-page").attr("style", "display:none");
            $("#result-page").show();
        }
        counter--;
        $('#show-number').text(counter);
    }, 1000)
}


// Push questions and options to the page
var addQuestions = function () {
    // loop though the questions 
    for (let i = 0; i < questions.length; i++) {
        var questionsIndex = i;
        // apply the questions to display
        $('#content').append("<h2>" + questions[i].q + "<h2>");
        // loop thought the options 
        for (let j = 0; j < questions[i].o.length; j++) {
            var answersIndex = j;

            console.log(questions[i].o[j]);
            // apply the options to display 
            $("#content").append(`<label><input class="question" type="radio" name="${questionsIndex}" value="${answersIndex}">` + questions[i].o[j] + '</label>');
        }
    }
}

// when user click the radio button, it will judge the right or wrong answer \
var checkAnswers = function () {
    questions.forEach(function (question, index) {
        var answer = $(`input[name="${index}"]:checked`).attr('value');
        console.log(question + ' q ' + question.a, 'a ' + answer);
        if (answer === undefined) {
            // console.log('no answer');
            noAnswer++;
            displayNoAnswer.textContent = noAnswer;
        } else if (answer === question.a) {
            rightAnswer++;
            displayRightAnswer.textContent = rightAnswer;
            // console.log('good');
        } else {
            wrongAnswer++;
            displayWrongAnswer.textContent = wrongAnswer;
            // console.log('boo');
        }
    })
    $("#game-page").attr("style", "display:none");
    $("#result-page").show();
}

$(document).ready(function () {

    // When the user click the start button the function will start
    $("#start").on("click", function () {
        // the start button will be disappear from te page
        $("#start-page").attr("style", "display:none");
        $("#game-page").show();
        // $("#result-page").attr("style", "display:none");
        startTimer();
        addQuestions();
    });
    // when the user clicked the button, check answers
    $("#done").on("click", checkAnswers);
})
