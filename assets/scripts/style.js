$(document).ready(){

(function(){
    var allQuestions = [
        {question: "This is the question",
        answers:["a:", "b:", "c:"]
        },
        {question: "This is the question",
        answers:["a:", "b:", "c:"]
        },
        {question: "This is the question",
        answers:["a:", "b:", "c:"]
        },
        {question: "This is the question",
        answers:["a:", "b:", "c:"]
        },
        {question: "This is the question",
        answers:["a:", "b:", "c:"]
        },
        {question: "This is the question",
        answers:["a:", "b:", "c:"]
        },
        {question: "This is the question",
        answers:["a:", "b:", "c:"]
        },
        {question: "This is the question",
        answers:["a:", "b:", "c:"]
        },
        {question: "This is the question",
        answers:["a:", "b:", "c:"]
        },
        {question: "This is the question",
        answers:["a:", "b:", "c:"]
        }];

    questionCounter = 0;
    selectOptions = [];
    areaQuiz = $('#quiz');

    nextQuestion();

    $('#next').click(function(){
        chooseOption();
        if (isNaN(selectOptions[questionCounter])){
            alert('Find out your fate...');
        }
        else {
            questionCounter++;
            nextQuestion();
        }
    });

    $('#prev').click(function() {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
}


};