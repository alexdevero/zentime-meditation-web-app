import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('store')
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);

		this.store = this.props.store;
	}

	render() {
		const store = this.store;

		return (
			<div className='page about'>
				<main>
  				<h1>6. Mindfulness Meditation Help The Brain Reduce Distractions</h1>

          <p>Training the mind to focus and concentrate is becoming more critical than ever in this 24/7 world where our attention is being pulled in 100 different direction at once. In a Harvard study, researchers reported that “brain cells use particular frequencies, or waves, to regulate the flow of information in much the same way that radio stations broadcast at specific frequencies. One frequency, the alpha rhythm, is particularly active in the cells that process touch, sight and sound in the brain’s outermost layer, called the cortex, where it helps to suppress irrelevant or distracting sensations and regulate the flow of sensory information between brain regions.”</p>

          <p>In this study, participants went through an eight-week mindfulness training program. At the conclusion of the eight-week program, those who completed the mindfulness meditation training “made faster and significantly more pronounced attention-based adjustments to the alpha rhythm” than those in the control group.</p>
				</main>
			</div>
		);
	}
}
