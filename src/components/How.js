import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import styled, { css } from 'styled-components'

import { remy, transition } from './common/helpers'
import { transitionDuration, transitionTiming } from './common/variables'
import { GridContainer, GridRow, GridColumn } from './ui/Grid'

const Card = styled.article`
  position: relative;
  width: 100%;
  min-height: ${remy(320)};
  perspective: 1000px;
  transition: ${transition()};

  &:focus,
  &:hover {
    box-shadow: 0 0 40px rgba(0,0,0,.15);
  }

  &.flipped {
    & > div:first-of-type {
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type {
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`

const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  backface-visibility: hidden;
  transition: all ${transitionDuration} ${transitionTiming};
`

const CardFront = styled.div`
  ${CardSide};

  transition: all ${transitionDuration} ${transitionTiming};
`

const CardBack = styled.div`
  ${CardSide};

  transform: perspective(1000px) rotateY(180deg);
  transform: rotateY(-180deg);
`

const CardNumber = styled.span`
  display: block;
  font-size: ${remy(20)};
`

const CardTitle = styled.h2`
  font-size: ${remy(20)};
`

@inject('store')
@observer
export default class How extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store
  }

  flipCard(e) {
    e.currentTarget.classList.toggle('flipped')
    console.log(e.currentTarget)
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
                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>1.</CardNumber>

                        <CardTitle>Select a location</CardTitle>
                      </CardFront>

                      <CardBack>
                        Think about a place where you will not be interrupted or have distractions. It can be a quiet part of your home or next to a tree outside. Choose a place that feels peaceful and where you can detach from the rush of everyday life.
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>2.</CardNumber>

                        <CardTitle>Get comfortable</CardTitle>
                      </CardFront>

                      <CardBack>
                        In order to make meditation easier for you, it’s important to be comfortable. Pay attention to the room temperature to make sure it’s adequate. You may want to have a blanket around you or near you as your body temperature may drop. Pillow or cushion near you can also make sitting more comfortable. Finally, wear comfortable clothing that won’t bother you or distract you.
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>3.</CardNumber>

                        <CardTitle>Set aside some time</CardTitle>
                      </CardFront>

                      <CardBack>
                        Be easy on yourself. It is okay if you want to start with just a 5 to 10 minute meditation and work up from there. Don’t choose to start meditating for an hour as this can seem overwhelming. Instead, choose small increments of time to commit to, and if you want, increase the time.
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>4.</CardNumber>

                        <CardTitle>Find comfortable posture</CardTitle>
                      </CardFront>

                      <CardBack>
                        There is not just one way to meditate. You can sit on the floor or in a chair, stand, walk, or lie down. Play around with different positions. You can also cushion or pillow to find position what feels most natural to you. If you decide to lay down, make sure you don’t fall asleep! It’s quite common to begin meditation and then float off into dreamland.
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>5.</CardNumber>

                        <CardTitle>Settle your mind</CardTitle>
                      </CardFront>

                      <CardBack>
                        It may take you some time to settle in and begin to detach from all the things going on in your life. Especially if you’ve had a stressful day, you may find yourself thinking about what happened or about things that need to happen in the future. You may feel your emotions stirring. All of this is okay. Notice that your mind is dancing, and let it dance for a bit as you settle in.

                        Keep in mind that it is okay if you feel a little strange about meditating. Just take a moment to identify the feelings you are having and then switch your focus to your physical position. Try to make yourself as comfortable as possible.
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>6.</CardNumber>

                        <CardTitle>Take some deep breaths</CardTitle>
                      </CardFront>

                      <CardBack>
                        Bring your awareness to your breath, noticing the inhalations and exhalations of each breath. Feel how each breath flows in and out of your body, filling your lungs and then releasing through your throat and your mouth. Begin to lengthen and deepen each breath. Taking deep breaths helps settle and relax the mind and the body. It is a common practice to observe your breath for the entire length of the meditation.

                        Any time you get distracted by noises, thoughts, or anything, go back to observing your breath, inhalations and exhalations. Any time you experience unpleasant thoughts or emotions, return your focus to your breathing. Understand that it's common to get distracted by thoughts about the day. Don't beat yourself up for this. Remember that meditation is not a performance.
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>7.</CardNumber>

                        <CardTitle>Focus on the present</CardTitle>
                      </CardFront>

                      <CardBack>
                        One of the goals of mindfulness practices is to help you focus on the present moment. It’s easy for your mind and emotions to jump to the future or back into the past. However, your body is always in the present moment. This is why many mindfulness practices are body-driven. If you find your mind wandering often, return to your body, to your breath. Try to focus only on the present moment.
                      </CardBack>
                    </Card>
                  </GridColumn>

                  <GridColumn sm='6' md='4'>
                    <Card onClick={this.flipCard.bind(this)}>
                      <CardFront>
                        <CardNumber>8.</CardNumber>

                        <CardTitle>Realize that you are not your thoughts</CardTitle>
                      </CardFront>

                      <CardBack>
                        As you meditate, remind yourself that you have control over what thoughts and emotions you choose to engage. When you notice thoughts or emotions coming up that you do not wish to engage, choose not to put your focus onto them and let them go. Also, don’t beat yourself up when you notice you get caught up in mental chatter. Practice letting go of these mental experiences without judgment.
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
