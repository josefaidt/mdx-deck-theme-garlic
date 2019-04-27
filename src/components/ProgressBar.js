import React from 'react'
import styled from '@emotion/styled'
import { opacity } from '../util'
import colors from '../colors'

const StyledProgress = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  margin: 13px 0;
  width: 100%;
  justify-content: center;
  div {
    height: 1.5rem; /* Can be anything */
    position: relative;
    width: 60vw;
    background: ${opacity(colors.default, 30)};
    filter: brightness(120%);
    span {
      display: block;
      height: 1.5rem;
      width: ${props => (props.percent ? `${props.percent}%` : '0%')};
      background-color: ${colors.red};
      position: relative;
      overflow: hidden;
    }
  }
`

const ProgressBar = ({ percent }) => (
  <StyledProgress percent={percent}>
    <div>
      <span />
    </div>
  </StyledProgress>
)

export default ProgressBar
