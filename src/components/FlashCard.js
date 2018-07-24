import React from 'react';
import Question from './Question';

const FlashCard = ({
	                   questions,
	                   updateFlashCard,
	                   currentQuestionId,
	                   updateScore,
	                   updateAttempts,
	                   score
                   }) =>
{
	const item = questions.find(item => item.id === currentQuestionId);
	const answer = item.answer;
		return (
			<section className="modal fade" id="quizModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
				<section className="modal-dialog" role="document">
					<section className="modal-content">
						<section className="modal-header">
							<p className="modal-title" id="modalLabel">{item.question}</p>
						</section>
						<section className="modal-body btn-group btn-group-toggle row" data-toggle="buttons">
								{item.options.map((option, index) => (
									<Question
										updateScore={updateScore}
										updateAttempts={updateAttempts}
										option={option}
										key={index}
										answer={answer}/>
								))}
						</section>
						<section  className="modal-footer">
							<section className="quiz-info-container col-8">
								<div>Score: <span className={score > 0 ? 'positive-score' : ''}> {score}</span></div>
								<div className="questions-remaining">Question {currentQuestionId}/{questions.length}</div>
							</section>
							<button type="button"
							        onClick={updateFlashCard}
							        className="btn btn-primary next-button col-4">Next
							</button>
						</section>
					</section>
				</section>
			</section>
		)
};

export default FlashCard;
