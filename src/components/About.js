import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import Button from './ui/Button';

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
            <div className="row">
              <div className="col-md-8 push-md-2">
                <h1 className='h3 text--light'>13 Reasons why is meditation good for you</h1>

                <p>Even though the academic research on mindfulness meditation isn’t as robust as, say, nutrition or exercise, there is a reason why it’s been around for thousands of years. And we’re starting to get a better understanding of why it seems to be beneficial for many aspects of life, from disease and pain management, to sleep, to control of emotions. Here are 13 biggest reasons why you might want to consider trying meditation on your own.</p>

                <hr className='divider' />

                <h2 className="h5 text--light">1. Better Focus</h2>

                <p>Because meditation is a practice in focusing our attention and being aware of when it drifts, this improves our focus when we’re not meditating, as well. It’s a lasting effect that comes from regular bouts of meditation.</p>

                <hr className='divider' />

                <h2 className="h5 text--light">2. More Creativity</h2>

                <p>Researchers at Leiden University in the Netherlands studied both focused-attention and open-monitoring mediation to see if there was any improvement in creativity afterwards. They found that people who practiced focused-attention meditation did not show any obvious signs of improvement in the creativity task following their meditation. For those who did open-monitoring meditation, however, they performed better on a task that asked them to come up with new ideas.</p>

                <hr className='divider' />

                <h2 className='h5 text--light'>3. Increased Immunity</h2>

                <p>Relaxation appears to boost immunity in recovering cancer patients. A study at the Ohio State University found that progressive muscular relaxation, when practised daily, reduced the risk of breast cancer recurrence. In another study at Ohio State, a month of relaxation exercises boosted natural killer cells in the elderly, giving them a greater resistance to tumours and to viruses.</p>

                <hr className='divider' />

                <h2 className="h5 text--light">4. Better Memory</h2>

                <p>One of the things meditation has been linked to is improving rapid memory recall. Catherine Kerr, a researcher at the Martinos Center for Biomedical Imaging and the Osher Research Center found that people who practiced mindful meditation were able to adjust the brain wave that screens out distractions and increase their productivity more quickly that those that did not meditate. She said that this ability to ignore distractions could explain “their superior ability to rapidly remember and incorporate new facts.” This seems to be very similar to the power of being exposed to new situations that will also dramatically improve our memory of things.</p>

                <hr className='divider' />

                <h2 className="h5 text--light">5.Less Stress</h2>

                <p>Mindful meditation has been shown to help people perform under pressure while feeling less stressed. A 2012 study split a group of human resources managers into three, which one third participating in mindful meditation training, another third taking body relaxation training and the last third given no training at all. A stressful multitasking test was given to all the managers before and after the eight-week experiment. In the final test, the group that had participated in the meditation training reported less stress during the test than both of the other groups.</p>

                <hr className='divider' />

                <h2 className="h5 text--light">6. Less Anxiety</h2>

                <p>The more we meditate, the less anxiety we have because we’re loosening the connections of particular neural pathways. This sounds bad, but it’s not. Without meditation, there’s a section of our brains that’s sometimes called the Me Center (or the medial prefrontal cortex). This is the part that processes information relating to ourselves and our experiences. Normally the neural pathways from the bodily sensation and fear centers of the brain to the Me Center are very strong. When you experience a scary or upsetting sensation, it triggers a strong reaction in your Me Center, making you feel scared and under attack.</p>

                <p>When we meditate, we weaken this neural connection. As a result, we don’t react as strongly to sensations that might have once lit up our Me Centers. As we weaken this connection, we simultaneously strengthen the connection between what’s known as our Assessment Center (the part of our brains known for reasoning) and our bodily sensation and fear centers. So when we experience scary or upsetting sensations, we can more easily look at them rationally.</p>

                <hr className='divider' />

                <h2 className="h5 text--light">7. More Gray Matter</h2>

                <p>Meditation has been linked to larger amounts of gray matter in the hippocampus and frontal areas of the brain. I didn’t know what this meant at first, but it turns out it’s pretty great. More gray matter can lead to more positive emotions, longer-lasting emotional stability, and heightened focus during daily life. Meditation has also been shown to diminish age-related effects on gray matter and reduce the decline of our cognitive functioning.</p>

                <hr className='divider' />

                <h2 className='h5 text--light'>8. Emotional Balance</h2>

                <p>Emotional balance, means to be free of all the neurotic behavior that results from the existence of a tortured and traumatized ego. This is very hard to achieve fully, but meditation certainly is the way to cure such neurosis and unhealthy emotional states. As one’s consciousness is cleansed of emotionally soaked memories, not only does great freedom abound, but also great balance. As one’s responses then are not colored by the burdens one carries, but are instead true, direct and appropriate.</p>

                <hr className='divider' />

                <h2 className='h5 text--light'>9. Increased Fertility</h2>

                <p>A study at the University of Western Australia found that women are more likely to conceive during periods when they are relaxed rather than stressed. A study at Trakya University, in Turkey, also found that stress reduces sperm count and motility, suggesting relaxation may also boost male fertility.</p>

                <hr className='divider' />

                <h2 className='h5 text--light'>10. Relieves Irritable Bowel Syndrome</h2>

                <p>When patients suffering from irritable bowel syndrome began practising a relaxation meditation twice daily, their symptoms of bloating, diarrhoea and constipation improved significantly. The meditation was so effective the researchers at the State University of New York recommended it as an effective treatment.</p>

                <hr className='divider' />

                <h2 className='h5 text--light'>11. Lowers Blood Pressure</h2>

                <p>A study at Harvard Medical School found that meditation lowered blood pressure by making the body less responsive to stress hormones, in a similar way to blood pressure-lowering medication. Meanwhile a British Medical Journal report found that patients trained how to relax had significantly lower blood pressure.</p>

                <hr className='divider' />

                <h2 className='h5 text--light'>12. Anti-Inflammatory</h2>

                <p>Stress leads to inflammation, a state linked to heart disease, arthritis, asthma and skin conditions such as psoriasis, say researchers at Emory University in the US. Relaxation can help prevent and treat such symptoms by switching off the stress response. In this way, one study at McGill University in Canada found that meditation clinically improved the symptoms of psoriasis.</p>

                <hr className='divider' />

                <h2 className='h5 text--light'>13. Calmness</h2>

                <p>The simple difference between those who meditate and those who do not, is that for a meditative mind the thought occurs but is witnessed, while for an ordinary mind, the thought occurs and is the boss. So in both minds, an upsetting thought can occur, but for those who meditate it is just another thought, which is seen as such and is allowed to blossom and die, while in the ordinary mind the thought instigates a storm which rages on and on.</p>

                <p className='text-center'>
                  <Link className='btn btn--primary mt-4 text-center' to='/session' title='Start your first session'>Start your first session</Link>
                </p>
              </div>
            </div>
          </div>
				</main>
			</div>
		);
	}
}
