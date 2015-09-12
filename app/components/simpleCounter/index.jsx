import React from 'react'
import actions from '../../redux/actions/actions'
import store from '../../redux/store'
import { connect } from 'react-redux'

@connect(state => state.counter)
export default class SimpleCounter extends React.Component {

	render() {
		// Read the color value passed in by parent component and create an inline style for the button
		const style = {
			color : this.props.color
		}

		return (
			<button style={style} onClick={this.clicked} >Clicked {this.props.counter} times</button>
		)
	}
	// We use the arrow function syntax to define a function so that 'this' gets bound automatically.
	// Reference Lexical This https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
	clicked = () => {
		// Setting state will merge the object you pass in with the previous state. Never mutate state directly!
		actions.increment(1)
	}
}
