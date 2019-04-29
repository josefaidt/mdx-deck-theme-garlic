import React from 'react'
import styled from '@emotion/styled'
import { opacity } from '../util'
import colors from '../colors'

const StyledProgress = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  margin: 10px 0;
  width: 100%;
  justify-content: center;
  div {
    height: ${props => props.barHeight};
    position: relative;
    width: 60vw;
    background: ${opacity(colors.default, 30)};
    filter: brightness(120%);
    span {
      display: block;
      height: ${props => props.barHeight};
      width: ${props => (props.percent ? `${props.percent}%` : '0%')};
      background-color: ${colors.red};
      position: relative;
      overflow: hidden;
    }
  }
`

const ProgressBar = props => (
  <StyledProgress barHeight={props.barHeight} percent={props.percent}>
    <div>
      <span />
    </div>
  </StyledProgress>
)

ProgressBar.defaultProps = {
  barHeight: '0.8rem',
}

export default ProgressBar
