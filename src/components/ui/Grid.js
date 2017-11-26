// Grid
//source: https://medium.com/styled-components/how-to-create-responsive-ui-with-styled-components-c6b71a3ce172

import styled from 'styled-components'

import { remy } from './../common/helpers'

const getWidth = (value) => {
  if (!value) return

  let width = value / 12 * 100
  return `width: ${width}%;`
}

const getFlex = (value) => {
  if (!value) return

  let flex = value / 12 * 100
  return `flex: 0 0 ${flex}%;`
}

export const GridContainer = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  @media (min-width: 576px) {
    max-width: ${remy(540)};
  }

  @media (min-width: 768px) {
    max-width: ${remy(720)};
  }

  @media (min-width: 992px) {
    max-width: ${remy(9600)};
  }

  @media (min-width: 1200px) {
    max-width: ${remy(1140)};
  }
`

export const GridRow = styled.div`
  margin-right: ${remy(-15)};
  margin-left: ${remy(-15)};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justify};
`

export const GridColumn = styled.div`
  padding-right: ${remy(15)};
  padding-left: ${remy(15)};

  ${({ xs }) => (xs ? getFlex(xs) : 'flex: 0 0 100%')};
  ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};

  @media (min-width: 576px) {
    ${({ sm }) => sm && getFlex(sm)};
    ${({ sm }) => sm && getWidth(sm)};
  }

  @media (min-width: 768px) {
    ${({ md }) => md && getFlex(md)};
    ${({ md }) => md && getWidth(md)};
  }

  @media (min-width: 992px) {
    ${({ lg }) => lg && getFlex(lg)};
    ${({ lg }) => lg && getWidth(lg)};
  }

  @media (min-width: 1200px) {
    ${({ xl }) => xl && getFlex(xl)};
    ${({ xl }) => xl && getWidth(xl)};
  }
`
