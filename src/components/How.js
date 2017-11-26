import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import { Card, CardSide, CardFront, CardBack, CardNumber, CardTitle, CardDescription } from './ui/Card'
import { GridContainer, GridRow, GridColumn } from './ui/Grid'

@inject('store')
@observer
export default class How extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store
  }

  flipCard(e) {
    e.currentTarget.classList.toggle('flipped')
  }

  render() {
    const store = this.store

    return(
      <div className='page how'>
        <main>
          <GridContainer>
            <GridRow justify='center'>
              <GridColumn md='8'>
                <div className='icon icon--water-drop mt-5 mb-5'></div>

                <h1 className='h3 mt-4 text-center'>How to Do Meditation</h1>
                {/* How to Do Mindful Meditation */}

                <p className='text-center'>Meditation helps increase focus, stimulate creativity and decrease stress. These simple steps will help you get started.</p>

                <GridRow>
                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>1.</CardNumber>

                        <CardTitle>Select a location</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Choose a comfortable place where you will not be interrupted or have distractions.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>2.</CardNumber>

                        <CardTitle>Get comfortable</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Wear comfortable and loose clothing. You can also use a blanket, pillow or cushion if you want.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>3.</CardNumber>

                        <CardTitle>Set aside some time</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Be easy on yourself. It is okay to start with a 5-10 minute meditation and work up from there.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>4.</CardNumber>

                        <CardTitle>Find comfortable posture</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>You can sit on the floor or in a chair, stand, walk, or lie down. Play around with different positions.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>5.</CardNumber>

                        <CardTitle>Settle your mind</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Take a moment to identify the thoughts and feelings you are having. Then switch your focus to your physical position.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>6.</CardNumber>

                        <CardTitle>Take some deep breaths</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>Bring your awareness to your breath. Notice each inhalation and exhalation. Taking deep breaths helps relax your mind and body.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>7.</CardNumber>

                        <CardTitle>Focus on the present</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>When you find your mind wandering, return to your body, to your breath and to the present moment.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' lg='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>8.</CardNumber>

                        <CardTitle>Let your thoughts and emotions go</CardTitle>
                      </CardFront>

                      <CardBack>
                        <CardDescription>When you notice thoughts or emotions coming up, choose not to focus on them. Let them come, let them go, without judgment.</CardDescription>
                      </CardBack>
                    </Card>
                  </GridColumn>
                </GridRow>

                <p className='text-center'>
                  <Link className='btn btn--primary mt-4' to='/session' title='Start your first session'>Start your session</Link> {/* for prodution use to='/labs/zentime/session' */}
                </p>
              </GridColumn>
            </GridRow>
          </GridContainer>
        </main>
      </div>
    )
  }
}
