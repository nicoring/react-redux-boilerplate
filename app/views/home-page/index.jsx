import React from 'react'
import Counter from '../../components/simpleCounter'

export default class HomePage extends React.Component {
	render() {
		return (
			<section className='home-page'>
				<Counter color='red' />
			</section>
		)
	}
}
