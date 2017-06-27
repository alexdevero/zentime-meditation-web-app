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
          <div className="container">
            <h1 className='h2'>Why is meditation good for you</h1>
            <h2 className='h4'>1. Increased Immunity</h2>

            <p>Relaxation appears to boost immunity in recovering cancer patients. A study at the Ohio State University found that progressive muscular relaxation, when practised daily, reduced the risk of breast cancer recurrence. In another study at Ohio State, a month of relaxation exercises boosted natural killer cells in the elderly, giving them a greater resistance to tumours and to viruses.</p>

            <h2 className='h4'>2. Emotional Balance</h2>

            <p>Emotional balance, means to be free of all the neurotic behavior that results from the existence of a tortured and traumatized ego. This is very hard to achieve fully, but meditation certainly is the way to cure such neurosis and unhealthy emotional states. As one’s consciousness is cleansed of emotionally soaked memories, not only does great freedom abound, but also great balance. As one’s responses then are not colored by the burdens one carries, but are instead true, direct and appropriate.</p>

            <h2 className='h4'>3. Increased Fertility</h2>

            <p>A study at the University of Western Australia found that women are more likely to conceive during periods when they are relaxed rather than stressed. A study at Trakya University, in Turkey, also found that stress reduces sperm count and motility, suggesting relaxation may also boost male fertility.</p>

            <h2 className='h4'>4. Relieves Irritable Bowel Syndrome</h2>

            <p>When patients suffering from irritable bowel syndrome began practising a relaxation meditation twice daily, their symptoms of bloating, diarrhoea and constipation improved significantly. The meditation was so effective the researchers at the State University of New York recommended it as an effective treatment.</p>

            <h2 className='h4'>5. Lowers Blood Pressure</h2>

            <p>A study at Harvard Medical School found that meditation lowered blood pressure by making the body less responsive to stress hormones, in a similar way to blood pressure-lowering medication. Meanwhile a British Medical Journal report found that patients trained how to relax had significantly lower blood pressure.</p>

            <h2 className='h4'>6. Anti-Inflammatory</h2>

            <p>Stress leads to inflammation, a state linked to heart disease, arthritis, asthma and skin conditions such as psoriasis, say researchers at Emory University in the US. Relaxation can help prevent and treat such symptoms by switching off the stress response. In this way, one study at McGill University in Canada found that meditation clinically improved the symptoms of psoriasis.</p>

            <h2 className='h4'>7. Calmness</h2>

            <p>The simple difference between those who meditate and those who do not, is that for a meditative mind the thought occurs but is witnessed, while for an ordinary mind, the thought occurs and is the boss. So in both minds, an upsetting thought can occur, but for those who meditate it is just another thought, which is seen as such and is allowed to blossom and die, while in the ordinary mind the thought instigates a storm which rages on and on.</p>
          </div>
				</main>
			</div>
		);
	}
}
