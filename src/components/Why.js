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

                <h1 className='h3 mt-4 text-center'>13 Biggest benefits of meditation</h1>

                <p className='text-center'>Although the research on meditation isn’t as robust as nutrition or exercise, there is a reason why it’s been around for thousands of years. We’re just starting to get a better understanding of how beneficial it can be for many aspects of life, from disease and pain management, to sleep, to control of emotions. Here are 13 biggest benefits of meditation.</p>

                <GridRow>
                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>1.</CardNumber>

                        <CardTitle>Better Focus</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Meditation is a practice of focusing our attention and being aware of when it drifts. This improves our focus outside our meditation session.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>2.</CardNumber>

                        <CardTitle>More Creativity</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Study showed that people who practiced mindful meditation performed better on a task that asked them to come up with new ideas.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>3.</CardNumber>

                        <CardTitle>Increased Immunity</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Relaxation and mindful meditation boosted immunity, resistance to tumours and viruses and reduced the risk of breast cancer recurrence.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>4.</CardNumber>

                        <CardTitle>Better Memory</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>People who practiced mindful meditation were able to focus, block distractions, improve their rapid memory recall & increase their productivity.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>5.</CardNumber>

                        <CardTitle>Less Stress</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Mindful meditation has been shown to help people perform better under pressure, cope with situation, while feeling less stressed.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>6.</CardNumber>

                        <CardTitle>Less Anxiety</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Meditation helps us look at scary or upsetting thoughts, emotions and sensations rationally, with calmness, detachment and greater control.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>7.</CardNumber>

                        <CardTitle>More Gray Matter</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>More gray matter leads to emotional stability and heightened focus during daily life. Meditation also helps reduce the decline of cognitive functioning.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>8.</CardNumber>

                        <CardTitle>Emotional Balance</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Meditation help deal with unhealthy emotional states, traumas, neurosis and neurotic behavior that results from a tortured and traumatized ego.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>9.</CardNumber>

                        <CardTitle>Increased Fertility</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Women are more likely to conceive when they are relaxed. Relaxation lowers stress, that impacts sperm count and motility, and boosts male fertility.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>10.</CardNumber>

                        <CardTitle>Relieves Irritable Bowel Syndrome</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>When patients suffering from irritable bowel syndrome began practising meditation 2x a day, symptoms of bloating, diarrhoea and constipation improved.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>11.</CardNumber>

                        <CardTitle>Lowers Blood Pressure</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>A study at Harvard Medical School found that meditation lowered blood pressure by making the body less responsive to stress hormones.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>12.</CardNumber>

                        <CardTitle>Anti-Inflammatory</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Stress leads to inflammation, a state linked to heart disease, arthritis, asthma and psoriasis. Relaxation can help by switching off the stress response.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>13.</CardNumber>

                        <CardTitle>Calmness</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>In meditative mind, the thought is witnessed, while in an ordinary mind, the thought is the boss. In meditative mind, upsetting thought is just another thought.</CardDescription>
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
