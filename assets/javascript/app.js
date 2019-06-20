// Variabe for my Questions, Options, Answers
var questions = [
    { q: "96 % 3", o: ["12", "3", "32", "9"], a: "32" },
    { q: "57 + 18", o: ["76", "86", "65", "75"], a: "75" },
    { q: "What are the electric appliances that are on both side of you?", o: ["DVD player, Air Conditioner, Television, Amplifier,"], a: "Television" },
    { q: "What is the currency in Japan?", o: ["DEN, NED, YEN, EYN"], a: "YEN" },
    { q: "Silver & Gold, Window & Target, Key & Oyster, Rainbow & (????)", o: ["North, West, East, South"], a: "West" },
]

// Push questions and options to the page
var addQuestions = function () {
    // loop though the questions 
    for (let i = 0; i < questions.length; i++) {
        // apply the questions to display
        $('#game-page').append("<h2>" + questions[i].q + "<h2>");
        // loop thought the options 
        for (let j = 0; j < questions[i].o.length; j++) {
            console.log(questions[i].o[j]);
            // apply the options to display 
            $("#game-page").append('<label><input class="question" type="radio" name="question-${i}" value="">' + questions[i].o[j] +'</label>');
        }
    }
}


$(document).ready(function () {

    // When the user click the start button the function will start
    $("#start").on("click", function () {
        // the start button will be disappear from te page
        $("#start-page").attr("style", "display:none");
        $("#game-page").show();
        addQuestions();
        //    get div #contet
        // var displayContent = $("#content");
        // var timeRemaining = $("<p> Time Remaining</p>");
        // // to change the #content div
        // displayContent.append(timeRemaining);
    })
})