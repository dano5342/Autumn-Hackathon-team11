$('document').ready(function() {

    function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

        var myQuestions = [{
                question: "Where was Dracula born?",
                answers: {
                    a: 'Slovakia'
                    b: 'Romania'
                    c: 'Hungary'
                },
                correctAnswer: 'b'
            },
            {
                question: "In which area did Dracula live?",
                answers: {
                    a: 'Tiraspol'
                    b: 'Targu-Mures'
                    c: 'Transylvania'
                },
                correctAnswer: 'c'
            },
            {
                question: "What is the name of the famous Dracula Castle?",
                answers: {
                    a: 'Bran Castle',
                    b: 'Stone Castle',
                    c: 'Vajahunyad Castle'
                },
                correctAnswer: 'a'
            },
            {
                question: "How old is the Dracula Castle estimated to be?",
                answers: {
                    a: '520 years old',
                    b: '642 years old',
                    c: '846 years old'
                },
                correctAnswer: 'b'
            },
            {
                question: "In which part of the body does Vampires attack?",
                answers: {
                    a: 'Right-arm',
                    b: 'Neck',
                    c: 'Heart'
                },
                correctAnswer: 'b'
            },
            {
                question: "What are the vampires strengths?",
                answers: {
                    a: 'Intelligent, fast, seducers',
                    b: 'Impervious to gunshot',
                    c: 'Garlic farming'
                },
                correctAnswer: 'a'
            },
            {
                question: "How old is Dracula estimated to be if he's still alive?",
                answers: {
                    a: '659 Y/O',
                    b: '588 Y/O',
                    c: '749 Y/O'
                },
                correctAnswer: 'b'
            },
            {
                question: "When was the first Vampire movie made?",
                answers: {
                    a: '1953',
                    b: '1965',
                    c: '1920'
                },
                correctAnswer: 'c'
            },
            {
                question: "What happens when you get bitten in your sleep?",
                answers: {
                    a: 'You never wake up again.',
                    b: 'A transformation begins',
                    c: 'Slight headache when you wakeup'
                },
                correctAnswer: 'b'
            },
            {
                question: "How do you kill vampires?",
                answers: {
                    a: 'Using blessed silver bullets and garlic',
                    b: 'Pouring water over the vampire',
                    c: 'Throwing him some apples'
                },
                correctAnswer: 'a'
            },
        ];

        function showQuestions(questions, quizContainer) {
            var output = [];
            var answers;
            for (var i = 0; i < questions.length; i++) {
                for (letter in questions[i].answers) {
                    answers.push(
                        '<label>' +
                        '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                        letter + ': ' +
                        questions[i].answers[letter] +
                        '</label>'

                    );
                }
                output.push(
                    '<div class="question">' + questions[i].question + '</div>' +
                    '<div class="answers">' + answers.join('') + '</div>'
                );
            }
        }
    }

    function showResults(questions, quizContainer, resultsContainer) {

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for (var i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;

                answerContainers[i].style.color = 'lightgreen';
            } else {
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    showQuestions(questions, quizContainer);

    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

});