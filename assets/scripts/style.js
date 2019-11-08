function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    var myQuestions = [
        {
            question: "This is the question",
            answers: {
                a: 'False',
                b: 'False',
                c: 'True'
            },
            correctAnswer: 'b'
        },
        {
            question: "This is the question",
            answers: {
                a: 'False',
                b: 'False',
                c: 'True'
            },
            correctAnswer: 'b'
        },
        {
            question: "This is the question",
            answers: {
                a: 'False',
                b: 'False',
                c: 'True'
            },
            correctAnswer: 'b'
        },
        {
            question: "This is the question",
            answers: {
                a: 'False',
                b: 'False',
                c: 'True'
            },
            correctAnswer: 'b'
        },
        {
            question: "This is the question",
            answers: {
                a: 'False',
                b: 'False',
                c: 'True'
            },
            correctAnswer: 'b'
        },
        {
            question: "This is the question",
            answers: {
                a: 'False',
                b: 'False',
                c: 'True'
            },
            correctAnswer: 'b'
        },
        {
            question: "This is the question",
            answers: {
                a: 'False',
                b: 'False',
                c: 'True'
            },
            correctAnswer: 'b'
        },
        {
            question: "This is the question",
            answers: {
                a: 'False',
                b: 'False',
                c: 'True'
            },
            correctAnswer: 'b'
        },
        {
            question: "This is the question",
            answers: {
                a: 'False',
                b: 'False',
                c: 'True'
            },
            correctAnswer: 'b'
        },
        {
            question: "This is the question",
            answers: {
                a: 'False',
                b: 'False',
                c: 'True'
            },
            correctAnswer: 'b'
        },
    ];

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
    // Incorporate an if loop for this part,
    /*
    if (myquestions.answer == 'a' || 'b'){
        alert(YOU DIED)
    }else{

    }
    */
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}



