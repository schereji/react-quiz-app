import React, { Component } from 'react';
import './App.css';
import FlashCard from './components/FlashCard';
import BeginQuiz from './components/BeginQuiz';
import EndQuiz from './components/EndQuiz';
import {Questions} from './json-payload.js';

class App extends Component {
  state = {
    questions: Questions,
	  currentQuestionId: 0,
	  score: 0,
	  attempts: 0
  };
  
  resetQuiz = (event) => {
	  this.setState({
		  currentQuestionId: 0,
	    score: 0,
	    attempts: 0
    });
  };
	
	closeModal = () => {
		let modalBackdrop = document.querySelector('.modal-backdrop');
		let modal = document.querySelector('.modal');
		modal.classList.remove('show');
		modal.setAttribute('aria-hidden', 'true');
		modal.setAttribute('style', 'display: none');
		if(modalBackdrop) {
			modalBackdrop.parentElement.removeChild(modalBackdrop);
		}
	};
  
  updateFlashCard = () => {
	  this.setState({currentQuestionId: this.state.currentQuestionId + 1});
	
	  if(this.state.currentQuestionId < this.state.questions.length) {
	  	this.setState({attempts: 0});
	  	const activeEl = document.querySelector('.active');
	  	if(activeEl && activeEl.classList.contains('correct')) {
			  activeEl.classList.remove('correct', 'active');
		  } else if(activeEl && activeEl.classList.contains('incorrect')) {
			  activeEl.classList.remove('incorrect', 'active');
		  }
	  } else {
			this.closeModal();
		}
  };
  
  updateScore = () => {
  	if(this.state.attempts === 0) {
		  this.setState({score: this.state.score + 1});
	  }
    this.setState({attempts: 0});
  };
  
  updateAttempts = () => {
  	this.setState({attempts: this.state.attempts + 1});
  };
  
  render() {
	  if(this.state.currentQuestionId < 1) {
		  return (<BeginQuiz updateFlashCard={this.updateFlashCard}/>);
	  } else if(this.state.currentQuestionId> this.state.questions.length) {
	  	return (
	  		<EndQuiz
				  score={this.state.score}
				  numberOfQuestions={this.state.questions.length}
				  resetQuiz={this.resetQuiz} />
		  );
	  }
    return (
      <main className="app-container container">
        <FlashCard
          updateFlashCard={this.updateFlashCard}
	        currentQuestionId={this.state.currentQuestionId}
          score={this.state.score}
          updateScore={this.updateScore}
          updateAttempts={this.updateAttempts}
          attempts={this.state.attempts}
          questions={this.state.questions}
        />
      </main>
    );
  }
}

export default App;
