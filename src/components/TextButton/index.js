import React from 'react';

/**
 * Class Components ...extends React.Component
 * Functional components
 */

// const TextButton = (props) => {
// 	//const { text } = props;
// 	const text = props.text;
// 	return (
// 		<button>{text}</button>
// 	);
// }

class TextButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: props.text //Get initial text from props
		}
	}

	handleButtonClick = () => {
		this.setState({ text: 'Saving' });
	}

	render() {
		return (
			<button onClick={this.handleButtonClick}>{this.state.text}</button>
		)
	}

}

export default TextButton;