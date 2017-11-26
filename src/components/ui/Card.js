// Card
import styled, { css } from 'styled-components'

import { remy, transition } from './../common/helpers'
import { transitionDuration, transitionTiming } from './../common/variables'

export const Card = styled.article`
  position: relative;
  width: 100%;
  min-height: ${remy(380)};
  cursor: pointer;
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

export const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all ${transitionDuration} ${transitionTiming};
`

export const CardFront = styled.div`
  ${CardSide};

  text-align: center;
  transition: all ${transitionDuration} ${transitionTiming};
`

export const CardBack = styled.div`
  ${CardSide};

  transform: rotateY(-180deg);
`

export const CardNumber = styled.span`
  display: block;
  font-size: ${remy(22)};
`

export const CardTitle = styled.h2`
  font-size: ${remy(22)};
`

export const CardDescription = styled.span`
  font-size: ${remy(16)};
`
