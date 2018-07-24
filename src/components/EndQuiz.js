import React from 'react';

const EndQuiz = ({resetQuiz, score, numberOfQuestions}) => {
	return (
		<React.Fragment>
			<section className="end-quiz row">
				<button className="btn btn-primary col-12" onClick={resetQuiz}>Click Here To Go Back Home</button>
			</section>
			<section className="score-breakdown">
				<p className="col-12">Your Score is {score} out of {numberOfQuestions}</p>
			</section>
		</React.Fragment>
	)
};

export default EndQuiz;
