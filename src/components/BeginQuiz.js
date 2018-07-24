import React from 'react';

const BeginQuiz = ({updateFlashCard}) => (
	<React.Fragment>
		<section className="start-quiz row">
			<button onClick={updateFlashCard} type="button"
			        className="btn btn-primary col-12" data-toggle="modal"
			        data-target="#quizModal" data-backdrop="static" data-keyboard="false">
				Start Quiz
			</button>
		</section>
		<section className="how-it-works">
			<p tabIndex="0">
				Answer a question correctly on the first try and earn a point!
				If you don't answer a question correctly, you will receive no points,
				but you can still keep trying until you get the right answer.
			</p>
		</section>
	</React.Fragment>
);

export default BeginQuiz;
