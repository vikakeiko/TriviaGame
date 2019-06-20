// Variabe for my Questions, Options, Answers
var questions = [
    { q: "96 % 3", o: ["12", "3", "32", "9"], a: "2" },
    { q: "57 + 18", o: ["76", "86", "65", "75"], a: "4" },
    { q: "What are the electric appliances that are on both side of you?", o: ["DVD player", "Air Conditioner", "Television", "Amplifier"], a: "3" },
    { q: "What is the currency in Japan?", o: ["DEN", "NED", "YEN", "EYN"], a: "3" },
    { q: "Silver & Gold, Window & Target, Key & Oyster, Rainbow & (????)", o: ["North", "West", "East", "South"], a: "1" },
];
var rightAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var timer
var counter = 20;
var displayRightAnswer = document.getElementById("correct");
var displayWrongAnswer = document.getElementById("wrong");

// timer to start conuting while the user answer the questions 
function startTimer() {
    timer = setInterval(function () {
        if (counter <= 1) {
            clearInterval(timer);
            alert("TIMES UP!");
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
        $('#game-page').append("<h2>" + questions[i].q + "<h2>");
        // loop thought the options 
        for (let j = 0; j < questions[i].o.length; j++) {
            var answersIndex = j;

            console.log(questions[i].o[j]);
            // apply the options to display 
            $("#game-page").append(`<label><input class="question" type="radio" name="${questionsIndex}" value="${answersIndex}">` + questions[i].o[j] + '</label>');
        }
    }
}

// when user click the radio button, it will judge the right or wrong answer \
var checkAnswers = function () {
    questions.forEach(function(question,index) {
        var answer = $(`input[name="${index}"]:checked`).attr('value');
        console.log(question + ' q ' + question.a, 'a ' + answer);
        if(answer === undefined) {
            console.log('no answer');
            noAnswer++;
        } else if(answer === question.a) {
            rightAnswer++;
            console.log('good');
        } else {
            wrongAnswer++;
            console.log('boo');
        }
    })
    // inputs.each(function(input) {
    //     console.log(input);
    // })
    // var inputs = $('input[question="1"]');
    // inputs.each(function(input) {
    //     console.log(input);
    // })
    // var questionsIndex = $(this).attr('name');
    //     var answersIndex = $(this).attr('value');

    //     console.log("question " + questionsIndex, "answer " + answersIndex);

    //     if(questions[parseInt(questionsIndex)].a === answersIndex) {
    //         console.log('good');
    //     } else {
    //         console.log('bad')
    //     }
        // if (questionsIndex === answersIndex) {
        //     rightAnswer++;
        //     displayRightAnswer === rightAnswer;
        // } else {
        //     wrongAnswer++;
        //     displayWrongAnswer === wrongAnswer;
        // }
        // var userAnswer = $(".question:checked").val();
        // //  condition to count user's answer
        // if (userAnswer === question.a) {
        //     rightAnswer++;
        //     displayRightAnswer = rightAnswer;
        // } else {
        //     wrongAnswer++;
        //     displayWrongAnswer = wrongAnswer;
        // }
}




$(document).ready(function () {

    // When the user click the start button the function will start
    $("#start").on("click", function () {
        // the start button will be disappear from te page
        $("#start-page").attr("style", "display:none");
        $("#game-page").show();
        // startTimer();
        addQuestions();

        // var displayContent = $("#content");
        // var timeRemaining = $("<p> Time Remaining</p>");
        // // to change the #content div
        // displayContent.append(timeRemaining);
    });
    $("#done").on("click", checkAnswers);
        $("#game-page").attr("style", "display:none");
        $("#result-page").show();
})