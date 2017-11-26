import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { Card, CardSide, CardFront, CardBack, CardNumber, CardTitle, CardDescription } from './ui/Card'
import { GridContainer, GridRow, GridColumn } from './ui/Grid'

@inject('store')
@observer
export default class Why extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
  }

  flipCard(e) {
    e.currentTarget.classList.toggle('flipped')
  }

  render() {
    const store = this.store;

    return (
      <div className='page why'>
        <main>
          <GridContainer>
            <GridRow justify='center'>
              <GridColumn md='8'>
                <div className="icon icon--mind mt-5 mb-5"></div>

                <h1 className='h3 mt-4'>13 Biggest benefits of meditation</h1>

                <p>Even though the academic research on mindfulness meditation isn’t as robust as, say, nutrition or exercise, there is a reason why it’s been around for thousands of years. And we’re starting to get a better understanding of why it seems to be beneficial for many aspects of life, from disease and pain management, to sleep, to control of emotions. Here is a list of 13 biggest benefits of meditation.</p>

                <GridRow>
                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>1.</CardNumber>

                        <CardTitle>Better Focus</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Because meditation is a practice in focusing our attention and being aware of when it drifts, this improves our focus when we’re not meditating, as well. It’s a lasting effect that comes from regular bouts of meditation.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>2.</CardNumber>

                        <CardTitle>More Creativity</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Researchers at Leiden University in the Netherlands studied both focused-attention and open-monitoring mediation to see if there was any improvement in creativity afterwards. They found that people who practiced focused-attention meditation did not show any obvious signs of improvement in the creativity task following their meditation. For those who did open-monitoring meditation, however, they performed better on a task that asked them to come up with new ideas.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>3.</CardNumber>

                        <CardTitle>Increased Immunity</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Relaxation appears to boost immunity in recovering cancer patients. A study at the Ohio State University found that progressive muscular relaxation, when practised daily, reduced the risk of breast cancer recurrence. In another study at Ohio State, a month of relaxation exercises boosted natural killer cells in the elderly, giving them a greater resistance to tumours and to viruses.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>4.</CardNumber>

                        <CardTitle>Better Memory</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>One of the things meditation has been linked to is improving rapid memory recall. Catherine Kerr, a researcher at the Martinos Center for Biomedical Imaging and the Osher Research Center found that people who practiced mindful meditation were able to adjust the brain wave that screens out distractions and increase their productivity more quickly that those that did not meditate. She said that this ability to ignore distractions could explain “their superior ability to rapidly remember and incorporate new facts.” This seems to be very similar to the power of being exposed to new situations that will also dramatically improve our memory of things.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>5.</CardNumber>

                        <CardTitle>Less Stress</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Mindful meditation has been shown to help people perform under pressure while feeling less stressed. A 2012 study split a group of human resources managers into three, which one third participating in mindful meditation training, another third taking body relaxation training and the last third given no training at all. A stressful multitasking test was given to all the managers before and after the eight-week experiment. In the final test, the group that had participated in the meditation training reported less stress during the test than both of the other groups.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>6.</CardNumber>

                        <CardTitle>Less Anxiety</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>The more we meditate, the less anxiety we have because we’re loosening the connections of particular neural pathways. This sounds bad, but it’s not. Without meditation, there’s a section of our brains that’s sometimes called the Me Center (or the medial prefrontal cortex). This is the part that processes information relating to ourselves and our experiences. Normally the neural pathways from the bodily sensation and fear centers of the brain to the Me Center are very strong. When you experience a scary or upsetting sensation, it triggers a strong reaction in your Me Center, making you feel scared and under attack.</CardDescription>

                        <CardDescription>When we meditate, we weaken this neural connection. As a result, we don’t react as strongly to sensations that might have once lit up our Me Centers. As we weaken this connection, we simultaneously strengthen the connection between what’s known as our Assessment Center (the part of our brains known for reasoning) and our bodily sensation and fear centers. So when we experience scary or upsetting sensations, we can more easily look at them rationally.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>7.</CardNumber>

                        <CardTitle>More Gray Matter</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Meditation has been linked to larger amounts of gray matter in the hippocampus and frontal areas of the brain. I didn’t know what this meant at first, but it turns out it’s pretty great. More gray matter can lead to more positive emotions, longer-lasting emotional stability, and heightened focus during daily life. Meditation has also been shown to diminish age-related effects on gray matter and reduce the decline of our cognitive functioning.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>8.</CardNumber>

                        <CardTitle>Emotional Balance</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Emotional balance, means to be free of all the neurotic behavior that results from the existence of a tortured and traumatized ego. This is very hard to achieve fully, but meditation certainly is the way to cure such neurosis and unhealthy emotional states. As one’s consciousness is cleansed of emotionally soaked memories, not only does great freedom abound, but also great balance. As one’s responses then are not colored by the burdens one carries, but are instead true, direct and appropriate.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>9.</CardNumber>

                        <CardTitle>Increased Fertility</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>A study at the University of Western Australia found that women are more likely to conceive during periods when they are relaxed rather than stressed. A study at Trakya University, in Turkey, also found that stress reduces sperm count and motility, suggesting relaxation may also boost male fertility.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>10.</CardNumber>

                        <CardTitle>Relieves Irritable Bowel Syndrome</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>When patients suffering from irritable bowel syndrome began practising a relaxation meditation twice daily, their symptoms of bloating, diarrhoea and constipation improved significantly. The meditation was so effective the researchers at the State University of New York recommended it as an effective treatment.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>11.</CardNumber>

                        <CardTitle>11. Lowers Blood Pressure</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>A study at Harvard Medical School found that meditation lowered blood pressure by making the body less responsive to stress hormones, in a similar way to blood pressure-lowering medication. Meanwhile a British Medical Journal report found that patients trained how to relax had significantly lower blood pressure.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>12.</CardNumber>

                        <CardTitle>Anti-Inflammatory</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Stress leads to inflammation, a state linked to heart disease, arthritis, asthma and skin conditions such as psoriasis, say researchers at Emory University in the US. Relaxation can help prevent and treat such symptoms by switching off the stress response. In this way, one study at McGill University in Canada found that meditation clinically improved the symptoms of psoriasis.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>13.</CardNumber>

                        <CardTitle>Calmness</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>The simple difference between those who meditate and those who do not, is that for a meditative mind the thought occurs but is witnessed, while for an ordinary mind, the thought occurs and is the boss. So in both minds, an upsetting thought can occur, but for those who meditate it is just another thought, which is seen as such and is allowed to blossom and die, while in the ordinary mind the thought instigates a storm which rages on and on.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>
                </GridRow>

                <p className='text-center'>
                  <Link className='btn btn--primary mt-4 text-center' to='/session' title='Start your first session'>Start your session</Link> {/* for prodution use to='/labs/zentime/session' */}
                </p>
              </GridColumn>
            </GridRow>
          </GridContainer>
        </main>
      </div>
    );
  }
}
