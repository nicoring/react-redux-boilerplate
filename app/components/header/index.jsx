import React from "react"
import { connect } from 'react-redux'


// This decorator allows you to filter which stores you would like to sync
// This example subscribes to all of them
@connect(state => state)
export default class Header {
	render() {
		return (
			<header>
				<div>Normal</div>
				<div>Auto</div>
			</header>
		)
	}
}
