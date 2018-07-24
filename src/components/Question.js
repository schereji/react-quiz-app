import React, {Component} from 'react';

class Question extends Component {
	
	handleClick = (event) => {
		const selection = event.target;
		if(selection.nodeName.toLowerCase() === 'label') {
			if(selection.firstChild.value === this.props.answer) {
				selection.classList.remove('incorrect');
				selection.classList.add('correct');
				this.props.updateScore();
			} else {
				selection.classList.remove('correct');
				selection.classList.add('incorrect');
			}
			this.props.updateAttempts();
		}
	};
	
	render() {
		return (
			<label tabIndex="0" className="col-12 btn btn-secondary option-item-label" onClick={this.handleClick}>
				<input aria-label={this.props.option.text} className="option-item" type="radio" name="options"
				       value={this.props.option.letter}/>{this.props.option.text}
			</label>
		);
	}
}
export default Question;
